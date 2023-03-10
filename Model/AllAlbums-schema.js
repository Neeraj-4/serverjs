import mongoose from "mongoose";
const MainSchema = new mongoose.Schema({
    id:{
        type:String,
        required:true,
        unique:true
        
    },
     albums:[
        { 
            id:{
                type:String,
                required:true,
                unique:true
                
            },
            albumUrl:String,
            albumName:String,
            playlist:[{
                id:{
                    type:String,
                    required:true,
                    unique:true
                },
                url:String,
                file:String,
                songName:String,
                artist:String,
            }]
        }
     ]
})
const AllAlbums = mongoose.models.MainAlbum || mongoose.model('MainAlbum', MainSchema);

export default AllAlbums;