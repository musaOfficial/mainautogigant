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
import PlusIcon from './../public/icons/ausstattungPlus.svg'
import Closex from './../public/closex.svg'
import PageSearch from './pagesearch/PageSearch';
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
import Angebot from './ui/ads/Angebot';
import Page from './pagesearch/PageSearch';

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
          fontSize: '13px',
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

    const [expanded, setExpanded] = useState(true);
    const [brandName, setBrandName] = useState({}); 
    const [varient, setVarient] = useState("");
    const [modelName, setModelName] = useState({});
    const [modelItems, setModelItems] = useState([]);

    const [brandSelected, setBrandSelected] = useState();

    const [modelInputValue, setModelInputValue] = useState();
    const [brandNameInputValue, setBrandNameInputValue] = useState();

    const anzahlAngebote = 5000;
    const displayAnzahlAngebote = anzahlAngebote.toLocaleString();

    const [filters, setFilters] = useState(["Österreich","Mercedes", "CLS 320","Österreichh","Mercedess", "CLS 3200"]);

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


    const bezahlteAngebote = [
        {
            preis: 213520,
            title: "Mercedes AMG GT",
            adNo: "#294873205",
            start: "01/01/2020",
            end: "01/01/2022",
            imgSrc: "/images/draft-card-img-car-1.png",
        },
    ]


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

    const [gigaInfoOpen, setGigaInfoOpen] = useState(false);
    const [gridView, setGridView] = useState(true);

    const [zweizonenKlima, setZweizonenKlima] = useState(false)
    const [dreizonenKlima, setDreizonenKlima] = useState(false)
    const [drei60kamera, setDrei60kamera] = useState(false)
    const [vierzonenKlima, setVierzonenKlima] = useState(false)
    const [ABS, setABS] = useState(false);
    const [abstandsTempomat, setAbstandsTempomat] = useState(false);
    const [abstandsWarner, setAbstandsWarner] = useState(false)
    const [airbagHinten, setAirbagHinten] = useState(false)
    const [alarmanlage, setAlarmanlage] = useState(false)
    const [allrad, setAllrad] = useState(false)
    const [allwetterReifen, setAllwetterReifen] = useState(false)
    const [alufelgen, setAlufelgen] = useState(false)
    const [ambientebeleuchtung, setAmbientebeleuchtung] = useState(false)
    const [androidauto, setAndroidauto] = useState(false)
    const [anhaengerkupplung, setAnhaengerkupplung] = useState(false)
    const [applecarplay, setApplecarplay] = useState(false)
    const [armlehne, setArmlehne] = useState(false)
    const [beheizbareFrontscheibe, setBeheizbareFrontscheibe] = useState(false)
    const [beheizbaresLenkrad, setBeheizbaresLenkrad] = useState(false)
    const [behindertenGerecht, setBehindertenGerecht] = useState(false)
    const [beifahrerairbag, setBeifahrerairbag] = useState(false)
    const [berganfahrassistent, setBerganfahrassistent] = useState(false)
    const [bixenonscheinwerfer, setBixenonscheinwerfer] = useState(false)
    const [biodieselumruestung, setBiodieselumruestung] = useState(false)
    const [blendfreiesFernlicht, setBlendfreiesFernlicht] = useState(false)
    const [bluethoot, setBluethoot] = useState(false)
    const [bordcomputer, setBordcomputer] = useState(false)
    const [cd, setCd] = useState(false)
    const [dabradio, setDabradio] = useState(false)
    const [dachreling, setDachreling] = useState(false)
    const [ezehngeeignet, setEzehngeeignet] = useState(false)
    const [einparkhilfe, setEinparkhilfe] = useState(false)
    const [einparkhilfeKamera, setEinparkhilfeKamera] = useState(false)
    const [einparkhilfeSelbst, setEinparkhilfeSelbst] = useState(false)
    const [einparkhilfeSensorenVorne, setEinparkhilfeSensorenVorne] = useState(false)
    const [einparkhilfeSensorenHinten, setEinparkhilfeSensorenHinten] = useState(false)
    const [elektrfensterheber, setElektrfensterheber] = useState(false)
    const [elektrsitzhinten, setElektrsitzhinten] = useState(false)
    const [elektrheckklappe, setElektrheckklappe] = useState(false)
    const [elektrseitenspiegel, setElektrseitenspiegel] = useState(false)
    const [elektrsitze, setElektrsitze] = useState(false)
    const [elektrparkbremse, setElektrparkbremse] = useState(false)
    const [esp, setEsp] = useState(false)
    const [fahrerairbag, setFahrerairbag] = useState(false)
    const [fernlichassistent, setFernlichassistent] = useState(false)
    const [freisprecheinrichtung, setFreisprecheinrichtung] = useState(false)
    const [gepaeckraum, setGepaeckraum] = useState(false)
    const [geschwindigkeitsbegrenz, setGeschwindigkeitsbegrenz] = useState(false)
    const [getonteScheiben, setGetonteScheiben] = useState(false)
    const [headupDisplay, setHeadupDisplay] = useState(false)
    const [induktionsladen, setInduktionsladen] = useState(false)
    const [innenspiegelauto, setInnenspiegelauto] = useState(false)
    const [isofix, setIsofix] = useState(false)
    const [katalysator, setKatalysator] = useState(false)
    const [klimaanlage, setKlimaanlage] = useState(false)
    const [klimaautomatik, setKlimaautomatik] = useState(false)
    const [kopfairbag, setKopfairbag] = useState(false)
    const [kurvenlicht, setKurvenlicht] = useState(false)
    const [laserlicht, setLaserlicht] = useState(false)
    const [ledscheinwerfer, setLedscheinwerfer] = useState(false)
    const [ledtagfahrlicht, setLedtagfahrlicht] = useState(false)
    const [lederausstattung, setLederausstattung] = useState(false)
    const [lederlenkrad, setLederlenkrad] = useState(false)
    const [lichtsensor, setLichtsensor] = useState(false)
    const [lordosenstuetze, setLordoesenstuetze] = useState(false)
    const [luftfederung, setLuftfederung] = useState(false)
    const [markise, setMarkise] = useState(false)
    const [massageSitze, setMassageSitze] = useState(false)
    const [mp3, setMp3] = useState(false)
    const [muedigkeitswarn, setMuedigkeitswarn] = useState(false)
    const [multifunktionslenkrad, setMultifunktionslenkrad] = useState(false)
    const [musikstreamingIntegriert, setMusikstreamingIntegriert] = useState(false)
    const [nachtsichtAssistent, setNachtsichtAssistent] = useState(false)
    const [navigationssystem, setNavigationssystem] = useState(false);
    const [nebelscheinwerfer, setNebelscheinwerfer] = useState(false);
    const [notbremsassistent, setNotbremsassistent] = useState(false);
    const [notrad, setNotrad] = useState(false);
    const [notrufsystem, setNotrufsystem] = useState(false);
    const [pannenkit, setPannenkit] = useState(false);
    const [panoramadach, setPanoramadach] = useState(false);
    const [radio, setRadio] = useState(false);
    const [raucherpaket, setRaucherpaket] = useState(false);
    const [rechtslenker, setRechtslenker] = useState(false);
    const [regensensor, setRegensensor] = useState(false);
    const [reichweitenverlaengerer, setReichweitenverlaengerer] = useState(false);
    const [reifendruckkontrollsystem, setReifendruckkontrollsystem] = useState(false);
    const [reserverad, setReserverad] = useState(false);
    const [schaltwippen, setSchaltwippen] = useState(false);
    const [scheinwerferreinigung, setScheinwerferreinigung] = useState(false);
    const [schiebedach, setSchiebedach] = useState(false);
    const [schiebetuer, setSchiebetuer] = useState(false);
    const [schieblinks, setSchieblinks] = useState(false);
    const [schiebrechts, setSchiebrechts] = useState(false);
    const [schluessellose, setSchluessellose] = useState(false);
    const [seitenairbag, setSeitenairbag] = useState(false);
    const [servolenkung, setServolenkung] = useState(false);
    const [sitzbelueftung, setSitzbelueftung] = useState(false);
    const [sitzheizung, setSitzheizung] = useState(false);
    const [skisack, setSkisack] = useState(false);
    const [sommerreifen, setSommerreifen] = useState(false);
    const [soundsystem, setSoundsystem] = useState(false);
    const [spoiler, setSpoiler] = useState(false);
    const [sportfahrwerk, setSportfahrwerk] = useState(false);
    const [sportpaket, setSportpaket] = useState(false);
    const [sportsitze, setSportsitze] = useState(false);
    const [sprachsteuerung, setSprachsteuerung] = useState(false);
    const [spurhalteassistent, setSpurhalteassistent] = useState(false);
    const [stahlfelgen, setStahlfelgen] = useState(false);
    const [standheizung, setStandheizung] = useState(false);
    const [startstopauto, setStartstopauto] = useState(false);
    const [tagfahrlicht, setTagfahrlicht] = useState(false);
    const [taximietwage, setTaximietwagen] = useState(false);
    const [teilbruecksitzbank, setTeilbruecksitzbank] = useState(false);
    const [tempomat, setTempomat] = useState(false);
    const [totwinkelAssistent, setTotwinkelAssitent] = useState(false);
    const [touchscreen, setTouchscreen] = useState(false);
    const [traktionskontrolle, setTraktionskontrolle] = useState(false);
    const [tuning, setTuning] = useState(false);
    const [tv, setTv] = useState(false);
    const [umklappbeifahrer, setUmklappbeifahrer] = useState(false);
    const [usb, setUsb] = useState(false);
    const [verkehrszeichenErkennung, setVerkehrszeichenErkennung] = useState(false);
    const [vollledscheinwerfer, setVollledscheinwerfer] = useState(false);
    const [volldigitalesKombiinstrument, setVolldigitalesKombiinstrument] = useState(false);
    const [wlan, setWlan] = useState(false);
    const [wegfahrsperre, setWegfahrsperre] = useState(false);
    const [windschott, setWindschott] = useState(false);
    const [winterpaket, setWinterpaket] = useState(false);
    const [winterreifen, setWinterreifen] = useState(false);
    const [xenonscheinwerfer, setXenonscheinwerfer] = useState(false);
    const [zentralverriegelung, setZentralverriegelung] = useState(false);
    const [zentralFunkfern, setZentralFunkfern] = useState(false);
    
    function handleDeleteFilter(index){
        var reducedFilters = [...filters];
        reducedFilters.splice(index, 1);
        setFilters(reducedFilters);
    }

    return (
        <div className={`${classes.container} ${openAusstattung == true && "overflow-y-hidden"}`}>
                {openAusstattung == true && <div className={classes.ausstattungContainer} >
                    <Closex className={classes.closex} onClick={() => setOpenAusstattung(false)} />
                    <div className={classes.ausstattungencon}>
                        <div>
                            <input className={`${classes.varientinputsmaller} cursor-pointer`} id="zweizoneklima" type="checkbox" checked={zweizonenKlima} onChange={() => setZweizonenKlima(d => !d)} />
                            <span className='ml-2' htmlFor="zweizoneklima" >2-Zonen-Klimaautomatik</span>
                        </div>
                        <div>
                            <input className={`${classes.varientinputsmaller} cursor-pointer`} id="ABS" type="checkbox" checked={ABS} onChange={() => setABS(d => !d)} />
                            <span className='ml-2' htmlFor="ABS" >ABS</span>
                        </div>
                        <div>
                            <input className={`${classes.varientinputsmaller} cursor-pointer`} id="ABS" type="checkbox" checked={ABS} onChange={() => setABS(d => !d)} />
                            <span className='ml-2' htmlFor="ABS" >ABS</span>
                        </div>
                        <div>
                            <input className={`${classes.varientinputsmaller} cursor-pointer`} id="ABS" type="checkbox" checked={ABS} onChange={() => setABS(d => !d)} />
                            <span className='ml-2' htmlFor="ABS" >ABS</span>
                        </div>
                        <div>
                            
                        </div>
                    </div>
                </div>}
               
            <div className={`${classes.contentcontainer} overflow-y-hidden relative w-10/12 lg:w-full max-w-ag-container md:!w-full mx-auto flex lg:flex-col bg-white p-6`}>
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
                            {filters.map((filter, index) => <div key={index} className={classes.filter}>{filter}<DelX onClick={(e) => {
                                handleDeleteFilter(index);
                            }} className={classes.delx}/></div>)}
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
                                    <input id='gigacheckbox' className={classes.checkboxgiga} type={"checkbox"} />
                                    <label className='cursor-pointer' htmlFor='gigacheckbox'>
                                     <img className={classes.gigadraftimg} src={"/images/draft-card-giga-logo.png"} />
                                    </label>
                                    <img src={"/images/info.svg"} onMouseOver={() => setGigaInfoOpen(true)} onMouseLeave={() => setGigaInfoOpen(false)} />
                                    {gigaInfoOpen == true && <div className={classes.gigaexplanation}>
                                        <div className={classes.triangle}></div>
                                        Lorem ipsum dolor sit Amet, InsecteturLorem
                                    </div>}
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
                                    <div className={`${classes.mgb} ${classes.marginbottom}`}>
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
                                    <div className={`${classes.fahrzeugzustandcontainer}`}>
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
                        <div className={classes.ausstattung} onClick={() => setOpenAusstattung(true)}>
                            <span className=''>AUSSTATTUNG</span><PlusIcon className={classes.plusicon} />
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
                                                <label className={classes.colortext1} htmlFor="farsch">Schwarz</label>
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
                            </div>
                        </div>
                        <div className={classes.view}>
                            <ListView className={`${classes.listview} ${gridView == true && classes.viewactive} ${"mr-4"}`} onClick={() => setGridView(true)}/>
                            <GridView className={` ${classes.gridview} ${gridView == false && classes.viewactive} `} onClick={() => setGridView(false)}/>
                        </div>
                    </div>
                    <div className={`${classes.c2r2}`}>
                            <div className={`${gridView == true ? classes.carlistcontainer : classes.gridlayout} `}>
                                {bezahlteAngebote.map((item, index) => <div key={index} className={gridView == true ? classes.sponsored : classes.sponsorcard}>
                                    <Angebot 
                                        title={"Sponsored"}
                                        description="This is a long description, this is a long descriptionThis is a long description, this is a long descriptionThis is a long description, this is a long descriptionThis is a long description, this is a long descriptionThis is a long description, this is a long descriptionThis is a long description, this is a long descriptionThis is a long description, this is a long descriptionThis is a long description, this is a long descriptionThis is a long description, this is a long descriptionThis is a long description, this is a long descriptionThis is a long description, this is a long descriptionThis is a long description, this is a long descriptionThis is a long description, this is a long descriptionThis is a long description, this is a long descriptionThis is a long description, this is a long descriptionThis is a long description, this is a long descriptionThis is a long description, this is a long descriptionThis is a long description, this is a long descriptionThis is a long description, this is a long descriptionThis is a long description, this is a long descriptionThis is a long description, this is a long descriptionThis is a long description, this is a long descriptionThis is a long description, this is a long descriptionThis is a long description, this is a long descriptionThis is a long description, this is a long descriptionThis is a long description, this is a long description"
                                        price="€ 45.520,-"
                                        adNo="#123456789"
                                        start="01/01/2020"
                                        end="01/01/2020"
                                        imgSrc="/images/draft-card-img-car-1.png"
                                        cardView={gridView == true}
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
                                    />
                                    <div className={gridView == true ? classes.werbeanzeige : classes.werbeanzeigecard}>Werbeanzeige</div >
                                </div>)}
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
                            </div>
                    </div>
                    <div className={classes.c2r3}>
                        <PageSearch totalAds={anzahlAngebote} />
                    </div>
                </div>
        </div>
    </div>
    </div>
    )
}

export default SearchResults;