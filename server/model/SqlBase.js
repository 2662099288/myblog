class SqlBase {
  constructor() {
    let mysql = require("mysql"); 
    this.connection = mysql.createConnection({
      host: "cdb-a9y1iffo.cd.tencentcdb.com", 
      user: "root", 
      password: "cdhq1234", 
      port: "10055",
      database: "myblog" 
    });
    //2,连接
    this.connection.connect();
  }
}

module.exports = SqlBase;
