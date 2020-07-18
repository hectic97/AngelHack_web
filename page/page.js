var fs = require('fs');
exports.main_pg = (notmatch)=>{
  if (notmatch === undefined){
    notmatch = '';
  }
  return `<!doctype html>

  <html>
  
    <head>
        <meta charset="utf-8">
        <title>AngelHack Seoul 2021</title>
        <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100;200;300;400;500;600;700;800;900&display=swap" rel="stylesheet">
        <link href="https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500;600;700&display=swap" rel="stylesheet">
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@200;400;500;600;700;800;900&display=swap" rel="stylesheet">
    </head>
  
    <body>
  
      <style>
        body{margin:0px; padding:0px; background: black;}
        
        .container {
          display: flex;
          flex-direction: column;
          align-items:center;
          justify-content:center;
          width: 100%;
          height: 100vh;
        }
        .blank{
          height:4vh;
        }
  
        img{
          width:170px;
          height:60px;
          margin-top:70px;
        }
  
        input:hover{
          border:3px solid  #7568FA;
        }
        input:focus{
          background-color: #7568FA;
          color:white;
          outline:none;
        }
  
  
        button{
          background-color: #7568FA;
          margin:10px;
          padding:5px 15px;
  
          border-radius: 60px;
          border:0.3px solid white;
  
          font-family: montserrat, san-serif;
          font-style: normal;
          font-weight: 600;
          font-size: 24px;
          line-height: 35px;
          text-align: center;
  
          color: white;
          
        }
  
        h1{
          font-family: montserrat, san-serif;
          text-align:center;
          font-weight:700;
          font-size:4vw;
          color:white;
        }
  
        h3{
          font-family: montserrat, san-serif;
          text-align:center;
          margin-bottom:20px; font-weight:300;
          font-size:1.5vw;
          color:white;
        }
  
        p{
          font-family: montserrat, san-serif;
          font-weight:700;
          font-size:1.5vw;
  
          text-align:center;
          display:inline;
          margin-right:4px;
          color:white;
        }
  
        input{
          text-align:Center;
        }
  
        .password{
          margin-bottom: 30px;
          margin-top: 10px;
        }
  
  
      </style>
  
      <center class="container" >
        <div class="blank"></div>
        
        <div class="introduction" style="float:center;">
          <h1> Welcome to AngelHack Seoul 2021!</h1>
          <h3> If it is your first visit, please Sign Up first.</h3>
        </div>
  
        <form action = '/login_process' method = 'POST'>
        <div class="ID">
          <p>Your Name</p>
          <input type="text" name= "name"></input>
        </div>
        <div class="password">
          <p>Password</p>
          <input type="password" name="password"></input>
        </div>
        <button type="submit">Log In</button>
      </form>
      <form action = '/sign_up'>
          <button type='submit'>Sign Up</button>
      </form>
      <p style="font-weight:700;font-size:1.3vw;color:red">${notmatch}</p> 

      <img src="/images/logo.png"></img>
  
      </center>
    </body>
  </html>
  `;
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
          <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@200;400;500;600;700;800;900&display=swap" rel="stylesheet">
      
          <title>Sign Up</title>
        </head>
        <body>
            <style>
      
            body{
                position: relative;
                background: black;
                }
            
                .container {
                display: flex;
                flex-direction: column;
                align-items:center;
                justify-content:center;
              }
      
              img{
              width:170px;
              height:60px;
              position:absolute;
              top:640px;
              }
              
            h1{
              padding-top:14vh;
              padding-bottom:0px;
              margin-bottom:0px;
                font-family: montserrat, san-serif;
                font-style: normal;
                font-weight: 700;
                font-size: 4vw;
                line-height: 139px;
                text-align: center;
                color:white;
              }
      
            h3{
              text-align:center;
              margin: 0px;
      
              font-family: montserrat, san-serif;
              font-style: normal;
              font-weight: 300;
              font-size: 1.5vw;
              line-height: 35px;
              text-align: center;
              letter-spacing: -0.05em;
              color:white;
            }
      
            p {
              display:inline;
              text-align:center;
              margin-right:5px;
      
              font-family: montserrat, san-serif;
              font-style: normal;
              font-weight: 700;
              font-size: 1.5vw;
              line-height: 35px;
              text-align: center;
              letter-spacing: -0.05em;
              color:white;
      
            }
            
      
            button{
              background-color: #7568FA;
              margin:0;
              position: absolute;
              width: 110px;
              height: 47px;
              top: 555px;
      
              border-radius: 60px;
              border:0.3px solid white;
      
              font-family: montserrat, san-serif;
              font-style: normal;
              font-weight: bold;
              font-size: 24px;
              line-height: 35px;
              text-align: center;
      
              color: #FFFFFF;
              
            }
      
            input:hover{
              border:3px solid #7568FA;
            }
            input:focus{
              background-color:#7568FA;
              color:white;
              outline:none;
            } 
      
            .e-mail {
              margin-top:20px;
            }
      
            
          </style>
      
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
      
          <div class="blank"></div>
          <form action="/signup_process" method="POST">
          <div class="container">
              <h1>Welcome to AngelHack Seoul 2021!</h1>
              <h3>If it is your first visit, please sign up.</h3>
              <h3>You can check your own enter code via e-mail.</h3>
          
              <div class="e-mail">
                  <p>Your Name </p>
                  <input style="text-align:center;" type="text" name='name'></input>
              </div>
              <div class="password">
                  <p>Password </p>
                  <input style="text-align:center;" type="password" name="pw"></input>
              </div>
              <div class="entercode">
                <p>Enter Code </p>
                <input style="text-align:center;" type="password" name="entercode"></input>
              </div>
              </br>
              <h3 style="font-weight:700;font-size:2.0vw;color:red; text-align:center">${notmatch}</h3>
              <button type="submit">Join</button>
      
              <img src="/images/logo.png"></img>
      
          </div>
          </form>
          <br>
          
        </body>
      </html>
      `;
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

  exports.home=(name)=>{
    return `<!DOCTYPE html>
    <html>
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link href="https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500;600;700&display=swap" rel="stylesheet">
        <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100;300;400;500;700;900&display=swap" rel="stylesheet">
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@200;400;500;600;700;800;900&display=swap" rel="stylesheet">
    
        <link rel="stylesheet" type="text/css" href="/css/style.css">
    
        <title>Home</title>
    </head>
    
    <body>
        <nav class="navbar">
    
            <div class="navbar_logo">
                <a href="/home"><img src="/images/logo.png"></img></a>
            </div>
        
            <ul class="navbar_menu">
                <li><a href="/home">Home</a></li>
                <li><a href="nav_members.html">Members</a></li>
                <li><a href="nav_recruiting">Recruiting</a></li>
                <li><a href="nav_mypage.html">My Page</a></li>
            </ul>
    
            <div class="navbar_icons">
                <input></input>
                <img src="/images/search.png"></img>
            </div>
    
        </nav>
    
        <div class="banner">
            <img src="/images/banner.jpg" width=100%></img>
            <div class="banner_text">
                <a href="#"><h1 class="banner_title">젊은 혁신가들을 위한 온택트 팀 빌딩 서비스, WENNO</h1></a>
                <h3 class="banner_description">Keep innovating together, even in COVID-19 </h3>
            </div>
        </div>
    
        <div class="contents">
            <div class="container">
                
                <h3 class="box_title my_project" id="first_title">📬 ${name}님의 프로젝트에 관심을 보이는 사람들이 있어요! </h3>
                
                <!--
                <div class="group my_project"></div>
                    <ul class="dashboard">
                        <li><span class="item_project"></span></li>
                        <li></li>
                    </ul> -->
    
    
                <h3 class="box_title rocket_teams">🥇 ${name}님께 추천해드릴, 한계까지 급성장! 챌린징 팀</h3>
                <div class="group rocket_teams">
                        <ul class="list_item" id="list_item_teams">
                            <li>
                                <a class="link_item">
                                    <div class="item_tit">
                                        <div class="middle_tit">
                                            <h4 class="tit_title">정말 게임 같은 몰입도의 교육용 게임</h4>
                                            <span class="tit_intro">윈도우.최소 데모게임정도 까지는 개발을 하여 게임을 직접 하면서 게임 진행에 필요한 지식들이 게임 외적인 부분에서도...(더보기)</span>
                                        </div>
                                    </div>
                                    <div class="item_info">
                                        <div class="relation_team">
                                            <span class="relation_type">성취</span>
                                            <span class="relation_type">성장</span>
                                            <span class="relation_type">열정</span>
                                        </div>
                                        <p class="item_txt">강동현</p>
                                        <span class="item_date">2020-07-15</span>
                                    </div>
                                    <div class="item_option">
                                        <div class="inner_option">
                                            <a class="ico option ico_chat" href="/chat" onclick="javascript:event.target.port=3400">1:1 chat</a>
                                            <span class="num_option">4</span>
                                            <span class="ico_option ico_apply">Quick Apply</span>
                                            <span class="num_option">2</span>
                                        </div>
                                    </div>
                                </a>
                            </li>
                            <li>
                                <a class="link_item">
                                    <span class="item_thumb" style="background:url(https://t1.daumcdn.net/impact/100up/PROBLEM/20200213/20200213104529/f3183842219a4886a30b0bcfe4bc0154);background-size:cover;background-position: 50% 50%""></span>
                                    <div class="item_tit">
                                        <div class="middle_tit">
                                            <h4 class="tit_title">자가격리자를 위한 웹/앱</h4>
                                            <span class="tit_intro">심리적으로 고립되고 힘든 자가격리자 대상, 응원 메시지, 격리자 꿀팁, 격리 방침 체크 등, 구체적 사항은 팀빌딩 후 논의해봐요!</span>
                                        </div>
                                    </div>
                                    <div class="item_info">
                                        <div class="relation_team">
                                            <span class="relation_type">성취</span>
                                            <span class="relation_type">즐거움</span>
                                            <span class="relation_type">열정</span>
                                        </div>
                                        <p class="item_txt">진유림</p>
                                        <span class="item_date">2020-07-14</span>
                                    </div>
                                    <div class="item_option">
                                        <div class="inner_option">
                                            <a class="ico option ico_chat" href="/chat" onclick="javascript:event.target.port=3400">1:1 chat</a>
                                            <span class="num_option">7</span>
                                            <span class="ico_option ico_apply">Quick Apply</span>
                                            <span class="num_option">3</span>
                                        </div>
                                    </div>
                                </a>
                            </li>
                            <li>
                                <a class="link_item">
                                    <span class="item_thumb" style="background:url(https://t1.daumcdn.net/impact/100up/PROBLEM/20200213/20200213104529/f3183842219a4886a30b0bcfe4bc0154);background-size:cover;background-position: 50% 50%""></span>
                                    <div class="item_tit">
                                        <div class="middle_tit">
                                            <h4 class="tit_title">프로젝트 이름</h4>
                                            <span class="tit_intro">프로젝트 설명</span>
                                        </div>
                                    </div>
                                    <div class="item_info">
                                        <div class="relation_team">
                                            <span class="relation_type">완주</span>
                                            <span class="relation_type">열정</span>
                                            <span class="relation_type">도전</span>
                                        </div>
                                        <p class="item_txt">이하영</p>
                                        <span class="item_date">2020-07-18</span>
                                    </div>
                                    <div class="item_option">
                                        <div class="inner_option">
                                            <a class="ico option ico_chat" href="/chat" onclick="javascript:event.target.port=3400">1:1 chat</a>
                                            <span class="num_option">5</span>
                                            <span class="ico_option ico_apply">Quick Apply</span>
                                            <span class="num_option">1</span>
                                        </div>
                                    </div>
                                </a>
                            </li>
                        </ul>
                        <ul class="list_item" id="list_item_teams">
                            <li>
                                <a class="link_item">
                                    <span class="item_thumb" style="background:url(https://t1.daumcdn.net/impact/100up/PROBLEM/20200213/20200213104529/f3183842219a4886a30b0bcfe4bc0154);background-size:cover;background-position: 50% 50%""></span>
                                    <div class="item_tit">
                                        <div class="middle_tit">
                                            <h4 class="tit_title">프로젝트 이름</h4>
                                            <span class="tit_intro">프로젝트 설명</span>
                                        </div>
                                    </div>
                                    <div class="item_info">
                                        <div class="relation_team">
                                            <span class="relation_type">성장</span>
                                            <span class="relation_type">성장</span>
                                            <span class="relation_type">인연</span>
                                        </div>
                                        <p class="item_txt">설민혁</p>
                                        <span class="item_date">2020-07-18</span>
                                    </div>
                                    <div class="item_option">
                                        <div class="inner_option">
                                            <a class="ico option ico_chat" href="/chat" onclick="javascript:event.target.port=3400">1:1 chat</a>
                                            <span class="num_option">1</span>
                                            <span class="ico_option ico_apply">Quick Apply</span>
                                            <span class="num_option">0</span>
                                        </div>
                                    </div>
                                </a>
                            </li>
                            <li>
                                <a class="link_item">
                                    <span class="item_thumb" style="background:url(https://t1.daumcdn.net/impact/100up/PROBLEM/20200213/20200213104529/f3183842219a4886a30b0bcfe4bc0154);background-size:cover;background-position: 50% 50%""></span>
                                    <div class="item_tit">
                                        <div class="middle_tit">
                                            <h4 class="tit_title">프로젝트 이름</h4>
                                            <span class="tit_intro">프로젝트 설명</span>
                                        </div>
                                    </div>
                                    <div class="item_info">
                                        <div class="relation_team">
                                            <span class="relation_type">성장</span>
                                            <span class="relation_type">완주</span>
                                            <span class="relation_type">열정</span>
                                        </div>
                                        <p class="item_txt">정영준</p>
                                        <span class="item_date">2020-07-18</span>
                                    </div>
                                    <div class="item_option">
                                        <div class="inner_option">
                                            <a class="ico option ico_chat" href="/chat" onclick="javascript:event.target.port=3400">1:1 chat</a>
                                            <span class="num_option">7</span>
                                            <span class="ico_option ico_apply">Quick Apply</span>
                                            <span class="num_option">3</span>
                                        </div>
                                    </div>
                                </a>
                            </li>
                            <li>
                                <a class="link_item">
                                    <span class="item_thumb" style="background:url(https://t1.daumcdn.net/impact/100up/PROBLEM/20200213/20200213104529/f3183842219a4886a30b0bcfe4bc0154);background-size:cover;background-position: 50% 50%""></span>
                                    <div class="item_tit">
                                        <div class="middle_tit">
                                            <h4 class="tit_title">프로젝트 이름</h4>
                                            <span class="tit_intro">프로젝트 설명</span>
                                        </div>
                                    </div>
                                    <div class="item_info">
                                        <div class="relation_team">
                                            <span class="relation_type">즐거움</span>
                                            <span class="relation_type">인연</span>
                                            <span class="relation_type">도전</span>
                                        </div>
                                        <p class="item_txt">이하영</p>
                                        <span class="item_date">2020-07-18</span>
                                    </div>
                                    <div class="item_option">
                                        <div class="inner_option">
                                            <a class="ico option ico_chat" href="/chat" onclick="javascript:event.target.port=3400">1:1 chat</a>
                                            <span class="num_option">5</span>
                                            <span class="ico_option ico_apply">Quick Apply</span>
                                            <span class="num_option">1</span>
                                        </div>
                                    </div>
                                </a>
                            </li>
                        </ul>
                        <div class="blank" style="height:30px"></div>
                        <a href="nav_recruiting.html">
                            <span class="load_more" id="rocket_teams"><p>모든 프로젝트 둘러보기</p></span>
                        </a>
                </div>
                <h3 class="box_title rocket_teams">✨ ${name}님과 좋은 케미를 보여줄 동료들을 소개합니다</h3>
                <div class="group rocket_colleagues">
                    <ul class="list_item" id="list_item_colleagues">
                        <li>
                            <a class="link_item">
                                <span class="item_thumb" style="background:url(https://t1.daumcdn.net/impact/100up/PROBLEM/20200213/20200213104529/f3183842219a4886a30b0bcfe4bc0154);background-size:cover;background-position: 50% 50%""></span>
                                <div class="item_tit">
                                    <div class="middle_tit">
                                        <h4 class="tit_title">조제</h4>
                                        <span class="tit_intro">퍼블리싱 배워 가고 있는 서비스기획자이자 UX디자이너. 달려갑니다.</span>
                                    </div>
                                </div>
                                <div class="item_info">
                                    <div class="relation_colleague"> <!--휴먼팩터 태그들!-->
                                        <span class="relation_type" id="human_factor">SDG</span>
                                        <span class="relation_type" id="human_factor">UX디자인</span>
                                        <span class="relation_type" id="human_factor">브랜딩</span>
                                    </div>
                                    <p class="item_txt"></p>
                                </div>
                                <div class="item_option">
                                    <div class="inner_option">
                                        <a class="ico option ico_chat" href="/chat" onclick="javascript:event.target.port=3400">1:1 chat</a>
                                        <span class="num_option"></span>
                                        <span class="ico_option ico_apply">Likey</span>
                                        <span class="num_option"></span>
                                    </div>
                                </div>
                            </a>
                        </li>
                        <li>
                            <a class="link_item">
                                <span class="item_thumb" style="background:url(https://t1.daumcdn.net/impact/100up/PROBLEM/20200213/20200213104529/f3183842219a4886a30b0bcfe4bc0154);background-size:cover;background-position: 50% 50%""></span>
                                <div class="item_tit">
                                    <div class="middle_tit">
                                        <h4 class="tit_title">조제</h4>
                                        <span class="tit_intro">퍼블리싱 배워 가고 있는 서비스기획자이자 UX디자이너. 달려갑니다.</span>
                                    </div>
                                </div>
                                <div class="item_info">
                                    <div class="relation_colleague"> <!--휴먼팩터 태그들!-->
                                        <span class="relation_type" id="human_factor">SDG</span>
                                        <span class="relation_type" id="human_factor">UX디자인</span>
                                        <span class="relation_type" id="human_factor">브랜딩</span>
                                    </div>
                                    <p class="item_txt"></p>
                                </div>
                                <div class="item_option">
                                    <div class="inner_option">
                                        <a class="ico option ico_chat" href="/chat" onclick="javascript:event.target.port=3400">1:1 chat</a>
                                        <span class="num_option"></span>
                                        <span class="ico_option ico_apply">Likey</span>
                                        <span class="num_option"></span>
                                    </div>
                                </div>
                            </a>
                        </li>
                        <li>
                            <a class="link_item">
                                <span class="item_thumb" style="background:url(https://t1.daumcdn.net/impact/100up/PROBLEM/20200213/20200213104529/f3183842219a4886a30b0bcfe4bc0154);background-size:cover;background-position: 50% 50%""></span>
                                <div class="item_tit">
                                    <div class="middle_tit">
                                        <h4 class="tit_title">조제</h4>
                                        <span class="tit_intro">퍼블리싱 배워 가고 있는 서비스기획자이자 UX디자이너. 달려갑니다.</span>
                                    </div>
                                </div>
                                <div class="item_info">
                                    <div class="relation_colleague"> <!--휴먼팩터 태그들!-->
                                        <span class="relation_type" id="human_factor">SDG</span>
                                        <span class="relation_type" id="human_factor">UX디자인</span>
                                        <span class="relation_type" id="human_factor">브랜딩</span>
                                    </div>
                                    <p class="item_txt"></p>
                                </div>
                                <div class="item_option">
                                    <div class="inner_option">
                                        <a class="ico option ico_chat" href="/chat" onclick="javascript:event.target.port=3400">1:1 chat</a>
                                        <span class="num_option"></span>
                                        <span class="ico_option ico_apply">Likey</span>
                                        <span class="num_option"></span>
                                    </div>
                                </div>
                            </a>
                        </li>
                    </ul>
                    <ul class="list_item" id="list_item_colleagues">
                        <li>
                            <a class="link_item">
                                <span class="item_thumb" style="background:url(https://t1.daumcdn.net/impact/100up/PROBLEM/20200213/20200213104529/f3183842219a4886a30b0bcfe4bc0154);background-size:cover;background-position: 50% 50%""></span>
                                <div class="item_tit">
                                    <div class="middle_tit">
                                        <h4 class="tit_title">조제</h4>
                                        <span class="tit_intro">퍼블리싱 배워 가고 있는 서비스기획자이자 UX디자이너. 달려갑니다.</span>
                                    </div>
                                </div>
                                <div class="item_info">
                                    <div class="relation_colleague"> <!--휴먼팩터 태그들!-->
                                        <span class="relation_type" id="human_factor">SDG</span>
                                        <span class="relation_type" id="human_factor">UX디자인</span>
                                        <span class="relation_type" id="human_factor">브랜딩</span>
                                    </div>
                                    <p class="item_txt"></p>
                                </div>
                                <div class="item_option">
                                    <div class="inner_option">
                                        <a class="ico option ico_chat" href="/chat" onclick="javascript:event.target.port=3400">1:1 chat</a>
                                        <span class="num_option"></span>
                                        <span class="ico_option ico_apply">Likey</span>
                                        <span class="num_option"></span>
                                    </div>
                                </div>
                            </a>
                        </li>
                        <li>
                            <a class="link_item">
                                <span class="item_thumb" style="background:url(https://t1.daumcdn.net/impact/100up/PROBLEM/20200213/20200213104529/f3183842219a4886a30b0bcfe4bc0154);background-size:cover;background-position: 50% 50%""></span>
                                <div class="item_tit">
                                    <div class="middle_tit">
                                        <h4 class="tit_title">조제</h4>
                                        <span class="tit_intro">퍼블리싱 배워 가고 있는 서비스기획자이자 UX디자이너. 달려갑니다.</span>
                                    </div>
                                </div>
                                <div class="item_info">
                                    <div class="relation_colleague"> <!--휴먼팩터 태그들!-->
                                        <span class="relation_type" id="human_factor">SDG</span>
                                        <span class="relation_type" id="human_factor">UX디자인</span>
                                        <span class="relation_type" id="human_factor">브랜딩</span>
                                    </div>
                                    <p class="item_txt"></p>
                                </div>
                                <div class="item_option">
                                    <div class="inner_option">
                                    <a class="ico option ico_chat" href="/chat" onclick="javascript:event.target.port=3400">1:1 chat</a>
                                        <span class="num_option"></span>
                                        <span class="ico_option ico_apply">Likey</span>
                                        <span class="num_option"></span>
                                    </div>
                                </div>
                            </a>
                        </li>
                        <li>
                            <a class="link_item">
                                <span class="item_thumb" style="background:url(https://t1.daumcdn.net/impact/100up/PROBLEM/20200213/20200213104529/f3183842219a4886a30b0bcfe4bc0154);background-size:cover;background-position: 50% 50%""></span>
                                <div class="item_tit">
                                    <div class="middle_tit">
                                        <h4 class="tit_title">조제</h4>
                                        <span class="tit_intro">퍼블리싱 배워 가고 있는 서비스기획자이자 UX디자이너. 달려갑니다.</span>
                                    </div>
                                </div>
                                <div class="item_info">
                                    <div class="relation_colleague"> <!--휴먼팩터 태그들!-->
                                        <span class="relation_type" id="human_factor">SDG</span>
                                        <span class="relation_type" id="human_factor">UX디자인</span>
                                        <span class="relation_type" id="human_factor">브랜딩</span>
                                    </div>
                                    <p class="item_txt"></p>
                                </div>
                                <div class="item_option">
                                    <div class="inner_option">
                                    <a class="ico option ico_chat" href="/chat" onclick="javascript:event.target.port=3400">1:1 chat</a>
                                        <span class="num_option"></span>
                                        <span class="ico_option ico_apply">Likey</span>
                                        <span class="num_option"></span>
                                    </div>
                                </div>
                            </a>
                        </li>
                    </ul>
                    <div class="blank" style="height:30px"></div>
                    <a href="nav_members.html">
                        <span class="load_more" id="colleague"><p>모든 WENNOers 둘러보기</p></span>
                    </a>
                </div>
    
                <div class="blank" style="height:300px"></div>
            </div>
        </div> 
        
        <a href="/create_team" class="float">
            내 팀 모집하러 가기 >
            </a>
    
    </body>
    </html>
    `;}
  exports.make_team = ()=>{
      return `<!DOCTYPE html>
      <html>
      <head>
          
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Congratulations!</title>
      </head>
      <body style="margin:0; background-color:black;">
      
          <img src="/images/team_building.jpg" style="width:100%;"></img>
          
      </body>
      </html>`
  } 
  exports.create_team=()=>{
    return `<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100;300;400;500;700;900&display=swap" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500;600;700&display=swap" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@200;400;500;600;700;800;900&display=swap" rel="stylesheet">

    <link rel="stylesheet" href="css/style.css">

    <title>Create New Team</title>
</head>
<body style="background: white;">
    
    <style>
        .team_attribute{
            display:flex;
            flex-direction:column;
            margin:20px 20vw;
            margin-top:0px;
        }

        h1{
            margin: 10vh 20vw;
            margin-bottom: 30px;

            font-family:Noto Sans KR;
            text-align:right;
            font-weight:bold;
            font-size:42px;
            line-height:58px;

            color:rgb(39, 39, 39);
        }

        h3{
            margin-bottom: 15px;
            font-family:Noto Sans KR;
            font-weight:500;
            font-size:20px;

            color:rgb(39, 39, 39);
        }

        textarea{
            text-align: left;
            margin-top: 0px;
            padding:10px;

            font-family:Noto Sans KR;
            font-weight:200;

        }

        input[type=radio]{
            width:15px;
            height:15px;
            margin-left:30px;
        }

        .allow_join, .deny_join, .num_member{
            display:inline-block;
            font-family:Noto Sans KR;
            font-weight:500;
            font-size:17px;
            margin-bottom:15px;
        }

        .allow_join{
            border-bottom: solid 3px yellowgreen;
        }

        .deny_join{
            border-bottom: solid 3px orangered;
        }

        
        .team_adjective{
            display:inline-block;
            background-color:#FFFC79;
            border:none;
            border-radius:30px;
            padding:5px 13px;
            margin-bottom: 15px;
            font-family:Noto Sans KR;
            font-weight:700;
            font-size:20px;

            color:black;
        }

        .team_adjective:hover{
            background-color:  #7568FA;
            color:white;
        }

        .num_member{
            margin-left:27px;
            display:inline;
            font-size:20px;
        }

        input[name=min_member], input[name=max_member]{
            padding:5px 10px;
            width: 10px;
        }

        button[name=submit_newteam]{
            margin: 0px 45vw;
            margin-top:70px;
            width:223px;
            height:60px;
            float:center;

            padding:10px;
            background-color:#7568FA;
            border-radius:50px;

            font-family:Noto Sans KR;
            font-weight:700;
            font-size:20px;
            color:white;
        }

    </style>

    <nav class="navbar">

        <div class="navbar_logo">
            <a href="/home"><img src="/images/logo.png"></img></a>
        </div>

        <ul class="navbar_menu">
            <li><a href="/home">Home</a></li>
            <li><a href="nav_members.html">Members</a></li>
            <li><a href="nav_recruiting">Recruiting</a></li>
            <li><a href="nav_mypage.html">My Page</a></li>
        </ul>

        <div class="navbar_icons">
            <input></input>
            <img src="/images/search.png"></img>
        </div>

    </nav>

    <h1>새로운 팀 만들기 New Team</h1>

    <div class="team_attribute">
        <h3>1. 제목 Title</h3>
        <textarea id="title_area" name="title_area" rows="1" cols="50">다른 사람들에게 보일 메인 타이틀을 작성해주세요!</textarea>
            
        <h3>2. 소개 Introduction</h3>
        <textarea id="intro_area" name="intro_area" rows="6" cols="50">어떤 프로젝트인지, 당신은 어떤 사람인지, 무엇을 좋아하는지, 어떤 팀원들을 원하는지 등등 자유롭게 당신이 원하는 새로운 팀을 설명해주세요.</textarea>

        <h3>3. 이 팀을 가장 적절하게 설명하는 형용사들을 골라주세요. Adjectives that fits your team</h3>
        <div class="adjective_area">
            <button class="team_adjective">#성취_유의미한 성과를 내고 싶어요 </button>
            <button class="team_adjective">#성장_함께 배우면서 성장해요 🐣</button>
            <button class="team_adjective">#완주_끝까지 포기하지 말아요 </button>
            <button class="team_adjective">#즐거움_스트레스 받지 말고 즐겨봐요</button>
            <button class="team_adjective">#인연_좋은 인연 이어가요 🤝</button>
            <button class="team_adjective">#열정_모든 열정을 불태우겠어요 🔥</button>
            <button class="team_adjective">#도전_실험적인 시도들을 해볼래요 👩‍🔬</button>
        </div>

        <h3>4. 지금부터 모집을 시작할까요? Shall we start recruiting now?</h3>
        <div style="margin-bottom:10px">
            <input type="radio" name="allow_join"></input>
            <span class="allow_join">YES - 네, 시작해주세요!</span>
            <input type="radio" name="allow_join"></input>
            <span class="deny_join">NO - 아니요, 나중에 열게요!</span>
        </div>
        <h3>5. 목표인원은 몇 명인가요? How many members do you want?</h3>
        <div>
            <span class="num_member">최소인원:</span>
            <input name="min_member"></input>
            <span class="num_member">최대인원:</span>
            <input name="max_member"></input>
        </div>
        <button name="submit_newteam">등록하기 Submit</button>
    </div>
    <div class="blank" style="margin-bottom:50vh"></div>

</body>
</html>`} // module.exports = template;