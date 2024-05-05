const express = require('express');
const router = express.Router();
const RendezVous = require('../models/rdvmodel');

router.post('/creer', async (req, res) => {
  try {
    const { id_Rendez_vous, id_personne_connectee, id_personne_service } = req.body;
    const rendezVous = new RendezVous({ id_Rendez_vous, id_personne_connectee, id_personne_service });
    await rendezVous.save();
    res.status(201).send({ message: 'Rendez-vous créé avec succès !', rendezVous });
  } catch (error) {
    console.error('Erreur lors de la création du rendez-vous :', error);
    res.status(500).send({ error: 'Erreur lors de la création du rendez-vous' });
  }
});

module.exports = router;
