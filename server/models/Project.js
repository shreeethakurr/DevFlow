import mongoose from 'mongoose';
const projectSchema=new mongoose.Schema({name:{type:String,required:true,trim:true},description:{type:String,default:''},color:{type:String,default:'#7c3aed'},owner:{type:mongoose.Schema.Types.ObjectId,ref:'User',required:true}},{timestamps:true});
export default mongoose.model('Project',projectSchema);
