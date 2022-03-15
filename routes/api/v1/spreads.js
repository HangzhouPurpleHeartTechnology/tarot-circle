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
    .then((result) => {
      console.log('res', result);
      res.json(res);
    })
    .catch((err) => {
      console.log('err', err);
    });
});

module.exports = router;
