const mongoose=require('mongoose');
const { Schema }=mongoose;
const TaskSchema= new Schema({
  name:{type: String, required: true},work:{type: String, required: true},age:{type: String, required: true}
});
module.exports=mongoose.model('task', TaskSchema);

