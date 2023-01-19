const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Account = new Schema(
    {
        _id: Schema.Types.ObjectId,
        name: { type: String },
        birth: { type: Date },
        email: { type: String },
        role: {
            type: ObjectId,
            ref: 'Role'
        },
        address: { type: String },
        contact: { type: String },
        byMySelf: { type: String },
        imageAvata: { type: String }
    }
)
module.exports = mongoose.model('Account', Account)