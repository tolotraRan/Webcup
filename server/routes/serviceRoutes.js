const express = require('express');
const router = express.Router();
const serviceController = require('../controllers/serviceController');

// GET - Récupérer tous les services
router.get('/', serviceController.getAllServices);

// GET - Récupérer les services filtrés par nomservice
router.get('/filter', serviceController.getServicesByNomService);

// POST - Créer un nouveau service*

module.exports = router;
