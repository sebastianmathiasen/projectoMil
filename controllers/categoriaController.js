const Categoria = require('../models/categoria');

// Función para crear una nueva categoría
exports.crearCategoria = async (req, res) => {
    const { nombre, barId } = req.body;

    try {
        const nuevaCategoria = new Categoria({ nombre, barId });
        await nuevaCategoria.save();
        res.status(201).json(nuevaCategoria);
    } catch (error) {
        res.status(500).json({ error: 'Error al crear la categoría' });
    }
};

// Función para agregar una subcategoría
exports.agregarSubcategoria = async (req, res) => {
    const { nombre } = req.body;

    try {
        const categoria = await Categoria.findById(req.params.categoriaId);
        if (!categoria) {
            return res.status(404).json({ error: 'Categoría no encontrada' });
        }

        categoria.subcategorias.push({ nombre });
        await categoria.save();
        res.status(200).json(categoria);
    } catch (error) {
        res.status(500).json({ error: 'Error al agregar subcategoría' });
    }
};

// Función para agregar un producto a una subcategoría
exports.agregarProducto = async (req, res) => {
    const { nombre, precio } = req.body;

    try {
        const categoria = await Categoria.findById(req.params.categoriaId);
        if (!categoria) {
            return res.status(404).json({ error: 'Categoría no encontrada' });
        }

        const subcategoria = categoria.subcategorias.id(req.params.subcategoriaId);
        if (!subcategoria) {
            return res.status(404).json({ error: 'Subcategoría no encontrada' });
        }

        subcategoria.productos.push({ nombre, precio });
        await categoria.save();
        res.status(200).json(categoria);
    } catch (error) {
        res.status(500).json({ error: 'Error al agregar producto' });
    }
};
