const userController = require('../controllers/userController');
const verifyToken = require('../middlewares/auth');

module.exports = (app) => {
  app.get('/api/users', userController.getAllUsers);
  app.get('/api/users/:id', verifyToken, userController.getUserById); // ✅ protegido
  app.post('/api/users/create', userController.register);
  app.put('/api/users/update', userController.getUserUpdate);
  app.delete('/api/users/delete/:id', userController.getUserDelete);
  app.post('/api/users/login', userController.login);
};
