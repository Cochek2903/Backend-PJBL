const db = require('../config/database');

exports.findAll = async () => {
  const [rows] = await db.query('SELECT * FROM gpus');
  return rows;
};

exports.findById = async (id) => {
  const [rows] = await db.query('SELECT * FROM gpus WHERE id = ?', [id]);
  return rows[0];
};

exports.create = async (data) => {
  const [result] = await db.query('INSERT INTO gpus SET ?', [data]);
  return result;
};

exports.update = async (id, data) => {
  await db.query('UPDATE gpus SET ? WHERE id = ?', [data, id]);
};

exports.delete = async (id) => {
  await db.query('DELETE FROM gpus WHERE id = ?', [id]);
};