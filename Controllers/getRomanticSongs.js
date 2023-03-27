import RomanticSongs from "../Model/RomanticSongs-schema.js";
export const getRomanticSongs=async(request,response)=>{
    try {
      const getRomanticSongsData = await RomanticSongs.find();
      response.status(200).json(getRomanticSongsData);
   
   
    } catch (error) {
       response.status(500).json({message:error.message});
    }   
   }