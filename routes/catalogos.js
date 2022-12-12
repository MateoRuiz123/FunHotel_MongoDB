const{Router} =require('express');
const{check} =require('express-validator');



const {catalogosPost, catalogosGet,catalogoGet,catalogoPut,catalogoDelete} = require('../controllers/catalogos');

const router = Router();

router.post('/', [
    check('nombre', 'El nombre es obligatorio').not().isEmpty(),

], catalogosPost);


router.put('/:id', [
    check('nombre', 'El nombre es obligatorio').not().isEmpty(),
], [validarJWT], catalogoPut);

router.get("/", [validarJWT],catalogosGet);
router.get("/:id", [validarJWT],catalogoGet);
router.put("/:id", [validarJWT],catalogoPut);
router.delete("/:id", [validarJWT],catalogoDelete);



module.exports = router;