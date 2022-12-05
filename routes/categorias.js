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

router.post('/', [
    check('nombre', 'El nombre es obligatorio').not().isEmpty(),
    check('descripcion', 'La descripción es obligatoria').not().isEmpty()
], categoriasPost)
router.get('/', categoriasGet)
router.get('/:id', categoriaGet)
router.put('/:id', [
    check('nombre', 'El nombre es obligatorio').not().isEmpty(),
    check('descripcion', 'La descripción es obligatoria').not().isEmpty()
], categoriasPut)
router.delete('/:id', categoriasDelete)

module.exports = router