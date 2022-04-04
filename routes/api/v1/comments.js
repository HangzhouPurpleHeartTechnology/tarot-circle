const express = require('express');
const router = express.Router();
const Spread = require('../../../models/Comment');

router.post('/', (req, res) => {
  let data = req.body;
  let comment = new Comment(data);
  comment
    .save()
    .then((cmt) => res.json(cmt))
    .catch((err) => console.log(err));
});

router.post('/:spreadId', (_, res) => {
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
router.post('/:userId', (req, res) => {
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
