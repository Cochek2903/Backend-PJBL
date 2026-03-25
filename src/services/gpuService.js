const gpuModel = require('../models/gpuModel');

exports.getAll = async () => {
  return await gpuModel.findAll();
};

exports.getById = async (id) => {
  const gpu = await gpuModel.findById(id);

  if (!gpu) {
    throw new Error("GPU não encontrada");
  }

  return gpu;
};

exports.create = async (data) => {
  if (!data.nome || !data.preco) {
    throw new Error('Nome e preço são obrigatórios');
  }

  return await gpuModel.create(data);
};

exports.update = async (id, data) => {
  const existing = await gpuModel.findById(id);

  if (!existing) {
    throw new Error("GPU não encontrada");
  }

  return await gpuModel.update(id, data);
};

exports.delete = async (id) => {
  const existing = await gpuModel.findById(id);

  if (!existing) {
    return false;
  }

  await gpuModel.delete(id);

  return true;
};