// src/use_cases/pizzaUseCase.js
const pizzaService = require('../services/pizzaService');

const customizePizza = async (pizzaDetails) => {
    // Aquí podrías añadir lógica de validación o manipulación antes de la creación
    return await pizzaService.customizePizza(pizzaDetails);
};

const getPremadePizzas = async () => {
    // Cualquier lógica adicional antes de obtener las pizzas
    return await pizzaService.getPremadePizzas();
};

module.exports = {
    customizePizza,
    getPremadePizzas
};
