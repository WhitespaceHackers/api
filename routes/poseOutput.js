var express = require('express');
var router = express.Router();
const storage = require('node-persist');

/* GET pose data */
router.get('/', async function(req, res) {
  let pose = await storage.getItem('pose');
  res.json(pose);
});

module.exports = router;