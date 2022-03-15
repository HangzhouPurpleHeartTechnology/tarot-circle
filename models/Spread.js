const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const SpreadSchema = new Schema(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    title: { type: String, required: true },
    description: { type: String, required: true },
    cards: { type: [String], required: true },
    cardSpread: { type: Number, required: true },
  },
  {
    timestamps: true,
  }
);

module.exports = BirthChart = mongoose.model('Spread', SpreadSchema);
