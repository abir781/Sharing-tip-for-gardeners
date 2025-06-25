import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';


const Slider = () => {
    return (
        <div className=''>
            
            <h2 className='text-3xl  font-bold text-center py-5 text-green-700'>Welcome</h2>
            <div className='w-11/12 mx-auto'>
            <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
    >
      <SwiperSlide className='text-white'>
        <img className='h-[725px] relative rounded-2xl' src="/slider1.jpg" alt="" style={{width:"100%"}} />
        <h1 className='text-white text-6xl absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center'>Grow Together</h1>
        <button className='bg-green-700 px-4 py-2 text-whie rounded-2xl font-bold absolute top-[450px] left-1/2 -translate-x-1/2 -translate-y-1/2'>Explore</button>
        </SwiperSlide>
      <SwiperSlide className='text-white'>
        <img className='h-[725px] relative rounded-2xl' src="/slider2.jpg" alt="" style={{width:"100%"}}/>
        <h1 className='text-white text-6xl absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center '>Your Green Journey Starts Here</h1>
        <button className='bg-green-700 px-4 py-2 text-whie rounded-2xl font-bold absolute top-[450px] left-1/2 -translate-x-1/2 -translate-y-1/2'>Explore</button>

        </SwiperSlide>
      <SwiperSlide className='text-white'>
        <img className='h-[725px] relative rounded-2xl' src="/slider3.jpg" alt="" style={{width:"100%"}}/>
         <h1 className='text-white text-6xl absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center'>Urban Gardening Made Simple</h1>
         <button className='bg-green-700 px-4 py-2 text-whie rounded-2xl font-bold absolute top-[450px] left-1/2 -translate-x-1/2 -translate-y-1/2'>Explore</button>
        </SwiperSlide>
      
      ...
    </Swiper>

            </div>
     
            
        </div>
    );
};

export default Slider;