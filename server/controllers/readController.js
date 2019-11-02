let IndexService = require("../services/IndexService");
let Read = require("../model/UpdateRead");

module.exports.index = function(req, res) {
  let read=new Read();
  read.update(req.query.id,function(ob){
         
     })
  
//   UpdateLikeNumber.insert(req.query.name,req.query.password,function (data) {
//     console.log(data.insertId);
// })
  let indexService = new IndexService();
  indexService.getData(function(ob) {
     res.json(ob);
  });
}