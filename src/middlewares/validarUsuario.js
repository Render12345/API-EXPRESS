function validarUsuario(req, res, next) {
  const { nombre, numero_control } = req.body; 

  if (!nombre || !numero_control) {
    return res.status(400).json({ 
      exito: false, 
      mensaje: 'nombre y numero_control son obligatorios' 
    });
  }

  // Validar que numero_control solo tenga números y tenga 8 dígitos
  const ncRegex = /^\d{8}$/;
  if (!ncRegex.test(numero_control)) {
    return res.status(400).json({ 
      exito: false, 
      mensaje: 'numero_control debe tener exactamente 8 dígitos' 
    });
  }

  next();
}

module.exports = validarUsuario;