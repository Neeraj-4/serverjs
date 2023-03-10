import mongoose from "mongoose";
export const Connection = async(URL)=>
{
    try {
      
        await mongoose.connect(URL,{useUnifiedTopology: true,useNewUrlParser: true});
        console.log('database connect sucessfully');

    } catch (error) {
        console.log('error found during connection with database',error.message);
                   
    }




}
export default Connection;