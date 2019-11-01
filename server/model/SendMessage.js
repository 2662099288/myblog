let SqlBase = require("./SqlBase");
class SendMessage extends SqlBase {
     constructor() {
          super();
     }
     insert(name, message,callback) {
          let sql = "INSERT INTO message(username, message,time) VALUES ("+"'"+name+"'"+","+"'"+message+"'"+",now()"+");";
          this.connection.query(sql, function (err, result) {
               if (err) {
                    console.log("[UPDATE1 ERROR] - ", err.message);

               }
               callback(result);


          });
          this.connection.end();
     }
}

module.exports = SendMessage;