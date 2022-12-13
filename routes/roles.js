const { Router } = require('express');
const { check } = require('express-validator');

const { rolesPost, rolesGet, roleGet, rolesPUT, rolesDelete } = require('../controllers/roles');
const {
    validarJWT
} = require('../middlewares/validar_jwt');
const router = Router();

router.post('/', [
    check('nombre', 'El nombre es obligatorio').not().isEmpty(),

], rolesPost);

router.get('/', [validarJWT], rolesGet);
router.get('/:id', [validarJWT], roleGet);
router.put('/:id', [
    check('nombre', 'el nombre es obligatorio').not().isEmpty(),

], [validarJWT], rolesPUT);
router.delete('/:id', [validarJWT], rolesDelete);


module.exports = router;