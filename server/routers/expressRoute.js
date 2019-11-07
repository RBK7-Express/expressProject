var express = require("express");
var router = express.Router();
var dbcontrol = require("../../dataBase/db.js");

router.route("/{id}").get(function(req, res) {
   
   console.log(id)
   res.send()

 
});
router.get('/:id', (req, res) => {
   var t = dbcontrol.itemsModel
   t.findById(req.params.id)
       .then(t => res.json(t))
});

router.route("/").post((req, res)=> {
 res.send();
});


module.exports = router;
