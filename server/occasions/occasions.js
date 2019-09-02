const express = require('express');
const logger = require('logger');
const xss = require('xss');
const occasionsService = require('./occasions-service');
const router = express.Router();

const serializeOccasion = occasion => ({
  id: occasion.id,
  title: xss(occasion.title),
  username: occasion.username,
  photoOne: xss(occasion.photoOne),
  photoTwo: xss(occasion.photoTwo),
  photoThree: xss(occasion.photoThree)
});

router.route('/').get((req, res, next) => {
  occasionsService
    .getAllOccasions(req.app.get('db'))
    .then(occasions => {
      res.json(occasions.map(serializeOccasion));
    })
    .catch(next);
});

router.post('/').get((req, res, next) => {
  for (const field of ['title', 'username', 'photoOne', 'photoTwo']) {
    if (!req.body[field]) {
      logger.error(`${field} is required`);
      return res
        .status(400)
        .send({ error: { message: `${field} is required.` } });
    }
  }
  const { title, username, photoOne, photoTwo, photoThree } = req.body;

  const occasion = { title, username, photoOne, photoTwo, photoThree };

  occasionsService
    .insertOccasion(req.app.get('db'), occasion)
    .then(occasion => {
      logger.info(`Occasion with id ${occasion.id} created`);
      res
        .status(201)
        .location(`/api/occasions/${occasion.id}`)
        .json(serializeOccasion(occasion));
    })
    .catch(next);
});

// Export the router.
module.exports = router;
