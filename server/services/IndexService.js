let DrawModel = require("../model/DrawModel");
class IndexService {
    constructor() {
    }
    getData(callback) {
        //创建对象
        let courseModel = new DrawModel();
        let list={};
        courseModel.getAllDraw(function (courses) {
            list.courses=courses;
            callback(list);
        });
    }

}
module.exports = IndexService;