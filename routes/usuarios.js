const {Router} = require('express');
const {check} = require('express-validator');
const {usuarioPost} = require('../controllers/usuarios');
const {usuariosGet} = require('../controllers/usuarios');
const {usuarioGet} = require('../controllers/usuarios');
const {usuariosPut} = require('../controllers/usuarios');
const {usuariosDelete} = require('../controllers/usuarios');

const router = Router();

router.post('/', [
    check('correo', 'El correo no es válido').isEmail(),
    check('nombre', 'El nombre es obligatorio').not().isEmpty(),
    check('apellido', 'El apellido es obligatorio').not().isEmpty(),
    check('ficha', 'La ficha es obligatoria').not().isEmpty(),
    check('documento', 'El documento es obligatorio').not().isEmpty(),
    check('password', 'El password es obligatorio').not().isEmpty(),
    check('rol', 'El rol no es válido').isIn(['ADMIN_ROLE', 'USER_ROLE']),
], usuarioPost);

router.get('/', usuariosGet)
router.get('/:id', usuarioGet)
router.put('/:id', usuariosPut)
router.delete('/:id', usuariosDelete)

module.exports = router;

