import classes from './MyAd.module.css';
import styles from './AngebotCard.module.css';
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
import InstagramIcon from './../../../public/icons/instagram.svg';
import CompanyIcon from './../../../public/icons/companyname.svg';
import GigaLabel from './../../../public/gigalabel.svg';
import Link from 'next/link';
import BlueEye from './../../../public/eye.svg';
import BlueFavorite from './../../../public/bluefavorite.svg';
import BlueTime from './../../../public/bluetime.svg';
import Charger from './../../../public/charger.svg';
import Pen from './../../../public/pen.svg';
import Bin from './../../../public/bian.svg';
import Printer from './../../../public/printer.svg';

function MyAd({
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
    gigalabel,
    colorad,
    id,
    amountViews,
    amountLikes,
    publicSince
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

    var fz = details.kilometerstand + " km";
    var ez = "EZ: " + details.erstzulassung;

    return (
        cardView == true ? <div className={`${classes.container}`}>
        <div className={classes.actioncontainer}>
            <Link href={`car-details/${id}`}>
                <div className={`${classes.lefticon} ${classes.top}`} onMouseEnter={() => setVisibleOpen(true)} onMouseLeave={() => setVisibleOpen(false)}  >
                    <Visible className={classes.whiteicon} />
                    {visibleOpen == true && <div className={`${classes.svgcontainer}`}>
                        Inserat anschauen
                    </div>}
                    {visibleOpen == true && <div className={classes.triangle1}></div>}
                </div>
            </Link>
            <div className={`${classes.lefticon} ${classes.middle}`} onMouseEnter={() => setPrintOpen(true)} onMouseLeave={() => setPrintOpen(false)}>
                <Print className={classes.whiteicon}/>
                {printOpen == true && <div className={`${classes.favoritesvgcontainer} hover:text-yellow-400`}>
                    Als Favorit speichern
                </div>}
                {printOpen == true && <div className={classes.triangle2}></div>}
            </div>
            <div className={`${classes.lastlefticon} ${classes.bottom}`} onMouseEnter={() => setShareOpen(true)} onMouseLeave={() => setShareOpen(false)}>
                <Share className={classes.whiteicon} />
                {shareOpen == true && <div className={classes.sharesvgcontainer}>
                    <div className={classes.shareitems}>
                        <div className='flex items-center'><MailIcon /><span className="ml-1 hover:text-yellow-400">E-mail</span></div>
                        <div className={classes.borderbottom}></div>
                        <div className='flex items-center'><LinkIcon /><span className="ml-1 hover:text-yellow-400">Link kopieren</span></div>
                        <div className={classes.borderbottom}></div>
                        <div className='flex items-center'><FacebookIcon /><span className="ml-1 hover:text-yellow-400">Facebook</span></div>
                        <div className={classes.borderbottom}></div>
                        <div className='flex items-center'><InstagramIcon className={classes.instaicon}/><span className="ml-1 hover:text-yellow-400">Instagram</span></div>
                        <div className={classes.borderbottom}></div>
                        <div className='flex items-center'><WhatsAppIcon /><span className="ml-1 hover:text-yellow-400">WhatsApp</span></div>
                    </div>
                </div>}
                {shareOpen == true && <div className={classes.triangle3}></div>}
            </div>
        </div>
                <div className='relative'>
                <Link href={`car-details/${id}`}>
                    <div className={classes.carimg}>
                        <Image src={imgSrc} layout='fill' objectFit='cover'/>

                    </div>
                    </Link>
                    {gigalabel == true && <GigaLabel className={classes.gigalabel} />}
                    <div className={classes.additionals}>
                        <div className={classes.additional}>
                            <Charger className={classes.addsvg} />
                        </div>
                        <div className={classes.additional}>
                            <Pen className={classes.addsvg} />
                        </div>
                        <div className={classes.lastadditional}>
                            <Bin className={classes.addsvg} />
                        </div>
                    </div>
                </div>
            
        <div className={`${classes.carinfocontainer} ${colorad ? classes.colorad : null}`}>
            <div className={classes.carprice}>
                {displayPrice}
            </div>
            <div className={classes.rightside}>
                <div className={classes.bluetop}>
                    <div className={classes.blueitem}>
                        <BlueEye className={classes.bluesvg} />
                        <span className={classes.bluetext}>{amountViews.toLocaleString()}</span>
                    </div>
                    <div className={classes.blueitem}>
                        <BlueFavorite className={classes.bluesvg} />
                        <span className={classes.bluetext}>{amountLikes.toLocaleString()}</span>
                    </div>
                    <div className={classes.blueitem}>
                        <BlueTime className={classes.bluesvg} />
                        <span className={classes.bluetext}>{publicSince}</span>
                    </div>
                </div>
                <Link href={`car-details/${id}`}>
                    <h1 className={classes.title}>{title}</h1>
                </Link>
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
                    <div className={classes.right}><CompanyIcon className={classes.companyicon}/>{companyname}</div>
                </div>
            </div>
        </div>
    </div> : 
        
        <div className={styles.container}>
            <div className='relative'>
                
                <div className={styles.top}>
                    <Link href={`car-details/${id}`}><Image className={styles.img} src={imgSrc} layout='fill' objectFit='cover' /></Link>
                    <div className={styles.price}>{displayPrice}</div>
                    <div className={styles.actioncontainer}>
                        <div className={`${classes.borderright} ${classes.first}`}>
                            <Charger  className={classes.sicon}/>
                        </div>
                        <div className={`${classes.borderright}`} onMouseEnter={() => setVisibleOpen(true)} onMouseLeave={() => setVisibleOpen(false)}>
                           <Link href={`car-details/${id}`} ><Visible className={classes.sicon} /></Link>
                            {visibleOpen == true && <div className={styles.svgcontainer}>
                                Inserat anschauen
                            </div>}
                            {visibleOpen == true && <div className={styles.triangle1}></div>}
                        </div>
                        <div className={`${classes.borderright}`} onMouseEnter={() => setShareOpen(true)} onMouseLeave={() => setShareOpen(false)}>
                            <Share  className={classes.sicon}/>
                            {shareOpen == true && <div className={styles.sharesvgcontainer}>
                                    <div className={classes.shareitems}>
                                    <div className='flex items-center'><MailIcon /><span className="ml-1 hover:font-bold">E-mail</span></div>
                                    <div className={classes.borderbottom}></div>
                                    <div className='flex items-center'><LinkIcon /><span className="ml-1 hover:font-bold">Link kopieren</span></div>
                                    <div className={classes.borderbottom}></div>
                                    <div className='flex items-center'><FacebookIcon /><span className="ml-1 hover:font-bold">Facebook</span></div>
                                    <div className={classes.borderbottom}></div>
                                    <div className='flex items-center'><InstagramIcon className={classes.instaicon}/><span className="ml-1 hover:font-bold">Instagram</span></div>
                                    <div className={classes.borderbottom}></div>
                                    <div className='flex items-center'><WhatsAppIcon /><span className="ml-1 hover:font-bold">WhatsApp</span></div>
                                </div>
                            </div>}
                            {shareOpen == true && <div className={styles.triangle3}></div>}
                        </div>
                        <div className={classes.borderright}>
                            <Printer  className={classes.sicon}/>
                        </div>
                        <div className={classes.borderright}>
                            <Pen  className={classes.sicon}/>
                        </div>
                        <div className={`${classes.borderright} ${classes.last}`}>
                            <Bin  className={classes.sicon}/>
                        </div>
                    </div>
                </div>
            
                <GigaLabel className={classes.gigalabel} />
            </div>
            <div className={`${styles.bottom} ${colorad ? styles.colorad : null}`}>
            <div className="mt-2"></div>
            <div className={classes.bluetop}>
                    <div className={classes.blueitem}>
                        <BlueEye className={classes.bluesvg} />
                        <span className={classes.bluetext}>{amountViews.toLocaleString()}</span>
                    </div>
                    <div className={classes.blueitem}>
                        <BlueFavorite className={classes.bluesvg} />
                        <span className={classes.bluetext}>{amountLikes.toLocaleString()}</span>
                    </div>
                    <div className={classes.blueitem}>
                        <BlueTime className={classes.bluesvg} />
                        <span className={classes.bluetext}>{publicSince}</span>
                    </div>
                </div>
                <Link href={`car-details/${id}`}>
                    <h1 className={styles.title}>{title}</h1>
                </Link>
                <p className={styles.desc}>{cardDisplayDesc}</p>
                <div className={styles.details}>
                    <div className={styles.row}>
                        <div className={`${styles.detail} mr-1`}>{ez}</div>
                        <div className={`${styles.detaillast} ml-1`}>{details.kraftstoff}</div>
                    </div>
                    <div className={styles.row}>
                        <div className={`${styles.detail} mr-1`}>{details.leistung}</div>
                        <div className={`${styles.detail} -ml-1 mr-1 `}>{details.fahrzeugzustand}</div>
                        <div className={`${styles.detaillast}`}>{details.getriebe}</div>
                    </div>
                    <div className={styles.row}>
                        <div className={`${styles.detail} mr-1`}>{fz}</div>
                        <div className={`${styles.detaillast} ml-1`}>{details.seller == true ? "Händler" : "Privat"}</div>
                    </div>
                </div>
                <div className={styles.companylocation}><CompanyLocation className={classes.companyicon}/>{location}</div>
                <div className={styles.companyname}><CompanyIcon className={classes.companyicon}/>  {companyname}</div>
            </div>
        </div>
    )
}

export default MyAd;