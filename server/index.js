var express = require("express");
var bodyParser = require("body-parser");
var expressRoute = require("./routers/expressRoute.js");
var mongoose = require("mongoose");

var app = express();
mongoose.connect("mongodb://localhost/expressProj");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("./client"));
app.use("/", expressRoute);

app.listen(8000, function() {
    console.log("listening on port 8000");
});