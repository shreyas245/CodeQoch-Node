var express = require('express');
var bodyParser = require('body-parser');
var session = require('express-session');
var cookieParser = require('cookie-parser');

var app = express();
var urlencodedParser = bodyParser.urlencoded({ extended: false })

app.set('view engine', 'ejs');
app.use('/assets', express.static('assets'));
app.use(cookieParser());

app.use(session({
    secret:'secret-key',
    resave:false,
    saveUninitialized:false,
}));

app.get('/', function (req, res) {
    res.render('index');
});
app.get('/index', function (req, res) {
    res.render('index');
});
app.get('/home', function (req, res) {
    res.render('index');
});

function validateSession(req,res,next){
    if(req.session == null || req.session.email == null){
        res.redirect('/login')
    }
    else{
        next();
    }
}

app.get('/login', function (req, res) {
    const {cookies} = req;
    var email = '';
    var pwd = '';
    if('email' in cookies){
        email = cookies.email;
        pwd =cookies.pwd;
    }
    res.render('login',{email:email,pwd:pwd});
});

app.get('/contact',validateSession,function(req,res){
    var email=req.session.email;
    res.render('contact',{qs:req.query,usermail:email});
})

app.get('/logout',function(req,res){
    //remove all session
    //redirect to login page 
    req.session.destroy();
   
    res.redirect('login');
})

app.post('/login', urlencodedParser, function (req, res) {
    res.cookie('email',req.body.email);
    res.cookie('pwd',req.body.password);
    req.session.email = req.body.email;
    res.redirect('index');
});

app.get('/deleteCookies', function (req, res) {
    res.clearCookie("email");
    res.clearCookie("pwd");
    res.redirect('login');
});

app.post('/contact', urlencodedParser, function (req, res) {
    console.log(req.body);
    res.render('contact-success', { data: req.body });
});

app.get('/profile/:name', function (req, res) {
    var data = { age: 30, job: 'developer', hobbie: ['eating', 'fighting', 'singing'] };
    res.render('profile', { person: req.params.name, data: data });
});



app.listen(3000);

