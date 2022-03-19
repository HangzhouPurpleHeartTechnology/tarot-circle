const express = require('express');
const router = express.Router();
const Spread = require('../../../models/Spread');

router.post('/', (req, res) => {
  let data = req.body;
  let newSpread = new Spread(data);
  newSpread
    .save()
    .then((spread) => res.json(spread))
    .catch((err) => console.log(err));
});

router.get('/', (_, res) => {
  Spread.find()
    .populate('user')
    .then((spreads) => {
      console.log('spreads', spreads);
      res.json(spreads);
    })
    .catch((err) => {
      console.log('err', err);
    });
});
router.get('/:spreadId', (req, res) => {
  console.log('backend', req.params);
  Spread.findOne({ _id: req.params.spreadId })
    .populate('user')
    .then((spread) => {
      res.json(spread);
    })
    .catch((err) => {
      console.error(err);
      res.json(err);
    });
});

module.exports = router;
