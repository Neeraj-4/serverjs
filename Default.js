import PartySong from "./Model/PartySong-schema.js";
import Product from "./Model/Product-schema.js";
import Search from "./Model/Search-schema.js";
import Artist from "./Model/Artist-schema.js";
import {LatestSongs,PartySongs,SearchDatas,allArtists, MainAlbum} from "./Constant/data.js"
import AllAlbums from "./Model/AllAlbums-schema.js";

const DefaultData=async()=>{
    try {
        await Product.insertMany(LatestSongs);
        await PartySong.insertMany(PartySongs);
        await Search.insertMany(SearchDatas);
        await Artist.insertMany(allArtists);
        await AllAlbums.insertMany(MainAlbum);
        console.log('data imported successfully');
    } catch (error) {
        console.log('error while inserting data ',error.message);
    }
}
export default DefaultData;