import React from 'react';
import { Link } from 'react-router';
import Swal from 'sweetalert2';

const Tipcard = ({singletip,alltipsdata,setalltipsdata}) => {
  const handledelete=(_id)=>{
    console.log(_id)
    Swal.fire({
  title: "Are you sure?",
  text: "You won't be able to revert this!",
  icon: "warning",
  showCancelButton: true,
  confirmButtonColor: "#3085d6",
  cancelButtonColor: "#d33",
  confirmButtonText: "Yes, delete it!"
}).then((result) => {
  if (result.isConfirmed) {

    fetch(`https://gardening-server-nine.vercel.app/sharetip/${_id}`,{
      method:'DELETE'
    })
    .then(res=>res.json())
    .then(data=>{
      console.log(data)
      if(data.deletedCount){
          Swal.fire({
      title: "Deleted!",
      text: "Your file has been deleted.",
      icon: "success"
    });
    const remainingtips=alltipsdata.filter(tip=>tip._id !== _id);
    setalltipsdata(remainingtips)

      }
    })
  
  }
});

  }
  
    return (
        <>
        <tr className='text-green-700'>
       
        <td>
          <div className="flex items-center gap-3">
            <div className="avatar">
              <div className="mask mask-squircle h-12 w-12">
                <img
                  src={singletip.photo}
                  alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
            <div>
              <div className="font-bold">{singletip.title}</div>
              
            </div>
          </div>
        </td>
        <td>
          {singletip.plant}
          
         
        </td>
        <td>{singletip.description}</td>
        <td>{singletip.difficulty}</td>
         <td>{singletip.category}</td>
          <td>{singletip.availability}</td>
        <td>{singletip.name}</td>
        <td>{singletip.email}</td>
        <th className='flex gap-3'>

          <Link to={`/updatetip/${singletip._id}`}><button  className="btn btn-warning">Update</button></Link>

          
          <button onClick={()=>handledelete(singletip._id)} className="btn btn-success">Delete</button>
        </th>
      </tr>
        </>
    );
};

export default Tipcard;