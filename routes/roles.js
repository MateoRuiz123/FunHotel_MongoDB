const { Router } = require('express');
const { check } = require('express-validator');

const { rolesPost, rolesGet, roleGet, rolesPUT, rolesDelete } = require('../controllers/roles');
const {
    validarJWT
} = require('../middlewares/validar_jwt');
const {
    esAdminRole,
    esUserRole
} = require('../middlewares/validar_roles');
const router = Router();

router.post('/', [
    check('nombre', 'El nombre es obligatorio').not().isEmpty(),

], rolesPost);

router.get('/', [validarJWT, esAdminRole], rolesGet);
router.get('/:id', [validarJWT, esAdminRole], roleGet);
router.put('/:id', [
    check('nombre', 'el nombre es obligatorio').not().isEmpty(),

], [validarJWT, esAdminRole], rolesPUT);
router.delete('/:id', [validarJWT, esAdminRole], rolesDelete);


module.exports = router;