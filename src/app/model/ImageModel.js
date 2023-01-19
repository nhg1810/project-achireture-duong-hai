const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Image = new Schema({
    _id: Schema.Types.ObjectId,
    url: { type: String },
    alt: { type: String },
    projectType: {
        type: Schema.Types.ObjectId,
        ref: 'Project'
    },
    createAt: {
        type: Date,
        default: Date.now
    },
    updateAt: {
        type: Date,
        default: Date.now
    }
})
module.exports = mongoose.model('Image', Image)