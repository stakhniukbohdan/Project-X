const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const hotelSchema = new Schema({
    name: { type: String, required: true },
    location: { type: String, required: true },
    rooms: { type: Number, required: true },
    price: { type: Number, required: true },
});

module.exports = mongoose.model('Hotel', hotelSchema);