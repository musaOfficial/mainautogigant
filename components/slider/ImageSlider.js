import classes from "./ImageSlider.module.css";
import Image from 'next/image';
import ImageSliderArrow from './../../public/imageSliderArrow.svg'
import SelectSliderArrow from './../../public/selectSliderArrow.svg'
import { useState } from "react";
import CompanyName from './../../public/svgs/companyname.svg';
import CompanyLocation from './../../public/svgs/companylocation.svg';
import ZoomOut from './../../public/images/zoomout.svg';
import Closex from './../../public/images/closedetail.svg';
import { stringify } from "postcss";
import { useEffect } from "react";
import Slider from 'react-touch-drag-slider'
import X from './../../public/images/x.svg';
import Wasserzeichen from './../../public/agwasserzeichen.svg';
import { useRef } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/thumbs";

// import required modules
import { FreeMode, Navigation, Pagination, Thumbs } from "swiper";
const useDeviceSize = () => {

    const [width, setWidth] = useState(0);
    const [height, setHeight] = useState(0);
  
    const handleWindowResize = () => {
      setWidth(window.innerWidth);
      setHeight(window.innerHeight);
    }
  
    useEffect(() => {
      // component is mounted and window is available
      handleWindowResize();
      window.addEventListener('resize', handleWindowResize);
      // unsubscribe from the event on component unmount
      return () => window.removeEventListener('resize', handleWindowResize);
    }, []);
  
    return [width, height]
  
  }


function ImageSlider({
    images
}){
    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    const [carSwiper, setCarSwiper] = useState(null);

    const [width, height] = useDeviceSize();

    const [selectedImage1, setSelectedImage1] = useState(0);
    const [selectedImage2, setSelectedImage2] = useState(0);
    const [selectedImage3, setSelectedImage3] = useState(0);
    const [selectedImage4, setSelectedImage4] = useState(0);
    const [selectedImage5, setSelectedImage5] = useState(0);
    const [selectedImage6, setSelectedImage6] = useState(0);
    const [selectedImage7, setSelectedImage7] = useState(0);
    const [selectedImage8, setSelectedImage8] = useState(0);

    const [currentImage, setCurrentImage] = useState(0);
    const [sliderState, setSliderState] = useState(0);
    const [zoomout, setZoomout] = useState(false);

    const [styleSingleImage, setStyleSingleImage] = useState(0);
    const [selectedImage, setSelectedImage] = useState(0);

    return (
        <>
        {zoomout == true && width >= 1140 && <div className={classes.zoombackground}>
                <X className={classes.x} onClick={() => setZoomout(false)}/>
                <div className={classes.swipercontainer}>
                <Swiper
                    style={{
                    "--swiper-navigation-color": "#fff",
                    "--swiper-pagination-color": "#fff",
                    }}
                    loop={true}
                    spaceBetween={0}
                    navigation={true}
                    pagination={{ type: "fraction" }}
                    thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }}
                    modules={[FreeMode, Pagination, Navigation, Thumbs]}
                    className="mySwiper2"
                >
                    {images.map((img) => <SwiperSlide key={img}>
                        <img src={img}></img>
                    </SwiperSlide>)}
                </Swiper>
                <Swiper
                    onSwiper={setThumbsSwiper}
                    spaceBetween={10}
                    slidesPerView={6}
                    freeMode={true}
                    watchSlidesProgress={true}
                    modules={[FreeMode, Navigation, Thumbs]}
                    className="mySwiper"
                >
                    {images.map((img) => <SwiperSlide key={img}>
                        <img src={img}></img>
                    </SwiperSlide>)}
                </Swiper>
                </div>
            
        </div>}
        <div className={classes.container}>
        <div className={classes.swiperopener}>
                <div className="relative bg-theme-gray w-1000">
                    <Swiper
                        style={{
                        "--swiper-navigation-color": "#fff",
                        "--swiper-pagination-color": "#fff",
                        }}
                        spaceBetween={0}
                        navigation={true}
                        pagination={{ 
                            type: "fraction",
                            color: '#fff'
                        }}
                        thumbs={{ swiper: carSwiper && !carSwiper.destroyed ? carSwiper : null }}
                        modules={[FreeMode, Pagination, Navigation, Thumbs]}
                        className="mySwiper2 cursor-pointer"
                    >
                        {images.map((img) => <SwiperSlide key={img}>
                            <img src={img}></img>
                        </SwiperSlide>)}
                    
                    </Swiper>
                    <div className={classes.zoomer} onClick={() => setZoomout(true)}>
                        <ZoomOut className={classes.zoomericon} />
                     </div>
                </div>
                <Swiper
                    onSwiper={setCarSwiper}
                    spaceBetween={10}
                    slidesPerView={4}
                    freeMode={true}
                    watchSlidesProgress={true}
                    modules={[FreeMode, Navigation, Thumbs]}
                    className="mySwiper"
                >
                    {images.map((img) => <SwiperSlide className="cursor-pointer" key={img}>
                        <img src={img}></img>
                    </SwiperSlide>)}
                </Swiper>
                </div>
            <div className={classes.dealerinfocontainer}>
                <div className={classes.dealerimg}></div>
                <div className={classes.dealerinfo}>
                    <div className={classes.dealer}><strong>Verkäufer</strong>{" "} Händler</div>
                    <div className={classes.companyname}><CompanyName className={classes.companyname}/> Gigant Group Teknoloji A.S.</div>
                    <div className={classes.companylocation}><CompanyLocation className={classes.companylocation}/> Wiener Straße 215, 3100 St. Pölten, AT</div>
                </div>
            </div>
        </div>
        </>
    )
}

export default ImageSlider;