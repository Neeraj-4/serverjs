import Product from "../Model/Product-schema.js"
export const getProduct=async(request,response)=>{
 try {
   const getProducts = await Product.find();
   response.status(200).json(getProducts);


 } catch (error) {
    response.status(500).json({message:error.message});
 }   
}
