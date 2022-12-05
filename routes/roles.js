const { Router } = require('express');
const { check } = require('express-validator');

const { rolesPost, rolesGet, roleGet, rolesPUT, rolesDelete } = require('../controllers/roles');

const router = Router();

router.post('/', [
    check('nombre', 'El nombre es obligatorio').not().isEmpty(),

], rolesPost);

router.get('/', rolesGet);
router.get('/:id', roleGet);
router.put('/:id', [
    check('nombre', 'el nombre es obligatorio').not().isEmpty(),

], rolesPUT);
router.delete('/:id', rolesDelete);


module.exports = router;