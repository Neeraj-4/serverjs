import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    id:{
        type:String,
        required:true,
        unique:true
    },
    url:{
        type:String,
        required:true,
        unique:true
    },
    file:String,
    songName:String,
    artist:String
   
});
const Product = mongoose.models.product || mongoose.model('product', productSchema);

export default Product;
