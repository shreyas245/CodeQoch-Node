var express = require('express');
var app = express();
app.get('/',function(req,res){
    res.send('This is our HomePage');
})

app.get('/contact',function(req,res){
    res.send('This is our Contact Page');
})

app.get('/profile/:name',function(req,res){
    res.send('You requested to see a profile with the name of ' + req.params.name);
});

app.listen(3000);

