import mongoose from "mongoose";

const searchSchema = new mongoose.Schema({
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

const Search = mongoose.models.search||mongoose.model('search',searchSchema);

export default Search;