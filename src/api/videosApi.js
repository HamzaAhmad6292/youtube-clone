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

export const getVideos=async(data)=>{
    try{
        const page=data?.page
        const pageSize=data?.pageSize
        const filter=data
        const response=await axios.post(`${BASE_URL}/videos/getVideos/?filter=${filter}?page=${page}&pageSize=${pageSize}`)
        return response

    }
        catch(error){
            console.log(error)
        }
}