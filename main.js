const express = require('express');
const app = express();
var qs = require('querystring');
var template = require('./page/page.js');
var db = require('./lib/db.js')
var user_register = require('./lib/user_register.js');
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: false}));

app.get('/', (req,res) => {
    // res.writeHead(200);
    res.send(template.main_pg());//route routing
})
app.get('/next',(req,res)=>{res.end('login');});
app.post('/login_process',(req,res)=>{
    user_register.login(req,res);
})
app.get('/pwerror',(req,res)=>{
    res.send(template.main_pg('비밀번호가 틀립니다!'));
})
app.get('/sign_up',(req,res)=>{
    res.send(template.signup());
})
app.get('/sign_up/emerror',(req,res)=>{
    res.send(template.signup("That email address is taken. Try another."));
})
app.get('/sign_up/codeerror',(req,res)=>{
    res.send(template.signup("Enter Code is not correct!"));
})

app.post('/signup_process',(req,res)=>{
    
    user_register.check_signup(req,res);
});
app.get('/profile',(req,res)=>{
    res.send(template.profile());
})
app.listen(3100,() => console.log('Example app listening on port 3100!'));