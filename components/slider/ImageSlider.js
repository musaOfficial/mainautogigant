import classes from "./ImageSlider.module.css";
import Image from 'next/image';
import ImageSliderArrow from './../../public/imageSliderArrow.svg'
import SelectSliderArrow from './../../public/selectSliderArrow.svg'
import { useState } from "react";
import CompanyName from './../../public/svgs/companyname.svg';
import CompanyLocation from './../../public/svgs/companylocation.svg'
function ImageSlider({
    images
}){

    const [currentImage, setCurrentImage] = useState(0);
    const [sliderState, setSliderState] = useState(0);
    return (
        <div className={classes.container}>
            <div className={classes.content}>
                <Image src={images[currentImage]} layout='fill'/>
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
                        <div className={classes.singleSliderSelectImage} onClick={(e) => {
                            setCurrentImage(sliderState)
                        }}>
                            <Image className={classes.image} src={images[sliderState]} layout='fill'/>
                        </div>
                        <div className={classes.singleSliderSelectImage} onClick={(e) => {
                            setCurrentImage(sliderState + 1);
                        }}>
                            <Image className={classes.image} src={images[sliderState + 1]} layout='fill' />
                        </div>
                        <div className={classes.singleSliderSelectImage} onClick={(e) => {
                            setCurrentImage(sliderState + 2);
                        }}>
                            <Image className={classes.image} src={images[sliderState + 2]} layout='fill' />
                        </div>
                        <div className={classes.singleSliderSelectImage} onClick={(e) => setCurrentImage(sliderState + 3)}>
                            <Image className={classes.image} src={images[sliderState + 3]} layout='fill' />
                        </div>
                        <div className={classes.singleSliderSelectImage} onClick={(e) => setCurrentImage(sliderState + 4)}>
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