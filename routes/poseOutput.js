var express = require('express');
var router = express.Router();
const storage = require('node-persist');

/* POST send pose data from rpi */
router.post('/', async function(req, res) {
  let pose = await storage.getItem('pose');
  res.json(pose);
});

module.exports = router;