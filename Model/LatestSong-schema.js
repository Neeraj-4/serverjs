import mongoose from "mongoose";

const LatestSongSchema = new mongoose.Schema({
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
const LatestSong = mongoose.models.latestSong || mongoose.model('latestSong', LatestSongSchema);

export default LatestSong;
