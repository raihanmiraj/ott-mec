"use client"
import React, { useEffect, useState } from 'react';

import timeSince from '@/utils/date';
import VideosTableRow from '@/Component/AdminTemplate/VideosTableRow/VideosTableRow';

const AllVideos = ({allvideos}) => {
    var aDay = 24 * 60 * 60 * 1000;
     const [loading, setLoading] = useState(true)
    const [renderVideos, SetRenderVideos] = useState(null)
   useEffect(() => {
    if(allvideos){
        console.log(allvideos)
   
         SetRenderVideos(allvideos)
        setLoading(false)
    }
   }, [])

    const deleteButtonHandler =(e)=>{
      setCurrentID(null)
      setRenderData(data)
   
  }
 
 
   const approveBtnHanlder = (e)=>{
      const updatedData = renderVideos.map(obj => {
          if (obj._id === e) {
            return { ...obj, status: "approved" };
          }
          return obj;
        });
        console.log(updatedData)
        SetRenderVideos(updatedData)

       
   }
   const denyBtnHanlder = (e)=>{
      const updatedData = renderVideos.map(obj => {
          if (obj._id === e) {
            return { ...obj, status: "denied" };
          }
          return obj;
        });
        console.log(updatedData)
        SetRenderVideos(updatedData)
        
   }
    return (
        <>
                <div className="overflow-x-auto px-[5%]">
  <table className="table">
 
    <thead>
      <tr>
         
        <th>Name/ Event</th>
        <th>Department</th>
        <th>Time</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
     { !loading && 
        renderVideos.map(e=>(
<>
<VideosTableRow key={e._id} e={e} approveBtnHanlder={approveBtnHanlder} deleteButtonHandler={deleteButtonHandler} denyBtnHanlder={denyBtnHanlder}/>
</>
        ))
     }
    
     
    </tbody>
    
    
  </table>
</div>  
        </>
    );
}

export default AllVideos;
