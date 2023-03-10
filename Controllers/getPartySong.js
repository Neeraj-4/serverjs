import PartySong from "../Model/PartySong-schema.js";
export const getPartySong=async(request,response)=>{
 try {
   const getPartySongs = await PartySong.find();
   response.status(200).json(getPartySongs);


 } catch (error) {
    response.status(500).json({message:error.message});
 }   
}