// src/config/express.js
const express = require('express');

module.exports = (app) => {
    app.use(express.json());
    // Aquí puedes añadir más middleware global como express.urlencoded, cors, etc.
};
