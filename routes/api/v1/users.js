const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const keys = require('../../../config/keys');
const passport = require('passport');

const User = require('../../../models/User');

const validateRegisterInput = require('../../../validation/register');
const validateLoginInput = require('../../../validation/login');

const sessionUserPayload = (user) => ({
  id: user.id,
  username: user.username,
});

router.get('/:userId', (req, res) => {
  User.findById(req.params.userId)
    .then((user) => {
      res.json(user);
    })
    .catch((err) => res.json(err));
});

router.post('/signup', (req, res) => {
  const { errors, isValid } = validateRegisterInput(req.body);
  if (!isValid) {
    return res.status(400).json(errors);
  }
  User.findOne({ email: req.body.email }).then((user) => {
    if (user) {
      return res.status(400).json({
        email: 'A user has already registered with this address',
      });
    } else {
      const newUser = new User({
        username: req.body.username,
        phoneNumber: req.body.phoneNumber,
        password: req.body.password,
        ...req.body,
      });

      bcrypt.genSalt(10, (_err, salt) => {
        bcrypt.hash(newUser.password, salt, (err, hash) => {
          if (err) throw err;
          newUser.password = hash;
          newUser
            .save()
            .then((user) => {
              const payload = sessionUserPayload(user);

              jwt.sign(
                payload,
                keys.secretOrKey,
                { expiresIn: 3600 * 12 },
                (_err, token) => {
                  res.json({
                    payload,
                    success: true,
                    token: 'Bearer ' + token,
                  });
                }
              );
            })
            .catch((err) => console.log(err));
        });
      });
    }
  });
});

router.post('/signin', (req, res) => {
  const { errors, isValid } = validateLoginInput(req.body);

  if (!isValid) {
    return res.status(400).json(errors);
  }

  const username = req.body.email;
  const password = req.body.password;

  User.findOne({ username }).then((user) => {
    if (!user) {
      return res.status(404).json({ username: 'This user does not exist' });
    }

    bcrypt.compare(password, user.password).then((isMatch) => {
      if (isMatch) {
        const payload = sessionUserPayload(user);

        jwt.sign(
          payload,
          keys.secretOrKey,
          { expiresIn: 3600 * 12 },
          (_err, token) => {
            res.json({
              success: true,
              token: 'Bearer ' + token,
            });
          }
        );
      } else {
        return res.status(400).json({ password: 'Incorrect password' });
      }
    });
  });
});

module.exports = router;
