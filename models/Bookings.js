const mongoose = require('mongoose');




const bookingsSchema = new mongoose.Schema({
    movieTitle: {
        type: String
    },
    date: {

    },
    time: {

    },
    movieId: {

    },
    sits: [
        {
            available: {
                type: Boolean,
                default: false
            },
            sit: { type: Number }
        }],
    currentUser: {

    }




})

module.exports = mongoose.model('Bookings', bookingsSchema);