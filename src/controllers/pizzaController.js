// src/controllers/pizzaController.js
const pizzaUseCase = require('../use_cases/pizzaUseCase');
const InitializeDataCommand = require('../commands/initializeDataCommand');

exports.initializePizzas = async (req, res) => {
    const command = new InitializeDataCommand();

    try {
        await command.execute();
        res.status(201).send('Pizzas preestablecidas creadas exitosamente.');
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.customizePizza = async (req, res) => {
    try {
        const pizzaDetails = req.body;
        const pizza = await pizzaUseCase.customizePizza(pizzaDetails);
        res.status(201).json(pizza);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.getPremadePizzas = async (req, res) => {
    try {
        const pizzas = await pizzaUseCase.getPremadePizzas();
        res.status(200).json(pizzas);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
