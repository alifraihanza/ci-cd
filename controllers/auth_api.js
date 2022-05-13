/** @format */

const { user_game } = require('../models');
const jwt = require('jsonwebtoken');
require('dotenv').config();

module.exports = {
  register: async (req, res) => {
    // Our register logic starts here
    try {
      // Get user input
      const { nama_pengguna, kata_sandi } = req.body;


      // Create user in our database
      const user = await user_game.create({
        nama_pengguna,
        kata_sandi
      });

      // Create token
      const token = jwt.sign({ id: user.id }, "holaa", {
        expiresIn: '15m',
      });
      // save user token
      user.token = token;

      // return new user
      res.status(200).json({ message: 'Berhasil Membuat User Game', result: user });
    } catch (err) {
      res.status(500).json({ message: 'Gagal Create User Game', err: err.message });
    }
    // Our register logic ends here
  },
  loginAPI: async (req, res) => {
    // Our loginAPI logic starts here
    try {
      // Get user input
      const { nama_pengguna, kata_sandi } = req.body;

      // Validate user input
      if (!(nama_pengguna && kata_sandi)) {
        res.status(400).send('All input is required');
      }
      // Validate if user exist in our database
      const user = await user_game.findOne({
        where: {
          nama_pengguna: nama_pengguna,
        },
      });

      if (user && kata_sandi) {
        // Create token
        const token = jwt.sign({ id: user.id, nama_pengguna }, "holaa", {
          expiresIn: '15m',
        });

        // save user token
        user.token = token;

        // user
        res.status(200).json(user);
      } else {
        res.status(400).send('nama_pengguna atau kata_sandi salah!');
      }
    } catch (err) {
      console.log(err);
    }
    // Our register logic ends here
  },
};
