import React from 'react';
import { Link } from 'react-router';

const Sbcard = ({sbtips}) => {
    return (
       <div className="card bg-base-100 w-96 shadow-sm">
  <figure>
    <img
      src={sbtips.photo}
      className='w-[300px] h-[300px]'
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">{sbtips.title}</h2>
    <p>{sbtips.category}</p>
    <div className="card-actions justify-end">
         <Link to={`/tipdetails/${sbtips._id}`}>
            <button className="btn btn-info">See More</button>
            </Link>
    </div>
  </div>
</div>
    );
};

export default Sbcard;