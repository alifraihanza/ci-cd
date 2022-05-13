const { user_game_history } = require("../models");


module.exports = {
    getAllApi: (req, res) => {
        user_game_history.findAll()
        .then((usergamehistory) => {
            //pakai ini untuk swagger
            res.status(200).json({ message: "Success", usergamehistory }); 
        })
        .catch((err) => {
          console.log(err);
        });
    },
    getAllViews: (req, res) => {
        user_game_history.findAll()
        .then((usergamehistory) => {
            //pakai ini untuk views
            res.status(200).render("usergamehistory",{title: "string", usergamehistory})
        })
        .catch((err) => {
          console.log(err);
        });
    },
    getId: (req, res) => {
        user_game_history.findOne({ where: { id: req.params.id } })
        .then((usergamehistory) => {
          console.log(req.params.id, usergamehistory);
          res.status(200).json({ message: "Success", usergamehistory });
        })
        .catch((error) =>
          res.status(422).json({ message: "Error get data", error })
        );
    },
    Post: (req, res) => {
        user_game_history.findOne({ where: { id: req.params.id } })
        user_game_history.create({
            id_pengguna: req.body.id_pengguna,
            menang: req.body.menang,
            kalah: req.body.kalah,
            tanggal_history: req.body.tanggal_history,
        })
            .then((usergamehistory) => {
            res.status(201).json({ message: "Success menambahkan data", usergamehistory });
        })
            .catch((err) => res.status(422).json("Can't create usergame"));
    },
    Put: (req, res) => {
        const {  menang, kalah, tanggal_history, } = req.body;
        user_game_history.update({
            menang,
            kalah,
            tanggal_history,
        },
        {
            where: { id: req.params.id},
        })
        .then((usergamehistory) => {
            res.status(201).json({ message: "Success", usergamehistory });
        })
        .catch((err) => res.status(422).json(err));
    },
    Delete: (req, res) => {
        user_game_history.destroy({ where: { id: req.params.id } })
        .then((usergamehistory) => {
            res.status(200).json({ message: "usergamehistory dihapus", usergamehistory });
        })
        .catch((err) => res.status(422).json(err));
    },
}