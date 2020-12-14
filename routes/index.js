var express = require('express');
var router = express.Router();
var MongoClient = require('mongodb').MongoClient;
var upload = require('express-fileupload');

var app = express();
app.use(upload)
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/submit',function(req,res){
  MongoClient.connect("mongodb://localhost:27017",function(err,client){
    if(err)
      console.log('error')
    else
      client.db('clientdata').collection('user').insertOne(req.body)
  })
  res.render('success',{ name:req.body.first_name});
  console.log(req.body)
  console.log(req.files.photo)
})

module.exports = router;