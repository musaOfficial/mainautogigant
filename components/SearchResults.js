import classes from './SearchResults.module.css';
import Image from 'next/image';
import DelX from './../public/images/closedetail.svg';
import { useState } from 'react';
import Expand from './../public/expand.svg'
import InputSelect from './ui/InputSelect';
import Select from "react-select";
import AddCircle from './../public/images/add_circle.svg'
import Input from './ui/Input';
import ModelItem from './search/ModelItem';
import MyLocation from './../public/images/my_location.svg'
import RemoveCircle from './../public/images/remove_circle.svg'
import Question from './../public/question.svg';
import SearchIcon from './../public/searchicon.svg';
import GridView from './../public/gridview.svg';
import ListView from './../public/listview.svg';
import AdCard from './dashboard/ads/AdCard';
import {
    marke1,
    marke2,
    karo,
    van1,
    van2,
    bis,
    bis1,
    bis2,
    bis3,
    land,
    umk,
    kraft,
    kilo,
    kilo2,
    leis,
    von,
    leis2,
    von2,
    getri,
    von4,
    bis4,
    unfall,
    fahrz,
    schads,
  } from "./search/selectOptions";
import Angebot from './ui/Angebot';

function SearchResults(){
    const style = {
        control: (base) => ({
          ...base,
          boxShadow: "none",
          border: "none",
          fontSize: '13px',
          borderRadius: '10px',
        }),
        option: (styles, state) => ({
          ...styles,
          backgroundColor: state.isSelected ? "#fbb900" : "",
          "&:active": "#fbb90080",
          fontSize: '16px',
        }),
      };

    const halfSelectStyle1 = {
    control: (base) => ({
        ...base,
        boxShadow: "none",
        border: "none",
        padding: "5.25px",
        outline: "none",
        borderRadius: "10px",
        marginBottom: "24px",
        fontSize: '13px',
        borderRadius: '10px 0px 0px 10px',
        marginRight: '10px'

    }),
    menu: (styles, state) => ({
        ...styles,
        zIndex: 999,
        fontSize: '13px',
        
    }),
    option: (styles, state) => ({
        ...styles,
        backgroundColor: state.isSelected ? "#fbb900" : "",
        "&:active": "#fbb90080",
        fontSize: '13px',
    }),
    };

    const halfSelectStyle2 = {
        control: (base) => ({
            ...base,
            boxShadow: "none",
            border: "none",
            padding: "5.25px",
            outline: "none",
            borderRadius: "10px",
            marginBottom: "24px",
            fontSize: '13px',
            borderRadius: '0 10px 10px 0'
        }),
        menu: (styles, state) => ({
            ...styles,
            zIndex: 999,
            fontSize: '13px',
            
        }),
        option: (styles, state) => ({
            ...styles,
            backgroundColor: state.isSelected ? "#fbb900" : "",
            "&:active": "#fbb90080",
            fontSize: '13px',
        }),
        };


    var ausstattungList = [
        {value: "2-Zonen-Klimaautomatik", selected: false, showAlways: false},
        {value: "3-Zonen-Klimaautomatik", selected: false, showAlways: false},
        {value: "360° Kamera", selected: false, showAlways: false},
        {value: "4-Zonen-Klimaautomatik", selected: false, showAlways: false},
        {value: "ABS", selected: false, showAlways: true},
        {value: "Abstandstempomat", selected: false, showAlways: true},
        {value: "Abstandswarner", selected: false, showAlways: false},
        {value: "Airbag hinten", selected: false, showAlways: false},
        {value: "Alarmanlage", selected: false, showAlways: false},
        {value: "Allrad", selected: false, showAlways: true},
        {value: "Allwetterreifen", selected: false, showAlways: false},
        {value: "Alufelgen", selected: false, showAlways: false},
        {value: "Ambientebeleuchtung", selected: false, showAlways: false},
        {value: "Android Auto", selected: false, showAlways: false},
        {value: "Anhängerkupplung", selected: false, showAlways: true},
        {value: "Apple CarPlay", selected: false, showAlways: false},
        {value: "Armlehne", selected: false, showAlways: false},
        {value: "Beheizbare Frontscheibe", selected: false, showAlways: false},
        {value: "Beheizbares Lenkrad", selected: false, showAlways: false},
        {value: "Behindertengerecht", selected: false, showAlways: false},
        {value: "Beifahrerairbag", selected: false, showAlways: false},
        {value: "Berganfahrassistent", selected: false, showAlways: false},
        {value: "Bi-Xenon Scheinwerfer", selected: false, showAlways: false},
        {value: "Biodieselumrüstung", selected: false, showAlways: false},
        {value: "Blendfreies Fernlicht", selected: false, showAlways: false},
        {value: "Bluethoot", selected: false, showAlways: false},
        {value: "Bordcomputer", selected: false, showAlways: false},
        {value: "CD", selected: false, showAlways: false},
        {value: "DAB-Radio", selected: false, showAlways: false},
        {value: "Dachreling", selected: false, showAlways: false},
        {value: "E10-geeignet", selected: false, showAlways: false},
        {value: "Einparkhilfe", selected: false, showAlways: false},
        {value: "Einparkhilfe Kamera", selected: false, showAlways: false},
        {value: "Einparkhilfe selbstlenkendes System", selected: false, showAlways: false},
        {value: "Einparkhilfe Sensoren hinten", selected: false, showAlways: false},
        {value: "Einparkhilfe Sensoren vorne", selected: false, showAlways: false},
        {value: "Elektr. Fensterheber", selected: false, showAlways: true},
        {value: "Elektr. Sitzeinstellung hinten", selected: false, showAlways: false},
        {value: "Elektrische Heckklappe", selected: false, showAlways: false},
        {value: "Elektrische Seitenspiegel", selected: false, showAlways: false},
        {value: "Elektrische Sitze", selected: false, showAlways: false},
        {value: "Elektronische Parkbremse", selected: false, showAlways: false},
        {value: "ESP", selected: false, showAlways: false},
        {value: "Fahrerairbag", selected: false, showAlways: false},
        {value: "Fernlichassistent", selected: false, showAlways: false},
        {value: "Freisprecheinrichtung", selected: false, showAlways: false},
        {value: "Gebäckraumabtrennung", selected: false, showAlways: false},
        {value: "Geschwindigkeits-\nbegrenzungsanlage", selected: false, showAlways: false},
        {value: "Getönte Scheiben", selected: false, showAlways: false},
        {value: "Head-up display", selected: false, showAlways: false},
        {value: "Induktionsladen für Smartphones", selected: false, showAlways: false},
        {value: "Innenspiegel automatisch abblendend", selected: false, showAlways: false},
        {value: "Isofix", selected: false, showAlways: false},
        {value: "Katalysator", selected: false, showAlways: false},
        {value: "Klimaanlage", selected: false, showAlways: true},
        {value: "Klimaautomatik", selected: false, showAlways: true},
        {value: "Kopfairbag", selected: false, showAlways: false},
        {value: "Kurvenlicht", selected: false, showAlways: false},
        {value: "Laserlicht", selected: false, showAlways: false},
        {value: "LED-Scheinwerfer", selected: false, showAlways: true},
        {value: "LED-Tagfahrlicht", selected: false, showAlways: false},
        {value: "Lederausstattung", selected: false, showAlways: false},
        {value: "Lederlenkrad", selected: false, showAlways: false},
        {value: "Lichtsensor", selected: false, showAlways: false},
        {value: "Lordosenstütze", selected: false, showAlways: false},
        {value: "Luftfederung", selected: false, showAlways: false},
        {value: "Markise", selected: false, showAlways: false},
        {value: "Massagesitze", selected: false, showAlways: false},
        {value: "MP3", selected: false, showAlways: false},
        {value: "Müdigkeitswarnsystem", selected: false, showAlways: false},
        {value: "Multifunktionslenkrad", selected: false, showAlways: true},
        {value: "Musikstreaming integriert", selected: false, showAlways: false},
        {value: "Nachtsicht-Assistent", selected: false, showAlways: false},
        {value: "Navigationssystem", selected: false, showAlways: true},
        {value: "Nebelscheinwerfer", selected: false, showAlways: false},
        {value: "Notbremsassistent", selected: false, showAlways: false},
        {value: "Notrad", selected: false, showAlways: false},
        {value: "Notrufsystem", selected: false, showAlways: false},
        {value: "Pannenkit", selected: false, showAlways: false},
        {value: "Panoramadach", selected: false, showAlways: false},
        {value: "Radio", selected: false, showAlways: false},
        {value: "Raucherpaket", selected: false, showAlways: false},
        {value: "Rechtslenker", selected: false, showAlways: false},
        {value: "Regensensor", selected: false, showAlways: false},
        {value: "Reichweitenverlängerer", selected: false, showAlways: false},
        {value: "Reifendruckkontrollsystem", selected: false, showAlways: false},
        {value: "Reserverad", selected: false, showAlways: false},
        {value: "Schaltwippen", selected: false, showAlways: false},
        {value: "Scheinwerferreinigung", selected: false, showAlways: false},
        {value: "Schiebedach", selected: false, showAlways: false},
        {value: "Schiebetür", selected: false, showAlways: false},
        {value: "Schiebetür links", selected: false, showAlways: false},
        {value: "Schiebetür rechts", selected: false, showAlways: false},
        {value: "Schlüssellose Zentralverriegelung", selected: false, showAlways: false},
        {value: "Seitenairbag", selected: false, showAlways: false},
        {value: "Servolenkung", selected: false, showAlways: false},
        {value: "Sitzbelüftung", selected: false, showAlways: false},
        {value: "Sitzheizung", selected: false, showAlways: true},
        {value: "Skisack", selected: false, showAlways: false},
        {value: "Sommerreifen", selected: false, showAlways: false},
        {value: "Soundsystem", selected: false, showAlways: false},
        {value: "Spoiler", selected: false, showAlways: false},
        {value: "Sportfahrwerk", selected: false, showAlways: false},
        {value: "Sportpaket", selected: false, showAlways: false},
        {value: "Sportsitze", selected: false, showAlways: false},
        {value: "Sprachsteuerung", selected: false, showAlways: false},
        {value: "Spurhalteassistent", selected: false, showAlways: false},
        {value: "Stahlfelgen", selected: false, showAlways: false},
        {value: "Standheizung", selected: false, showAlways: false},
        {value: "Start/Stop-Automatik", selected: false, showAlways: false},
        {value: "Tagfahrlicht", selected: false, showAlways: false},
        {value: "Taxi oder Mietwagen", selected: false, showAlways: false},
        {value: "teilb. Rücksitzbank", selected: false, showAlways: false},
        {value: "Tempomat", selected: false, showAlways: true},
        {value: "Totwinkel-Assistent", selected: false, showAlways: false},
        {value: "Touchscreen", selected: false, showAlways: false},
        {value: "Traktionskontrolle", selected: false, showAlways: false},
        {value: "Tuning", selected: false, showAlways: false},
        {value: "TV", selected: false, showAlways: false},
        {value: "Umklappbarer Beifahrersitz", selected: false, showAlways: false},
        {value: "USB", selected: false, showAlways: false},
        {value: "Verkehrszeichenerkennung", selected: false, showAlways: false},
        {value: "Voll-LED Scheinwerfer", selected: false, showAlways: false},
        {value: "Volldigitales Kombiinstrument", selected: false, showAlways: false},
        {value: "W-Lan / Wifi Hotspot", selected: false, showAlways: false},
        {value: "Wegfahrsperre", selected: false, showAlways: false},
        {value: "Windschott(für Cabrio)", selected: false, showAlways: false},
         {value: "Winterpaket", selected: false, showAlways: false},
        {value: "Winterreifen", selected: false, showAlways: false},
        {value: "Xenonscheinwerfer", selected: false, showAlways: true},
        {value: "Zentralverriegelung", selected: false, showAlways: false},
        {value: "Zentralverriegelung mit Funkfernbedienung", selected: false, showAlways: false},
    ]

    const ausstattungSelectedItems = [];    

    const [expanded, setExpanded] = useState(true);
    const [brandName, setBrandName] = useState({}); 
    const [varient, setVarient] = useState("");
    const [modelName, setModelName] = useState({});
    const [modelItems, setModelItems] = useState([]);

    const [brandSelected, setBrandSelected] = useState();

    const [modelInputValue, setModelInputValue] = useState();
    const [brandNameInputValue, setBrandNameInputValue] = useState();

    const anzahlAngebote = 109_485;
    const displayAnzahlAngebote = anzahlAngebote.toLocaleString();

    const filters = ["Österreich", "Mercedes", "CLS 320"];
    const [openBasisdaten, setOpenBasisdaten] = useState(false);
    const [openAusstattung, setOpenAusstattung] = useState(false);
    const [openFarbe, setOpenFarbe] = useState(false);
    const [openPolsterFarbe, setOpenPolsterFarbe] = useState(false);
    const [openFahrzeugzustand, setOpenFahrzeugzustand] = useState(false);
    const [openUmwelt, setOpenUmwelt] = useState(false);
    const [openAngebotDetails, setOpenAngebotDetails] = useState(false);

    const [inputMarkeChanged, setInputMarkeChanged] = useState(false);

    const [inputKarosserieform, setInputKarosserieform] = useState();
    const [inputKarosserieformChanged, setInputKarosserieformChanged] = useState();

    const [inputKraftstoff, setInputKraftstoff] = useState();
    const [inputKraftstoffChanged, setInputKraftstoffChanged] = useState()

    const [ausstattungsKriterienOpen, setAusstattungsKriterienOpen] = useState(false);
    const addModel = () => {
        setModelItems([
          ...modelItems,
          {
            brandName: brandName.value,
            modelName: modelName.value,
            varient: varient,
          },
        ]);
    
        setBrandName({value: "", label: ""});
        setVarient("");
        setModelName({value: "", label: ""});
        setBrandNameInputValue("");
        setBrandSelected(false);
      };


    const angebote = [
        {
            preis: 213520,
            title: "Mercedes AMG GT",
            adNo: "#294873205",
            start: "01/01/2020",
            end: "01/01/2022",
            imgSrc: "/images/draft-card-img-car-1.png",
        },
        {
            preis: 213520,
            title: "Mercedes AMG GT",
            adNo: "#294873205",
            start: "01/01/2020",
            end: "01/01/2022",
            imgSrc: "/images/draft-card-img-car-1.png",
        },
        {
            preis: 213520,
            title: "Mercedes AMG GT",
            adNo: "#294873205",
            start: "01/01/2020",
            end: "01/01/2022",
            imgSrc: "/images/draft-card-img-car-1.png",
        },
        {
            preis: 213520,
            title: "Mercedes AMG GT",
            adNo: "#294873205",
            start: "01/01/2020",
            end: "01/01/2022",
            imgSrc: "/images/draft-card-img-car-1.png",
        },
        {
            preis: 213520,
            title: "Mercedes AMG GT",
            adNo: "#294873205",
            start: "01/01/2020",
            end: "01/01/2022",
            imgSrc: "/images/draft-card-img-car-1.png",
        },
        {
            preis: 213520,
            title: "Mercedes AMG GT",
            adNo: "#294873205",
            start: "01/01/2020",
            end: "01/01/2022",
            imgSrc: "/images/draft-card-img-car-1.png",
        },
        {
            preis: 213520,
            title: "Mercedes AMG GT",
            adNo: "#294873205",
            start: "01/01/2020",
            end: "01/01/2022",
            imgSrc: "/images/draft-card-img-car-1.png",
        },
        {
            preis: 213520,
            title: "Mercedes AMG GT",
            adNo: "#294873205",
            start: "01/01/2020",
            end: "01/01/2022",
            imgSrc: "/images/draft-card-img-car-1.png",
        },
        {
            preis: 213520,
            title: "Mercedes AMG GT",
            adNo: "#294873205",
            start: "01/01/2020",
            end: "01/01/2022",
            imgSrc: "/images/draft-card-img-car-1.png",
        },
        {
            preis: 213520,
            title: "Mercedes AMG GT",
            adNo: "#294873205",
            start: "01/01/2020",
            end: "01/01/2022",
            imgSrc: "/images/draft-card-img-car-1.png",
        },
        {
            preis: 213520,
            title: "Mercedes AMG GT",
            adNo: "#294873205",
            start: "01/01/2020",
            end: "01/01/2022",
            imgSrc: "/images/draft-card-img-car-1.png",
        },
        {
            preis: 213520,
            title: "Mercedes AMG GT",
            adNo: "#294873205",
            start: "01/01/2020",
            end: "01/01/2022",
            imgSrc: "/images/draft-card-img-car-1.png",
        },
        {
            preis: 213520,
            title: "Mercedes AMG GT",
            adNo: "#294873205",
            start: "01/01/2020",
            end: "01/01/2022",
            imgSrc: "/images/draft-card-img-car-1.png",
        },
        {
            preis: 213520,
            title: "Mercedes AMG GT",
            adNo: "#294873205",
            start: "01/01/2020",
            end: "01/01/2022",
            imgSrc: "/images/draft-card-img-car-1.png",
        },
        {
            preis: 213520,
            title: "Mercedes AMG GT",
            adNo: "#294873205",
            start: "01/01/2020",
            end: "01/01/2022",
            imgSrc: "/images/draft-card-img-car-1.png",
        },
        {
            preis: 213520,
            title: "Mercedes AMG GT",
            adNo: "#294873205",
            start: "01/01/2020",
            end: "01/01/2022",
            imgSrc: "/images/draft-card-img-car-1.png",
        },
        {
            preis: 213520,
            title: "Mercedes AMG GT",
            adNo: "#294873205",
            start: "01/01/2020",
            end: "01/01/2022",
            imgSrc: "/images/draft-card-img-car-1.png",
        },
        {
            preis: 213520,
            title: "Mercedes AMG GT",
            adNo: "#294873205",
            start: "01/01/2020",
            end: "01/01/2022",
            imgSrc: "/images/draft-card-img-car-1.png",
        },
        {
            preis: 213520,
            title: "Mercedes AMG GT",
            adNo: "#294873205",
            start: "01/01/2020",
            end: "01/01/2022",
            imgSrc: "/images/draft-card-img-car-1.png",
        },
        {
            preis: 213520,
            title: "Mercedes AMG GT",
            adNo: "#294873205",
            start: "01/01/2020",
            end: "01/01/2022",
            imgSrc: "/images/draft-card-img-car-1.png",
        },
        {
            preis: 213520,
            title: "Mercedes AMG GT",
            adNo: "#294873205",
            start: "01/01/2020",
            end: "01/01/2022",
            imgSrc: "/images/draft-card-img-car-1.png",
        },
        {
            preis: 213520,
            title: "Mercedes AMG GT",
            adNo: "#294873205",
            start: "01/01/2020",
            end: "01/01/2022",
            imgSrc: "/images/draft-card-img-car-1.png",
        },
        {
            preis: 213520,
            title: "Mercedes AMG GT",
            adNo: "#294873205",
            start: "01/01/2020",
            end: "01/01/2022",
            imgSrc: "/images/draft-card-img-car-1.png",
        },
        {
            preis: 213520,
            title: "Mercedes AMG GT",
            adNo: "#294873205",
            start: "01/01/2020",
            end: "01/01/2022",
            imgSrc: "/images/draft-card-img-car-1.png",
        },
    ]

    const [gridView, setGridView] = useState(true);
    return (
        <div className={classes.container}>
            <div className={`${classes.contentcontainer} relative w-10/12 lg:w-full max-w-ag-container md:!w-full mx-auto flex lg:flex-col bg-white p-6`}>
                <div>
                    <p className={classes.werbungtext}>Werbung</p>
                    <div className={classes.topimg}>
                        <Image src={'/images/reg-car.png'} layout='fill' objectFit='cover'/>
                    </div>
                </div>
                <div className={classes.c2r1top}>
                    <div>
                        <Expand className={classes.backarrow} />
                        <span className={classes.backarrowtext}>zurück zur Startseite</span>
                    </div>
                    <div>
                        <Question className={classes.question} />
                        <span className={classes.questiontext}>Infos zur Reihung der Anzeigen</span>
                    </div>
                </div>
            <div className={classes.row}>
                <div className={classes.c1}>
                    <div className={classes.c1r1}>
                        <div className={classes.centeritems1}>
                            <h3 className={classes.anzahlAngeboteNummer}>{displayAnzahlAngebote}</h3>
                            <div className={classes.anzahlAngeboteText}>Angebote für Ihre Suche</div>
                        </div>
                    </div>
                    <div className={classes.c1r2}>
                        <div className={classes.centeritems2}>
                            {filters.map((filter, index) => <div key={filter} className={classes.filter}>{filter}<DelX className={classes.delx}/></div>)}
                        </div>
                        <div>
                            <button className={classes.delfilters}>FILTER LÖSCHEN</button>
                            <button className={classes.savesearch}>SUCHE SPEICHERN</button>
                        </div>
                    </div>
                    <div className={classes.c1r3}>
                        <div className={openBasisdaten == true ? classes.sectioncontainer : classes.sectioncontainerclosed} onClick={() => {
                            if(openBasisdaten == false){
                                setOpenBasisdaten(true);
                            }
                        }}>
                            <div className={classes.headingcontainer} onClick={() => {
                            if(openBasisdaten == true){
                                setOpenBasisdaten(false);
                            }
                        }}>
                                <div className={classes.sectionheading}>BASISDATEN & STANDORT</div>
                                <Expand className={openBasisdaten == false ? classes.openedExpand : classes.closedExpand}/>
                            </div>
                            {openBasisdaten == true && <div className={classes.basiscontainer}>
                                <div className={`${classes.inputrowgiga} ${classes.marginbottom}`}>
                                    <input className={classes.checkboxgiga} type={"checkbox"} />
                                    <img className={classes.gigadraftimg} src={"/images/draft-card-giga-logo.png"} />
                                    <img src={"/images/info.svg"} />
                                </div>
                                <div className={classes.selectcar}>
                                    <div>
                                        <label className='font-bold'>Marke</label>
                                        <Select 
                                            options={marke1} 
                                            styles={style}
                                            onChange={(e) => {
                                                setBrandSelected(true);
                                                setInputMarkeChanged(true);
                                                if(e.value == "alle"){
                                                setBrandSelected(false);
                                                }
                                                setBrandName(e);
                                            }}
                                            value={inputMarkeChanged == true ? brandName : marke1[0].label}
                                            placeholder={"Alle"}
                                            className="mt-1"
                                        ></Select>
                                    </div>
                                    <div className={classes.selectmodel}>
                                        <label className='font-bold'>Modell</label>
                                        <Select 
                                            options={marke2} 
                                            styles={style}
                                            onChange={(e) => {
                                                setModelName(e)
                                              }}
                                            value={modelName || marke1[0].label}
                                            name={"Modell"}
                                            isDisabled={!brandSelected}
                                            className="mt-1"
                                        ></Select>
                                    </div>
                                    <div>
                                        <p className="mb-1 font-bold">Variante</p>
                                        <input className={classes.varientinput} onChange={(e) => setVarient(e.target.value)} placeholder="z.B CLS 320, E 220, usw."/>
                                    </div>
                                    <div className={`${classes.addmodal} ${classes.marginbottom}`} onClick={addModel}>
                                        <AddCircle className={classes.addmodalsvg} /> <span className={classes.addmodaltext}>Weitere Marken/<br/>Modelle hinzufügen</span>
                                    </div>
                                    <div className={classes.marginbottom}>
                                        <label className='font-bold'>Karosserieform</label>
                                        <Select 
                                            options={karo} 
                                            styles={style}
                                            onChange={(e) => {
                                                setInputKarosserieform(e.value);
                                                setInputKarosserieformChanged(true);
                                            }}
                                            value={inputKarosserieformChanged == false ? brandName : marke1[0].label}
                                            placeholder={"Alle"}
                                            className="mt-1 mb-1"/>
                                            
                                    </div>
                                    <div className={classes.marginbottom}>
                                        <label className='font-bold'>Kraftstoff</label>
                                        <Select                                             
                                            options={van1} 
                                            styles={style}
                                            onChange={(e) => {
                                                setInputKraftstoff(e.value)
                                                setInputKraftstoffChanged(true);
                                            }}
                                            value={inputKraftstoffChanged == false ? brandName : marke1[0].label}
                                            placeholder={"Alle"}
                                            className="mt-1 mb-1"/>
                                    </div>
                                    <div className={classes.marginbottom}>
                                        <label className={classes.smalltext}>Erstzulassung</label>
                                        <div className={`${classes.halfselect} mt-1`}>
                                           <Select className={classes.halfselect1} options={van1} styles={halfSelectStyle1} placeholder="Von" />
                                           <Select className={classes.halfselect2} options={van2} styles={halfSelectStyle2} placeholder="Bis"/>
                                        </div>
                                        <div className={classes.marginbottom}></div>
                                        <label>Preis</label>
                                        <div className={`${classes.halfselect} mt-1`}>
                                            <Select className={classes.halfselect1} options={van1} styles={halfSelectStyle1} placeholder="Von"/>
                                           <Select className={classes.halfselect2} options={van2} styles={halfSelectStyle2} placeholder="Bis"/>
                                        </div>
                                    </div>
                                    <div className={classes.mgb}>
                                        <label>Land</label>
                                        <Select 
                                            styles={style}
                                            options={land}
                                            placeholder="Land"
                                            className='mt-1'
                                            />
                                    </div>
                                    <div className={classes.mgb}>
                                        <label>Stadt/PLZ</label>
                                        <div className={`${classes.locdiv} mt-1`}>
                                            <input className={classes.varientinput}  placeholder="z.B Wien oder 1010"/>
                                            <MyLocation className={classes.mylocation}/>
                                        </div>
                                    </div>
                                    <div className={classes.mgb}>
                                        <label>Umkreis (km)</label>
                                        <Select 
                                            styles={style}
                                            options={umk}
                                            placeholder="Umkreis"
                                            className='mt-1'
                                            />
                                    </div>
                                    <div className={`${classes.grnzcheck} ${classes.marginbottom}`} >
                                        <input id='grenz' className={classes.checkboxgiga} type={"checkbox"} />
                                        <label className={classes.colortext1} htmlFor="grenz">Grenzübergreifend</label>
                                    </div>
                                    <div className={`${classes.marginbottom}`}>
                                        <label>Kilometerstand</label>
                                        <div className={`${classes.halfselect} mt-1`}>
                                            <Select className={classes.halfselect1} options={van1} styles={halfSelectStyle1} placeholder="Von"/>
                                            <Select className={classes.halfselect2} options={van2} styles={halfSelectStyle2} placeholder="Bis"/>
                                        </div>
                                    </div>
                                    <div className={`${classes.flex} ${classes.marginbottom}`}>
                                        <div className={classes.flex1}>
                                            <label className='font-bold'>Leistung</label>
                                            <Select
                                            options={van1} 
                                            styles={style}
                                            onChange={(e) => {
                                                setInputKraftstoff(e.value)
                                                setInputKraftstoffChanged(true);
                                            }}
                                            value={inputKraftstoffChanged == false ? brandName : marke1[0].label}
                                            placeholder={"Alle"}
                                            className="mt-1 mb-1"
                                            />
                                        </div>
                                        <div className={`${classes.vonbisps}`}>
                                            <div className={classes.flex2}>
                                                <label className={classes.block}>Von</label>
                                                <input type={"number"} className={classes.numvonbis} placeholder="PS"/>
                                            </div>
                                            <div>
                                                <label className={classes.block}>Bis</label>
                                                <input type={"number"} className={classes.numvonbis} placeholder="PS" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className={`${classes.marginbottom}`}>
                                        <label>Getriebe</label>
                                        <Select 
                                            styles={style}
                                            options={getri}
                                            placeholder="Getriebe"
                                            className='mt-1 mb-1'
                                        />
                                    </div>
                                    <div className={`${classes.anzahltuerencontainer} ${classes.marginbottom}`}>
                                        <label className={classes.block}>Anzahl Türen</label>
                                        <div className={`${classes.flexverkaeuferart} mt-1`}>
                                        <div className={classes.verkaeuferart}>
                                                <div className={classes.checkcenter}>
                                                    <input id='turalle' type={"checkbox"} className={classes.varientinputsmaller} />
                                                    <label className='!font-normal cursor-pointer' htmlFor='turalle'>Alle</label>
                                                </div>
                                            </div>
                                            <div className={classes.verkaeuferart}>
                                                <div className={classes.checkcenter}>
                                                    <input id='tur23' type={"checkbox"} className={classes.varientinputsmaller} />
                                                    <label className='!font-normal cursor-pointer' htmlFor='tur23'>2/3</label>
                                                </div>
                                            </div>
                                            <div className={classes.verkaeuferart}>
                                                <div className={classes.checkcenter}>
                                                    <input id='tur45' type={"checkbox"} className={classes.varientinputsmaller} />
                                                    <label className='!font-normal cursor-pointer' htmlFor='tur45'>4/5</label>
                                                </div>
                                            </div>
                                            <div className={classes.verkaeuferart}>
                                                <div className={classes.checkcenter}>
                                                    <input id='tur67' type={"checkbox"} className={classes.varientinputsmaller} />
                                                    <label className='!font-normal cursor-pointer' htmlFor='tur67'>6/7</label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={classes.marginbottom}>
                                        <label>Sitzplätze</label>
                                        <div className={`${classes.halfselect} mt-1`}>
                                            <Select className={classes.halfselect1} options={van1} styles={halfSelectStyle1} placeholder="Von"/>
                                            <Select className={classes.halfselect2} options={van2} styles={halfSelectStyle2} placeholder="Bis"/>
                                        </div>
                                    </div>
                                    <div className={`${classes.mgb}`}>
                                        <label className={classes.block}>Verkäufer</label>
                                        <div className={classes.flexverkaeuferart}>
                                            <div className={classes.verkaeuferart}>
                                                <div className={classes.checkcenter}>
                                                    <input id='veralle' type={"checkbox"} className={classes.varientinputsmaller} />
                                                    <label className={`${classes.spantransformation} !font-normal text-sm ml-1 cursor-pointer`} htmlFor="veralle">Alle</label>
                                                </div>
                                            </div>
                                            <div className={classes.verkaeuferart}>
                                                <div className={classes.checkcenter}>
                                                    <input id='verhaendler' type={"checkbox"} className={classes.varientinputsmaller} />
                                                    <label className={`${classes.spantransformation} !font-normal text-sm ml-1 cursor-pointer`} htmlFor="verhaendler">Händler</label>
                                                </div>
                                            </div>
                                            <div className={classes.verkaeuferart}>
                                                <div className={classes.checkcenter}>
                                                    <input id='verprivat' type={"checkbox"} className={classes.varientinputsmaller} />
                                                    <label className={`${classes.spantransformation} !font-normal text-sm ml-1 cursor-pointer`} htmlFor="verprivat">Privat</label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={classes.fahrzeugzustandcontainer}>
                                        <label className='font-bold'>Fahrzeugzustand</label>
                                        <div>
                                            <input id='fahalle' type={"checkbox"} className={`${classes.varientinputsmaller} ${classes.transformtocenter} mb-2`}/>
                                            <label className={`text-sm ml-1 cursor-pointer`} htmlFor="fahalle">Alle</label>
                                        </div>
                                        <div>
                                            <input id='fahgeb' type={"checkbox"} className={`${classes.varientinputsmaller} ${classes.transformtocenter} mb-2`}/>
                                            <label className='text-sm ml-1 cursor-pointer' htmlFor="fahgeb">Gebraucht</label>
                                        </div>
                                        <div>
                                            <input id='fahjah' type={"checkbox"} className={`${classes.varientinputsmaller} ${classes.transformtocenter} mb-2`}/>
                                            <label className='text-sm ml-1 cursor-pointer' htmlFor="fahjah">Jahreswagen</label>
                                        </div>
                                        <div>
                                            <input id='fahvor' type={"checkbox"} className={`${classes.varientinputsmaller} ${classes.transformtocenter} mb-2`}/>
                                            <label className='text-sm ml-1 cursor-pointer' htmlFor="fahvor">Vorführwagen</label>
                                        </div>
                                        <div>
                                            <input id='fahtag' type={"checkbox"} className={`${classes.varientinputsmaller} ${classes.transformtocenter} mb-2`}/>
                                            <label className='text-sm ml-1 cursor-pointer' htmlFor="fahtag">Tageszulassung</label>
                                        </div>
                                    </div>
                                </div>
                           </div>
                            }
                        </div>
                        {/* AUSSTATTUNG */}
                        <div className={openAusstattung == true ? classes.sectioncontainer : classes.sectioncontainerclosed} onClick={() => {
                            if(openAusstattung == false){
                                setOpenAusstattung(true);
                            }
                        }}>
                            <div className={classes.headingcontainer} onClick={() => {
                            if(openAusstattung == true){
                                setOpenAusstattung(false);
                            }
                        }}>
                                <div className={classes.sectionheading}>AUSSTATTUNG</div>
                                <Expand className={openBasisdaten == false ? classes.openedExpand : classes.closedExpand}/>
                            </div>
                            {openAusstattung == true && <div className={classes.basiscontainer}>
                                <div className={classes.flexausstattung}>
                                    {/* {ausstattungsKriterienOpen == true && ausstattungList.map((item, index) => <div key={index} className={classes.ausstattung}>
                                        <input type={"checkbox"} className={classes.varientinputsmaller} onChange={() => {
                                            ausstattungList[index].selected = !ausstattungList[index].selected;
                                            console.log(item.selected)
                                        }}/>
                                        <span className={classes.value}>{item.value}</span>
                                    </div>)}
                                    {ausstattungsKriterienOpen == false && ausstattungList.map((item, index) => <div key={index} className={classes.ausstattung}>
                                        {item.selected == true ? <div className={classes.ausstattung}>
                                            <input type={"checkbox"} onChange={() => {
                                                console.log(ausstattungList[index].selected);
                                                ausstattungList[index].selected = true;
                                            }} checked={item.selected == true ? true : false} className={classes.varientinputsmaller}/>
                                            <span className={classes.value}>{item.value}</span>
                                        </div> : null}
                                        {console.log(item.selected)}
                                    </div>)} */}

                                    {ausstattungsKriterienOpen == true && ausstattungList.map((item, index) => <div key={index} className={classes.ausstattung}>
                                        <input type={"checkbox"} className={`${classes.varientinputsmaller} ${classes.makemid}`} />
                                        <span className={classes.value}>{item.value}</span>
                                    </div>)}
                                    {ausstattungsKriterienOpen == false && ausstattungList.map((item, index) => <div key={index} className={classes.ausstattung}>
                                        <div className={classes.ausstattung}>
                                            <input type={"checkbox"} className={`${classes.varientinputsmaller} ${classes.makemid}`} />
                                            <span className={classes.value}>{item.value}</span>
                                        </div>
                                        {console.log(ausstattungList)}
                                    </div>)}

                                    <div className={classes.ausblendencontainer} onClick={() => setAusstattungsKriterienOpen(d => !d)}>
                                        <RemoveCircle className={classes.removecircle} /> <span>{ausstattungsKriterienOpen == true ? "Ungenutzte Filter ausblenden" : "mehr Ausstattungskriterien"}</span>
                                    </div>
                                </div>
                            </div>
                            }
                    </div>
                            {/* FARBE */}
                        <div className={openFarbe == true ? classes.sectioncontainer : classes.sectioncontainerclosed} onClick={() => {
                            if(openFarbe == false){
                                setOpenFarbe(true);
                            }
                        }}>
                            <div className={classes.headingcontainer} onClick={() => {
                            if(openFarbe == true){
                                setOpenFarbe(false);
                            }
                        }}>
                                <div className={classes.sectionheading}>FARBE</div>
                                <Expand className={openFarbe == false ? classes.openedExpand : classes.closedExpand}/>
                            </div>
                            {openFarbe == true && <div className={classes.basiscontainer}>
                                <div>
                                    <label className={`${classes.fontsize13} font-semibold`}>Außenfarbe</label>
                                    <div className={classes.farben}>
                                        <div className={classes.farbencolumn}>
                                            <div>
                                                <input id='farsch' type={"checkbox"} className={`${classes.varientinputsmaller} ${classes.schwarz}`} />
                                                <label classlabelame={classes.colortext1} htmlFor="farsch">Schwarz</label>
                                            </div>
                                            <div>
                                                <input id='farbei' type={"checkbox"} className={`${classes.varientinputsmaller} ${classes.beige}`} />
                                                <label className={classes.colortext1} htmlFor="farbei">Beige</label>
                                            </div>
                                            <div>
                                                <input id='fargol' type={"checkbox"} className={`${classes.varientinputsmaller} ${classes.gold}`} />
                                                <label className={classes.colortext1} htmlFor="fargol">Gold</label>
                                            </div>
                                            <div>
                                                <input id='fargra' type={"checkbox"} className={`${classes.varientinputsmaller} ${classes.grau}`} />
                                                <label className={classes.colortext1} htmlFor="fargra">Grau</label>
                                            </div>
                                            <div>
                                                <input id='fargel' type={"checkbox"} className={`${classes.varientinputsmaller} ${classes.gelb}`} />
                                                <label className={classes.colortext1} htmlFor="fargel">Gelb</label>
                                            </div>
                                            <div>
                                                <input id='farrot' type={"checkbox"} className={`${classes.varientinputsmaller} ${classes.rot}`} />
                                                <label className={classes.colortext1} htmlFor="farrot">Rot</label>
                                            </div>
                                            <div>
                                                <input id='farsil' type={"checkbox"} className={`${classes.varientinputsmaller} ${classes.silber}`} />
                                                <label className={classes.colortext1} htmlFor="farsil">Silber</label>
                                            </div>
                                        </div>
                                        <div className={classes.farbencolumn2}>
                                            <div>
                                                <input id='farwei' type={"checkbox"} className={`${classes.varientinputsmaller} ${classes.weiss}`} />
                                                <label className={classes.colortext1} htmlFor="farwei">Weiss</label>
                                            </div>
                                            <div>
                                                <input id='farbla' type={"checkbox"} className={`${classes.varientinputsmaller} ${classes.blau}`} />
                                                <label className={classes.colortext1} htmlFor="farbla">Blau</label>
                                            </div>
                                            <div>
                                                <input id='farbra' type={"checkbox"} className={`${classes.varientinputsmaller} ${classes.braun}`} />
                                                <label className={classes.colortext1} htmlFor="farbra">Braun</label>
                                            </div>
                                            <div>
                                                <input id='farora' type={"checkbox"} className={`${classes.varientinputsmaller} ${classes.orange}`} />
                                                <label className={classes.colortext1} htmlFor="farora">Orange</label>
                                            </div>
                                            <div>
                                                <input id='farvio' type={"checkbox"} className={`${classes.varientinputsmaller} ${classes.violett}`} />
                                                <label className={classes.colortext1} htmlFor="farvio">Violett</label>
                                            </div>
                                            <div>
                                                <input id='fargru' type={"checkbox"} className={`${classes.varientinputsmaller} ${classes.gruen}`} />
                                                <label className={classes.colortext1} htmlFor="fargru">Grün</label>
                                            </div>
                                            <div>
                                                <input id='farbro' type={"checkbox"} className={`${classes.varientinputsmaller} ${classes.bronze}`} />
                                                <label className={classes.colortext1} htmlFor="farbro">Bronze</label>
                                            </div>
                                        </div>
                                    </div>
                                    <label className='text-sm font-semibold'>Lackierungsart</label>
                                    <div className={classes.colorrow}>
                                        <input type={"checkbox"} className={`${classes.varientinputsmaller} ${classes.weiss}`}/>
                                        <span className={classes.fontsize13}>Metallic</span>
                                    </div>
                                </div>
                            </div>}
                        </div>
                        {/* POLSTERFARBE */}
                        <div className={openPolsterFarbe == true ? classes.sectioncontainer : classes.sectioncontainerclosed} onClick={() => {
                            if(openPolsterFarbe == false){
                                setOpenPolsterFarbe(true);
                            }
                        }}>
                            <div className={classes.headingcontainer} onClick={() => {
                            if(openPolsterFarbe == true){
                                setOpenPolsterFarbe(false);
                            }
                        }}>
                                <div className={classes.sectionheading}>POLSTERFARBE</div>
                                <Expand className={openPolsterFarbe == false ? classes.openedExpand : classes.closedExpand}/>
                            </div>
                            {openPolsterFarbe == true && <div className={classes.basiscontainer}>
                                <div className={classes.polsterfarben}>
                                    <div className={classes.farbecol1}>
                                        <div>
                                            <input type={"checkbox"} className={`${classes.varientinputsmaller} ${classes.beige}`}/>
                                            <label>Beige</label>
                                        </div>
                                        <div>
                                            <input type={"checkbox"} className={`${classes.varientinputsmaller} ${classes.weiss}`}/>
                                            <label>Weiß</label>
                                        </div>
                                        <div>
                                            <input type={"checkbox"} className={`${classes.varientinputsmaller} ${classes.braun}`}/>
                                            <label>Braun</label>
                                        </div>
                                        <div className={classes.marginbottomnone}>
                                            <input type={"checkbox"} className={`${classes.varientinputsmaller} ${classes.gruen}`}/>
                                            <label>Grün</label>
                                        </div>
                                    </div>
                                    <div className={classes.farbecol2}>
                                        <div>
                                            <input type={"checkbox"} className={`${classes.varientinputsmaller} ${classes.blau}`}/>
                                            <label>Blau</label>
                                        </div>
                                        <div>
                                            <input type={"checkbox"} className={`${classes.varientinputsmaller} ${classes.schwarz}`}/>
                                            <label>Schwarz</label>
                                        </div>
                                        <div>
                                            <input type={"checkbox"} className={`${classes.varientinputsmaller} ${classes.grau}`}/>
                                            <label>Grau</label>
                                        </div>
                                        <div className={classes.marginbottomnone}>
                                            <input type={"checkbox"} className={`${classes.varientinputsmaller} ${classes.gelb}`}/>
                                            <label>Gelb</label>
                                        </div>
                                    </div>
                                    <div className={classes.farbecol3}>
                                        <div>
                                            <input type={"checkbox"} className={`${classes.varientinputsmaller} ${classes.orange}`}/>
                                            <label>Orange</label>
                                        </div>
                                        <div>
                                            <input type={"checkbox"} className={`${classes.varientinputsmaller} ${classes.rot}`}/>
                                            <label>Rot</label>
                                        </div>
                                        <div className={classes.marginbottomnone}>
                                            <input type={"checkbox"} className={`${classes.varientinputsmaller}`}/>
                                            <label>Sonstiges</label>
                                        </div>
                                    </div>
                                </div>
                                <label className={classes.materiallabel}>Material</label>
                                <div className={classes.materialcontainer}>
                                    <div>
                                        <input id='matalc' type={"checkbox"} className={classes.varientinputsmaller}/>
                                        <label className='text-sm ml-1 cursor-pointer' htmlFor='matalc'>Alcantara</label>
                                    </div>
                                    <div>
                                        <input id='matsto' type={"checkbox"} className={classes.varientinputsmaller}/>
                                        <label className='text-sm ml-1 cursor-pointer' htmlFor='matsto'>Stoff</label>
                                    </div>
                                    <div>
                                        <input id='matvol' type={"checkbox"} className={classes.varientinputsmaller}/>
                                        <label className='text-sm ml-1 cursor-pointer' htmlFor='matvol'>Vollleder</label>
                                    </div>
                                    <div>
                                        <input id='mattei' type={"checkbox"} className={classes.varientinputsmaller}/>
                                        <label className='text-sm ml-1 cursor-pointer' htmlFor='mattei'>Teilleder</label>
                                    </div>
                                    <div>
                                        <input id='matvel' type={"checkbox"} className={classes.varientinputsmaller}/>
                                        <label className='text-sm ml-1 cursor-pointer' htmlFor='matvel'>Velours</label>
                                    </div>
                                    <div>
                                        <input id='matson' type={"checkbox"} className={classes.varientinputsmaller}/>
                                        <label className='text-sm ml-1 cursor-pointer' htmlFor='matson'>Sonstiges</label>
                                    </div>
                                </div>
                            </div>}
                        </div>
                        {/* POLSTERFARBE */}
                        <div className={openFahrzeugzustand == true ? classes.sectioncontainer : classes.sectioncontainerclosed} onClick={() => {
                            if(openFahrzeugzustand == false){
                                setOpenFahrzeugzustand(true);
                            }
                        }}>
                            <div className={classes.headingcontainer} onClick={() => {
                            if(openFahrzeugzustand == true){
                                setOpenFahrzeugzustand(false);
                            }
                        }}>
                                <div className={classes.sectionheading}>FAHRZEUGZUSTAND</div>
                                <Expand className={openFahrzeugzustand == false ? classes.openedExpand : classes.closedExpand}/>
                            </div>
                            {openFahrzeugzustand == true && <div className={classes.basiscontainer}>
                                <div className={classes.marginbottom}>
                                    <label htmlFor='selfahrz' className={`${classes.fontsize13} ${classes.label}`}>Fahrzeughalter (max.)</label>
                                    <Select 
                                        styles={style}
                                        options={fahrz}
                                        placeholder="Nicht anzeigen"
                                        className='mt-1 mb-1'
                                        id='selfahrz'
                                        />
                                </div>
                                <div className={classes.marginbottom}>
                                    <label className={classes.fontsize13}>Unfallfahrzeug</label>
                                    <Select 
                                        styles={style}
                                        options={unfall}
                                        placeholder="Nicht anzeigen"
                                        className='mt-1 mb-1'
                                        />
                                </div>
                                <div className={`${classes.materialcontainer}`}>
                                    <div>
                                        <input id='matnic' type={"checkbox"} className={classes.varientinputsmaller}/>
                                        <label className='ml-1 text-sm cursor-pointer' htmlFor='matnic'>Nichtraucherfahrzeug</label>
                                    </div>
                                    <div>
                                        <input id='matgar' type={"checkbox"} className={classes.varientinputsmaller}/>
                                        <label className='ml-1 text-sm cursor-pointer' htmlFor='matgar'>Garantie</label>
                                    </div>
                                    <div>
                                        <input id='matsch' type={"checkbox"} className={classes.varientinputsmaller}/>
                                        <label className='ml-1 text-sm cursor-pointer' htmlFor='matsch'>Scheckhaftgepflegt</label>
                                    </div>
                                    <div>
                                        <input id='mather' type={"checkbox"} className={classes.varientinputsmaller}/>
                                        <label className='ml-1 text-sm cursor-pointer' htmlFor='mather'>Herstellerzertifizerung<div className={classes.belowtext}>(Technisch geprüfte{"\n"}Fahrzeuge mit Garantie)</div></label>
                                    </div>
                                </div>
                            </div>}
                        </div>
                        {/* UMWELT */}
                        <div className={openUmwelt == true ? classes.sectioncontainer : classes.sectioncontainerclosed} onClick={() => {
                            if(openUmwelt == false){
                                setOpenUmwelt(true);
                            }
                        }}>
                            <div className={classes.headingcontainer} onClick={() => {
                            if(openUmwelt == true){
                                setOpenUmwelt(false);
                            }
                        }}>
                                <div className={classes.sectionheading}>UMWELT</div>
                                <Expand className={openUmwelt == false ? classes.openedExpand : classes.closedExpand}/>
                            </div>
                            {openUmwelt == true && <div className={classes.basiscontainer}>
                                <div className={classes.marginbottom}>
                                    <label className='text-sm'>Schadstoffklasse (mind.)</label>
                                    <Select 
                                        styles={style}
                                        options={schads}
                                        placeholder="Alle"
                                        className='mt-1 mb-1'
                                        />
                                </div>
                                <div className={classes.marginbottom}>
                                    <label className='text-sm'>Feinstaubplakette (mind.)</label>
                                    <Select 
                                        styles={style}
                                        options={fahrz}
                                        placeholder="Alle"
                                        className='mt-1 mb-1'
                                        />
                                </div>
                                <div className={`${classes.materialcontainer}`}>
                                    <div>
                                        <input id='matruss' type={"checkbox"} className={classes.varientinputsmaller}/>
                                        <label className='!font-normal text-sm ml-1 cursor-pointer' htmlFor='matruss'>Rußpartikelfilter</label>
                                    </div>
                                </div>
                            </div>}
                        </div>
                        {/* ANGEBOTDETAILS */}
                        <div className={`${openAngebotDetails == true ? classes.sectioncontainer : classes.sectioncontainerclosed2} ${classes.noline}`} onClick={() => {
                            if(openAngebotDetails == false){
                                setOpenAngebotDetails(true);
                            }
                        }}>
                            <div className={classes.headingcontainer} onClick={() => {
                            if(openAngebotDetails == true){
                                setOpenAngebotDetails(false);
                            }
                        }}>
                                <div className={classes.sectionheading}>ANGEBOTDETAILS</div>
                                <Expand className={openAngebotDetails == false ? classes.openedExpand : classes.closedExpand}/>
                            </div>
                            {openAngebotDetails == true && <div className={classes.basiscontainer}>
                                <div>
                                    <label className='text-sm font-bold'>Online seit</label>
                                    <Select 
                                        styles={style}
                                        options={schads}
                                        placeholder="Alle"
                                        className='mt-1 mb-1'
                                        />
                                </div>
                                <div className={`${classes.materialcontainer} mt-2`}>
                                    <div>
                                        <input id='matmwst' type={"checkbox"} className={classes.varientinputsmaller}/>
                                        <label className='text-sm ml-1 cursor-pointer' htmlFor='matmwst'>MwST. ausweisbar</label>
                                    </div>
                                </div>
                            </div>}
                        </div>
                        
            </div>
            </div>
                <div className={classes.c2}>
                    <div className={classes.c2r1}>
                        <div className={classes.c2r1bottom}>
                            <div className={classes.direktsuchecontainer}>
                                <input type={"text"} className={classes.direktsuche} placeholder="Direktsuche" />
                                <button className={classes.suchenbtn}>SUCHEN</button>
                            </div>
                            <div className={classes.sortierungcontainer}>
                                <Select 
                                    styles={style}
                                    options={land}
                                    placeholder="Erweiterte Sortierung"
                                    className={classes.erweitertselect}
                                />
                                <div className={classes.view}>
                                    <ListView className={`${classes.listview} ${"mr-4"}`} onClick={() => setGridView(true)}/>
                                    <GridView className={` ${classes.gridview}`} onClick={() => setGridView(false)}/>
                                    <div className={`${gridView == true ? classes.viewleft : classes.viewright}`}></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={classes.c2r2}>
                            {gridView == true ? <div className={classes.carlistcontainer}>
                                {angebote.map((item, index) => <Angebot
                                    key={index}
                                    title={item.title}
                                    description="This is a long description, this is a long descriptionThis is a long description, this is a long descriptionThis is a long description, this is a long descriptionThis is a long description, this is a long descriptionThis is a long description, this is a long descriptionThis is a long description, this is a long descriptionThis is a long description, this is a long descriptionThis is a long description, this is a long descriptionThis is a long description, this is a long descriptionThis is a long description, this is a long descriptionThis is a long description, this is a long descriptionThis is a long description, this is a long descriptionThis is a long description, this is a long descriptionThis is a long description, this is a long descriptionThis is a long description, this is a long descriptionThis is a long description, this is a long descriptionThis is a long description, this is a long descriptionThis is a long description, this is a long descriptionThis is a long description, this is a long descriptionThis is a long description, this is a long descriptionThis is a long description, this is a long descriptionThis is a long description, this is a long descriptionThis is a long description, this is a long descriptionThis is a long description, this is a long descriptionThis is a long description, this is a long descriptionThis is a long description, this is a long description"
                                    price="€ 45.520,-"
                                    adNo="#123456789"
                                    start="01/01/2020"
                                    end="01/01/2020"
                                    imgSrc="/images/draft-card-img-car-1.png"
                                    cardView={gridView}
                                    details={
                                        {
                                            erstzulassung: "01/2022",
                                            kraftstoff: "Benzin",
                                            leistung: "125 PS",
                                            kilometerstand: "412.000 KM",
                                            getriebe: "Automatik",
                                            fahrzeugzustand: "Gebraucht",
                                        }
                                    }
                                    location = "2700 Wiener Neustadt | AT"
                                    companyname = "Gigant Group Teknoloji A.S"
                                />)}
                            </div> : <div className={`${classes.carlistcontainer} ${gridView == false && classes.cardviewwrapper}`}>
                                <span className={classes.mid}>
                                    {angebote.map((item, index) => <Angebot
                                        key={index}
                                        title={item.title}
                                        description="This is a long description, this is a long descriptionThis is a long description, this is a long descriptionThis is a long description, this is a long descriptionThis is a long description, this is a long descriptionThis is a long description, this is a long descriptionThis is a long description, this is a long descriptionThis is a long description, this is a long descriptionThis is a long description, this is a long descriptionThis is a long description, this is a long descriptionThis is a long description, this is a long descriptionThis is a long description, this is a long descriptionThis is a long description, this is a long descriptionThis is a long description, this is a long descriptionThis is a long description, this is a long descriptionThis is a long description, this is a long descriptionThis is a long description, this is a long descriptionThis is a long description, this is a long descriptionThis is a long description, this is a long descriptionThis is a long description, this is a long descriptionThis is a long description, this is a long descriptionThis is a long description, this is a long descriptionThis is a long description, this is a long descriptionThis is a long description, this is a long descriptionThis is a long description, this is a long descriptionThis is a long description, this is a long descriptionThis is a long description, this is a long description"
                                        price="€ 45.520,-"
                                        adNo="#123456789"
                                        start="01/01/2020"
                                        end="01/01/2020"
                                        imgSrc="/images/draft-card-img-car-1.png"
                                        cardView={gridView}
                                        details={
                                            {
                                                erstzulassung: "01/2022",
                                                kraftstoff: "Benzin",
                                                leistung: "125 PS",
                                                kilometerstand: "412.000 KM",
                                                getriebe: "Automatik",
                                                fahrzeugzustand: "Gebraucht",
                                            }
                                        }
                                        location = "2700 Wiener Neustadt | AT"
                                        companyname = "Gigant Group Teknoloji A.S"
                                        index={index}
                                    />)}
                                </span>
                            </div>}
                    </div>
                </div>
        </div>
    </div>
    </div>
    )
}

export default SearchResults;