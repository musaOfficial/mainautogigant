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


    const preis = 37990;
    
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

    const kilometerstand = 1220;
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
    const umweltplakette = "1 (Keine Feinstaubplakette)"

    
    const [message, setMessage] = useState("");
    const [name, setName] = useState("");
    const [mail, setMail] = useState("");
    const [tel, setTel] = useState("");
    const [newsletter, setNewsletter] = useState(false);

    const aussenfarbe = "Blau";
    const aussenfarbelauthersteller = "BLAU";
    const farbeinnenausstattung = "sonstige";

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
                    <div className={classes.image}>
                        {width >= 1141 && 
                            <Image src={"/images/space.gif"} width={980} height={120} className={classes.platzhalter}/>
                        }
                    </div>
                    <div className={classes.typeanddate}>
                        <div className={classes.backtoresults}><Backtoresults/><span className={classes.bluetext}>zurück zur Ergebnisliste</span></div>
                        <div>Zuletz geändert: 26.10.2022, 20:57 Uhr</div>
                    </div>
                    <div className={classes.row1}>
                        <div className={classes.r1c1}>
                            <ImageSlider images={images}/>
                        </div>
                        <div className={classes.r1c2}>
                            <div className={classes.carinfocontainer}>
                                <div className={classes.pricerow}>
                                    <div className={classes.price}>€ 234234,-</div>
                                    <div className={classes.nexttoprice}>
                                        <div className={classes.favorite}><WhiteFavorites className={classes.svg}/></div>
                                        <div className={classes.share}><WhiteShare className={classes.svg}/></div>
                                        <div className={classes.print}><WhitePrinter className={classes.svg}/></div>
                                    </div>
                                </div>
                                <div className={classes.carinfocontent}>
                                    <div className={classes.cartopinfo}>
                                        <div className={classes.carname}>Mercedes-Benz CLS 350</div>
                                        <div className={classes.cardesc}>d BlueEff. Autom. NUR 38.600km / 1.Besitz / Garantie</div>
                                        <div className={classes.companylocation}><CompanyLocation className={classes.companylocation}/> 2700 Wiener Neustadt | AT</div>
                                    </div>
                                    <div className={classes.l}><span className={classes.infoabt}>Kilometerstand</span><span className={classes.actinfo}>5 300 km</span></div>
                                    <div className={classes.g}><span className={classes.infoabt}>Getriebe</span><span className={classes.actinfo}>Automatik</span></div>
                                    <div className={classes.l}><span className={classes.infoabt}>Erstzulassung</span><span className={classes.actinfo}>07/2020</span></div>
                                    <div className={classes.g}><span className={classes.infoabt}>Kraftstoff</span><span className={classes.actinfo}>Benzin</span></div>
                                    <div className={classes.l}><span className={classes.infoabt}>Leistung</span><span className={classes.actinfo}>225 kW (306 PS)</span></div>
                                    <div className={classes.g}><span className={classes.infoabt}>Verkäufer</span><span className={classes.actinfo}>Privat</span></div>
                                    <div className={classes.greyback}>Finanzierung berechnen</div>
                                    <div className={classes.greyback}>Versicherung berechnen</div>
                                    <div className={classes.whiteback}>
                                        <button className={classes.sendmail}>E-mail senden</button>
                                        <button className={classes.call}>+43 (0) 699 19778899</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={classes.row2}>
                        <div className={classes.r2c1}>
                            <div className={classes.sectiontop} onClick={() => {
                                setOpenBasisdaten(d => !d)
                                setOpenAusstattung(false);
                                setOpenEnergieverbrauch(false);
                                setOpenFahrzeughistorie(false);
                                setOpenFarbeUndInnenAusstattung(false);
                                setOpenFinanzierung(false);
                                setOpenTechnischeDaten(false);
                                setOpenVersicherung(false);
                            }}>
                                <h1 className={openBasisdaten == true ? classes.sectionheadingbig : classes.sectionheadingsmall}>Basisdaten</h1>
                                {openBasisdaten == false ? <Expand className={classes.expand}/> : <Expand className={classes.expandnot}/>}
                            </div>
                            {openBasisdaten == true && <div className={classes.basiscontainer}>
                                <div>
                                    <div className={classes.infoabout}>Karosserieform</div><div className={classes.actualinfo}>{karosserieform}</div>
                                </div>
                                <div>
                                    <div className={classes.infoabout}>Zustand</div><div className={classes.actualinfo}>{zustand}</div>
                                </div>
                                <div>
                                    <div className={classes.infoabout}>Antriebsart</div><div className={classes.actualinfo}>{antriebsart}</div>
                                </div>
                                <div>
                                    <div className={classes.infoabout}>Sitzplätze</div><div className={classes.actualinfo}>{anzahlsitzplaetze}</div>
                                </div>
                                <div>
                                    <div className={classes.infoabout}>Türen</div><div className={classes.actualinfo}>{anzahltuere}</div>
                                </div>
                            </div>}
                            <div className={classes.section} onClick={() => {
                                setOpenFahrzeughistorie(d => !d)
                                setOpenBasisdaten(false)
                                setOpenAusstattung(false);
                                setOpenEnergieverbrauch(false);
                                setOpenFarbeUndInnenAusstattung(false);
                                setOpenFinanzierung(false);
                                setOpenTechnischeDaten(false);
                                setOpenVersicherung(false);
                            }}>
                                <h1 className={openFahrzeughistorie == true ? classes.sectionheadingbig : classes.sectionheadingsmall}>Fahrzeughistorie</h1>
                                {openFahrzeughistorie == false ? <Expand className={classes.expand}/> : <Expand className={classes.expandnot}/>}
                            </div>
                            {openFahrzeughistorie == true && <div className={classes.basiscontainer}>
                                <div>
                                    <div className={classes.infoabout}>Kilometerstand</div><div className={classes.actualinfo}>{kilometerstand} km</div>
                                </div>
                                <div>
                                    <div className={classes.infoabout}>Erstzulassung</div><div className={classes.actualinfo}>{erstzulassung}</div>
                                </div>
                                <div>
                                    <div className={classes.infoabout}>Produktionsjahr</div><div className={classes.actualinfo}>{produktionsjahr}</div>
                                </div>
                                <div>
                                    <div className={classes.infoabout}>HU</div><div className={classes.actualinfo}>{hu}</div>
                                </div>
                                <div>
                                    <div className={classes.infoabout}>Scheckheftgepflegt</div><div className={classes.actualinfo}>{scheckheftgepflegt == true ? "Ja" : "Nein"}</div>
                                </div>
                            </div>}
                            <div className={classes.section} onClick={() => {
                                setOpenTechnischeDaten(e => !e)
                                setOpenFahrzeughistorie(false);
                                setOpenBasisdaten(false)
                                setOpenAusstattung(false);
                                setOpenEnergieverbrauch(false);
                                setOpenFarbeUndInnenAusstattung(false);
                                setOpenFinanzierung(false);
                                setOpenVersicherung(false);
                            }}>
                                <h1 className={openTechnischeDaten == true ? classes.sectionheadingbig : classes.sectionheadingsmall}>Technische Daten</h1>
                                {openTechnischeDaten == false ? <Expand className={classes.expand}/> : <Expand className={classes.expandnot}/>}
                            </div>
                            {openTechnischeDaten == true && <div className={classes.basiscontainer}>
                                <div>
                                    <div className={classes.infoabout}>Leistung</div><div className={classes.actualinfo}>230 kW (313 PS)</div>
                                </div>
                                <div>
                                    <div className={classes.infoabout}>Getriebe</div><div className={classes.actualinfo}>{getriebe}</div>
                                </div>
                                <div>
                                    <div className={classes.infoabout}>Hubraum</div><div className={classes.actualinfo}>{hubraum} cm<sub className={classes.hubraumsub}>3</sub></div>
                                </div>
                                <div>
                                    <div className={classes.infoabout}>Gänge</div><div className={classes.actualinfo}>{gaenge}</div>
                                </div>
                            </div>}
                            <div className={classes.section} onClick={() => {
                                setOpenEnergieverbrauch(e => !e);
                                setOpenTechnischeDaten(false)
                                setOpenBasisdaten(false)
                                setOpenAusstattung(false);
                                setOpenFarbeUndInnenAusstattung(false);
                                setOpenFahrzeughistorie(false);
                                setOpenFinanzierung(false);
                                setOpenVersicherung(false);
                            }}>
                                <h1 className={openEnergieverbrauch == true ? classes.sectionheadingbig : classes.sectionheadingsmall}>Energieverbrauch</h1>
                                {openEnergieverbrauch == false ? <Expand className={classes.expand}/> : <Expand className={classes.expandnot}/>}
                            </div>
                            {openEnergieverbrauch == true && <div className={classes.basiscontainer}>
                                <div>
                                    <div className={classes.infoabout}>Kraftstoff</div><div className={classes.actualinfo}>{kraftstoff}</div>
                                </div>
                                <div>
                                    <div className={classes.infoabout}>Kraftstoffverbrauch<sub>2</sub></div><div className={classes.actualinfo}>
                                        {kraftstoffverbrauch.map((kv) => <div key={kv}>{kv}</div>)}
                                    </div>
                                </div>
                                <div>
                                    <div className={classes.infoabout}>CO<sub>2</sub>-Emissionen<sup>2</sup></div><div className={classes.actualinfo}>{coemissionen}</div>
                                </div>
                                <div>
                                    <div className={classes.infoabout}>Schadstoffklasse</div><div className={classes.actualinfo}>{schadstoffklasse}</div>
                                </div>
                                <div>
                                    <div className={classes.infoabout}>Umweltplakette</div><div className={classes.actualinfo}>{umweltplakette}</div>
                                </div>
                            </div>}
                            <div className={classes.section} onClick={() => {
                                setOpenAusstattung(e => !e);
                                setOpenEnergieverbrauch(false);
                                setOpenTechnischeDaten(false)
                                setOpenBasisdaten(false)
                                setOpenFarbeUndInnenAusstattung(false);
                                setOpenFinanzierung(false);
                                setOpenVersicherung(false);
                                setOpenFahrzeughistorie(false);
                            }}>
                                <h1 className={openAusstattung == true ? classes.sectionheadingbig : classes.sectionheadingsmall}>Ausstattung</h1>
                                {openAusstattung == false ? <Expand className={classes.expand}/> : <Expand className={classes.expandnot}/>}
                            </div>
                            {openAusstattung == true && <div className={classes.basiscontainer}>
                                <div>
                                    <div className={classes.infoabout}>Komfort</div><div className={classes.actualinfo}>
                                        {ausstattungKomfort.map((property) => <div key={property}>{property}</div>)}
                                    </div>
                                </div>
                                <div>
                                    <div className={classes.infoabout}>Unterhaltung/Media</div><div className={classes.actualinfo}>
                                        {ausstattungUnterhaltung.map((e) => <div key={e}>{e}</div>)}
                                    </div>
                                </div>
                                <div>
                                    <div className={classes.infoabout}>Sicherheit</div><div className={classes.actualinfo}>
                                        {ausstattungSicherheit.map((e) => <div key={e}>{e}</div>)}
                                    </div>
                                </div>
                                <div>
                                    <div className={classes.infoabout}>Extras</div><div className={classes.actualinfo}>
                                        {ausstattungExtras.map((e) => <div key={e}>{e}</div>)}
                                    </div>
                                </div>
                            </div>}
                            <div className={classes.section} onClick={() => {
                                setOpenFarbeUndInnenAusstattung(e => !e);
                                setOpenAusstattung(false);
                                setOpenEnergieverbrauch(false);
                                setOpenTechnischeDaten(false)
                                setOpenBasisdaten(false)
                                setOpenFinanzierung(false);
                                setOpenVersicherung(false);
                                setOpenFahrzeughistorie(false);
                            }}>
                                <h1 className={openFarbeUndInnenAusstattung == true ? classes.sectionheadingbig : classes.sectionheadingsmall}>Farbe und Innenausstattung</h1>
                                {openFarbeUndInnenAusstattung == false ? <Expand className={classes.expand}/> : <Expand className={classes.expandnot}/>}
                            </div>
                            {openFarbeUndInnenAusstattung == true && <div className={classes.basiscontainer}>
                                <div>
                                    <div className={classes.infoabout}>Außenfarbe</div><div className={classes.actualinfo}>{aussenfarbe}</div>
                                </div>
                                <div>
                                    <div className={classes.infoabout}>Außenfarbe laut Hersteller</div><div className={classes.actualinfo}>{aussenfarbelauthersteller}</div>
                                </div>
                                <div>
                                    <div className={classes.infoabout}>Farbe der Innenausstattung</div><div className={classes.actualinfo}>{farbeinnenausstattung}</div>
                                </div>
                            </div>}
                            <div className={classes.section} onClick={() => {
                                setOpenFinanzierung(e => !e);
                                setOpenFarbeUndInnenAusstattung(false);
                                setOpenAusstattung(false);
                                setOpenEnergieverbrauch(false);
                                setOpenTechnischeDaten(false)
                                setOpenBasisdaten(false)
                                setOpenVersicherung(false);
                                setOpenFahrzeughistorie(false);
                            }}>
                                <h1 className={openFinanzierung == true ? classes.sectionheadingbig : classes.sectionheadingsmall}>Finanzierung</h1>
                                {openFinanzierung == false ? <Expand className={classes.expand}/> : <Expand className={classes.expandnot}/>}
                            </div>
                            {openFinanzierung == true && <div className={classes.basiscontainer}>
                                
                            </div>}
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
                                <p>Ich möchte auf meine Interessen zugeschnittene Angebote und 
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