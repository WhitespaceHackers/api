var express = require('express');
var router = express.Router();
const storage = require('node-persist');

// DEFAULT pose data
var def = require('../default.json');
/* GET pose data */
router.get('/', async function(req, res) {
  let pose = await storage.getItem('pose');
  pose ? res.json(pose) : res.json(def);
});



module.exports = router;