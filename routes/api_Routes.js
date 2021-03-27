const controller = require('../controllers/api_controller.js');
const express = require('express');
const router = express.Router()
router.get('/api', controller.get_api);
router.post('/api/posts',verifytoken ,controller.post_api);
router.post('/api/login',verifytoken,controller.post_api_login);

function verifytoken(req,res,next){
    const bearerHeader= req.headers['authorization'];//get auther value
    if(typeof bearerHeader!=='undefined'){//هون فحص انها مش undefined
     const bearer=bearerHeader.split(' ')
     const bearertoken=bearer[1];
     req.token=bearertoken;
     next();
    }else{
        res.sendstatus(403);
    }

}

module.exports=router;