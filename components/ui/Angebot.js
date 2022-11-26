import classes from './Angebot.module.css';
import styles from './AngebotCard.module.css';
import Image from 'next/image';
import Visible from './../../public/icons/visibility.svg';
import Print from './../../public/icons/favorite.svg';
import Share from './../../public/icons/share.svg';
import CompanyName from './../../public/icons/companyname.svg';
import CompanyLocation from './../../public/icons/companylocation.svg'
import { useEffect } from 'react';
function Angebot({
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
    key
}){

    // erstzulassung, kraftstoff, leistung, kilometerstand, getriebe, fahrzeugzustand
    var displayDesc = description.substring(0, 50) + "...";
    var cardDisplayDesc = description.substring(0, 27) + "...";
    
    var ind = index;
    var pl = ind + 1;
    if(pl % 3 == 0){
        console.log(true)
    } else {
        console.log(false);
    }


    return (
        <span className={`${cardView == false && classes.margin} ${cardView == false && pl % 3 == 0 && classes.notamargin} ${classes.marginbottom} `}>{cardView == true ? <div className={`${classes.container}`}>
        <div className={classes.actioncontainer}>
            <div className={`${classes.lefticon} ${classes.top}`}>
                <Visible />
            </div>
            <div className={`${classes.lefticon} ${classes.middle}`}>
                <Print />
            </div>
            <div className={`${classes.lastlefticon} ${classes.bottom}`}>
                <Share />
            </div>
        </div>
            <div className={classes.carimg}>
                <Image src={imgSrc} layout='fill' objectFit='cover'/>
            </div>
        <div className={classes.carinfocontainer}>
            <div className={classes.carprice}>
                {price}
            </div>
            <div className={classes.rightside}>
                <h1 className={classes.title}>{title}</h1>
                <p className={classes.cardesc}>{displayDesc}</p>
                <div className={classes.cardetails}>
                    <div className={classes.detail}>{details.erstzulassung}</div>
                    <div className={classes.detail}>{details.kraftstoff}</div>
                    <div className={classes.detail}>{details.leistung}</div>
                    <div className={classes.detail}>{details.kilometerstand}</div>
                    <div className={classes.lastdetail}>{details.fahrzeugzustand}</div>
                </div>
                <div className={classes.companyinfo}>
                    <div className={classes.left}><CompanyLocation className={classes.companyicon}/>{location}</div>
                    <div className={classes.right}><CompanyLocation className={classes.companyicon}/>{companyname}</div>
                </div>
            </div>
        </div>
    </div> : 
        
        <div className={styles.container}>
            <div className={styles.top}>
                <Image className={styles.img} src={imgSrc} layout='fill' objectFit='cover' />
                <div className={styles.price}>{price}</div>
                <div className={styles.actioncontainer}>
                    <div>
                        <Visible />
                    </div>
                    <div>
                        <Print />
                    </div>
                    <div>
                        <Share />
                    </div>
                </div>
            </div>
            <div className={styles.bottom}>
                <h1 className={styles.title}>Porsche Cayenne</h1>
                <p className={styles.desc}>{cardDisplayDesc}</p>
                <div className={styles.details}>
                    <div className={styles.row}>
                        <div>{details.erstzulassung}</div>
                        <div>{details.kraftstoff}</div>
                        <div>{details.leistung}</div>
                    </div>
                    <div className={styles.row}>
                        <div>{details.kilometerstand}</div>
                        <div>{details.getriebe}</div>
                        <div>{details.fahrzeugzustand}</div>
                    </div>
                </div>
                <div className={styles.companylocation}><CompanyLocation className={classes.companyicon}/>{location}</div>
                <div className={styles.companyname}><CompanyLocation className={classes.companyicon}/>  {companyname}</div>
            </div>
        </div>




    }</span>
    )
}

export default Angebot;