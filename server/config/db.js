const mongoose = require ('mongoose');

const connectDB = async() => {
    const conn = await mongoose.connect("mongodb+srv://frenchpro:91869740Za@frenchpro.8eiuu.mongodb.net/audioDB?retryWrites=true&w=majority", {
        useUnifiedTopology: true,
    });
    console.log(`MongoDB холбодлоо : ${conn.connection.host}`);
}

module.exports = connectDB;