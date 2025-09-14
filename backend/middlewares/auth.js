const jwt = require('jsonwebtoken');
const keys = require('../config/keys');

function verifyToken(req, res, next) {
  const token = req.headers['authorization'];

  if (!token) {
    return res.status(403).json({
      success: false,
      message: 'No se proporcionó un token'
    });
  }

  const cleanToken = token.replace(/^(JWT |Bearer )/, '');

  jwt.verify(cleanToken, keys.secretOrKey, (err, decoded) => {
    if (err) {
      return res.status(401).json({
        success: false,
        message: 'Token inválido o expirado'
      });
    }

    req.user = decoded;
    next();
  });
}

module.exports = verifyToken;
