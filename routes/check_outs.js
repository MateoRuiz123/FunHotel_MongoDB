const {Router} = require('express');
const {check} = require('express-validator');

const {check_outsPost, check_outsGet, check_outGet, check_outsPut, check_outsDelete} = require('../controllers/check_outs');

const router = Router();

router.post('/', [

    check('fecha_sa', 'La fecha de salida es obligatoria').not().isEmpty(),
    check('check_in', 'La fecha de ingreso es obligatoria').not().isEmpty(),
    check('metodo_pago', 'El metodo de pago es obligatorio').not().isEmpty(),
    check('ventas', 'El campo de venta es obligatorio').not().isEmpty(),
    check('cliente', 'El cliente es obligatorio').not().isEmpty(),



], check_outsPost);

router.get('/', check_outsGet);
router.get('/:id', check_outGet);
router.put('/:id', check_outsPut);
router.delete('/:id', check_outsDelete);


module.exports = router;