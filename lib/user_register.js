var db = require('./db');
exports.check_signup = (req,res)=>{
    db.query(`SELECT name FROM signup`, (error,name_list)=>{
    var post = req.body; 
    var new_name = true;
    var i = 0;
    if (post.entercode === '123456')
    {
    while(i<name_list.length){
        if(name_list[i].name === post.name){
            new_name = false;
            break;
        }
        i++;
    }
    if (new_name == false)
    {
        res.writeHead(302,{Location:'/sign_up/emerror'});
        res.end();
    }
    else
    {
        db.query(`INSERT INTO signup (name, password) VALUES('${post.name}','${post.pw}')`,
        function(error,result){
            if (error) {console.log(error)};
        })
        res.writeHead(302,{Location:'/bridge'}); //수정 필요
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
    db.query(`SELECT name, password FROM signup`, (error,name_list)=>{
        var post = req.body; 
        var i = 0;
        var user = false;
        while(i<name_list.length){
            if(name_list[i].name === post.name && name_list[i].password === post.password){
                user = true;
            }
            i++;
        }
        if (user)
        {
            res.writeHead(302,{Location:'/home'});
            res.end();
        }
        else
        {
            res.writeHead(302,{Location:'/pwerror'});
            res.end();
        }
    });
}