// src/repositories/orderRepository.js
const Order = require('../models/order');

const create = async (orderDetails) => {
    const order = new Order(orderDetails);
    return await order.save();
};

module.exports = {
    create
};
