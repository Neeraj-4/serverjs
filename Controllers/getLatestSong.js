import LatestSong from "../Model/LatestSong-schema.js"
export const getLatestSong=async(request,response)=>{
 try {
   const getLatestSong = await LatestSong.find();
   response.status(200).json(getLatestSong);


 } catch (error) {
    response.status(500).json({message:error.message});
 }   
}
