const { Origin, Horoscope } = require('circular-natal-horoscope-js');
const customOrbs = {
  conjunction: 8,
  opposition: 8,
  trine: 8,
  square: 7,
  sextile: 6,
  quincunx: 5,
  quintile: 1,
  septile: 1,
  'semi-square': 1,
  'semi-sextile': 1,
};

const generateChart = ({ dateTime, lat, lng }) => {
  console.log('date', dateTime);
  date = new Date(dateTime);
  const origin = new Origin({
    year: date.getFullYear(),
    month: date.getMonth(),
    date: date.getDate(),
    hour: date.getHours(),
    minute: date.getMinutes(),
    latitude: lat || 41.1167,
    longitude: lng || 121.12938,
  });
  const horoscope = new Horoscope({
    origin,
    houseSystem: 'placidus',
    zodiac: 'tropical',
    aspectPoints: ['bodies', 'points', 'angles'],
    aspectWithPoints: ['bodies', 'points', 'angles'],
    aspectTypes: ['major', 'minor'],
    customOrbs: customOrbs,
    language: 'en',
  });
  const data = horoscope._celestialBodies.all;
  const { _midheaven } = horoscope;
  data.push(_midheaven);
  return data;
};

const birthChartGenerator = (date, lat, lng) => {
  const birthChart = generateChart(date, lat, lng);
  const res = {};
  birthChart.forEach((el) => {
    let chartPosition = {};
    chartPosition.ecliptic = el.ChartPosition.Ecliptic.DecimalDegrees;
    chartPosition.horizon = el.ChartPosition.Horizon.DecimalDegrees;
    let sign = el.key;
    let house = el?.House?.id;
    res[sign] = {
      chartPosition,
      sign: el.Sign.key,
      house,
    };
  });
  return res;
};

module.exports = {
  generateChart,
  birthChartGenerator,
};
