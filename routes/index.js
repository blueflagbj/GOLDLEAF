var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
exports.index = function(req, res){
    res.render('index', { title: 'Polls' });
};

var mongo = require("mongoose"); //
var models = require("./models"); //引入 model
var User = models.User;

mongo.connect("mongodb://127.0.0.1:27017/goldleaf"); //连接数据库

/* GET home page. */
router.get("/", function(req, res) {
  res.render("index", { title: "Express" });
});


router.get("/login", function(req, res) { //转到登录页面
  res.render("login", { title: "登录" });
});


router.post("/login", function(req, res) { //处理登录请求
  var query_doc = { userid: req.body.userid, password: req.body.password };
  User.count(query_doc, function(err, doc){
    if(doc == 1){//验证成功,转到 欢迎页面
      res.redirect("/welcome?userid=" + query_doc.userid);
    }else{
      res.redirect("/login");
    }
  });

});

router.get("/logout", function(req, res) {//注销,转到登录页面
  res.redirect("/login");
});

router.get("/welcome", function(req, res) {//欢迎页面
  var userid = req.query.userid;
  res.render("welcome", { title: "", userid: userid});
});

module.exports = router;