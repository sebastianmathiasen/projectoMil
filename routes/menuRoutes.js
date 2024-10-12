// routes/menuRoutes.js

const express = require('express');
const router = express.Router();
const Menu = require('../models/Menu');

// Crear un nuevo ítem en el menú
router.post('/menu', async (req, res) => {
    try {
        const newItem = new Menu(req.body);
        const savedItem = await newItem.save();
        res.status(201).json(savedItem);
    } catch (err) {
        res.status(500).json({ message: 'Error al crear el menú', error: err });
    }
});

// Obtener todos los ítems del menú
router.get('/menu', async (req, res) => {
    try {
        const menu = await Menu.find();
        res.status(200).json(menu);
    } catch (err) {
        res.status(500).json({ message: 'Error al obtener el menú', error: err });
    }
});

module.exports = router;
