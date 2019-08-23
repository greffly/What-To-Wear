const express = require('express');
const router = express.Router();

// Default GET route.
router.get('/', (req, res) => {
  res.send('You are in /occasions.');
});

// Default POST route.
router.post('/', (req, res) => {
  res.json({
    msg: 'You have posted to occasions',
    body: req.body
  });
});

// Export the router.
module.exports = router;
