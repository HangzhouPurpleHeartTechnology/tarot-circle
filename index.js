const express = require('express');

const app = express();
const run = require('./config/mongoConnect');

const bodyParser = require('body-parser');
const passport = require('passport');
const path = require('path');

const users = require('./routes/api/v1/users');
const birthcharts = require('./routes/api/v1/birthcharts');

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('frontend/build'));
  app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'));
  });
}

app.use(passport.initialize());
require('./config/passport')(passport);

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/api/v1/users/', users);
app.use('/api/v1/birthcharts/', birthcharts);

run();

const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`server is running on ${port}`));
