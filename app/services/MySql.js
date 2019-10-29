var express     = require('express');
var app         = express();
var mysql       = require('mysql');
var bodyParser  = require('body-parser');

app.use(bodyParser.json({type:'application/json'}));
app.use(bodyParser.urlencoded({extended:true}));

var con = mysql.createConnection({
 
    host:'mysql12-farm70.uni5.net',
    //port:'8889',
    user:'sayeghtv',
    password:'sayeghtv',
    database: 'sayeghtv'

});

var server = app.listen(19000, function(){
  var host = server.address().address
  var port = server.address().port
  console.log("start");

});

con.connect(function(error){
  if(error) console.log(error);
  else console.log("connected");
});

app.get('/ms_leiloes', function(req, res){
  con.query('select * from ms_leiloes', function(error, rows, fields){
        if(error) console.log(error);

        else{
            console.log(rows);
            res.send(rows);

        }

  });
});