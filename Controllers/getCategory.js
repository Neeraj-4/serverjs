import Category from "../Model/Category-schema.js";
export const getCategory=async(request,response)=>{
    try {
      const getCategoryData = await Category.find();
      response.status(200).json(getCategoryData);
   
   
    } catch (error) {
       response.status(500).json({message:error.message});
    }   
   }