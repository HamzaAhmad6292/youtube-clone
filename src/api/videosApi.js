import  axios  from "axios";
import { Questrial } from "next/font/google";

const BASE_URL = 'http://localhost:3001'; // Update with your API URL




export const uploadVideo=async(videoData)=>{
    console.log(videoData)
    try {
        const response =await axios.post(`${BASE_URL}/videos/uploadvideo`,videoData);
        console.log(response)
    if(response){
        return response;
    }
    }
    catch(error){
        console.log(error)
    }

}

export const getVideos=async({pageParam},data)=>{
    
    try{
        const pageSize=2;
        const response=await axios.get(`${BASE_URL}/videos/getVideos/?page=${pageParam}&pageSize=${pageSize}`)
        return response

    }
        catch(error){
            console.log(error)
        }
}