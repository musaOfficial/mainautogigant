// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import classes from './HomeSwiper.module.css';

// Import Swiper styles
import { Pagination } from 'swiper';
import { Navigation } from 'swiper';
export default function HomeSwiper({ children }) {
  return (
    <>
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        navigation={true}
        modules={[Pagination, Navigation]}
        className={`bg-transparent h-full ${classes.homeswiper}`}
      >
        {children}
      </Swiper>
    </>
  );
}
