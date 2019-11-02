let SqlBase = require("./SqlBase");
class getMessage extends SqlBase {
  constructor() {
    super();
  }
  getAllDraw(callback) {
    let sql = "select *,date_format(time,'%Y-%m-%d %H:%i:%s') from Message ORDER BY time DESC";
    this.connection.query(sql, function(err, result) {
      if (err) {
        console.log("[INSERT ERROR] - ", err.message);
        return;
      }
      callback(result);
    });
  }
}

module.exports = getMessage;
