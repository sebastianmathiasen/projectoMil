const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const menuRoutes = require('./routes/menuRoutes'); // Importar rutas

const app = express();
const port = process.env.PORT || 3000;

// Middleware para interpretar JSON
app.use(express.json());

// Conectar a MongoDB
mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log('Conectado a MongoDB');
}).catch(err => {
    console.error('Error al conectar a MongoDB:', err);
});

// Usar las rutas del menú
app.use('/api', menuRoutes);

// Ruta de prueba
app.get('/', (req, res) => {
    res.send('Bienvenido a la app de bares');
});

// Iniciar el servidor
app.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`);
});
