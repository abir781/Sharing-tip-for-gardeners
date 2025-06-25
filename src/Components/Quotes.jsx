import React from 'react';
import {  Slide } from "react-awesome-reveal";

const Quotes = () => {
    return (
        <div className='pt-10 pb-10'>
            <h1 className='text-center text-4xl font-bold pb-10 text-green-700'>Quotes</h1>
            <div className='grid grid-cols-1 lg:grid-cols-4 gap-10 w-11/12 mx-auto'>
            <Slide>

                  <div className='bg-green-700 px-4 py-16 rounded-2xl'>
                    
                         <p className='text-2xl font-bold text-white text-center'>"In every gardener, there is a child who believes in The Seed Fairy" </p>

                 
                   
                </div>

            </Slide>
              
                <Slide>

                      <div className='bg-green-700 px-4 py-16 rounded-2xl'>
                   
                         <p className='text-2xl font-bold text-white text-center'>"The glory of gardening: hands in the dirt, head in the sun, heart with nature." </p>

                    
                   
                </div>

                </Slide>

                <Slide>

                       <div className='bg-green-700 px-4 py-16 rounded-2xl '>
                    
                        <p className='text-2xl font-bold text-white text-center'>"I like gardening. It's a place where I find myself when I need to lose myself." </p>

                    
                    
                </div>

                </Slide>

              
                 
                
              
                
                <Slide>
                     <div className='bg-green-700 px-4 py-16 rounded-2xl'>
                    <p className='text-2xl font-bold text-white text-center'>"Gardening is how I relax. It’s another form of creating and playing with colors" </p>
                </div>

                </Slide>
               
            </div>
            
        </div>
    );
};

export default Quotes;