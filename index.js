const express = require('express');
const app = express();
require('dotenv/config');
const mongoose = require('mongoose');
const cors = require('cors');


const bookingsRoute = require('./routes/getBookings')

// Connect to DB
require('dotenv/config');
mongoose.connect(
    process.env.DB_CONNECTION,
    { useNewUrlParser: true,useUnifiedTopology: true },
    () => console.log('DB connection established'),
);

// Middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true})); 


app.use('/bookings',bookingsRoute)



app.listen(process.env.PORT || 8080,() => console.log('Server listening on port 8080'));
