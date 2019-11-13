// const cool = require("cool-ascii-faces");
var express = require("express");
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
// import Test from "./client/src/review/index.jsx";
var app = express();
// const pic = require("./nav");

const URI = require("./config/keys").mongooURI;
mongoose.connect(URI, { useNewUrlParser: true });

var db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function() {
  console.log("we are connected");
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("client"));
const Item = require("./dataBase/db.js").Item;
const it = require("./dataBase/db.js");
app.get("/item", (req, res) => {
  Item.find({}).then(items => res.json(items));
});

app.get("/id", function(req, res) {
  var d = req.query.id;
  console.log(d);
  console.log("Request Type:", req.method);
  Item.findOne({ id: d }, (err, data) => {
    if (err) {
      console.log("Err", err);
    }
    console.log(data);
    res.send(data);
  });
  //next();
});

// app.get("/:id", (req, res, next) => {});

const port = process.env.PORT || 8000;
app.listen(port, function() {
  console.log("listening on port " + port);
});
