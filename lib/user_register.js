var db = require('./db');
exports.check_signup = (req,res)=>{
    db.query(`SELECT email FROM signup`, (error,email_list)=>{
    var post = req.body; 
    var new_email = true;
    var i = 0;
    if (post.entercode === '123456')
    {
    while(i<email_list.length){
        if(email_list[i].email === post.email){
            new_email = false;
            break;
        }
        i++;
    }
    if (new_email == false)
    {
        res.writeHead(302,{Location:'/sign_up/emerror'});
        res.end();
    }
    else
    {
        db.query(`INSERT INTO signup (email, password) VALUES('${post.email}','${post.pw}')`,
        function(error,result){
            if (error) {console.log(error)};
        })
        res.writeHead(302,{Location:'/profile'});
        res.end();
    }
    }
    else
    {
        res.writeHead(302,{Location:'/sign_up/codeerror'});
        res.end();
    }
});
}

exports.login = (req,res)=>{
    db.query(`SELECT email, password FROM signup`, (error,email_list)=>{
        console.log(email_list[0]);
        var post = req.body; 
        var i = 0;
        var user = false;
        while(i<email_list.length){
            if(email_list[i].email === post.email && email_list[i].password === post.password){
                user = true;
            }
            i++;
        }
        if (user)
        {
            res.writeHead(302,{Location:'next'});
            res.end();
        }
        else
        {
            res.writeHead(302,{Location:'/pwerror'});
            res.end();
        }
    });
}