let express = require("express");
let mysql = require("mysql");
let app = express();
let bodyParser = require("body-parser");
let urlencodedParser = bodyParser.urlencoded({
  extended: false
});
app.use(express.static("public"));
//跨域访问
app.all("*", function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "http://localhost:8888");
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
  res.header("X-Powered-By", " 3.2.1");
  res.header("Content-Type", "application/json;charset=utf-8");
  next();
});
let ip = "http://192.168.1.117:";
let port = "8888";
let indexController = require("./controllers/IndexController");
let likeController = require("./controllers/likeController");
let registerController = require("./controllers/registerController");
let sendmessageController = require("./controllers/sendmessageController");
let readController = require("./controllers/readController");
app.get('/index',indexController.index)
app.get('/like',likeController.index)
app.get('/register',registerController.index)
app.get('/sendmessage',sendmessageController.index)
app.get('/read',readController.index)
app.listen(8888, function () {
   console.log("启动");
});