var fs = require('fs');
exports.main_pg = (notmatch)=>{
  if (notmatch === undefined){
    notmatch = '';
  }
  return `
  <!doctype html>

  <html>
  
    <head>
        <meta charset="utf-8">
        <title>AngelHack Seoul 2021</title>
        <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100;200;300;400;500;600;700;800;900&display=swap" rel="stylesheet">
        <link href="https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500;600;700&display=swap" rel="stylesheet">
    </head>
  
    <body>
  
      <style>
        body{margin:0px; padding:0px; font-family: 'Noto Sans KR', sans-serif; background: #FFECDC;}
        
        .container {
          display: flex;
          flex-direction: column;
          align-items:center;
          justify-content:center;
          width: 100%;
          height: 100vh;
        }
        .blank{
          height:10vh;
        }
  
        input:hover{
          border:3px solid #AFC6B9;
        }
        input:focus{
          background-color:#AFC6B9;
          color:white;
          outline:none;
        }
  
  
        button{
          background-color: #AFC6B9;
          margin:10px;
          padding:5px 15px;
  
          border-radius: 60px;
  
          font-family: Quicksand, san-serif;
          font-style: normal;
          font-weight: bold;
          font-size: 24px;
          line-height: 35px;
          text-align: center;
  
          color: #FFFFFF;
          
        }
  
        h1{
          font-family: Quicksand, san-serif;
          text-align:center;
          font-weight:900;
          font-size:4vw;
        }
  
        h3{
          font-family: Quicksand, san-serif;
          text-align:center;
          margin-bottom:20px; font-weight:300;
          font-size:1.5vw;
        }
  
        p{
          font-family: Quicksand, san-serif;
          font-weight:900;
          font-size:1.5vw;
  
          text-align:center;
          display:inline;
          margin-right:4px;
          
        }
  
        input{
          text-align:Center;
        }
        
        .password{
          margin-bottom: 30px;
          margin-top: 10px;
        }
      </style>
      <div class="container">
        <div class="blank"></div>
        <div class="introduction">
          <h1> Welcome to AngelHack Seoul 2021!</h1>
          <h3> If it is your first visit, please Sign Up first.</h3>
        </div>
        <form action = '/login_process' method = 'POST'>
          <div class="ID">
            <p>Email</p>
            <input type="email" name="email"></input>
          </div>
          <div class="password">
            <p>password</p>
            <input type="password" name="password"></input>
          </div>
          <button type="submit">Log In</button>
        </form>
        <form action = '/sign_up'>
          <button type='submit'>Sign Up</button>
        </form>
        <p style="font-weight:700;font-size:1.3vw;color:red">${notmatch}</p>
      </div>
    </body>
  </html>`;
}


exports.signup = (notmatch)=>{
      if (notmatch === undefined){
        notmatch = '';
      }
      return `<!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100;300;400;500;700;900&display=swap" rel="stylesheet">
          <link href="https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500;600;700&display=swap" rel="stylesheet">
          <title>Sign Up</title>
        </head>
        <body>
            <style>
      
            body{
                position: relative;
                width: 1440px;
                height: 1024px;
                background: #FFECDC;
                }
            
      
              .container {
              display: flex;
              flex-direction: column;
              align-items:center;
              justify-content:center;
            }
      
              
            h1{
              padding-top:20vh;
              padding-bottom:0px;
              margin-bottom:0px;
                font-family: Quicksand, san-serif;
                font-style: normal;
                font-weight: bold;
                font-size: 70px;
                line-height: 139px;
                text-align: center;
              }
      
            h3{
              text-align:center;
              margin: 0px;
      
              font-family: Quicksand, san-serif;
              font-style: normal;
              font-weight: normal;
              font-size: 24px;
              line-height: 35px;
              text-align: center;
              letter-spacing: -0.05em;
            }
      
            p {
              display:inline;
              text-align:center;
              margin-right:5px;
      
              font-family: Quicksand, san-serif;
              font-style: normal;
              font-weight: 900;
              font-size: 20px;
              line-height: 35px;
              text-align: center;
              letter-spacing: -0.05em;
      
            }
            
      
            button{
              background-color: #AFC6B9;
              margin:0;
              position: absolute;
              width: 110px;
              height: 47px;
              top: 625px;
      
              border-radius: 60px;
      
              font-family: Quicksand, san-serif;
              font-style: normal;
              font-weight: bold;
              font-size: 24px;
              line-height: 35px;
              text-align: center;
      
              color: #FFFFFF;
              
            }
      
            input:hover{
              border:3px solid #AFC6B9;
            }
            input:focus{
              background-color:#AFC6B9;
              color:white;
              outline:none;
            } 
      
            .e-mail {
              margin-top:20px;
            }
      
            
          </style>
      
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <form action="/signup_process" method="POST">
          <div class="container">
              <h1>Welcome to AngelHack Seoul 2021!</h1>
              <h3>If it is your first visit, please sign up.</h3>
              <h3>You can check your own enter code via e-mail.</h3>
          
              <div class="e-mail">
                  <p>e-mail </p>
                  <input style="text-align:center;" type="email" name="email"></input>
              </div>
              <div class="password">
                  <p>password </p>
                  <input style="text-align:center;" type="password" name="pw"></input>
              </div>
              <div class="entercode">
                <p>Enter Code </p>
                <input style="text-align:center;" type="password" name="entercode"></input>
              </div>
              
      
              <button type="submit">Join</button>      
          </div>
          </form>
          </br>
          <h3 style="font-weight:700;font-size:2.0vw;color:red; text-align:center">${notmatch}</h3>
      
      
      
      
      
        </body>
      </html>`;
          }
exports.profile = ()=>{
      return `<!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <title>앤젤핵 2020: Step 1.프로필 설정</title>
          <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100;200;300;400;500;600;700;800;900&display=swap" rel="stylesheet">
        </head>
        <body>
      
          <style>
          body{margin:40px}
      
          .planner, .developer, .designer{
            display:flex;
            flex-wrap:wrap;
            justify-content:center;
            align-items:space-around;
            align-content:center;
          }
      
          .keyword{
            font-size:1.7vw;
            border-radius: 25px;
            padding: 12px;
            margin:4px;
            font-family: 'Noto Sans KR', sans-serif;
            font-weight: 300;
          }
      
          div>.keyword:hover{
            background:#efebe9;
            color:black;
          }
      
          .planner>.keyword{
            background:#ffb74d;
          }
      
          .developer>.keyword{
            background:#aed581;
          }
      
          .designer>.keyword{
            background:#64b5f6;
          }
      
          h1{
            font-size: 3vw;
            text-align:center;
            font-family: 'Noto Sans KR', sans-serif;
            font-weight: 700;
            margin-top:60px;
          }
      
      
      
          </style>
      
      
      
          <h1>당신의 기획 역량은?</h1>
          <div class="planner">
            <div class="keyword planner_item1">기능설명서</div>
            <div class="keyword planner_item2">와이어프레임</div>
            <div class="keyword planner_item3">아이디어 뱅크</div>
            <div class="keyword planner_item4">가능한 것</div>
            <div class="keyword planner_item5">가능한 것</div>
            <div class="keyword planner_item6">가능한 것</div>
            <div class="keyword planner_item7">가능한 것</div>
            <div class="keyword planner_item8">가능한 것</div>
            <div class="keyword planner_item9">가능한 것</div>
            <div class="keyword planner_item10">가능한 것</div>
          </div>
      
          <h1>당신의 개발 역량은?</h1>
          <div class="developer">
            <div class="keyword developer_item1">python</div>
            <div class="keyword developer_item2">html</div>
            <div class="keyword developer_item3">Java</div>
            <div class="keyword developer_item4">C</div>
            <div class="keyword developer_item5">Javascript</div>
            <div class="keyword developer_item6">Swift</div>
            <div class="keyword developer_item7">Kotlin</div>
            <div class="keyword developer_item8">C#</div>
            <div class="keyword developer_item9">React.js</div>
            <div class="keyword developer_item10">C++</div>
            <div class="keyword developer_item10">Go</div>
          </div>
      
          <h1>당신의 디자인 역량은?</h1>
          <div class="designer">
            <div class="keyword designer_item1">포토샵</div>
            <div class="keyword designer_item2">일러스트</div>
            <div class="keyword designer_item3">Adobe XD</div>
            <div class="keyword designer_item4">Sketch</div>
            <div class="keyword designer_item5">프로토타이핑</div>
            <div class="keyword designer_item6">로고 브랜딩</div>
            <div class="keyword designer_item7">Powerpoint</div>
            <div class="keyword designer_item8">가능한 것</div>
            <div class="keyword designer_item9">가능한 것</div>
            <div class="keyword designer_item10">가능한 것</div>
          </div>
      
      
        </body>
      </html>`;}

  
  // module.exports = template;