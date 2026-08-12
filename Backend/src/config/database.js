const mongoose = require("mongoose")



async function connectToDB() {

    try {
        await mongoose.connect(process.env.MONGO_URI, {
            serverSelectionTimeoutMS: 20000,
            socketTimeoutMS: 45000,
            bufferCommands: true,
        });
        mongoose.set("bufferTimeoutMS", 20000);
        console.log("Connected to Database");
    } catch (err) {
        console.log(err)
    }
}

module.exports = connectToDB