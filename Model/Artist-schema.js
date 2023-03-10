import mongoose from "mongoose";

const artistSchema = new mongoose.Schema({
    id:{
        type:String,
        required:true,
         unique: true,
         index: {unique: true,sparse: true }
    },
    url:String,
    file:String,
    songName:String,
    artist:String
    

   
});
const AllArtistsSchema = new mongoose.Schema({
    id:{type:String,required:true,unique:true},
    url:String,
    playlist:[artistSchema]
})
const Artist = mongoose.model('Artist', AllArtistsSchema);

export default  Artist;
