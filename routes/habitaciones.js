const { Router } = require('express');
const { check } = require('express-validator');

const { habitacionesPost, habitacionesGet, habitacionGet, habitacionesPut, habitacionesDelete } = require('../controllers/habitaciones');

const router = Router();

router.post('/', [
    check('numero_camas', 'El numero de camas es obligatorio').not().isEmpty(),
    check('numero_toallas', 'El numero de toallas es obligatorio').not().isEmpty(),
    check('numero_gaseosas', 'El numero de gaseosas es obligatorio').not().isEmpty(),
    check('numero_papas', 'El numero de papas es obligatorio').not().isEmpty(),

], habitacionesPost);

router.get('/', [validarJWT], habitacionesGet);
router.get('/:id', [validarJWT], habitacionGet);
router.put('/:id', [
    check('numero_camas', 'El numero de camas es obligatorio').not().isEmpty(),
    check('numero_toallas', 'El numero de toallas es obligatorio').not().isEmpty(),
    check('numero_gaseosas', 'El numero de gaseosas es obligatorio').not().isEmpty(),
    check('numero_papas', 'El numero de papas es obligatorio').not().isEmpty(),
], [validarJWT], habitacionesPut);
router.delete('/:id', [validarJWT], habitacionesDelete);


module.exports = router;