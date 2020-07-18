const express = require('express');
const app = express();
var qs = require('querystring');
var template = require('./page/page.js');
var db = require('./lib/db.js')
var user_register = require('./lib/user_register.js');
const bodyParser = require('body-parser');
var user_name;
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(__dirname + '/static'));
app.get('/', (req,res) => {
    // res.writeHead(200);
    res.send(template.main_pg());//route routing
})
// app.get('/home',(req,res)=>{res.end(`<html><meta charset="utf-8"><a href="/chat" onclick="javascript:event.target.port=3400">채팅서버가기</a></html>`);});
app.get('/home',(req,res)=>{
  res.send(template.home(user_name));
})
app.post('/login_process',(req,res)=>{
    user_name = req.body.name;
    user_register.login(req,res);
})
app.get('/pwerror',(req,res)=>{ //메인페이지 로그인 비밀번호 오류
    res.send(template.main_pg('Wrong Password!'));
})
app.get('/sign_up',(req,res)=>{
    res.send(template.signup());
})
app.get('/sign_up/emerror',(req,res)=>{
    res.send(template.signup("That Name is taken. Try another."));
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

app.get('/make_team',(req,res)=>{
  res.send(template.make_team());
})
app.get('/chat_log_save',(req,res)=>{
  var i = 0;
  while (i < chat_log_list.length)
  {
    fs.appendFileSync('./database/chat_log.txt',chat_log_list[i]+'\n');
    i++;
  }
  res.redirect('/home');
  // res.send(template.home(user_name));
})

app.get('/images/:id',(req,res)=>{
  var image_id = req.params.id;
  fs.readFile(`static/images/${image_id}`,function(err,data){
    // res.writeHead(200,{'Content-Type':'text/html'});
    res.send(data);
  })
})
app.get('/create_team',(req,res)=>{
  res.send(template.create_team());
})
// app.get('/style/:id',(req,res)=>{
//   var css_id = req.params.id;
//   fs.readFile(`static/style`)
// })
app.listen(3100,() => console.log('Example app listening on port 3100!'));

// var express = require('express');
// var app = express();

const fs = require('fs');
// const app = require('express')();
const http = require('http').Server(app);
const io = require('socket.io')(http);
let chat_log_list = [];

app.set('view engine', 'ejs');
app.set('views', './page');


let room = ['room1', 'room2','room3','room4','room5','room6','room7','room8'];
let a = 0;


app.get('/chat', (req, res) => {
  res.render('chat');
});


io.on('connection', (socket) => {
  socket.on('disconnect', () => {
    console.log('user disconnected');
  });


  socket.on('leaveRoom', (num, name) => {
    socket.leave(room[num], () => {
      console.log(name + ' leave a ' + room[num]);
      io.to(room[num]).emit('leaveRoom', num, name);
      // fs.appendFileSync('database/chat_log.txt',chat_log_list);
    });
  });


  socket.on('joinRoom', (num, name) => {
    socket.join(room[num], () => {
      console.log(name + ' join a ' + room[num]);
      io.to(room[num]).emit('joinRoom', num, name);
    });
  });


  socket.on('chat message', (num, name, msg) => {
    a = num;
    // console.log(num);
    // fs.appendFileSync('database/chat_log.txt',msg,'utf-8');/
    io.to(room[a]).emit('chat message', name, msg);
    chat_log_list.push(msg);
    console.log(chat_log_list);

  });
});


http.listen(3400, () => {
  console.log('Chat Server at 3400');
});