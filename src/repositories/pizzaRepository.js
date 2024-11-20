// src/repositories/pizzaRepository.js
const Pizza = require('../models/pizza');

const create = async (pizzaDetails) => {
    const pizza = new Pizza(pizzaDetails);
    return await pizza.save();
};

const findAllPremade = async () => {
    return await Pizza.find({ isPremade: true });
};

// Agregamos el nuevo método aquí
const insertMany = async (pizzas) => {
    return await Pizza.insertMany(pizzas);
};

const findById = async (id) => {
    return await Pizza.findById(id);
};

const findByName = async (name) => {
    return await Pizza.findOne({ name });
};

module.exports = {
    create,
    findById,
    findAllPremade,
    insertMany,
    findByName
};
