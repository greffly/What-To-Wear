const express = require('express');
const router = express.Router();

// Default GET route.
router.get('/', (req, res) => {
  res.send('You are in /users.');
});

// Default POST route.
router.post('/', (req, res) => {
  res.json({
    msg: 'you have posted to users',
    body: req.body
  });
});

// Export the router.
module.exports = router;
