import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

export default () => {
  return (
    <Swiper
        // install Swiper modules
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={10}
        slidesPerView={3}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}
      >
        <SwiperSlide>
          <img src="https://t3.ftcdn.net/jpg/06/19/00/08/360_F_619000872_AxiwLsfQqRHMkNxAbN4l5wg1MsPgBsmo.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://t3.ftcdn.net/jpg/02/94/19/40/360_F_294194023_disE35GtlVLDQx4caNDaWewZI8LbxWFQ.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://completehospitalitymanagement.com/wp-content/uploads/2023/08/luxury-real-estate-photo-punta-cana-850x568.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://image12.photobiz.com/7737/21_20160817083408_4958639_medium.jpg" alt="" />
        </SwiperSlide>
    </Swiper>
  );
};