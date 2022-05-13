const { UserGame } = require("../models");

module.exports = {
    form: (req, res) => {
        if(!login){
            res.render('index')
        } 
    },
    signin: (req, res, next) => {
        if(!login){
            res.render('index')
        } else {
            next();
        }
    },
    login: (req, res, next) => {
        const { nama_pengguna, kata_sandi } = req.body;
        UserGame.findOne(
            {where: [{username: nama_pengguna},{password: kata_sandi}]}
        )
    }
}

