const { Router } = require('express');
const { check } = require('express-validator');

const { clientesPost, clientesGet, clienteGet, clientesPUT, clientesDelete } = require('../controllers/clientes');

const router = Router();

router.post('/', [
    check('nombre', 'El nombre es obligatorio').not().isEmpty(),
    check('apellido', 'El apellido es obligatorio').not().isEmpty(),
    check('correo', 'El correo no es válido').isEmail(),

], clientesPost);

router.get('/', clientesGet);
router.get('/:id', clienteGet);
router.put('/:id', [
    check('nombre', 'el nombre es obligatorio').not().isEmpty(),
    check('apellido', 'El apellido es obligatorio').not().isEmpty(),
    check('correo', 'El correo no es válido').isEmail(),


], clientesPUT);
router.delete('/:id', clientesDelete);


module.exports = router;