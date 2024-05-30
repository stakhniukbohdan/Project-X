const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const bookingSchema = new Schema({
    user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    hotel: { type: Schema.Types.ObjectId, ref: 'Hotel', required: true },
    checkInDate: { type: Date, required: true },
    checkOutDate: { type: Date, required: true },
});

module.exports = mongoose.model('Booking', bookingSchema);