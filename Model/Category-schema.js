import mongoose from "mongoose";

const categorySchema = new mongoose.Schema({
    id:{
        type:String,
        required:true,
        unique:true
    },
    text:String,
    color:String,
    url:String,
    file:String,
    songName:String,
    artist:String,
  
});
const Category = mongoose.models.category || mongoose.model('category', categorySchema);

export default Category;