var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "85.10.205.173",
  port: 3306,
  user: "rares985",
  password: "db4free_Mflwa99-bg,wgeabh!",
  database: "ref_mgmt_db"
});

connection.connect(function(err) {
  if (err) throw err;
});

module.exports = connection;
