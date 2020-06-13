var express = require('express');
var router = express.Router();
const storage = require('node-persist');

/* GET pose history */
router.get('/', async function(req, res) {
  let history = await storage.getItem('history');
  res.json(history);
});

module.exports = router;