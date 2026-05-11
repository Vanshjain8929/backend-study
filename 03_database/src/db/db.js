const mongoose = require('mongoose');


async function connectDB(){

    await mongoose.connect(`mongodb+srv://uesr-1:${process.env.DB_PASSWORD}@backend-study.6fi0mdb.mongodb.net/halley`);
    console.log("Connected to DB");
}

module.exports = connectDB;