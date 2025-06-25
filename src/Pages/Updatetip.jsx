import React from 'react';
import { useLoaderData } from 'react-router';
import { toast } from 'react-toastify';

const Updatetip = () => {
    const tipdata=useLoaderData();
    console.log(tipdata)
    const handleupdatetip=(e)=>{
        e.preventDefault();
        const form=e.target;
        const title=form.title.value;
        const plant=form.plant.value;
        const description=form.description.value;
        const name=form.name.value;
        const email=form.email.value;
        const difficulty=form.difficulty.value;
        const category=form.category.value;
        const availability=form.availability.value;
        
        const photo=form.photo.value;
        const updatetip={title,plant,description,name,email,photo,difficulty,category,availability};
        console.log(updatetip)

        fetch(`https://gardening-server-nine.vercel.app/sharetip/${tipdata._id}`,{
            method:'PUT',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(updatetip)

        })
        .then(res=>res.json())
        .then(data=>{
            if(data.modifiedCount){
                toast.success("data updated successfully")
            }
            
        })
        
    }
    return (
        <div className='w-11/12 mx-auto py-10'>
            <h1 className='text-center text-4xl font-bold text-green-700 pb-5'>Update</h1>
            <form onSubmit={handleupdatetip}>
                    <div className='grid grid-cols-1 md:grid-cols-2'>
                        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">
                       

                         <label className="label">Title</label>
                         <input type="text" name='title' defaultValue={tipdata.title} className="input w-full" placeholder="Title" />

                         
                          </fieldset>
                            <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">
                       

                         <label className="label">Plant type</label>
                         <input type="text" name='plant' defaultValue={tipdata.plant} className="input w-full" placeholder="Plant-type" />

                         
                          </fieldset>

                           <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">
                       

                         <label className="label">
                         <span className="label-text font-bold">Difficulty Level</span>
                        </label>

                        <select className="input input-bordered " name="difficulty" id="day">
                         <option value="easy">Easy</option>
                          <option value="medium">Medium</option>
                           <option value="hard">Hard</option>
                
                         </select>

                         
                          </fieldset>
                           
                            <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">
                       

                         <label className="label">Description</label>
                         <input type="text" name='description' defaultValue={tipdata.description} className="input w-full" placeholder="Description" />

                         
                          </fieldset>

                           <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">
                       

                         <label className="label">
                         <span className="label-text font-bold">Category</span>
                         </label>

                        <select className="input input-bordered " name="category" id="day">
                         <option value="composting">Composting</option>
                          <option value="plant care">Plant Care</option>
                            <option value="Vertical Gardening">Vertical Gardening</option>
                
                          </select>

                         
                          </fieldset>

                          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">
                       

                         <label className="label">
                         <span className="label-text font-bold">Availability</span>
                        </label>

                        <select className="input input-bordered " name="availability" id="day">
                          <option value="public">Public</option>
                           <option value="hidden">Hidden</option>
                
                
                         </select>

                         
                          </fieldset>
                            
                            

                               <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">
                       

                         <label className="label">Name</label>
                         <input type="text" name='name' defaultValue={tipdata.name} readOnly className="input w-full" placeholder="Name" />

                         
                          </fieldset>
                            <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">
                       

                         <label className="label">Email</label>
                         <input type="email" name='email' readOnly Value={tipdata.email}  className="input w-full" placeholder="email" />

                         
                          </fieldset>


                        
                    </div>

                      <fieldset className="fieldset bg-base-200 border-base-300 rounded-box my-6 border p-4">
                       

                         <label className="label">Photo</label>
                         <input type="text" name='photo' defaultValue={tipdata.photo} className="input w-full" placeholder="PhotoURL" />

                         
                          </fieldset>

                          <input type="submit" className='btn w-full' value="Update tip" />
                    
                </form>
            
        </div>
    );
};

export default Updatetip;