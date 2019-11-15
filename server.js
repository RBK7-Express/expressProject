var express = require("express");
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
var app = express();

const URI =
  "mongodb+srv://basima:basima@cluster0-stpym.mongodb.net/expressDB?retryWrites=true&w=majority";
mongoose.connect(URI, { useNewUrlParser: true });

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
    res.status(200).send(data);
  });
  //next();
});

// app.get("/:id", (req, res, next) => {});

const port = process.env.PORT || 8000;
app.listen(port, function() {
  console.log("listening on port " + port);
});
