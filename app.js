const {sequelize} = require('./models');
const bodyParser = require('body-parser');

const api_Routes = require('./routes/api_Routes.js');

const postRoutes = require('./routes/postRoutes.js');
const userRoutes = require('./routes/userRoutes.js');
const commentRoutes = require('./routes/commentRoutes.js');
const reactionRoutes = require('./routes/reactionRoutes.js');
const relationshipRoutes = require('./routes/relationshipRoutes.js');
const jwt=require('jsonwebtoken')
const express=require('express');
const app = express();


app.listen(3000 , async ()=>{
    await sequelize.authenticate();

});


app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.get('/' , (res ,req)=>{
    return res.json();
});

app.use(userRoutes);

app.use(postRoutes);

app.use(commentRoutes);

app.use(reactionRoutes);

app.use(relationshipRoutes);

app.use(api_Routes);
