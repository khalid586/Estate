import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

// import Image from "next/image";
import { Carousel } from "keep-react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Banner } from 'flowbite-react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

export default () => {
  return (

    <Carousel className='md:m-8' slideInterval={1000} showControls={true} indicators={true}>
      <img src="https://image12.photobiz.com/7737/21_20160817083408_4958639_medium.jpg" alt="slider-2" />
      <img src="https://completehospitalitymanagement.com/wp-content/uploads/2023/08/luxury-real-estate-photo-punta-cana-850x568.jpg" alt="slider-3" />
      <img src="https://t3.ftcdn.net/jpg/06/19/00/08/360_F_619000872_AxiwLsfQqRHMkNxAbN4l5wg1MsPgBsmo.jpg" alt="slider-4" />
      <img src="https://image12.photobiz.com/7737/21_20160817083408_4958639_medium.jpg" alt="slider-1" />
    </Carousel>



  )
}