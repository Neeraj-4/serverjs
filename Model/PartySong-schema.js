import mongoose from "mongoose";

const partySongSchema = new mongoose.Schema({
    id:{
        type:String,
        required:true,
        unique:true
    },
    url:String,
    file:String,
    songName:String,
    artist:String
   
});
const PartySong = mongoose.models.partysong || mongoose.model('partysong', partySongSchema);

export default PartySong;