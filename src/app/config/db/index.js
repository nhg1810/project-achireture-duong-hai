const mongoose = require('mongoose');

mongoose.set('strictQuery', true);
async function connect() {
    try {
        await mongoose.connect('mongodb+srv://nhduong20it7:ULD0Rrp7PkT3QsCp@cluster0.5eke8u3.mongodb.net/?retryWrites=true&w=majority');
        console.log("connect ok !!!");
    } catch (error) {
        console.log("connect failure !!!");
    }
}
module.exports = { connect };