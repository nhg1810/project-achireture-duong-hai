const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserPage = new Schema({
    _id: Schema.Types.ObjectId,
    home: [{
        name: { type: String },
        blog: {
            title: { type: String },
            content: { type: String }
        },
        socialMedia: {
            facebook: { type: String },
            instagram: { type: String },
            youtube: { type: String },
            email: { type: String }
        },
        images: [
            {
                idImage: { type: String },
                thumbnail: { type: String },
                zIndex: { type: String },
            }
        ]
    }],
    project: {
        title: { type: String },
        content: { type: String }
    },
    socialMedia: {
        facebook: { type: String },
        youtube: { type: String },
        behance: { type: String },
        instagram: { type: String },
        email: { type: String },
        phone: { type: String },
        sologanComoany: { type: String }
    }
})
module.exports = mongoose.model('UserPage', UserPage)