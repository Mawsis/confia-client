// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
export default function Swiping() {
  return (
    <Swiper
    // install Swiper modules
    modules={[Navigation, Pagination, A11y]}
    spaceBetween={10}
    slidesPerView={2.5}
    navigation
    pagination={{ clickable: true }}
    onSwiper={(swiper) => console.log(swiper)}
    onSlideChange={() => console.log('slide change')}
  >
    <SwiperSlide>
        <div className='  border-primary rounded-xl border'>
            <img src="./src/assets/image1.jpg" className=' aspect-video rounded-xl' alt="" />
        </div>
        </SwiperSlide>
    <SwiperSlide>
        <div className='  border-primary rounded-xl border'>
            <img src="./src/assets/image1.jpg" className=' aspect-video rounded-xl' alt="" />
        </div>
        </SwiperSlide>
    <SwiperSlide>
        <div className='  border-primary rounded-xl border'>
            <img src="./src/assets/image1.jpg" className=' aspect-video rounded-xl' alt="" />
        </div>
        </SwiperSlide>
    <SwiperSlide>
        <div className='  border-primary rounded-xl border'>
            <img src="./src/assets/image1.jpg" className=' aspect-video rounded-xl' alt="" />
        </div>
        </SwiperSlide>
    <SwiperSlide>
        <div className='  border-primary rounded-xl border'>
            <img src="./src/assets/image1.jpg" className=' aspect-video rounded-xl' alt="" />
        </div>
        </SwiperSlide>
    <SwiperSlide>
        <div className='  border-primary rounded-xl border'>
            <img src="./src/assets/image1.jpg" className=' aspect-video rounded-xl' alt="" />
        </div>
        </SwiperSlide>
    <SwiperSlide>
        <div className='  border-primary rounded-xl border'>
            <img src="./src/assets/image1.jpg" className=' aspect-video rounded-xl' alt="" />
        </div>
        </SwiperSlide>
    <SwiperSlide>
        <div className='  border-primary rounded-xl border'>
            <img src="./src/assets/image1.jpg" className=' aspect-video rounded-xl' alt="" />
        </div>
        </SwiperSlide>
    <SwiperSlide>
        <div className='  border-primary rounded-xl border'>
            <img src="./src/assets/image1.jpg" className=' aspect-video rounded-xl' alt="" />
        </div>
        </SwiperSlide>
    <SwiperSlide>
        <div className='  border-primary rounded-xl border'>
            <img src="./src/assets/image1.jpg" className=' aspect-video rounded-xl' alt="" />
        </div>
        </SwiperSlide>
    <SwiperSlide>
        <div className='  border-primary rounded-xl border'>
            <img src="./src/assets/image1.jpg" className=' aspect-video rounded-xl' alt="" />
        </div>
        </SwiperSlide>
    <SwiperSlide>
        <div className='  border-primary rounded-xl border'>
            <img src="./src/assets/image2.jpg" className=' aspect-video rounded-xl' alt="" />
        </div>
        </SwiperSlide>
    <SwiperSlide>
        <div className='  border-primary rounded-xl border'>
            <img src="./src/assets/image3.jpg" className=' aspect-video rounded-xl' alt="" />
        </div>
        </SwiperSlide>
    <SwiperSlide>
        <div className='  border-primary rounded-xl border'>
            <img src="./src/assets/image3.jpg" className=' aspect-video rounded-xl' alt="" />
        </div>
        </SwiperSlide>
    <SwiperSlide>
        <div className='  border-primary rounded-xl border'>
            <img src="./src/assets/image3.jpg" className=' aspect-video rounded-xl' alt="" />
        </div>
        </SwiperSlide>
    <SwiperSlide>
        <div className='  border-primary rounded-xl border'>
            <img src="./src/assets/image3.jpg" className=' aspect-video rounded-xl' alt="" />
        </div>
        </SwiperSlide>
  </Swiper>
  )
}
