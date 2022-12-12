const{Router} =require('express');
const{check} =require('express-validator');



const {ventasPost, ventasGet,ventaGet,ventaPut,ventaDelete} = require('../controllers/ventas');

const router = Router();

router.post('/', [
    check('fecha_llegada', 'La fecha de llegada es obligatoria').not().isEmpty(),
    check('fecha_salida', 'La fecha de salida es obligatoria').not().isEmpty(),

], ventasPost);


router.put('/:id', [
    check('fecha_llegada', 'La fecha de llegada es obligatoria').not().isEmpty(),
    check('fecha_salida', 'La fecha de salida es obligatoria').not().isEmpty(),
], ventaPut);

router.get("/", [validarJWT],ventasGet);
router.get("/:id", [validarJWT],ventaGet);
router.put("/:id", [validarJWT],ventaPut);
router.delete("/:id", [validarJWT],ventaDelete);



module.exports = router;