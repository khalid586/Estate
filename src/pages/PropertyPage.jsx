import React, { useContext } from 'react'
import { Link, useLoaderData, useParams } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { AuthContext } from '../providers/AuthProvider';

function PropertyItem({property}){
    const {    propertyId,
        propertyName,
        location,
        image,
        description,
        totalRooms,
        rating,
        category,
        tags,
        owner,
        yearOfConstruction} = property; 
  
    return(
      <div className='text-center flex flex-col items-center'>  
          <div className=''> 
          
            <img class="h-auto max-w-full" src={image} alt="image description"/>

            {/* <img className = "w-[50vw]" src = {image} alt=""/> */}
          </div>  
          <div className="lg:w-1/2 justify-center flex flex-col items-center border-gray-200 rounded-lg md:flex-row  dark:border-gray-700">
              <div className='m-4'>
                <h5 className="mb-8 text-2xl lg:text-4xl font-bold tracking-tight text-gray-900 dark:text-white">{propertyName}</h5>
              </div>
              <div className="flex flex-col p-4 leading-normal">
                   <div className='flex flex-col items-start'>
                      <p className="mb-1 flex gap-2 font-bold text-red-500 dark:text-gray-400">   {owner}</p>
                      <p className="mb-1 flex gap-2 font-bold text-violet-500 dark:text-gray-400">{category}</p>
                      <p className="my-1 flex items-start justify-center gap-2 font-bold text-gray-500 dark:text-gray-400"><span className='text-left'>{description}</span></p>
                   </div>
                   <p className='flex items-center gap-4'>
                    <p className='font-bold text-lg flex gap-4'><img src="/All assets/tags-solid.svg" width={20} alt="" /></p>
                    {
                      tags.map(tagName => <p className='p-2 bg-green-100 text-green-500 font-bold rounded-xl text-xs'> {tagName}</p>)
                    }
                  </p>
                  <div className='flex flex-col justify-start items-start my-2 font-bold text-gray-500 gap-1'>    
                      <p className='flex gap-2'>Location: <span className='text-black'>{location}</span></p>
                      <p className='flex gap-2'>Year of Construction: <span className='text-black'>{yearOfConstruction}</span></p>
                      <p className='flex gap-2'>Rating: <span className='text-blue-600'>{rating}</span></p>
                      <p className='flex gap-2'>Number of Rooms: <span className='text-black'>{totalRooms}</span></p>
                  </div>
                  
              </div>
          </div>
          <button className='mt-4'><Link className='btn2 text-sm  my-4' to = "/">Return Home</Link></button>
      </div>
    )
  }

function PropertyPage() {
    let {id} = useParams();
    id = parseInt(id);
    const AllProperties = useLoaderData();

    const Property = AllProperties.find(item => item.propertyId == id)
  
    return (
      <div className='mt-16  flex justify-center'>
        <PropertyItem key={Property.propertyId} property = {Property}></PropertyItem>
        <ToastContainer></ToastContainer>
        
      </div>
    )
}

export default PropertyPage