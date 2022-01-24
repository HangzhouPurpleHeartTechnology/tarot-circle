const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BirthChartSchema = new Schema(
  {
    dateTime: { type: Date, required: true },
    nickname: { type: String, required: true },
    user: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    midheaven: {
      sign: String,
      chartPosition: {
        ecliptic: { type: Number, required: true },
        horizon: { type: Number, required: true },
      },
    },
    sun: {
      sign: { type: String, required: true },
      house: { type: Number, required: true },
      chartPosition: {
        ecliptic: { type: Number, required: true },
        horizon: { type: Number, required: true },
      },
    },
    moon: {
      sign: { type: String, required: true },
      house: { type: Number, required: true },
      chartPosition: {
        ecliptic: { type: Number, required: true },
        horizon: { type: Number, required: true },
      },
    },
    mercury: {
      sign: { type: String, required: true },
      house: { type: Number, required: true },
      chartPosition: {
        ecliptic: { type: Number, required: true },
        horizon: { type: Number, required: true },
      },
    },
    venus: {
      sign: { type: String, required: true },
      house: { type: Number, required: true },
      chartPosition: {
        ecliptic: { type: Number, required: true },
        horizon: { type: Number, required: true },
      },
    },
    mars: {
      sign: { type: String, required: true },
      house: { type: Number, required: true },
      chartPosition: {
        ecliptic: { type: Number, required: true },
        horizon: { type: Number, required: true },
      },
    },
    jupiter: {
      sign: { type: String, required: true },
      house: { type: Number, required: true },
      chartPosition: {
        ecliptic: { type: Number, required: true },
        horizon: { type: Number, required: true },
      },
    },
    saturn: {
      sign: { type: String, required: true },
      house: { type: Number, required: true },
      chartPosition: {
        ecliptic: { type: Number, required: true },
        horizon: { type: Number, required: true },
      },
    },
    uranus: {
      sign: { type: String, required: true },
      house: { type: Number, required: true },
      chartPosition: {
        ecliptic: { type: Number, required: true },
        horizon: { type: Number, required: true },
      },
    },
    neptune: {
      sign: { type: String, required: true },
      house: { type: Number, required: true },
      chartPosition: {
        ecliptic: { type: Number, required: true },
        horizon: { type: Number, required: true },
      },
    },
    pluto: {
      sign: { type: String, required: true },
      house: { type: Number, required: true },
      chartPosition: {
        ecliptic: { type: Number, required: true },
        horizon: { type: Number, required: true },
      },
    },
    chiron: {
      sign: { type: String, required: true },
      house: { type: Number, required: true },
      chartPosition: {
        ecliptic: { type: Number, required: true },
        horizon: { type: Number, required: true },
      },
    },
    sirius: {
      sign: { type: String, required: true },
      house: { type: Number, required: true },
      chartPosition: {
        ecliptic: { type: Number, required: true },
        horizon: { type: Number, required: true },
      },
    },
  },
  {
    timestamps: true,
  }
);

module.exports = BirthChart = mongoose.model('BirthChart', BirthChartSchema);
