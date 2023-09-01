const mongoose = require('mongoose');

//------ Connect to MongoDB
const connectToDB = async () => {
    try {
        mongoose.set('strictQuery', true);
        mongoose.connect(process.env.DB_URL)
            .then(() => console.log("mongoose Connected!"));
    } catch (error) {
        console.log(error);
        console.log("mongoose Error");
    }
}

module.exports = connectToDB;