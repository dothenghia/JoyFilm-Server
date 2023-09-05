//------ Imports the Express and serverless-http libraries
const express = require('express')
const serverless = require('serverless-http')
const cors = require('cors');
const router = require('./router');

//------ Load environment variables from .env file
require('dotenv').config();

const app = express()

app.use(cors());

app.use(function (req, res, next) {
    const allowedHosts = ['joyfilm-server.netlify.app', 'localhost:8888'];
    const host = req.headers.host;
    console.log(`host: ${host}`)

    if (allowedHosts.includes(host)) {
        next();
    }
    else {
        return res.status(405).send('Host Not Allowed');
    }
});



//------ Path must route to lambda !
// The router is mounted to the app using app.use() with the path '/.netlify/functions/actions'. 
// This means that all requests to that path will be handled by the router.
app.use('/.netlify/functions/actions', router)

//------ The handler property is set to serverless(app), which returns a function that can be deployed as a serverless function.
module.exports.handler = serverless(app)