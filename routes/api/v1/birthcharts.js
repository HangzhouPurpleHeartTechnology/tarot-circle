const express = require('express');
const router = express.Router();
const passport = require('passport');
const { birthChartGenerator, generateChart } = require('./birthChartDataConverter');

const BirthChart = require('../../../models/BirthChart');

router.post('/generatechart', (req, res) => {
  const result = generateChart(req.body);
  res.json(result);
});

router.post('/', (req, res) => {
  const data = birthChartGenerator(req.body);
  const newChart = new BirthChart({
    ...data,
    user: req.body.user,
    nickname: req.body.nickname,
    dateTime: req.body.dateTime,
  });
  newChart
    .save()
    .then((chart) => res.json(chart))
    .catch((err) => console.log(err));
});
router.post('/usersaved', async (req, res) => {
  const userid = req.body.user;
  User.findById(userid).then((user) => {
    console.log(user);
    if (!user) res.status(400).json({ msg: 'User not found' });
    else {
      BirthChart.find({ user: userid }).then((result) => {
        console.log(result);
        res.json(result);
      });
    }
  });
});

module.exports = router;
