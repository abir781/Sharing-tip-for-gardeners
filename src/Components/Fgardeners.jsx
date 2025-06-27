import React, { useEffect, useState } from 'react';
import Signlegardener from './Signlegardener';

const Fgardeners = () => {

     const [gardeners, setGardeners] = useState([]);

      useEffect(() => {
    fetch('https://gardening-server-nine.vercel.app/gardener/active')
      .then(res => res.json())
      .then(data => setGardeners(data));
  }, []);
    return (
        <div className='w-11/12 mx-auto'>
            <h1 className='text-4xl font-bold text-green-700 text-center py-10'>Featured Gardeners</h1>
            <div className='grid grid-cols-1 lg:grid-cols-4 justify-items-center gap-10'>

                 {
                gardeners.map(gd=><Signlegardener key={gd._id} gd={gd}></Signlegardener>)
            }

            </div>
           
            
        </div>
    );
};

export default Fgardeners;