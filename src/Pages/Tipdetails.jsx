import React from 'react';
import { useLoaderData } from 'react-router';

const Tipdetails = () => {
    const singletipdata=useLoaderData();
    console.log(singletipdata)
    return (
        <div className='w-11/12 mx-auto min-h-screen'>
            <div className="lg:flex gap-10 mt-20">
                <div>
                    <img className='h-[500px] w-[1500px] rounded-3xl' src={singletipdata.photo} alt="" />

                </div>
                <div className='w-full flex justify-center items-center  border border-green-700 p-10 rounded-3xl'>
                    <div className='text-center'>

                        <h1 className='text-3xl font-semibold text-green-700 '>Title: {singletipdata.title}</h1>
                    <h2 className='text-2xl font-semibold text-green-700'>Description: {singletipdata.description}</h2>
                    <h2 className='text-2xl font-semibold text-green-700'>Plant type: {singletipdata.plant}</h2>
                    <h2 className='text-2xl font-semibold text-green-700'>Difficulty: {singletipdata.difficulty}</h2>
                    <h2 className='text-2xl font-semibold text-green-700'>Category: {singletipdata.category}</h2>
                           <h2 className='text-2xl font-semibold text-green-700'>Name: {singletipdata.name}</h2>
                    <h2 className='text-2xl font-semibold text-green-700'>Email: {singletipdata.email}</h2>
                    <button className="btn btn-warning mt-4 text-green-700">Like</button>

                    </div>
                   

                </div>
            </div>
            
        </div>
    );
};

export default Tipdetails;