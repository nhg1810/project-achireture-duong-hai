const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;


const Image = new Schema({
    _id: Schema.Types.ObjectId,
    url: { type: String },
    alt: { type: String },
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