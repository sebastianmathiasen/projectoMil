const mongoose = require('mongoose');

const usuarioSchema = new mongoose.Schema({
    nombre: { type: String, required: true },  // Nombre del usuario (dueño del bar o empleado)
    email: { type: String, required: true, unique: true },  // Email del usuario, único por bar
    password: { type: String, required: true },  // Contraseña, que será encriptada
    rol: { type: String, enum: ['dueño', 'mesero', 'cocina', 'caja'], required: true },  // Rol del usuario
    barId: { type: mongoose.Schema.Types.ObjectId, ref: 'Bar' },  // Bar al que pertenece el usuario
    banco: { type: String },  // Cuenta bancaria del dueño del bar para recibir pagos
    cuit: { type: String },  // CUIT del dueño del bar
    tipoContribuyente: { type: String, enum: ['monotributista', 'responsable inscripto'] },  // Tipo de contribuyente
    fechaCreacion: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Usuario', usuarioSchema);
