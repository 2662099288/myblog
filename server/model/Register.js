let SqlBase = require("./SqlBase");
class Register extends SqlBase {
     constructor() {
          super();
     }
     insert(name, password, callback) {
          let values=`name,password`
          let sql = "INSERT INTO user(username, userpassword) VALUES ("+"'"+name+"'"+","+"'"+password+"'"+");";
          this.connection.query(sql, function (err, result) {
               if (err) {
                    console.log("[UPDATE1 ERROR] - ", err.message);

               }
               callback(result);


          });
          this.connection.end();
     }
}

module.exports = Register;