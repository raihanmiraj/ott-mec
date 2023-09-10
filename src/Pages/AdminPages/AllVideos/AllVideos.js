"use client"
import React, { useEffect, useState } from 'react';

import timeSince from '@/utils/date';
import VideosTableRow from '@/Component/AdminTemplate/VideosTableRow/VideosTableRow';
import axios from 'axios'
const AllVideos = ({ allvideos }) => {
  var aDay = 24 * 60 * 60 * 1000;
  const [loading, setLoading] = useState(true)
  const [renderVideos, SetRenderVideos] = useState(null)
  useEffect(() => {
    if (allvideos && loading) {
      SetRenderVideos(allvideos)
      setLoading(false)
    }
  }, [])

  const deleteButtonHandler = (id) => {
    console.log(id)
    const data = renderVideos.filter(e => e._id !== id);
    SetRenderVideos(data)
    axios.post('/api/admin/video/deleted', {
      "id" :id
       })
      .then(response=>{
        console.log(response.data)
      })
      .catch(err=>{
        console.log(err)
      })
  }


  const approveBtnHanlder = (e) => {
    const updatedData = renderVideos.map(obj => {
      if (obj._id === e) {
        return { ...obj, status: "approved" };
      }
      return obj;
    });
    console.log(updatedData)
    SetRenderVideos(updatedData)
    axios.post('/api/admin/video/approved', {
      "id" :e 
      
      })
      .then(response=>{
        console.log(response.data)
      })
      .catch(err=>{
        console.log(err)
      })
    


  }
  const denyBtnHanlder = (e) => {
    const updatedData = renderVideos.map(obj => {
      if (obj._id === e) {
        return { ...obj, status: "denied" };
      }
      return obj;
    });
    console.log(updatedData)
    SetRenderVideos(updatedData)
    axios.post('/api/admin/video/denied', {
      "id" :e 
       })
      .then(response=>{
        console.log(response.data)
      })
      .catch(err=>{
        console.log(err)
      })
    
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
              <th></th>
            </tr>
          </thead>
          <tbody>
            {!loading &&
              renderVideos.map(e => (
                <>
                  <VideosTableRow key={e._id} e={e} approveBtnHanlder={approveBtnHanlder} deleteButtonHandler={deleteButtonHandler} denyBtnHanlder={denyBtnHanlder} />
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
