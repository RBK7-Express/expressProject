const cool = require("cool-ascii-faces");
var express = require("express");
var bodyParser = require("body-parser");
var mongoose = require("mongoose");

var app = express();

//
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

app.get("/item", (req, res) => {
  Item.find({}).then(items => res.json(items));
});
app.get("/cool", (req, res) => res.send(cool()));

const port = process.env.PORT || 8000;
app.listen(port, function() {
  console.log("listening on port " + port);
});
