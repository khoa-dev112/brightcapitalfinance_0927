const { 
    createLender,
    getLenderById,
    getLenders,
    updateLender,
    deleteLender
 } = require('./lender.controller')
const router = require('express').Router();

router.post('/', createLender);
router.get('/', getLenders);
router.get('/:id', getLenderById);
router.patch('/', updateLender);
router.delete('/', deleteLender);

module.exports = router;