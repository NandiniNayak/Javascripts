var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

var fullName = function(req,res,next){
  console.log("I am in fullName")
  req.myName = "Nandini Nayak"
  next();
}
router.get('/module1',fullName, function(req, res, next) {
  res.render('index', { name: req.myName });
});

module.exports = router;
