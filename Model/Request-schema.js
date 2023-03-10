import mongoose from "mongoose";

const wishSchema = new mongoose.Schema({
    fullname:{
        type:String,
        required:true,
        
    },
    song:{
     type:String,
     required:true,
    },
   
    
});
const Wish = mongoose.model('wish',wishSchema);

export default Wish;