const Service = require('../models/service');

async function getAllServices(req, res) {
    try {
        const services = await Service.find();
        res.json(services);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}

async function getServiceById(req, res) {
    const { id } = req.params;
    try {
        const service = await Service.findById(id);
        if (!service) {
            return res.status(404).json({ message: 'Service non trouvé' });
        }
        res.json(service);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}

async function getServicesByNomService(req, res) {
    const { nomservice } = req.query;
    try {
        const services = await Service.find({ nomservice });
        if (!services.length) {
            return res.status(404).json({ message: 'Aucun service trouvé pour ce nomservice' });
        }
        res.json(services);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}

module.exports = {
    getAllServices,
    getServiceById,
    getServicesByNomService,
};
