const {Router} = require('express');
const {check} = require('express-validator');

const {metodo_pagosPost, metodo_pagosGet, metodo_pagoGet, metodo_pagosPut, metodo_pagosDelete} = require('../controllers/metodo_pagos');

const router = Router();

router.post('/', [

    check('nombre', 'El nombre del metodo de pago es obligatoria').not().isEmpty(),

], metodo_pagosPost);

router.get('/', metodo_pagosGet);
router.get('/:id', metodo_pagoGet);
router.put('/:id', metodo_pagosPut);
router.delete('/:id', metodo_pagosDelete);


module.exports = router;