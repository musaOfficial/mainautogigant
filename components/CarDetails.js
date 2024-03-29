import Image from 'next/image';
import classes from './CarDetails.module.css';
import Backtoresults from './../public/svgs/backtoresults.svg'
import ImageSlider from './slider/ImageSlider';
import CompanyName from './../public/svgs/companyname.svg';
import CompanyLocation from './../public/svgs/companylocation.svg'
import WhitePrinter from './../public/svgs/whiteprinter.svg';
import WhiteFavorites from './../public/svgs/whitefavorite.svg';
import WhiteShare from './../public/svgs/whiteshare.svg';
import Expand from './../public/expand.svg'
import { useState } from 'react';
import { useEffect } from 'react';
import MailIcon from './../public/images/email.svg';
import LinkIcon from './../public/images/link.svg';
import FacebookIcon from './../public/images/facebik.svg';
import WhatsAppIcon from './../public/images/WhatsApp.svg';
import InstagramIcon from './../public/icons/instagram.svg'
import Facebook from './../public/icons/facebook.svg'
import Youtube from './../public/icons/youtube.svg'
import Linkedin from './../public/Linkedin.svg'
import Tiktok from './../public/icons/tiktok.svg'
import InputSelect from './ui/InputSelect';
import Clock from './../public/clock.svg';
import Info from './../public/info.svg';
import { useMemo } from 'react';
import Input from './ui/Input';
import PaperPlane from './../public/paper-plane.svg'
// import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api';

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


function CarDetails(){

    const [width, height] = useDeviceSize();
    const firstname = "Max";
    const lastname = "Mustermann";

    const images = [
        "/images/car1.jpg",
        "/images/car2.jpg",
        "/images/car3.jpg",
        "/images/car4.jpg",
        "/images/car5.jpg",
        "/images/car1.jpg",
        "/images/car2.jpg",
        "/images/car3.jpg",
        "/images/car4.jpg",
        "/images/car5.jpg",
        "/images/car1.jpg",
        "/images/car2.jpg",
        "/images/car3.jpg",
        "/images/car4.jpg",
        "/images/car5.jpg",
        "/images/car1.jpg",
        "/images/car2.jpg",
        "/images/car3.jpg",
        "/images/car4.jpg",
        "/images/car5.jpg",
        "/images/car1.jpg",
        "/images/car2.jpg",
        "/images/car3.jpg",
        "/images/car4.jpg",
        "/images/car5.jpg",
    ];

    const [openBasisdaten, setOpenBasisdaten] = useState(false);
    const [openFahrzeughistorie, setOpenFahrzeughistorie] = useState(false);
    const [openTechnischeDaten, setOpenTechnischeDaten] = useState(false);
    const [openEnergieverbrauch, setOpenEnergieverbrauch] = useState(false);
    const [openAusstattung, setOpenAusstattung] = useState(false);
    const [openFarbeUndInnenAusstattung, setOpenFarbeUndInnenAusstattung] = useState(false);
    const [openFinanzierung, setOpenFinanzierung] = useState(false);
    const [openVersicherung, setOpenVersicherung] = useState(false);
    
    const [svgOpen1, setSvgOpen1] = useState(false);
    const [svgOpen2, setSvgOpen2] = useState(false);
    const [svgOpen3, setSvgOpen3] = useState(false);
    
    const preis = 37990;
    var preisFormatted = preis.toLocaleString();

    const ausstattungKomfort = [
        "Armlehne",
        "Berganfahrassistent",
        "Einparkhilfe Kamera",
        "Einparkhilfe Sensoren hinten",
        "Einparkhilfe Sensoren vorne",
        "Einparkhilfe selbstlenkendes",
        "System",
        "Elektr. Fensterheber",
        "Elektrische Seitenspiegel",
        "Elektrische Sitze",
        "Klimaanlage",
        "Klimaautomatik",
        "Lederlenkrad",
        "Lichtsensor",
        "Multifunktionslenkrad",
        "Navigationssystem",
        "Regensensor",
        "Sitzheizung",
        "Tempomat"
    ]

    const ausstattungSicherheit = [
        "ABS",
        "Alarmanlage",
        "Beifahrerairbag",
        "Bi-Xenon Scheinwerfer",
        "ESP",
        "Fahrerairbag",
        "Fernlichtassistent",
        "Isofix",
        "Kopfairbag",
        "..."
    ]

    const ausstattungUnterhaltung = [
        "Bluethoot",
        "Bordcomputer",
        "CD",
        "Freisprechereinrichtung",
        "MP3",
        "Radio",
        "Soundsystem",
        "USB"
    ]

    const ausstattungExtras = [
        'Alufelgen (20")',
        "Sportspitze",
        "Sprachsteuerung"
    ]

    const karosserieform = "Kleinwagen";
    const zustand = "Gebraucht";
    const antriebsart = "Front";
    const anzahlsitzplaetze = 2;
    const anzahltuere = 3;

    const kilometerstand = 144000;
    var kilometerstandFormatted = kilometerstand.toLocaleString();
    const erstzulassung = "08/2015";
    const produktionsjahr = 2015;
    const hu = "08/2015";
    const scheckheftgepflegt = true;
    const leergewicht = 1980;
    var leergewichtDisplay = leergewicht.toLocaleString();

    // const leistung = 
    const getriebe = "Automatik";
    const hubraum = 2993;
    const gaenge = 8;

    const kraftstoff = "Diesel (Partikelfilter)";
    const kraftstoffverbrauch = [
        "10,6 l/100 km (komb.)",
        "6,8 l/100 km (innerorts)",
        "4,9 l/100 km (außerorts)",
    ];
    const coemissionen = "0 g/km (komb.)"
    const schadstoffklasse = "Euro 6";
    const umweltplakette = "1 (Keine Feinstaubplakette)";

    const [message, setMessage] = useState("");
    const [name, setName] = useState("");
    const [mail, setMail] = useState("");
    const [tel, setTel] = useState("");
    const [newsletter, setNewsletter] = useState(false);

    const aussenfarbe = "Blau";
    const farbeLautHersteller = "SPEKTRALBLAU-METALLICLACK"
    const lackierung = "Metallic"
    const farbeinnenausstattung = "Schwarz";
    const innenausstattung = "Volleder";

    const leistung = "190 kW (258 PS)";
    const verkaeufer = "Privat";
    const zylinder = 6;


    function handleSubmit(e){
        e.preventDefault();
        console.log({
            message: message,
            name: name,
            mail: mail,
            tel: tel,
            newsletter, newsletter
        })
        setMessage("");
        setName("");
        setMail("");
        setTel("");
        setNewsletter(false);
    }


    var today = new Date().getDay();
    
    switch(today){
        case 0:
            today = "sunday";
            break;
        case 1:
            today = "monday";
            break;
        case 2:
            today = "tuesday";
            break;
        case 3:
            today = "wednesday";
            break;
        case 4:
            today = "thursday";
            break;
        case 5:
            today = "friday";
            break;
        case 6:
            today = "saturday";
            break;
        case err:
            console.log(err);
    }

    // const { isLoaded } = useLoadScript({
    //     googleMapsApiKey: "2323232323"
    // })


    var isPrivateUser = false;
    const isPrivateSeller = true;

    const sellerStreet = "Stadionstraße 28";
    const sellerCity = "2700 Wiener Neustadt";
    const sellerCountry = "Österreich";


    // JETZT GESCHLOSSEN || JETZT GEÖFFNET
    const companyOpen = false; // Jetzt geöffnet

    return (
        <div className={classes.container}>
            <div className={`${classes.contentcontainer} w-10/12 lg:w-full max-w-ag-container md:!w-full mx-auto flex lg:flex-col bg-white p-6`}>
                {isPrivateUser == false ? 
                <div className={classes.fullwidth}>
                    <div className={classes.middle}>
                        <div className={classes.image}>
                            {width >= 1141 && 
                                <div className={classes.werbungtext}>Werbung</div>
                            }
                            {width >= 1141 && 
                                <iframe src="/banners/banner1/index.html" scrolling="no" width="100%" height="100px"></iframe>
                            }
                        </div>
                    </div>
                    <div className={classes.typeanddate}>
                        <div className={classes.backtoresults}><Backtoresults/><span className={classes.bluetext}><span className={classes.bl1}>zurück zur </span><span className={classes.bl2}>Ergebnisliste</span></span></div>
                        <div className={classes.zl}><span className={classes.zl1}>Zuletzt geändert:</span> <span className={classes.zl2}>26.10.2022, 20:57 Uhr</span></div>
                    </div>
                    <div className={classes.row}>
                        <div className={`${classes.left} ${classes.slider}`}>
                            <ImageSlider images={images}/>
                        </div>
                        <div className={`${classes.right} ${classes.pricecontainer}`}>
                            <div className={classes.carinfocontainer}>
                                <div className={classes.pricerow}>
                                    <div className={classes.price}>€ {preisFormatted},-</div>
                                    <div className={classes.nexttoprice}>
                                        <div className={classes.favorite} onMouseEnter={() => setSvgOpen1(true)} onMouseLeave={() => setSvgOpen1(false)}>
                                            <WhiteFavorites className={classes.svg}/>                      
                                            {svgOpen1 == true && <div className={classes.svgcontainer}>
                                                Als Favorit speichern
                                            </div>}
                                            {svgOpen1 == true && <div className={classes.triangle}></div>}                           
                                        </div>
                                        <div className={classes.share} onMouseEnter={() => setSvgOpen2(true)} onMouseLeave={() => setSvgOpen2(false)}>
                                            <WhiteShare className={classes.svg}/>
                                            {svgOpen2 == true && <div className={classes.svgcontainershare}>
                                                <div className={classes.linebottom}><MailIcon className={classes.svgicon}/> E-Mail</div>
                                                <div className={classes.linebottom}><LinkIcon className={classes.svgicon}/> Link kopieren</div>
                                                <div className={classes.linebottom}><FacebookIcon className={classes.svgicon}/> Facebook</div>
                                                <div className={classes.linebottom}><InstagramIcon className={classes.svgicon} /> Instagram</div>
                                                <div className={classes.linebottomw}><WhatsAppIcon className={classes.svgicon}/> WhatsApp</div>
                                            </div>}
                                            {svgOpen2 == true && <div className={classes.triangle}></div>}     
                                        </div>
                                        <div className={classes.print} onMouseEnter={() => setSvgOpen3(true)} onMouseLeave={() => setSvgOpen3(false)}>
                                            <WhitePrinter className={classes.svg}/>
                                            {svgOpen3 == true && <div className={classes.svgcontainerlast}>
                                                Drucken
                                            </div>}
                                            {svgOpen3 == true && <div className={classes.triangle}></div>}     
                                        </div>
                                    </div>
                                </div>
                                <div className={classes.carinfocontent}>
                                    <div className={classes.cartopinfo}>
                                        <div className={classes.carname}>Mercedes-Benz CLS 350</div>
                                        <div className={classes.cardesc}>d BlueEff. Autom. NUR 38.600km / 1.Besitz / Garantie</div>
                                    </div>
                                    <div className={classes.l}><span className={classes.liner}><span className={classes.infoabt}>Kilometerstand</span><span className={classes.actinfo}>{kilometerstandFormatted} km</span></span></div>
                                    <div className={classes.l}><span className={classes.liner}><span className={classes.infoabt}>Getriebe</span><span className={classes.actinfo}>{getriebe}</span></span></div>
                                    <div className={classes.l}><span className={classes.liner}><span className={classes.infoabt}>Erstzulassung</span><span className={classes.actinfo}>{erstzulassung}</span></span></div>
                                    <div className={classes.l}><span className={classes.liner}><span className={classes.infoabt}>Kraftstoff</span><span className={classes.actinfo}>{kraftstoff}</span></span></div>
                                    <div className={classes.l}><span className={classes.liner}><span className={classes.infoabt}>Leistung</span><span className={classes.actinfo}>{leistung}</span></span></div>
                                    <div className={classes.l}><span className={classes.liner}><span className={classes.infoabt}>Verkäufer</span><span className={classes.actinfo}>{verkaeufer}</span></span></div>
                                    <div className={classes.l}><span className={classes.liner}><span className={`${classes.greyback}`}>Finanzierung berechnen</span></span></div>
                                    <div className={classes.l}><span className={classes.linerb}><span className={`${classes.greyback}`}>Versicherung berechnen</span></span></div>
                                    <div className={classes.whiteback}>
                                        <button className={classes.sendmail}>Chat starten</button>
                                        <button className={classes.call}>+43 (0) 699 19778899</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={classes.row}>
                        <div className={`${classes.firstcolumn}`}>
                            <div className={classes.bottomleftnomargin}>
                                <div className={classes.headsectionf} onClick={() => {
                                        setOpenBasisdaten(d => !d);
                                        setOpenTechnischeDaten(false);
                                        setOpenAusstattung(false);
                                        setOpenFarbeUndInnenAusstattung(false);
                                        setOpenFinanzierung(false);
                                        setOpenEnergieverbrauch(false);
                                    }}>
                                    <div className={classes.fhead}>Basisdaten</div>
                                    <div className={classes.lhead}><span>Fahrzeughistorie</span><span><Expand className={`${openBasisdaten == true && classes.transformedexpand} ${classes.expand}` } /></span></div>
                                </div>
                                {openBasisdaten == true && <div className={classes.infocontainer}>
                                    <div className={classes.fhalf}>
                                        <div className={classes.info}>
                                            <span className={classes.label}>Karosserieform</span><span className={classes.information}>{karosserieform}</span>
                                        </div>
                                        <div className={classes.info}>
                                            <span className={classes.label}>Zustand</span><span className={classes.information}>{zustand}</span>
                                        </div>
                                        <div className={classes.info}>
                                            <span className={classes.label}>Antriebsart</span><span className={classes.information}>{antriebsart}</span>
                                        </div>
                                        <div className={classes.info}>
                                            <span className={classes.label}>Sitzplätze</span><span className={classes.information}>{anzahlsitzplaetze}</span>
                                        </div>
                                        <div className={classes.linfo}>
                                            <span className={classes.label}>Türen</span><span className={classes.information}>{anzahltuere}</span>
                                        </div>
                                    </div>
                                    <div className={classes.lhalf}>
                                        <div className={classes.info}>
                                            <span className={classes.label}>Kilometerstand</span><span className={classes.information}>{kilometerstand}</span>
                                        </div>
                                        <div className={classes.info}>
                                            <span className={classes.label}>Erstzulassung</span><span className={classes.information}>{erstzulassung}</span>
                                        </div>
                                        <div className={classes.info}>
                                            <span className={classes.label}>Produktionsjahr</span><span className={classes.information}>{produktionsjahr}</span>
                                        </div>
                                        <div className={classes.info}>
                                            <span className={classes.label}>HU</span><span className={classes.information}>{hu}</span>
                                        </div>
                                        <div className={classes.linfo}>
                                            <span className={classes.label}>Scheckhaftgepflegt</span><span className={classes.information}>{scheckheftgepflegt == true ? "Ja" : "Nein"}</span>
                                        </div>
                                    </div>
                                </div>}
                                <div className={classes.headsection} onClick={() => {
                                    setOpenEnergieverbrauch(d => !d);
                                    setOpenBasisdaten(false);
                                    setOpenFarbeUndInnenAusstattung(false);
                                    setOpenFinanzierung(false);
                                    setOpenTechnischeDaten(false);
                                    setOpenAusstattung(false);
                                    }}>
                                    <div className={classes.fhead}>Technische Daten</div>
                                    <div className={classes.lhead}><span>Energieverbrauch</span><span><Expand className={`${openEnergieverbrauch == true && classes.transformedexpand} ${classes.expand}` } /></span></div>
                                </div>
                                {openEnergieverbrauch == true && <div className={classes.infocontainer}>
                                <div className={classes.fhalf}>
                                        <div className={classes.info}>
                                            <span className={classes.label}>Karosserieform</span><span className={classes.information}>{karosserieform}</span>
                                        </div>
                                        <div className={classes.info}>
                                            <span className={classes.label}>Zustand</span><span className={classes.information}>{zustand}</span>
                                        </div>
                                        <div className={classes.info}>
                                            <span className={classes.label}>Antriebsart</span><span className={classes.information}>{antriebsart}</span>
                                        </div>
                                        <div className={classes.info}>
                                            <span className={classes.label}>Sitzplätze</span><span className={classes.information}>{anzahlsitzplaetze}</span>
                                        </div>
                                        <div className={classes.linfo}>
                                            <span className={classes.label}>Türen</span><span className={classes.information}>{anzahltuere}</span>
                                        </div>
                                    </div>
                                    <div className={classes.lhalf}>
                                        <div className={classes.info}>
                                            <span className={classes.label}>Kilometerstand</span><span className={classes.information}>{kilometerstand}</span>
                                        </div>
                                        <div className={classes.info}>
                                            <span className={classes.label}>Erstzulassung</span><span className={classes.information}>{erstzulassung}</span>
                                        </div>
                                        <div className={classes.info}>
                                            <span className={classes.label}>Produktionsjahr</span><span className={classes.information}>{produktionsjahr}</span>
                                        </div>
                                        <div className={classes.info}>
                                            <span className={classes.label}>HU</span><span className={classes.information}>{hu}</span>
                                        </div>
                                        <div className={classes.linfo}>
                                            <span className={classes.label}>Scheckhaftgepflegt</span><span className={classes.information}>{scheckheftgepflegt == true ? "Ja" : "Nein"}</span>
                                        </div>
                                    </div>
                                </div>}
                                <div className={classes.longheadsection} onClick={() => {
                                    setOpenAusstattung(d => !d);
                                    setOpenEnergieverbrauch(false);
                                    setOpenBasisdaten(false);
                                    setOpenFarbeUndInnenAusstattung(false);
                                    setOpenFinanzierung(false);
                                    setOpenTechnischeDaten(false);
                                    }}>
                                    <div className={classes.headcontent}>
                                        <span>Ausstattung</span>
                                        <Expand className={`${openAusstattung == true && classes.transformedexpand} ${classes.expand}` } />
                                    </div>
                                </div>
                                {openAusstattung == true && <div className={classes.twogrid}>
                                    <div className={classes.row}>
                                        <div className={classes.fcolumn}>
                                            <div className={classes.gridinfocontainer}>
                                                <div className={classes.infoheading}>Komfort</div>
                                                {ausstattungKomfort.map((item, index) => <div key={index} className={classes.longinformation}>{item}</div>)}
                                            </div>
                                            <div className={classes.distancer}></div>
                                            <div className={classes.gridinfocontainer}>
                                                <div className={classes.infoheading}>Extras</div>
                                                {ausstattungExtras.map((item, index) => <div key={index} className={classes.longinformation}>{item}</div>)}
                                            </div>
                                        </div>
                                        <div className={classes.scolumn}>
                                            <div className={classes.gridinfocontainer}>
                                                <div className={classes.infoheading}>Sicherheit</div>
                                                {ausstattungSicherheit.map((item, index) => <div key={index} className={classes.longinformation}>{item}</div>)}
                                            </div>
                                            <div className={classes.distancer}></div>
                                            <div className={classes.gridinfocontainer}>
                                                <div className={classes.infoheading}>Unterhaltung/Media</div>
                                                {ausstattungUnterhaltung.map((item, index) => <div key={index} className={classes.longinformation}>{item}</div>)}
                                            </div>

                                        </div>

                                    </div>
                                </div>}
                                <div className={classes.longheadsection} onClick={() => {
                                    setOpenFarbeUndInnenAusstattung(d => !d)
                                    setOpenFinanzierung(false);
                                    setOpenAusstattung(false);
                                    setOpenTechnischeDaten(false);
                                    setOpenBasisdaten(false);
                                    setOpenEnergieverbrauch(false);
                                    }}>
                                    <div className={classes.headcontent}>
                                        <span>Farbe und Innenausstattung</span>
                                        <Expand className={`${openFarbeUndInnenAusstattung == true && classes.transformedexpand} ${classes.expand}` } />
                                    </div>
                                </div>
                                {openFarbeUndInnenAusstattung == true && <div className={classes.infocontainer}>
                                    <div className={classes.flong}>
                                        <div className={classes.longinfo}>
                                            <span className={classes.longlabel}>Außenfarbe</span><span className={classes.information}>{aussenfarbe}</span>
                                        </div>
                                        <div className={classes.longinfo}>
                                            <span className={classes.longlabel}>Farbe laut Hersteller</span><span className={classes.information}>{farbeLautHersteller}</span>
                                        </div>
                                        <div className={classes.longinfo}>
                                            <span className={classes.longlabel}>Lackierung</span><span className={classes.information}>{lackierung}</span>
                                        </div>
                                        <div className={classes.longinfo}>
                                            <span className={classes.longlabel}>Farbe der Innenausstattung</span><span className={classes.information}>{farbeinnenausstattung}</span>
                                        </div>
                                        <div className={classes.longlinfo}>
                                            <span className={classes.longlabel}>Innenausstattung</span><span className={classes.information}>{innenausstattung}</span>
                                        </div>
                                    </div>
                                </div>}
                                <div className={classes.longheadsection} onClick={() => {
                                    setOpenFinanzierung(d => !d);
                                    setOpenBasisdaten(false);
                                    setOpenEnergieverbrauch(false);
                                    setOpenTechnischeDaten(false);
                                    setOpenAusstattung(false);
                                    setOpenFarbeUndInnenAusstattung(false);
                                    setOpenFahrzeughistorie(false);
                                    }}>
                                    <div className={classes.headcontent}>
                                        <span>Finanzierung</span>
                                        <Expand className={`${openFinanzierung == true && classes.transformedexpand} ${classes.expand}` } />
                                    </div>
                                </div>
                            </div>
                            <div className={classes.adarea}></div>
                        </div>
                        <div className={classes.secondcolumn}>
                            <div className={classes.companyinformation}>
                                <div className={classes.companyrow1}>
                                    <div className={classes.logo}>
                                        <Image src={'/gigantlogo.jpg'} layout='fill' objectFit='cover' />
                                    </div>
                                    <div className={classes.companysmalldetails}>
                                        <div className={classes.companyname}>Gigant Group Teknoloji A.S.</div>
                                        <div className={classes.loc1}>Wiener Straße 90</div>
                                        <div className={classes.loc2}>2700 Wiener Neustadt</div>
                                        <div className={classes.loc3}>Österreich</div>
                                    </div>
                                </div>
                                <div className={classes.companyrow2}>
                                    <div className={`${classes.closed} ${classes.open} ${companyOpen == true ? classes.open : classes.closed}`}>
                                        <Clock className={classes.clock} />
                                        {companyOpen == true ? "Jetzt geöffnet" : "Geschlossen"}
                                    </div>
                                    <div className={classes.socialmediaicons}>
                                        <Facebook className={classes.socialmediaicon} />
                                        <InstagramIcon className={classes.socialmediaicon}/>
                                        <Youtube className={classes.socialmediaicon}/>
                                        <Linkedin className={classes.socialmediaicon}/>
                                        <Tiktok className={classes.socialmediaicon}/>
                                    </div>
                                </div>
                                <div className={classes.companyrow3}>
                                    <div className={classes.oeffnungszeiten}>Öffnungszeiten:</div>
                                    <div className={`${classes.oeffnungszeitenrow} ${today == "monday" && "font-bold"}`}>
                                        <div className={classes.tag}>Montag</div>
                                        <div className={classes.timespan}>07:30 - 17:00 Uhr</div>
                                        <div className={classes.link}>Alle Fahrzeuge des Anbieters</div>
                                    </div>
                                    <div className={`${classes.oeffnungszeitenrow} ${today == "tuesday" && "font-bold"}`}>
                                        <div className={classes.tag}>Dienstag</div>
                                        <div className={classes.timespan}>07:30 - 17:00 Uhr</div>
                                        <div className={classes.link}>Firmenwebseite</div>
                                    </div>
                                    <div className={`${classes.oeffnungszeitenrow} ${today == "wednesday" && "font-bold"}`}>
                                        <div className={classes.tag}>Mittwoch</div>
                                        <div className={classes.timespan}>07:30 - 17:00 Uhr</div>
                                        <div className={classes.link}>Händlerprofil</div>
                                    </div>
                                    <div className={`${classes.oeffnungszeitenrow} ${today == "thursday" && "font-bold"}`}>
                                        <div className={classes.tag}>Donnerstag</div>
                                        <div className={classes.timespan}>07:30 - 17:00 Uhr</div>
                                        <div className={classes.link}>Angebot melden</div>
                                    </div>
                                    <div className={`${classes.oeffnungszeitenrow} ${today == "friday" && "font-bold"}`}>
                                        <div className={classes.tag}>Freitag</div>
                                        <div className={classes.timespan}>07:30 - 17:00 Uhr</div>
                                    </div>
                                    <div className={`${classes.oeffnungszeitenrow} ${today == "saturday" && "font-bold"}`}>
                                        <div className={classes.tag}>Samstag</div>
                                        <div className={classes.timespan}>07:30 - 17:00 Uhr</div>
                                    </div>
                                </div>
                            </div>
                            <div className={classes.googlemaps}>
                                Google Maps 
                            </div>
                            <div className={classes.r2c2}>
                            <form onSubmit={handleSubmit}>
                            <h1 className={classes.kontaktheading}>Anbieter kontaktieren</h1>
                            <p className={classes.yourmessage}>Das will ich über das Fahrzeug wissen: </p>
                            <div className={classes.checkrow}><input type={"checkbox"} /><span className={classes.checkboxtext}>Ist eine Probefahrt möglich?</span></div>
                            <div className={classes.checkrow}><input type={"checkbox"} /><span className={classes.checkboxtext}>Ist das Fahrzeug noch verfügbar?</span></div>
                            <div className={classes.checkrow}><input type={"checkbox"} /><span className={classes.checkboxtext}>Besteht Möglichkeit zum Eintausch?</span></div>
                            <div className={classes.checkrow}><input type={"checkbox"} /><span className={classes.checkboxtext}>Weitere Informationen zum Fahrzeug</span></div>
                            <textarea className={classes.textarea} placeholder={
                            `Guten Tag,
ich interessiere mich für ihr Fahrzeug.
Kontaktieren Sie mich bitte.
Mit freundlichen Grüßen`} onChange={(e) => setMessage(e.target.value)} value={message}></textarea>
                            <input className={classes.input} placeholder={"Name"} onChange={(e) => setName(e.target.value)} value={name}/>
                            <input className={classes.input} placeholder={"E-Mail"} onChange={(e) => setMail(e.target.value)} value={mail}/>
                            <input className={classes.input} placeholder={"Telefonnummer (optional)"} onChange={(e) => setTel(e.target.value)} value={tel}/>
                            <div className={classes.checkcontainer}>
                                <input className={classes.checkinput} type={"checkbox"} onChange={() => setNewsletter(e => !e)} value={newsletter}/>
                                <p className={classes.paragraph}>Ich möchte maßgeschneiderte Angebote und Neuigkeiten von Auto GIGANT. 
per E-Mail erhalten. Diese <span className={classes.link}>Einwilligung</span> kann ich jederzeit mit Wirkung für die 
Zukunft widerrufen.
<br></br><br></br>
Wir verwenden Ihre E-Mail-Adresse in Übereinstimmung mit unseren 
<span className={classes.link}>{" "}Datenschutzbestimmungen</span>, um Ihnen beispielsweise
Fahrzeugempfehlungen zuzusenden, die Ihrer Suche entsprechen. Wenn Sie 
keine weiteren Fahrzeugempfehlungen mehr erhalten möchten, können Sie 
<span className={classes.link}>{" "}hier</span> jederzeit widersprechen.
<br></br>
<br></br>
Indem Sie auf &rdquo;Nachricht senden&rdquo; klicken, erklären Sie sich damit 
einverstanden, dass wir (<span className={classes.link}>Auto GIGANT.</span>) Ihre Nachricht speichern, 
an den Händler weiterleiten und die Antwortquote und Reaktionszeit
des Händlers messen. Sie können Ihre Einwilligung jederzeit für die
Zukunft <span className={classes.link}>hier</span> widerrufen. Für weitere Informationen zum Datenschutz
<span className={classes.link}>{" "}klicken Sie bitte hier.</span></p>
                            </div>
                            <button type='submit' className={classes.yellowbtn}><PaperPlane className={classes.paperplane} /><span className={classes.sendentext}>Nachricht senden</span></button>
                            </form>                       
                        </div>
                        </div>
                    </div>

                </div> : 
                <div className={classes.fullwidth}>
                    {/* Privat User */}
                    <div className={classes.middle}>
                        <div className={classes.image}>
                            {width >= 1141 && 
                                <div className={classes.werbungtext}>Werbung</div>
                            }
                            {width >= 1141 && 
                                <iframe src="/banners/banner1/index.html" scrolling="no" width="100%" height="100px"></iframe>
                            }
                        </div>
                    </div>
                    <div className={classes.typeanddate}>
                        <div className={classes.backtoresults}><Backtoresults/><span className={classes.bluetext}><span className={classes.bl1}>zurück zur </span><span className={classes.bl2}>Ergebnisliste</span></span></div>
                        <div className={classes.zl}><span className={classes.zl1}>Zuletzt geändert:</span> <span className={classes.zl2}>26.10.2022, 20:57 Uhr</span></div>
                    </div>
                    <div className={classes.row}>
                        <div className={`${classes.left} ${classes.slider}`}>
                            <ImageSlider images={images}/>
                        </div>
                        <div className={`${classes.right} ${classes.pricecontainer}`}>
                            <div className={classes.carinfocontainer}>
                                <div className={classes.pricerow}>
                                    <div className={classes.price}>€ {preisFormatted},-</div>
                                    <div className={classes.nexttoprice}>
                                        <div className={classes.favorite} onMouseEnter={() => setSvgOpen1(true)} onMouseLeave={() => setSvgOpen1(false)}>
                                            <WhiteFavorites className={classes.svg}/>                      
                                            {svgOpen1 == true && <div className={classes.svgcontainer}>
                                                Als Favorit speichern
                                            </div>}
                                            {svgOpen1 == true && <div className={classes.triangle}></div>}                           
                                        </div>
                                        <div className={classes.share} onMouseEnter={() => setSvgOpen2(true)} onMouseLeave={() => setSvgOpen2(false)}>
                                            <WhiteShare className={classes.svg}/>
                                            {svgOpen2 == true && <div className={classes.svgcontainershare}>
                                                <div className={classes.linebottom}><MailIcon className={classes.svgicon}/> E-Mail</div>
                                                <div className={classes.linebottom}><LinkIcon className={classes.svgicon}/> Link kopieren</div>
                                                <div className={classes.linebottom}><FacebookIcon className={classes.svgicon}/> Facebook</div>
                                                <div className={classes.linebottom}><InstagramIcon className={classes.svgicon} /> Instagram</div>
                                                <div className={classes.linebottomw}><WhatsAppIcon className={classes.svgicon}/> WhatsApp</div>
                                            </div>}
                                            {svgOpen2 == true && <div className={classes.triangle}></div>}     
                                        </div>
                                        <div className={classes.print} onMouseEnter={() => setSvgOpen3(true)} onMouseLeave={() => setSvgOpen3(false)}>
                                            <WhitePrinter className={classes.svg}/>
                                            {svgOpen3 == true && <div className={classes.svgcontainerlast}>
                                                Drucken
                                            </div>}
                                            {svgOpen3 == true && <div className={classes.triangle}></div>}     
                                        </div>
                                    </div>
                                </div>
                                <div className={classes.carinfocontent}>
                                    <div className={classes.cartopinfo}>
                                        <div className={classes.carname}>Mercedes-Benz CLS 350</div>
                                        <div className={classes.cardesc}>d BlueEff. Autom. NUR 38.600km / 1.Besitz / Garantie</div>
                                    </div>
                                    <div className={classes.l}><span className={classes.liner}><span className={classes.infoabt}>Kilometerstand</span><span className={classes.actinfo}>{kilometerstandFormatted} km</span></span></div>
                                    <div className={classes.l}><span className={classes.liner}><span className={classes.infoabt}>Getriebe</span><span className={classes.actinfo}>{getriebe}</span></span></div>
                                    <div className={classes.l}><span className={classes.liner}><span className={classes.infoabt}>Erstzulassung</span><span className={classes.actinfo}>{erstzulassung}</span></span></div>
                                    <div className={classes.l}><span className={classes.liner}><span className={classes.infoabt}>Kraftstoff</span><span className={classes.actinfo}>{kraftstoff}</span></span></div>
                                    <div className={classes.l}><span className={classes.liner}><span className={classes.infoabt}>Leistung</span><span className={classes.actinfo}>{leistung}</span></span></div>
                                    <div className={classes.l}><span className={classes.liner}><span className={classes.infoabt}>Verkäufer</span><span className={classes.actinfo}>{verkaeufer}</span></span></div>
                                    <div className={classes.l}><span className={classes.liner}><span className={`${classes.greyback}`}>Finanzierung berechnen</span></span></div>
                                    <div className={classes.l}><span className={classes.linerb}><span className={`${classes.greyback}`}>Versicherung berechnen</span></span></div>
                                    <div className={classes.whiteback}>
                                        <button className={classes.wholebtn}>Weitere Anzeigen von {firstname}</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={classes.row}>
                        <div className={`${classes.firstcolumn}`}>
                            <div className={classes.bottomleftnomargin}>
                                <div className={classes.headsectionf} onClick={() => {
                                        setOpenBasisdaten(d => !d);
                                        setOpenTechnischeDaten(false);
                                        setOpenAusstattung(false);
                                        setOpenFarbeUndInnenAusstattung(false);
                                        setOpenFinanzierung(false);
                                        setOpenEnergieverbrauch(false);
                                    }}>
                                    <div className={classes.fhead}>Basisdaten</div>
                                    <div className={classes.lhead}><span>Fahrzeughistorie</span><span><Expand className={`${openBasisdaten == true && classes.transformedexpand} ${classes.expand}` } /></span></div>
                                </div>
                                {openBasisdaten == true && <div className={classes.infocontainer}>
                                    <div className={classes.fhalf}>
                                        <div className={classes.info}>
                                            <span className={classes.label}>Karosserieform</span><span className={classes.information}>{karosserieform}</span>
                                        </div>
                                        <div className={classes.info}>
                                            <span className={classes.label}>Zustand</span><span className={classes.information}>{zustand}</span>
                                        </div>
                                        <div className={classes.info}>
                                            <span className={classes.label}>Antriebsart</span><span className={classes.information}>{antriebsart}</span>
                                        </div>
                                        <div className={classes.info}>
                                            <span className={classes.label}>Sitzplätze</span><span className={classes.information}>{anzahlsitzplaetze}</span>
                                        </div>
                                        <div className={classes.linfo}>
                                            <span className={classes.label}>Türen</span><span className={classes.information}>{anzahltuere}</span>
                                        </div>
                                    </div>
                                    <div className={classes.lhalf}>
                                        <div className={classes.info}>
                                            <span className={classes.label}>Kilometerstand</span><span className={classes.information}>{kilometerstand}</span>
                                        </div>
                                        <div className={classes.info}>
                                            <span className={classes.label}>Erstzulassung</span><span className={classes.information}>{erstzulassung}</span>
                                        </div>
                                        <div className={classes.info}>
                                            <span className={classes.label}>Produktionsjahr</span><span className={classes.information}>{produktionsjahr}</span>
                                        </div>
                                        <div className={classes.info}>
                                            <span className={classes.label}>HU</span><span className={classes.information}>{hu}</span>
                                        </div>
                                        <div className={classes.linfo}>
                                            <span className={classes.label}>Scheckhaftgepflegt</span><span className={classes.information}>{scheckheftgepflegt == true ? "Ja" : "Nein"}</span>
                                        </div>
                                    </div>
                                </div>}
                                <div className={classes.headsection} onClick={() => {
                                    setOpenEnergieverbrauch(d => !d);
                                    setOpenBasisdaten(false);
                                    setOpenFarbeUndInnenAusstattung(false);
                                    setOpenFinanzierung(false);
                                    setOpenTechnischeDaten(false);
                                    setOpenAusstattung(false);
                                    }}>
                                    <div className={classes.fhead}>Technische Daten</div>
                                    <div className={classes.lhead}><span>Energieverbrauch</span><span><Expand className={`${openEnergieverbrauch == true && classes.transformedexpand} ${classes.expand}` } /></span></div>
                                </div>
                                {openEnergieverbrauch == true && <div className={classes.infocontainer}>
                                <div className={classes.fhalf}>
                                        <div className={classes.info}>
                                            <span className={classes.label}>Karosserieform</span><span className={classes.information}>{karosserieform}</span>
                                        </div>
                                        <div className={classes.info}>
                                            <span className={classes.label}>Zustand</span><span className={classes.information}>{zustand}</span>
                                        </div>
                                        <div className={classes.info}>
                                            <span className={classes.label}>Antriebsart</span><span className={classes.information}>{antriebsart}</span>
                                        </div>
                                        <div className={classes.info}>
                                            <span className={classes.label}>Sitzplätze</span><span className={classes.information}>{anzahlsitzplaetze}</span>
                                        </div>
                                        <div className={classes.linfo}>
                                            <span className={classes.label}>Türen</span><span className={classes.information}>{anzahltuere}</span>
                                        </div>
                                    </div>
                                    <div className={classes.lhalf}>
                                        <div className={classes.info}>
                                            <span className={classes.label}>Kilometerstand</span><span className={classes.information}>{kilometerstand}</span>
                                        </div>
                                        <div className={classes.info}>
                                            <span className={classes.label}>Erstzulassung</span><span className={classes.information}>{erstzulassung}</span>
                                        </div>
                                        <div className={classes.info}>
                                            <span className={classes.label}>Produktionsjahr</span><span className={classes.information}>{produktionsjahr}</span>
                                        </div>
                                        <div className={classes.info}>
                                            <span className={classes.label}>HU</span><span className={classes.information}>{hu}</span>
                                        </div>
                                        <div className={classes.linfo}>
                                            <span className={classes.label}>Scheckhaftgepflegt</span><span className={classes.information}>{scheckheftgepflegt == true ? "Ja" : "Nein"}</span>
                                        </div>
                                    </div>
                                </div>}
                                <div className={classes.longheadsection} onClick={() => {
                                    setOpenAusstattung(d => !d);
                                    setOpenEnergieverbrauch(false);
                                    setOpenBasisdaten(false);
                                    setOpenFarbeUndInnenAusstattung(false);
                                    setOpenFinanzierung(false);
                                    setOpenTechnischeDaten(false);
                                    }}>
                                    <div className={classes.headcontent}>
                                        <span>Ausstattung</span>
                                        <Expand className={`${openAusstattung == true && classes.transformedexpand} ${classes.expand}` } />
                                    </div>
                                </div>
                                {openAusstattung == true && <div className={classes.twogrid}>
                                    <div className={classes.row}>
                                        <div className={classes.fcolumn}>
                                            <div className={classes.gridinfocontainer}>
                                                <div className={classes.infoheading}>Komfort</div>
                                                {ausstattungKomfort.map((item, index) => <div key={index} className={classes.longinformation}>{item}</div>)}
                                            </div>
                                            <br></br>
                                            <div className={classes.gridinfocontainer}>
                                                <div className={classes.infoheading}>Extras</div>
                                                {ausstattungExtras.map((item, index) => <div key={index} className={classes.longinformation}>{item}</div>)}
                                            </div>
                                        </div>
                                        <div className={classes.scolumn}>
                                            <div className={classes.gridinfocontainer}>
                                                <div className={classes.infoheading}>Sicherheit</div>
                                                {ausstattungSicherheit.map((item, index) => <div key={index} className={classes.longinformation}>{item}</div>)}
                                            </div>
                                            <br></br>
                                            <div className={classes.gridinfocontainer}>
                                                <div className={classes.infoheading}>Unterhaltung/Media</div>
                                                {ausstattungUnterhaltung.map((item, index) => <div key={index} className={classes.longinformation}>{item}</div>)}
                                            </div>

                                        </div>

                                    </div>
                                </div>}
                                <div className={classes.longheadsection} onClick={() => {
                                    setOpenFarbeUndInnenAusstattung(d => !d)
                                    setOpenFinanzierung(false);
                                    setOpenAusstattung(false);
                                    setOpenTechnischeDaten(false);
                                    setOpenBasisdaten(false);
                                    setOpenEnergieverbrauch(false);
                                    }}>
                                    <div className={classes.headcontent}>
                                        <span>Farbe und Innenausstattung</span>
                                        <Expand className={`${openFarbeUndInnenAusstattung == true && classes.transformedexpand} ${classes.expand}` } />
                                    </div>
                                </div>
                                {openFarbeUndInnenAusstattung == true && <div className={classes.infocontainer}>
                                    <div className={classes.flong}>
                                        <div className={classes.longinfo}>
                                            <span className={classes.longlabel}>Außenfarbe</span><span className={classes.information}>{aussenfarbe}</span>
                                        </div>
                                        <div className={classes.longinfo}>
                                            <span className={classes.longlabel}>Farbe laut Hersteller</span><span className={classes.information}>{farbeLautHersteller}</span>
                                        </div>
                                        <div className={classes.longinfo}>
                                            <span className={classes.longlabel}>Lackierung</span><span className={classes.information}>{lackierung}</span>
                                        </div>
                                        <div className={classes.longinfo}>
                                            <span className={classes.longlabel}>Farbe der Innenausstattung</span><span className={classes.information}>{farbeinnenausstattung}</span>
                                        </div>
                                        <div className={classes.longlinfo}>
                                            <span className={classes.longlabel}>Innenausstattung</span><span className={classes.information}>{innenausstattung}</span>
                                        </div>
                                    </div>
                                </div>}
                                <div className={classes.longheadsection} onClick={() => {
                                    setOpenFinanzierung(d => !d);
                                    setOpenBasisdaten(false);
                                    setOpenEnergieverbrauch(false);
                                    setOpenTechnischeDaten(false);
                                    setOpenAusstattung(false);
                                    setOpenFarbeUndInnenAusstattung(false);
                                    setOpenFahrzeughistorie(false);
                                    }}>
                                    <div className={classes.headcontent}>
                                        <span>Finanzierung</span>
                                        <Expand className={`${openFinanzierung == true && classes.transformedexpand} ${classes.expand}` } />
                                    </div>
                                </div>
                            </div>
                            <div className={classes.adarea}></div>
                        </div>
                        <div className={classes.secondcolumn}>
                            
                            <div className={`${classes.googlemaps} ${classes.googlemapsnotprivate}`}>
                                Google Maps 
                            </div>
                            <div className={classes.r2c2}>
                                <form onSubmit={handleSubmit}>
                                <h1 className={classes.kontaktheading}>Nachricht senden</h1>
                                <textarea className={classes.textarea} placeholder={
                                `Guten Tag,
    ich interessiere mich für ihr Fahrzeug.
    Kontaktieren Sie mich bitte.
    Mit freundlichen Grüßen`} onChange={(e) => setMessage(e.target.value)} value={message}></textarea>
                                <input className={classes.input} placeholder={"Name"} onChange={(e) => setName(e.target.value)} value={name}/>
                                <input className={classes.input} placeholder={"E-Mail"} onChange={(e) => setMail(e.target.value)} value={mail}/>
                                <input className={classes.input} placeholder={"Telefonnummer (optional)"} onChange={(e) => setTel(e.target.value)} value={tel}/>
                                <div className={classes.checkcontainer}>
                                    <input className={classes.checkinput} type={"checkbox"} onChange={() => setNewsletter(e => !e)} value={newsletter}/>
                                    <p className={classes.paragraph}>Ich möchte maßgeschneiderte Angebote und Neuigkeiten von Auto GIGANT. 
    per E-Mail erhalten. Diese <span className={classes.link}>Einwilligung</span> kann ich jederzeit mit Wirkung für die 
    Zukunft widerrufen.</p>
                                </div>
                                <button type='submit' className={classes.yellowbtn}><PaperPlane className={classes.paperplane} /><span className={classes.sendentext}>Nachricht senden</span></button>
                                </form>                       
                            </div>
                            <div className={classes.sellerinformation}>
                                <div className={`${classes.row} items-center`}>
                                    <div className={classes.profileimg}><Image src={"/avatars/m2.jpg"} layout='fill' objectFit='cover' /></div>
                                    <div className={classes.sellerinformationcontainer}>
                                        <div className={classes.sellerinformationtop}>
                                            <div className={classes.privateornot}>{isPrivateSeller == true ? "Privatperson" : "Händler"}</div>
                                            <div className={classes.sellername}>{firstname + " " + lastname}</div>
                                            <div className={`${classes.link} ${classes.sellerinfotext}`}>{sellerStreet + ", " + sellerCity}</div>
                                            <div className={classes.link}>{sellerCountry}</div>
                                        </div>
                                        <div className={classes.sellerinformationbottom}>
                                            <div className={classes.usersince}>User seit 12/2022</div>
                                            <div className={classes.answersavg}>Antwortet meistens innerhalb einer Std.</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>}
            </div>
        </div>
    )
}

export default CarDetails;