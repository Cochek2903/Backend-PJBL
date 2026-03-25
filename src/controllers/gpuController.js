const gpuService = require('../services/gpuService');

exports.getAll = async (req, res) => {
  try {
    const data = await gpuService.getAll();
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getById = async (req, res) => {
  try {
    const data = await gpuService.getById(req.params.id);
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.create = async (req, res) => {
  try {
    await gpuService.create(req.body);
    res.json({ message: 'GPU criada com sucesso' });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.update = async (req, res) => {
  try {
    await gpuService.update(req.params.id, req.body);
    res.json({ message: 'GPU atualizada' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.delete = async (req, res) => {
  try {
    const deleted = await gpuService.delete(req.params.id);

    if (!deleted) {
      return res.status(404).json({ message: "GPU não encontrada" });
    }

    res.json({ message: "GPU deletada com sucesso" });

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};