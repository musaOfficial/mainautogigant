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
import { pdf } from '@react-pdf/renderer';
import { useEffect } from 'react';
import MailIcon from './../public/images/email.svg';
import LinkIcon from './../public/images/link.svg';
import FacebookIcon from './../public/images/facebik.svg';
import WhatsAppIcon from './../public/images/WhatsApp.svg';
import InstagramIcon from './../public/icons/instagram.svg'
import InputSelect from './ui/InputSelect';
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
    return (
        <div className={classes.container}>
            <div className={`${classes.contentcontainer} w-10/12 lg:w-full max-w-ag-container md:!w-full mx-auto flex lg:flex-col bg-white p-6`}>
                <div>
                    <div className={classes.middle}>
                        <div className={classes.image}>
                            {width >= 1141 && 
                                <div className={classes.werbungtext}>Werbung</div>
                            }
                            {width >= 1141 && 
                                <iframe src="/banners/banner1/index.html" scrolling="yes" width="100%" height="100px"></iframe>
                            }
                        </div>
                    </div>
                    <div className={classes.typeanddate}>
                        <div className={classes.backtoresults}><Backtoresults/><span className={classes.bluetext}><span className={classes.bl1}>zurück zur </span><span className={classes.bl2}>Ergebnisliste</span></span></div>
                        <div className={classes.zl}><span className={classes.zl1}>Zuletzt geändert:</span> <span className={classes.zl2}>26.10.2022, 20:57 Uhr</span></div>
                    </div>
                    <div className={classes.row1}>
                        <div className={classes.r1c1}>
                            <ImageSlider images={images}/>
                        </div>
                        <div className={classes.r1c2}>
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
                                        <div className={classes.companylocation}><CompanyLocation className={classes.companylocation}/> 2700 Wiener Neustadt | AT</div>
                                    </div>
                                    <div className={classes.l}><span className={classes.liner}><span className={classes.infoabt}>Kilometerstand</span><span className={classes.actinfo}>{kilometerstandFormatted} km</span></span></div>
                                    <div className={classes.l}><span className={classes.liner}><span className={classes.infoabt}>Getriebe</span><span className={classes.actinfo}>{getriebe}</span></span></div>
                                    <div className={classes.l}><span className={classes.liner}><span className={classes.infoabt}>Erstzulassung</span><span className={classes.actinfo}>{erstzulassung}</span></span></div>
                                    <div className={classes.l}><span className={classes.liner}><span className={classes.infoabt}>Kraftstoff</span><span className={classes.actinfo}>{kraftstoff}</span></span></div>
                                    <div className={classes.l}><span className={classes.liner}><span className={classes.infoabt}>Leistung</span><span className={classes.actinfo}>{leistung}</span></span></div>
                                    <div className={classes.l}><span className={classes.liner}><span className={classes.infoabt}>Verkäufer</span><span className={classes.actinfo}>{verkaeufer}</span></span></div>
                                    <div className={classes.l}><span className={classes.liner}><span className={`${classes.greyback}`}>Finanzierung berechnen</span></span></div>
                                    <div className={classes.l}><span className={classes.linerb}><span className={`${classes.greyback}`}>Finanzierung berechnen</span></span></div>
                                    <div className={classes.whiteback}>
                                        <button className={classes.sendmail}>E-mail senden</button>
                                        <button className={classes.call}>+43 (0) 699 19778899</button>
                                    </div>
                                    <div className={classes.bottominfocontent}>
                                        <div className={classes.bottominfo}>Alle Fahrzeuge des Anbieters</div>
                                        |
                                        <div className={classes.bottominfo}>Händlerprofil</div>
                                        |
                                        <div className={classes.bottominfowarn}>Angebot melden</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={classes.row2}>
                        <div className={classes.r2c1}>
                            <div className={classes.headsectionf} onClick={() => setOpenBasisdaten(d => !d)}>
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
                            <div className={classes.headsection} onClick={() => setOpenEnergieverbrauch(d => !d)}>
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
                            <div className={classes.longheadsection} onClick={() => setOpenAusstattung(d => !d)}>
                                <div className={classes.headcontent}>
                                    <span>Ausstattung</span>
                                    <Expand className={`${openAusstattung == true && classes.transformedexpand} ${classes.expand}` } />
                                </div>
                            </div>
                            {openAusstattung == true && <div className={classes.twogrid}>
                                <div className={classes.gridinfocontainer}>
                                    <div className={classes.infoheading}>Komfort</div>
                                    {ausstattungKomfort.map((item, index) => <div key={index} className={classes.longinformation}>{item}</div>)}
                                </div>
                                <div className={classes.gridinfocontainer}>
                                    <div className={classes.infoheading}>Unterhaltung/Media</div>
                                    {ausstattungUnterhaltung.map((item, index) => <div key={index} className={classes.longinformation}>{item}</div>)}
                                </div>
                                <div className={classes.gridinfocontainer}>
                                    <div className={classes.infoheading}>Unterhaltung/Media</div>
                                    {ausstattungUnterhaltung.map((item, index) => <div key={index} className={classes.longinformation}>{item}</div>)}
                                </div>
                                <div className={classes.gridinfocontainer}>
                                    <div className={classes.infoheading}>Sicherheit</div>
                                    {ausstattungSicherheit.map((item, index) => <div key={index} className={classes.longinformation}>{item}</div>)}
                                </div>
                                <div className={classes.gridinfocontainer}>
                                    <div className={classes.infoheading}>Extras</div>
                                    {ausstattungExtras.map((item, index) => <div key={index} className={classes.longinformation}>{item}</div>)}
                                </div>
                            </div>}
                            <div className={classes.longheadsection} onClick={() => setOpenFarbeUndInnenAusstattung(d => !d)}>
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
                            <div className={classes.longheadsection} onClick={() => setOpenFinanzierung(d => !d)}>
                                <div className={classes.headcontent}>
                                    <span>Finanzierung</span>
                                    <Expand className={`${openFinanzierung == true && classes.transformedexpand} ${classes.expand}` } />
                                </div>
                            </div>
                        </div>
                        <div className={classes.r2c2}>
                            <form onSubmit={handleSubmit}>
                            <h1 className={classes.kontaktheading}>Anbieter kontaktieren</h1>
                            <p className={classes.yourmessage}>Deine Nachricht</p>
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
                                <p className={classes.paragraph}>Ich möchte auf meine Interessen zugeschnittene Angebote und 
Neuigkeiten der AUTOGIGANT. GmbH per E-Mail erhalten. Ich kann 
diese Einwilligung jederzeit mit Wirkung für die Zukunft widerrufen.</p>
                            </div>
                            <button type='submit' className={classes.yellowbtn} >Nachricht senden</button>
                            </form>
                            <p className={classes.contactdesc}>Wir verwenden Deine E-Mail-Adresse gemäß unseren 
Datenschutzbestimmungen, z.B. für Fahrzeug-Empfehlungen ähnlich Deiner 
Suche. Wenn Du keine weiteren Fahrzeug-Empfehlungen mehr erhalten willst,
 kannst Du jederzeit hier widersprechen.</p>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CarDetails;