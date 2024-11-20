// src/controllers/orderController.js
const orderUseCase = require('../use_cases/orderUseCase');

exports.createOrder = async (req, res) => {
    try {
        const { pizzas, deliveryAddress } = req.body;
        // Convertir nombres de pizza a IDs
        const pizzasWithIds = await orderUseCase.resolvePizzaNamesToIds(pizzas);
        const orderDetails = {
            pizzas: pizzasWithIds,
            deliveryAddress
        };
        const order = await orderUseCase.createOrder(orderDetails);
        res.status(201).json(order);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
