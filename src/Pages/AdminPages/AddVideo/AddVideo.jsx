"use client"
import { AuthContext } from '@/Provider/AuthContextProvider';
 import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';

const AddVideo = () => {
  const [loading, setLoading] = useState(true);
  const [videosData, setvideosData] = useState(null);
  const [message, setMessage] = useState(null);
  const [imguploadingmessage, setimguploadingmessage] = useState(null);
  const [progresssending, setProgresssending] = useState(false);
  const [uploadedImageUrl, setUploadedImageUrl] = useState(null);
  
  const  { user, toastPush, setUserData}  = useContext(AuthContext);
const userData = {
  instructoremail:"rsnmiraj@gmail.com",
  instructorname:"Raihan Miraj"
}
  const getPublishAt=()=>{
    const currentDate = new Date();
const formattedDate = currentDate.toISOString().slice(0, -5) + "Z";
console.log(formattedDate);
  }


   useEffect(() => {
    setLoading(false)
    }, []);
    const formSubmitHandler = async (e)=>{
      setProgresssending(true)
        e.preventDefault()
        let dataInsert = {...videosData, publishedAt:getPublishAt(), thumbnails : uploadedImageUrl, status:'pending' }
        console.log(dataInsert)
      // const result = await  insertinvideo(dataInsert)
    
        axios.post('/api/insertvideo',(dataInsert))
        .then(response=>{
          console.log(response.data)
        }).catch(err=>{
          console.log(err)
        })
// axios.post("/addclass",dataInsert)
// .then(response=>{ 
//   setProgresssending(false)
//   toastPush("Class Added Successfully")
// })
// .catch(err=>{
//   console.log(err)
//   setProgresssending(false)
//   toastPush("Class Added Failed")
// })


    }

    

    const inputChangeHandler =(e)=>{
        setvideosData({...videosData, [e.target.id]:e.target.value})
        setMessage(null)
    } 
    const imageUploadHandler = (e)=>{
      setimguploadingmessage("Wait... Image Is Uploading") 
      setProgresssending(true)
      const formData = new FormData();
      const countFile = e.target.files.length;
      console.log(countFile);
      
      for (let i = 0; i < countFile; i++) {
        formData.append("image", e.target.files[i]);
       
        fetch('https://api.imgbb.com/1/upload?expiration=0&key=89cd126a18f125ea9e7f8256dcb15acb', {
method: 'POST',
body: formData,
})
.then((response) => response.json())
.then((data) => {
  console.log(data);
  setUploadedImageUrl(data.data.display_url);
  setimguploadingmessage(null);
  setProgresssending(false);
})
.catch((error) => {
  setimguploadingmessage('Error');
  setProgresssending(false);
});

      }
      
    }

    return (
        <>
    <section className='flex justify-center'>
    <form action="" className='w-[90%] md:w-[50%]' onSubmit={formSubmitHandler}>
 
 

 <div className="form-control w-full ">
       <label className="label">
         <span className="label-text">Video Title</span>
       </label>
       <input name='title'   id='title'     onChange={inputChangeHandler} type="text" placeholder="Video Title" className="input input-bordered w-full " />
      </div>
      <div className="form-control w-full ">
       <label className="label">
         <span className="label-text">Description</span>
       </label>
       <textarea className="textarea textarea-bordered h-24"  name='description'   id='description'    onChange={inputChangeHandler} placeholder="Description"></textarea>
      </div>

      <div className="form-control w-full ">
       <label className="label">
         <span className="label-text">Video URL</span>
       </label>
       <input name='videourl'   id='videourl'     onChange={inputChangeHandler} type="text" placeholder="Video URL" className="input input-bordered w-full " />
      </div>

       <div className='grid grid-cols-3 flex items-center'>
      <div className="form-control w-full col-span-2">
       <label className="label">
         <span className="label-text">Thumbnails</span>
       </label> 
        <input type="file"   onChange={imageUploadHandler}     name='thumbnails'   id='thumbnails'  className="file-input file-input-bordered w-full max-w-xs" />
      </div>
     <div className='mt-3'>
     {
       uploadedImageUrl && <img className='rounded-lg' src={uploadedImageUrl}/>
      }
     </div>
      </div>
{imguploadingmessage && <div>
       <p className='text-red-700'>{imguploadingmessage}</p>
      </div>}
      
     
      <div className="form-control w-full ">
       <label className="label">
         <span className="label-text">Event Name</span>
       </label>
       <input name='eventname'  id='eventname'   type="text" onChange={inputChangeHandler} placeholder="Event name" className="input input-bordered w-full "  />
      </div>

      <div className="form-control w-full ">
       <label className="label">
         <span className="label-text">Instructor Name</span>
       </label>
       <input name='instructorname'   id='instructorname'  value={userData.instructorname}    type="text" placeholder="instructorname" className="input input-bordered w-full " readonly/>
      </div>

      <div className="form-control w-full ">
       <label className="label">
         <span className="label-text">Instructor Email</span>
       </label>
       <input name='instructoremail'   id='instructoremail'  value={userData.instructoremail}   type="text" placeholder="Instructor Email" className="input input-bordered w-full " readonly/>
      </div>

      <div className="form-control w-full ">
       <label className="label">
         <span className="label-text">Department</span>
       </label>
       <input name='department'   id='department'    onChange={inputChangeHandler} type="text" placeholder="Department"  className="input input-bordered w-full " />
      </div>
     

      
     
     
     <div className='flex justify-center mt-4'>
     <button className="btn btn-primary gap-2" disabled={progresssending}>
       {progresssending && <div class="w-4 h-4 rounded-full animate-spin
                   border-2 border-solid border-white border-t-transparent"></div> }
     
                   <span>Add a Class</span>
       </button>
      </div>
     </form> 
    </section>
        </>
    );
}

export default AddVideo;
