const supabase = require('../config/supabase');
// GET
const listarUsuarios = async (req, res) => {
const { data, error } = await supabase.from('usuarios').select('*');
if (error) return res.status(500).json({ mensaje: error.message });
res.json(data);
};
// GET por ID
const obtenerUsuario = async (req, res) => {
const { data, error } = await supabase
.from('usuarios')
.select('*')
.eq('id', req.params.id)
.single();
if (error) return res.status(404).json({ mensaje: 'No encontrado' });
res.json(data);
};
// POST
const crearUsuario = async (req, res) => {
const { nombre, numero_control} = req.body;
const { data, error } = await supabase
.from('usuarios')
.insert([{ nombre, numero_control}]);
if (error) return res.status(500).json({ mensaje: error.message });
res.status(201).json(data);
};
// PUT
const actualizarUsuario = async (req, res) => {
const { data, error } = await supabase
.from('usuarios')
.update(req.body)
.eq('id', req.params.id);
if (error) return res.status(500).json({ mensaje: error.message });
res.json(data);
};
// DELETE
const eliminarUsuario = async (req, res) => {
const { error } = await supabase
.from('usuarios')
.delete()
.eq('id', req.params.id);
if (error) return res.status(500).json({ mensaje: error.message });
res.json({ mensaje: 'Eliminado' });
};
module.exports = {
listarUsuarios,
obtenerUsuario,
crearUsuario,
actualizarUsuario,
eliminarUsuario
};