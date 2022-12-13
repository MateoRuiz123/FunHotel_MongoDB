const {
    Router
} = require('express')
const {
    check
} = require('express-validator')
const {
    categoriasPost,categoriasPut,categoriasGet,categoriaGet,categoriasDelete
} = require('../controllers/categorias')
const router = Router()
const {
    validarJWT
} = require('../middlewares/validar_jwt');

router.post('/', [
    check('nombre', 'El nombre es obligatorio').not().isEmpty(),
    check('descripcion', 'La descripción es obligatoria').not().isEmpty()
], categoriasPost)
router.get('/', [validarJWT], categoriasGet)
router.get('/:id', [validarJWT], categoriaGet)
router.put('/:id', [validarJWT], [
    check('nombre', 'El nombre es obligatorio').not().isEmpty(),
    check('descripcion', 'La descripción es obligatoria').not().isEmpty()
], categoriasPut)
router.delete('/:id', [validarJWT], categoriasDelete)

module.exports = router