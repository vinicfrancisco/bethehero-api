const connection = require('../database');

module.exports = {
  async index(req, res) {
    const ongId = req.headers.authorization;

    const incidents = await connection('incidents').select('*').where('ong_id', ongId);

    return res.json(incidents);
  },
};
