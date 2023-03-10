import AllAlbums from "../Model/AllAlbums-schema.js";
export const getAlbums=async(request,response)=>{
 try {
   const getAlbumsData = await AllAlbums.find();
   response.status(200).json(getAlbumsData);


 } catch (error) {
    response.status(500).json({message:error.message});
 }   
}
