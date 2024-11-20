// Importa las dependencias necesarias
require('dotenv').config();
const express = require('express');
const setupExpress = require('./config/express');
const connectDB = require('./config/database');

// Conecta a la base de datos solo si no es un entorno de prueba
if (process.env.NODE_ENV !== 'test') {
    connectDB();
}

// Crea una instancia de la aplicación Express
const app = express();

// Aplica las configuraciones globales de Express desde el archivo externo
setupExpress(app);

// Importa las rutas
const pizzaRoutes = require('./routes/pizzas');
const orderRoutes = require('./routes/orders');

// Configura las rutas de la aplicación
app.use('/api/pizzas', pizzaRoutes);
app.use('/api/orders', orderRoutes);

// Exporta la app sin llamar a listen para pruebas
module.exports = app;

// Ejecuta el servidor solo si no se está ejecutando en entorno de prueba
if (process.env.NODE_ENV !== 'test') {
    const port = process.env.PORT || 3000;
    app.listen(port, () => {
        console.log(`Server running on http://localhost:${port}`);
    });
}
