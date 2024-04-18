import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Link, useLoaderData } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify'
import "react-toastify/dist/ReactToastify.css";
import { FaRegStar } from "react-icons/fa";
import { IoPricetagsOutline } from 'react-icons/io5';


export function Property({Property}){
    const {    propertyId,
        price,
        propertyName,
        location,
        image,
        description,
        status,
        totalRooms,
        rating,
        category,
        tags,
        owner,
        yearOfConstruction} = Property; 
    // console.log( tags);
    return(
    //   <Link to = {`/property/${propertyId}`} class="border-b-8 border-l-4 hover:border-red-500 duration-500 ease-in-out hover:shadow-xl hover:scale-110 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    //       <p className='w-full h-[200px] lg:h-[300px]  flex justify-center'>
    //         <img class="rounded-t-lg " src={image} alt="" />
    //       </p>
    //       <p className='flex pl-3'>
    //        {
    //          tags.map(tagName => <p className='m-2 p-2 bg-green-100 text-green-500 font-bold rounded-xl text-xs'> {tagName}</p>)
    //        }
    //       </p>
  
    //       <div class="p-8 pl-6 pt-4">
    //           <h5 class="mb-4 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{propertyName}</h5>
    //           <p class="text-red-600 mb-4 font-bold flex gap-2">{owner}</p>
             
    //           <div className='mt-6 font-bold flex justify-between'>
    //               <p className="mb-1 flex gap-2 items-center font-bold p-2 px-4 rounded-full bg-violet-200 text-violet-500">{category}</p>
    //               <p className=' flex gap-2 items-center'><img src="/All assets/star-regular.svg"  width={20}/><span className='text-blue-500'>{rating}</span></p>
    //           </div>
    //       </div> border-b-8 border-l-4 hover:border-red-500 duration-500 ease-in-out
    //   </Link> 

    <Link to={`/property/${propertyId}`} className="relative block  hover:shadow-xl hover:scale-110 duration-500 ease-in-out bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">

        <div className="relative w-full h-[200px] lg:h-[450px] overflow-hidden rounded-t-lg">
            <img className="absolute inset-0 w-full h-full object-cover object-center" src={image} alt="" />
        </div>


        <div className="absolute top-0 left-0 p-2 flex gap-2">
            {tags.map((tagName, index) => (
            <p key={index} className="p-2 bg-green-100 text-green-500 font-bold rounded-xl text-xs">{tagName}</p>
            ))}
<div className={`flex items-center gap-2 ml-16 top-0 right-0 px-8 py-2 rounded-full text-white font-semibold ${status === 'Sale' ? 'bg-red-600' : 'bg-yellow-300'}`}>
            <IoPricetagsOutline></IoPricetagsOutline> {status}
            </div>
        </div>


        <div className="absolute bottom-0 left-0 right-0 p-8 pl-6 pt-4 text-white">
            <h5 className="mb-4 text-2xl font-bold tracking-tight">{propertyName}</h5>

            <div className="flex justify-between">
            <p className="mb-1 flex gap-2 items-center font-bold p-2 px-4 rounded-full bg-violet-200 text-violet-500">{category}</p>
            <div className="flex gap-2 items-center">
                <span className="text-white px-4 py-2 rounded-3xl bg-red-400 font-extrabold flex gap-1 items-center"><FaRegStar className='text-yellow-200'></FaRegStar>{rating}</span>
            </div>
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