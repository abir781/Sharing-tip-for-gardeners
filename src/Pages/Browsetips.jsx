import React from 'react';
import { Link, useLoaderData } from 'react-router';

const Browsetips = () => {
    const browsetipsdata=useLoaderData();
    // console.log(browsetipsdata);
    return (
        <div className='w-11/12 mx-auto min-h-screen'>
           <div>
            
                <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr className='text-green-700'>
      
        <th className='text-green-700'>Title</th>
        <th>Category</th>
        
        <th></th>
      </tr>
    </thead>
    {
        browsetipsdata.map(btip=> <tbody key={btip._id}>
      {/* row 1 */}
      <tr className='text-green-700'>
       
        <td>
          <div className="flex items-center gap-3">
            <div className="avatar">
              <div className="mask mask-squircle h-12 w-12">
                <img
                  src={btip.photo}
                  alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
            <div>
              <div className="font-bold">{btip.title}</div>
              
            </div>
          </div>
        </td>
        <td>
          {btip.category}
        
        </td>
       
        <th>
            <Link to={`/tipdetails/${btip._id}`}>
            <button className="btn btn-info">See More</button>
            </Link>
          
        </th>
      </tr>
     
    
     
     
    </tbody>
  )
    }
  
  </table>
</div>
            
           </div>
            
        </div>
    );
};

export default Browsetips;