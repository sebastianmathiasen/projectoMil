const Bar = require('../models/bar');

// Crear un nuevo bar
exports.crearBar = async (req, res) => {
    const { nombre, direccion, dueño } = req.body;
    try {
        const nuevoBar = new Bar({ nombre, direccion, dueño });
        await nuevoBar.save();
        res.status(201).json(nuevoBar);
    } catch (error) {
        res.status(500).json({ error: 'Error al crear el bar' });
    }
};

// Obtener bares por dueño
exports.obtenerBares = async (req, res) => {
    try {
        const bares = await Bar.find({ dueño: req.params.duenoId });
        res.status(200).json(bares);
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener bares' });
    }
};
