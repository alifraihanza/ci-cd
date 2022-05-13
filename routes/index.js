const express = require("express");
const router = express.Router();
const auth = require('../middleware/auth');

//
const usergame = require("../controllers/user_gameController")
const usergamebiodata = require("../controllers/user_game_biodataController")
const usergamehistory = require("../controllers/user_game_historyController")
//
const { register, loginAPI } = require('../controllers/auth_api');
router.post('/api/register', register);
router.post('/api/loginAPI', loginAPI);
//
const home = require("../controllers/homeController");
// router.get("/", home.index);
router.get("/home", home.index);
//  
const login = require("../controllers/loginController");
router.get("/login", login.login);

router.get('/usergameapi',  auth, usergame.getAllApi)
router.get('/usergameviews', usergame.getAllViews)
router.get('/usergame/:id', auth, usergame.getId)
router.post('/usergame', auth, usergame.Post)
router.put('/usergame/:id', auth, usergame.Put)
router.delete('/usergame/:id', auth, usergame.Delete)

router.get('/usergamebiodataapi', auth, usergamebiodata.getAllApi)
router.get('/usergamebiodataviews', usergamebiodata.getAllViews)
router.get('/usergamebiodata/:id', auth, usergamebiodata.getId)
router.post('/usergamebiodata', auth, usergamebiodata.Post)
router.put('/usergamebiodata/:id', auth, usergamebiodata.Put)
router.delete('/usergamebiodata/:id', auth, usergamebiodata.Delete)

router.get('/usergamehistoryapi', auth, usergamehistory.getAllApi)
router.get('/usergamehistoryviews',  usergamehistory.getAllViews)
router.get('/usergamehistory/:id', auth, usergamehistory.getId)
router.post('/usergamehistory', auth, usergamehistory.Post)
router.put('/usergamehistory/:id', auth, usergamehistory.Put)
router.delete('/usergamehistory/:id', auth, usergamehistory.Delete)





router.post(
    "/login",
    (req, res) => {
        res.json({username: req.body.username})
    }
);  
router.get(
    "/",
    (req, res) => {
        res.render("login")
    }
);  



module.exports = router;