const {Router} = require('express');
const {check} = require('express-validator');
const {salasPost} = require('../controllers/salas');
const {salasGet} = require('../controllers/salas');
const {salaGet} = require('../controllers/salas');
const {salasPut} = require('../controllers/salas');
const {salasDelete} = require('../controllers/salas');

const router = Router();

router.post('/', [
    check('nombre', 'El nombre es obligatorio').not().isEmpty(),
    check('ficha', 'La ficha es obligatoria').not().isEmpty(),
    check('temporada', 'La temporada es obligatoria').not().isEmpty(),
    check('dificultad', 'La dificultad es obligatoria').not().isEmpty(),
    check('usuario', 'El usuario es obligatorio').not().isEmpty()
], salasPost);

router.get('/', salasGet)
router.get('/:id',salaGet)
router.put('/:id', salasPut)
router.delete('/:id', salasDelete)

module.exports = router;

