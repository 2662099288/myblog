class SqlBase {
  constructor() {
    let mysql = require("mysql"); 
    this.connection = mysql.createConnection({
      host: "localhost", 
      user: "root", 
      password: "123456", 
      port: "3306",
      database: "test" 
    });
    //2,连接
    this.connection.connect();
  }
}

module.exports = SqlBase;
