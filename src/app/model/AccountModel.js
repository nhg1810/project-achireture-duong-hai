const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Account = new Schema(
    {
        _id: Schema.Types.ObjectId,
        name: { type: String },
        birth: { type: Date },
        email: { type: String },
        role: {
            type:  Schema.Types.ObjectId,
            ref: 'Role'
        },
        userName: { type: String },
        passWord: { type: String },
        address: { type: String },
        contact: { type: String },
        byMySelf: { type: String },
        imageAvata: { type: String }
    }
)
module.exports = mongoose.model('Account', Account)