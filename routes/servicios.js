const {
    Router
} = require('express')
const {
    check
} = require('express-validator')
const {
    serviciosPost,
    serviciosGet,
    servicioGet,
    serviciosPut,
    serviciosDelete
} = require('../controllers/servicios')
const router = Router()
const {
    validarJWT
} = require('../middlewares/validar_jwt');
router.post('/', [
    check('nombre', 'El nombre es obligatorio').not().isEmpty(),
    check('descripcion', 'La descripción es obligatoria').not().isEmpty()
], serviciosPost)
router.get('/', [validarJWT], serviciosGet)
router.get('/:id', [validarJWT], servicioGet)
router.put('/:id', [
    check('nombre', 'El nombre es obligatorio').not().isEmpty(),
    check('descripcion', 'La descripción es obligatoria').not().isEmpty()
], [validarJWT], serviciosPut)
router.delete('/:id', [validarJWT], serviciosDelete)

module.exports = router