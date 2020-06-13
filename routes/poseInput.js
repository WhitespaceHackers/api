var express = require('express');
var router = express.Router();
const storage = require('node-persist');

let steps = 100;

/* POST get pose data from rpi */
router.post('/', async function(req, res) {
  // Get pose data
  const pose = req.body;
  pose.heartRate = getRandomArbitrary(70, 80);
  if (steps >= 5000) {
    steps = 100;
  }
  pose.steps = steps++;

  // Store in memory (just for POC purposes)
  await storage.init();
  await storage.setItem('pose', pose);

  res.send('accepted pose data');
});

function getRandomArbitrary(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}

module.exports = router;