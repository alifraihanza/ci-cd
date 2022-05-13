const { user_game } = require("../models");


module.exports = {
    getAllApi: (req, res) => {
        user_game.findAll()
        .then((usergame) => {
            //pakai ini untuk swagger
            res.status(200).json({ message: "Success", usergame }) 
        })
        .catch((err) => {
          console.log(err);
        });
    },getAllViews: (req, res) => {
        user_game.findAll()
        .then((usergame) => {
            //pakai ini untuk views
            res.status(200).render("usergame",{title: "string", usergame}).json({ message: "Success", usergame })
        })
        .catch((err) => {
          console.log(err);
        });
    },
    getId: (req, res) => {
        user_game.findOne({ where: { id: req.params.id } })
        .then((usergame) => {
            if (usergame) {
                res.status(200).json({ message: "Success", usergame })
              } else {
                res.status(404).json({ message: 'User Game Tidak di temukan', usergame });
              }
        console.log(req.params.id, usergame)
        })
        .catch((error) => res.status(422).json({ message: "Error get data", error })
        );
    },
    Post: (req, res) => {
        user_game.create({
            nama_pengguna: req.body.nama_pengguna,
            kata_sandi: req.body.kata_sandi,
        })
            .then((usergame) => {
            res.status(201).json({ message: "Success menambahkan data", usergame })
        })
            .catch((err) => res.status(422).json("Can't create usergame"))
    },
    Put: (req, res) => {
    const { nama_pengguna, kata_sandi } = req.body
    user_game.update(
        {
            nama_pengguna,
            kata_sandi,
        },
        {
            where: { id: req.params.id},
        })
        .then((usergame) => {
            res.status(201).json({ message: "Success", usergame })
          })
        .catch((err) => res.status(422).json(err))
    },
    Delete: (req, res) => {
        user_game.destroy({ where: { id: req.params.id } })
        .then((usergame) => {
            res.status(200).json({ message: "usergame dihapus", usergame })
        })
        .catch((err) => res.status(422).json(err))
    },
}