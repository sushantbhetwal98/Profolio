require('dotenv').config();
const express = require('express');

// database
const dbConnection = require('./db');
dbConnection();

// routesImport
const authRoute = require("./routes/auth")
const professionalRoute = require('./routes/professional')


// express app
const app = express();

// middlewares
app.use(express.json());
app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

// routes
app.use('/api/auth', authRoute)
app.use('/api/professional', professionalRoute)


app.listen(process.env.PORT, () => {
    console.log("Server Started")
})