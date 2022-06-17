const router = require('express').Router();

const {
  getAllVinyls,
  getVinylById,
} = require('../controllers/vinylsController');

router.route('/').get(getAllVinyls);
router.route('/:id').get(getVinylById);

module.exports = router;
