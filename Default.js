


import PartySong from "./Model/PartySong-schema.js";
import LatestSong from "./Model/LatestSong-schema.js";
import Artist from "./Model/Artist-schema.js";
import {LatestSongs,PartySongs,allArtists, MainAlbum,CategoryData, Romanticsongs} from "./Constant/data.js"
import AllAlbums from "./Model/AllAlbums-schema.js";
import Category from "./Model/Category-schema.js";
import RomanticSongs from "./Model/RomanticSongs-schema.js";


const DefaultData=async()=>{
    try {
        
        await LatestSong.insertMany(LatestSongs);
        await PartySong.insertMany(PartySongs);
        await RomanticSongs.insertMany(Romanticsongs);
        await Artist.insertMany(allArtists);
        await AllAlbums.insertMany(MainAlbum);
        await Category.insertMany(CategoryData);
        console.log('data imported successfully');
    } catch (error) {
        console.log('error while inserting data ',error.message);
    }
}
export default DefaultData;