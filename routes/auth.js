const {
    Router
} = require('express');
const {
    check
} = require('express-validator');
const {
    login
} = require('../controllers/auth');
const router = Router();

router.post('/login', [
    check('correo', 'Correo no valido').isEmail(),
    check('password', 'La contraseña es obligatoria').not().isEmpty()
], login);

module.exports = router;