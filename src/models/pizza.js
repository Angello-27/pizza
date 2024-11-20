// src/models/pizza.js
const mongoose = require('mongoose');

const pizzaSchema = new mongoose.Schema({
    name: { type: String, required: true },
    toppings: [{ type: String, required: true }],
    size: { type: String, required: true },
    price: { type: Number, required: true },  // Asegúrate de que este campo exista
    isPremade: { type: Boolean, default: false }
});

module.exports = mongoose.model('Pizza', pizzaSchema);
