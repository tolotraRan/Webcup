// models/RendezVous.js

const mongoose = require('mongoose');

const rendezVousSchema = new mongoose.Schema({
  id_Rendez_vous: {
    type: String,
    required: true,
    unique: true
  },
  id_personne_connectee: {
    type: String,
    required: true
  },
  id_personne_service: {
    type: String,
    required: true
  }
});

const RendezVous = mongoose.model('RendezVous', rendezVousSchema);

module.exports = RendezVous;
