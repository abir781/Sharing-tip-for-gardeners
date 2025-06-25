import React, { useEffect, useState } from 'react';
import Titp from './Titp';

const Trendingtips = () => {
      const [tips, settips] = useState([]);
    
          useEffect(() => {
        fetch('https://gardening-server-nine.vercel.app/sharetip/public/trending')
          .then(res => res.json())
          .then(data => settips(data));
      }, []);
    return (
        <div className='w-11/12 mx-auto'>
            <h1 className='text-center font-bold text-4xl text-green-700 my-10'>Trending Tips</h1>
            {
                tips.map(stip=><Titp key={stip._id} stip={stip}></Titp>)
            }
            
        </div>
    );
};

export default Trendingtips;