const Usuario = require('../models/usuario');

// Función para registrar un usuario
exports.registrarUsuario = async (req, res) => {
    try {
        const nuevoUsuario = new Usuario(req.body);
        await nuevoUsuario.save();
        res.status(201).json(nuevoUsuario);
    } catch (error) {
        res.status(500).json({ error: 'Error al registrar el usuario' });
    }
};
