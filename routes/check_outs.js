const {Router} = require('express');
const {check} = require('express-validator');

const {check_outsPost, check_outsGet, check_outGet, check_outsPut, check_outsDelete} = require('../controllers/check_outs');
const {
    validarJWT
} = require('../middlewares/validar_jwt');
const router = Router();

router.post('/', [

    check('fecha_sa', 'La fecha de salida es obligatoria').not().isEmpty(),
    check('check_in', 'La fecha de ingreso es obligatoria').not().isEmpty(),
    check('metodo_pago', 'El metodo de pago es obligatorio').not().isEmpty(),
    check('ventas', 'El campo de venta es obligatorio').not().isEmpty(),
    check('cliente', 'El cliente es obligatorio').not().isEmpty(),



], check_outsPost);

router.get('/', [validarJWT], check_outsGet);
router.get('/:id', [validarJWT], check_outGet);
router.put('/:id', [validarJWT], check_outsPut);
router.delete('/:id', [validarJWT], check_outsDelete);


module.exports = router;