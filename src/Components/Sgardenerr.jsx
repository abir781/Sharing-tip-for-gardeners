import React from 'react';

const Sgardenerr = ({sgardener}) => {
    return (
          <div className='bg-green-700 p-4 rounded text-white font-semibold'>
            <img className='h-[400px] w-[300px] object-fit' src={sgardener.Image} alt="" />
            <h1 className='  font-bold text-center'>{sgardener.GardenersName}</h1>
            <div className='flex justify-between'>
                <p className='text-white'>Age:{sgardener.Age}</p>
                <p className=''>{sgardener.Gender}</p>
            </div>
            <p className=' text-center truncate'>{sgardener.Experiences}</p>
            <p className=' text-center'>Total shared tips:{sgardener.TotalSharedTips}</p>
           
            
        </div>
    );
};

export default Sgardenerr;