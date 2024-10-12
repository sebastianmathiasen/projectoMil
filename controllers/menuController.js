// controllers/menuController.js

const Menu = require('../models/Menu');

// Controlador para crear un nuevo ítem del menú
exports.createMenuItem = async (req, res) => {
    try {
        const newItem = new Menu(req.body);
        const savedItem = await newItem.save();
        res.status(201).json(savedItem);
    } catch (err) {
        res.status(500).json({ message: 'Error al crear el menú', error: err });
    }
};

// Controlador para obtener todos los ítems del menú
exports.getAllMenuItems = async (req, res) => {
    try {
        const menu = await Menu.find();
        res.status(200).json(menu);
    } catch (err) {
        res.status(500).json({ message: 'Error al obtener el menú', error: err });
    }
};
