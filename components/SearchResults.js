import classes from "./SearchResults.module.css";
import Image from "next/image";
import { useRef, useState } from "react";
import Expand from "./../public/expand.svg";
import InputSelect from "./ui/InputSelect";
import Select from "react-select";
import AddCircle from "./../public/images/add_circle.svg";
import MyLocation from "./../public/images/my_location.svg";
import RemoveCircle from "./../public/images/remove_circle.svg";
import Question from "./../public/question.svg";
import SearchIcon from "./../public/searchicon.svg";
import GridView from "./../public/gridview.svg";
import ListView from "./../public/listview.svg";
import AdCard from "./dashboard/ads/AdCard";
import PlusIcon from "./../public/icons/ausstattungPlus.svg";
import DelX from "./../public/images/closedetail.svg";
import Closex from "./../public/closex.svg";
import PageSearch from "./pagesearch/PageSearch";
import HomeMenu from "./../public/homemenu.svg";
import CloseMenu from "./../public/menuclose.svg";
import Menu from "./../public/menu.svg";
import { useEffect } from "react";
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
import Angebot from "./ui/ads/Angebot";
import Page from "./pagesearch/PageSearch";
import ListCard from "./cards/ListCard";
import ControlledCheckbox from "./ui/ControlledCheckbox";
import TopRow from "./ui/TopRow";

const useDeviceSize = () => {
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);

  const handleWindowResize = () => {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  };

  useEffect(() => {
    // component is mounted and window is available
    handleWindowResize();
    window.addEventListener("resize", handleWindowResize);
    // unsubscribe from the event on component unmount
    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);

  return [width, height];
};

function SearchResults() {
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
      seller: "Privat",
      preis: 500,
      title: "Mercedes AMG GT",
      adNo: "#294873205",
      start: "01/01/2020",
      end: "01/01/2022",
      imgSrc: "/car-images/testcar.jpg",
      state: "2700 Wiener Neustadt",
      country: "Österreich",
      description: "4.2 FSI quattro * ABT KOMPRESSOR, 20",
      companyname: "Gigant Group Teknoloji A.S",
      baujahr: "01/2022",
      treibstoff: "Benzin",
      ps: 120,
      kmStand: 412000,
      getriebe: "Automatik",
      gigalabel: false,
      colorad: false,
    },
    {
      id: "sköafjasökldc",
      seller: "Händler",
      preis: 500000,
      title: "Mercedes AMG GT",
      adNo: "#294873205",
      start: "01/01/2020",
      end: "01/01/2022",
      imgSrc: "/car-images/testcar2.jpg",
      state: "2700 Wiener Neustadt",
      country: "Österreich",
      description: "4.2 FSI quattro * ABT KOMPRESSOR, 20",
      companyname: "Gigant Group Teknoloji A.S",
      baujahr: "01/2022",
      treibstoff: "Benzin",
      ps: 120,
      kmStand: 412000,
      getriebe: "Automatik",
      gigalabel: false,
      colorad: false,
    },
    {
      id: "sköafjasökldc",
      seller: "Händler",
      preis: 50000,
      title: "Mercedes AMG GT",
      adNo: "#294873205",
      start: "01/01/2020",
      end: "01/01/2022",
      imgSrc: "/car-images/testcar3.jpg",
      state: "2700 Wiener Neustadt",
      country: "Österreich",
      description: "4.2 FSI quattro * ABT KOMPRESSOR, 20",
      companyname: "Gigant Group Teknoloji A.S",
      baujahr: "01/2022",
      treibstoff: "Benzin",
      ps: 120,
      kmStand: 412000,
      getriebe: "Automatik",
      gigalabel: false,
      colorad: false,
    },
    {
      id: "sköafjasökldc",
      seller: "Händler",
      preis: 28100,
      title: "Mercedes AMG GT",
      adNo: "#294873205",
      start: "01/01/2020",
      end: "01/01/2022",
      imgSrc: "/car-images/testcar4.jpg",
      state: "2700 Wiener Neustadt",
      country: "Österreich",
      description: "4.2 FSI quattro * ABT KOMPRESSOR, 20",
      companyname: "Gigant Group Teknoloji A.S",
      baujahr: "01/2022",
      treibstoff: "Benzin",
      ps: 120,
      kmStand: 412000,
      getriebe: "Automatik",
      gigalabel: false,
      colorad: false,
    },
    {
      id: "sköafjasökldc",
      seller: "Händler",
      preis: 1900,
      title: "Mercedes AMG GT",
      adNo: "#294873205",
      start: "01/01/2020",
      end: "01/01/2022",
      imgSrc: "/car-images/testcar5.jpg",
      state: "2700 Wiener Neustadt",
      country: "Österreich",
      description: "4.2 FSI quattro * ABT KOMPRESSOR, 20",
      companyname: "Gigant Group Teknoloji A.S",
      baujahr: "01/2022",
      treibstoff: "Benzin",
      ps: 120,
      kmStand: 412000,
      getriebe: "Automatik",
      gigalabel: false,
      colorad: false,
    },
    {
      id: "sköafjasökldc",
      seller: "Händler",
      preis: 22500,
      title: "Mercedes AMG GT",
      adNo: "#294873205",
      start: "01/01/2020",
      end: "01/01/2022",
      imgSrc: "/car-images/testcar6.jpg",
      state: "2700 Wiener Neustadt",
      country: "Österreich",
      description: "4.2 FSI quattro * ABT KOMPRESSOR, 20",
      companyname: "Gigant Group Teknoloji A.S",
      baujahr: "01/2022",
      treibstoff: "Benzin",
      ps: 120,
      kmStand: 412000,
      getriebe: "Automatik",
      gigalabel: false,
      colorad: false,
    },
    {
      id: "sköafjasökldc",
      seller: "Händler",
      preis: 12900,
      title: "Mercedes AMG GT",
      adNo: "#294873205",
      imgSrc: "/images/draft-card-img-car-1.png",
      description: "4.2 FSI quattro * ABT KOMPRESSOR, 20",
      baujahr: "01/2022",
      treibstoff: "Benzin",
      ps: 120,
      kmStand: 412000,
      getriebe: "Automatik",
      state: "2700 Wiener Neustadt",
      country: "Österreich",
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
      width: "100%",
      cursor: "pointer",
      height: "40px !important",
    }),
    option: (styles, state) => ({
      ...styles,
      backgroundColor: state.isSelected ? "#fbb900" : "",
      "&:active": "#fbb90080",
      "&:hover" : {
        backgroundColor: "#FFE497"
      },
      "&:focus" : {
        backgroundColor: "#FBB900"
      },
      fontSize: '13px',
      cursor: "pointer",
    }),
  };
  const halfSelectStyle1 = {
    control: (base) => ({
      ...base,
      boxShadow: "none",
      border: "none",
      outline: "none",
      borderRadius: "10px",
      fontSize: "13px",
      borderRadius: "10px 0px 0px 10px",
      height: "0px",
      width: "100%",
    }),
    menu: (styles, state) => ({
      ...styles,
      zIndex: 999,
      fontSize: "13px",
    }),
    option: (styles, state) => ({
      ...styles,
      backgroundColor: state.isSelected ? "#fbb900" : "",
      "&:active": "#fbb90080",
      fontSize: "13px",
    }),
  };

  const halfSelectStyle2 = {
    control: (base) => ({
      ...base,
      boxShadow: "none",
      border: "none",
      outline: "none",
      borderRadius: "10px",
      fontSize: "13px",
      borderRadius: "0 10px 10px 0",
      height: "0px",
      width: "100%",
    }),
    menu: (styles, state) => ({
      ...styles,
      zIndex: 999,
      fontSize: "13px",
    }),
    option: (styles, state) => ({
      ...styles,
      backgroundColor: state.isSelected ? "#fbb900" : "",
      "&:active": "#fbb90080",
      fontSize: "13px",
    }),
  };

  const [waehrung, setWaehrung] = useState("€");

  // Filter - Area
  const [gigaChecked, setGigaChecked] = useState();
  const [stadt, setStadt] = useState();
  const [grenz, setGrenz] = useState();
  const [kilometerVon, setKilometerVon] = useState();
  const [kilometerBis, setKilometerBis] = useState();
  const [isNichtraucherfahrzeug, setIsNichtraucherfahrzeug] = useState(false);
  const [isGarantie, setIsGarantie] = useState(false);
  const [isScheckhaftgepflegt, setIsScheckhaftgepflegt] = useState(false);
  const [isHerstellerzertifizierung, setIsHerstellerzertifizierung] = useState(false);
  const [isRusspartikelfilter, setIsRusspartikelfilter] = useState(false);
  const [isMwStAusweisbar, setIsMwStAusweisbar] = useState(false);

  // Filter - Area
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

  const [filters, setFilters] = useState([
    "Österreich",
    "Mercedes",
    "CLS 320",
    "Österreichh",
    "Mercedess",
    "CLS 3200",
  ]);

  const [openBasisdaten, setOpenBasisdaten] = useState(false);
  const [openAusstattung, setOpenAusstattung] = useState(false);
  const [openFarbe, setOpenFarbe] = useState(false);
  const [openPolsterFarbe, setOpenPolsterFarbe] = useState(false);
  const [openFahrzeugzustand, setOpenFahrzeugzustand] = useState(false);
  const [openUmwelt, setOpenUmwelt] = useState(false);
  const [openAngebotDetails, setOpenAngebotDetails] = useState(false);

  const [inputMarkeChanged, setInputMarkeChanged] = useState(false);

  const [inputKarosserieform, setInputKarosserieform] = useState();
  const [inputKarosserieformChanged, setInputKarosserieformChanged] =
    useState();

  const [inputKraftstoff, setInputKraftstoff] = useState();
  const [inputKraftstoffChanged, setInputKraftstoffChanged] = useState();

  const [ausstattungsKriterienOpen, setAusstattungsKriterienOpen] =
    useState(false);

  const [gigaInfoOpen, setGigaInfoOpen] = useState(false);
  const [gridView, setGridView] = useState(true);

  const [zweizonenKlima, setZweizonenKlima] = useState(false);
  const [dreizonenKlima, setDreizonenKlima] = useState(false);
  const [drei60kamera, setDrei60kamera] = useState(false);
  const [vierzonenKlima, setVierzonenKlima] = useState(false);
  const [ABS, setABS] = useState(false);
  const [abstandsTempomat, setAbstandsTempomat] = useState(false);
  const [abstandsWarner, setAbstandsWarner] = useState(false);
  const [airbagHinten, setAirbagHinten] = useState(false);
  const [alarmanlage, setAlarmanlage] = useState(false);
  const [allrad, setAllrad] = useState(false);
  const [allwetterReifen, setAllwetterReifen] = useState(false);
  const [alufelgen, setAlufelgen] = useState(false);
  const [ambientebeleuchtung, setAmbientebeleuchtung] = useState(false);
  const [androidauto, setAndroidauto] = useState(false);
  const [anhaengerkupplung, setAnhaengerkupplung] = useState(false);
  const [applecarplay, setApplecarplay] = useState(false);
  const [armlehne, setArmlehne] = useState(false);
  const [beheizbareFrontscheibe, setBeheizbareFrontscheibe] = useState(false);
  const [beheizbaresLenkrad, setBeheizbaresLenkrad] = useState(false);
  const [behindertenGerecht, setBehindertenGerecht] = useState(false);
  const [beifahrerairbag, setBeifahrerairbag] = useState(false);
  const [berganfahrassistent, setBerganfahrassistent] = useState(false);
  const [bixenonscheinwerfer, setBixenonscheinwerfer] = useState(false);
  const [biodieselumruestung, setBiodieselumruestung] = useState(false);
  const [blendfreiesFernlicht, setBlendfreiesFernlicht] = useState(false);
  const [bluethoot, setBluethoot] = useState(false);
  const [bordcomputer, setBordcomputer] = useState(false);
  const [cd, setCd] = useState(false);
  const [dabradio, setDabradio] = useState(false);
  const [dachreling, setDachreling] = useState(false);
  const [ezehngeeignet, setEzehngeeignet] = useState(false);
  const [einparkhilfe, setEinparkhilfe] = useState(false);
  const [einparkhilfeKamera, setEinparkhilfeKamera] = useState(false);
  const [einparkhilfeSelbst, setEinparkhilfeSelbst] = useState(false);
  const [einparkhilfeSensorenVorne, setEinparkhilfeSensorenVorne] =
    useState(false);
  const [einparkhilfeSensorenHinten, setEinparkhilfeSensorenHinten] =
    useState(false);
  const [elektrfensterheber, setElektrfensterheber] = useState(false);
  const [elektrsitzhinten, setElektrsitzhinten] = useState(false);
  const [elektrheckklappe, setElektrheckklappe] = useState(false);
  const [elektrseitenspiegel, setElektrseitenspiegel] = useState(false);
  const [elektrsitze, setElektrsitze] = useState(false);
  const [elektrparkbremse, setElektrparkbremse] = useState(false);
  const [esp, setEsp] = useState(false);
  const [fahrerairbag, setFahrerairbag] = useState(false);
  const [fernlichassistent, setFernlichassistent] = useState(false);
  const [freisprecheinrichtung, setFreisprecheinrichtung] = useState(false);
  const [gepaeckraum, setGepaeckraum] = useState(false);
  const [geschwindigkeitsbegrenz, setGeschwindigkeitsbegrenz] = useState(false);
  const [getonteScheiben, setGetonteScheiben] = useState(false);
  const [headupDisplay, setHeadupDisplay] = useState(false);
  const [induktionsladen, setInduktionsladen] = useState(false);
  const [innenspiegelauto, setInnenspiegelauto] = useState(false);
  const [isofix, setIsofix] = useState(false);
  const [katalysator, setKatalysator] = useState(false);
  const [klimaanlage, setKlimaanlage] = useState(false);
  const [klimaautomatik, setKlimaautomatik] = useState(false);
  const [kopfairbag, setKopfairbag] = useState(false);
  const [kurvenlicht, setKurvenlicht] = useState(false);
  const [laserlicht, setLaserlicht] = useState(false);
  const [ledscheinwerfer, setLedscheinwerfer] = useState(false);
  const [ledtagfahrlicht, setLedtagfahrlicht] = useState(false);
  const [lederausstattung, setLederausstattung] = useState(false);
  const [lederlenkrad, setLederlenkrad] = useState(false);
  const [lichtsensor, setLichtsensor] = useState(false);
  const [lordosenstuetze, setLordoesenstuetze] = useState(false);
  const [luftfederung, setLuftfederung] = useState(false);
  const [markise, setMarkise] = useState(false);
  const [massageSitze, setMassageSitze] = useState(false);
  const [mp3, setMp3] = useState(false);
  const [muedigkeitswarn, setMuedigkeitswarn] = useState(false);
  const [multifunktionslenkrad, setMultifunktionslenkrad] = useState(false);
  const [musikstreamingIntegriert, setMusikstreamingIntegriert] =
    useState(false);
  const [nachtsichtAssistent, setNachtsichtAssistent] = useState(false);
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
  const [reifendruckkontrollsystem, setReifendruckkontrollsystem] =
    useState(false);
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
  const [verkehrszeichenErkennung, setVerkehrszeichenErkennung] =
    useState(false);
  const [vollledscheinwerfer, setVollledscheinwerfer] = useState(false);
  const [volldigitalesKombiinstrument, setVolldigitalesKombiinstrument] =
    useState(false);
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
  const [parkhilfesensorenHintenUndVorne, setParkhilfesensorenHintenUndVorne] =
    useState(false);

  const addModel = () => {
    setModelItems([
      ...modelItems,
      {
        brandName: brandName.value,
        modelName: modelName.value,
        varient: varient,
      },
    ]);
    setBrandName({ value: "", label: "" });
    setVarient("");
    setModelName({ value: "", label: "" });
    setBrandNameInputValue("");
    setBrandSelected(false);
  };

  function handleDeleteFilter(index) {
    var reducedFilters = [...filters];
    reducedFilters.splice(index, 1);
    setFilters(reducedFilters);
  }

  // Suchbegriff ist der Suchinput
  const [suchbegriff, setSuchbegriff] = useState();

  const sortOptions = [
    { label: "Neueste", value: "latest" },
    { label: "Älteste", value: "oldest" },
    { label: "Preis aufsteigend", value: "priceAscending" },
    { label: "Preis absteigend", value: "priceDescending" },
    { label: "Entfernung", value: "distance" },
    { label: "Beliebtheit", value: "popularity" },
  ];

  const [sortOption, setSortOption] = useState();

  const [filterOpen, setFilterOpen] = useState(false);

  function DeleteAllFilters(arr) {
    setFilters(arr);
  }

  useEffect(() => {
    console.log(gigaChecked);
  }, [gigaChecked]);

  let carBodyTypes = [
    { value: "Sedan", label: "Sedan" },
    { value: "Hatchback", label: "Hatchback" },
    { value: "SUV", label: "SUV" },
    { value: "Crossover", label: "Crossover" },
    { value: "Coupe", label: "Coupe" },
    { value: "Convertible", label: "Convertible" },
    { value: "Pickup", label: "Pickup" },
    { value: "Van", label: "Van" },
    { value: "Wagon", label: "Wagon" },
    { value: "Minivan", label: "Minivan" },
    { value: "Roadster", label: "Roadster" },
    { value: "Sports Car", label: "Sports Car" },
    { value: "Electric Car", label: "Electric Car" },
    { value: "Hybrid Car", label: "Hybrid Car" },
    { value: "Plug-in Hybrid", label: "Plug-in Hybrid" },
  ];

  const mileageRanges = [
    { label: "5000", value: 5000 },
    { label: "10000", value: 10000 },
    { label: "20000", value: 20000 },
    { label: "30000", value: 30000 },
    { label: "40000", value: 40000 },
    { label: "50000", value: 50000 },
    { label: "100000", value: 100000 },
    { label: "200000", value: 200000 },
    { label: "300000", value: 300000 },
    { label: "400000", value: 400000 },
    { label: "500000", value: 500000 },
  ];

  const radiusRanges = [
    { label: "5 km", value: 5 },
    { label: "10 km", value: 10 },
    { label: "25 km", value: 25 },
    { label: "50 km", value: 50 },
    { label: "100 km", value: 100 },
    { label: "250 km", value: 250 },
    { label: "500 km", value: 500 },
    { label: "1000 km", value: 1000 },
  ];

  const fuelTypes = [
    { label: "Benzin", value: "Benzin" },
    { label: "Diesel", value: "Diesel" },
    { label: "Elektro", value: "Elektro" },
    { label: "Hybrid", value: "Hybrid" },
    { label: "Wasserstoff", value: "Wasserstoff" },
  ];

  const firstRegistrationRanges = [
    {label: "2020", value: 2020},
    {label: "2015", value: 2015},
    {label: "2010", value: 2010},
    {label: "2005", value: 2005},
    {label: "2000", value: 2000},
    {label: "1990", value: 1990},
    {label: "1980", value: 1980}
  ];

  const priceRanges = [
    {label: "500 €", value: 500},
    {label: "1000 €", value: 1000},
    {label: "5000 €", value: 5000},
    {label: "10000 €", value: 10000},
    {label: "20000 €", value: 20000},
    {label: "50000 €", value: 50000},
    {label: "100000 €", value: 100000}
  ];

  const countries = [
    {label: "Österreich", value: "Österreich"},
    {label: "Deutschland", value: "Deutschland"},
    {label: "Türkei", value: "Türkei"},
    {label: "Qatar", value: "Qatar"},
    {label: "Schweiz", value: "Schweiz"},
    {label: "Albanien", value: "Albanien"},
    {label: "Belgien", value: "Belgien"},
    {label: "Bulgarien", value: "Bulgarien"},
    {label: "Dänemark", value: "Dänemark"},
    {label: "Estland", value: "Estland"},
    {label: "Finnland", value: "Finnland"},
    {label: "Frankreich", value: "Frankreich"},
    {label: "Griechenland", value: "Griechenland"},
    {
  label: "Ungarn", value: "Ungarn"},
  {label: "Irland", value: "Irland"},
  {label: "Italien", value: "Italien"},
  {label: "Kroatien", value: "Kroatien"},
  {label: "Lettland", value: "Lettland"},
  {label: "Litauen", value: "Litauen"},
  {label: "Luxemburg", value: "Luxemburg"},
  {label: "Malta", value: "Malta"},
  {label: "Niederlande", value: "Niederlande"},
  {label: "Norwegen", value: "Norwegen"},
  {label: "Polen", value: "Polen"},
  {label: "Portugal", value: "Portugal"},
  {label: "Rumänien", value: "Rumänien"},
  {label: "Schweden", value: "Schweden"},
  {label: "Slowakei", value: "Slowakei"},
  {label: "Slowenien", value: "Slowenien"},
  {label: "Spanien", value: "Spanien"},
    ]


    const [infoOpen, setInfoOpen] = useState(false);

  return (
    <div
      className={`${classes.container} ${
        openAusstattung == true && "overflow-y-hidden"
      }`}
    >
      {openAusstattung == true && (
        <div className={classes.ausstattungContainer}>
          <Closex
            className={classes.closex}
            onClick={() => setOpenAusstattung(false)}
          />
          <div className={classes.ausstattungencon}>
            <label className={classes.checkboxname}>
              <input
                type={"checkbox"}
                checked={achtFachBereift}
                onChange={() => setAchtFachBereift((d) => !d)}
                className="mr-2"
              />
              8-fach Bereift
            </label>
            <label className={classes.checkboxname}>
              <input
                type={"checkbox"}
                checked={klimaanlage}
                onChange={() => setKlimaanlage((d) => !d)}
                className="mr-2"
              />
              Klimaanlage
            </label>
            <label className={classes.checkboxname}>
              <input
                type={"checkbox"}
                checked={parkhilfesensorenHintenUndVorne}
                onChange={() => {
                  setParkhilfesensorenHintenUndVorne((d) => !d);
                }}
                className="mr-2"
              />
              Parksensor vorne & hinten
            </label>
            <label className={classes.checkboxname}>
              <input
                type={"checkbox"}
                checked={ABS}
                onChange={() => {
                  setABS((d) => !d);
                }}
                className="mr-2"
              />
              ABS
            </label>
            <label className={classes.checkboxname}>
              <input
                type={"checkbox"}
                checked={klimaautomatik}
                onChange={() => {
                  setKlimaautomatik((d) => !d);
                }}
                className="mr-2"
              />
              Klimaautomatik
            </label>
            <label className={classes.checkboxname}>
              <input
                type={"checkbox"}
                checked={radio}
                onChange={() => {
                  setRadio((d) => !d);
                }}
                className="mr-2"
              />
              Radio
            </label>
            <label className={classes.checkboxname}>
              <input
                type={"checkbox"}
                checked={abstandsTempomat}
                onChange={() => {
                  setAbstandsTempomat((d) => !d);
                }}
                className="mr-2"
              />
              Abstandstempomat
            </label>
            <label className={classes.checkboxname}>
              <input
                type={"checkbox"}
                checked={kollisionsWarner}
                onChange={() => {
                  setKollisionsWarner((d) => !d);
                }}
                className="mr-2"
              />
              Kollisionswarner
            </label>
            <label className={classes.checkboxname}>
              <input
                type={"checkbox"}
                checked={regensensor}
                onChange={() => {
                  setRegensensor((d) => !d);
                }}
                className="mr-2"
              />
              Regensensor
            </label>
            <label className={classes.checkboxname}>
              <input
                type={"checkbox"}
                checked={alarmanlage}
                onChange={() => {
                  setAlarmanlage((d) => !d);
                }}
                className="mr-2"
              />
              Alarmanlage
            </label>
            <label className={classes.checkboxname}>
              <input
                type={"checkbox"}
                checked={komfortFahrwerk}
                onChange={() => {
                  setKomfortFahrwerk((d) => !d);
                }}
                className="mr-2"
              />
              Komfortfahrwerk
            </label>
            <label className={classes.checkboxname}>
              <input
                type={"checkbox"}
                checked={reifendruckkontrollsystem}
                onChange={() => {
                  setReifendruckkontrollsystem((d) => !d);
                }}
                className="mr-2"
              />
              Reifendrucksensor
            </label>
            <label className={classes.checkboxname}>
              <input
                type={"checkbox"}
                checked={androidauto}
                onChange={() => {
                  setAndroidauto((d) => !d);
                }}
                className="mr-2"
              />
              Android Auto
            </label>
            <label className={classes.checkboxname}>
              <input
                type={"checkbox"}
                checked={kopfairbag}
                onChange={() => {
                  setKopfairbag((d) => !d);
                }}
                className="mr-2"
              />
              Kopfairbags
            </label>
            <label className={classes.checkboxname}>
              <input
                type={"checkbox"}
                checked={rueckfahrkamera}
                onChange={() => {
                  setRueckfahrkamera((d) => !d);
                }}
                className="mr-2"
              />
              Rückfahrkamera
            </label>
            <label className={classes.checkboxname}>
              <input
                type={"checkbox"}
                checked={anhaengerkupplung}
                onChange={() => {
                  setAnhaengerkupplung((d) => !d);
                }}
                className="mr-2"
              />
              Anhängerkupplung
            </label>
            <label className={classes.checkboxname}>
              <input
                type={"checkbox"}
                checked={kurvenlicht}
                onChange={() => {
                  setKurvenlicht((d) => !d);
                }}
                className="mr-2"
              />
              Kurvenfahrlicht
            </label>
            <label className={classes.checkboxname}>
              <input
                type={"checkbox"}
                checked={schaltwippen}
                onChange={() => {
                  setSchaltwippen((d) => !d);
                }}
                className="mr-2"
              />
              Schaltwippen
            </label>
            <label className={classes.checkboxname}>
              <input
                type={"checkbox"}
                checked={asr}
                onChange={() => {
                  setAsr((d) => !d);
                }}
                className="mr-2"
              />
              Antriebsschlupfregelung(ASR)
            </label>
            <label className={classes.checkboxname}>
              <input
                type={"checkbox"}
                checked={laserlicht}
                onChange={() => {
                  setLaserlicht((d) => !d);
                }}
                className="mr-2"
              />
              Laserlicht
            </label>
            <label className={classes.checkboxname}>
              <input
                type={"checkbox"}
                checked={schiebedach}
                onChange={() => {
                  setSchiebedach((d) => !d);
                }}
                className="mr-2"
              />
              Schiebedach
            </label>
            <label className={classes.checkboxname}>
              <input
                type={"checkbox"}
                checked={applecarplay}
                onChange={() => {
                  setApplecarplay((d) => !d);
                }}
                className="mr-2"
              />
              Apple CarPlay
            </label>
            <label className={classes.checkboxname}>
              <input
                type={"checkbox"}
                checked={leasingfaehigkeit}
                onChange={() => {
                  setLeasingfaehigkeit((d) => !d);
                }}
                className="mr-2"
              />
              Leasingfähigkeit
            </label>
            <label className={classes.checkboxname}>
              <input
                type={"checkbox"}
                checked={schisack}
                onChange={() => {
                  setSchisack((d) => !d);
                }}
                className="mr-2"
              />
              Schisack
            </label>
            <label className={classes.checkboxname}>
              <input
                type={"checkbox"}
                checked={automatischeHeckklappe}
                onChange={() => {
                  setAutomatischeHeckklappe((d) => !d);
                }}
                className="mr-2"
              />
              Aut. Heckklappe
            </label>
            <label className={classes.checkboxname}>
              <input
                type={"checkbox"}
                checked={ledscheinwerfer}
                onChange={() => {
                  setLedscheinwerfer((d) => !d);
                }}
                className="mr-2"
              />
              LED-Scheinwerfer
            </label>
            <label className={classes.checkboxname}>
              <input
                type={"checkbox"}
                checked={seitenairbag}
                onChange={() => {
                  setSeitenairbag((d) => !d);
                }}
                className="mr-2"
              />
              Seitenairbags
            </label>
            <label className={classes.checkboxname}>
              <input
                type={"checkbox"}
                checked={behindertenGerecht}
                onChange={() => {
                  setBehindertenGerecht((d) => !d);
                }}
                className="mr-2"
              />
              Behindertengerecht
            </label>
            <label className={classes.checkboxname}>
              <input
                type={"checkbox"}
                checked={lederausstattung}
                onChange={() => {
                  setLederausstattung((d) => !d);
                }}
                className="mr-2"
              />
              Lederausstattung
            </label>
            <label className={classes.checkboxname}>
              <input
                type={"checkbox"}
                checked={serviceGepflegt}
                onChange={() => {
                  setServiceGepflegt((d) => !d);
                }}
                className="mr-2"
              />
              Servicegepflegt
            </label>
            <label className={classes.checkboxname}>
              <input
                type={"checkbox"}
                checked={beifahrerairbag}
                onChange={() => {
                  setBeifahrerairbag((d) => !d);
                }}
                className="mr-2"
              />
              Beifahrerairbags
            </label>
            <label className={classes.checkboxname}>
              <input
                type={"checkbox"}
                checked={lederlenkrad}
                onChange={() => {
                  setLederlenkrad((d) => !d);
                }}
                className="mr-2"
              />
              Lederlenkrad
            </label>
            <label className={classes.checkboxname}>
              <input
                type={"checkbox"}
                checked={servolenkung}
                onChange={() => {
                  setServolenkung((d) => !d);
                }}
                className="mr-2"
              />
              Servolenkung
            </label>
            <label className={classes.checkboxname}>
              <input
                type={"checkbox"}
                checked={bluethoot}
                onChange={() => {
                  setBluethoot((d) => !d);
                }}
                className="mr-2"
              />
              Bluethoot / USB
            </label>
            <label className={classes.checkboxname}>
              <input
                type={"checkbox"}
                checked={alufelgen}
                onChange={() => {
                  setAlufelgen((d) => !d);
                }}
                className="mr-2"
              />
              Leichtmetall-/Alufelgen
            </label>
            <label className={classes.checkboxname}>
              <input
                type={"checkbox"}
                checked={sitzheizung}
                onChange={() => {
                  setSitzheizung((d) => !d);
                }}
                className="mr-2"
              />
              Sitzheizung
            </label>
            <label className={classes.checkboxname}>
              <input
                type={"checkbox"}
                checked={bordcomputer}
                onChange={() => {
                  setBordcomputer((d) => !d);
                }}
                className="mr-2"
              />
              Bordcomputer
            </label>
            <label className={classes.checkboxname}>
              <input
                type={"checkbox"}
                checked={lenkradheizung}
                onChange={() => {
                  setLenkradheizung((d) => !d);
                }}
                className="mr-2"
              />
              Lenkradheizung
            </label>
            <label className={classes.checkboxname}>
              <input
                type={"checkbox"}
                checked={sperrdifferential}
                onChange={() => {
                  setSperrdifferential((d) => !d);
                }}
                className="mr-2"
              />
              Sperrdifferential
            </label>
            <label className={classes.checkboxname}>
              <input
                type={"checkbox"}
                checked={cd}
                onChange={() => {
                  setCd((d) => !d);
                }}
                className="mr-2"
              />
              CD Player
            </label>
            <label className={classes.checkboxname}>
              <input
                type={"checkbox"}
                checked={lichtsensor}
                onChange={() => {
                  setLichtsensor((d) => !d);
                }}
                className="mr-2"
              />
              Lichtsensor
            </label>
            <label className={classes.checkboxname}>
              <input
                type={"checkbox"}
                checked={sportfahrwerk}
                onChange={() => {
                  setSportfahrwerk((d) => !d);
                }}
                className="mr-2"
              />
              Sportfahrwerk
            </label>
            <label className={classes.checkboxname}>
              <input
                type={"checkbox"}
                checked={dachgepaecktraeger}
                onChange={() => {
                  setDachgepaecktraeger((d) => !d);
                }}
                className="mr-2"
              />
              Dachgepäckträger
            </label>
            <label className={classes.checkboxname}>
              <input
                type={"checkbox"}
                checked={lordosenstuetze}
                onChange={() => {
                  setLordoesenstuetze((d) => !d);
                }}
                className="mr-2"
              />
              Lordosenstütze
            </label>
            <label className={classes.checkboxname}>
              <input
                type={"checkbox"}
                checked={sportpaket}
                onChange={() => {
                  setSportpaket((d) => !d);
                }}
                className="mr-2"
              />
              Sportpaket
            </label>
            <label className={classes.checkboxname}>
              <input
                type={"checkbox"}
                checked={dachreling}
                onChange={() => {
                  setDachreling((d) => !d);
                }}
                className="mr-2"
              />
              Dachreling
            </label>
            <label className={classes.checkboxname}>
              <input
                type={"checkbox"}
                checked={mp3}
                onChange={() => {
                  setMp3((d) => !d);
                }}
                className="mr-2"
              />
              Media-Interface / mp3
            </label>
            <label className={classes.checkboxname}>
              <input
                type={"checkbox"}
                checked={sportsitze}
                onChange={() => {
                  setSportsitze((d) => !d);
                }}
                className="mr-2"
              />
              Sportsitze
            </label>
            <label className={classes.checkboxname}>
              <input
                type={"checkbox"}
                checked={einparkhilfe}
                onChange={() => {
                  setEinparkhilfe((d) => !d);
                }}
                className="mr-2"
              />
              Einparkhilfe
            </label>
            <label className={classes.checkboxname}>
              <input
                type={"checkbox"}
                checked={metallicLackierung}
                onChange={() => {
                  setMetalliclackierung((d) => !d);
                }}
                className="mr-2"
              />
              Metallic-Lackierung
            </label>
            <label className={classes.checkboxname}>
              <input
                type={"checkbox"}
                checked={spurhalteassistent}
                onChange={() => {
                  setSpurhalteassistent((d) => !d);
                }}
                className="mr-2"
              />
              Spurhalteassistent
            </label>
            <label className={classes.checkboxname}>
              <input
                type={"checkbox"}
                checked={elektrfensterheber}
                onChange={() => {
                  setElektrfensterheber((d) => !d);
                }}
                className="mr-2"
              />
              elektr. Fensterheber
            </label>
            <label className={classes.checkboxname}>
              <input
                type={"checkbox"}
                checked={mittelarmlehne}
                onChange={() => {
                  setMittelarmlehne((d) => !d);
                }}
                className="mr-2"
              />
              Mittelarmlehne
            </label>
            <label className={classes.checkboxname}>
              <input
                type={"checkbox"}
                checked={stabilitaetsprogramme}
                onChange={() => {
                  setStabilitaetsprogramme((d) => !d);
                }}
                className="mr-2"
              />
              Stabilitätsprogramme
            </label>
            <label className={classes.checkboxname}>
              <input
                type={"checkbox"}
                checked={elektrsitze}
                onChange={() => {
                  setElektrsitze((d) => !d);
                }}
                className="mr-2"
              />
              elektr. Sitze
            </label>
            <label className={classes.checkboxname}>
              <input
                type={"checkbox"}
                checked={multifunktionslenkrad}
                onChange={() => {
                  setMultifunktionslenkrad((d) => !d);
                }}
                className="mr-2"
              />
              Multifunktionslenkrad
            </label>
            <label className={classes.checkboxname}>
              <input
                type={"checkbox"}
                checked={standheizung}
                onChange={() => {
                  setStandheizung((d) => !d);
                }}
                className="mr-2"
              />
              Standheizung
            </label>
            <label className={classes.checkboxname}>
              <input
                type={"checkbox"}
                checked={elektrseitenspiegel}
                onChange={() => {
                  setElektrseitenspiegel((d) => !d);
                }}
                className="mr-2"
              />
              elektr. Spiegel
            </label>
            <label className={classes.checkboxname}>
              <input
                type={"checkbox"}
                checked={mwstAusweisbar}
                onChange={() => {
                  setMwstAusweisbar((d) => !d);
                }}
                className="mr-2"
              />
              MwSt. ausweisbar
            </label>
            <label className={classes.checkboxname}>
              <input
                type={"checkbox"}
                checked={startstopauto}
                onChange={() => {
                  setStartstopauto((d) => !d);
                }}
                className="mr-2"
              />
              Start/Stopp-Automatik
            </label>
            <label className={classes.checkboxname}>
              <input
                type={"checkbox"}
                checked={fahrerairbag}
                onChange={() => {
                  setFahrerairbag((d) => !d);
                }}
                className="mr-2"
              />
              Fahrerairbag
            </label>
            <label className={classes.checkboxname}>
              <input
                type={"checkbox"}
                checked={navigationssystem}
                onChange={() => {
                  setNavigationssystem((d) => !d);
                }}
                className="mr-2"
              />
              Navigationssystem
            </label>
            <label className={classes.checkboxname}>
              <input
                type={"checkbox"}
                checked={tagfahrlicht}
                onChange={() => {
                  setTagfahrlicht((d) => !d);
                }}
                className="mr-2"
              />
              Tagfahrlicht
            </label>
            <label className={classes.checkboxname}>
              <input
                type={"checkbox"}
                checked={fernlichassistent}
                onChange={() => {
                  setFernlichassistent((d) => !d);
                }}
                className="mr-2"
              />
              Fernlichtassistent
            </label>
            <label className={classes.checkboxname}>
              <input
                type={"checkbox"}
                checked={nebelscheinwerfer}
                onChange={() => {
                  setNebelscheinwerfer((d) => !d);
                }}
                className="mr-2"
              />
              Nebelscheinwerfer
            </label>
            <label className={classes.checkboxname}>
              <input
                type={"checkbox"}
                checked={teilAutonomesFahren}
                onChange={() => {
                  setTeilAutonomesFahren((d) => !d);
                }}
                className="mr-2"
              />
              Teilautonomes Fahren
            </label>
            <label className={classes.checkboxname}>
              <input
                type={"checkbox"}
                checked={freisprecheinrichtung}
                onChange={() => {
                  setFreisprecheinrichtung((d) => !d);
                }}
                className="mr-2"
              />
              Freisprecheinrichtung
            </label>
            <label className={classes.checkboxname}>
              <input
                type={"checkbox"}
                checked={nichtraucherfahrzeug}
                onChange={() => {
                  setNichtraucherFahrzeug((d) => !d);
                }}
                className="mr-2"
              />
              Nichtraucherfahrzeug
            </label>
            <label className={classes.checkboxname}>
              <input
                type={"checkbox"}
                checked={tempomat}
                onChange={() => {
                  setTempomat((d) => !d);
                }}
                className="mr-2"
              />
              Tempomat
            </label>
            <label className={classes.checkboxname}>
              <input
                type={"checkbox"}
                checked={beheizbareFrontscheibe}
                onChange={() => {
                  setBeheizbareFrontscheibe((d) => !d);
                }}
                className="mr-2"
              />
              Frontscheibenheizung
            </label>
            <label className={classes.checkboxname}>
              <input
                type={"checkbox"}
                checked={notbremsassistent}
                onChange={() => {
                  setNotbremsassistent((d) => !d);
                }}
                className="mr-2"
              />
              Notbremsassistent
            </label>
            <label className={classes.checkboxname}>
              <input
                type={"checkbox"}
                checked={totwinkelAssistent}
                onChange={() => {
                  setTotwinkelAssitent((d) => !d);
                }}
                className="mr-2"
              />
              Totwinkelassistent
            </label>
            <label className={classes.checkboxname}>
              <input
                type={"checkbox"}
                checked={induktionsladen}
                onChange={() => {
                  setInduktionsladen((d) => !d);
                }}
                className="mr-2"
              />
              Handy induktiv laden
            </label>
            <label className={classes.checkboxname}>
              <input
                type={"checkbox"}
                checked={notrufsystem}
                onChange={() => {
                  setNotrufsystem((d) => !d);
                }}
                className="mr-2"
              />
              Notrufsystem
            </label>
            <label className={classes.checkboxname}>
              <input
                type={"checkbox"}
                checked={winterpaket}
                onChange={() => {
                  setWinterpaket((d) => !d);
                }}
                className="mr-2"
              />
              Winterpaket
            </label>
            <label className={classes.checkboxname}>
              <input
                type={"checkbox"}
                checked={headupDisplay}
                onChange={() => {
                  setHeadupDisplay((d) => !d);
                }}
                className="mr-2"
              />
              Head-Up-Display
            </label>
            <label className={classes.checkboxname}>
              <input
                type={"checkbox"}
                checked={panoramadach}
                onChange={() => {
                  setPanoramadach((d) => !d);
                }}
                className="mr-2"
              />
              Panoramadach
            </label>
            <label className={classes.checkboxname}>
              <input
                type={"checkbox"}
                checked={xenonscheinwerfer}
                onChange={() => {
                  setXenonscheinwerfer((d) => !d);
                }}
                className="mr-2"
              />
              Xenon
            </label>
            <label className={classes.checkboxname}>
              <input
                type={"checkbox"}
                checked={isofix}
                onChange={() => {
                  setIsofix((d) => !d);
                }}
                className="mr-2"
              />
              ISOFIX
            </label>
            <label className={classes.checkboxname}>
              <input
                type={"checkbox"}
                checked={einparkhilfeSensorenHinten}
                onChange={() => {
                  setEinparkhilfeSensorenHinten((d) => !d);
                }}
                className="mr-2"
              />
              Parksensor hinten
            </label>
            <label className={classes.checkboxname}>
              <input
                type={"checkbox"}
                checked={zentralverriegelung}
                onChange={() => {
                  setZentralverriegelung((d) => !d);
                }}
                className="mr-2"
              />
              Zentralverriegelung
            </label>
            <label className={classes.checkboxname}>
              <input
                type={"checkbox"}
                checked={schluessellose}
                onChange={() => {
                  setSchluessellose((d) => !d);
                }}
                className="mr-2"
              />
              Keyless entry
            </label>
          </div>
        </div>
      )}
      {width <= 1249 && (
        <div
          className={`relative w-10/12 lg:w-full flex justify-center max-w-ag-container md:!w-full mx-auto flex-col bg-white`}
        >
          <div className={classes.responsivecounter}>
            <HomeMenu className={classes.homemenu} />
            <div className={classes.counter}>
              <div className={classes.counternumber}>{anzahlAngebote}</div>
              <div className={classes.countertext}>Angebote für Ihre Suche</div>
            </div>
          </div>
          <div className={classes.filteropener}>
            {filterOpen == false ? (
              <div className={classes.filterclosedrow}>
                <Menu
                  className={classes.menu}
                  onClick={() => setFilterOpen(true)}
                />
                <div className={classes.suchcontainer}>
                  <input
                    type={"text"}
                    className={classes.suche}
                    placeholder={"Suche"}
                    onChange={(e) => setSuchbegriff(e.target.value)}
                  />
                  <SearchIcon className={classes.suchesvg} />
                </div>
                <div className={classes.sortcontainer}>
                  <Select
                    options={sortOptions}
                    styles={style}
                    placeholder={"Sortieren"}
                    onChange={(e) => setSortOption(e.value)}
                    className={"w-full h-10"}
                  />
                </div>
              </div>
            ) : (
              <div className={classes.filteropenedrow}>
                <div className={classes.filterrow}>
                  <div onClick={() => setFilterOpen(false)}>
                    <CloseMenu className={classes.closemenu} />
                  </div>
                 
                    
               
                
                </div>
              </div>
            )}
          </div>
        </div>
      )}
      <div
        className={`${classes.contentcontainer} relative w-10/12 lg:w-full flex justify-center max-w-ag-container md:!w-full mx-auto flex-col bg-white p-6`}
      >
        <TopRow />
        <div className={classes.row}>
          {width >= 1250 && (
            <div className={classes.c1}>
              <div className={classes.c1r1}>
                <div className={classes.centeritems1}>
                  <h3 className={classes.anzahlAngeboteNummer}>
                    {displayAnzahlAngebote}
                  </h3>
                  <div className={classes.anzahlAngeboteText}>
                    Angebote für Ihre Suche
                  </div>
                </div>
              </div>
              <div className={classes.c1r2}>
                <div className={classes.centeritems2}>
                  {filters.map((filter, index) => (
                    <div key={index} className={classes.filter}>
                      {filter}
                      <DelX
                        onClick={(e) => {
                          handleDeleteFilter(index);
                        }}
                        className={classes.delx}
                      />
                    </div>
                  ))}
                </div>
                <div>
                  <button
                    className={classes.delfilters}
                    onClick={() => {
                      DeleteAllFilters([]);
                    }}
                  >
                    Filter löschen
                  </button>
                  <button className={classes.savesearch}>
                    Suche speichern
                  </button>
                </div>
              </div>
              <div className={classes.c1r3}>
                <div
                  className={
                    openBasisdaten == true
                      ? classes.sectioncontainer
                      : classes.sectioncontainerclosed
                  }
                  onClick={() => {
                    if (openBasisdaten == false) {
                      setOpenBasisdaten(true);
                    }
                  }}
                >
                  <div
                    className={classes.headingcontainer}
                    onClick={() => {
                      if (openBasisdaten == true) {
                        setOpenBasisdaten(false);
                      }
                    }}
                  >
                    <div className={classes.sectionheading}>
                      Basisdaten & Standort
                    </div>
                    <Expand
                      className={
                        openBasisdaten == false
                          ? classes.openedExpand
                          : classes.closedExpand
                      }
                    />
                  </div>
                  {openBasisdaten == true && (
                    <div className={classes.basiscontainer}>
                      <div
                        className={`${classes.inputrowgiga} ${classes.marginbottom}`}
                      >
                        <span className="mr-2">
                          <ControlledCheckbox
                            onUpdate={(val) => {
                              setGigaChecked(val);
                            }}
                          />
                        </span>
                        <label
                          className="cursor-pointer"
                          htmlFor="gigacheckbox"
                        >
                          <img
                            className={classes.gigadraftimg}
                            src={"/images/draft-card-giga-logo.png"}
                          />
                        </label>
                        <img
                          src={"/images/info.svg"}
                          onMouseOver={() => setGigaInfoOpen(true)}
                          onMouseLeave={() => setGigaInfoOpen(false)}
                        />
                        {gigaInfoOpen == true && (
                          <div className={classes.gigaexplanation}>
                            <div className={classes.triangle}></div>
                            Lorem ipsum dolor sit Amet, InsecteturLorem
                          </div>
                        )}
                      </div>
                      <div className={classes.selectcar}>
                        <div>
                          <label className="font-bold">Marke</label>
                          <Select
                            options={marke1}
                            styles={style}
                            onChange={(e) => {
                              setBrandSelected(true);
                              setInputMarkeChanged(true);
                              if (e.value == "alle") {
                                setBrandSelected(false);
                              }
                              setBrandName(e);
                            }}
                            value={
                              inputMarkeChanged == true
                                ? brandName
                                : marke1[0].label
                            }
                            placeholder={"Alle"}
                            className="mt-1"
                          ></Select>
                        </div>
                        <div className={classes.selectmodel}>
                          <label className="font-bold">Modell</label>
                          <Select
                            options={marke2}
                            styles={style}
                            onChange={(e) => {
                              setModelName(e);
                            }}
                            value={modelName || marke1[0].label}
                            name={"Modell"}
                            isDisabled={!brandSelected}
                            className={`mt-1 ${classes.brand}`}
                          ></Select>
                        </div>
                        <div>
                          <p className="mb-1 font-bold">Variante</p>
                          <input
                            className={classes.varientinput}
                            onChange={(e) => setVarient(e.target.value)}
                            placeholder="z.B CLS 320, E 220, usw."
                          />
                        </div>
                        <div
                          className={`${classes.addmodal} ${classes.marginbottom}`}
                          onClick={addModel}
                        >
                          <AddCircle className={classes.addmodalsvg} />{" "}
                          <span className={classes.addmodaltext}>
                            Weitere Marken/
                            <br />
                            Modelle hinzufügen
                          </span>
                        </div>
                        <div className={classes.carbodytypes}>
                          <Select
                            options={carBodyTypes}
                            styles={style}
                            onChange={(e) => {
                                setInputKarosserieform(e.value);
                                setInputKarosserieformChanged(true);
                            }}
                            value={
                                inputKarosserieformChanged == false
                                ? brandName
                                : marke1[0].label
                            }
                            placeholder={"Karroserieform"}
                            className="mt-1"
                          />
                        </div>
                            <Select 
                              styles={style}
                              options={van1}
                              placeholder={`Preis in (${waehrung})`}
                              className="mt-2"
                            />
                            <label className={`font-bold mt-1`}>
                            Erstzulassung
                          </label>
                          <div className={`${classes.halfselect}`}>
                            <div className="w-full mr-2">
                                <Select
                                className={classes.halfselect1}
                                options={firstRegistrationRanges}
                                styles={halfSelectStyle1}
                                placeholder="Von"
                                />
                            </div>
                            <div className="w-full">
                                <Select
                                className={classes.halfselect2}
                                options={firstRegistrationRanges}
                                styles={halfSelectStyle2}
                                placeholder="Bis"
                                />
                            </div>
                          </div>
                        <div>
                        <Select
                          options={fuelTypes}
                          styles={style}
                          onChange={(e) => {
                            setInputKraftstoff(e.value);
                            setInputKraftstoffChanged(true);
                          }}
                          placeholder={"Kraftstoff"}
                          className={`mb-2 mt-2 ${classes.kraftstoffstyle}`}
                        />
                        </div>
                          <Select
                            styles={style}
                            options={countries}
                            placeholder="Land"
                            className="mt-2"
                          />
                          <div className={`${classes.locdiv} mt-2`}>
                            <input
                              className={classes.varientinput}
                              placeholder="Stadt/PLZ"
                              onChange={(e) => setStadt(e.target.value)}
                            />
                            <MyLocation className={classes.mylocation} />
                          </div>
                          <div>
                          <Select
                            styles={style}
                            options={radiusRanges}
                            placeholder="Umkreis (km)"
                            className="mt-2"
                            onChange={(e) => setUmkreis(e.value)}
                          />
                          </div>
                        <div  className="mt-2">
                        <ControlledCheckbox onUpdate={val => {
                            setGrenz(val);
                        }} label={"Grenzübergreifend"} />
                        </div>
                          <label className="font-bold -mb-1 mt-2">Kilometerstand</label>
                          <div className={`${classes.halfselect} mt-1 mb-2`}>
                            <Select
                              className={classes.halfselect1}
                              options={mileageRanges}
                              styles={halfSelectStyle1}
                              placeholder="Von"
                              onChange={(e) => setKilometerVon(e.value)}
                            />
                            <Select
                              className={classes.halfselect2}
                              options={mileageRanges}
                              styles={halfSelectStyle2}
                              placeholder="Bis"
                              onChange={(e) => setKilometerBis(e.value)}
                            />
                          </div>
                        <Select 
                            styles={style}
                            options={getri}
                            placeholder="Leistung"
                            className="mt-2"
                        />
                        <div className={`mt-2`}>
                          <Select
                            styles={style}
                            options={getri}
                            placeholder="Getriebe"
                            className=""
                          />
                        </div>
                        <div
                          className={`${classes.anzahltuerencontainer} ${classes.marginbottom}`}
                        >
                          <div className={`${classes.flexverkaeuferart}`}>
                              <Select 
                                styles={style}
                                options={van1}
                                placeholder={"Anzahl Türen"}
                                className={"mt-2 w-full"}
                              />
                          </div>
                        </div>
                            <Select 
                                styles={style}
                                options={van1}
                                placeholder="Sitzplätze"
                                className="w-full mt-2"
                            />
                          <div className={classes.flexverkaeuferart}>
                              <Select 
                                styles={style}
                                options={van1}
                                placeholder="Verkäuferart"
                                className="w-full mt-2"
                              />
                          </div>
                        <div className={`${classes.fahrzeugzustandcontainer}`}>
                          <Select 
                            styles={style}
                            options={van1}
                            placeholder={"Fahrzeugzustand"}
                            className="mt-2"
                          />
                        </div>
                      </div>
                    </div>
                  )}
                </div>
                {/* AUSSTATTUNG */}
                <div
                  className={classes.ausstattung}
                  onClick={() => setOpenAusstattung(true)}
                >
                  <span className="">Ausstattung</span>
                  <PlusIcon className={classes.plusicon} />
                </div>
                {/* FARBE */}
                <div
                  className={
                    openFarbe == true
                      ? classes.sectioncontainer
                      : classes.sectioncontainerclosed
                  }
                  onClick={() => {
                    if (openFarbe == false) {
                      setOpenFarbe(true);
                    }
                  }}
                >
                  <div
                    className={classes.headingcontainer}
                    onClick={() => {
                      if (openFarbe == true) {
                        setOpenFarbe(false);
                      }
                    }}
                  >
                    <div className={classes.sectionheading}>Farbe</div>
                    <Expand
                      className={
                        openFarbe == false
                          ? classes.openedExpand
                          : classes.closedExpand
                      }
                    />
                  </div>
                  {openFarbe == true && (
                    <div className={classes.basiscontainer}>
                      <div>
                            <Select 
                                styles={style}
                                options={van1}
                                className={"w-full mb-2"}
                                placeholder={"Außenfarbe"}
                            />
                        <label className="text-sm font-semibold">
                          Lackierungsart
                        </label>
                        <div className={classes.colorrow}>
                          <ControlledCheckbox 
                            onUpdate={val => {
                                setMetalliclackierung(val);
                            }}
                            label={" Metallic"}
                          />
                        </div>
                      </div>
                    </div>
                  )}
                </div>
                {/* POLSTERFARBE */}
                <div
                  className={
                    openPolsterFarbe == true
                      ? classes.sectioncontainer
                      : classes.sectioncontainerclosed
                  }
                  onClick={() => {
                    if (openPolsterFarbe == false) {
                      setOpenPolsterFarbe(true);
                    }
                  }}
                >
                  <div
                    className={classes.headingcontainer}
                    onClick={() => {
                      if (openPolsterFarbe == true) {
                        setOpenPolsterFarbe(false);
                      }
                    }}
                  >
                    <div className={classes.sectionheading}>Polsterfarbe</div>
                    <Expand
                      className={
                        openPolsterFarbe == false
                          ? classes.openedExpand
                          : classes.closedExpand
                      }
                    />
                  </div>
                  {openPolsterFarbe == true && (
                    <div className={classes.basiscontainer}>
                      <Select 
                        styles={style}
                        options={van1}
                        placeholder="Polsterfarbe"
                      />
                      <Select 
                        styles={style}
                        options={van1}
                        placeholder="Material"
                        className="mt-2"
                      />
                    </div>
                  )}
                </div>
                {/* POLSTERFARBE */}
                <div
                  className={
                    openFahrzeugzustand == true
                      ? classes.sectioncontainer
                      : classes.sectioncontainerclosed
                  }
                  onClick={() => {
                    if (openFahrzeugzustand == false) {
                      setOpenFahrzeugzustand(true);
                    }
                  }}
                >
                  <div
                    className={classes.headingcontainer}
                    onClick={() => {
                      if (openFahrzeugzustand == true) {
                        setOpenFahrzeugzustand(false);
                      }
                    }}
                  >
                    <div className={classes.sectionheading}>
                      Fahrzeugzustand
                    </div>
                    <Expand
                      className={
                        openFahrzeugzustand == false
                          ? classes.openedExpand
                          : classes.closedExpand
                      }
                    />
                  </div>
                  {openFahrzeugzustand == true && (
                    <div className={classes.basiscontainer}>
                      <div className={classes.marginbottom}>
                        <label
                          htmlFor="selfahrz"
                          className={`${classes.fontsize13} ${classes.label}`}
                        >
                          Fahrzeughalter (max.)
                        </label>
                        <Select
                          styles={style}
                          options={fahrz}
                          placeholder="Nicht anzeigen"
                          className="mt-1 mb-1"
                          id="selfahrz"
                        />
                      </div>
                      <div className={classes.marginbottom}>
                        <label className={classes.fontsize13}>
                          Unfallfahrzeug
                        </label>
                        <Select
                          styles={style}
                          options={unfall}
                          placeholder="Nicht anzeigen"
                          className="mt-1 mb-1"
                        />
                      </div>
                      <div className={`${classes.materialcontainer}`}>
                        <div>
                          <ControlledCheckbox onUpdate={val => {
                            setIsNichtraucherfahrzeug(val);
                          }} label="Nichtraucherfahrzeug" />
                        </div>
                        <div>
                          <ControlledCheckbox 
                          onUpdate={val => {
                            setIsGarantie(val);
                          }}
                          label="Garantie"
                          />
                        </div>
                        <div>
                          <ControlledCheckbox onUpdate={val => {
                            setIsScheckhaftgepflegt(val);
                          }} label="Scheckhaftgepflegt" />
                        </div>
                        <div>
                          <ControlledCheckbox onUpdate={val => {
                            setIsHerstellerzertifizierung(val);
                          }} label="Herstellerzertifizierung" />
                            <div className={classes.belowtext}>
                              (Technisch geprüfte{"\n"}Fahrzeuge mit Garantie)
                            </div>
                        
                        </div>
                      </div>
                    </div>
                  )}
                </div>
                {/* UMWELT */}
                <div
                  className={
                    openUmwelt == true
                      ? classes.sectioncontainer
                      : classes.sectioncontainerclosed
                  }
                  onClick={() => {
                    if (openUmwelt == false) {
                      setOpenUmwelt(true);
                    }
                  }}
                >
                  <div
                    className={classes.headingcontainer}
                    onClick={() => {
                      if (openUmwelt == true) {
                        setOpenUmwelt(false);
                      }
                    }}
                  >
                    <div className={classes.sectionheading}>Umwelt</div>
                    <Expand
                      className={
                        openUmwelt == false
                          ? classes.openedExpand
                          : classes.closedExpand
                      }
                    />
                  </div>
                  {openUmwelt == true && (
                    <div className={classes.basiscontainer}>
                      <div className={classes.marginbottom}>
                        <label className="text-sm">
                          Schadstoffklasse (mind.)
                        </label>
                        <Select
                          styles={style}
                          options={schads}
                          placeholder="Alle"
                          className="mt-1 mb-1"
                        />
                      </div>
                      <div className={classes.marginbottom}>
                        <label className="text-sm">
                          Feinstaubplakette (mind.)
                        </label>
                        <Select
                          styles={style}
                          options={fahrz}
                          placeholder="Alle"
                          className="mt-1 mb-1"
                        />
                      </div>
                      <div className={`${classes.materialcontainer}`}>
                        <div>
                          <ControlledCheckbox onUpdate={val => {
                            setIsRusspartikelfilter(val);
                          }} label="Rußpartikelfilter" />
                        </div>
                      </div>
                    </div>
                  )}
                </div>
                {/* ANGEBOTDETAILS */}
                <div
                  className={`${
                    openAngebotDetails == true
                      ? classes.sectioncontainer
                      : classes.sectioncontainerclosed2
                  } ${classes.noline}`}
                  onClick={() => {
                    if (openAngebotDetails == false) {
                      setOpenAngebotDetails(true);
                    }
                  }}
                >
                  <div
                    className={classes.headingcontainer}
                    onClick={() => {
                      if (openAngebotDetails == true) {
                        setOpenAngebotDetails(false);
                      }
                    }}
                  >
                    <div className={classes.sectionheading}>Angebotdetails</div>
                    <Expand
                      className={
                        openAngebotDetails == false
                          ? classes.openedExpand
                          : classes.closedExpand
                      }
                    />
                  </div>
                  {openAngebotDetails == true && (
                    <div className={classes.basiscontainer}>
                      <div>
                        <label className="text-sm font-bold">Online seit</label>
                        <Select
                          styles={style}
                          options={schads}
                          placeholder="Alle"
                          className="mt-1 mb-1"
                        />
                      </div>
                      <div className={`${classes.materialcontainer} mt-2`}>
                        <div>
                            <ControlledCheckbox onUpdate={val => {
                                setIsMwStAusweisbar(val);
                            }} label="MwSt. ausweisbar" />
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}
          <div className={classes.c2}>
          { width >= 621 &&<div className={classes.c2r1}>
               <div className={classes.c2r1bottom}>
                <div className={classes.direktsuchecontainer}>
                  <input
                    type={"text"}
                    className={classes.direktsuche}
                    placeholder="Direktsuche"
                  />
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
                <div className={classes.questioncontainer}>
                <img
                    src={"/images/info.svg"}
                    onMouseOver={() => setInfoOpen(true)}
                    onMouseLeave={() => setInfoOpen(false)}
                    className={classes.infosvg}

                />
                                        {infoOpen == true && (
                          <div className={classes.infoexplanation}>
                            <div className={classes.triangle}></div>
                            Lorem ipsum dolor sit Amet, InsecteturLorem
                          </div>
                        )}
          </div>
              </div>
              {width >= 1250 && (
                <div className={classes.view}>
                  <ListView
                    className={`${classes.listview} ${
                      gridView == true && classes.viewactive
                    } ${"mr-4"}`}
                    onClick={() => setGridView(true)}
                  />
                  <GridView
                    className={` ${classes.gridview} ${
                      gridView == false && classes.viewactive
                    } `}
                    onClick={() => setGridView(false)}
                  />
                </div>
              )}
            </div>}
            <div className={`${classes.c2r2}`}>
              <div
                className={`${
                  gridView == true
                    ? classes.carlistcontainer
                    : classes.gridlayout
                } `}
              >
                {angebote.map((fav, index) => (
                  <div key={index} className={width >= 1250 && classes.adprop}>
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
                      treibstoff={fav.treibstoff}
                      seller={fav.seller}
                      state={fav.state}
                      country={fav.country}
                    />
                  </div>
                ))}
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
  );
}

export default SearchResults;
