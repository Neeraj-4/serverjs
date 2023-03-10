import Search from "../Model/Search-schema.js";
export const getSearch=async(request,response)=>{
    try {
      const getSearchData = await Search.find();
      response.status(200).json(getSearchData);
   
   
    } catch (error) {
       response.status(500).json({message:error.message});
    }   
   }