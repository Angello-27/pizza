// src/services/orderService.js
const orderRepository = require('../repositories/orderRepository');
const pizzaRepository = require('../repositories/pizzaRepository');
const { getDayOfWeek } = require('../utils/dateHelpers');

const createOrder = async (orderDetails) => {
    const dayOfWeek = getDayOfWeek();

    // Calcular el total inicial basado en los precios de las pizzas
    let totalPrice = 0;
    for (const item of orderDetails.pizzas) {
        const pizza = await pizzaRepository.findById(item.pizza);
        if (pizza) {
            totalPrice += pizza.price * item.quantity;
        }
    }

    // Aplicar promociones según el día de la semana
    if (dayOfWeek === 'Tuesday' || dayOfWeek === 'Wednesday') {
        totalPrice /= 2;  // Aplicar promoción 2x1
        orderDetails.promotionApplied = '2x1';
    } else if (dayOfWeek === 'Thursday') {
        orderDetails.promotionApplied = 'Free Delivery';  // Si decides aplicar alguna lógica relacionada
    }

    // Asignar el precio total calculado a los detalles del pedido
    orderDetails.totalPrice = totalPrice;

    return await orderRepository.create(orderDetails);
};

module.exports = {
    createOrder
};
