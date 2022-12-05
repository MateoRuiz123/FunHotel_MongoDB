const {Router} = require('express');
const {check} = require('express-validator');
const {permisosPost} = require('../controllers/permisos');
const {permisosGet} = require('../controllers/permisos');
const {permisoGet} = require('../controllers/permisos');
const {permisosPut} = require('../controllers/permisos');
const {permisosDelete} = require('../controllers/permisos');

const router = Router();

router.post('/', [
    check('nombre', 'El nombre es obligatorio').not().isEmpty(),
    /* check('estado', 'El estado es obligatorio').not().isEmpty(), */
    check('descripcion', 'La descripcion es obligatoria').not().isEmpty()
], permisosPost);

router.get('/', permisosGet)
router.get('/:id', permisoGet)
router.put('/:id', permisosPut)
router.delete('/:id', permisosDelete)

module.exports = router;

