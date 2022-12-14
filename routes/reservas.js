const{Router} =require('express');
const{check} =require('express-validator');

const {
    validarJWT
} = require('../middlewares/validar_jwt');

const {reservasPost, reservasGet,reservaGet,reservaPut,reservaDelete} = require('../controllers/reservas');

const router = Router();

router.post('/', [
    check('numero_reserva', 'El numero_reserva es obligatorio').not().isEmpty(),
    check('id_habitacion', 'El id_habitacion es obligatorio').not().isEmpty(),
    check('id_clientes', 'El id_clientes es obligatorio').not().isEmpty(),
    check('id_servicios', 'El id_servicios es obligatorio').not().isEmpty(),

], reservasPost);


router.put('/:id', [
    check('numero_reserva', 'El numero_reserva es obligatorio').not().isEmpty(),
    check('id_habitacion', 'El id_habitacion es obligatorio').not().isEmpty(),
    check('id_clientes', 'El id_clientes es obligatorio').not().isEmpty(),
    check('id_servicios', 'El id_servicios es obligatorio').not().isEmpty(),
], [validarJWT], reservaPut);

router.get("/", [validarJWT],reservasGet);
router.get("/:id", [validarJWT],reservaGet);
router.delete("/:id", [validarJWT],reservaDelete);



module.exports = router;
