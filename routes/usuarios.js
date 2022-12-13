const {
    Router
} = require('express');
const {
    check
} = require('express-validator');
const {
    usuariosPost,
    usuariosGet,
    usuarioGet,
    usuariosPut,
    usuariosDelete
} = require('../controllers/usuarios');
const {
    validarJWT
} = require('../middlewares/validar_jwt');
const {
    esAdminRole,
    esUserRole
} = require('../middlewares/validar_roles');

const router = Router();

router.post('/', [
    check('correo', 'El correo no es válido').isEmail(),
    check('nombre', 'El nombre es obligatorio').not().isEmpty(),
    check('apellido', 'El apellido es obligatorio').not().isEmpty(),
    check('ficha', 'La ficha es obligatoria').not().isEmpty(),
    check('documento', 'El documento es obligatorio').not().isEmpty(),
    check('password', 'El password es obligatorio').not().isEmpty(),
    check('rol', 'El rol no es válido').isIn(['ADMIN_ROLE', 'USER_ROLE']),
], usuariosPost);

router.get('/', [validarJWT, esAdminRole], usuariosGet)
router.get('/:id', [validarJWT, esAdminRole], usuarioGet)
router.put('/:id', [validarJWT, esAdminRole], usuariosPut)
router.delete('/:id', [validarJWT, esAdminRole], usuariosDelete)

module.exports = router;