import React from 'react';
import { useTypewriter,Cursor } from 'react-simple-typewriter';

const Faq = () => {
    const [text]=useTypewriter({
        words:["Start small with easy-to-grow plants like herbs or leafy greens. Use good soil, proper sunlight, and containers or raised beds if you're short on space."],
        loop:Infinity
    })

       const [text2]=useTypewriter({
        words:['It depends on the plant type, weather, and soil. As a general rule: water when the top inch of soil feels dry. Most plants prefer deep but less frequent watering.'],
        loop:Infinity
    })

        const [text3]=useTypewriter({
        words:['Early morning is ideal, as it allows water to absorb before the sun gets too hot and reduces the risk of mold or mildew overnight.'],
        loop:Infinity
    })

         const [text4]=useTypewriter({
        words:[' Use loamy, well-drained soil rich in organic matter. You can buy potting mix or improve garden soil by adding compost and mulch.'],
        loop:Infinity
    })

         const [text5]=useTypewriter({
        words:[' Most vegetables and flowers need 6-8 hours of sunlight a day. Check the plant tag or label for specific light requirements.'],
        loop:Infinity
    })
    return (
        <div className='w-11/12 mx-auto mt-5 mb-10'>
            <h1 className='text-5xl font-bold text-green-700 text-center mb-5'>Frequently Asked Question</h1>
            <div className='text-green-500 space-y-3 py-3 border-b-2 border-green-700'>
                <h1 className='text-2xl font-bold'>1.What's the best way to start a garden for beginners?</h1>
                <h1 className='text-2xl font-bold'>Answer: {text} <Cursor/> </h1>
            </div>

              <div className='text-green-500 space-y-3 py-3 border-b-2 border-green-700'>
                <h1 className='text-2xl font-bold'>2.How often should I water my plants?</h1>
                <h1 className='text-2xl font-bold'>Answer: {text2} <Cursor/> </h1>
                
            </div>

              <div className='text-green-500 space-y-3 py-3 border-b-2 border-green-700'>
                <h1 className='text-2xl font-bold'>3.What is the best time of day to water plants?</h1>
                <h1 className='text-2xl font-bold'>Answer: {text3} <Cursor/> </h1>
                
            </div>

               <div className='text-green-500 space-y-3 py-3 border-b-2 border-green-700'>
                <h1 className='text-2xl font-bold'>4.What type of soil should I use?</h1>
                <h1 className='text-2xl font-bold'>Answer: {text4} <Cursor/></h1>
            </div>

               <div className='text-green-500 space-y-3 py-3 border-b-2 border-green-700'>
                <h1 className='text-2xl font-bold'>5.How much sunlight do my plants need?</h1>
                <h1 className='text-2xl font-bold'>Answer: {text5} <Cursor/> </h1>
            </div>
            
        </div>
    );
};

export default Faq;