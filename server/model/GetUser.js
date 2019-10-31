let SqlBase = require("./SqlBase");
class DrawModel extends SqlBase {
  constructor() {
    super();
  }
  getAllDraw(callback) {
    let sql = "select * from user";
    this.connection.query(sql, function(err, result) {
      if (err) {
        console.log("[INSERT ERROR] - ", err.message);
        return;
      }
      callback(result);
    });
  }
}

module.exports = DrawModel;
