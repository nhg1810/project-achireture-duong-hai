const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CateProject = new Schema({
    _id: Schema.Types.ObjectId,
    nameProject: {type: String},
    descriptionProject: {type: String},
    imageBanner: {type: String}
}, {timestamps: true})
module.exports = mongoose.model('CateProject', CateProject)