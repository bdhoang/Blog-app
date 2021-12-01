const mongooese = require('mongoose')

const UserSchema = new mongooese.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    profilePic: {
        type: String,
        default: '',
    },

}, { timestamps: true }
);

module.exports = mongooese.model('User', UserSchema);