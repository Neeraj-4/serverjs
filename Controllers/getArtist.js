import Artists from "../Model/Artist-schema.js";
export const getArtist=async(request,response)=>{
 try {
   const getArtists = await Artists.find();
   response.status(200).json(getArtists);


 } catch (error) {
    response.status(500).json({message:error.message});
 }   
}
