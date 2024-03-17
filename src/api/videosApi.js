import  axios  from "axios";
import { Questrial } from "next/font/google";

const BASE_URL = 'http://localhost:3001'; // Update with your API URL




export const uploadVideo=async(videoData)=>{
    console.log(videoData)
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

export const getVideos=async({pageParam})=>{
    
    try{
        const pageSize=2;
        const response=await axios.get(`${BASE_URL}/videos/getVideos/?page=${pageParam}&pageSize=${pageSize}`)
        if(response)
         return response
        else
            console.log("no video Found")

    }
        catch(error){
            console.log(error)
        }
}
export const getVideoById=async({id})=>{
    const response=await axios.get(`${BASE_URL}/video/?id=${id}`)
    if(response)
    {
    console.log(response)
    return response
    }
    else
       console.log("no video Found")

}

