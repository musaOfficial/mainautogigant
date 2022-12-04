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
        spaceBetween={50}
        slidesPerView={3}
        navigation
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}
        setWrapperSize={250}
        slidePrevClass={classes.slideprev}
        slideNestClass={classes.slideprev}
        slideClass={classes.slider}
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