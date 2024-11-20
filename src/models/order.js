// src/models/order.js
const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
    pizzas: [{
        pizza: { type: mongoose.Schema.Types.ObjectId, ref: 'Pizza' },
        quantity: { type: Number, required: true }
    }],
    totalPrice: { type: Number, required: true },
    deliveryAddress: { type: String, required: true },
    orderDate: { type: Date, default: Date.now },
    promotionApplied: { type: String }
});

module.exports = mongoose.model('Order', orderSchema);
