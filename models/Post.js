const mongooese = require('mongoose')

const PostSchema = new mongooese.Schema(
    {
        title: {
            type: String,
            required: true,
            unique: true
        },
        desc: {
            type: String,
            required: true
        },
        photo: {
            type: String,
            required: false
        },
        username: {
            type: String,
            required: true
        },
        categories: {
            type: Array,
            required: false
        }
    }, { timestamps: true }
);

module.exports = mongooese.model('Post', PostSchema);