const mongoose = require('mongoose');

const serviceSchema = new mongoose.Schema({
  nomservice: {
    type: String,
    required: true
  },
  nom: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  prix: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('services', serviceSchema);
