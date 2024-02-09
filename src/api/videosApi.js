import  axios  from "axios";

const BASE_URL = 'http://localhost:3001'; // Update with your API URL




export const uploadVideo=async(videoData)=>{
    
    try {
        const response =await axios.post(`${BASE_URL}/videos/uploadvideo`,videoData);
    if(response){
        return response;
    }
    }
    catch(error){
        console.log(error)
    }

}