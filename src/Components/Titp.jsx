import React from 'react';


const Titp = ({stip}) => {
    return (
        <div className='lg:grid lg:grid-cols-12 gap-10 justify-items-center my-10 border-2 border-green-700 p-3'>
            <div className='col-span-4 pb-4'>
                <img className='h-[250px] w-[250px] object-fit' src={stip.photo} alt="" />

            </div>
            <div className='col-span-5'>
               

                    <h2 className='text-2xl font-bold text-green-700'>Title:{stip.title}</h2>
                    <h3 className='text-xl font-semibold text-green-700'>Plant type: {stip.plant}</h3>
                    <h3 className='text-xl font-semibold text-green-700'>Description:{stip.description}</h3>
                    <h3 className='text-xl font-semibold text-green-700'>category:{stip.category}</h3>
                      <h3 className='text-xl font-semibold text-green-700'>difficulty: {stip.difficulty}</h3>
                       <h3 className='text-xl font-semibold text-green-700'>Name: {stip.name}</h3>
                      <h3 className='text-xl font-semibold text-green-700'>Email: {stip.email}</h3>

              

            </div>
            
        </div>
    );
};

export default Titp;