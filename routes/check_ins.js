const {Router} = require('express');
const {check} = require('express-validator');

const {check_insPost, check_insGet, check_inGet, check_insPut, check_insDelete} = require('../controllers/check_ins');

const router = Router();

router.post('/', [

    check('reserva', 'La reserva es obligatoria').not().isEmpty(),
    check('fecha_in', 'La fecha de ingreso es obligatoria').not().isEmpty(),
    check('cliente', 'El cliente es obligatorio').not().isEmpty(),


], check_insPost);

router.get('/', check_insGet);
router.get('/:id', check_inGet);
router.put('/:id', check_insPut);
router.delete('/:id', check_insDelete);


module.exports = router;