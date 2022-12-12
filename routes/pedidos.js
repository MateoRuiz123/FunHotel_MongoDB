const {
    Router
} = require('express')
const {
    check
} = require('express-validator')
const {
    pedidosPost,
    pedidosGet,
    pedidoGet,
    pedidosPut,
    pedidosDelete
} = require('../controllers/pedidos')
const router = Router()

router.post('/', [
    check('reserva', 'La reserva es obligatorio').not().isEmpty(),
    check('cliente', 'El cliente es obligatorio').not().isEmpty(),
    check('producto', 'El producto es obligatorio').not().isEmpty(),
    check('cantidad', 'La cantidad es obligatorio').not().isEmpty()
], pedidosPost)
router.get('/', [validarJWT], pedidosGet)
router.get('/:id', [validarJWT], pedidoGet)
router.put('/:id', [
    check('reserva', 'La reserva es obligatorio').not().isEmpty(),
    check('cliente', 'El cliente es obligatorio').not().isEmpty(),
    check('producto', 'El producto es obligatorio').not().isEmpty(),
    check('cantidad', 'La cantidad es obligatorio').not().isEmpty()
], [validarJWT], pedidosPut)
router.delete('/:id', [validarJWT], pedidosDelete)

module.exports = router