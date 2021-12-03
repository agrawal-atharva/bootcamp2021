const router = require('express').Router();
const item = require('./controller');

router.patch('/item/:id', item.update);
router.post('/items', item.create);
router.get('/items', item.getAll);
router.delete('/item/:id', item.delete);

module.exports = router;
