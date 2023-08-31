const express = require('express');
const connectDB = require('./db');
const serverless = require("serverless-http");

// Create an instance of the Express app
const app = express();
//body parser
app.use(express.json());


//connect to database
connectDB();


// routes
const router = require('./routes/route')
app.use('/movie', router)


// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

// Export the app and the serverless function
module.exports = app;
module.exports.handler = serverless(app);