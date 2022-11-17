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
const useDeviceSize = () => {

    const [width, setWidth] = useState(0)
    const [height, setHeight] = useState(0)
  
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
        <div className={classes.container}>
            {zoomout == true && width >= 1140 && <div className={classes.zoombackground}>
                <div className={classes.werbung}>
                    <div className={classes.werbungtext}>Werbung</div>
                    <div className={classes.werbeflaeche}></div>
                </div>
                <div className={classes.bigimg}>
                    <img src={images[currentImage]} alt="Image" className={width < 2000 ? classes.img : classes.imgbig} />
                    <SelectSliderArrow className={classes.leftbig} onClick={
                        () => {
                            if(currentImage != 0){
                                if(currentImage == sliderState){
                                    setSliderState(f => f - 1)
                                }
                                setCurrentImage(f => f - 1);
                                setSelectedImage(f => f - 1);
                            }
                        }
                    }/>
                    <SelectSliderArrow className={classes.rightbig} onClick={() => {
                        if(currentImage != images.length - 1){
                            if(currentImage == sliderState + 4){
                                setSliderState(f => f + 1)
                            }
                            setCurrentImage(f => f + 1);
                            setSelectedImage(f => f + 1);
                        }
                    }}/>
                    <X className={classes.close} onClick={() => setZoomout(false)}/>
                </div>
                <div className={classes.ImageSliderContainer}>
                        <SelectSliderArrow className={classes.leftsliderarrowzoom} onClick={(e) => {
                            if(sliderState != 0){
                                setSliderState(d => d - 1)
                            }
                        }}/>
                        <div className={classes.zoomimg} onClick={() => {
                            setCurrentImage(sliderState)
                            setSelectedImage(sliderState)
                        }}>
                            <img className={`${classes.zoomimage} ${sliderState == selectedImage && classes.zoomborder}`} src={images[sliderState]} />
                        </div>
                        <div className={classes.zoomimg} onClick={() => {
                            setCurrentImage(sliderState + 1)
                            setSelectedImage(sliderState + 1)
                        }}>
                            <img className={`${classes.zoomimage} ${sliderState + 1 == selectedImage && classes.zoomborder}`} src={images[sliderState + 1]} />
                        </div>
                        <div className={classes.zoomimg} onClick={() => {
                            setCurrentImage(sliderState + 2)
                            setSelectedImage(sliderState + 2)
                        }}>
                            <img className={`${classes.zoomimage} ${sliderState + 2 == selectedImage && classes.zoomborder}`} src={images[sliderState + 2]} />
                        </div>
                        <div className={classes.zoomimg} onClick={() => {
                            setCurrentImage(sliderState + 3)
                            setSelectedImage(sliderState + 3)
                        }}>
                            <img className={`${classes.zoomimage} ${sliderState + 3 == selectedImage && classes.zoomborder}`} src={images[sliderState + 3]} />
                        </div>
                        <div className={classes.zoomimg} onClick={() => {
                            setCurrentImage(sliderState + 4)
                            setSelectedImage(sliderState + 4)
                        }}>
                            <img className={`${classes.zoomimage} ${sliderState + 4 == selectedImage && classes.zoomborder}`} src={images[sliderState + 4]} />
                        </div>
                        <div className={classes.zoomimg} onClick={() => {
                            setCurrentImage(sliderState + 5)
                            setSelectedImage(sliderState + 5)
                        }}>
                            <img className={`${classes.zoomimage} ${sliderState + 5 == selectedImage && classes.zoomborder}`} src={images[sliderState + 5]} />
                        </div>
                        <div className={classes.zoomimg} onClick={() => {
                            setCurrentImage(sliderState + 6)
                            setSelectedImage(sliderState + 6)
                        }}>
                            <img className={`${classes.zoomimage} ${sliderState + 6 == selectedImage && classes.zoomborder}`} src={images[sliderState + 6]} />
                        </div>
                        <div className={classes.zoomimg} onClick={() => {
                            setCurrentImage(sliderState + 7)
                            setSelectedImage(sliderState + 7)
                        }}>
                            <img className={`${classes.zoomimage} ${sliderState + 7 == selectedImage && classes.zoomborder}`} src={images[sliderState + 7]} />
                        </div>
                        <div className={classes.zoomimg} onClick={() => {
                            setCurrentImage(sliderState + 8)
                            setSelectedImage(sliderState + 8)
                        }}>
                            <img className={`${classes.zoomimage} ${sliderState + 8 == selectedImage && classes.zoomborder}`} src={images[sliderState + 8]} />
                        </div>
                        <SelectSliderArrow className={classes.rightsliderarrowzoom} onClick={(e) => {
                        if(sliderState + 8 != images.length - 1){
                            setSliderState(d => d + 1)
                        }
                    }}/>
                </div>
            </div>}
            <div className={classes.content}>
                <Image src={images[currentImage]} layout='fill' objectFit="cover"/>
                <div className={classes.leftbox}>
                    <ImageSliderArrow className={classes.left} onClick={(e) => {
                        if(currentImage != 0){
                            if(currentImage == sliderState){
                                setSliderState(f => f - 1)
                            }
                            setCurrentImage(f => f - 1);
                        }
                    }} />
                </div>
                <div className={classes.rightbox}>
                    <ImageSliderArrow className={classes.right} onClick={(e) => {
                        if(currentImage != images.length - 1){
                            if(currentImage == sliderState + 4){
                                setSliderState(f => f + 1)
                            }
                            setCurrentImage(f => f + 1);
                        }
                    }}/>
                </div>
                {width > 1140 && 
                    <div className={classes.zoomout} onClick={() => setZoomout(true)}><ZoomOut className={classes.zoomoutsvg}/></div>
                }
                <div className={classes.counterbackground}>
                    <span>{currentImage + 1}</span> / <span>{images.length}</span>
                </div>
            </div>
            <div className={classes.selectslider}>
                <div>
                    <SelectSliderArrow className={classes.leftsliderarrow} onClick={(e) => {
                        if(sliderState != 0){
                            setSliderState(d => d - 1)
                        }
                    }}/> 
                    <div className={classes.slider}>
                        <div className={`${classes.singleSliderSelectImage} ${classes.specialborderleft} ${selectedImage1 == true && classes.border}`} onClick={(e) => {
                            setCurrentImage(sliderState)
                            setSelectedImage5(false);
                            setSelectedImage4(false);
                            setSelectedImage3(false);
                            setSelectedImage2(false);
                            setSelectedImage1(true);
                            setSelectedImage6(false);
                            setSelectedImage7(false);
                            setSelectedImage8(false);
                        }}>
                            <Image className={classes.image} src={images[sliderState]} layout='fill'/>
                        </div>
                        <div className={`${classes.singleSliderSelectImage} ${selectedImage2 == true && classes.border}`} onClick={(e) => {
                            setCurrentImage(sliderState + 1);
                            setSelectedImage5(false);
                            setSelectedImage4(false);
                            setSelectedImage3(false);
                            setSelectedImage2(true);
                            setSelectedImage1(false);
                            setSelectedImage6(false);
                            setSelectedImage7(false);
                            setSelectedImage8(false);
                        }}>
                            <Image className={classes.image} src={images[sliderState + 1]} layout='fill' />
                        </div>
                        <div className={`${classes.singleSliderSelectImage} ${width <= 554 && classes.specialborderright} ${selectedImage3 == true && classes.border}`} onClick={(e) => {
                            setCurrentImage(sliderState + 2);
                            setSelectedImage5(false);
                            setSelectedImage4(false);
                            setSelectedImage3(true);
                            setSelectedImage2(false);
                            setSelectedImage1(false);
                            setSelectedImage6(false);
                            setSelectedImage7(false);
                            setSelectedImage8(false);
                        }}>
                            <Image className={classes.image} src={images[sliderState + 2]} layout='fill' />
                        </div>
                        {width >= 555 && 
                            <div className={`${classes.singleSliderSelectImage} ${width >= 555 && width <= 654 && classes.specialborderright} ${selectedImage4 == true && classes.border}`} onClick={(e) => {
                                setCurrentImage(sliderState + 3);
                                setSelectedImage5(false);
                                setSelectedImage4(true);
                                setSelectedImage3(false);
                                setSelectedImage2(false);
                                setSelectedImage1(false);
                                setSelectedImage6(false);
                                setSelectedImage7(false);
                                setSelectedImage8(false);
                            }}>
                                <Image className={classes.image} src={images[sliderState + 3]} layout='fill' />
                            </div>
                        }
                        {width >= 655 &&  
                            <div className={`${classes.singleSliderSelectImage} ${(width >= 655 && width <= 749) || width > 1140 && classes.specialborderright} ${selectedImage5 == true && classes.border}`} onClick={(e) => {
                                setCurrentImage(sliderState + 4);
                                setSelectedImage5(true);
                                setSelectedImage4(false);
                                setSelectedImage3(false);
                                setSelectedImage2(false);
                                setSelectedImage1(false);
                                setSelectedImage6(false);
                                setSelectedImage7(false);
                                setSelectedImage8(false);
                            }}>
                                <Image className={classes.image} src={images[sliderState + 4]} layout='fill' />
                            </div>
                        }
                        {width <= 1140 && width >= 755 && 
                            <div className={`${classes.singleSliderSelectImage} ${width >= 755 && width <= 854 && classes.specialborderright} ${selectedImage6 == true && classes.border}`} onClick={(e) => {
                                setCurrentImage(sliderState + 5);
                                setSelectedImage5(false);
                                setSelectedImage4(false);
                                setSelectedImage3(false);
                                setSelectedImage2(false);
                                setSelectedImage1(false);
                                setSelectedImage6(true);
                                setSelectedImage7(false);
                                setSelectedImage8(false);
                                
                            }}>
                                <Image className={classes.image} src={images[sliderState + 5]} layout='fill' />
                            </div>
                        }
                        {width <= 1140 && width >= 855 &&  
                            <div className={`${classes.singleSliderSelectImage} ${width >= 855 && classes.specialborderright} ${selectedImage7 == true && classes.border}`} onClick={(e) => {
                                setCurrentImage(sliderState + 6);
                                setSelectedImage5(false);
                                setSelectedImage4(false);
                                setSelectedImage3(false);
                                setSelectedImage2(false);
                                setSelectedImage1(false);
                                setSelectedImage6(false);
                                setSelectedImage7(true);
                                setSelectedImage8(false);
                            }}>
                                <Image className={classes.image} src={images[sliderState + 6]} layout='fill' />
                            </div>
                        }
                    </div>
                    <SelectSliderArrow className={classes.rightsliderarrow} onClick={(e) => {
                        if(sliderState + 5 != images.length){
                            setSliderState(d => d + 1)
                        }
                    }}/>
                </div>
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
    )
}

export default ImageSlider;