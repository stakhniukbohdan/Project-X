const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 3000;

// Підключення до MongoDB
mongoose.connect('mongodb://localhost:27017/hotelBookingDB', { useNewUrlParser: true, useUnifiedTopology: true });

app.use(cors());
app.use(bodyParser.json());

// Підключення маршрутів
app.use('/users', require('./routes/users'));
app.use('/hotels', require('./routes/hotels'));
app.use('/bookings', require('./routes/bookings'));

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});