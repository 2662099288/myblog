let DrawModel = require("../model/DrawModel");
let DrawModel1 = require("../model/DrawModel1");
let EventList = require("../model/EventList");
class IndexService {
     constructor() {}
     getData(callback) {
          //创建对象
          let courseModel = new DrawModel();
          let courseModel1 = new DrawModel1();
          let eventList = new EventList();
          let list = {};
          courseModel.getAllDraw(function (courses) {
               courseModel1.getAllDraw(function (courses1) {
                    eventList.getAllDraw(function (eventList) {
                         list.courses = courses;
                         list.courses1 = courses1;
                         list.eventList = eventList;
                         callback(list);
                    });
               });
          });

     }

}
module.exports = IndexService;