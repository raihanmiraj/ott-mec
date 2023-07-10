import React from 'react';

const VideosTableRow = ({e,approveBtnHanlder, deleteButtonHandler, denyBtnHanlder}) => {
    return (
        <>
          <tr >
        
        <td>
          <div className="flex items-center space-x-3">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img src={e.thumbnails} alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
            <div>
              <div className="font-bold">{e.title}</div>
              <div className="text-sm opacity-50">{e.eventname}</div>
            </div>
          </div>
        </td>
        <td>
         {e.department}
            </td>
            <td >
          <span className={`btn border-none ${e.status === 'pending' ? 'btn-warning' : (e.status === 'approved' ? 'btn-success' : 'bg-red-600  text-white hover:bg-red-400')} btn-xs`}>
  {e.status}
</span>

          </td>
   
         <td>
<div className="btn-group">
  <button onClick={()=>approveBtnHanlder(e._id)} className="btn  btn-xs btn-success" disabled={e.status=='approved'?true:false}>Approve</button>
  <button onClick={()=>denyBtnHanlder(e._id)} className="btn  btn-xs border-none bg-red-600 border-none text-white hover:bg-red-400"  disabled={e.status=='denied'?true:false}>Deny</button>
 </div>
</td>
      </tr>  
        </>
    );
}

export default VideosTableRow;
