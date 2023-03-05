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
import Pen from "./../public/pen.svg";
import Bin from "./../public/bin.svg";
import { useEffect } from "react";
import SelectCheckbox from "./ui/SelectCheckbox";
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
      id: 0,
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
      brand: "Audi",
      model: "R8",
      bodyType: "Cabrio",
      transmissionType: "Schaltgetriebe",
      conditionOption: "Gebrauchtwagen",
      performance: "177 PS (130kW)",
      exteriourColour: "Weiß",
      upholstery: "Stoff",
      fuelType: "Diesel",
      pollutantClass: "Euro 5",
      seats: "5",
      doors: "4"
    },
    {
      id: 1,
      seller: "Privat",
      preis: 500,
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
      brand: "Audi",
      model: "R8",
      bodyType: "Cabrio",
      transmissionType: "Schaltgetriebe",
      conditionOption: "Gebrauchtwagen",
      performance: "177 PS (130kW)",
      exteriourColour: "Weiß",
      upholstery: "Stoff",
      fuelType: "Diesel",
      pollutantClass: "Euro 5",
      seats: "5",
      doors: "4"
    },
    {
      id: 2,
      seller: "Privat",
      preis: 500,
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
      brand: "Audi",
      model: "R8",
      bodyType: "Cabrio",
      transmissionType: "Schaltgetriebe",
      conditionOption: "Gebrauchtwagen",
      performance: "177 PS (130kW)",
      exteriourColour: "Weiß",
      upholstery: "Stoff",
      fuelType: "Diesel",
      pollutantClass: "Euro 5",
      seats: "5",
      doors: "4"
    },
    {
      id: 3,
      seller: "Privat",
      preis: 500,
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
      brand: "Audi",
      model: "R8",
      bodyType: "Cabrio",
      transmissionType: "Schaltgetriebe",
      conditionOption: "Gebrauchtwagen",
      performance: "177 PS (130kW)",
      exteriourColour: "Weiß",
      upholstery: "Stoff",
      fuelType: "Diesel",
      pollutantClass: "Euro 5",
      seats: "5",
      doors: "4"
    },
    {
      id: 4,
      seller: "Privat",
      preis: 500,
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
      brand: "Audi",
      model: "R8",
      bodyType: "Cabrio",
      transmissionType: "Schaltgetriebe",
      conditionOption: "Gebrauchtwagen",
      performance: "177 PS (130kW)",
      exteriourColour: "Weiß",
      upholstery: "Stoff",
      fuelType: "Diesel",
      pollutantClass: "Euro 5",
      seats: "5",
      doors: "4"
    },
    {
      id: 5,
      seller: "Privat",
      preis: 500,
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
      brand: "Audi",
      model: "R8",
      bodyType: "Cabrio",
      transmissionType: "Schaltgetriebe",
      conditionOption: "Gebrauchtwagen",
      performance: "177 PS (130kW)",
      exteriourColour: "Weiß",
      upholstery: "Stoff",
      fuelType: "Diesel",
      pollutantClass: "Euro 5",
      seats: "5",
      doors: "4"
    },
    {
      id: 6,
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
      brand: "Audi",
      model: "R8",
      bodyType: "Cabrio",
      transmissionType: "Schaltgetriebe",
      conditionOption: "Gebrauchtwagen",
      performance: "177 PS (130kW)",
      exteriourColour: "Weiß",
      upholstery: "Stoff",
      fuelType: "Diesel",
      pollutantClass: "Euro 5",
      seats: "5",
      doors: "4"
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
  const [grenzuebergreifend, setGrenzuebergreifend] = useState();
  const [isNichtraucherfahrzeug, setIsNichtraucherfahrzeug] = useState(false);
  const [isGarantie, setIsGarantie] = useState(false);
  const [isScheckhaftgepflegt, setIsScheckhaftgepflegt] = useState(false);
  const [isHerstellerzertifizierung, setIsHerstellerzertifizierung] =
    useState(false);
  const [metalliclackierung, setMetalliclackierung] = useState(false);
  const [isRusspartikelfilter, setIsRusspartikelfilter] = useState(false);
  const [isMwStAusweisbar, setIsMwStAusweisbar] = useState(false);

  // Selekt-Inputs
  const [selectedKarroserrieformen, setSelectedKarroserrieformen] = useState(
    []
  );
  const handleSelectedKarroserieformenChange = (newSelectedOptions) => {
    setSelectedKarroserrieformen(newSelectedOptions);
    // Map the selected options to filter objects
    const newFilters = newSelectedOptions.map((option) => {
      return {
        name: "Karroserrieform",
        value: option.label,
      };
    });
    // Remove any existing Karroserrieform filters from the filter list
    const filtersWithoutKarroserrieform = filters.filter(
      (filter) => filter.name !== "Karroserrieform"
    );
    // Add the new Karroserrieform filters to the list
    const updatedFilters = [...filtersWithoutKarroserrieform, ...newFilters];
    setFilters(updatedFilters);
  };

  const [selectedKraftstoffe, setSelectedKraftstoffe] = useState([]);
  const handleSelectedKraftstoffe = (newSelectedOptions) => {
    setSelectedKraftstoffe(newSelectedOptions);
    // Map the selected options to filter objects
    const newFilters = newSelectedOptions.map((option) => {
      return {
        name: "Kraftstoff",
        value: option.label,
      };
    });
    // Remove any existing Karroserrieform filters from the filter list
    const filtersWithoutKarroserrieform = filters.filter(
      (filter) => filter.name !== "Kraftstoff"
    );
    // Add the new Karroserrieform filters to the list
    const updatedFilters = [...filtersWithoutKarroserrieform, ...newFilters];
    setFilters(updatedFilters);
  };

  const [selectedMaterial, setSelectedMaterial] = useState([]);
  const handleSelectedMaterial = (newSelectedOptions) => {
    setSelectedMaterial(newSelectedOptions);
    // Map the selected options to filter objects
    const newFilters = newSelectedOptions.map((option) => {
      return {
        name: "Material",
        value: option.label,
      };
    });
    // Remove any existing Material filters from the filter list
    const filtersWithoutMaterial = filters.filter(
      (filter) => filter.name !== "Material"
    );
    // Add the new Material filters to the list
    const updatedFilters = [...filtersWithoutMaterial, ...newFilters];
    setFilters(updatedFilters);
  };

  const [selectedPolsterfarben, setSelectedPolsterfarben] = useState([]);

  const handleSelectedPolsterfarbe = (newSelectedOption) => {
    const optionIndex = selectedPolsterfarben.findIndex(option => option.value === newSelectedOption.value);
    if (optionIndex !== -1) {
      // If the option is already selected, remove it
      setSelectedPolsterfarben(prevSelectedOptions => {
        const updatedSelectedOptions = [...prevSelectedOptions];
        updatedSelectedOptions.splice(optionIndex, 1);
        return updatedSelectedOptions;
      });
    } else {
      // If the option is not selected, add it
      setSelectedPolsterfarben(prevSelectedOptions => [...prevSelectedOptions, newSelectedOption]);
    }

    if (optionIndex !== -1) {
      // If the option is already selected, remove it
      setSelectedPolsterfarben(prevSelectedOptions => {
        const updatedSelectedOptions = [...prevSelectedOptions];
        updatedSelectedOptions.splice(optionIndex, 1);
        return updatedSelectedOptions;
      });
    } else {
      // If the option is not selected, add it
      setSelectedPolsterfarben(prevSelectedOptions => [...prevSelectedOptions, newSelectedOption]);
    
      // Create new filters based on all selected options
      const allSelectedOptions = [
        ...selectedKraftstoffe,
        ...selectedMaterial,
        ...selectedPolsterfarben
      ];
      const newFilters = allSelectedOptions.map(option => {
        return {
          name: "Polsterfarbe",
          value: option.label
        }
      });
    
      // Update the filter list with the new filters
      setFilters(newFilters);
    }
  }

  const [selectedGetriebe, setSelectedGetriebe] = useState([]);
  const handleSelectedGetriebe = (newSelectedOptions) => {
    setSelectedGetriebe(newSelectedOptions);
    // Map the selected options to filter objects
    const newFilters = newSelectedOptions.map((option) => {
      return {
        name: "Getriebe",
        value: option.label,
      };
    });
    // Remove any existing Karroserrieform filters from the filter list
    const filtersWithoutKarroserrieform = filters.filter(
      (filter) => filter.name !== "Getriebe"
    );
    // Add the new Karroserrieform filters to the list
    const updatedFilters = [...filtersWithoutKarroserrieform, ...newFilters];
    setFilters(updatedFilters);
  };
  // --------------------------------------------------
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

  const [filters, setFilters] = useState([]);

  const [openBasisdaten, setOpenBasisdaten] = useState(false);
  const [openAusstattung, setOpenAusstattung] = useState(false);
  const [openFarbe, setOpenFarbe] = useState(false);
  const [openPolsterFarbe, setOpenPolsterFarbe] = useState(false);
  const [openFahrzeugzustand, setOpenFahrzeugzustand] = useState(false);
  const [openUmwelt, setOpenUmwelt] = useState(false);
  const [openAngebotDetails, setOpenAngebotDetails] = useState(false);

  const [gigaInfoOpen, setGigaInfoOpen] = useState(false);
  const [gridView, setGridView] = useState(true);

  function handleDeselectOption(option, setSelectedOptions) {
    setSelectedOptions((prevOptions) =>
      prevOptions.filter((prevOption) => prevOption.value !== option.value)
    );
  }

  function handleDeleteFilter(index) {
    const reducedFilters = filters.filter((_, i) => i !== index);
    setFilters(reducedFilters);

    //  Call handleDeselectOption for each SelectCheckbox
     handleDeselectOption(
       { name: filters[index].name, value: filters[index].value },
       setSelectedGetriebe
     );
    handleDeselectOption(
      { name: filters[index].name, value: filters[index].value },
      setSelectedKraftstoffe
    );
    handleDeselectOption(
      { name: filters[index].name, value: filters[index].value },
      setSelectedKarroserrieformen
    );
    // handleDeselectOption(
    //   { name: filters[index].name, value: filters[index].value },
    //   setSelectedFahrzeugzustand
    // );
    handleDeselectOption(
      { name: filters[index].name, value: filters[index].value },
      setSelectedMaterial
    );
    handleDeselectOption(
      { name: filters[index].name, value: filters[index].value },
      setSelectedPolsterfarben
    );
    // handleDeselectOption(
    //   { name: filters[index].name, value: filters[index].value },
    //   setSelectedAussenfarben
    // );
    // handleDeselectOption(
    //   { name: filters[index].name, value: filters[index].value },
    //   setSelectedUnfallfahrzeug
    // );
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

  const polsterfarben = [
    { label: "Schwarz", value: "schwarz" },
    { label: "Grau", value: "grau" },
    { label: "Beige", value: "beige" },
    { label: "Braun", value: "braun" },
    { label: "Weiß", value: "weiß" },
    { label: "Rot", value: "rot" },
    { label: "Blau", value: "blau" },
    { label: "Grün", value: "grün" },
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

  const powerOptions = [
    { label: "50 PS (37 kW) oder weniger", value: "0-50" },
    { label: "51 - 100 PS (38 - 75 kW)", value: "51-100" },
    { label: "101 - 150 PS (76 - 110 kW)", value: "101-150" },
    { label: "151 - 200 PS (111 - 147 kW)", value: "151-200" },
    { label: "201 - 300 PS (148 - 221 kW)", value: "201-300" },
    { label: "Über 300 PS (Über 221 kW)", value: "300+" },
  ];

  const transmissionOptions = [
    { label: "Schaltgetriebe", value: "manual" },
    { label: "Automatik", value: "automatic" },
    { label: "Halbautomatik", value: "semiautomatic" },
  ];

  const doorOptions = [
    { label: "2 Türen", value: "2" },
    { label: "3 Türen", value: "3" },
    { label: "4 Türen", value: "4" },
    { label: "5 Türen", value: "5" },
    { label: "6 Türen oder mehr", value: "6+" },
  ];

  const sellerTypes = [
    { label: "Alle", value: "alle" },
    { label: "Privat", value: "private" },
    { label: "Händler", value: "commercial" },
  ];

  const conditionOptions = [
    { label: "Neuwertig", value: "as_new" },
    { label: "Gebraucht", value: "used" },
    { label: "Unfallfrei", value: "accident_free" },
    { label: "Unfallwagen", value: "damaged" },
    { label: "Nicht fahrbereit", value: "non_runable" },
  ];

  const colorOptions = [
    { label: "Beige", value: "beige" },
    { label: "Blau", value: "blue" },
    { label: "Braun", value: "brown" },
    { label: "Gelb", value: "yellow" },
    { label: "Gold", value: "gold" },
    { label: "Grau", value: "grey" },
    { label: "Grün", value: "green" },
    { label: "Orange", value: "orange" },
    { label: "Rot", value: "red" },
    { label: "Schwarz", value: "black" },
    { label: "Silber", value: "silver" },
    { label: "Violett", value: "purple" },
    { label: "Weiß", value: "white" },
  ];

  const priceRanges = [
    { label: "0 - 5000", value: "0-5000" },
    { label: "5000 - 10000", value: "5000-10000" },
    { label: "10000 - 20000", value: "10000-20000" },
    { label: "20000 - 50000", value: "20000-50000" },
    { label: "50000 - 100000", value: "50000-100000" },
    { label: "Über 100000", value: "100000+" },
  ];

  const mileageRanges = [
    { label: "0 - 10.000 km", value: "0-10000" },
    { label: "10.000 - 50.000 km", value: "10000-50000" },
    { label: "50.000 - 100.000 km", value: "50000-100000" },
    { label: "100.000 - 150.000 km", value: "100000-150000" },
    { label: "150.000 - 200.000 km", value: "150000-200000" },
    { label: "Über 200.000 km", value: "200000+" },
  ];

  const materials = [
    { label: "Baumwolle", value: "Baumwolle" },
    { label: "Leinen", value: "Leinen" },
    { label: "Wolle", value: "Wolle" },
    { label: "Seide", value: "Seide" },
    { label: "Polyester", value: "Polyester" },
    { label: "Nylon", value: "Nylon" },
    { label: "Leder", value: "Leder" },
    { label: "Pelz", value: "Pelz" },
    { label: "Denim", value: "Denim" },
    { label: "Gummi", value: "Gummi" },
    { label: "Metall", value: "Metall" },
    { label: "Kunststoff", value: "Kunststoff" },
  ];

  const vehicleOwners = [
    { label: "1 Vorbesitzer", value: "1" },
    { label: "2 Vorbesitzer", value: "2" },
    { label: "3 Vorbesitzer", value: "3" },
    { label: "4 Vorbesitzer", value: "4" },
    { label: "5 Vorbesitzer", value: "5" },
    { label: "6 Vorbesitzer", value: "6" },
    { label: "7 Vorbesitzer", value: "7" },
    { label: "8 Vorbesitzer", value: "8" },
    { label: "9 Vorbesitzer", value: "9" },
    { label: "10 Vorbesitzer", value: "10" },
    { label: "mehr als 10 Vorbesitzer", value: "11+" },
  ];

  const accidentStatus = [
    { label: "Unfallfrei", value: "unfallfrei" },
    { label: "Unfallwagen", value: "unfallwagen" },
  ];

  const emissions = [
    { label: "Euro 1", value: "1" },
    { label: "Euro 2", value: "2" },
    { label: "Euro 3", value: "3" },
    { label: "Euro 4", value: "4" },
    { label: "Euro 5", value: "5" },
    { label: "Euro 6", value: "6" },
  ];

  const particulateMatter = [
    { label: "Keine Plakette", value: "none" },
    { label: "Grüne Plakette", value: "green" },
    { label: "Gelbe Plakette", value: "yellow" },
    { label: "Rote Plakette", value: "red" },
    { label: "Blaue Plakette", value: "blue" },
  ];

  const onlineSince = [
    { label: "Heute", value: new Date() },
    { label: "Gestern", value: new Date("2023-02-07") },
    { label: "Letzte 7 Tage", value: new Date("2023-02-02") },
    { label: "Letzte 30 Tage", value: new Date("2023-01-10") },
    { label: "Letzte 90 Tage", value: new Date("2022-11-10") },
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

  const sitzplaetze = [
    { label: "2 Sitze", value: "2" },
    { label: "3 Sitze", value: "3" },
    { label: "4 Sitze", value: "4" },
    { label: "5 Sitze", value: "5" },
    { label: "6 Sitze", value: "6" },
    { label: "7 Sitze", value: "7" },
    { label: "8 Sitze", value: "8" },
    { label: "9 Sitze", value: "9" },
    { label: "10+ Sitze", value: "10+" },
  ];

  const fahrzeugzustaende = [
    { label: "Neuwertig", value: "neuwertig" },
    { label: "Gebraucht", value: "gebraucht" },
    { label: "Unfallfrei", value: "unfallfrei" },
    { label: "Beschädigt", value: "beschädigt" },
    { label: "Defekt", value: "defekt" },
  ];

  const handleFeatureSelect = (feature) => {
    const index = selectedFeatures.findIndex((f) => f.id === feature.id);
    if (index !== -1) {
      setSelectedFeatures(selectedFeatures.filter((f, i) => i !== index));
    } else {
      setSelectedFeatures([...selectedFeatures, feature]);
    }
  };

  // Ausstattungen OBEN

  // WEITERE MARKEN & MODELLE FUNKTION

  const brands = [
    { label: "Alle", value: "alle" },
    { label: "BMW", value: "bmw" },
    { label: "Audi", value: "Audi" },
  ];

  const [models, setModels] = useState([
    { label: "Alle", value: "alle" },
    { label: "R8", value: "R8" },
  ]);

  const [modals, setModals] = useState({
    data: [{ id: 0, active: true, brand: "Alle", model: "Alle", variant: "" }],
  });

  const [selectedOptions, setSelectedOptions] = useState([]);

  function SetModalBrand(e, index) {
    setModals((prevState) => {
      const newModals = [...prevState.data];
      newModals[index].brand = e.value;
      newModals[index].model = "Alle";
      newModals[index].variant = "";
      if (e.label === "Alle") {
        setDisabled(true);
      } else {
        setDisabled(false);
      }
      return { data: newModals };
    });
  }

  function SetModalModel(e, index) {
    setModals((prevState) => {
      const newModals = [...prevState.data];
      newModals[index].model = e.value;
      return { data: newModals };
    });
  }

  function SetModalVariant(e, index) {
    setModals((prevState) => {
      const newModals = [...prevState.data];
      newModals[index].variant = e.target.value;
      return { data: newModals };
    });
  }

  const [variante, setVariante] = useState("");

  const [disabled, setDisabled] = useState(true);

  function AddModal() {
    setModals((prevState) => {
      const newModal = {
        id: prevState.data.length,
        active: true, // set the active property of the new modal to true
        brand: "Alle",
        model: "Alle",
        variant: "",
      };
      const newData = prevState.data.map((modal) => {
        modal.active = false; // set the active property of all existing modals to false
        return modal;
      });
      newData.push(newModal);
      return { data: newData };
    });
  }

  function deleteModal(index) {
    setModals((prevState) => {
      const newData = [...prevState.data].filter((modal, i) => i !== index);
      if (newData.length === 1) {
        newData[0].active = true;
      }
      return { data: newData };
    });
  }

  function activateModal(index) {
    setModals((prevState) => {
      const newData = [...prevState.data].map((modal, i) => {
        if (i === index) {
          modal.active = true;
        } else {
          modal.active = false;
        }
        return modal;
      });
      return { data: newData };
    });
  }

  // Zurücksetzen

  function ResetAll() {
    setFilters([]);
    setModals((prevState) => {
      const lastModal = prevState.data[prevState.data.length - 1];
      const newModals = [{ ...lastModal }];
      return { data: newModals };
    });
    setGigaChecked(false);
    setIsNichtraucherfahrzeug(false);
    setIsGarantie(false);
    setIsScheckhaftgepflegt(false);
    setIsHerstellerzertifizierung(false);
    setMetalliclackierung(false);
    setIsRusspartikelfilter(false);
    setIsMwStAusweisbar(false);
    setGrenzuebergreifend(false);
  }

  useEffect(() => {

  }, [filters, handleSelectedPolsterfarbe])


  // Vergleichsfunktion
  const [valueChanger, setValueChanger] = useState(false);
  const [compare, setCompare] = useState([]);
  const [openCompare, setOpenCompare] = useState(false);
  const [compareShow, setCompareShow] = useState(false);

  function addOrUpdateCompare(newObj) {
    if(compare.length != 5){
      if(compare.some(obj => obj.id === newObj.id)){
        const index = compare.findIndex((obj) => obj.id === newObj.id);
        const reducedCompare = [...compare];
        reducedCompare.splice(index, 1);
        setCompare([...reducedCompare]);
      } else {
        setCompare([...compare, newObj]);
      }
    }
  }

  function handleDeleteCompare(index){
    var reducedCompare = [...compare];
    reducedCompare.splice(index, 1);
    setCompare(reducedCompare);
    if(compare.length == 1){
      setOpenCompare(false);
    }
  }

  useEffect(() => {
    if(compareShow == true){
      setCompareShow(false);
    }
  }, [compare])

  useEffect(() => {
    if(width <= 530){
      setValueChanger(false);
      setOpenCompare(false);
      setCompareShow(false);
    }
  }, [width])

  useEffect(() => {
    setValueChanger(e => !e)
  }, [setOpenCompare])

  return (
    <div
      className={`${classes.container} ${
        openAusstattung == true && "overflow-y-hidden"
      }`}
    >
            {/* id: id,
      preis: price,
      erstzulassung: baujahr,
      marke: brand,
      modell: model,
      karosserieform: bodyType,
      kilometer: kmStand,
      getriebe: transmissionType,
      fahrzeugzustand: conditionOption,
      leistung: performance,
      aussenfarbe: exteriourColour,
      polsterfarbe: upholstery,
      treibstoff: fuelType,
      schadstoffklasse: pollutantClass,
      sitze: seats,
      tuere: doors, */}
    
      {openCompare == true && width > 530 && <div className={classes.comparecon}>
        <div className={classes.compareconcloser} onClick={() => setOpenCompare(false)}></div>
        <div className={classes.comparecontainer}>
          <X className={classes.rightcloser} onClick={() => setOpenCompare(false)} />
        <div className={classes.compareheading}>Fahrzeuge vergleichen</div>
        <div className={classes.comparecontent}>
          <div className={classes.comparebar}>
            <div className={classes.secondbaritem}></div>
            <div className={classes.baritem}>Preis</div>
            <div className={classes.baritem}>Erstzulassung</div>
            <div className={classes.baritem}>Marke</div>
            <div className={classes.baritem}>Modell</div>
            <div className={classes.baritem}>Karosserieform</div>
            <div className={classes.baritem}>Kilometer</div>
            <div className={classes.baritem}>Getriebe</div>
            <div className={classes.baritem}>Fahrzeugzustand</div>
            <div className={classes.baritem}>Leistung</div>
            <div className={classes.baritem}>Außenfarbe</div>
            <div className={classes.baritem}>Polsterfarbe</div>
            <div className={classes.baritem}>Treibstoff</div>
            <div className={classes.baritem}>Schadstoffklasse</div>
            <div className={classes.baritem}>Anzahl Sitze</div>
            <div className={classes.baritem}>Anzahl Türe</div>
          </div>
          {compare.map((comp, index) => {

            
            var displayPrice = comp.preis.toLocaleString() + " €";
            var displayPs = comp.leistung.toLocaleString();
            var displayKmStand = comp.kilometer.toLocaleString() + " KM";

            return (<div className={classes.comparebar}>
            <div className={classes.secondbaritem}><div className="w-full h-full relative"><Image src={comp.img} layout='fill' objectFit="cover" /></div></div>
            <div className={classes.baritem}>{displayPrice}</div>
            <div className={classes.baritem}>{comp.erstzulassung}</div>
            <div className={classes.baritem}>{comp.marke}</div>
            <div className={classes.baritem}>{comp.modell}</div>
            <div className={classes.baritem}>{comp.karosserieform}</div>
            <div className={classes.baritem}>{displayKmStand}</div>
            <div className={classes.baritem}>{comp.getriebe}</div>
            <div className={classes.baritem}>{comp.fahrzeugzustand}</div>
            <div className={classes.baritem}>{displayPs}</div>
            <div className={classes.baritem}>{comp.aussenfarbe}</div>
            <div className={classes.baritem}>{comp.polsterfarbe}</div>
            <div className={classes.baritem}>{comp.treibstoff}</div>
            <div className={classes.baritem}>{comp.schadstoffklasse}</div>
            <div className={classes.baritem}>{comp.sitze}</div>
            <div className={classes.baritem}>{comp.tuere}</div>
          </div>)
          })}
        </div>
      </div>
      </div>}

     {compare.length >= 2 && openCompare == false && compareShow == false && width > 530 && <div className={classes.compareplaceholder}>
        <div className="w-full h-full relative">
          <div className={classes.comparebuttoncontainer}>
          <X className={classes.comparex} onClick={() => {
            setCompareShow(true);
          }} />

        <div className={classes.comparebuttonheading}>{compare.length} Fahrzeuge</div>
        <div className={classes.comparebutton} onClick={() => {
          setOpenCompare(true);
        }}>Vergleichen</div>
      </div></div>
      </div>}

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
              {filters.length != 0 && (
                <div className={classes.c1r2}>
                  <div className={classes.centeritems2}>
                    {filters.map((filter, index) => (
                      <div
                        key={index}
                        className={classes.filter}
                        onClick={() => handleDeleteFilter(index)}
                      >
                        <X className={classes.x} />
                        {filter.name}: {filter.value.length >= 10 ? filter.value.substring(0, 10) + "..." : filter.value}
                      </div>
                    ))}
                  </div>
                </div>
              )}
              <div className={classes.c1r2}>
                <div
                  className={`${classes.inputrowgiga} ${classes.marginbottom}`}
                >
                  <span className="mr-2">
                    <ControlledCheckbox
                      onUpdate={(val) => {
                        setGigaChecked(val);
                      }}
                      checked={gigaChecked}
                    />
                  </span>
                  <label className="cursor-pointer" htmlFor="gigacheckbox">
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
                      <div className={classes.selectcar}>
                        {/* Here the code for the brand and model function. Check variables at top first */}

                        {modals.data.map((item, index) => (
                          <div key={index}>
                            {modals.data.length != 1 && (
                              <div
                                className={`${classes.modaltop} ${
                                  item.active == false &&
                                  classes.modaltopborderbottom
                                }`}
                              >
                                <div className={classes.modaltopleft}>
                                  <div className={classes.modalid}>
                                    {index + 1}.
                                  </div>
                                  <div className={classes.modalbrand}>
                                    {item.brand}
                                  </div>
                                  <div className={classes.modalmodel}>
                                    {item.model}
                                  </div>
                                </div>
                                {modals.data.length != 1 && (
                                  <div className={classes.modaltopleft}>
                                    <Pen
                                      className={classes.pen}
                                      onClick={() => activateModal(index)}
                                    />
                                    <Bin
                                      className={classes.bin}
                                      onClick={() => deleteModal(index)}
                                    />
                                  </div>
                                )}
                              </div>
                            )}
                            {item.active == true && (
                              <div className={`${classes.modalbottom} `}>
                                <Select
                                  options={brands}
                                  styles={style}
                                  onChange={(e) => {
                                    SetModalBrand(e, index);
                                  }}
                                  placeholder={"Marke"}
                                  className={"mb-2"}
                                />
                                <Select
                                  options={models}
                                  styles={style}
                                  onChange={(e) => SetModalModel(e, index)}
                                  placeholder={"Modell"}
                                  className={`mb-2`}
                                  isDisabled={disabled}
                                />
                                <input
                                  type={"text"}
                                  onChange={(e) => SetModalVariant(e, index)}
                                  className={classes.variantinput}
                                  placeholder="Variante"
                                />
                              </div>
                            )}
                          </div>
                        ))}

                        {modals.data.length != 3 && (
                          <div
                            className={`${classes.addmodal} ${classes.marginbottom}`}
                            onClick={AddModal}
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
                          <SelectCheckbox                     
                            options={carBodyTypes}
                            placeholder={"Karroserrieform"}
                            selectedOptions={selectedKarroserrieformen}
                            onSelectedOptionsChange={handleSelectedKarroserieformenChange}
                          />
                        </div>
                        <Select
                          styles={style}
                          options={priceRanges}
                          placeholder={`Preis in (${waehrung})`}
                          className="mt-2"
                          onChange={(e) => {
                            setFilters(prevFilters => {
                              const newFilters = prevFilters.filter(f => f.name !== "Preis");
                              return [
                                ...newFilters,
                                { name: "Preis", value: e.label }
                              ];
                            });
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
    setFilters(filters => {
      const filteredArray = filters.filter((filter) => filter.name !== "EZ von");
      return [...filteredArray, { name: "EZ von", value: e.label }];
    });
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
    setFilters(filters => {
      const filteredArray = filters.filter((filter) => filter.name !== "EZ bis");
      return [...filteredArray, { name: "EZ bis", value: e.label }];
    });
  }}
/>
                          </div>
                        </div>
                        <div className="mt-2">
                          <SelectCheckbox
                            options={fuelTypes}
                            placeholder={"Kraftstoff"}
                            selectedOptions={selectedKraftstoffe}
                            onSelectedOptionsChange={handleSelectedKraftstoffe}
                          />
                        </div>
                        <Select
                          styles={style}
                          options={countries}
                          placeholder="Land"
                          className="mt-2"
                          onChange={(e) => {
                            setFilters([
                              ...filters.filter((f) => f.name !== "Land"),
                              { name: "Land", value: e.label },
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
    setFilters([
      ...filters.filter((f) => f.name !== "Umkreis"),
      { name: "Umkreis", value: e.label },
    ]);
  }}
/>
                        </div>
                        <Select
  styles={style}
  options={mileageRanges}
  placeholder="Kilometerstand"
  className="mt-2"
  onChange={(e) => {
    setFilters([
      ...filters.filter((f) => f.name !== "Kilometerstand"),
      { name: "Kilometerstand", value: e.label },
    ]);
  }}
/>
                        <Select
                          styles={style}
                          options={powerOptions}
                          placeholder="Leistung"
                          className="mt-2"
                          onChange={(e) => {
                            setFilters([
                              ...filters.filter((f) => f.name !== "Leistung"),
                              { name: "Leistung", value: e.label },
                            ]);
                          }}
                        />
                        <div className={`mt-2`}>
                           <SelectCheckbox
                            options={transmissionOptions}
                            placeholder={"Getriebe"}
                            selectedOptions={selectedGetriebe}
                            onSelectedOptionsChange={handleSelectedGetriebe}
                          /> 
                        </div>
                        <div
                          className={`${classes.anzahltuerencontainer} ${classes.marginbottom}`}
                        >
                          <div className={`${classes.flexverkaeuferart}`}>
                            <Select
                              styles={style}
                              options={doorOptions}
                              placeholder={"Anzahl Türen"}
                              className={"mt-2 w-full"}
                              onChange={(e) => {
                                setFilters([
                                  ...filters.filter((f) => f.name !== "Anzahl Türen"),
                                  { name: "Anzahl Türen", value: e.label },
                                ]);
                              }}
                            />
                          </div>
                        </div>
                        <Select
                          styles={style}
                          options={sitzplaetze}
                          placeholder="Sitzplätze"
                          className="w-full mt-2"
                          onChange={(e) => {
                            setFilters([
                              ...filters.filter((f) => f.name !== "Sitzplätze"),
                              { name: "Sitzplätze", value: e.label },
                            ]);
                          }}
                        />
                        <div className={classes.flexverkaeuferart}>
                          <Select
                            styles={style}
                            options={sellerTypes}
                            placeholder="Verkäuferart"
                            className="w-full mt-2"
                            onChange={(e) => {
                              setFilters([
                                ...filters.filter((f) => f.name !== "Verkäuferart"),
                                { name: "Verkäuferart", value: e.label },
                              ]);
                            }}
                          />
                        </div>
                        <div
                          className={`${classes.fahrzeugzustandcontainer} mt-2`}
                        >
                          {/* <SelectCheckbox
                            options={fahrzeugzustaende}
                            placeholder="Fahrzeugzustand"
                            selectedOptions={selectedFahrzeugzustand}
                            onSelectedOptionsChange={
                              handleSelectedFahrzeugzustand
                            }
                          /> */}
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
                      <div className="text-13">
                        <div className="mb-2">
                          {/* <SelectCheckbox
                            options={colorOptions}
                            placeholder={"Außenfarbe"}
                            selectedOptions={selectedAussenfarben}
                            onSelectedOptionsChange={handleSelectedAussenfarben}
                          /> */}
                        </div>
                        <label className="text-sm font-semibold">
                          Lackierungsart
                        </label>
                        <div className={classes.colorrow}>
                          <ControlledCheckbox
                            onUpdate={(val) => {
                              setMetalliclackierung(val);
                            }}
                            checked={metalliclackierung}
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
                      <div className="mb-2 text-13">
                      <SelectCheckbox
                          options={polsterfarben}
                          placeholder={"Polsterfarbe"}
                          selectedOptions={selectedPolsterfarben}
                          onSelectedOptionsChange={handleSelectedPolsterfarbe}
                        />
                      </div>
                      <div className="text-13">
                        <SelectCheckbox
                          options={materials}
                          placeholder={"Material"}
                          selectedOptions={selectedMaterial}
                          onSelectedOptionsChange={handleSelectedMaterial}
                        />
                      </div>
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
                          options={vehicleOwners}
                          placeholder="Fahrzeughalter (.mind)"
                          className="mt-1 mb-1"
                          onChange={(e) => {
                            setFilters([
                              ...filters.filter((f) => f.name !== "Fahrzeughalter"),
                              { name: "Fahrzeughalter", value: e.label },
                            ]);
                          }}
                          id="selfahrz"
                        />
                      </div>
                      <div className={classes.marginbottom}>
                        <div className="mb-2">
                          {/* <SelectCheckbox
                            options={conditionOptions}
                            placeholder={"Unfallfahrzeug"}
                            selectedOptions={selectedUnfallfahrzeug}
                            onSelectedOptionsChange={
                              handleSelectedUnfallfahrzeug
                            }
                          /> */}
                        </div>
                      </div>
                      <div className={`${classes.materialcontainer}`}>
                        <div>
                          <ControlledCheckbox
                            onUpdate={(val) => {
                              setIsNichtraucherfahrzeug(val);
                            }}
                            checked={isNichtraucherfahrzeug}
                            label="Nichtraucherfahrzeug"
                          />
                        </div>
                        <div>
                          <ControlledCheckbox
                            onUpdate={(val) => {
                              setIsGarantie(val);
                            }}
                            checked={isGarantie}
                            label="Garantie"
                          />
                        </div>
                        <div>
                          <ControlledCheckbox
                            onUpdate={(val) => {
                              setIsScheckhaftgepflegt(val);
                            }}
                            checked={isScheckhaftgepflegt}
                            label="Scheckhaftgepflegt"
                          />
                        </div>
                        <div>
                          <ControlledCheckbox
                            onUpdate={(val) => {
                              setIsHerstellerzertifizierung(val);
                            }}
                            checked={isHerstellerzertifizierung}
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
                          options={emissions}
                          placeholder="Alle"
                          className="mt-1 mb-1"
                          onChange={(e) => {
                            setFilters([
                              ...filters.filter((f) => f.name !== "Schadstoffklasse"),
                              { name: "Schadstoffklasse", value: e.label },
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
                          options={particulateMatter}
                          placeholder="Alle"
                          className="mt-1 mb-1"
                          onChange={(e) => {
                            setFilters([
                              ...filters.filter((f) => f.name !== "Feinstaubplakette"),
                              { name: "Feinstaubplakette", value: e.label },
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
                            checked={isRusspartikelfilter}
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
                          options={onlineSince}
                          placeholder="Online seit"
                          className="mt-1 mb-1"
                          onChange={(e) => {
                            setFilters([
                              ...filters.filter((f) => f.name !== "Online seit"),
                              { name: "Online seit", value: e.label },
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
                            checked={isMwStAusweisbar}
                            label="MwSt. ausweisbar"
                          />
                        </div>
                        <div className="mt-2">
                          <ControlledCheckbox
                            onUpdate={(val) => {
                              setGrenzuebergreifend(val);
                            }}
                            checked={grenzuebergreifend}
                            label={"Grenzübergreifend"}
                          />
                        </div>
                      </div>
                    </div>
                  )}
                </div>
                <div>
                  <div className={classes.filtersrow}>
                    <button
                      className={classes.delfilters}
                      onClick={() => {
                        ResetAll();
                      }}
                    >
                      Zurücksetzen
                    </button>
                    <button className={classes.savesearch}>
                      Suche speichern
                    </button>
                  </div>
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
                      id={index}
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
                      valueChanger={valueChanger}
                      brand={fav.brand}
                      model={fav.model}
                      bodyType={fav.bodyType}
                      transmissionType={fav.transmissionType}
                      conditionOption={fav.conditionOption}
                      performance={fav.performance}
                      exteriourColour={fav.exteriourColour}
                      upholstery={fav.upholstery}
                      fuelType={fav.fuelType}
                      pollutantClass={fav.pollutantClass}
                      seats={fav.seats}
                      doors={fav.doors}
                      onAddCompare={e => addOrUpdateCompare(e)}
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
