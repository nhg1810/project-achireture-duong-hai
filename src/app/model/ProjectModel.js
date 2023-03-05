const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Project = new Schema({
    _id: Schema.Types.ObjectId,
    nameProject: { type: String },
    descriptionProject: { type: String },
    cateProject: {
        type: Schema.Types.ObjectId,
        ref: 'CateProject'
    },
    imageProject: [{
        urlImage: String,
        idImage: String
    }],
    status: { type: String }
}, { timestamps: true })
module.exports = mongoose.model('Project', Project)