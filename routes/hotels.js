const express = require('express');
const router = express.Router();
const Hotel = require('../models/Hotel');

// Додати новий готель
router.post('/add', async (req, res) => {
    const { name, location, rooms, price } = req.body;
    const newHotel = new Hotel({ name, location, rooms, price });
    try {
        await newHotel.save();
        res.status(201).send('Hotel added successfully');
    } catch (error) {
        res.status(400).send(error.message);
    }
});

// Отримати список усіх готелів
router.get('/', async (req, res) => {
    try {
        const hotels = await Hotel.find();
        res.json(hotels);
    } catch (error) {
        res.status(500).send(error.message);
    }
});

module.exports = router;