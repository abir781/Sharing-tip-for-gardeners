import React from 'react';

const Signlegardener = ({gd}) => {
    return (
          <div className='bg-green-700 p-4 rounded text-white font-semibold'>
            <img className='h-[400px] w-[300px] object-fit' src={gd.Image} alt="" />
            <h1 className='  font-bold text-center'>{gd.GardenersName}</h1>
            <div className='flex justify-between'>
                <p className='text-white'>Age:{gd.Age}</p>
                <p className=''>{gd.Gender}</p>
            </div>
            <p className=' text-center truncate'>{gd.Experiences}</p>
            <p className=' text-center'>Total shared tips:{gd.TotalSharedTips}</p>
           
            
        </div>
    );
};

export default Signlegardener;