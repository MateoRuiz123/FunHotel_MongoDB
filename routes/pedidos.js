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
router.get('/', pedidosGet)
router.get('/:id', pedidoGet)
router.put('/:id', [
    check('reserva', 'La reserva es obligatorio').not().isEmpty(),
    check('cliente', 'El cliente es obligatorio').not().isEmpty(),
    check('producto', 'El producto es obligatorio').not().isEmpty(),
    check('cantidad', 'La cantidad es obligatorio').not().isEmpty()
], pedidosPut)
router.delete('/:id', pedidosDelete)

module.exports = router