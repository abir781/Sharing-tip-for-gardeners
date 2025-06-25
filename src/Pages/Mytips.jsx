import React, { use, useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';
import Tipcard from '../Components/Tipcard';
import { Authcontext } from '../provider/Authprovider';

const Mytips = () => {
    const {user}=use(Authcontext);
    const initailalltipsdata=useLoaderData();
    const [alltipsdata,setalltipsdata]=useState([]);

    

      useEffect(() => {
         const singleusertips=initailalltipsdata.filter(singledata=>singledata.email===user.email)
        //  console.log(singleusertips)
         setalltipsdata(singleusertips)

  }, [user.email,initailalltipsdata]);
    
    return (
        <div className='w-11/12 mx-auto min-h-screen'>

            <div>
               <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr className='text-green-700'>
       
        <th>Title</th>
        <th>Plant</th>
        <th>Description</th>
        <th>Difficulty</th>
         <th>Category</th>
          <th>Availability</th>
        <th>Name</th>
        <th>Email</th>
        <th></th>

      </tr>
    </thead>
    <tbody>
     
    
     {
        alltipsdata.map(singletip=><Tipcard key={singletip._id} alltipsdata={alltipsdata} setalltipsdata={setalltipsdata} singletip={singletip}></Tipcard>)
     }
      
    </tbody>
    
  
  </table>
</div>
            </div>
            
            
        </div>
    );
};

export default Mytips;