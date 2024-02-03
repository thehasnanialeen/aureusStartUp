// Require Mongoose
const mongoose = require("mongoose");

// Define a schema
const infectionSchema = new mongoose.Schema({
  fasta: { type: String, required: true },
  infectionSite: { type: String, required: true },
  labData: [
    {
      drugName: {type: String},
      MIC: {type: String},
    }
  ],
  treatment: {type: String},
  outcome: {type: String, enum: ['Success', 'Failure']}
});

const Infection = mongoose.model('Infection', infectionSchema);

module.exports = Infection;