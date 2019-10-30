let SqlBase = require("./SqlBase");
class UpdatalikeNumber extends SqlBase {
  constructor() {
    super();
  }
  update(heartNumber,callback) {
    let sql = "update heartNumber set heartNumber=(heartNumber + 1);";
    this.connection.query(sql, function(err, result) {
      if (err) {
        console.log("[UPDATE1 ERROR] - ", err.message);
        
      }
     callback(result);
      
      
    });
    this.connection.end();
  }
}

module.exports = UpdatalikeNumber;
