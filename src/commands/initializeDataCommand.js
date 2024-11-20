// src/commands/initializeDataCommand.js
const pizzaRepository = require('../repositories/pizzaRepository');

/**
 * Clase que encapsula la operación de inicialización de datos.
 * Utiliza el patrón Command para organizar el proceso de inserción de datos de una manera desacoplada y mantenible.
 * Este patrón permite encapsular todas las operaciones necesarias para crear objetos en una operación única,
 * facilitando la extensión y el mantenimiento del código sin alterar el código existente del cliente.
 */
class InitializeDataCommand {
    async execute() {
        const premadePizzas = [
            { name: "Margherita", toppings: ["cheese", "tomatoes", "basil"], size: "medium", isPremade: true, price: 12.99 },
            { name: "Pepperoni", toppings: ["cheese", "pepperoni"], size: "large", isPremade: true, price: 15.99 }
        ];

        try {
            await pizzaRepository.insertMany(premadePizzas);
            console.log('Pizzas preestablecidas creadas exitosamente.');
        } catch (error) {
            console.error('Error al crear pizzas preestablecidas:', error.message);
            throw error;
        }
    }
}

module.exports = InitializeDataCommand;
