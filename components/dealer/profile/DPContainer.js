import Map from "./Map";
import AdCard from "../../dashboard/overview/AdCard";
import Link from "next/link";
import Input from "../../ui/Input";
import Instargram from "./../../../public/icons/instagram.svg";
import Facebook from "./../../../public/icons/facebook.svg";
import Tiktok from "./../../../public/icons/tiktok.svg";
import Youtube from "./../../../public/icons/youtube.svg";
import classes from "./DPContainer.module.css";
import Angebot from "../../ui/ads/Angebot";
import { useState, useEffect } from "react";
import Linkedin from "./../../../public/Linkedin.svg";
import Giglogo from "./../../../public/gigantlogo.jpg";
import Image from "next/image";
import Expand from "./../../../public/expand.svg";
import { Swiper, SwiperSlide } from "swiper/react";
import Closer from "./../../../public/closex.svg";
import FavSvg from "./../../../public/fav.svg";
import ShaSvg from "./../../../public/sha.svg";
import Clock from "./../../../public/clock.svg";
import GridView from './../../../public/gridview.svg';
import ListView from './../../../public/listview.svg';
import Select from 'react-select'
// Import Swiper styles

// import required modules
import { Navigation } from "swiper";
import TopRow from "../../ui/TopRow";
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

export default function DPContainer() {

  const style = {
    control: (base) => ({
      ...base,
      boxShadow: "none",
      border: "none",
      fontSize: '13px',
      borderRadius: '10px',
      width: "100%",
      cursor: "pointer",
      height: "40px",
      marginBottom: "24px"
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
          fontSize: '13px',
          borderRadius: '10px 0px 0px 10px',
          height: "40px",
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
          outline: "none",
          borderRadius: "10px",
          fontSize: '13px',
          borderRadius: '0 10px 10px 0',
          height: "40px",
          width: "100%",
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

  const [width, height] = useDeviceSize();

  const [angebote, setAngebote] = useState([
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
    {
      id: "sköafjasökldc",
      preis: 213520,
      title: "Mercedes AMG GT",
      adNo: "#294873205",
      start: "01/01/2020",
      end: "01/01/2022",
      imgSrc: "/images/draft-card-img-car-1.png",
      details: {
        erstzulassung: "11.04.2018",
        kraftstoff: "Diesel",
        leistung: "200 PS",
        kilometerstand: 1230,
        fahrzeugzustand: "Neu",
        getriebe: "Automatik",
        seller: false,
      },
      location: "Österreich, 2700 Wiener Neustadt",
      companyname: "Gigant Group Teknoloji A.S",
      gigalabel: true,
      colorad: true,
    },
    {
      id: "sköafjasökldc",
      preis: 2120,
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
        getriebe: "Schaltgetriebe",
        seller: true,
      },
      location: "Österreich, 2700 Wiener Neustadt",
      companyname: "Gigant Group Teknoloji A.S",
      gigalabel: true,
      colorad: true,
    },
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
    {
      id: "sköafjasökldc",
      preis: 213520,
      title: "Mercedes AMG GT",
      adNo: "#294873205",
      start: "01/01/2020",
      end: "01/01/2022",
      imgSrc: "/images/draft-card-img-car-1.png",
      details: {
        erstzulassung: "11.04.2018",
        kraftstoff: "Diesel",
        leistung: "200 PS",
        kilometerstand: 1230,
        fahrzeugzustand: "Neu",
        getriebe: "Automatik",
        seller: false,
      },
      location: "Österreich, 2700 Wiener Neustadt",
      companyname: "Gigant Group Teknoloji A.S",
      gigalabel: true,
      colorad: true,
    },
    {
      id: "sköafjasökldc",
      preis: 2120,
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
        getriebe: "Schaltgetriebe",
        seller: true,
      },
      location: "Österreich, 2700 Wiener Neustadt",
      companyname: "Gigant Group Teknoloji A.S",
      gigalabel: true,
      colorad: true,
    },
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
    {
      id: "sköafjasökldc",
      preis: 213520,
      title: "Mercedes AMG GT",
      adNo: "#294873205",
      start: "01/01/2020",
      end: "01/01/2022",
      imgSrc: "/images/draft-card-img-car-1.png",
      details: {
        erstzulassung: "11.04.2018",
        kraftstoff: "Diesel",
        leistung: "200 PS",
        kilometerstand: 1230,
        fahrzeugzustand: "Neu",
        getriebe: "Automatik",
        seller: false,
      },
      location: "Österreich, 2700 Wiener Neustadt",
      companyname: "Gigant Group Teknoloji A.S",
      gigalabel: true,
      colorad: true,
    },
    {
      id: "sköafjasökldc",
      preis: 2120,
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
        getriebe: "Schaltgetriebe",
        seller: true,
      },
      location: "Österreich, 2700 Wiener Neustadt",
      companyname: "Gigant Group Teknoloji A.S",
      gigalabel: true,
      colorad: true,
    },
    {
      id: "sköafjasökldc",
      preis: 2120,
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
        getriebe: "Schaltgetriebe",
        seller: true,
      },
      location: "Österreich, 2700 Wiener Neustadt",
      companyname: "Gigant Group Teknoloji A.S",
      gigalabel: true,
      colorad: true,
    },
  ]);

  const [bannerImgSrc, setBannerImgSrc] = useState("/images/reg-car.png");
  const [profileImgSrc, setProfileImgSrc] = useState(
    "/images/dealer-profile-breadcrumb-img.png"
  );
  const [amountStars, setAmountStars] = useState(7);
  const [aboutUs, setAboutUs] = useState(
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus euismod, leo at dapibus placerat, odio risus bibendum nulla, sit amet tincidunt massa nibh non risus. Aenean feugiat lacus a sapien tincidunt, id congue lacus suscipit. In hac habitasse platea dictumst. Nullam vitae lacus in nulla tincidunt pharetra eu eu tellus. Nunc aliquam elit vitae nisi commodo, in semper velit tincidunt. Integer aliquet ex vel felis pellentesque, vel blandit libero viverra. Sed ac suscipit libero, id tristique risus. Nam euismod suscipit enim, eu iaculis magna convallis in. Nam eget malesuada elit, eu pellentesque eros. Nulla auctor, odio id fringilla congue, quam erat suscipit odio, quis consectetur velit leo vel dolor."
  );

  // Variablen für die 5 Fotos unter dem Über Uns Text
  const [thumbImage1, setThumbImage1] = useState("/images/dp-thumb-img-1.png");
  const [thumbImage2, setThumbImage2] = useState("/images/dp-thumb-img-2.png");
  const [thumbImage3, setThumbImage3] = useState("/images/dp-thumb-img-3.png");
  const [thumbImage4, setThumbImage4] = useState("/images/dp-thumb-img-4.png");
  const [thumbImage5, setThumbImage5] = useState("/images/dp-thumb-img-5.png");

  const [thumbImages, setThumbImages] = useState([
    thumbImage1,
    thumbImage2,
    thumbImage3,
    thumbImage4,
    thumbImage5,
  ]);

  // Social Media URL's
  const [facebookUrl, setFacebookUrl] = useState("");
  const [instagramUrl, setInstagramUrl] = useState("");
  const [youtubeUrl, setYoutubeUrl] = useState("");
  const [linkedinUrl, setLinkedinUrl] = useState("");
  const [tiktokUrl, setTiktokUrl] = useState("");

  // Firmendaten
  const [tel, setTel] = useState("+43 987 654 3210");
  const [mail, setMail] = useState("support@example.com");
  const [website, setWebsite] = useState("www.example.com");

  // Kontaktdaten
  const [name, setName] = useState("");
  const [usermail, setUsermail] = useState("");
  const [message, setMessage] = useState("");

  // GALIERIE
  const [albumOpen, setAlbumOpen] = useState(false);
  const [selectedThumb, setSelectedThumb] = useState(0);

  // ÖFFNUNGSZEITEN
  var today = new Date().getDay();
  switch (today) {
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

  // JETZT GESCHLOSSEN || JETZT GEÖFFNET
  const companyOpen = false; // Jetzt geöffnet


  // Karosserieformen
  const bodyStyles = [
    {label: "Alle", value: "alle"},
    {label: "Coupé", value: "coupe"},
    {label: "Kombi", value: "wagon"},
    {label: "Cabrio", value: "convertible"},
    {label: "Limousine", value: "sedan"},
    {label: "SUV", value: "suv"},
    {label: "Pick-up", value: "pickup"},
    {label: "Van", value: "van"}
  ];

  const [selectedBodyStyle, setSelectedBodyStyle] = useState();


  // Brands

  let brands = [
    { label: "Toyota", value: "toyota", className: classes.style },
    { label: "BMW", value: "bmw", className: classes.style },
    { label: "Mercedes-Benz", value: "mercedes-benz", className: classes.style },
    { label: "Audi", value: "audi", className: classes.style },
    { label: "Volkswagen", value: "volkswagen", className: classes.style },
    { label: "Ford", value: "ford", className: classes.style },
    { label: "Honda", value: "honda", className: classes.style },
    { label: "Nissan", value: "nissan", className: classes.style },
    { label: "Mazda", value: "mazda" },
    { label: "Hyundai", value: "hyundai" }
];

  const [selectedBrand, setSelectedBrand] = useState();

// Models

  const [models, setModels] = useState([
      { label: "3 Series", value: "3 series" },
      { label: "5 Series", value: "5 series" },
      { label: "7 Series", value: "7 series" },
      { label: "X3", value: "x3" },
      { label: "X5", value: "x5" },
      { label: "X7", value: "x7" },
      { label: "Z4", value: "z4" },
      { label: "M2", value: "m2" },
      { label: "M3", value: "m3" },
      { label: "M4", value: "m4" }
  ]);

  const [selectedModel, setSelectedModel] = useState();


  var erstzulassungen = [{value: "beliebig", label: "beliebig"}];
  for(let i = 2023; i >= 1900; i-- ){
      erstzulassungen.push({value: i, label: i})
  }

  var preise = [{value: "beliebig", label: "beliebig"}];
  for(let i = 0; i < 105000; ){
      preise.push({value: i, label: i})
      if(i < 30000){
        i += 2500;
      } else {
        i += 10000
      }
    
  }

  const mileageRanges = [
    {label: "Beliebig", value: "beliebig"},
    {label: "5000", value: 5000},
    {label: "10000", value: 10000},
    {label: "20000", value: 20000},
    {label: "30000", value: 30000},
    {label: "40000", value: 40000},
    {label: "50000", value: 50000},
    {label: "100000", value: 100000},
    {label: "200000", value: 200000},
    {label: "300000", value: 300000},
    {label: "400000", value: 400000},
    {label: "500000", value: 500000}
  ];


  const [erstzulassungVon, setErstzulassungVon] = useState();
  const [erstzulassungBis, setErstzulassungBis] = useState();

  const [preisVon, setPreisVon] = useState();
  const [preisBis, setPreisBis] = useState();

  const [kilometerstandVon, setKilometerstandVon] = useState();
  const [kilometerstandBis, setKilometerstandBis] = useState();


  // Anzahl der veröffentlichten Inserate

  const anzahlAngebote = 5000;
  const displayAnzahlAngebote = anzahlAngebote.toLocaleString();


  const [gridView, setGridView] = useState(true);

  const anzeigen = [
    {label: "12", value: 12},
    {label: "16", value: 16},
    {label: "20", value: 20},
    {label: "24", value: 24},
  ]

  const [anzeige, setAnzeige] = useState();

  return (
    <div className="bg-theme-gray-10 lg:px-6 md:!px-0">
      {albumOpen == true && (
        <>
          <div className={classes.albumcontainer}>
            <div className={classes.albumimg}>
              <Image
                src={thumbImages[selectedThumb]}
                layout="fill"
                objectFit="cover"
              />
            </div>
            <div
              className={classes.closer}
              onClick={() => setAlbumOpen(false)}
            ></div>
            <Closer
              className={classes.close}
              onClick={() => setAlbumOpen(false)}
            />
          </div>
          <div></div>
        </>
      )}
      {albumOpen == true && (
        <div
          className={classes.albumcloser}
          onClick={() => setAlbumOpen((d) => !d)}
        ></div>
      )}
      <div className="w-10/12 lg:w-full max-w-ag-container mx-auto flex md:flex-col-reverse">
        <div className={`w-full p-6 pb-4 bg-white ${classes.profilecontainer}`}>
          <TopRow />
          <div className="relative">
            <img className={classes.bannerimg} src={bannerImgSrc} />
            <img className={classes.profileimg} src={profileImgSrc} />
          </div>
          <div className="flex mt-4 md:flex-col">
            <div className="flex-1 -mr-2">
              <div
                className={`flex items-center justify-between md:flex-col p-4 pb-1 rounded-tl-10 rounded-tr-10 bg-theme-gray-4 ${classes.top}`}
              >
                <div className="text-theme-gray-4">
                  <h2
                    className={`text-2xl md:text-lg font-bold ${classes.mtop}`}
                  >
                    AUDI Österreich GmbH
                  </h2>
                  <p className={`text-base md:text-13 ${classes.address}`}>
                    Musterstrasse 12, 1010 Wien, Österreich
                  </p>
                </div>
                <div className="flex">
                  <div
                    className={`flex items-center relative p-4 mx-0.5 justify-center group cursor-pointer ease-linear duration-100 hover:text-theme-yellow-2 bg-theme-gray-4 ${classes.iconcon}`}
                  >
                    <FavSvg className={classes.icon} />
                    <Link href="/">
                      <a
                        className="hidden group-hover:block absolute -bottom-4 hover:underline z-20 -right-6 text-theme-blue text-13 bg-white rounded-10 px-2 py-px shadow-md whitespace-nowrap"
                        target="_blank"
                        rel="noreferrer"
                      >
                        Händler merken
                        <span className="absolute h-4 w-4 -z-10 right-12 -top-1 rotate-45 bg-white"></span>
                      </a>
                    </Link>
                  </div>
                  <div
                    className={`flex items-center relative p-4 mr-0.5 justify-center group cursor-pointer ease-linear duration-100 hover:text-theme-yellow-2 bg-theme-gray-4 ${classes.iconcon}`}
                  >
                    <ShaSvg className={classes.icon} />
                    <div className="cursor-pointer hidden group-hover:block absolute top-14 mt-px z-20 -right-9 text-theme-blue text-13 bg-white rounded-10 px-2 py-px shadow-md whitespace-nowrap">
                      <span className="absolute h-4 w-4 -z-10 right-14 -top-1 rotate-45 bg-white"></span>
                      <div className="text-theme-gray-4 px-1 py-px">
                        <Link href="/">
                          <a
                            className="flex items-center ease-linear duration-200 hover:text-theme-yellow-2 text-theme-blue py-1"
                            target="_blank"
                            rel="noreferrer"
                          >
                            <svg
                              className="mr-2"
                              xmlns="http://www.w3.org/2000/svg"
                              width="19.999"
                              height="20"
                              viewBox="0 0 19.999 20"
                            >
                              <g
                                id="rz_email"
                                transform="translate(-112.779 -154.99)"
                              >
                                <path
                                  id="Path_1002"
                                  data-name="Path 1002"
                                  d="M131.175,164.709h-9.316l4.658,3.675Z"
                                  transform="translate(-3.738 -4.004)"
                                  fill="#6c757d"
                                />
                                <path
                                  id="Path_1003"
                                  data-name="Path 1003"
                                  d="M131.443,165.7l-5.517,4.348-5.517-4.348v7.987h11.034Z"
                                  transform="translate(-3.147 -4.408)"
                                  fill="#6c757d"
                                />
                                <path
                                  id="Path_1004"
                                  data-name="Path 1004"
                                  d="M122.779,154.99a10,10,0,1,0,10,10A10,10,0,0,0,122.779,154.99Zm6.433,15.221H116.346V159.77h12.866Z"
                                  transform="translate(0)"
                                  fill="#6c757d"
                                />
                              </g>
                            </svg>
                            E-Mail
                          </a>
                        </Link>
                        <button className="flex items-center ease-linear duration-200 hover:text-theme-yellow-2 text-theme-blue py-1">
                          <svg
                            className="mr-2"
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="19.999"
                            viewBox="0 0 20 19.999"
                          >
                            <path
                              id="rz_link"
                              d="M134.605,124.607a10,10,0,1,0,10,10A10,10,0,0,0,134.605,124.607Zm0,14.8-1.262,1.263a3.394,3.394,0,0,1-4.8-4.8l1.262-1.262a3.393,3.393,0,0,1,3.2-.9l-3.315,3.311a1.766,1.766,0,0,0,2.5,2.5L135.5,136.2A3.391,3.391,0,0,1,134.606,139.405Zm1.718-7.758a.878.878,0,0,1,1.241,1.242l-4.677,4.678a.878.878,0,0,1-1.242-1.242Zm4.343,1.7-1.262,1.262a3.388,3.388,0,0,1-3.2.9l3.313-3.314a1.766,1.766,0,0,0-2.5-2.5l-3.312,3.313a3.387,3.387,0,0,1,.9-3.2l1.262-1.263a3.394,3.394,0,0,1,4.8,4.8Z"
                              transform="translate(-124.606 -124.607)"
                              fill="#6c757d"
                            />
                          </svg>
                          Link kopieren
                        </button>
                        <Link href="/">
                          <a
                            className="flex items-center ease-linear duration-200 hover:text-theme-yellow-2 text-theme-blue py-1"
                            target="_blank"
                            rel="noreferrer"
                          >
                            <svg
                              className="mr-2"
                              xmlns="http://www.w3.org/2000/svg"
                              width="19.999"
                              height="19.999"
                              viewBox="0 0 19.999 19.999"
                            >
                              <g id="facebook" transform="translate(0 -0.073)">
                                <path
                                  id="Path_1001"
                                  data-name="Path 1001"
                                  d="M20,10.133a10.05,10.05,0,0,1-8.441,9.939V13.061h2.324l.442-2.9H11.558V8.278a1.446,1.446,0,0,1,1.625-1.567H14.44V4.241a15.236,15.236,0,0,0-2.232-.2c-2.278,0-3.766,1.389-3.766,3.9v2.211H5.909v2.9H8.441v7.011A10.056,10.056,0,1,1,20,10.133Z"
                                  fill="#6c757d"
                                />
                              </g>
                            </svg>
                            Facebook
                          </a>
                        </Link>
                        <Link href="/">
                          <a
                            className="flex items-center ease-linear duration-200 hover:text-theme-yellow-2 text-theme-blue py-1"
                            target="_blank"
                            rel="noreferrer"
                          >
                            <svg
                              className="mr-2"
                              xmlns="http://www.w3.org/2000/svg"
                              width="19.999"
                              height="19.999"
                              viewBox="0 0 19.999 19.999"
                            >
                              <path
                                id="icons8-whatsapp-480"
                                d="M13,3A9.983,9.983,0,0,0,4.426,18.125L3.09,23l4.979-1.307A10,10,0,1,0,13,3ZM9.577,8.335c.162,0,.329,0,.474.007.178,0,.372.017.558.428.221.488.7,1.713.763,1.837a.447.447,0,0,1,.019.433,1.816,1.816,0,0,1-.244.415c-.124.143-.26.321-.373.43-.124.124-.252.26-.109.508a7.409,7.409,0,0,0,1.377,1.714,6.724,6.724,0,0,0,1.992,1.229c.248.124.392.1.535-.062s.619-.72.786-.968.328-.205.553-.124,1.446.681,1.694.806.411.186.474.286a2.045,2.045,0,0,1-.142,1.178,2.491,2.491,0,0,1-1.67,1.175c-.457.042-.884.206-2.973-.617a10.151,10.151,0,0,1-4.233-3.74A4.8,4.8,0,0,1,8.05,10.711a2.789,2.789,0,0,1,.864-2.067A.91.91,0,0,1,9.577,8.335Z"
                                transform="translate(-3 -3)"
                                fill="#6c757d"
                              />
                            </svg>
                            WhatsApp
                          </a>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className={`p-4 text-theme-gray-4 bg-theme-gray-4 ${classes.bordercontainer}`}
              >
                <p className="text-base text-14">{aboutUs}</p>
              </div>
              <div className={`${classes.ratecontainer} w-full`}>
                <div
                  className={`flex items-center w-full text-base md:flex-col ${classes.flexbewertung}`}
                >
                  <div
                    className={`flex flex-col items-center text-13 w-full  md:mr-0 md:mb-3 ${classes.flexstars} `}
                  >
                    <div className="flex">
                      {amountStars == 0 && (
                        <>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="12.52"
                            height="12.505"
                            viewBox="0 0 12.52 12.505"
                          >
                            <path
                              id="star_FILL0_wght500_GRAD0_opsz48"
                              d="M5.894,15.955l1.449-4.743L3.5,8.452H8.243l1.51-5,1.51,5H16.02l-3.858,2.76,1.449,4.743L9.752,13.027Z"
                              transform="translate(-3.5 -3.45)"
                              fill="#c3c3c3"
                            />
                          </svg>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="12.52"
                            height="12.505"
                            viewBox="0 0 12.52 12.505"
                          >
                            <path
                              id="star_FILL0_wght500_GRAD0_opsz48"
                              d="M5.894,15.955l1.449-4.743L3.5,8.452H8.243l1.51-5,1.51,5H16.02l-3.858,2.76,1.449,4.743L9.752,13.027Z"
                              transform="translate(-3.5 -3.45)"
                              fill="#c3c3c3"
                            />
                          </svg>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="12.52"
                            height="12.505"
                            viewBox="0 0 12.52 12.505"
                          >
                            <path
                              id="star_FILL0_wght500_GRAD0_opsz48"
                              d="M5.894,15.955l1.449-4.743L3.5,8.452H8.243l1.51-5,1.51,5H16.02l-3.858,2.76,1.449,4.743L9.752,13.027Z"
                              transform="translate(-3.5 -3.45)"
                              fill="#c3c3c3"
                            />
                          </svg>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="12.52"
                            height="12.505"
                            viewBox="0 0 12.52 12.505"
                          >
                            <path
                              id="star_FILL0_wght500_GRAD0_opsz48"
                              d="M5.894,15.955l1.449-4.743L3.5,8.452H8.243l1.51-5,1.51,5H16.02l-3.858,2.76,1.449,4.743L9.752,13.027Z"
                              transform="translate(-3.5 -3.45)"
                              fill="#c3c3c3"
                            />
                          </svg>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="12.52"
                            height="12.505"
                            viewBox="0 0 12.52 12.505"
                          >
                            <path
                              id="star_FILL0_wght500_GRAD0_opsz48"
                              d="M5.894,15.955l1.449-4.743L3.5,8.452H8.243l1.51-5,1.51,5H16.02l-3.858,2.76,1.449,4.743L9.752,13.027Z"
                              transform="translate(-3.5 -3.45)"
                              fill="#c3c3c3"
                            />
                          </svg>
                        </>
                      )}
                      {amountStars <= 1 && amountStars > 0 && (
                        <>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="12.52"
                            height="12.505"
                            viewBox="0 0 12.52 12.505"
                          >
                            <path
                              id="star_FILL0_wght500_GRAD0_opsz48"
                              d="M5.894,15.955l1.449-4.743L3.5,8.452H8.243l1.51-5,1.51,5H16.02l-3.858,2.76,1.449,4.743L9.752,13.027Z"
                              transform="translate(-3.5 -3.45)"
                              fill="#fbb900"
                            />
                          </svg>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="12.52"
                            height="12.505"
                            viewBox="0 0 12.52 12.505"
                          >
                            <path
                              id="star_FILL0_wght500_GRAD0_opsz48"
                              d="M5.894,15.955l1.449-4.743L3.5,8.452H8.243l1.51-5,1.51,5H16.02l-3.858,2.76,1.449,4.743L9.752,13.027Z"
                              transform="translate(-3.5 -3.45)"
                              fill="#c3c3c3"
                            />
                          </svg>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="12.52"
                            height="12.505"
                            viewBox="0 0 12.52 12.505"
                          >
                            <path
                              id="star_FILL0_wght500_GRAD0_opsz48"
                              d="M5.894,15.955l1.449-4.743L3.5,8.452H8.243l1.51-5,1.51,5H16.02l-3.858,2.76,1.449,4.743L9.752,13.027Z"
                              transform="translate(-3.5 -3.45)"
                              fill="#c3c3c3"
                            />
                          </svg>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="12.52"
                            height="12.505"
                            viewBox="0 0 12.52 12.505"
                          >
                            <path
                              id="star_FILL0_wght500_GRAD0_opsz48"
                              d="M5.894,15.955l1.449-4.743L3.5,8.452H8.243l1.51-5,1.51,5H16.02l-3.858,2.76,1.449,4.743L9.752,13.027Z"
                              transform="translate(-3.5 -3.45)"
                              fill="#c3c3c3"
                            />
                          </svg>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="12.52"
                            height="12.505"
                            viewBox="0 0 12.52 12.505"
                          >
                            <path
                              id="star_FILL0_wght500_GRAD0_opsz48"
                              d="M5.894,15.955l1.449-4.743L3.5,8.452H8.243l1.51-5,1.51,5H16.02l-3.858,2.76,1.449,4.743L9.752,13.027Z"
                              transform="translate(-3.5 -3.45)"
                              fill="#c3c3c3"
                            />
                          </svg>
                        </>
                      )}
                      {amountStars <= 2 && amountStars > 1 && (
                        <>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="12.52"
                            height="12.505"
                            viewBox="0 0 12.52 12.505"
                          >
                            <path
                              id="star_FILL0_wght500_GRAD0_opsz48"
                              d="M5.894,15.955l1.449-4.743L3.5,8.452H8.243l1.51-5,1.51,5H16.02l-3.858,2.76,1.449,4.743L9.752,13.027Z"
                              transform="translate(-3.5 -3.45)"
                              fill="#fbb900"
                            />
                          </svg>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="12.52"
                            height="12.505"
                            viewBox="0 0 12.52 12.505"
                          >
                            <path
                              id="star_FILL0_wght500_GRAD0_opsz48"
                              d="M5.894,15.955l1.449-4.743L3.5,8.452H8.243l1.51-5,1.51,5H16.02l-3.858,2.76,1.449,4.743L9.752,13.027Z"
                              transform="translate(-3.5 -3.45)"
                              fill="#fbb900"
                            />
                          </svg>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="12.52"
                            height="12.505"
                            viewBox="0 0 12.52 12.505"
                          >
                            <path
                              id="star_FILL0_wght500_GRAD0_opsz48"
                              d="M5.894,15.955l1.449-4.743L3.5,8.452H8.243l1.51-5,1.51,5H16.02l-3.858,2.76,1.449,4.743L9.752,13.027Z"
                              transform="translate(-3.5 -3.45)"
                              fill="#c3c3c3"
                            />
                          </svg>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="12.52"
                            height="12.505"
                            viewBox="0 0 12.52 12.505"
                          >
                            <path
                              id="star_FILL0_wght500_GRAD0_opsz48"
                              d="M5.894,15.955l1.449-4.743L3.5,8.452H8.243l1.51-5,1.51,5H16.02l-3.858,2.76,1.449,4.743L9.752,13.027Z"
                              transform="translate(-3.5 -3.45)"
                              fill="#c3c3c3"
                            />
                          </svg>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="12.52"
                            height="12.505"
                            viewBox="0 0 12.52 12.505"
                          >
                            <path
                              id="star_FILL0_wght500_GRAD0_opsz48"
                              d="M5.894,15.955l1.449-4.743L3.5,8.452H8.243l1.51-5,1.51,5H16.02l-3.858,2.76,1.449,4.743L9.752,13.027Z"
                              transform="translate(-3.5 -3.45)"
                              fill="#c3c3c3"
                            />
                          </svg>
                        </>
                      )}
                      {amountStars <= 3 && amountStars > 2 && (
                        <>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="12.52"
                            height="12.505"
                            viewBox="0 0 12.52 12.505"
                          >
                            <path
                              id="star_FILL0_wght500_GRAD0_opsz48"
                              d="M5.894,15.955l1.449-4.743L3.5,8.452H8.243l1.51-5,1.51,5H16.02l-3.858,2.76,1.449,4.743L9.752,13.027Z"
                              transform="translate(-3.5 -3.45)"
                              fill="#fbb900"
                            />
                          </svg>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="12.52"
                            height="12.505"
                            viewBox="0 0 12.52 12.505"
                          >
                            <path
                              id="star_FILL0_wght500_GRAD0_opsz48"
                              d="M5.894,15.955l1.449-4.743L3.5,8.452H8.243l1.51-5,1.51,5H16.02l-3.858,2.76,1.449,4.743L9.752,13.027Z"
                              transform="translate(-3.5 -3.45)"
                              fill="#fbb900"
                            />
                          </svg>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="12.52"
                            height="12.505"
                            viewBox="0 0 12.52 12.505"
                          >
                            <path
                              id="star_FILL0_wght500_GRAD0_opsz48"
                              d="M5.894,15.955l1.449-4.743L3.5,8.452H8.243l1.51-5,1.51,5H16.02l-3.858,2.76,1.449,4.743L9.752,13.027Z"
                              transform="translate(-3.5 -3.45)"
                              fill="#fbb900"
                            />
                          </svg>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="12.52"
                            height="12.505"
                            viewBox="0 0 12.52 12.505"
                          >
                            <path
                              id="star_FILL0_wght500_GRAD0_opsz48"
                              d="M5.894,15.955l1.449-4.743L3.5,8.452H8.243l1.51-5,1.51,5H16.02l-3.858,2.76,1.449,4.743L9.752,13.027Z"
                              transform="translate(-3.5 -3.45)"
                              fill="#c3c3c3"
                            />
                          </svg>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="12.52"
                            height="12.505"
                            viewBox="0 0 12.52 12.505"
                          >
                            <path
                              id="star_FILL0_wght500_GRAD0_opsz48"
                              d="M5.894,15.955l1.449-4.743L3.5,8.452H8.243l1.51-5,1.51,5H16.02l-3.858,2.76,1.449,4.743L9.752,13.027Z"
                              transform="translate(-3.5 -3.45)"
                              fill="#c3c3c3"
                            />
                          </svg>
                        </>
                      )}

                      {amountStars <= 4 && amountStars > 3 && (
                        <>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="12.52"
                            height="12.505"
                            viewBox="0 0 12.52 12.505"
                          >
                            <path
                              id="star_FILL0_wght500_GRAD0_opsz48"
                              d="M5.894,15.955l1.449-4.743L3.5,8.452H8.243l1.51-5,1.51,5H16.02l-3.858,2.76,1.449,4.743L9.752,13.027Z"
                              transform="translate(-3.5 -3.45)"
                              fill="#fbb900"
                            />
                          </svg>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="12.52"
                            height="12.505"
                            viewBox="0 0 12.52 12.505"
                          >
                            <path
                              id="star_FILL0_wght500_GRAD0_opsz48"
                              d="M5.894,15.955l1.449-4.743L3.5,8.452H8.243l1.51-5,1.51,5H16.02l-3.858,2.76,1.449,4.743L9.752,13.027Z"
                              transform="translate(-3.5 -3.45)"
                              fill="#fbb900"
                            />
                          </svg>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="12.52"
                            height="12.505"
                            viewBox="0 0 12.52 12.505"
                          >
                            <path
                              id="star_FILL0_wght500_GRAD0_opsz48"
                              d="M5.894,15.955l1.449-4.743L3.5,8.452H8.243l1.51-5,1.51,5H16.02l-3.858,2.76,1.449,4.743L9.752,13.027Z"
                              transform="translate(-3.5 -3.45)"
                              fill="#fbb900"
                            />
                          </svg>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="12.52"
                            height="12.505"
                            viewBox="0 0 12.52 12.505"
                          >
                            <path
                              id="star_FILL0_wght500_GRAD0_opsz48"
                              d="M5.894,15.955l1.449-4.743L3.5,8.452H8.243l1.51-5,1.51,5H16.02l-3.858,2.76,1.449,4.743L9.752,13.027Z"
                              transform="translate(-3.5 -3.45)"
                              fill="#fbb900"
                            />
                          </svg>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="12.52"
                            height="12.505"
                            viewBox="0 0 12.52 12.505"
                          >
                            <path
                              id="star_FILL0_wght500_GRAD0_opsz48"
                              d="M5.894,15.955l1.449-4.743L3.5,8.452H8.243l1.51-5,1.51,5H16.02l-3.858,2.76,1.449,4.743L9.752,13.027Z"
                              transform="translate(-3.5 -3.45)"
                              fill="#c3c3c3"
                            />
                          </svg>
                        </>
                      )}
                      {amountStars > 4 && (
                        <>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="12.52"
                            height="12.505"
                            viewBox="0 0 12.52 12.505"
                          >
                            <path
                              id="star_FILL0_wght500_GRAD0_opsz48"
                              d="M5.894,15.955l1.449-4.743L3.5,8.452H8.243l1.51-5,1.51,5H16.02l-3.858,2.76,1.449,4.743L9.752,13.027Z"
                              transform="translate(-3.5 -3.45)"
                              fill="#fbb900"
                            />
                          </svg>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="12.52"
                            height="12.505"
                            viewBox="0 0 12.52 12.505"
                          >
                            <path
                              id="star_FILL0_wght500_GRAD0_opsz48"
                              d="M5.894,15.955l1.449-4.743L3.5,8.452H8.243l1.51-5,1.51,5H16.02l-3.858,2.76,1.449,4.743L9.752,13.027Z"
                              transform="translate(-3.5 -3.45)"
                              fill="#fbb900"
                            />
                          </svg>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="12.52"
                            height="12.505"
                            viewBox="0 0 12.52 12.505"
                          >
                            <path
                              id="star_FILL0_wght500_GRAD0_opsz48"
                              d="M5.894,15.955l1.449-4.743L3.5,8.452H8.243l1.51-5,1.51,5H16.02l-3.858,2.76,1.449,4.743L9.752,13.027Z"
                              transform="translate(-3.5 -3.45)"
                              fill="#fbb900"
                            />
                          </svg>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="12.52"
                            height="12.505"
                            viewBox="0 0 12.52 12.505"
                          >
                            <path
                              id="star_FILL0_wght500_GRAD0_opsz48"
                              d="M5.894,15.955l1.449-4.743L3.5,8.452H8.243l1.51-5,1.51,5H16.02l-3.858,2.76,1.449,4.743L9.752,13.027Z"
                              transform="translate(-3.5 -3.45)"
                              fill="#fbb900"
                            />
                          </svg>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="12.52"
                            height="12.505"
                            viewBox="0 0 12.52 12.505"
                          >
                            <path
                              id="star_FILL0_wght500_GRAD0_opsz48"
                              d="M5.894,15.955l1.449-4.743L3.5,8.452H8.243l1.51-5,1.51,5H16.02l-3.858,2.76,1.449,4.743L9.752,13.027Z"
                              transform="translate(-3.5 -3.45)"
                              fill="#fbb900"
                            />
                          </svg>
                        </>
                      )}
                    </div>
                    <p className={classes.bewertungtext}>
                      {amountStars} / 27 Bewertungen
                    </p>
                  </div>
                  <button
                    className={` inline-block px-4 py-1 sm:px-3 sm:text-sm rounded-10 bg-theme-gray-10 text-white text-13 font-bold ease-linear duration-300 hover:bg-theme-yellow-600 ${classes.messagebtn} ${classes.bewerten}`}
                  >
                    Händler bewerten
                  </button>
                </div>
              </div>
              <div
                className={`flex justify-between xl:flex-wrap xl:justify-around p-4 mt-4 text-theme-gray-4 bg-theme-gray-4 md:flex-col rounded-10 ${classes.imagesgrid}`}
              >
                <img
                  className={classes.thumbimg}
                  src={thumbImage1}
                  onClick={() => {
                    setSelectedThumb(0);
                    setAlbumOpen(true);
                  }}
                />
                <img
                  className={classes.thumbimg}
                  src={thumbImage2}
                  onClick={() => {
                    setSelectedThumb(1);
                    setAlbumOpen(true);
                  }}
                />
                <img
                  className={classes.thumbimg}
                  src={thumbImage3}
                  onClick={() => {
                    setSelectedThumb(2);
                    setAlbumOpen(true);
                  }}
                />
                <img
                  className={classes.thumbimg}
                  src={thumbImage4}
                  onClick={() => {
                    setSelectedThumb(3);
                    setAlbumOpen(true);
                  }}
                />
                <img
                  className={classes.thumbimg}
                  src={thumbImage5}
                  onClick={() => {
                    setSelectedThumb(4);
                    setAlbumOpen(true);
                  }}
                />
                <img
                  className={classes.thumbimg}
                  src={thumbImage2}
                  onClick={() => {
                    setSelectedThumb(1);
                    setAlbumOpen(true);
                  }}
                />
              </div>
              <div className="h-96 w-full bg-theme-gray-4 flex items-center justify-center radius-10 mt-4 google-map-container rounded-10 overflow-hidden">
                Maps
              </div>
            </div>

            <div className="w-250 ml-6 md:w-full md:ml-0 md:mt-4">
              <div className="p-4 rounded-10 bg-theme-gray-4 text-theme-gray-4 text-base">
                <p className="font-bold text-base mb-2">Kontakt</p>
                <div className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="15"
                    height="15"
                    viewBox="0 0 15 15"
                  >
                    <path
                      id="call_FILL0_wght400_GRAD0_opsz48"
                      d="M20.063,21a11.238,11.238,0,0,1-5.052-1.25,17.339,17.339,0,0,1-7.76-7.76A11.238,11.238,0,0,1,6,6.938.925.925,0,0,1,6.938,6H9.854a.737.737,0,0,1,.51.2.921.921,0,0,1,.281.531l.563,2.625a1.5,1.5,0,0,1-.01.531.8.8,0,0,1-.219.406L8.9,12.4a17.3,17.3,0,0,0,2.615,3.375,14.45,14.45,0,0,0,3.281,2.437l1.979-2.042a1.152,1.152,0,0,1,.479-.323.963.963,0,0,1,.542-.031l2.479.542a.91.91,0,0,1,.729.9v2.813a.925.925,0,0,1-.937.938ZM8.271,11.25,9.958,9.542h0L9.479,7.25H7.25A7.171,7.171,0,0,0,7.5,9.031,16.793,16.793,0,0,0,8.271,11.25Zm11.479,8.5h0V17.521h0L17.6,17.083h0l-1.646,1.729a10.4,10.4,0,0,0,1.854.646A9.777,9.777,0,0,0,19.75,19.75Zm-3.792-.937ZM8.271,11.25Z"
                      transform="translate(-6 -6)"
                      fill="#555"
                    />
                  </svg>
                  <p className={`ml-4 ${classes.link}`}>{tel}</p>
                </div>
                <div className="flex items-center mt-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="15"
                    height="12"
                    viewBox="0 0 15 12"
                  >
                    <path
                      id="mail_FILL0_wght400_GRAD0_opsz48"
                      d="M5.125,20A1.153,1.153,0,0,1,4,18.875V9.125A1.153,1.153,0,0,1,5.125,8h12.75A1.153,1.153,0,0,1,19,9.125v9.75A1.153,1.153,0,0,1,17.875,20ZM11.5,14.338,5.125,10.156v8.719h12.75V10.156Zm0-1.125,6.3-4.088H5.219ZM5.125,10.156v0Z"
                      transform="translate(-4 -8)"
                      fill="#555"
                    />
                  </svg>
                  <p className={`ml-4 ${classes.link}`}>{mail}</p>
                </div>
                <div className="flex items-center mt-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="15"
                    height="15"
                    viewBox="0 0 15 15"
                  >
                    <path
                      id="public_FILL0_wght400_GRAD0_opsz48"
                      d="M11.5,19a7.3,7.3,0,0,1-2.925-.591,7.488,7.488,0,0,1-3.984-3.984,7.538,7.538,0,0,1,0-5.85A7.488,7.488,0,0,1,8.575,4.591a7.538,7.538,0,0,1,5.85,0,7.488,7.488,0,0,1,3.984,3.984,7.538,7.538,0,0,1,0,5.85,7.488,7.488,0,0,1-3.984,3.984A7.3,7.3,0,0,1,11.5,19Zm-.806-1.144V16.319a1.447,1.447,0,0,1-1.106-.487,1.632,1.632,0,0,1-.45-1.144v-.825L5.294,10.019a5.269,5.269,0,0,0-.131.741,7.255,7.255,0,0,0-.037.741,6.277,6.277,0,0,0,1.584,4.256,6.045,6.045,0,0,0,3.984,2.1Zm5.512-2.025a6.213,6.213,0,0,0,1.247-2.016,6.493,6.493,0,0,0,.422-2.316,6.428,6.428,0,0,0-3.994-5.981v.337A1.632,1.632,0,0,1,13.431,7a1.447,1.447,0,0,1-1.106.488H10.694V9.119a.648.648,0,0,1-.253.525.881.881,0,0,1-.572.206H8.313V11.5H13.15a.658.658,0,0,1,.525.244.845.845,0,0,1,.206.563v2.381h.806a1.52,1.52,0,0,1,.956.319A1.586,1.586,0,0,1,16.206,15.831Z"
                      transform="translate(-4 -4)"
                      fill="#555"
                    />
                  </svg>
                  <p className={`ml-4 ${classes.link}`}>{website}</p>
                </div>
              </div>
              <div className="p-4 rounded-10 mt-4 bg-theme-gray-4 text-theme-gray-4 text-base">
                <div className={classes.chatbtn}>Chat starten</div>
              </div>
              <div className="mt-4 rounded-10 pb-4 w-full bg-theme-gray-4 text-theme-gray-4 text-base">
                <div className={classes.oeffnungszeiten}>Öffnungszeiten:</div>
                <div
                  className={`${classes.oeffnungszeitenrow} ${
                    today == "monday" && classes.markday
                  }`}
                >
                  <div className={classes.tag}>Montag</div>
                  <div className={classes.timespan}>07:30 - 17:00 Uhr</div>
                </div>
                <div
                  className={`${classes.oeffnungszeitenrow} ${
                    today == "tuesday" && classes.markday
                  }`}
                >
                  <div className={classes.tag}>Dienstag</div>
                  <div className={classes.timespan}>07:30 - 17:00 Uhr</div>
                </div>
                <div
                  className={`${classes.oeffnungszeitenrow} ${
                    today == "wednesday" && classes.markday
                  }`}
                >
                  <div className={classes.tag}>Mittwoch</div>
                  <div className={classes.timespan}>07:30 - 17:00 Uhr</div>
                </div>
                <div
                  className={`${classes.oeffnungszeitenrow} ${
                    today == "thursday" && classes.markday
                  }`}
                >
                  <div className={classes.tag}>Donnerstag</div>
                  <div className={classes.timespan}>07:30 - 17:00 Uhr</div>
                </div>
                <div
                  className={`${classes.oeffnungszeitenrow} ${
                    today == "friday" && classes.markday
                  }`}
                >
                  <div className={classes.tag}>Freitag</div>
                </div>
                <div
                  className={`${classes.oeffnungszeitenrow} ${
                    today == "saturday" && classes.markday
                  }`}
                >
                  <div className={classes.tag}>Samstag</div>
                </div>
                <div className="pl-4 pr-4">
                  <div
                    className={`${classes.closed} ${classes.open} ${
                      companyOpen == true ? classes.open : classes.closed
                    }`}
                  >
                    <Clock className={classes.clock} />
                    {companyOpen == true ? "Jetzt geöffnet" : "Geschlossen"}
                  </div>
                </div>
              </div>
              <div className="mt-4 p-4 rounded-10 bg-theme-gray-4 text-theme-gray-4 text-base">
                <h2 className="text-base font-bold">Nachricht senden</h2>
                <form className="pt-2 pb-2">
                  <Input
                    placeholder="Vollständiger Name"
                    onChange={(e) => setName(e.target.value)}
                  />
                  <Input
                    placeholder="Ihre E-Mail eingeben"
                    onChange={(e) => setMail(e.target.value)}
                  />
                  <textarea
                    className="w-full h-36 resize-none placeholder:text-13 rounded-10 text-base p-3 bg-white"
                    placeholder="Ihre Nachricht"
                    onChange={(e) => setMessage(e.target.value)}
                  ></textarea>
                  <button
                    className={`w-full inline-block px-2 py-3 mt-2 sm:text-sm rounded-10 bg-theme-yellow-2 text-white text-base font-bold ease-linear duration-300 hover:bg-theme-yellow-3 ${classes.messagebtn}`}
                  >
                    Nachricht senden
                  </button>
                </form>
              </div>
              <div className={`p-4 rounded-10 bg-theme-gray-4 text-theme-gray-4 text-base mt-4 ${classes.socialmediacontainer}`}>
                <div className={`flex ${classes.links}`}>
                  <a
                    href={facebookUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="mr-1 ease-linear duration-150 hover:opacity-60"
                  >
                    <Facebook className={classes.instagram} />
                  </a>
                  <a
                    href={instagramUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="mx-1 ease-linear duration-150 hover:opacity-60"
                  >
                    <Instargram className={classes.instagram} />
                  </a>
                  <a
                    href={youtubeUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="mx-1 ease-linear duration-150 hover:opacity-60"
                  >
                    <Youtube className={classes.instagram} />
                  </a>
                  <a
                    href={linkedinUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="ml-1 ease-linear duration-150 hover:opacity-60"
                  >
                    <Linkedin className={classes.instagram} />
                  </a>
                  <a
                    href={tiktokUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="ml-1 ease-linear duration-150 hover:opacity-60"
                  >
                    <Tiktok className={classes.instagram} />
                  </a>
                </div>
              </div>
              {/* <div className="mt-4">
                <img className="md:w-full" src="/images/dealer-profile-sidebar-1.png" />
              </div>
              <div className="mt-4">
                <img className="md:w-full" src="/images/dealer-profile-sidebar-1.png" />
              </div> */}
              {/* <div className="flex w-full rounded-10 bg-theme-gray-6 mt-6 shadow-md">
                <button className="w-1/4 p-2 pb-0 flex items-center justify-center border-r border-theme-gray-2">
                  <img src="/images/icons/dp-phone.png" />
                </button>
                <button className="w-1/4 p-2 pb-0 flex items-center justify-center border-r border-theme-gray-2">
                  <img src="/images/icons/dp-fav.png" />
                </button>
                <button className="w-1/4 p-2 pb-0 flex items-center justify-center border-r border-theme-gray-2">
                  <img src="/images/icons/dp-share.png" />
                </button>
                <button className="w-1/4 p-2 pb-0 flex items-center justify-center">
                  <img src="/images/icons/dp-report.png" />
                </button>
              </div> */}
            </div>
          </div>
        </div>
      </div>
      <div className="bg-theme-gray-10 lg:px-6 md:!px-0">
        <div className="w-10/12 lg:w-full max-w-ag-container bg-white mx-auto pl-6 pr-6 pb-6 flex md:flex-col-reverse">
          
        <div className="">
        <div className={classes.c1r1}>
            <div className={classes.centeritems1}>
                <h3 className={classes.anzahlAngeboteNummer}>{displayAnzahlAngebote}</h3>
                <div className={classes.anzahlAngeboteText}>Fahrzeuge verfügbar</div>
            </div>
        </div>
        <div className={classes.filtersearchcontainer}>
            <div className={classes.searchcontainer}>
              <div className={classes.searchheading}>Suchen nach</div>
              <Select 
                styles={style}
                options={brands}
                placeholder={"Marken"}
                onChange={(e) => setSelectedBrand(e.label)}
              />
              <Select 
                styles={style}
                options={models}
                placeholder={"Modelle"}
                onChange={(e) => setSelectedModel(e.label)}
              />

              <Select 
                styles={style}
                options={bodyStyles}
                placeholder={"Karroserieform"}
                onChange={(e) => setSelectedBodyStyle(e.label)}
              />
              <label className={classes.smalltext}>Kilometerstand</label>
              <div className={`${classes.halfselect}`}>
                  <Select className={classes.halfselect1} options={mileageRanges} styles={halfSelectStyle1} placeholder="Von"  onChange={(e) => setKilometerstandVon(e)} />
                  <Select className={classes.halfselect2} options={mileageRanges} styles={halfSelectStyle2} placeholder="Bis" onChange={(e) => setKilometerstandBis(e)}/>
              </div>
              <label className={classes.smalltext}>Erstzulassung</label>
              <div className={`${classes.halfselect}`}>
                  <Select className={classes.halfselect1} options={erstzulassungen} styles={halfSelectStyle1} placeholder="Von"  onChange={(e) => setKilometerstandVon(e)} />
                  <Select className={classes.halfselect2} options={erstzulassungen} styles={halfSelectStyle2} placeholder="Bis" onChange={(e) => setKilometerstandBis(e)}/>
              </div>
              <label className={classes.smalltext}>Preis</label>
              <div className={`${classes.lasthalfselect}`}>
                  <Select className={classes.halfselect1} options={preise} styles={halfSelectStyle1} placeholder="Von"  onChange={(e) => setKilometerstandVon(e)} />
                  <Select className={classes.halfselect2} options={preise} styles={halfSelectStyle2} placeholder="Bis" onChange={(e) => setKilometerstandBis(e)}/>
              </div>
            </div>
            
          </div>
          
        </div>
      
          <div className="w-full">
          <div className={classes.c2r1}>
            <div className={classes.c2r1bottom}>
                <div className={classes.direktsuchecontainer}>
                    <input type={"text"} className={classes.direktsuche} placeholder="Direktsuche" />
                    <button className={classes.suchenbtn}>Suchen</button>
                </div>
                <div className={classes.sortierungcontainer}>
                  <Select 
                      styles={style}
                      options={mileageRanges}
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
          <div className="p-4 bg-theme-gray-4 rounded-10 w-full">
          
            <div className="flex justify-between flex-col w-full text-theme-gray-4">
              <h2 className={`text-2xl font-bold md:text-lg -mb-1 ${classes.ourcarsheading}`}>
                Unsere Fahrzeuge
              </h2>
              
            </div>
            <div className="flex w-full">
              <div className={classes.grid}>
                {angebote.map((fav, index) => (
                  <div key={index} className={width >= 1250 && classes.adprop}>
                    <Angebot
                      key={index}
                      id={fav.id}
                      title={fav.title}
                      price={fav.preis}
                      adNo={fav.adNo}
                      start={fav.start}
                      end={fav.end}
                      imgSrc={fav.imgSrc}
                      description={"This is a description"}
                      details={fav.details}
                      cardView={width >= 1250 ? true : false}
                      location={fav.location}
                      companyname={fav.companyname}
                      onClick={() => handleDel(index)}
                      gigalabel={fav.gigalabel}
                      colorad={fav.colorad}
                    />
                  </div>
                ))}
              </div>
            </div>
            <div className={classes.anzeigen}>
              <Select styles={style} options={anzeigen} onChange={(e) => setAnzeige(e.label)} placeholder={anzeigen[0].label} />
            </div>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
}
