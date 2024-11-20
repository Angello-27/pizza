// src/use_cases/orderUseCase.js
const orderService = require('../services/orderService');
const pizzaRepository = require('../repositories/pizzaRepository');

exports.resolvePizzaNamesToIds = async (pizzas) => {
    const pizzasWithIds = await Promise.all(pizzas.map(async pizza => {
        const foundPizza = await pizzaRepository.findByName(pizza.name);
        return {
            pizza: foundPizza._id,
            quantity: pizza.quantity
        };
    }));
    return pizzasWithIds;
};

exports.createOrder = async (orderDetails) => {
    // Lógica existente para crear un pedido
    return orderService.createOrder(orderDetails);
};
