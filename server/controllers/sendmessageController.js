let IndexService = require("../services/IndexService");
let SendMessage = require("../model/SendMessage");

module.exports.index = function(req, res) {
  let Sendmessage=new SendMessage();
  Sendmessage.insert(req.query.username,req.query.sendmessage,function(ob){
         
     })
  
//   UpdateLikeNumber.insert(req.query.name,req.query.password,function (data) {
//     console.log(data.insertId);
// })
  let indexService = new IndexService();
  indexService.getData(function(ob) {
     res.json(ob);
  });
}