const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Company = new Schema({
    _id: Schema.Types.ObjectId,
    nameCompany: { type: String },
    addressCompany: { type: String },
    emailCompany: { type: String },
    phoneCompany: { type: String },
    description: { type: String },
    imageReview: [{ type: String }]
})
module.exports = mongoose.model('Company', Company)