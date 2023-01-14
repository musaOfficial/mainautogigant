import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import classes from './OwlCarousel.module.css';

var $ = require("jquery");
if (typeof window !== "undefined") {
    window.$ = window.jQuery = require("jquery");
}

const Owler = dynamic(() => import("react-owl-carousel"), {
    ssr: false,
});

function OwlSlider({ children }){
    const [count, setCount] = useState(1);
    console.log(count);

    const limit = 16;

    const options = {
        // margin: 30,
        responsiveClass: true,
        nav: true,
        dots: false,
        autoplay: false,
        smartSpeed: 500,
        navClass: ["owl-prev", "owl-next"],
        navText: [
            '<i class="fas fa-angle-left"></i>',
            '<i class="fas fa-angle-right"></i>',
        ],
        margin: 20,
        responsive: {
            0: {
                items: 1,
            },
            400: {
                items: 1,
            },
            600: {
                items: 2,
            },
            700: {
                items: 3,
            },
            1000: {
                items: 4,
            },
        },
    };
    return (
        <>
        <div className={classes.slider_container}>
            <div className={classes.cart_slide}>
            <Owler
                className="owl-theme"
                loop={true}
                margin={4}
                nav={true}
                navText={[
                    '<img src="/images/Arrow_left.png" />',
                    '<img src="/images/Arrow_right.png" />',
                ]}
            
                dots={false}
                animateIn={true}
                {...options}
            

            >
                {children}
            </Owler>
            </div>
        </div>
        </>
    )
}

export default OwlSlider;