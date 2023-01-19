const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Project = new Schema({
    _id: Schema.Types.ObjectId,
    nameProject: {type: String}
})
module.exports = mongoose.model('Project', Project)