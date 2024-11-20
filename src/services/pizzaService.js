// src/services/pizzaService.js
const pizzaRepository = require('../repositories/pizzaRepository');

const customizePizza = async (pizzaDetails) => {
    return await pizzaRepository.create(pizzaDetails);
};

const getPremadePizzas = async () => {
    return await pizzaRepository.findAllPremade();
};

module.exports = {
    customizePizza,
    getPremadePizzas
};
