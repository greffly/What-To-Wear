const express = require('express');
const logger = require('../logger');
const xss = require('xss');
const occasionsService = require('./occasions-service');
const router = express.Router();

const bodyParser = express.json();

const serializeOccasion = occasion => ({
  id: occasion.id,
  title: xss(occasion.title),
  username: occasion.username,
  photoone: xss(occasion.photoone),
  phototwo: xss(occasion.phototwo),
  photothree: xss(occasion.photothree)
});

router.route('/').get((req, res, next) => {
  occasionsService
    .getAllOccasions(req.app.get('db'))
    .then(occasions => {
      res.json(occasions.map(serializeOccasion));
    })
    .catch(next);
});

router.route('/').post(bodyParser, (req, res, next) => {
  for (const field of [
    'title',
    'username',
    'photoone',
    'phototwo',
    'photothree'
  ]) {
    if (!req.body[field]) {
      logger.error(`${field} is required`);
      return res
        .status(400)
        .send({ error: { message: `${field} is required.` } });
    }
  }
  const { title, username, photoone, phototwo, photothree } = req.body;

  const occasion = { title, username, photoone, phototwo, photothree };

  occasionsService
    .insertOccasion(req.app.get('db'), occasion)
    .then(occasion => {
      res
        .status(201)
        .location(`/api/occasions/${occasion.id}`)
        .json(serializeOccasion(occasion));
    })
    .catch(next);
});

router
  .route('/:occasion_id')
  .all((req, res, next) => {
    const { occasion_id } = req.params;

    occasionsService
      .getById(req.app.get('db'), occasion_id)
      .then(occasion => {
        if (!occasion) {
          logger.error(`occasion with id ${occasion_id} not found`);
          return res
            .status(400)
            .json({ error: { message: `Occasion not found` } });
        }
        res.occasion = occasion;
        next();
      })
      .catch(next);
  })
  .get((req, res) => {
    res.json(serializeOccasion(res.occasion));
  })
  .delete((req, res, next) => {
    const { occasion_id } = req.params;
    occasionsService
      .deleteOccasion(req.app.get('db'), occasion_id)
      .then(numRowsAffected => {
        logger.info(`Occasion with id ${occasion_id} deleted`);
        res.status(204).end();
      })
      .catch(next);
  })
  .patch(bodyParser, (req, res, next) => {
    const { title, username, photoone, phototwo, photothree } = req.body;
    const occasionToUpdate = {
      title,
      username,
      photoone,
      phototwo,
      photothree
    };
    const numberOfValues = Object.values(occasionToUpdate).filter(Boolean)
      .length;
    if (numberOfValues === 0) {
      logger.error(`Invalid update without required fields`);
      return res.status(400).json({
        error: {
          message: `Request body must contain either 'title', 'username', 'photoone', 'phototwo', or 'photothree'`
        }
      });
    }

    occasionsService
      .updateOccasion(
        req.app.get('db'),
        req.params.occasion_id,
        occasionToUpdate
      )
      .then(numRowsAffected => {
        res.status(204).end();
      })
      .catch(next);
  });

module.exports = router;
