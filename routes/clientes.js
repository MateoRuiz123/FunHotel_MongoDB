const { Router } = require('express');
const { check } = require('express-validator');

const { clientesPost, clientesGet, clienteGet, clientesPUT, clientesDelete } = require('../controllers/clientes');
const {
    validarJWT
} = require('../middlewares/validar_jwt');
const router = Router();

router.post('/', [
    check('nombre', 'El nombre es obligatorio').not().isEmpty(),
    check('apellido', 'El apellido es obligatorio').not().isEmpty(),
    check('correo', 'El correo no es válido').isEmail(),

], clientesPost);

router.get('/', [validarJWT], clientesGet);
router.get('/:id', [validarJWT], clienteGet);
router.put('/:id', [
    check('nombre', 'el nombre es obligatorio').not().isEmpty(),
    check('apellido', 'El apellido es obligatorio').not().isEmpty(),
    check('correo', 'El correo no es válido').isEmail(),


], [validarJWT], clientesPUT);
router.delete('/:id', [validarJWT], clientesDelete);


module.exports = router;