import mongoose from "mongoose";

const partySongSchema = new mongoose.Schema({
    id:{
        type:String,
        required:true,
        unique:true
    },
    url:String,
    title:String,
    playlist:[{
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
        title:String,
        duration: String,
        artist:String
    }]
   
});
const PartySong = mongoose.models.partysong || mongoose.model('partysong', partySongSchema);

export default PartySong;