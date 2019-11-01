let IndexService = require("../services/IndexService");
let Register = require("../model/Register");

module.exports.index = function(req, res) {
  let register=new Register();
   register.insert(req.query.username,req.query.password,function(ob){
         
     })
  
//   UpdateLikeNumber.insert(req.query.name,req.query.password,function (data) {
//     console.log(data.insertId);
// })
  let indexService = new IndexService();
  indexService.getData(function(ob) {
     res.json(ob);
  });
}