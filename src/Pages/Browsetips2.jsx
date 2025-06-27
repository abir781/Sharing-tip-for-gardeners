import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';
import Sbcard from '../Components/Sbcard';

const Browsetips2 = () => {
    const browsetipsdata=useLoaderData();
    const [category, setCategory] = useState("all");
    const [filteredtips, setFilteredtips] = useState([]);

     useEffect(() => {
    let filtered = browsetipsdata;

    if (category !== "all") {
      filtered = browsetipsdata.filter((tip) => tip.category === category);
    }

    setFilteredtips(filtered);
  }, [browsetipsdata, category]);
    return (
        <div className='w-11/12 mx-auto'>

                <div className=' md:w-[400px] mx-auto mb-7'>

        <select
          onChange={(e) => setCategory(e.target.value)}
          className="select select-bordered w-full max-w-xs"
        >
          <option value="all">All Categories</option>
          <option value="composting">Composting</option>
          <option value="plant care">Plant care</option>
          <option value="Vertical Gardening">Vertical Gardening</option>
          
        </select>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-4 gap-7'>
                {
                    filteredtips.map(sbtips=><Sbcard sbtips={sbtips}></Sbcard>)
                }

            </div>
            
            
        </div>
    );
};

export default Browsetips2;