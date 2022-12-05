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

router.get("/",ventasGet);
router.get("/:id",ventaGet);
router.put("/:id",ventaPut);
router.delete("/:id",ventaDelete);



module.exports = router;