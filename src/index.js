const express = require('express');
const connectDB = require('./db');

// express
const app = express();
//body parser
app.use(express.json());


//connect to database
connectDB();


// routes
const router = require('./route')
app.use('/movie', router)


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));