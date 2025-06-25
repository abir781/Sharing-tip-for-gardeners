import React, { use } from 'react';
import { toast } from 'react-toastify';
import { Authcontext } from '../provider/Authprovider';

const Sharetip = () => {
    const {user}=use(Authcontext);
   
    const handlesharetip=(e)=>{
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
        const newtip={title,plant,description,name,email,photo,difficulty,category,availability}
        console.log(newtip)

        fetch('https://gardening-server-nine.vercel.app/sharetip',{
            method:'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newtip)
        })
        .then(res=>res.json())
        .then(data=>{
            toast.success("Data added to database successfully");
            console.log('after adding sharetip to db',data)
        })
    }
    return (
        <div className='max-w-7xl mx-auto'>
            <div className='p-25'>
                <div className='text-center space-y-4 mb-10'>
                    <h1 className='text-6xl text-green-700'>Share a garden tip</h1>
                   
                </div>
                <form onSubmit={handlesharetip}>
                    <div className='grid grid-cols-1 md:grid-cols-2'>
                        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">
                       

                         <label className="label">Title</label>
                         <input type="text" name='title' className="input w-full" placeholder="Title" />

                         
                          </fieldset>
                            <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">
                       

                         <label className="label">Plant type</label>
                         <input type="text" name='plant' className="input w-full" placeholder="Plant-type" />

                         
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
                         <input type="text" name='description' className="input w-full" placeholder="Description" />

                         
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
                         <input type="text" value={user.displayName} readOnly  name='name' className="input w-full" placeholder="Name" />

                         
                          </fieldset>
                            <fieldset className="fieldset bg-base-200 border-base-300 rounded-box  border p-4">
                       

                         <label className="label">Email</label>
                         <input type="email" value={user.email} required  name='email' className="input w-full" placeholder="email" />

                         
                          </fieldset>


                        
                    </div>

                      <fieldset className="fieldset bg-base-200 border-base-300 rounded-box my-6 border p-4">
                       

                         <label className="label">Photo</label>
                         <input type="text" name='photo' className="input w-full" placeholder="PhotoURL" />

                         
                          </fieldset>

                          <input type="submit" className='btn w-full' value="Share a tip" />
                    
                </form>

            </div>
            
        </div>
    );
};

export default Sharetip;