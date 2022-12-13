const {Router} = require('express');
const {check} = require('express-validator');

const {check_insPost, check_insGet, check_inGet, check_insPut, check_insDelete} = require('../controllers/check_ins');
const {
    validarJWT
} = require('../middlewares/validar_jwt');
const router = Router();

router.post('/', [

    check('reserva', 'La reserva es obligatoria').not().isEmpty(),
    check('fecha_in', 'La fecha de ingreso es obligatoria').not().isEmpty(),
    check('cliente', 'El cliente es obligatorio').not().isEmpty(),


], check_insPost);

router.get('/', [validarJWT], check_insGet);
router.get('/:id', [validarJWT], check_inGet);
router.put('/:id', [validarJWT], check_insPut);
router.delete('/:id', [validarJWT], check_insDelete);


module.exports = router;