const{Router} =require('express');
const{check} =require('express-validator');



const {catalogosPost, catalogosGet,catalogoGet,catalogoPut,catalogoDelete} = require('../controllers/catalogos');

const router = Router();

router.post('/', [
    check('nombre', 'El nombre es obligatorio').not().isEmpty(),

], catalogosPost);


router.put('/:id', [
    check('nombre', 'El nombre es obligatorio').not().isEmpty(),
], catalogoPut);

router.get("/",catalogosGet);
router.get("/:id",catalogoGet);
router.put("/:id",catalogoPut);
router.delete("/:id",catalogoDelete);



module.exports = router;