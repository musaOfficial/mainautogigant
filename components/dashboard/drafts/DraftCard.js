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
import classes from './Draft.module.css';
import styles from './DraftCard.module.css';
import PublishIcon from './../../../public/publish.svg'
import BinIcon from './../../../public/bin.svg';
import GigaPowerIcon from './../../../public/gigapower.svg';
import EditIcon from './../../../public/edit.svg'

function DraftCard({
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

    const [visibleOpen, setVisibleOpen] = useState(false);
    const [printOpen, setPrintOpen] = useState(false);
    const [shareOpen, setShareOpen] = useState(false);

    if(pl % 3 == 0){
        console.log(true)
    } else {
        console.log(false);
    }

    const [showPublish, setShowPublish] = useState(false);

    return (
        cardView == true ? <div className={`${classes.container}`}>
        <div className={classes.actioncontainer}>
            <div className={`${classes.lefticon} ${classes.top}`} onMouseEnter={() => setVisibleOpen(true)} onMouseLeave={() => setVisibleOpen(false)}  >
                <GigaPowerIcon className={classes.whiteicon} />
                {visibleOpen == true && <div className={`${classes.svgcontainer} p-1 hover:text-yellow-600`}>
                    Giga Power
                </div>}
                {visibleOpen == true && <div className={classes.triangle1}></div>}
            </div>
            <div className={`${classes.lefticon} ${classes.middle}`} onMouseEnter={() => setPrintOpen(true)} onMouseLeave={() => setPrintOpen(false)}>
                <EditIcon className={classes.whiteicon}/>
                {printOpen == true && <div className={`${classes.favoritesvgcontainer} p-1 hover:text-yellow-600`}>
                    Inserat bearbeiten
                </div>}
                {printOpen == true && <div className={classes.triangle2}></div>}
            </div>
            <div className={`${classes.lastlefticon} ${classes.bottom}`} onMouseEnter={() => setShareOpen(true)} onMouseLeave={() => setShareOpen(false)}>
                <BinIcon className={classes.binicon} />
                {shareOpen == true && null}
                {shareOpen == true && null}
            </div>
        </div>
            <div className={classes.carimg}>
                <Image src={imgSrc} layout='fill' objectFit='cover'/>
            </div>
        <div className={classes.carinfocontainer}>
            <div className={classes.carprice}>
                <span className={classes.cpr}>
                  {price}
                </span>
                <div className={classes.publish} onMouseEnter={() => setShowPublish(true)} onMouseLeave={() => setShowPublish(false)}>
                <PublishIcon className={classes.publishsvg} />
                  {showPublish == true && <div className={classes.publishtriangle}></div>}
                  {showPublish == true && <div className={classes.publishhover}>Inserat veröffentlichen</div>}
                </div>
            </div>
            <div className={classes.rightside}>
                <h1 className={classes.title}>{title}</h1>
                <p className={classes.cardesc}>{displayDesc}</p>
                <div className={classes.cardetails}>
                    <div className={`${classes.detail} ${classes.firstdetail}`}>{details.erstzulassung}</div>
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
                    <div className={`${classes.borderright} ${classes.first}`} onMouseEnter={() => setVisibleOpen(true)} onMouseLeave={() => setVisibleOpen(false)}>
                        <Visible className={classes.sicon} />
                        {visibleOpen == true && <div className={styles.svgcontainer}>
                            Inserat anschauen
                        </div>}
                        {visibleOpen == true && <div className={styles.triangle1}></div>}
                    </div>
                    <div className={classes.borderright} onMouseEnter={() => setPrintOpen(true)} onMouseLeave={() => setPrintOpen(false)}>
                        <Print  className={classes.sicon}/>
                        {printOpen == true && <div className={styles.favoritesvgcontainer}>
                            Als Favorit speichern
                        </div>}
                        {printOpen == true && <div className={styles.triangle2}></div>}
                    </div>
                    <div className={`${classes.borderright} ${classes.last}`} onMouseEnter={() => setShareOpen(true)} onMouseLeave={() => setShareOpen(false)}>
                        <Share  className={classes.sicon}/>
                        {shareOpen == true && <div className={styles.sharesvgcontainer}>
                                <div className={classes.shareitems}>
                                <div className='flex items-center'><MailIcon /><span className="ml-1">E-mail</span></div>
                                <div className={classes.borderbottom}></div>
                                <div className='flex items-center'><LinkIcon /><span className="ml-1">Link kopieren</span></div>
                                <div className={classes.borderbottom}></div>
                                <div className='flex items-center'><FacebookIcon /><span className="ml-1">Facebook</span></div>
                                <div className={classes.borderbottom}></div>
                                <div className='flex items-center'><InstagramIcon className={classes.instaicon}/><span className="ml-1">Instagram</span></div>
                                <div className={classes.borderbottom}></div>
                                <div className='flex items-center'><WhatsAppIcon /><span className="ml-1">WhatsApp</span></div>
                            </div>
                        </div>}
                        {shareOpen == true && <div className={styles.triangle3}></div>}
                    </div>
                </div>
            </div>
            <div className={styles.bottom}>
                <h1 className={styles.title}>{title}</h1>
                <p className={styles.desc}>{cardDisplayDesc}</p>
                <div className={styles.details}>
                    <div className={styles.row}>
                        <div className={styles.detail}>{details.erstzulassung}</div>
                        <div className={styles.detaillast}>{details.kraftstoff}</div>
                    </div>
                    <div className={styles.row}>
                        <div className={styles.detail}>{details.leistung}</div>
                        <div className={styles.detail}>{details.fahrzeugzustand}</div>
                        <div className={styles.detaillast}>{details.getriebe}</div>
                    </div>
                    <div className={styles.row}>
                        <div className={styles.detaillast}>{details.kilometerstand}</div>
                    </div>
                </div>
                <div className={styles.companylocation}><CompanyLocation className={classes.companyicon}/>{location}</div>
                <div className={styles.companyname}><CompanyLocation className={classes.companyicon}/>  {companyname}</div>
            </div>
        </div>
    )
}

export default DraftCard;