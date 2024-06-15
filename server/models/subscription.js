// 1. import mongoose
const mongoose = require("mongoose");
const subscribeSchema = new mongoose.Schema({
    userID: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User"
    },
    start_date: {type: Date},
    end_date: { type: Date},
    amount : Number,
    duration : Number,
    payment_gateway:String,
  })
  // 3. create model of schema
const subscribe = mongoose.model("subscribe", subscribeSchema);
// 4. create CRUD functions on model
//CREATE a subscribe
async function createsubscribe( subscribecontent){

  //const user = await getsubscribe(id);

  console.log("subscribecontent",subscribecontent)

  const newsubscribe=await subscribe.create(subscribecontent);
  return newsubscribe;

}
async function updatesubscribe(id,subscribecontent){
  const edtSubscribe = await subscribe.updateOne({"_id": id}, subscribecontent);
  return edtSubscribe;
}

async function deletesubscribe(id){
  await subscribe.deleteOne({"_id": id});``
}

// utility functions
async function getsubscribe(id) {
  return await subscribe.findOne({"_id": id});
}


module.exports = {createsubscribe,updatesubscribe, deletesubscribe, getsubscribe}; 
