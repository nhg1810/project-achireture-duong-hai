const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const Project = new Schema({
    _id: Schema.Types.ObjectId,
    nameProject: { type: String },
    descriptionProject: { type: String },
    cateProject: {
        idCateProject: String,
        nameCateProject: String
    },
    imageProject: [{
        urlImage: String,
        idImage: String
    }]
}, { timestamps: true })
module.exports = mongoose.model('Project', Project)