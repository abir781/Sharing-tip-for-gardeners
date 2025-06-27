import React, { use, useEffect, useState } from 'react';
import { NavLink, Outlet, useLoaderData } from 'react-router';
import { Authcontext } from '../provider/Authprovider';

const Dashboard = () => {
     const[publictips,setpublictips]=useState(0);
        // const[mytips,setmytips]=useState(0);
         const {user}=use(Authcontext);
    const initailalltipsdata=useLoaderData();
    const [alltipsdata,setalltipsdata]=useState([]);
    

    

      useEffect(() => {
         const singleusertips=initailalltipsdata.filter(singledata=>singledata.email===user?.email)
        //  console.log(singleusertips)
         setalltipsdata(singleusertips)

  }, [user?.email,initailalltipsdata]);
          useEffect(() => {
                        
                      fetch("https://gardening-server-nine.vercel.app/sharetip/public").then(res=>res.json()).then(data=>setpublictips(data.length))
                      
                
                  },[] );
    
    
        //  useEffect(() => {
                        
        //               fetch("https://food-server-brown.vercel.app/nearylyexpiryfoods").then(res=>res.json()).then(data=>setmytips(data.length))
                      
                
        //           },[] );
    return (
        <div className='w-11/12 mx-auto min-h-screen '>
             <div className='grid grid-cols-1 md:grid-cols-2 gap-10 mt-10'>

               <div className='bg-green-700 p-10 rounded-2xl text-white'>

                <p className='text-2xl font-bold text-center'>Pubic tips</p>

                <p className='text-2xl font-bold text-center'>{publictips} </p>
            </div>

            <div className='bg-green-700 p-10 rounded-2xl text-white'>
                 <p className='text-2xl font-bold text-center'>My tips</p>

                <p className='text-2xl font-bold text-center'>{alltipsdata.length} </p>
            </div>
            
        </div>

         <div className='bg-green-700 mt-10 rounded-2xl w-full'>
            <div className='flex justify-center mt-10'>
                <img className='w-[200px] h-[200px]' src={user.photoURL} alt="" />
                

            </div>
            <h2 className='text-4xl text-center text-white'>{user.displayName}</h2>
             <h2 className='text-4xl text-center text-white pb-10'>{user.email}</h2>

        </div>
        <div className='mt-10 flex justify-center mb-10'>
              <ul className='flex gap-5 text-green-700'>
                    
                    <li className=''><NavLink className={({isActive})=>(isActive?'font-bold':'')} to="/dashboard">Share a Garden Tip</NavLink></li>
                     <li className=''><NavLink className={({isActive})=>(isActive?'font-bold':'')} to="dashboard/browsetip2">Browse Tips</NavLink></li>
                   
                    <li className=''><NavLink className={({isActive})=>(isActive?'font-bold':'')} to="dashboard/mytips">My Tips </NavLink></li>
                  
                   
                </ul>
        </div>
        <Outlet></Outlet>
        </div>
    );
};

export default Dashboard;