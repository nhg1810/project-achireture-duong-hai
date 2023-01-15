const mongoose = require('mongoose');

mongoose.set('strictQuery', true);
async function connect() {
    try {
        await mongoose.connect('mongodb://localhost:27017/test-nodejs');
        console.log("connect ok !!!");
    } catch (error) {
        console.log("connect failure !!!");
    }
}
module.exports = { connect };