import { useState, useEffect } from "react";
import { Swiper } from "swiper/react";
import SwiperCore, { Autoplay } from 'swiper';


import classes from './Carousel.module.css';

export default function FooterCarousel({ children }) {
  const [domLoaded, setDomLoaded] = useState(false);
  SwiperCore.use([Autoplay])
  useEffect(() => {
    setDomLoaded(true);
  }, []);

  return (
    <>
      {domLoaded && (
        <Swiper
          slidesPerView={1}
          spaceBetween={0}
          slidesPerGroup={1}
          loop={true}
          loopFillGroupWithBlank={true}
          navigation={false}
          autoplay={{ delay: 3000 }}
          className={`footer-swiper overflow-hidden z-0 ${classes.borderradius} `}
        >
          {children}
        </Swiper>
      )}
    </>
  );
}
