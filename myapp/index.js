var express = require("express");
var app     = express();
var path    = require("path");

// var auth = funct(req,res,next){
//   // something
//   console.log("I am in auth")
//   next();
// }
// app.get('/users',function(req,res){
//   res.send('Hello world')
// });
//
// app.all('/secret', function (req, res, next) {
//   console.log('Accessing the secret ,section ...');
//   next();
//    // pass control to the next handler
// });

var requestTime = function(req,res,next){
  console.log("in requestTime");
  req.requestTime = Date.now();
  next();
}
// app.use(requestTime);
app.get('/',requestTime,function(req,res){
  console.log("I am in requestTime calling func")
  responseText = "Today's date is " + req.requestTime;
  res.send(responseText);
})

app.listen(3000);

// app.get('/',auth,function(req,res){
//   res.sendFile(path.join(__dirname+'/index.html'));
//   //__dirname : It will resolve to your project folder.
// });
//
// app.get('/about',function(req,res){
//   res.sendFile(path.join(__dirname+'/about.html'));
//   //__dirname : It will resolve to your project folder.
// });

// app.listen(3000,function(req,res){
//   console.log("Running at Port 3000");
//   res.send("respond secret key");
// });
