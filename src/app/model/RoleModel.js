const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Role = new Schema({
    _id: Schema.Types.ObjectId,
    nameRole: { type: String },
    descriptionRole: { type: String },
    company: {
        type: ObjectId,
        ref: 'Company'
    }
})
module.exports = mongoose.model('Role', Role)