let mongoose = require('mongoose');
require('dotenv').config()

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.DB_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            dbName: 'movieDB' // Thay đổi tên database thành "movieDB"
        });

        console.log(`MongoDB Connected: ${conn.connection.host}`);

    } catch (error) {
        console.error(error.message);
        process.exit(1);
    }
}

module.exports = connectDB;