const express = require('express');
const router = express.Router();
const multer = require('multer');
const upload = multer({ dest: 'uploads/' });

// Default POST route.
router.post('/', upload.single('image'), (req, res) => {
  const imagePath = '/uploads/' + req.file.filename;
  res.json({ path: imagePath });
});

// Export the router.
module.exports = router;
