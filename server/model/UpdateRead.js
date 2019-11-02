let SqlBase = require("./SqlBase");
class SendMessage extends SqlBase {
     constructor() {
          super();
     }
     update(id,callback) {
          let sql = "update eventlist set BrowseNumber=(BrowseNumber + 1) where id="+id+";";
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