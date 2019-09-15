const express = require('express');
const logger = require('../logger');
const xss = require('xss');
const votesService = require('./votes-service');
const router = express.Router();

const bodyParser = express.json();

const serializeVotes = votes => ({
  photoonevotes: xss(votes.photoonevotes),
  phototwovotes: xss(votes.phototwovotes),
  photothreevotes: xss(votes.photothreevotes),
  occasion: xss(votes.occasion)
});

router.route('/').post(bodyParser, (req, res, next) => {
  for (const field of [
    'photoonevotes',
    'phototwovotes',
    'photothreevotes',
    'occasion'
  ]) {
    if (!req.body[field]) {
      logger.error(`${field} is required`);
      return res
        .status(400)
        .send({ error: { message: `${field} is required.` } });
    }
  }
  const { photoonevotes, phototwovotes, photothreevotes, occasion } = req.body;

  const votes = { photoonevotes, phototwovotes, photothreevotes, occasion };

  votesService
    .insertOccasion(req.app.get('db'), votes)
    .then(vote => {
      res
        .status(201)
        .location(`/api/results/${votes.occasion}`)
        .json(serializeVotes(votes));
    })
    .catch(next);
});

router
  .route('/:occasion_id')
  .all((req, res, next) => {
    const { occasion_id } = req.params;

    votesService
      .getAllVotesByOccasion(req.app.get('db'), occasion_id)
      .then(votes => {
        res.votes = votes;
        res.occasion_id = occasion_id;
        next();
      })
      .catch(next);
  })
  .get((req, res) => {
    const voteResponse = {
      photoonevotes:
        (res.votes.reverse()[0] && res.votes.reverse()[0].photoonevotes) || 0,
      phototwovotes:
        (res.votes.reverse()[0] && res.votes.reverse()[0].phototwovotes) || 0,
      photothreevotes:
        (res.votes.reverse()[0] && res.votes.reverse()[0].photothreevotes) || 0
    };
    res.json(voteResponse);
  });

module.exports = router;
