let DrawModel = require("../model/DrawModel");
let DrawModel1 = require("../model/DrawModel1");
let EventList = require("../model/EventList");
let GetUser = require("../model/GetUser");
let GetMessage = require("../model/GetMessage");
class IndexService {
     constructor() {}
     getData(callback) {
          //创建对象
          let list = {};
          let courseModel = new DrawModel();
          let courseModel1 = new DrawModel1();
          let eventList = new EventList();
          let getUser = new GetUser();
          let getMessage= new GetMessage();
          
          courseModel.getAllDraw(function (courses) {
               courseModel1.getAllDraw(function (courses1) {
                    eventList.getAllDraw(function (eventList) {
                         getUser.getAllDraw(function (User) {
                              getMessage.getAllDraw(function (Message) {
                              list.courses = courses;
                              list.courses1 = courses1;
                              list.eventList = eventList;
                              list.User = User;
                              list.Message=Message;
                              callback(list);
                              });
                         });
                    });
               });
          });

     }

}
module.exports = IndexService;