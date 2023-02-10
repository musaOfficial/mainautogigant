import classes from './SearchResults.module.css';
import Image from 'next/image';
import { useState } from 'react';
import Expand from './../public/expand.svg'
import InputSelect from './ui/InputSelect';
import Select from "react-select";
import AddCircle from './../public/images/add_circle.svg'
import MyLocation from './../public/images/my_location.svg'
import RemoveCircle from './../public/images/remove_circle.svg'
import Question from './../public/question.svg';
import SearchIcon from './../public/searchicon.svg';
import GridView from './../public/gridview.svg';
import ListView from './../public/listview.svg';
import AdCard from './dashboard/ads/AdCard';
import PlusIcon from './../public/icons/ausstattungPlus.svg'
import DelX from './../public/images/closedetail.svg';
import Closex from './../public/closex.svg'
import PageSearch from './pagesearch/PageSearch';
import HomeMenu from './../public/homemenu.svg';
import CloseMenu from './../public/menuclose.svg';
import Menu from './../public/menu.svg';
import { useEffect } from 'react';
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
import ListCard from './cards/ListCard';

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

function SearchResults(){

    const [width, height] = useDeviceSize();

    const [bezahlteAngebote, setBezahlteAngebote] = useState([
        {
            id: "sköafjasökldc",
            preis: 500,
            title: "Mercedes AMG GT",
            adNo: "#294873205",
            start: "01/01/2020",
            end: "01/01/2022",
            imgSrc: "/images/draft-card-img-car-1.png",
            details: {
                erstzulassung: "11.04.2018",
                kraftstoff: "Diesel",
                leistung: "200 PS",
                kilometerstand: 1200,
                fahrzeugzustand: "Neu",
                getriebe: "Halbautomatik",
                seller: true,
            },
            location: "Österreich, 2700 Wiener Neustadt",
            companyname: "Gigant Group Teknoloji A.S",
            gigalabel: true,
            colorad: true,
        },
    ]);

    const [angebote, setAngebote] = useState([
        {
            id: "sköafjasökldc",
            preis: 500,
            title: "Mercedes AMG GT",
            adNo: "#294873205",
            start: "01/01/2020",
            end: "01/01/2022",
            imgSrc: "/images/draft-card-img-car-1.png",
            location: "Österreich, 2700 Wiener Neustadt",
            description: "4.2 FSI quattro * ABT KOMPRESSOR, 20",
            companyname: "Gigant Group Teknoloji A.S",
            baujahr: "01/2022",
            ps: 120,
            kmStand: 412000,
            getriebe: "Automatik",
            gigalabel: true,
            colorad: true,
        },
        {
            id: "sköafjasökldc",
            seller: "Händler",
            preis: 213520,
            title: "Mercedes AMG GT",
            adNo: "#294873205",
            imgSrc: "/images/draft-card-img-car-1.png",
            description: "4.2 FSI quattro * ABT KOMPRESSOR, 20",
            baujahr: "01/2022",
            ps: 120,
            kmStand: 412000,
            getriebe: "Automatik",


            location: "Österreich, 2700 Wiener Neustadt",
            gigalabel: true,
            colorad: true,
        },
    ]);

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
    const [achtFachBereift, setAchtFachBereift] = useState(false);
    const [kollisionsWarner, setKollisionsWarner] = useState(false);
    const [komfortFahrwerk, setKomfortFahrwerk] = useState(false);
    const [rueckfahrkamera, setRueckfahrkamera] = useState(false);
    const [asr, setAsr] = useState(false);
    const [leasingfaehigkeit, setLeasingfaehigkeit] = useState(false);
    const [schisack, setSchisack] = useState(false);
    const [automatischeHeckklappe, setAutomatischeHeckklappe] = useState(false);
    const [serviceGepflegt, setServiceGepflegt] = useState(false);
    const [lenkradheizung, setLenkradheizung] = useState(false);
    const [sperrdifferential, setSperrdifferential] = useState(false);
    const [dachgepaecktraeger, setDachgepaecktraeger] = useState(false);
    const [metallicLackierung, setMetalliclackierung] = useState(false);
    const [mittelarmlehne, setMittelarmlehne] = useState(false);
    const [stabilitaetsprogramme, setStabilitaetsprogramme] = useState(false);
    const [mwstAusweisbar, setMwstAusweisbar] = useState(false);
    const [teilAutonomesFahren, setTeilAutonomesFahren] = useState(false);
    const [nichtraucherfahrzeug, setNichtraucherFahrzeug] = useState(false);
    const [parkhilfesensorenHintenUndVorne, setParkhilfesensorenHintenUndVorne] = useState(false);
    
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

    function handleDeleteFilter(index){
        var reducedFilters = [...filters];
        reducedFilters.splice(index, 1);
        setFilters(reducedFilters);
    }


    // Suchbegriff ist der Suchinput
    const [suchbegriff, setSuchbegriff] = useState();
    
    const sortOptions = [
        {label: 'Neueste', value: 'latest'},
        {label: 'Älteste', value: 'oldest'},
        {label: 'Preis aufsteigend', value: 'priceAscending'},
        {label: 'Preis absteigend', value: 'priceDescending'},
        {label: 'Entfernung', value: 'distance'},
        {label: 'Beliebtheit', value: 'popularity'},
    ];

    const [sortOption, setSortOption] = useState();
    
    const [filterOpen, setFilterOpen] = useState(false);

    return (
        <div className={`${classes.container} ${openAusstattung == true && "overflow-y-hidden"}`}>
                {openAusstattung == true && <div className={classes.ausstattungContainer} >
                    <Closex className={classes.closex} onClick={() => setOpenAusstattung(false)} />
                    <div className={classes.ausstattungencon}>
                    <label className={classes.checkboxname}>
                    <input type={"checkbox"} checked={achtFachBereift} onChange={() => setAchtFachBereift(d => !d)} className="mr-2" />
                    8-fach Bereift
                </label>
                <label className={classes.checkboxname}>
                    <input type={"checkbox"} checked={klimaanlage} onChange={() => setKlimaanlage(d => !d)} className="mr-2" />
                    Klimaanlage
                </label>
                <label className={classes.checkboxname}>
                    <input type={"checkbox"}checked={parkhilfesensorenHintenUndVorne} onChange={() => {
                        setParkhilfesensorenHintenUndVorne(d => !d)
                        }} className="mr-2" />
                    Parksensor vorne & hinten
                </label>
                <label className={classes.checkboxname}>
                    <input type={"checkbox"} checked={ABS} onChange={() => {
                        setABS(d => !d)
                        }} className="mr-2" />
                    ABS
                </label>
                <label className={classes.checkboxname}>
                    <input type={"checkbox"} checked={klimaautomatik} onChange={() => {
                        setKlimaautomatik(d => !d);
                        }} className="mr-2" />
                    Klimaautomatik
                </label>
                <label className={classes.checkboxname}>
                    <input type={"checkbox"} checked={radio} onChange={() => {
                        setRadio(d => !d)
                        }} className="mr-2" />
                    Radio
                </label>
                <label className={classes.checkboxname}>
                    <input type={"checkbox"} checked={abstandsTempomat} onChange={() => {
                        setAbstandsTempomat(d => !d)
                        }} className="mr-2" />
                    Abstandstempomat
                </label>
                <label className={classes.checkboxname}>
                    <input type={"checkbox"} checked={kollisionsWarner} onChange={() => {
                        setKollisionsWarner(d => !d)
                        }} className="mr-2" />
                    Kollisionswarner
                </label>
                <label className={classes.checkboxname}>
                    <input type={"checkbox"} checked={regensensor} onChange={() => {
                        setRegensensor(d => !d)
                        }} className="mr-2" />
                    Regensensor
                </label>
                <label className={classes.checkboxname}>
                    <input type={"checkbox"} checked={alarmanlage} onChange={() => {
                        setAlarmanlage(d => !d)
                        }} className="mr-2" />
                    Alarmanlage
                </label>
                <label className={classes.checkboxname}>
                    <input type={"checkbox"} checked={komfortFahrwerk} onChange={() => {
                        setKomfortFahrwerk(d => !d)
                        }} className="mr-2" />
                    Komfortfahrwerk
                </label>
                <label className={classes.checkboxname}>
                    <input type={"checkbox"} checked={reifendruckkontrollsystem} onChange={() => {
                        setReifendruckkontrollsystem(d => !d)
                        }} className="mr-2" />
                    Reifendrucksensor
                </label>
                <label className={classes.checkboxname}>
                    <input type={"checkbox"} checked={androidauto} onChange={() => {
                        setAndroidauto(d => !d)
                        }} className="mr-2" />
                    Android Auto
                </label>
                <label className={classes.checkboxname}>
                    <input type={"checkbox"} checked={kopfairbag} onChange={() => {
                        setKopfairbag(d => !d)
                        }} className="mr-2" />
                    Kopfairbags
                </label>
                <label className={classes.checkboxname}>
                    <input type={"checkbox"} checked={rueckfahrkamera} onChange={() => {
                        setRueckfahrkamera(d => !d)
                        }} className="mr-2" />
                    Rückfahrkamera
                </label>
                <label className={classes.checkboxname}>
                    <input type={"checkbox"} checked={anhaengerkupplung} onChange={() => {
                        setAnhaengerkupplung(d => !d)
                        }} className="mr-2" />
                    Anhängerkupplung
                </label>
                <label className={classes.checkboxname}>
                    <input type={"checkbox"} checked={kurvenlicht} onChange={() => {
                        setKurvenlicht(d => !d)
                        }} className="mr-2" />
                    Kurvenfahrlicht
                </label>
                <label className={classes.checkboxname}>
                    <input type={"checkbox"} checked={schaltwippen} onChange={() => {
                        setSchaltwippen(d => !d)
                        }} className="mr-2" />
                    Schaltwippen
                </label>
                <label className={classes.checkboxname}>
                    <input type={"checkbox"} checked={asr} onChange={() => {
                        setAsr(d => !d)
                        }} className="mr-2" />
                    Antriebsschlupfregelung(ASR)
                </label>
                <label className={classes.checkboxname}>
                    <input type={"checkbox"} checked={laserlicht} onChange={() => {
                        setLaserlicht(d => !d)
                        }} className="mr-2" />
                    Laserlicht
                </label>
                <label className={classes.checkboxname}>
                    <input type={"checkbox"} checked={schiebedach} onChange={() => {
                        setSchiebedach(d => !d)
                        }} className="mr-2" />
                    Schiebedach
                </label>
                <label className={classes.checkboxname}>
                    <input type={"checkbox"} checked={applecarplay} onChange={() => {
                        setApplecarplay(d => !d)
                        }} className="mr-2" />
                    Apple CarPlay
                </label>
                <label className={classes.checkboxname}>
                    <input type={"checkbox"} checked={leasingfaehigkeit} onChange={() => {
                        setLeasingfaehigkeit(d => !d)
                        }} className="mr-2" />
                    Leasingfähigkeit
                </label>
                <label className={classes.checkboxname}>
                    <input type={"checkbox"} checked={schisack} onChange={() => {
                        setSchisack(d => !d)
                        }} className="mr-2" />
                    Schisack
                </label>
                <label className={classes.checkboxname}>
                    <input type={"checkbox"} checked={automatischeHeckklappe} onChange={() => {
                        setAutomatischeHeckklappe(d => !d)
                        }} className="mr-2" />
                    Aut. Heckklappe
                </label>
                <label className={classes.checkboxname}>
                    <input type={"checkbox"} checked={ledscheinwerfer} onChange={() => {
                        setLedscheinwerfer(d => !d)
                        }} className="mr-2" />
                    LED-Scheinwerfer
                </label> 
                <label className={classes.checkboxname}>
                    <input type={"checkbox"} checked={seitenairbag} onChange={() => {
                        setSeitenairbag(d => !d)
                        }} className="mr-2" />
                    Seitenairbags
                </label>  
                <label className={classes.checkboxname}>
                    <input type={"checkbox"} checked={behindertenGerecht} onChange={() => {
                        setBehindertenGerecht(d => !d)
                        }} className="mr-2" />
                    Behindertengerecht
                </label>  
                <label className={classes.checkboxname}>
                    <input type={"checkbox"} checked={lederausstattung} onChange={() => {
                        setLederausstattung(d => !d)
                        }} className="mr-2" />
                    Lederausstattung
                </label>  
                <label className={classes.checkboxname}>
                    <input type={"checkbox"} checked={serviceGepflegt} onChange={() => {
                        setServiceGepflegt(d => !d)
                        }} className="mr-2" />
                    Servicegepflegt
                </label>  
                <label className={classes.checkboxname}>
                    <input type={"checkbox"} checked={beifahrerairbag} onChange={() => {
                        setBeifahrerairbag(d => !d)
                        }} className="mr-2" />
                    Beifahrerairbags
                </label>  
                <label className={classes.checkboxname}>
                    <input type={"checkbox"} checked={lederlenkrad} onChange={() => {
                        setLederlenkrad(d => !d)
                        }} className="mr-2" />
                    Lederlenkrad
                </label>  
                <label className={classes.checkboxname}>
                    <input type={"checkbox"} checked={servolenkung} onChange={() => {
                        setServolenkung(d => !d)
                        }} className="mr-2" />
                    Servolenkung
                </label>  
                <label className={classes.checkboxname}>
                    <input type={"checkbox"} checked={bluethoot} onChange={() => {
                        setBluethoot(d => !d)
                        }} className="mr-2" />
                    Bluethoot / USB
                </label>  
                <label className={classes.checkboxname}>
                    <input type={"checkbox"} checked={alufelgen} onChange={() => {
                        setAlufelgen(d => !d)
                        }} className="mr-2" />
                    Leichtmetall-/Alufelgen
                </label>  
                <label className={classes.checkboxname}>
                    <input type={"checkbox"} checked={sitzheizung} onChange={() => {
                        setSitzheizung(d => !d)
                        }} className="mr-2" />
                    Sitzheizung
                </label>  
                <label className={classes.checkboxname}>
                    <input type={"checkbox"} checked={bordcomputer} onChange={() => {
                        setBordcomputer(d => !d)
                        }} className="mr-2" />
                    Bordcomputer
                </label>  
                <label className={classes.checkboxname}>
                    <input type={"checkbox"} checked={lenkradheizung} onChange={() => {
                        setLenkradheizung(d => !d)
                        }} className="mr-2" />
                    Lenkradheizung
                </label>  
                <label className={classes.checkboxname}>
                    <input type={"checkbox"} checked={sperrdifferential} onChange={() => {
                        setSperrdifferential(d => !d)
                        }} className="mr-2" />
                    Sperrdifferential
                </label>  
                <label className={classes.checkboxname}>
                    <input type={"checkbox"} checked={cd} onChange={() => {
                        setCd(d => !d)
                        }} className="mr-2" />
                    CD Player
                </label>  
                <label className={classes.checkboxname}>
                    <input type={"checkbox"} checked={lichtsensor} onChange={() => {
                        setLichtsensor(d => !d)
                        }} className="mr-2" />
                    Lichtsensor
                </label>  
                <label className={classes.checkboxname}>
                    <input type={"checkbox"} checked={sportfahrwerk} onChange={() => {
                        setSportfahrwerk(d => !d)
                        }} className="mr-2" />
                    Sportfahrwerk
                </label>  
                <label className={classes.checkboxname}>
                    <input type={"checkbox"} checked={dachgepaecktraeger} onChange={() => {
                        setDachgepaecktraeger(d => !d)
                        }} className="mr-2" />
                    Dachgepäckträger
                </label>  
                <label className={classes.checkboxname}>
                    <input type={"checkbox"} checked={lordosenstuetze} onChange={() => {
                        setLordoesenstuetze(d => !d)
                        }} className="mr-2" />
                    Lordosenstütze
                </label>  
                <label className={classes.checkboxname}>
                    <input type={"checkbox"} checked={sportpaket} onChange={() => {
                        setSportpaket(d => !d)
                        }} className="mr-2" />
                    Sportpaket
                </label>  
                <label className={classes.checkboxname}>
                    <input type={"checkbox"} checked={dachreling} onChange={() => {
                        setDachreling(d => !d)
                        }} className="mr-2" />
                    Dachreling
                </label>  
                <label className={classes.checkboxname}>
                    <input type={"checkbox"} checked={mp3} onChange={() => {
                        setMp3(d => !d)
                        }} className="mr-2" />
                    Media-Interface / mp3
                </label>  
                <label className={classes.checkboxname}>
                    <input type={"checkbox"} checked={sportsitze} onChange={() => {
                        setSportsitze(d => !d)
                        }} className="mr-2" />
                    Sportsitze
                </label>  
                <label className={classes.checkboxname}>
                    <input type={"checkbox"} checked={einparkhilfe} onChange={() => {
                        setEinparkhilfe(d => !d)
                        }} className="mr-2" />
                    Einparkhilfe
                </label>  
                <label className={classes.checkboxname}>
                    <input type={"checkbox"} checked={metallicLackierung} onChange={() => {
                        setMetalliclackierung(d => !d)
                        }} className="mr-2" />
                    Metallic-Lackierung
                </label>  
                <label className={classes.checkboxname}>
                    <input type={"checkbox"} checked={spurhalteassistent} onChange={() => {
                        setSpurhalteassistent(d => !d)
                        }} className="mr-2" />
                    Spurhalteassistent
                </label>  
                <label className={classes.checkboxname}>
                    <input type={"checkbox"} checked={elektrfensterheber} onChange={() => {
                        setElektrfensterheber(d => !d)
                        }} className="mr-2" />
                    elektr. Fensterheber
                </label>  
                <label className={classes.checkboxname}>
                    <input type={"checkbox"} checked={mittelarmlehne} onChange={() => {
                        setMittelarmlehne(d => !d)
                        }} className="mr-2" />
                    Mittelarmlehne
                </label>  
                <label className={classes.checkboxname}>
                    <input type={"checkbox"} checked={stabilitaetsprogramme} onChange={() => {
                        setStabilitaetsprogramme(d => !d)
                        }} className="mr-2" />
                    Stabilitätsprogramme
                </label>  
                <label className={classes.checkboxname}>
                    <input type={"checkbox"} checked={elektrsitze} onChange={() => {
                        setElektrsitze(d => !d)
                        }} className="mr-2" />
                    elektr. Sitze
                </label>  
                <label className={classes.checkboxname}>
                    <input type={"checkbox"} checked={multifunktionslenkrad} onChange={() => {
                        setMultifunktionslenkrad(d => !d)
                        }} className="mr-2" />
                    Multifunktionslenkrad
                </label>  
                <label className={classes.checkboxname}>
                    <input type={"checkbox"} checked={standheizung} onChange={() => {
                        setStandheizung(d => !d)
                        }} className="mr-2" />
                    Standheizung
                </label>  
                <label className={classes.checkboxname}>
                    <input type={"checkbox"} checked={elektrseitenspiegel} onChange={() => {
                        setElektrseitenspiegel(d => !d)
                        }} className="mr-2" />
                    elektr. Spiegel
                </label>  
                <label className={classes.checkboxname}>
                    <input type={"checkbox"} checked={mwstAusweisbar} onChange={() => {
                        setMwstAusweisbar(d => !d)
                        }} className="mr-2" />
                    MwSt. ausweisbar
                </label>  
                <label className={classes.checkboxname}>
                    <input type={"checkbox"} checked={startstopauto} onChange={() => {
                        setStartstopauto(d => !d)
                        }} className="mr-2" />
                    Start/Stopp-Automatik
                </label>  
                <label className={classes.checkboxname}>
                    <input type={"checkbox"} checked={fahrerairbag} onChange={() => {
                        setFahrerairbag(d => !d)
                        }} className="mr-2" />
                    Fahrerairbag
                </label>  
                <label className={classes.checkboxname}>
                    <input type={"checkbox"} checked={navigationssystem} onChange={() => {
                        setNavigationssystem(d => !d)
                        }} className="mr-2" />
                    Navigationssystem
                </label>  
                <label className={classes.checkboxname}>
                    <input type={"checkbox"} checked={tagfahrlicht} onChange={() => {
                        setTagfahrlicht(d => !d)
                        }} className="mr-2" />
                    Tagfahrlicht
                </label>  
                <label className={classes.checkboxname}>
                    <input type={"checkbox"} checked={fernlichassistent} onChange={() => {
                        setFernlichassistent(d => !d)
                        }} className="mr-2" />
                    Fernlichtassistent
                </label>  
                <label className={classes.checkboxname}>
                    <input type={"checkbox"} checked={nebelscheinwerfer} onChange={() => {
                        setNebelscheinwerfer(d => !d)
                        }} className="mr-2" />
                    Nebelscheinwerfer
                </label>  
                <label className={classes.checkboxname}>
                    <input type={"checkbox"} checked={teilAutonomesFahren} onChange={() => {
                        setTeilAutonomesFahren(d => !d)
                        }} className="mr-2" />
                    Teilautonomes Fahren
                </label>  
                <label className={classes.checkboxname}>
                    <input type={"checkbox"} checked={freisprecheinrichtung} onChange={() => {
                        setFreisprecheinrichtung(d => !d)
                        }} className="mr-2" />
                    Freisprecheinrichtung
                </label>
                <label className={classes.checkboxname}>
                    <input type={"checkbox"} checked={nichtraucherfahrzeug} onChange={() => {
                        setNichtraucherFahrzeug(d => !d)
                        }} className="mr-2" />
                    Nichtraucherfahrzeug
                </label>  
                <label className={classes.checkboxname}>
                    <input type={"checkbox"} checked={tempomat} onChange={() => {
                        setTempomat(d => !d)
                        }} className="mr-2" />
                    Tempomat
                </label>  
                <label className={classes.checkboxname}>
                    <input type={"checkbox"} checked={beheizbareFrontscheibe} onChange={() => {
                        setBeheizbareFrontscheibe(d => !d)
                        }} className="mr-2" />
                    Frontscheibenheizung
                </label>  
                <label className={classes.checkboxname}>
                    <input type={"checkbox"} checked={notbremsassistent} onChange={() => {
                        setNotbremsassistent(d => !d)
                        }} className="mr-2" />
                    Notbremsassistent
                </label>  
                <label className={classes.checkboxname}>
                    <input type={"checkbox"} checked={totwinkelAssistent} onChange={() => {
                        setTotwinkelAssitent(d => !d)
                        }} className="mr-2" />
                    Totwinkelassistent
                </label>  
                <label className={classes.checkboxname}>
                    <input type={"checkbox"} checked={induktionsladen} onChange={() => {
                        setInduktionsladen(d => !d)
                        }} className="mr-2" />
                    Handy induktiv laden
                </label>  
                <label className={classes.checkboxname}>
                    <input type={"checkbox"} checked={notrufsystem} onChange={() => {
                        setNotrufsystem(d => !d)
                        }} className="mr-2" />
                    Notrufsystem
                </label>  
                <label className={classes.checkboxname}>
                    <input type={"checkbox"} checked={winterpaket} onChange={() => {
                        setWinterpaket(d => !d)
                        }} className="mr-2" />
                    Winterpaket
                </label>  
                <label className={classes.checkboxname}>
                    <input type={"checkbox"} checked={headupDisplay} onChange={() => {
                        setHeadupDisplay(d => !d)
                        }} className="mr-2" />
                    Head-Up-Display
                </label>  
                <label className={classes.checkboxname}>
                    <input type={"checkbox"} checked={panoramadach} onChange={() => {
                        setPanoramadach(d => !d)
                        }} className="mr-2" />
                    Panoramadach
                </label>  
                <label className={classes.checkboxname}>
                    <input type={"checkbox"} checked={xenonscheinwerfer} onChange={() => {
                        setXenonscheinwerfer(d => !d)
                        }} className="mr-2" />
                    Xenon
                </label>  
                <label className={classes.checkboxname}>
                    <input type={"checkbox"} checked={isofix} onChange={() => {
                        setIsofix(d => !d)
                        }} className="mr-2" />
                    ISOFIX
                </label>  
                <label className={classes.checkboxname}>
                    <input type={"checkbox"} checked={einparkhilfeSensorenHinten} onChange={() => {
                        setEinparkhilfeSensorenHinten(d => !d)
                        }} className="mr-2" />
                    Parksensor hinten
                </label>  
                <label className={classes.checkboxname}>
                    <input type={"checkbox"} checked={zentralverriegelung} onChange={() => {
                        setZentralverriegelung(d => !d)
                        }} className="mr-2" />
                Zentralverriegelung
                </label>  
                <label className={classes.checkboxname}>
                    <input type={"checkbox"} checked={schluessellose} onChange={() => {
                        setSchluessellose(d => !d)
                        }} className="mr-2" />
                Keyless entry
                </label>
                    </div>
                </div>}
            {width <= 1249 &&             <div className={`relative w-10/12 lg:w-full flex justify-center max-w-ag-container md:!w-full mx-auto flex-col bg-white`}>
                <div className={classes.responsivecounter}>
                    <HomeMenu className={classes.homemenu} />
                    <div className={classes.counter}>
                        <div className={classes.counternumber}>{anzahlAngebote}</div>
                        <div className={classes.countertext}>Angebote für Ihre Suche</div>
                    </div>
                </div>
                <div className={classes.filteropener}>
                    {filterOpen == false ?  <div className={classes.filterclosedrow}>
                        <Menu className={classes.menu} onClick={() => setFilterOpen(true)}/>
                        <div className={classes.suchcontainer}>
                            <input type={"text"} className={classes.suche} placeholder={"Suche"} onChange={(e) => setSuchbegriff(e.target.value)} />
                            <SearchIcon className={classes.suchesvg} />
                        </div>
                        <div className={classes.sortcontainer}>
                            <Select 
                                options={sortOptions}
                                styles={style}
                                placeholder={"Sortieren"}
                                onChange={(e) => setSortOption(e.value)}
                                className={"w-full"}
                            />
                        </div>
                    </div> : 
                    
                    <div className={classes.filteropenedrow}>
                        <div className={classes.filterrow}>
                    <div onClick={() => setFilterOpen(false)}>
                        <CloseMenu className={classes.closemenu} />
                    </div>
                    <div className={classes.c1r2}>
                        <div className={classes.centeritems2}>
                            {filters.map((filter, index) => <div key={index} className={classes.filter}>{filter}<DelX onClick={(e) => {
                                handleDeleteFilter(index);
                            }} className={classes.delx}/></div>)}
                        </div>
                        <div>
                            <button className={classes.delfilters}>Filter löschen</button>
                            <button className={classes.savesearch}>Suche speichern</button>
                        </div>
                    </div>
                    <div className={classes.filterrow3}>
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
                    </div>
                    }
                </div>
            </div>}
            <div className={`${classes.contentcontainer} relative w-10/12 lg:w-full flex justify-center max-w-ag-container md:!w-full mx-auto flex-col bg-white p-6`}>
                <div className={classes.c2r1top}>
                    <div>
                        <Question className={classes.question} />
                        <span className={classes.questiontext}>{width >= 458 && "Infos zur Reihung der Anzeigen"}</span>
                    </div>
                </div>
            <div className={classes.row}>
                {width >= 1250 && 
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
                            <button className={classes.delfilters}>Filter löschen</button>
                            <button className={classes.savesearch}>Suche speichern</button>
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
            </div>}
                <div className={classes.c2}>
                    <div className={classes.c2r1}>
                        <div className={classes.c2r1bottom}>
                            <div className={classes.direktsuchecontainer}>
                                <input type={"text"} className={classes.direktsuche} placeholder="Direktsuche" />
                                <button className={classes.suchenbtn}>Suchen</button>
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
                        {width >= 1250 && <div className={classes.view}>
                            <ListView className={`${classes.listview} ${gridView == true && classes.viewactive} ${"mr-4"}`} onClick={() => setGridView(true)}/>
                            <GridView className={` ${classes.gridview} ${gridView == false && classes.viewactive} `} onClick={() => setGridView(false)}/>
                        </div>}
                    </div>
                    <div className={`${classes.c2r2}`}>
                            <div className={`${gridView == true ? classes.carlistcontainer : classes.gridlayout} `}>
                                <div className={width < 1250 && classes.adgrid}>
                                    {angebote.map((fav, index) => <div key={index} className={width >= 1250 && classes.adprop}>
                                        <ListCard 
                                            id={fav.id}
                                            adNo={fav.adNo}
                                            price={fav.preis}
                                            title={fav.title}
                                            img={fav.imgSrc}
                                            location={fav.location}
                                            gigalabel={fav.gigalabel}
                                            colorad={fav.colorad}
                                            description={fav.description}
                                            baujahr={fav.baujahr}
                                            kmStand={fav.kmStand}
                                            ps={fav.ps}
                                            getriebe={fav.getriebe}
                                        />
                                    </div>)}
                                </div>
                            </div>
                    </div>
                    {/* <div className={classes.c2r3}>
                        <PageSearch totalAds={anzahlAngebote} />
                    </div> 
                    
                    AUSKOMMENTIERT WEGEN RESPONSIVE PROBLEMEN
                    
                    */}
                </div>
        </div>
    </div>
    </div>
    )
}

export default SearchResults;