const Bookings = require('../models/Bookings');

const route = require('express').Router();
const verify = require('./auth');

route.post('/', verify ,async (req, res) => {
    const bookings = new Bookings({
        movieTitle: req.body.movieTitle,
        movieId:req.body.movieId,
        date: req.body.date,
        time: req.body.time,
        sits: req.body.sits,
        currentUser: req.body.currentUser
    });
    
    try {
        const newBooking = await bookings.save();
        res.send('Booking successful').sendStatus(200);

    } catch (err) {
        res.send(err);
    }
})
route.get('/:query',async (req, res) => {
    const id = req.params.query;
    
    try {
        const booking = await Bookings.find({movieId:id});
        res.json(booking);
    } catch (err) {
        res.send(err);
    }
})

module.exports = route;