let IndexService = require("../services/IndexService");
let UpdateLikeNumber = require("../model/UpdatalikeNumber");

module.exports.index = function(req, res) {
  let updateNumber=new UpdateLikeNumber();
   console.log(req.query);
     updateNumber.update(req.data,function(ob){
          console.log(111)
     })
  
//   UpdateLikeNumber.insert(req.query.name,req.query.password,function (data) {
//     console.log(data.insertId);
// })
  let indexService = new IndexService();
  indexService.getData(function(ob) {
     res.json(ob);
  });
}