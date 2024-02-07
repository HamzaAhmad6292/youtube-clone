import { getDownloadURL, getStorage, ref, uploadBytesResumable } from "firebase/storage";


export const uploadVideo = async ({setVideoUrl,setThumbnailUrl,videoFile,thumbnailFile}) => {
  const storage = getStorage();



    if (videoFile && thumbnailFile) {
      // Upload files to Firebase Storage
      const videoRef = ref(storage, `videos/${videoFile.name}`);
      const uploadedVideo=uploadBytesResumable(videoRef,videoFile)
      // await videoRef.put(videoFile);



      const thumbnailRef = ref(storage, `thumbnails/${thumbnailFile.name}`);
      const uploadedThumbnail=uploadBytesResumable(thumbnailRef,thumbnailFile);

      // await thumbnailRef.put(thumbnailFile);

      // Get URLs of uploaded files
      //  const videoUrl = await videoRef.getDownloadURL();
      //  const thumbnailUrl = await thumbnailRef.getDownloadURL();

        try{
          const videoUrl=await getDownloadURL(ref(storage, `videos/${videoFile.name}`))
          const thumbnailUrl=await getDownloadURL(ref(storage, `thumbnails/${thumbnailFile.name}`))

          setThumbnailUrl(thumbnailUrl)
          setVideoUrl(videoUrl)
          console.log('Video URL:', videoUrl);
          console.log('Thumbnail URL:', thumbnailUrl);
          
   
        }
      catch(error){
        console.log(error)
      }


  
      // Do something with the URLs (e.g., store in state)
 
    }
  };