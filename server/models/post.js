// 1. import mongoose
const mongoose = require("mongoose");
const postSchema = new mongoose.Schema({
    userID: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User"
    },
    postcontent: {type: String},
    postlikes: { type: String}
  })
  // 3. create model of schema
const post = mongoose.model("post", postSchema);
// 4. create CRUD functions on model
//CREATE a post
async function createpost(id, postcontent){

  //const user = await getpost(id);

  const newpost=await post.create({
    userID: id, 
    postcontent: postcontent,
    postlikes: 0
  });
  return newpost;

}
async function updatepost(id,postcontent){
  const post = await post.updateOne({"_id": id}, {$set: { postcontent: postcontent}});
  return post;

}

async function deletepost(id){
  await post.deleteOne({"_id": id});
}

// utility functions
async function getpost(id) {
  return await post.findOne({"_id": id});
}


module.exports = {createpost,updatepost, deletepost, getpost};