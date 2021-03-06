var express= require('express');
var bp= require('body-parser');
var http= require ('http');
var route=require('./routes/main');

var app=express();

app.use(express.static('public'));
app.use(bp.urlencoded({
    extended:true
}))
app.use(bp.json());

app.listen(3000,function(req,res){
    console.log('Web Server Started... Listening to port 3000...');
})

route.init({
    app:app
});

app.use('/test',function(req,res){
    res.send('This is test route');
})