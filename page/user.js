var fs = require('fs');
exports.userpage=(username)=>{
    return `<!DOCTYPE html>
    <html>
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>WENNOer Profile</title>
        <link href="https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500;600;700&display=swap" rel="stylesheet">
        <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100;300;400;500;700;900&display=swap" rel="stylesheet">
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@200;400;500;600;700;800;900&display=swap" rel="stylesheet">
    
        <link rel="stylesheet" href="/css/style.css">
    
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
                <li><a href="/nav_mypage">My Page</a></li>
            </ul>
    
            <div class="navbar_icons">
                <input></input>
                <img src="/images/search.png"></img>
            </div>
    
        </nav>
    
    
        <style>
            body{
                margin:0px;
                background:black;
                background-image: url('/images/universe.png');
            }
    
            #profile_picture{ /*사진 불러오기 기능을 원한다면 이 id 사용*/
                display:block;
                border-radius:20px;
                width:400px;
                margin:30px 50px 15px 50px;
                float: right;
            }
    
            .container{
                display:flex;
                flex-direction: row;
                margin: 70px 150px;
                justify-content: center;
            }
    
            .left, .right{
                display:inline;
            }
    
            .profile_option h1{
                display:inline;
                margin-left:50px;
                color:white;
                font-family: Montserrat, san-serif;
                font-weight: 700;
                text-align: left;
            }
    
            .profile_option h2{
                display:block;
                margin-left:50px;
                margin-bottom: 0px;
                margin-top: 20px;
                color:white;
                font-family: Montserrat, Noto Sans KR, san-serif;
                font-weight: 700;
                text-align: left;
            }
    
    
            .profile_option h3{ /*결과 불러오기(전략가or실행가)*/
                display:inline;
                margin-left:10px;
                border-bottom:0.2px solid white;
                color:white;
                font-family: Noto Sans KR, san-serif;
                font-weight: 700;
                text-align: left;
            }
    
            .profile_option h4{
                display:inline-block;
                margin-top: 0px;
                margin-left: 50px;
                color:white;
                font-family: Montserrat, san-serif;
                font-weight: 700;
                text-align: left;
            }
    
            .profile_info h1{
                color:white;
                font-family: Montserrat, san-serif;
                font-weight: 700;
                text-align: left;
            }
    
            .profile_info p{
                color:white;
                font-family: Montserrat, Noto Sans KR, san-serif;
                font-weight: 300;
                text-align: left;
            }
    
            .ico_chat, .ico_collab{
                display:inline-block;
                background-color: #7568FA;
                padding:5px 15px;
                margin-top:10px;
                border-radius: 20px;
                border: 1px solid black;
                color:  white;
    
                font-size:1.7vh;
                font-family: montserrat;
                font-size: 24px;
                font-weight: 700;
                margin-bottom: 5px;
            }
    
            .ico_chat:hover, .ico_collab:hover{
                background-color: #FFFC79;
                color: black;
            }
    
        </style>
    
        <div class="container">
            <div class="left">
                <ul class="profile_option">
                    <h1>Team Persona</h1>
                    <h3>전략가</h3>
                    <img src="/images/profile.jpg" id="profile_picture"></img>
                    <h2 id="user_name">${username}</h2> <!--User 이름 넣을 부분-->
                    <h4 id="position">Web Front-End Developer</h4>
                    <span class="relation_type" id="human_factor">열정</span>
                    <span class="relation_type" id="human_factor">성취</span>
                    <span class="relation_type" id="human_factor">성장</span>
                </ul>
                
            </div>
            <div class="right">
                <ul class="profile_info">
                    <h1>About Me</h1>
                    <p>웹프런트엔드 개발자입니다. 2~3년 차 입니다. 주로 사용하는 언어는 Javascript(ES6)/Typescript 이며, 웹프런트엔드 개발로 Angular를 실무에서 쓰고 있습니다. 기초적인 수준이지만, react.js, vue.js, Jquery 도 사용해 본 경험이 있습니다. 프런트엔드 외에언어로는 python, Java, C++  경험도 있습니다. 추가적으로 포토샵이나, 프리미어 같은 디자인 쪽 툴 사용도 가능하며, 이러한 해커톤이나 공모전에 다수 참여해 본 경험이 있습니다. 책임감을 가지고 맡은 것을 수행할 수 있도록 하겠습니다. 그리고 아이디어가 세상을 바꾸는 데 도움이 되고 싶습니다.</p>
                    <h1>Portfolio</h1>
                    <p>Vitamingirl@portfolio.com</p>
                    <h1>SNS</h1>
                    <p>Instagram @vitamin_girl</p>
                    <a class="ico option ico_chat" href="/chat" onclick="javascript:event.target.port=3400">1:1 chat</a>
                    <!-- 1:1채팅방 연동해 주세요. -->
                    <a href="/collab/${username}" class="ico_collab">Let's Collab</a>
                    <!-- 아마 따로 기능 구현할 필요 X인 기능인 듯 -->
                </ul>
            </div>    
        </div>
    
        
        
    
    </body>
    </html>`;
}
exports.collab = (collab_nm)=>{
    return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <link href="https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500;600;700&display=swap" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100;300;400;500;700;900&display=swap" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@200;400;500;600;700;800;900&display=swap" rel="stylesheet">

    <link rel="stylesheet" href="/css/style.css">

    <title>Collab Apply Sent!</title>
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
            <li><a href="/nav_mypage">My Page</a></li>
        </ul>

        <div class="navbar_icons">
            <input></input>
            <img src="/images/search.png"></img>
        </div>

    </nav>

    <style>
        .container{
            display: flex;
            justify-content: center;
            align-items: center;
            width: 100vw;
            height: 100vh;
        }

        .notification{
            width: 500px;
            height: 300px;
            position: relative;
            align-items: center;
            justify-content: center;


            background-color: #FFFC79;
            border-radius: 30px;
        }

        p{
            display: inline;
            position: absolute;
            top: 55px;
            left: 80px;

            font-family: Noto Sans KR, san-serif;
            font-style: normal;
            font-weight: 700;
            font-size: 20px;
            text-align: center;
            color: black;
        }

        .back_button{
            display: inline;
            position: absolute;
            top: 190px;
            left: 170px;
            
            padding: 10px 40px;
            background-color: #7568FA;
            border-radius: 60px;

            color: white;
            font-family: Noto Sans KR;
        }

    </style>

    
    <div class="container">
        <div class="notification">
            <p>짝짝짝! 👏🏻👏👏🏿 ${collab_nm}님께<br>나의 Working Profile을 푸시했습니다!<br>답장이 오길 기다려봐요😘</p>
            <a href="/nav_mypage" class="back_button">뒤로가기</a>
        </div>
        
    </div>


</body>
</html>`;
}