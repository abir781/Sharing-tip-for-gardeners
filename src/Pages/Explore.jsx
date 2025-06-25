import React from 'react';
import { useLoaderData } from 'react-router';
import Signlegardener from '../Components/Signlegardener';
import Sgardenerr from '../Components/Sgardenerr';

const Explore = () => {
    const gardenerdata=useLoaderData();
    // console.log(gardenerdata)
    return (
        <div className='w-11/12 mx-auto py-10'>
            <h1 className='text-4xl text-green-700 font-bold text-center py-5'>Gardeners</h1>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-10 justify-items-center'>
                {
                    gardenerdata.map(sgardener=><Sgardenerr key={sgardener._id} sgardener={sgardener}></Sgardenerr>)
                }
            </div>
            
            
        </div>
    );
};

export default Explore;