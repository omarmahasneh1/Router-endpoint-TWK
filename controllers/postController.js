const {Post , Comment}=require('../models/index');

const get_create_post_page = async(req, res) => {
    
}
  
const post_create_post = async(req, res) => {
  
  const {username , post_id , content} = req.body;

  try{

    await Post.create({username , post_id , content});

    return res.json("Post created successfully");
  }
  catch(err){

    return res.status(500).json({err : "Something went wrog"});
  }

}
  
const get_specific_post = async(req, res) => {

  const post_id = req.params.post_id;

  try{
    const post = await Post.findByPk(post_id);
    
    return res.json(post);
  }

  catch(err){

    console.log(err);

    return res.status(500).json({err : "Something went wrong"});
  }
}
  
const edit_specific_post = async(req, res) => {
  const post_id = req.params.post_id;

  const {content} = req.body;

  try{
    const post = await Post.findByPk(post_id);
    
    post.content = content;

    return res.json(post);
  }

  catch(err){

    console.log(err);

    return res.status(500).json({err : "Something went wrong"});
  }

}
  
const delete_specific_post = async(req, res) => {

  const post_id = req.params.post_id;

  try{
     await Post.destroy({
       where :{post_id}
     });

    return res.json("Post has been deleted");
  }

  catch(err){

    console.log(err);

    return res.status(500).json({err : "Something went wrong"});
  }


}

const get_specific_user_allPosts = async(req, res) => {
  
  const username = req.params.username;

  try{

    const allPosts = await Post.findAll({
      where :{username}
    });
    
    return res.json(allPosts);
  }

  catch(err){

    console.log(err);
    return res.status(500).json({err : "Something went wrong"});
  }

}

const get_allComments_specific_post = async(req, res) => {

  const post_id = req.params.post_id;

  try{

    const allComments = await Comment.findAll({
      where :{post_id}
    });

    return res.json(allComments);
  }

  catch(err){

    console.log(err);
    return res.status(500).json({err : "Something went wrong"});
  }
}

const get_All_website_posts = async(req, res) => {
  try{
      const allPosts = await Post.findAll();

      return res.json(allPosts);
    } 

    catch (err) {
      console.log(err)
      return res.status(500).json({err : "Someting went wrong"});
    }

}
  
module.exports = {
      
  get_create_post_page, 
  post_create_post, 
  get_specific_post, 
  edit_specific_post, 
  delete_specific_post,
  get_specific_user_allPosts,
  get_allComments_specific_post,
  get_All_website_posts
} 