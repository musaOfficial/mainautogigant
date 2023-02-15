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
import TopRow from "./ui/TopRow";
import ControlledCheckbox from "./ui/ControlledCheckbox";
import X from "./../public/x.svg";

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
      fontSize: "13px",
      borderRadius: "10px",
      width: "100%",
      cursor: "pointer",
      height: "40px !important",
    }),
    option: (styles, state) => ({
      ...styles,
      backgroundColor: state.isSelected ? "#fbb900" : "",
      "&:active": "#fbb90080",
      "&:hover": {
        backgroundColor: "#FFE497",
      },
      "&:focus": {
        backgroundColor: "#FBB900",
      },
      fontSize: "13px",
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
  const [isHerstellerzertifizierung, setIsHerstellerzertifizierung] =
    useState(false);
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
    { name: "Kraftstoff", value: "Benzin" },
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

  const addModel = () => {
    setModelItems([
      ...modelItems,
      {
        brandName: brandName,
        modelName: modelName,
        varient: varient,
      },
    ]);
    setBrandName("");
    setVarient("");
    setModelName("");
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
    { label: "2020", value: 2020 },
    { label: "2015", value: 2015 },
    { label: "2010", value: 2010 },
    { label: "2005", value: 2005 },
    { label: "2000", value: 2000 },
    { label: "1990", value: 1990 },
    { label: "1980", value: 1980 },
  ];

  const priceRanges = [
    { label: "500 €", value: 500 },
    { label: "1000 €", value: 1000 },
    { label: "5000 €", value: 5000 },
    { label: "10000 €", value: 10000 },
    { label: "20000 €", value: 20000 },
    { label: "50000 €", value: 50000 },
    { label: "100000 €", value: 100000 },
  ];

  const countries = [
    { label: "Österreich", value: "Österreich" },
    { label: "Deutschland", value: "Deutschland" },
    { label: "Türkei", value: "Türkei" },
    { label: "Qatar", value: "Qatar" },
    { label: "Schweiz", value: "Schweiz" },
    { label: "Albanien", value: "Albanien" },
    { label: "Belgien", value: "Belgien" },
    { label: "Bulgarien", value: "Bulgarien" },
    { label: "Dänemark", value: "Dänemark" },
    { label: "Estland", value: "Estland" },
    { label: "Finnland", value: "Finnland" },
    { label: "Frankreich", value: "Frankreich" },
    { label: "Griechenland", value: "Griechenland" },
    {
      label: "Ungarn",
      value: "Ungarn",
    },
    { label: "Irland", value: "Irland" },
    { label: "Italien", value: "Italien" },
    { label: "Kroatien", value: "Kroatien" },
    { label: "Lettland", value: "Lettland" },
    { label: "Litauen", value: "Litauen" },
    { label: "Luxemburg", value: "Luxemburg" },
    { label: "Malta", value: "Malta" },
    { label: "Niederlande", value: "Niederlande" },
    { label: "Norwegen", value: "Norwegen" },
    { label: "Polen", value: "Polen" },
    { label: "Portugal", value: "Portugal" },
    { label: "Rumänien", value: "Rumänien" },
    { label: "Schweden", value: "Schweden" },
    { label: "Slowakei", value: "Slowakei" },
    { label: "Slowenien", value: "Slowenien" },
    { label: "Spanien", value: "Spanien" },
  ];

  const [infoOpen, setInfoOpen] = useState(false);

  // Ausstattungen UNTEN
  const [selectedFeatures, setSelectedFeatures] = useState([]);
  const [visibility, setVisibility] = useState(true);

  const featuresKomfort = [
    { id: 1, name: "Aut. Heckklappe" },
    { id: 2, name: "Bordcomputer" },
    { id: 3, name: "elektr. Fensterheber" },
    { id: 4, name: "elektr. Sitze" },
    { id: 5, name: "elektr. Spiegel" },
    { id: 6, name: "Frontscheibenheizung" },
    { id: 7, name: "Head-Up-Display" },
    { id: 8, name: "ISOFIX" },
    { id: 9, name: "Keyless entry" },
    { id: 10, name: "Klimaanlage" },
    { id: 11, name: "Klimaautomatik" },
    { id: 12, name: "Lederausstattung" },
    { id: 13, name: "Lederlenkrad" },
    { id: 14, name: "Lenkradheizung" },
    { id: 15, name: "Lordosenstütze" },
    { id: 16, name: "Mittelarmlehne" },
    { id: 17, name: "Multifunktionslenkrad" },
    { id: 18, name: "Schisack" },
    { id: 19, name: "Servolenkung" },
    { id: 20, name: "Sitzheizung" },
    { id: 21, name: "Sportsitze" },
    { id: 22, name: "Zentralverriegelung" },
  ];
  const featuresInfotainment = [
    { id: 23, name: "Android Auto" },
    { id: 24, name: "Apple CarPlay" },
    { id: 25, name: "Bluethoot / USB" },
    { id: 26, name: "CD Player" },
    { id: 27, name: "Freisprecheinrichtung" },
    { id: 28, name: "Handy induktiv laden" },
    { id: 29, name: "Media-Interface / mp3" },
    { id: 30, name: "Navigationssystem" },
    { id: 31, name: "Radio" },
  ];
  const featuresSicherheit = [
    { id: 32, name: "ABS" },
    { id: 33, name: "Alarmanlage" },
    { id: 34, name: "Antriebsschlupfregelung (ASR)" },
    { id: 35, name: "Beifahrerairbags" },
    { id: 36, name: "Fahrerairbag" },
    { id: 37, name: "Kopfairbags" },
    { id: 38, name: "Lichtsensor" },
    { id: 39, name: "Notrufsystem" },
    { id: 40, name: "Parksensor hinten" },
    { id: 41, name: "Parksensor vorne & hinten" },
    { id: 42, name: "Regensensor" },
    { id: 43, name: "Reifendrucksensor" },
    { id: 44, name: "Seitenairbags" },
    { id: 45, name: "Sperrdifferential" },
    { id: 46, name: "Stabilitätsprogramme (ESP)" },
  ];
  const featuresFahrassistenzsysteme = [
    { id: 47, name: "Abstandstempomat" },
    { id: 48, name: "Einparkhilfe" },
    { id: 49, name: "Fernlichtassistent" },
    { id: 50, name: "Rückfahrkamera" },
    { id: 51, name: "Spurhalteassistent" },
    { id: 52, name: "Teilautonomes Fahren" },
    { id: 53, name: "Tempomat" },
    { id: 54, name: "Totwinkelassistent" },
  ];
  const featuresScheinwerfer = [
    { id: 55, name: "Kurvenfahrlicht" },
    { id: 56, name: "Laserlicht" },
    { id: 57, name: "LED-Scheinwerfer" },
    { id: 58, name: "Nebelscheinwerfer" },
    { id: 59, name: "Tagfahrlicht" },
    { id: 60, name: "Xenon" },
  ];
  const featuresExtras = [
    { id: 61, name: "8-fach Bereift" },
    { id: 62, name: "Anhängerkupplung" },
    { id: 63, name: "Behindertengerecht" },
    { id: 64, name: "Dachgepäckträger" },
    { id: 65, name: "Dachreling" },
    { id: 66, name: "Komfortfahrwerk" },
    { id: 67, name: "Leasingfähig" },
    { id: 68, name: "Leichtmetall-/Alufelgen" },
    { id: 69, name: "Metallic-Lackierung" },
    { id: 70, name: "MwSt. ausweisbar" },
    { id: 71, name: "Nichtraucherfahrzeug" },
    { id: 72, name: "Panoramadach" },
    { id: 73, name: "Schaltwippen" },
    { id: 74, name: "Schiebedach" },
    { id: 75, name: "Servicegepflegt" },
    { id: 76, name: "Sportfahrwerk" },
    { id: 77, name: "Sportpaket" },
    { id: 78, name: "Standheizung" },
    { id: 79, name: "Start/Stopp-Automatik" },
    { id: 80, name: "Winterpaket" },
  ];

  const handleFeatureSelect = (feature) => {
    const index = selectedFeatures.findIndex((f) => f.id === feature.id);
    if (index !== -1) {
      setSelectedFeatures(selectedFeatures.filter((f, i) => i !== index));
    } else {
      setSelectedFeatures([...selectedFeatures, feature]);
    }
  };

  useEffect(() => {
    console.log(selectedFeatures);
  }, [selectedFeatures]);

  // Ausstattungen OBEN

  useEffect(() => {
    console.log(brandName);
    console.log(modelName);
    console.log(varient);
  }, [brandName, modelName, varient]);

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
            <div className={classes.ausstattungtop}>Ausstattung</div>
            <div className={classes.itemcontainer}>
              <div className={classes.itemsection}>
                <div className={classes.itemheading}>
                  Innenausstattung & Komfort
                </div>
                <div className={classes.items}>
                  {featuresKomfort.map((feature) => (
                    <ControlledCheckbox
                      key={feature.id}
                      label={feature.name}
                      onUpdate={() => {
                        handleFeatureSelect(feature);
                      }}
                      checked={selectedFeatures.some(
                        (feat) => feat.id === feature.id
                      )}
                    />
                  ))}
                </div>
              </div>
              <div className={classes.itemsection}>
                <div className={classes.itemheading}>
                  Infotainment & Konnektivität
                </div>
                <div className={classes.items}>
                  {featuresInfotainment.map((feature) => (
                    <ControlledCheckbox
                      key={feature.id}
                      label={feature.name}
                      onUpdate={() => handleFeatureSelect(feature)}
                      checked={selectedFeatures.some(
                        (feat) => feat.id === feature.id
                      )}
                    />
                  ))}
                </div>
              </div>
              <div className={classes.itemsection}>
                <div className={classes.itemheading}>Sicherheit & Sensoren</div>
                <div className={classes.items}>
                  {featuresSicherheit.map((feature) => (
                    <ControlledCheckbox
                      key={feature.id}
                      label={feature.name}
                      onUpdate={() => handleFeatureSelect(feature)}
                      checked={selectedFeatures.some(
                        (feat) => feat.id === feature.id
                      )}
                    />
                  ))}
                </div>
              </div>
              <div className={classes.itemsection}>
                <div className={classes.itemheading}>Fahrassistenzsysteme</div>
                <div className={classes.items}>
                  {featuresFahrassistenzsysteme.map((feature) => (
                    <ControlledCheckbox
                      key={feature.id}
                      label={feature.name}
                      onUpdate={() => handleFeatureSelect(feature)}
                      checked={selectedFeatures.some(
                        (feat) => feat.id === feature.id
                      )}
                    />
                  ))}
                </div>
              </div>
              <div className={classes.itemsection}>
                <div className={classes.itemheading}>Scheinwerfer</div>
                <div className={classes.items}>
                  {featuresScheinwerfer.map((feature) => (
                    <ControlledCheckbox
                      key={feature.id}
                      label={feature.name}
                      onUpdate={() => handleFeatureSelect(feature)}
                      checked={selectedFeatures.some(
                        (feat) => feat.id === feature.id
                      )}
                    />
                  ))}
                </div>
              </div>
              <div className={classes.itemsection}>
                <div className={classes.itemheading}>Extras</div>
                <div className={classes.items}>
                  {featuresExtras.map((feature) => (
                    <ControlledCheckbox
                      key={feature.id}
                      label={feature.name}
                      onUpdate={() => handleFeatureSelect(feature)}
                      checked={selectedFeatures.some(
                        (feat) => feat.id === feature.id
                      )}
                    />
                  ))}
                </div>
              </div>
            </div>
            <div className={classes.ausstattungbottom}>
              <div
                className={classes.abbrechen}
                onClick={() => setOpenAusstattung(false)}
              >
                Abbrechen
              </div>
              <div
                className={classes.fertig}
                onClick={() => {
                  setOpenAusstattung(false);
                }}
              >
                Fertig
              </div>
            </div>
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
                      <X
                        className={classes.x}
                        onClick={() => handleDeleteFilter(index)}
                      />
                      {filter.name}: {filter.value}
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

                      {modelItems.map((item, index) => (
                        <div key={index} className={classes.modelitem}>
                          <span className={classes.el}>{item.brandName}</span>
                          <span className={classes.el}>{item.modelName}</span>
                          <span>{item.varient}</span>
                        </div>
                      ))}
                      <div className={classes.selectcar}>
                        {/* Here the code for the brand and model function. Check variables at top first */}
                        {modelItems.length != 5 && (
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
                        )}
                        <div className={classes.carbodytypes}>
                          <Select
                            options={carBodyTypes}
                            styles={style}
                            onChange={(e) => {
                              setInputKarosserieform(e.value);
                              setFilters([
                                ...filters,
                                { name: "Karosserieform", value: e.value },
                              ]);
                            }}
                            placeholder={"Karroserieform"}
                            className="mt-1"
                          />
                        </div>
                        <Select
                          styles={style}
                          options={van1}
                          placeholder={`Preis in (${waehrung})`}
                          className="mt-2"
                          onChange={(e) => {
                            setFilters([
                              ...filters,
                              { name: "Preis", value: e.value },
                            ]);
                          }}
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
                              onChange={(e) => {
                                setFilters([
                                  ...filters,
                                  { name: "EZ von", value: e.value },
                                ]);
                              }}
                            />
                          </div>
                          <div className="w-full">
                            <Select
                              className={classes.halfselect2}
                              options={firstRegistrationRanges}
                              styles={halfSelectStyle2}
                              placeholder="Bis"
                              onChange={(e) => {
                                setFilters([
                                  ...filters,
                                  { name: "EZ bis", value: e.value },
                                ]);
                              }}
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
                              setFilters([
                                ...filters,
                                { name: "Kraftstoff", value: e.value },
                              ]);
                            }}
                            placeholder={"Kraftstoff"}
                            className={` mt-2 ${classes.kraftstoffstyle}`}
                          />
                        </div>
                        <Select
                          styles={style}
                          options={countries}
                          placeholder="Land"
                          className="mt-2"
                          onChange={(e) => {
                            setFilters([
                              ...filters,
                              { name: "Land", value: e.value },
                            ]);
                          }}
                        />
                        <div className={`${classes.locdiv} mt-2`}>
                          <input
                            className={classes.varientinput}
                            placeholder="Stadt/PLZ"
                            onChange={(e) => {
                              setStadt(e.target.value);
                            }}
                          />
                          <MyLocation className={classes.mylocation} />
                        </div>
                        <div>
                          <Select
                            styles={style}
                            options={radiusRanges}
                            placeholder="Umkreis (km)"
                            className="mt-2"
                            onChange={(e) => {
                              setUmkreis(e.value);
                              setFilters([
                                ...filters,
                                { name: "Umkreis", value: e.value },
                              ]);
                            }}
                          />
                        </div>
                        <Select
                          styles={style}
                          options={getri}
                          placeholder="Kilometerstand"
                          className="mt-2"
                          onChange={(e) => {
                            setFilters([
                              ...filters,
                              { name: "Kilometerstand", value: e.value },
                            ]);
                          }}
                        />
                        <Select
                          styles={style}
                          options={getri}
                          placeholder="Leistung"
                          className="mt-2"
                          onChange={(e) => {
                            setFilters([
                              ...filters,
                              { name: "Leistung", value: e.value },
                            ]);
                          }}
                        />
                        <div className={`mt-2`}>
                          <Select
                            styles={style}
                            options={getri}
                            placeholder="Getriebe"
                            className=""
                            onChange={(e) => {
                              setFilters([
                                ...filters,
                                { name: "Getriebe", value: e.value },
                              ]);
                            }}
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
                              onChange={(e) => {
                                setFilters([
                                  ...filters,
                                  { name: "Anzahl Türen", value: e.value },
                                ]);
                              }}
                            />
                          </div>
                        </div>
                        <Select
                          styles={style}
                          options={van1}
                          placeholder="Sitzplätze"
                          className="w-full mt-2"
                          onChange={(e) => {
                            setFilters([
                              ...filters,
                              { name: "Sitzplätze", value: e.value },
                            ]);
                          }}
                        />
                        <div className={classes.flexverkaeuferart}>
                          <Select
                            styles={style}
                            options={van1}
                            placeholder="Verkäuferart"
                            className="w-full mt-2"
                            onChange={(e) => {
                              setFilters([
                                ...filters,
                                { name: "Verkäuferart", value: e.value },
                              ]);
                            }}
                          />
                        </div>
                        <div className={`${classes.fahrzeugzustandcontainer}`}>
                          <Select
                            styles={style}
                            options={van1}
                            placeholder={"Fahrzeugzustand"}
                            className="mt-2"
                            onChange={(e) => {
                              setFilters([
                                ...filters,
                                { name: "Fahrzeugzustand", value: e.value },
                              ]);
                            }}
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
                          onChange={(e) => {
                            setFilters([
                              ...filters,
                              { name: "Außenfarbe", value: e.value },
                            ]);
                          }}
                        />
                        <label className="text-sm font-semibold">
                          Lackierungsart
                        </label>
                        <div className={classes.colorrow}>
                          <ControlledCheckbox
                            onUpdate={(val) => {
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
                        onChange={(e) => {
                          setFilters([
                            ...filters,
                            { name: "Polsterfarbe", value: e.value },
                          ]);
                        }}
                      />
                      <Select
                        styles={style}
                        options={van1}
                        placeholder="Material"
                        className="mt-2"
                        onChange={(e) => {
                          setFilters([
                            ...filters,
                            { name: "Material", value: e.value },
                          ]);
                        }}
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
                        <Select
                          styles={style}
                          options={fahrz}
                          placeholder="Fahrzeughalter (.mind)"
                          className="mt-1 mb-1"
                          onChange={(e) => {
                            setFilters([
                              ...filters,
                              { name: "Fahrzeughalter", value: e.value },
                            ]);
                          }}
                          id="selfahrz"
                        />
                      </div>
                      <div className={classes.marginbottom}>
                        <Select
                          styles={style}
                          options={unfall}
                          placeholder="Unfallfahrzeug"
                          onChange={(e) => {
                            setFilters([
                              ...filters,
                              { name: "Unfallfahrzeug", value: e.value },
                            ]);
                          }}
                          className="mt-1 mb-1"
                        />
                      </div>
                      <div className={`${classes.materialcontainer}`}>
                        <div>
                          <ControlledCheckbox
                            onUpdate={(val) => {
                              setIsNichtraucherfahrzeug(val);
                            }}
                            label="Nichtraucherfahrzeug"
                          />
                        </div>
                        <div>
                          <ControlledCheckbox
                            onUpdate={(val) => {
                              setIsGarantie(val);
                            }}
                            label="Garantie"
                          />
                        </div>
                        <div>
                          <ControlledCheckbox
                            onUpdate={(val) => {
                              setIsScheckhaftgepflegt(val);
                            }}
                            label="Scheckhaftgepflegt"
                          />
                        </div>
                        <div>
                          <ControlledCheckbox
                            onUpdate={(val) => {
                              setIsHerstellerzertifizierung(val);
                            }}
                            label="Herstellerzertifizierung"
                          />
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
                          onChange={(e) => {
                            setFilters([
                              ...filters,
                              { name: "Schadstoffklasse", value: e.value },
                            ]);
                          }}
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
                          onChange={(e) => {
                            setFilters([
                              ...filters,
                              { name: "Feinstaubplakette", value: e.value },
                            ]);
                          }}
                        />
                      </div>
                      <div className={`${classes.materialcontainer}`}>
                        <div>
                          <ControlledCheckbox
                            onUpdate={(val) => {
                              setIsRusspartikelfilter(val);
                            }}
                            label="Rußpartikelfilter"
                          />
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
                        <Select
                          styles={style}
                          options={schads}
                          placeholder="Online seit"
                          className="mt-1 mb-1"
                          onChange={(e) => {
                            setFilters([
                              ...filters,
                              { name: "Online seit", value: e.value },
                            ]);
                          }}
                        />
                      </div>
                      <div className={`${classes.materialcontainer} mt-2`}>
                        <div>
                          <ControlledCheckbox
                            onUpdate={(val) => {
                              setIsMwStAusweisbar(val);
                            }}
                            label="MwSt. ausweisbar"
                          />
                        </div>
                        <div className="mt-2">
                          <ControlledCheckbox
                            onUpdate={(val) => {
                              setGrenz(val);
                            }}
                            label={"Grenzübergreifend"}
                          />
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}
          <div className={classes.c2}>
            {width >= 621 && (
              <div className={classes.c2r1}>
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
              </div>
            )}
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
