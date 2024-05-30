const express = require('express');
const router = express.Router();
const Booking = require('../models/Booking');

// Створити нове бронювання
router.post('/book', async (req, res) => {
    const { user, hotel, checkInDate, checkOutDate } = req.body;
    const newBooking = new Booking({ user, hotel, checkInDate, checkOutDate });
    try {
        await newBooking.save();
        res.status(201).send('Booking created successfully');
    } catch (error) {
        res.status(400).send(error.message);
    }
});

// Отримати всі бронювання для користувача
router.get('/user/:userId', async (req, res) => {
    try {
        const bookings = await Booking.find({ user: req.params.userId }).populate('hotel');
        res.json(bookings);
    } catch (error) {
        res.status(500).send(error.message);
    }
});

module.exports = router;