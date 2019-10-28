let DrawModel = require("../model/DrawModel");
let DrawModel1 = require("../model/DrawModel1");
class IndexService {
    constructor() {
    }
    getData(callback) {
        //创建对象
        let courseModel = new DrawModel();
        let courseModel1 = new DrawModel1();
        let list={};
        courseModel.getAllDraw(function (courses) {
          courseModel1.getAllDraw(function (courses1) {
               list.courses=courses;
               list.courses1=courses1;
               callback(list);
           });
        });
        
    }

}
module.exports = IndexService;