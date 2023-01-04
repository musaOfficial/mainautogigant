import classes from './HomeAngebot.module.css';
import Image from 'next/image';
import Visible from './../../../public/icons/visibility.svg';
import Print from './../../../public/icons/favorite.svg';
import Share from './../../../public/icons/share.svg';
import CompanyName from './../../../public/icons/companyname.svg';
import CompanyLocation from './../../../public/icons/companylocation.svg'
import { useEffect } from 'react';
import { useState } from 'react';
import MailIcon from './../../../public/images/email.svg';
import LinkIcon from './../../../public/images/link.svg';
import FacebookIcon from './../../../public/images/facebik.svg';
import WhatsAppIcon from './../../../public/images/WhatsApp.svg';
import InstagramIcon from './../../../public/icons/instagram.svg'
import GigaLabel from './../../../public/gigalabel.png';

function  HomeAngebot({
    title,
    price,
    adNo,
    start,
    end,
    imgSrc,
    cardView,
    description,
    details,
    location,
    companyname,
    index,
    key,

}){

    // erstzulassung, kraftstoff, leistung, kilometerstand, getriebe, fahrzeugzustand
    var displayDesc = description.substring(0, 50) + "...";
    var cardDisplayDesc = description.substring(0, 27) + "...";
    
    var ind = index;
    var pl = ind + 1;

    const [visibleOpen, setVisibleOpen] = useState(false);
    const [printOpen, setPrintOpen] = useState(false);
    const [shareOpen, setShareOpen] = useState(false);

    var displayPrice = price.toLocaleString() + " €"

    if(pl % 3 == 0){
        console.log(true)
    } else {
        console.log(false);
    }


    return (
        <div className={classes.container}>
            <div className={classes.gigalabel}></div>
            <div className={classes.imagetop}></div>
            <div className={classes.top}>

            </div>
            <div className={classes.bottom}>
                <div className={classes.heading}>{title}</div>
                <div className={classes.description}>{description}</div>
                <div className={classes.firstrow}>
                    <span className={classes.firstitem}>{details.erstzulassung}</span>    
                    <span className={classes.seconditem}>{details.getriebe}</span>    
                </div>
                 
            </div>
        </div>
    )
}

export default  HomeAngebot;