import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Link, useLoaderData } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify'
import "react-toastify/dist/ReactToastify.css";


export function Property({Property}){
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
        yearOfConstruction} = Property; 
    // console.log( tags);
    return(
      <Link to = {`/property/${propertyId}`} class="border-b-8 border-l-4 hover:border-red-500 hover:bg-yellow-50 duration-500 ease-in-out hover:shadow-xl hover:scale-110 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <p className='w-full h-[200px] lg:h-[300px]  flex justify-center'>
            <img class="rounded-t-lg " src={image} alt="" />
          </p>
          <p className='flex pl-3'>
           {
             tags.map(tagName => <p className='m-2 p-2 bg-green-100 text-green-500 font-bold rounded-xl text-xs'> {tagName}</p>)
           }
          </p>
  
          <div class="p-8 pl-6 pt-4">
              <h5 class="mb-4 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{propertyName}</h5>
              <p class="text-red-600 mb-4 font-bold flex gap-2"><img width = {20} src="/All assets/pen-to-square-regular.svg" alt="" /> {owner}</p>
             
              <div className='mt-6 font-bold flex justify-between'>
                  <p className="mb-1 flex gap-2 items-center font-bold p-2 px-4 rounded-full bg-violet-200 text-violet-500"><img width = {20} src="/All assets/font-awesome-regular.svg" alt="" /> {category}</p>
                  <p className=' flex gap-2 items-center'><img src="/All assets/star-regular.svg"  width={20}/><span className='text-blue-500'>{rating}</span></p>
              </div>
          </div>
      </Link>
    )
  }

function Properties() {

    const AllProperties = useLoaderData();

    return (

        <div>
            <Helmet>
                <title>Estate | Home</title>
            </Helmet>

            <div className='grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:mx-8 m-4 gap-4  p-2'>
            {
                AllProperties.map(item => <Property key={item.propertyId} Property = {item}></Property>)
            }
            </div>
            <ToastContainer></ToastContainer>
        </div>
    )
}

export default Properties