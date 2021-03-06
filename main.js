const express = require('express');
const app = express();
var qs = require('querystring');
var template = require('./page/page.js');
var db = require('./lib/db.js')
var user_register = require('./lib/user_register.js');
var user = require('./page/user.js');
const bodyParser = require('body-parser');
var user_name = "해커톤 참가자"
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(__dirname + '/static'));
app.get('/', (req,res) => {
    res.send(template.main_pg());
})
app.get('/home',(req,res)=>{
  res.send(template.home(user_name));
})
app.post('/login_process',(req,res)=>{
    user_name = req.body.name;
    user_register.login(req,res);
})
app.get('/pwerror',(req,res)=>{
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
    user_name = req.body.name;
    user_register.check_signup(req,res);
});
app.get('/nav_mypage',(req,res)=>{
    res.send(template.nav_mypage());
})

app.get('/make_team',(req,res)=>{
  res.send(template.make_team());
})
app.get('/chat_log_save',(req,res)=>{
  var i = 0;
  while (i < chat_log_list.length)
  {
    console.log(chat_log_list);
    fs.appendFileSync('database/chat_log.txt',chat_log_list[i]+'\n');
    i++;
  }
  res.redirect('/home');
})

app.get('/images/:id',(req,res)=>{
  var image_id = req.params.id;
  fs.readFile(`static/images/${image_id}`,function(err,data){
    res.send(data);
  })
})
app.get('/create_team',(req,res)=>{
  res.send(template.create_team());
})
app.get('/user/:user_nm',(req,res)=>{
  var user_nm = req.params.user_nm;
  res.send(user.userpage(user_nm));
})
app.get('/collab/:collab_nm',(req,res)=>{
  var collab_nm = req.params.collab_nm;
  res.send(user.collab(collab_nm))
})
app.get('/bridge',(req,res)=>{
  res.send(`<!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <link href="https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500;600;700&display=swap" rel="stylesheet">
      <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100;300;400;500;700;900&display=swap" rel="stylesheet">
      <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@200;400;500;600;700;800;900&display=swap" rel="stylesheet">
  
      <link rel="stylesheet" href="/css/style.css">
  
  
      <title>Persona Test</title>
  </head>
  
  
  
  
  <body>
      <style>
          body{
              width:100%;
              background-color: black;
          }
          
          .go_test{
              position:fixed;
              width:280px;
              height:60px;
              bottom:60px;
              right:42vw;
              background-color:white;
              color:black;
              border-radius:50px;
              border: 1px solid black;
              text-align:center;
              line-height: 60px;
  
              
              font-size:18px;
              font-family: Noto Sans KR;
              font-weight: 700;
          }
  
          .go_test:hover{
              background-color: #FFFC79;
              color: black;
          }
      </style>
  
  <img src="/images/typeform_bridge_1.png" style="width:100%;"></img>
  <img src="/images/typeform_bridge_2.png" style="width:100%;"></img>
  
  <a href="https://datsciseol.typeform.com/to/jb9FuEE4" class="go_test">
      내 팀 페르소나가 궁금해요!
      </a>
  
      
  </body>
  </html>
  `)

})
app.get('/construction',(req,res)=>{
  res.send(user.construction());
})
app.listen(3000,() => console.log('Example app listening on port 3000!'));


const fs = require('fs');
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
    io.to(room[a]).emit('chat message', name, msg);
    chat_log_list.push(msg);
    console.log(chat_log_list);

  });
});


http.listen(3400, () => {
  console.log('Chat Server at 3400');
});