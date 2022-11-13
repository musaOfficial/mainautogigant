import classes from "./ImageSlider.module.css";
import Image from 'next/image';
import ImageSliderArrow from './../../public/imageSliderArrow.svg'
import SelectSliderArrow from './../../public/selectSliderArrow.svg'
import { useState } from "react";
import CompanyName from './../../public/svgs/companyname.svg';
import CompanyLocation from './../../public/svgs/companylocation.svg';
import ZoomOut from './../../public/images/zoomout.svg'
function ImageSlider({
    images
}){

    const [selectedImage1, setSelectedImage1] = useState(0);
    const [selectedImage2, setSelectedImage2] = useState(0);
    const [selectedImage3, setSelectedImage3] = useState(0);
    const [selectedImage4, setSelectedImage4] = useState(0);
    const [selectedImage5, setSelectedImage5] = useState(0);
    const [currentImage, setCurrentImage] = useState(0);
    const [sliderState, setSliderState] = useState(0);
    const [zoomout, setZoomout] = useState(false);
    return (
        <div className={classes.container}>
            {zoomout == true && <div className={classes.showimg}>
                <div className={classes.imgboxbackground}>
                    <div className={classes.imgboxbig}>
                        <Image className={classes.bigimage} src={images[currentImage]} layout='fill'/>
                        <ImageSliderArrow className={classes.rightbig} onClick={(e) => {
                            if(currentImage != images.length - 1){
                                if(currentImage == sliderState + 4){
                                    setSliderState(f => f + 1)
                                }
                                setCurrentImage(f => f + 1);
                            }
                        }} />
                        <ImageSliderArrow className={classes.leftbig} onClick={(e) => {
                            if(currentImage != 0){
                                if(currentImage == sliderState){
                                    setSliderState(f => f - 1)
                                }
                                setCurrentImage(f => f - 1);
                            }
                        }}/>
                        <div className={classes.zoomout} onClick={() => setZoomout(true)}><ZoomOut className={classes.zoomoutsvgbig}/></div>
                            <div className={classes.counterbackground}>
                            <span>{currentImage + 1}</span> / <span>{images.length}</span>
                        </div>
                    </div>
                </div>
            </div>}
            <div className={classes.content}>
                <Image src={images[currentImage]} layout='fill' objectFit="cover"/>
                <ImageSliderArrow className={classes.right} onClick={(e) => {
                    if(currentImage != images.length - 1){
                        if(currentImage == sliderState + 4){
                            setSliderState(f => f + 1)
                        }
                        setCurrentImage(f => f + 1);
                    }
                }} />
                <ImageSliderArrow className={classes.left} onClick={(e) => {
                    if(currentImage != 0){
                        if(currentImage == sliderState){
                            setSliderState(f => f - 1)
                        }
                        setCurrentImage(f => f - 1);
                    }
                }}/>
                <div className={classes.zoomout} onClick={() => setZoomout(true)}><ZoomOut className={classes.zoomoutsvg}/></div>
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
                        <div className={`${classes.singleSliderSelectImage} ${selectedImage1 == true && classes.border}`} onClick={(e) => {
                            setCurrentImage(sliderState)
                            setSelectedImage5(false);
                            setSelectedImage4(false);
                            setSelectedImage3(false);
                            setSelectedImage2(false);
                            setSelectedImage1(true);
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
                        }}>
                            <Image className={classes.image} src={images[sliderState + 1]} layout='fill' />
                        </div>
                        <div className={`${classes.singleSliderSelectImage} ${selectedImage3 == true && classes.border}`} onClick={(e) => {
                            setCurrentImage(sliderState + 2);
                            setSelectedImage5(false);
                            setSelectedImage4(false);
                            setSelectedImage3(true);
                            setSelectedImage2(false);
                            setSelectedImage1(false);
                        }}>
                            <Image className={classes.image} src={images[sliderState + 2]} layout='fill' />
                        </div>
                        <div className={`${classes.singleSliderSelectImage} ${selectedImage4 == true && classes.border}`} onClick={(e) => {
                            setCurrentImage(sliderState + 3);
                            setSelectedImage5(false);
                            setSelectedImage4(true);
                            setSelectedImage3(false);
                            setSelectedImage2(false);
                            setSelectedImage1(false);
                        }}>
                            <Image className={classes.image} src={images[sliderState + 3]} layout='fill' />
                        </div>
                        <div className={`${classes.singleSliderSelectImage} ${selectedImage5 == true && classes.border}`} onClick={(e) => {
                            setCurrentImage(sliderState + 4);
                            setSelectedImage5(true);
                            setSelectedImage4(false);
                            setSelectedImage3(false);
                            setSelectedImage2(false);
                            setSelectedImage1(false);
                            
                        }}>
                            <Image className={classes.image} src={images[sliderState + 4]} layout='fill' />
                        </div>
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