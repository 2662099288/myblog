let IndexService = require("../services/IndexService");
// let Useradd = require("../model/UseraddModel");
module.exports.index = function(req, res) {
  //用户添加
//   let useradd=new Useradd();
//   if(req.query)
//   useradd.insert(req.query.name,req.query.password,function (data) {
//     console.log(data.insertId);
// })
  let indexService = new IndexService();
  indexService.getData(function(ob) {
    res.json(ob);
  });
};
