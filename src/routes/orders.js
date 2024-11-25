// src/routes/orders.js
const express = require('express');
const router = express.Router();
const orderController = require('../controllers/orderController');

// Crear un nuevo pedido
router.post('/', orderController.createOrder);

module.exports = router;
