// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
// Import Swiper styles
import 'swiper/css';


import classes from './Swiper.module.css';

import CallSvg from './../../public/aboutus/call.svg'
import MailSvg from './../../public/aboutus/mail.svg'




function SwiperComponent(){

    return (
        <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={-45}
        slidesPerView={3}
        navigation={true}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}
        setWrapperSize={250}
        slidePrevClass={classes.slideprev}
        slideNestClass={classes.slideprev}
        breakpoints={
            {

                0: {
                    spaceBetween: 20,
                    slidesPerView: 1,
                },

                451: {
                    slidesPerView: 2
                },

                571: {
                    slidesPerView: 3
                },

                700:{
                    slidesPerView: 3,
                    spaceBetween: 20
                },

                701:{
                    spaceBetween: 60,
                    slidesPerView: 2,
                    setWrapperSize: 100
                },

                
                800:{
                    spaceBetween: -5,
                    slidesPerView: 2
                },
                
                960:{
                    spaceBetween: 30,
                    slidesPerView: 3,
                },

                1270:{
                    slidesPerView: 3,
                    spaceBetween: -45
                }
            }
        }
      >
        <SwiperSlide>
            <div className={classes.contactcontainer}>
                <div className={classes.call}>
                    <CallSvg className={classes.aboutussvg} />
                </div>
                <div className={classes.mail}>
                    <MailSvg className={classes.aboutussvg} />
                </div>
                <div className={classes.imgsection}>

                </div>
                <div className={classes.sectionbelow}>
                    <h1>Max Mustermann</h1>
                    <p>Kundenbetreuung</p>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className={classes.contactcontainer}>
                <div className={classes.call}>
                    <CallSvg className={classes.aboutussvg} />
                </div>
                <div className={classes.mail}>
                    <MailSvg className={classes.aboutussvg} />
                </div>
                <div className={classes.imgsection}>

                </div>
                <div className={classes.sectionbelow}>
                    <h1>Max Mustermann</h1>
                    <p>Kundenbetreuung</p>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className={classes.contactcontainer}>
                <div className={classes.call}>
                    <CallSvg className={classes.aboutussvg} />
                </div>
                <div className={classes.mail}>
                    <MailSvg className={classes.aboutussvg} />
                </div>
                <div className={classes.imgsection}>

                </div>
                <div className={classes.sectionbelow}>
                    <h1>Max Mustermann</h1>
                    <p>Kundenbetreuung</p>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className={classes.contactcontainer}>
                <div className={classes.call}>
                    <CallSvg className={classes.aboutussvg} />
                </div>
                <div className={classes.mail}>
                    <MailSvg className={classes.aboutussvg} />
                </div>
                <div className={classes.imgsection}>

                </div>
                <div className={classes.sectionbelow}>
                    <h1>Max Mustermann</h1>
                    <p>Kundenbetreuung</p>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className={classes.contactcontainer}>
                <div className={classes.call}>
                    <CallSvg className={classes.aboutussvg} />
                </div>
                <div className={classes.mail}>
                    <MailSvg className={classes.aboutussvg} />
                </div>
                <div className={classes.imgsection}>

                </div>
                <div className={classes.sectionbelow}>
                    <h1>Max Mustermann</h1>
                    <p>Kundenbetreuung</p>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className={classes.contactcontainer}>
                <div className={classes.call}>
                    <CallSvg className={classes.aboutussvg} />
                </div>
                <div className={classes.mail}>
                    <MailSvg className={classes.aboutussvg} />
                </div>
                <div className={classes.imgsection}>

                </div>
                <div className={classes.sectionbelow}>
                    <h1>Max Mustermann</h1>
                    <p>Kundenbetreuung</p>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className={classes.contactcontainer}>
                <div className={classes.call}>
                    <CallSvg className={classes.aboutussvg} />
                </div>
                <div className={classes.mail}>
                    <MailSvg className={classes.aboutussvg} />
                </div>
                <div className={classes.imgsection}>

                </div>
                <div className={classes.sectionbelow}>
                    <h1>Max Mustermann</h1>
                    <p>Kundenbetreuung</p>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className={classes.contactcontainer}>
                <div className={classes.call}>
                    <CallSvg className={classes.aboutussvg} />
                </div>
                <div className={classes.mail}>
                    <MailSvg className={classes.aboutussvg} />
                </div>
                <div className={classes.imgsection}>

                </div>
                <div className={classes.sectionbelow}>
                    <h1>Max Mustermann</h1>
                    <p>Kundenbetreuung</p>
                </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className={classes.contactcontainer}>
                <div className={classes.call}>
                    <CallSvg className={classes.aboutussvg} />
                </div>
                <div className={classes.mail}>
                    <MailSvg className={classes.aboutussvg} />
                </div>
                <div className={classes.imgsection}>

                </div>
                <div className={classes.sectionbelow}>
                    <h1>Max Mustermann</h1>
                    <p>Kundenbetreuung</p>
                </div>
            </div> 
        </SwiperSlide>
      </Swiper>
    )
}

export default SwiperComponent;