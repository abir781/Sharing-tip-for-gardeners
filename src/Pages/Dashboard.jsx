import React, { use, useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';
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
        </div>
    );
};

export default Dashboard;