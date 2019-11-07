var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/expProj', {useNewUrlParser: true});
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {console.log("connected")});


var itemsSchema = mongoose.Schema({
    id:{
        type: Number,
        unique: true
    },
    name : String,
    price : String,
    sizes: String,
    colors : String,
    reviews : String,
    imges : String
});
var itemsModel = mongoose.model('Item', itemsSchema);
sample1 = new itemsModel ({
    id : 1,
    name : "T-shirt",
    price : "15JD",
    sizes: "xL , L",
    colors : "red, blue",
    reviews : "it was owesome",
    imges : "https://www.merchadvice.com/wp-content/uploads/2019/03/%D7%98%D7%99-%D7%A9%D7%99%D7%A8%D7%98-%D7%92%D7%91%D7%A8%D7%99%D7%9D-%D7%9B%D7%97%D7%95%D7%9C-1.png"

})
sample1.save();
exports.itemsModel = itemsModel;



