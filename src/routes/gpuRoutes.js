const express = require('express');
const router = express.Router();
const controller = require('../controllers/gpuController');

router.get('/gpus', controller.getAll);
router.get('/gpus/:id', controller.getById);
router.post('/gpus', controller.create);
router.put('/gpus/:id', controller.update);
router.delete('/gpus/:id', controller.delete);

module.exports = router;