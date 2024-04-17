import React from 'react'
import { Helmet } from 'react-helmet-async'
import { useLoaderData } from 'react-router-dom'
import SigleItem from '../components/SingleItem';

function Hotels() {
  const AllProperties = useLoaderData();

  const hotelProperties = AllProperties.filter(property => property.category === "Hotel");


  return (
    <div>
        <Helmet>
            <title>Estate | Hotels</title>
        </Helmet>
        <div className=' flex flex-col items-center'>
        {
          hotelProperties.map(item => <div className='md:w-1/2'> <SigleItem Property = {item}></SigleItem></div> )
        }
        </div>

    </div>
  )
}

export default Hotels