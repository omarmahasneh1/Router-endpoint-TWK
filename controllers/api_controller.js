const jwt = require("jsonwebtoken");

const get_api = ((req, res) => {
    res.json({
     message:'welcom to api '
    });

});
const post_api = ((req,res)=>{
    jwt.verify(req.token,'secretkey',(err,authData)=>{
        if(err){res.sendstatus(403);
        }else{
    res.json({
        message:'post created ......',
        authData

    });
} });
});
const post_api_login=((req,res)=>{
    //mock user
    const user = {
        id:1,
        username:'omar',
        email:'omar@gmail'
    }
    jwt.sign({user:user},'secretkey',{ expiresIn:'30s'},(err,token)=>{
        res.json({
            token:token
        });
    });
});

module.exports={
  get_api  ,
  post_api ,
  post_api_login,
}