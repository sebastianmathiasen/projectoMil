const express = require('express');
const router = express.Router();

// Ruta para registrar un nuevo usuario (dueño o empleado)
router.post('/registro', (req, res) => {
    const { nombre, email, password, rol, barId } = req.body;

    // Aquí agregarás la lógica para crear el usuario en la base de datos
    res.status(201).json({ message: 'Usuario registrado exitosamente' });
});

// Ruta para obtener todos los usuarios de un bar
router.get('/:barId', (req, res) => {
    const barId = req.params.barId;

    // Aquí agregarás la lógica para obtener los usuarios de ese bar
    res.json({ message: 'Lista de usuarios del bar' });
});

module.exports = router;
