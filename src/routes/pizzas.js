// src/routes/pizzas.js
const express = require('express');
const router = express.Router();
const pizzaController = require('../controllers/pizzaController');

// Obtener pizzas preestablecidas
router.get('/premade', pizzaController.getPremadePizzas);

// Personalizar y crear una nueva pizza
router.post('/customize', pizzaController.customizePizza);

router.post('/initialize', pizzaController.initializePizzas);

module.exports = router;
