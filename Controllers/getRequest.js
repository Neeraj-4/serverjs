import Wish from "../Model/Request-schema.js";
export const getRequests=async(request,response)=>{
try {
    const users = request.body;
    const newUser = new Wish(users);
    await newUser.save();
     
    response.status(200).json({message:users});
 
} catch (error) {
  response.status(500).json({message:error.message});
    
}
}