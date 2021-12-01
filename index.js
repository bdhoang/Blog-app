const express = require('express')
const app = express()
const dotenv = require('dotenv')
const mongoose = require('mongoose')
const authRoute = require('./routes/auth')
const userRoute = require('./routes/users')
const postRoute = require('./routes/posts')
const multer = require('multer')
const path = require('path')

dotenv.config()
app.use(express.json())
app.use('/images', express.static(path.join(__dirname, '/images')))
// Serve static files from the React frontend app
app.use(express.static(path.join(__dirname, 'client/build')))
// Anything that doesn't match the above, send back index.html
mongoose
    .connect(process.env.MONGO_URL)
    .then(console.log('connected to mgdb'))
    .catch((err) => console.log(err))

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'images')
    },
    filename: (req, file, cb) => {
        cb(null, req.body.name)
    }
}
)

const upload = multer({ storage: storage })
app.post('/api/upload', upload.single('file'), (req, res) => {
    res.status(200).json('file has been uploaded')
})

app.use("/api/auth", authRoute)
app.use("/api/users", userRoute)
app.use("/api/posts", postRoute)
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname + '/client/build/index.html'))
})
const port = process.env.PORT || 3000
const host = '0.0.0.0'
app.listen(port, host, () => {
    console.log(`server is running in port ${port}`)
})