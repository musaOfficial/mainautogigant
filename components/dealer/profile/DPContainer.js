import Map from "./Map";
import AdCard from "../../dashboard/overview/AdCard";
import Pagination from "../list/Pagination";
import Link from "next/link";
import Input from '../../ui/Input';
import Instargram from './../../../public/icons/instagram.svg'
import Facebook from './../../../public/icons/facebook.svg';
import Tiktok from './../../../public/icons/tiktok.svg';
import Youtube from './../../../public/icons/youtube.svg';
import classes from './DPContainer.module.css';
import Angebot from "../../ui/ads/Angebot";
import { useState, useEffect } from "react";
import Linkedin from './../../../public/Linkedin.svg';
import Giglogo from './../../../public/gigantlogo.jpg';

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

export default function DPContainer() {

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
  const [profileImgSrc, setProfileImgSrc] = useState("/images/dealer-profile-breadcrumb-img.png");
  const [amountStars, setAmountStars] = useState(7);
  const [aboutUs, setAboutUs] = useState("Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae modi tempora odit explicabo dicta qui, blanditiis incidunt possimus natus a adipisci laborum fugit quaerat perspiciatis reprehenderit expedita magni rerum voluptatum numquam? Unde eius consectetur quaerat expedita deserunt quis blanditiis ipsa, corporis mollitia vero modi adipisci ratione voluptate enim voluptas, numquam totam perspiciatis iure? Necessitatibus voluptates quod, velit in voluptas possimus accusamus.");

  // Variablen für die 5 Fotos unter dem Über Uns Text
  const [thumbImage1, setThumbImage1] = useState("/images/dp-thumb-img-1.png");
  const [thumbImage2, setThumbImage2] = useState("/images/dp-thumb-img-2.png" );
  const [thumbImage3, setThumbImage3] = useState("/images/dp-thumb-img-3.png");
  const [thumbImage4, setThumbImage4] = useState("/images/dp-thumb-img-4.png");
  const [thumbImage5, setThumbImage5] = useState("/images/dp-thumb-img-5.png");

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


  return (
    <div className="bg-theme-gray-10 lg:px-6 md:!px-0">
      <div className="w-10/12 lg:w-full max-w-ag-container mx-auto flex md:flex-col-reverse">
        <div className={`w-full p-6 bg-white ${classes.profilecontainer}`}>
          <div className="relative">
            <img
              className={classes.bannerimg}
              src={bannerImgSrc}
            />
            <img
              className={classes.profileimg}
              src={profileImgSrc}
            />
          </div>
          <div className="flex mt-6 md:flex-col">
            <div className="flex-1">
              <div className="flex items-center justify-between p-4 rounded-10 bg-theme-gray-4">
                <div className="text-theme-gray-4">
                  <h2 className="text-2xl md:text-lg font-bold">AUDI Österreich GmbH</h2>
                  <p className="text-base md:text-xs">
                    Musterstrasse 12, 1010 Wien, Österreich
                  </p>
                </div>
                <div className="flex">
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
              <div className="p-4 mt-7 text-theme-gray-4 bg-theme-gray-4 rounded-10">
                <div className="flex items-center justify-between border-b-2 border-theme-gray-2 pb-1 mb-1">
                  <h2 className="text-2xl font-bold">
                    Über uns
                  </h2>
                  <div className="flex items-center text-base md:flex-col">
                    <div className="flex flex-col items-center mr-6 md:mr-0 md:mb-3">
                      <div className="flex mb-1">
                        {amountStars == 0 && <>
                          <svg xmlns="http://www.w3.org/2000/svg" width="12.52" height="12.505" viewBox="0 0 12.52 12.505">
                          <path id="star_FILL0_wght500_GRAD0_opsz48" d="M5.894,15.955l1.449-4.743L3.5,8.452H8.243l1.51-5,1.51,5H16.02l-3.858,2.76,1.449,4.743L9.752,13.027Z" transform="translate(-3.5 -3.45)" fill="#c3c3c3" />
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" width="12.52" height="12.505" viewBox="0 0 12.52 12.505">
                          <path id="star_FILL0_wght500_GRAD0_opsz48" d="M5.894,15.955l1.449-4.743L3.5,8.452H8.243l1.51-5,1.51,5H16.02l-3.858,2.76,1.449,4.743L9.752,13.027Z" transform="translate(-3.5 -3.45)" fill="#c3c3c3" />
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" width="12.52" height="12.505" viewBox="0 0 12.52 12.505">
                          <path id="star_FILL0_wght500_GRAD0_opsz48" d="M5.894,15.955l1.449-4.743L3.5,8.452H8.243l1.51-5,1.51,5H16.02l-3.858,2.76,1.449,4.743L9.752,13.027Z" transform="translate(-3.5 -3.45)" fill="#c3c3c3" />
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" width="12.52" height="12.505" viewBox="0 0 12.52 12.505">
                          <path id="star_FILL0_wght500_GRAD0_opsz48" d="M5.894,15.955l1.449-4.743L3.5,8.452H8.243l1.51-5,1.51,5H16.02l-3.858,2.76,1.449,4.743L9.752,13.027Z" transform="translate(-3.5 -3.45)" fill="#c3c3c3" />
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" width="12.52" height="12.505" viewBox="0 0 12.52 12.505">
                          <path id="star_FILL0_wght500_GRAD0_opsz48" d="M5.894,15.955l1.449-4.743L3.5,8.452H8.243l1.51-5,1.51,5H16.02l-3.858,2.76,1.449,4.743L9.752,13.027Z" transform="translate(-3.5 -3.45)" fill="#c3c3c3" />
                        </svg>
                        </>}
                        {amountStars <= 1 && amountStars > 0 && <>
                          <svg xmlns="http://www.w3.org/2000/svg" width="12.52" height="12.505" viewBox="0 0 12.52 12.505">
                          <path id="star_FILL0_wght500_GRAD0_opsz48" d="M5.894,15.955l1.449-4.743L3.5,8.452H8.243l1.51-5,1.51,5H16.02l-3.858,2.76,1.449,4.743L9.752,13.027Z" transform="translate(-3.5 -3.45)" fill="#fbb900" />
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" width="12.52" height="12.505" viewBox="0 0 12.52 12.505">
                          <path id="star_FILL0_wght500_GRAD0_opsz48" d="M5.894,15.955l1.449-4.743L3.5,8.452H8.243l1.51-5,1.51,5H16.02l-3.858,2.76,1.449,4.743L9.752,13.027Z" transform="translate(-3.5 -3.45)" fill="#c3c3c3" />
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" width="12.52" height="12.505" viewBox="0 0 12.52 12.505">
                          <path id="star_FILL0_wght500_GRAD0_opsz48" d="M5.894,15.955l1.449-4.743L3.5,8.452H8.243l1.51-5,1.51,5H16.02l-3.858,2.76,1.449,4.743L9.752,13.027Z" transform="translate(-3.5 -3.45)" fill="#c3c3c3" />
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" width="12.52" height="12.505" viewBox="0 0 12.52 12.505">
                          <path id="star_FILL0_wght500_GRAD0_opsz48" d="M5.894,15.955l1.449-4.743L3.5,8.452H8.243l1.51-5,1.51,5H16.02l-3.858,2.76,1.449,4.743L9.752,13.027Z" transform="translate(-3.5 -3.45)" fill="#c3c3c3" />
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" width="12.52" height="12.505" viewBox="0 0 12.52 12.505">
                          <path id="star_FILL0_wght500_GRAD0_opsz48" d="M5.894,15.955l1.449-4.743L3.5,8.452H8.243l1.51-5,1.51,5H16.02l-3.858,2.76,1.449,4.743L9.752,13.027Z" transform="translate(-3.5 -3.45)" fill="#c3c3c3" />
                        </svg>
                        </>}
                        {amountStars <= 2 && amountStars > 1 && <>
                          <svg xmlns="http://www.w3.org/2000/svg" width="12.52" height="12.505" viewBox="0 0 12.52 12.505">
                          <path id="star_FILL0_wght500_GRAD0_opsz48" d="M5.894,15.955l1.449-4.743L3.5,8.452H8.243l1.51-5,1.51,5H16.02l-3.858,2.76,1.449,4.743L9.752,13.027Z" transform="translate(-3.5 -3.45)" fill="#fbb900" />
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" width="12.52" height="12.505" viewBox="0 0 12.52 12.505">
                          <path id="star_FILL0_wght500_GRAD0_opsz48" d="M5.894,15.955l1.449-4.743L3.5,8.452H8.243l1.51-5,1.51,5H16.02l-3.858,2.76,1.449,4.743L9.752,13.027Z" transform="translate(-3.5 -3.45)" fill="#fbb900" />
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" width="12.52" height="12.505" viewBox="0 0 12.52 12.505">
                          <path id="star_FILL0_wght500_GRAD0_opsz48" d="M5.894,15.955l1.449-4.743L3.5,8.452H8.243l1.51-5,1.51,5H16.02l-3.858,2.76,1.449,4.743L9.752,13.027Z" transform="translate(-3.5 -3.45)" fill="#c3c3c3" />
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" width="12.52" height="12.505" viewBox="0 0 12.52 12.505">
                          <path id="star_FILL0_wght500_GRAD0_opsz48" d="M5.894,15.955l1.449-4.743L3.5,8.452H8.243l1.51-5,1.51,5H16.02l-3.858,2.76,1.449,4.743L9.752,13.027Z" transform="translate(-3.5 -3.45)" fill="#c3c3c3" />
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" width="12.52" height="12.505" viewBox="0 0 12.52 12.505">
                          <path id="star_FILL0_wght500_GRAD0_opsz48" d="M5.894,15.955l1.449-4.743L3.5,8.452H8.243l1.51-5,1.51,5H16.02l-3.858,2.76,1.449,4.743L9.752,13.027Z" transform="translate(-3.5 -3.45)" fill="#c3c3c3" />
                        </svg>
                        </>}
                        {amountStars <= 3 && amountStars > 2 && <>
                          <svg xmlns="http://www.w3.org/2000/svg" width="12.52" height="12.505" viewBox="0 0 12.52 12.505">
                          <path id="star_FILL0_wght500_GRAD0_opsz48" d="M5.894,15.955l1.449-4.743L3.5,8.452H8.243l1.51-5,1.51,5H16.02l-3.858,2.76,1.449,4.743L9.752,13.027Z" transform="translate(-3.5 -3.45)" fill="#fbb900" />
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" width="12.52" height="12.505" viewBox="0 0 12.52 12.505">
                          <path id="star_FILL0_wght500_GRAD0_opsz48" d="M5.894,15.955l1.449-4.743L3.5,8.452H8.243l1.51-5,1.51,5H16.02l-3.858,2.76,1.449,4.743L9.752,13.027Z" transform="translate(-3.5 -3.45)" fill="#fbb900" />
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" width="12.52" height="12.505" viewBox="0 0 12.52 12.505">
                          <path id="star_FILL0_wght500_GRAD0_opsz48" d="M5.894,15.955l1.449-4.743L3.5,8.452H8.243l1.51-5,1.51,5H16.02l-3.858,2.76,1.449,4.743L9.752,13.027Z" transform="translate(-3.5 -3.45)" fill="#fbb900" />
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" width="12.52" height="12.505" viewBox="0 0 12.52 12.505">
                          <path id="star_FILL0_wght500_GRAD0_opsz48" d="M5.894,15.955l1.449-4.743L3.5,8.452H8.243l1.51-5,1.51,5H16.02l-3.858,2.76,1.449,4.743L9.752,13.027Z" transform="translate(-3.5 -3.45)" fill="#c3c3c3" />
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" width="12.52" height="12.505" viewBox="0 0 12.52 12.505">
                          <path id="star_FILL0_wght500_GRAD0_opsz48" d="M5.894,15.955l1.449-4.743L3.5,8.452H8.243l1.51-5,1.51,5H16.02l-3.858,2.76,1.449,4.743L9.752,13.027Z" transform="translate(-3.5 -3.45)" fill="#c3c3c3" />
                        </svg>
                        </>}

                        {amountStars <= 4 && amountStars > 3 && <>
                          <svg xmlns="http://www.w3.org/2000/svg" width="12.52" height="12.505" viewBox="0 0 12.52 12.505">
                          <path id="star_FILL0_wght500_GRAD0_opsz48" d="M5.894,15.955l1.449-4.743L3.5,8.452H8.243l1.51-5,1.51,5H16.02l-3.858,2.76,1.449,4.743L9.752,13.027Z" transform="translate(-3.5 -3.45)" fill="#fbb900" />
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" width="12.52" height="12.505" viewBox="0 0 12.52 12.505">
                          <path id="star_FILL0_wght500_GRAD0_opsz48" d="M5.894,15.955l1.449-4.743L3.5,8.452H8.243l1.51-5,1.51,5H16.02l-3.858,2.76,1.449,4.743L9.752,13.027Z" transform="translate(-3.5 -3.45)" fill="#fbb900" />
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" width="12.52" height="12.505" viewBox="0 0 12.52 12.505">
                          <path id="star_FILL0_wght500_GRAD0_opsz48" d="M5.894,15.955l1.449-4.743L3.5,8.452H8.243l1.51-5,1.51,5H16.02l-3.858,2.76,1.449,4.743L9.752,13.027Z" transform="translate(-3.5 -3.45)" fill="#fbb900" />
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" width="12.52" height="12.505" viewBox="0 0 12.52 12.505">
                          <path id="star_FILL0_wght500_GRAD0_opsz48" d="M5.894,15.955l1.449-4.743L3.5,8.452H8.243l1.51-5,1.51,5H16.02l-3.858,2.76,1.449,4.743L9.752,13.027Z" transform="translate(-3.5 -3.45)" fill="#fbb900" />
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" width="12.52" height="12.505" viewBox="0 0 12.52 12.505">
                          <path id="star_FILL0_wght500_GRAD0_opsz48" d="M5.894,15.955l1.449-4.743L3.5,8.452H8.243l1.51-5,1.51,5H16.02l-3.858,2.76,1.449,4.743L9.752,13.027Z" transform="translate(-3.5 -3.45)" fill="#c3c3c3" />
                        </svg>
                        </>}
                        {amountStars > 4 && <>
                          <svg xmlns="http://www.w3.org/2000/svg" width="12.52" height="12.505" viewBox="0 0 12.52 12.505">
                          <path id="star_FILL0_wght500_GRAD0_opsz48" d="M5.894,15.955l1.449-4.743L3.5,8.452H8.243l1.51-5,1.51,5H16.02l-3.858,2.76,1.449,4.743L9.752,13.027Z" transform="translate(-3.5 -3.45)" fill="#fbb900" />
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" width="12.52" height="12.505" viewBox="0 0 12.52 12.505">
                          <path id="star_FILL0_wght500_GRAD0_opsz48" d="M5.894,15.955l1.449-4.743L3.5,8.452H8.243l1.51-5,1.51,5H16.02l-3.858,2.76,1.449,4.743L9.752,13.027Z" transform="translate(-3.5 -3.45)" fill="#fbb900" />
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" width="12.52" height="12.505" viewBox="0 0 12.52 12.505">
                          <path id="star_FILL0_wght500_GRAD0_opsz48" d="M5.894,15.955l1.449-4.743L3.5,8.452H8.243l1.51-5,1.51,5H16.02l-3.858,2.76,1.449,4.743L9.752,13.027Z" transform="translate(-3.5 -3.45)" fill="#fbb900" />
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" width="12.52" height="12.505" viewBox="0 0 12.52 12.505">
                          <path id="star_FILL0_wght500_GRAD0_opsz48" d="M5.894,15.955l1.449-4.743L3.5,8.452H8.243l1.51-5,1.51,5H16.02l-3.858,2.76,1.449,4.743L9.752,13.027Z" transform="translate(-3.5 -3.45)" fill="#fbb900" />
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" width="12.52" height="12.505" viewBox="0 0 12.52 12.505">
                          <path id="star_FILL0_wght500_GRAD0_opsz48" d="M5.894,15.955l1.449-4.743L3.5,8.452H8.243l1.51-5,1.51,5H16.02l-3.858,2.76,1.449,4.743L9.752,13.027Z" transform="translate(-3.5 -3.45)" fill="#fbb900" />
                        </svg>
                        </>}

                        
                      </div>
                      <p>{amountStars} / 27 Bewertungen</p>
                    </div>
                    <button className="sm:mb-4 sm:mr-0 mr-2 inline-block px-4 py-1 sm:px-3 sm:text-sm rounded-10 bg-theme-yellow-2 text-white text-13 font-bold ease-linear duration-300 hover:bg-theme-yellow-3">
                      Händler bewerten
                    </button>
                  </div>
                </div>

                <p className="text-base">
                  {aboutUs}
                </p>
              </div>
              <div className="flex justify-between xl:flex-wrap xl:justify-around p-4 mt-7 text-theme-gray-4 bg-theme-gray-4 rounded-10">
                <img className="xl:w-24 lg:w-16  sm:!w-12" src={thumbImage1} />
                <img className="xl:w-24 lg:w-16  sm:!w-12" src={thumbImage2}/>
                <img className="xl:w-24 lg:w-16  sm:!w-12" src={thumbImage3} />
                <img className="xl:w-24 lg:w-16  sm:!w-12" src={thumbImage4}/>
                <img className="xl:w-24 lg:w-16  sm:!w-12" src={thumbImage5} />
              </div>
              <div className="h-96 w-full mt-7 google-map-container rounded-10 overflow-hidden">
                <Map />
              </div>
              <div className="p-4 mt-10 bg-theme-gray-4 rounded-md">
                <div className="flex justify-between items-center pb-4 border-b border-theme-gray-2 text-theme-gray-4">
                  <h2 className="text-2xl font-bold md:text-lg">UNSERE FAHRZEUGE</h2>
                  <div className="flex items-center">
                    <div className="flex items-center text-base">
                      <p className="mr-3">ANZEIGEN</p>
                      <div className="relative ml-2 rounded-md bg-theme-gray-8">
                        <select className="ml-2 outline-none appearance-none bg-transparent rounded py-2 pl-6 pr-10 text-white">
                          <option value="12" className="bg-theme-gray-8">12</option>
                          <option value="8" className="bg-theme-gray-8">8</option>
                          <option value="4" className="bg-theme-gray-8">4</option>
                        </select>
                        <svg
                          className="absolute top-4 right-3"
                          xmlns="http://www.w3.org/2000/svg"
                          width="16.678"
                          height="10"
                          viewBox="0 0 16.678 10"
                        >
                          <path
                            id="expand_more_FILL0_wght500_GRAD0_opsz48"
                            d="M20.039,26.3,11.7,17.961,13.361,16.3l6.678,6.712,6.678-6.678,1.661,1.661Z"
                            transform="translate(-11.7 -16.3)"
                            fill="#fff"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={classes.grid}>
                  {angebote.map((fav, index) => <div key={index} className={width >= 1250 && classes.adprop}>
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
                  </div>)}
                </div>
              </div>
              <Pagination wFull pagType='sm-border' />
            </div>
            <div className="w-250 ml-6 md:w-full md:ml-0 md:mt-6">
              <div className="flex justify-between rounded-10 text-theme-gray-4 text-base md:mt-6">
                <div className="flex items-center relative p-4 rounded-tl-10 rounded-bl-10 justify-center group cursor-pointer ease-linear duration-200 hover:bg-theme-yellow-2 bg-theme-gray-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30">
                    <path id="call_FILL0_wght400_GRAD0_opsz48" d="M34.125,36a22.476,22.476,0,0,1-10.1-2.5A34.306,34.306,0,0,1,15,27a34.306,34.306,0,0,1-6.5-9.021A22.476,22.476,0,0,1,6,7.875,1.85,1.85,0,0,1,7.875,6h5.833a1.474,1.474,0,0,1,1.021.4,1.841,1.841,0,0,1,.562,1.063l1.125,5.25a3,3,0,0,1-.021,1.063,1.605,1.605,0,0,1-.437.813l-4.167,4.208a34.593,34.593,0,0,0,5.229,6.75,28.9,28.9,0,0,0,6.563,4.875l3.958-4.083a2.3,2.3,0,0,1,.958-.646,1.926,1.926,0,0,1,1.083-.062l4.958,1.083A1.82,1.82,0,0,1,36,28.5v5.625A1.85,1.85,0,0,1,34.125,36ZM10.542,16.5l3.375-3.417h0L12.958,8.5H8.5A14.342,14.342,0,0,0,9,12.063,33.585,33.585,0,0,0,10.542,16.5ZM33.5,33.5h0V29.042h0l-4.292-.875h0l-3.292,3.458a20.8,20.8,0,0,0,3.708,1.292A19.554,19.554,0,0,0,33.5,33.5Zm-7.583-1.875ZM10.542,16.5Z" transform="translate(-6 -6)" fill="#6c757d" />
                  </svg>
                  <Link href='/'>
                    <a className='hidden group-hover:block absolute hover:underline -bottom-4 z-20 right-0 md:-right-8 text-theme-blue text-13 bg-white rounded-10 px-2 py-px shadow-md whitespace-nowrap' target='_blank' rel="noreferrer">
                      Händler anrufen
                      <span className="absolute h-4 w-4 -z-10 right-6 md:right-14 -top-1 rotate-45 bg-white"></span>
                    </a>
                  </Link>
                </div>
                <div className="flex items-center relative p-4 mx-0.5 justify-center group cursor-pointer ease-linear duration-200 hover:bg-theme-yellow-2 bg-theme-gray-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="32.742" height="30" viewBox="0 0 32.742 30">
                    <path id="favorite_FILL0_wght400_GRAD0_opsz48" d="M20.371,35.3l-1.678-1.514A145.213,145.213,0,0,1,8.011,23.144Q4,18.6,4,13.936A8.459,8.459,0,0,1,12.595,5.3a9.311,9.311,0,0,1,4.134,1A9.717,9.717,0,0,1,20.371,9.6,11.872,11.872,0,0,1,24.1,6.3a8.647,8.647,0,0,1,4.052-1,8.459,8.459,0,0,1,8.595,8.636q0,4.666-4.011,9.209A145.214,145.214,0,0,1,22.049,33.786Zm0-15.389Zm0,12.156q6.221-5.73,10.068-9.945t3.847-8.186a5.952,5.952,0,0,0-6.139-6.18A6.559,6.559,0,0,0,24.3,9.024a9.246,9.246,0,0,0-2.947,3.643H19.348a8.869,8.869,0,0,0-2.926-3.643,6.591,6.591,0,0,0-3.827-1.269A5.946,5.946,0,0,0,8.175,9.5a6.052,6.052,0,0,0-1.719,4.441q0,3.97,3.847,8.186T20.371,32.067Z" transform="translate(-4 -5.3)" fill="#6c757d" />
                  </svg>

                  <Link href='/'>
                    <a className='hidden group-hover:block absolute -bottom-4 hover:underline z-20 right-0 text-theme-blue text-13 bg-white rounded-10 px-2 py-px shadow-md whitespace-nowrap' target='_blank' rel="noreferrer">
                      Händler merken
                      <span className="absolute h-4 w-4 -z-10 right-6 -top-1 rotate-45 bg-white"></span>
                    </a>
                  </Link>
                </div>
                <div className="flex items-center relative p-4 mr-0.5 justify-center group cursor-pointer ease-linear duration-200 hover:bg-theme-yellow-2 bg-theme-gray-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="27.037" height="30" viewBox="0 0 27.037 30">
                    <path id="share_FILL0_wght400_GRAD0_opsz48" d="M28.762,34a4.289,4.289,0,0,1-4.275-4.275,4.041,4.041,0,0,1,.056-.619,3.358,3.358,0,0,1,.169-.656L13.35,21.85a4.285,4.285,0,0,1-1.387,1.031,3.878,3.878,0,0,1-1.687.394A4.289,4.289,0,0,1,6,19a4.1,4.1,0,0,1,1.256-3.037,4.268,4.268,0,0,1,4.669-.9,4.527,4.527,0,0,1,1.425.975L24.712,9.513a2.613,2.613,0,0,1-.169-.6,3.886,3.886,0,0,1-.056-.637,4.1,4.1,0,0,1,1.256-3.038,4.266,4.266,0,0,1,7.294,3.038A4.148,4.148,0,0,1,31.8,11.294a4.1,4.1,0,0,1-3.038,1.256,5.03,5.03,0,0,1-1.669-.281,3.2,3.2,0,0,1-1.369-.919l-11.362,6.3a6.93,6.93,0,0,1,.131.694A4.793,4.793,0,0,1,14.55,19a3.061,3.061,0,0,1-.056.563q-.056.3-.131.6l11.362,6.45a4.462,4.462,0,0,1,1.313-.844,4.377,4.377,0,0,1,1.725-.319A4.282,4.282,0,0,1,31.8,32.744,4.1,4.1,0,0,1,28.762,34Zm0-23.7a1.986,1.986,0,0,0,2.025-2.025,2.025,2.025,0,1,0-4.05,0A1.986,1.986,0,0,0,28.762,10.3ZM10.275,21.025a2.025,2.025,0,1,0-1.444-3.469,2.025,2.025,0,0,0,1.444,3.469ZM28.762,31.75a1.986,1.986,0,1,0-1.444-.581A1.96,1.96,0,0,0,28.762,31.75Zm0-23.475ZM10.275,19ZM28.762,29.725Z" transform="translate(-6 -4)" fill="#6c757d" />
                  </svg>

                    <div className='cursor-pointer hidden group-hover:block absolute top-12 mt-px z-20 right-0 text-theme-blue text-13 bg-white rounded-10 px-2 py-px shadow-md whitespace-nowrap'>
                      <span className="absolute h-4 w-4 -z-10 right-6 -top-1 rotate-45 bg-white"></span>
                      <div className="text-theme-gray-4 px-1 py-px">
                        <Link href='/'>
                          <a className="flex items-center ease-linear duration-200 hover:underline text-theme-blue py-1" target='_blank' rel="noreferrer">
                            <svg className="mr-2" xmlns="http://www.w3.org/2000/svg" width="19.999" height="20" viewBox="0 0 19.999 20">
                              <g id="rz_email" transform="translate(-112.779 -154.99)">
                                <path id="Path_1002" data-name="Path 1002" d="M131.175,164.709h-9.316l4.658,3.675Z" transform="translate(-3.738 -4.004)" fill="#6c757d" />
                                <path id="Path_1003" data-name="Path 1003" d="M131.443,165.7l-5.517,4.348-5.517-4.348v7.987h11.034Z" transform="translate(-3.147 -4.408)" fill="#6c757d" />
                                <path id="Path_1004" data-name="Path 1004" d="M122.779,154.99a10,10,0,1,0,10,10A10,10,0,0,0,122.779,154.99Zm6.433,15.221H116.346V159.77h12.866Z" transform="translate(0)" fill="#6c757d" />
                              </g>
                            </svg>
                            E-Mail
                          </a>
                        </Link>
                        <button className="flex items-center ease-linear duration-200 hover:underline text-theme-blue py-1">
                          <svg className="mr-2" xmlns="http://www.w3.org/2000/svg" width="20" height="19.999" viewBox="0 0 20 19.999">
                            <path id="rz_link" d="M134.605,124.607a10,10,0,1,0,10,10A10,10,0,0,0,134.605,124.607Zm0,14.8-1.262,1.263a3.394,3.394,0,0,1-4.8-4.8l1.262-1.262a3.393,3.393,0,0,1,3.2-.9l-3.315,3.311a1.766,1.766,0,0,0,2.5,2.5L135.5,136.2A3.391,3.391,0,0,1,134.606,139.405Zm1.718-7.758a.878.878,0,0,1,1.241,1.242l-4.677,4.678a.878.878,0,0,1-1.242-1.242Zm4.343,1.7-1.262,1.262a3.388,3.388,0,0,1-3.2.9l3.313-3.314a1.766,1.766,0,0,0-2.5-2.5l-3.312,3.313a3.387,3.387,0,0,1,.9-3.2l1.262-1.263a3.394,3.394,0,0,1,4.8,4.8Z" transform="translate(-124.606 -124.607)" fill="#6c757d" />
                          </svg>
                          Link kopieren
                        </button>
                        <Link href='/'>
                          <a className="flex items-center ease-linear duration-200 hover:underline text-theme-blue py-1" target='_blank' rel="noreferrer">
                            <svg className="mr-2" xmlns="http://www.w3.org/2000/svg" width="19.999" height="19.999" viewBox="0 0 19.999 19.999">
                              <g id="facebook" transform="translate(0 -0.073)">
                                <path id="Path_1001" data-name="Path 1001" d="M20,10.133a10.05,10.05,0,0,1-8.441,9.939V13.061h2.324l.442-2.9H11.558V8.278a1.446,1.446,0,0,1,1.625-1.567H14.44V4.241a15.236,15.236,0,0,0-2.232-.2c-2.278,0-3.766,1.389-3.766,3.9v2.211H5.909v2.9H8.441v7.011A10.056,10.056,0,1,1,20,10.133Z" fill="#6c757d" />
                              </g>
                            </svg>

                            Facebook
                          </a>
                        </Link>
                        <Link href='/'>
                          <a className="flex items-center ease-linear duration-200 hover:underline text-theme-blue py-1" target='_blank' rel="noreferrer">
                            <svg className="mr-2" xmlns="http://www.w3.org/2000/svg" width="19.999" height="19.999" viewBox="0 0 19.999 19.999">
                              <path id="icons8-whatsapp-480" d="M13,3A9.983,9.983,0,0,0,4.426,18.125L3.09,23l4.979-1.307A10,10,0,1,0,13,3ZM9.577,8.335c.162,0,.329,0,.474.007.178,0,.372.017.558.428.221.488.7,1.713.763,1.837a.447.447,0,0,1,.019.433,1.816,1.816,0,0,1-.244.415c-.124.143-.26.321-.373.43-.124.124-.252.26-.109.508a7.409,7.409,0,0,0,1.377,1.714,6.724,6.724,0,0,0,1.992,1.229c.248.124.392.1.535-.062s.619-.72.786-.968.328-.205.553-.124,1.446.681,1.694.806.411.186.474.286a2.045,2.045,0,0,1-.142,1.178,2.491,2.491,0,0,1-1.67,1.175c-.457.042-.884.206-2.973-.617a10.151,10.151,0,0,1-4.233-3.74A4.8,4.8,0,0,1,8.05,10.711a2.789,2.789,0,0,1,.864-2.067A.91.91,0,0,1,9.577,8.335Z" transform="translate(-3 -3)" fill="#6c757d" />
                            </svg>

                            WhatsApp
                          </a>
                        </Link>
                      </div>
                    </div>
                </div>
                <div className="flex items-center relative p-4 justify-center group cursor-pointer ease-linear duration-200 hover:bg-theme-yellow-2 bg-theme-gray-4 rounded-tr-10 rounded-br-10">
                  <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30">
                    <path id="report_FILL0_wght400_GRAD0_opsz48" d="M14.75,36,6,27.25V14.75L14.75,6h12.5L36,14.75v12.5L27.25,36ZM21,29.292a1.5,1.5,0,1,0-1.021-.438A1.4,1.4,0,0,0,21,29.292Zm-1.25-6h2.5V12.333h-2.5ZM15.792,33.5H26.208L33.5,26.208V15.792L26.208,8.5H15.792L8.5,15.792V26.208ZM21,21Z" transform="translate(-6 -6)" fill="#6c757d" />
                  </svg>
                  <Link href='/'>
                    <a className='hidden group-hover:block absolute hover:underline -bottom-4 z-20 right-0 text-theme-blue text-13 bg-white rounded-10 px-2 py-px shadow-md whitespace-nowrap' target='_blank' rel="noreferrer">
                      Händler anrufen
                      <span className="absolute h-4 w-4 -z-10 right-6 -top-1 rotate-45 bg-white"></span>
                    </a>
                  </Link>
                </div>
              </div>
              <div className="p-4 rounded-10 bg-theme-gray-4 text-theme-gray-4 text-base mt-7">
                <p className="font-bold text-base mb-2">KONTAKT</p>
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
                  <p className="ml-4">{tel}</p>
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
                  <p className="ml-4">{mail}</p>
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
                  <p className="ml-4">{website}</p>
                </div>
              </div>
              {/* <div className="text-center mt-6 p-4 rounded-10 bg-theme-gray-4 text-theme-gray-4 text-base">
                <div className="flex justify-center">
                  <div className="mx-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="19.709"
                      height="19.685"
                      viewBox="0 0 19.709 19.685"
                    >
                      <path
                        id="star_FILL0_wght500_GRAD0_opsz48"
                        d="M7.269,23.135,9.55,15.669,3.5,11.324h7.466L13.343,3.45l2.377,7.874h7.49l-6.074,4.345,2.281,7.466-6.074-4.609Z"
                        transform="translate(-3.5 -3.45)"
                        fill="#fbb900"
                      />
                    </svg>
                  </div>
                  <div className="mx-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="19.709"
                      height="19.685"
                      viewBox="0 0 19.709 19.685"
                    >
                      <path
                        id="star_FILL0_wght500_GRAD0_opsz48"
                        d="M7.269,23.135,9.55,15.669,3.5,11.324h7.466L13.343,3.45l2.377,7.874h7.49l-6.074,4.345,2.281,7.466-6.074-4.609Z"
                        transform="translate(-3.5 -3.45)"
                        fill="#fbb900"
                      />
                    </svg>
                  </div>
                  <div className="mx-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="19.709"
                      height="19.685"
                      viewBox="0 0 19.709 19.685"
                    >
                      <path
                        id="star_FILL0_wght500_GRAD0_opsz48"
                        d="M7.269,23.135,9.55,15.669,3.5,11.324h7.466L13.343,3.45l2.377,7.874h7.49l-6.074,4.345,2.281,7.466-6.074-4.609Z"
                        transform="translate(-3.5 -3.45)"
                        fill="#fbb900"
                      />
                    </svg>
                  </div>
                  <div className="mx-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="19.709"
                      height="19.685"
                      viewBox="0 0 19.709 19.685"
                    >
                      <path
                        id="star_FILL0_wght500_GRAD0_opsz48"
                        d="M7.269,23.135,9.55,15.669,3.5,11.324h7.466L13.343,3.45l2.377,7.874h7.49l-6.074,4.345,2.281,7.466-6.074-4.609Z"
                        transform="translate(-3.5 -3.45)"
                        fill="#fbb900"
                      />
                    </svg>
                  </div>
                  <div className="mx-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="19.709"
                      height="19.685"
                      viewBox="0 0 19.709 19.685"
                    >
                      <path
                        id="star_FILL0_wght500_GRAD0_opsz48"
                        d="M7.269,23.135,9.55,15.669,3.5,11.324h7.466L13.343,3.45l2.377,7.874h7.49l-6.074,4.345,2.281,7.466-6.074-4.609Z"
                        transform="translate(-3.5 -3.45)"
                        fill="#c3c3c3"
                      />
                    </svg>
                  </div>
                </div>
                <p className="my-2">4,9 / 27 Bewertungen</p>
                <button className="w-full p-2 border rounded-10 font-bold bg-white border-theme-gray-2">
                  HÄNDLER BEWERTEN
                </button>
              </div> */}
              <div className="mt-6 p-4 rounded-10 bg-theme-gray-4 text-theme-gray-4 text-base">
                <h2 className="text-base font-bold">Nachricht senden</h2>
                <form className="pt-2 pb-2">
                  <Input placeholder="Vollständiger Name" onChange={(e) => setName(e.target.value)} />
                  <Input placeholder="Ihre E-Mail eingeben" onChange={(e) => setMail(e.target.value)} />
                  <textarea
                   className="w-full h-36 resize-none placeholder:text-13 rounded-10 text-base p-3 bg-white"
                    placeholder="Ihre Nachricht"
                    onChange={(e) => setMessage(e.target.value)}
                  ></textarea>
                  <button className="w-full inline-block px-2 py-3 mt-4 sm:text-sm rounded-10 bg-theme-yellow-2 text-white text-base font-bold ease-linear duration-300 hover:bg-theme-yellow-3">
                    NACHRICHT SENDEN
                  </button>
                </form>
              </div>
              <div className="mt-6">
                <img className="md:w-full" src="/images/dealer-profile-sidebar-1.png" />
              </div>
              <div className="mt-6">
                <img className="md:w-full" src="/images/dealer-profile-sidebar-1.png" />
              </div>
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
    </div>
  );
}
