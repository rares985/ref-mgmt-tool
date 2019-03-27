var express = require("express");

var bodyParser = require("body-parser");
var mysql = require("mysql");
var app = express();
var router = express.Router();
var sql = require("./db");
var cors = require("cors");

var whitelist = ["http://example.com"];
var corsOptions = {
  origin: function(origin, callback) {
    if (whitelist.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error("Not Allowed by CORS"));
    }
  }
};

var port = process.env.API_PORT || 3001;

app.use(
  bodyParser.urlencoded({
    extended: true
  })
);

app.use(bodyParser.json());

app.use(function(req, res, next) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Credentials", "true");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET,HEAD,OPTIONS,POST,PUT,DELETE"
  );
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers"
  );

  //and remove cacheing so we get the most recent comments
  res.setHeader("Cache-Control", "no-cache");
  next();
});

app.use(cors(corsOptions));

router.get("/", function(req, res) {
  res.json({
    message: "api initialized"
  });
});

router.route("/login").get(function(req, res, next) {
  console.log(req.body.email);
  console.log(req.body.password);

  sql.query("SELECT * FROM users", function(err, dbres) {
    if (err) {
      console.log("QUERY_ERROR : " + err);
    }
    res.json(dbres);
  });
});

app.use("/api", router);

app.listen(port, function() {
  console.log(`api running on port ${port}`);
});
