import classes from './MyAds.module.css';
import { useEffect, useState } from "react";
import Pagination from "../../dealer/list/Pagination";
import AdCard from "./AdCard";
import { AiOutlineCodeSandbox } from "react-icons/bi";
import MyAd from "../../ui/ads/MyAd";
import Select from "react-select";
import Link from 'next/link';
// import AdsCard from "./AdsCard";
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

  return [width, height];

}

export default function MyAds() {

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

  const laender = [
    {value: "Österreich", label: "Österreich"},
    {value: "Afghanistan", label: "Afghanistan"},
    {value: "Ägypten", label: "Ägypten"},
  ]

  const sortOptions = [
    { value: "aktualitaet", label: "Aktualität" },
    { value: "inDerNaehe", label: "in der Nähe" },
    { value: "preisAufsteigend", label: "Preis aufsteigend" },
    { value: "preisAbsteigend", label: "Preis absteigend" },
    { value: "kmAufsteigend", label: "km aufsteigend" },
    { value: "kmAbsteigend", label: "km absteigend" },
    { value: "relevanz", label: "Relevanz" },
    { value: "ezAbsteigend", label: "EZ absteigend" },
    { value: "ezAufsteigend", label: "EZ aufsteigend" },
  ];


  const [width, height] = useDeviceSize();

  const [cardView, setCardView] = useState("list");
  const [cards, setCards] = useState(3);

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
        amountViews: 12000,
        amountLikes: 10101,
        publicSince: new Date().toLocaleDateString()
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
        amountViews: 12000,
        amountLikes: 10101,
        publicSince: new Date().toLocaleDateString()
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
        amountViews: 12000,
        amountLikes: 10101,
        publicSince: new Date().toLocaleDateString()
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
        amountViews: 12000,
        amountLikes: 10101,
        publicSince: new Date().toLocaleDateString()
    },
    ]);

  useEffect(() => {
    if (window.innerWidth <= 767) {
      setCardView("list");
    }
  }, []);

  return (
    <>
      <div className="flex-1">
        <div className="rounded-md bg-theme-gray-4 p-9">
          <div className=" border-theme-gray-2 pb-4 mb-4">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-3xl xl:text-2xl font-bold text-theme-gray-4">
                MEINE INSERATE
              </h2>
              {cards ? (
                <button className="flex items-center text-13 font-bold text-theme-blue">
                  <p className="mr-2">INSERAT AUFGEBEN</p>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                  >
                    <path
                      id="Icon_awesome-arrow-circle-right"
                      data-name="Icon awesome-arrow-circle-right"
                      d="M10.563.563a10,10,0,1,1-10,10A10,10,0,0,1,10.563.563ZM9.4,6.353l3.044,2.919H5.079a.965.965,0,0,0-.968.968v.645a.965.965,0,0,0,.968.968h7.363L9.4,14.772a.969.969,0,0,0-.016,1.383l.444.44a.964.964,0,0,0,1.367,0l5.351-5.347a.964.964,0,0,0,0-1.367L11.192,4.526a.964.964,0,0,0-1.367,0l-.444.44A.974.974,0,0,0,9.4,6.353Z"
                      transform="translate(-0.563 -0.563)"
                      fill="#0067b8"
                    />
                  </svg>
                </button>
              ) : null}
            </div>
            </div>
            <div className={width >= 1250 ? classes.flex : classes.grid}>
              {angebote.map((fav, index) => <MyAd 
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
                amountViews={fav.amountViews}
                amountLikes={fav.amountLikes}
                publicSince={fav.publicSince}
              />)}
            </div>
          <div className="flex items-center justify-between md:flex-col mt-8">
            <Link href="my-subscriptions"><button className="w-1/3 md:w-full flex items-center justify-center rounded-10 text-white fill-white text-sm bg-theme-gray-5">
              <svg
                className="scale-50"
                xmlns="http://www.w3.org/2000/svg"
                height="48"
                width="48"
              >
                <path d="M22.4 39.65 11.4 33.2Q10.7 32.8 10.325 32.1Q9.95 31.4 9.95 30.6V17.75Q9.95 16.95 10.325 16.25Q10.7 15.55 11.4 15.15L22.45 8.6Q23.15 8.2 24 8.2Q24.85 8.2 25.55 8.6L36.6 15.15Q37.3 15.55 37.675 16.25Q38.05 16.95 38.05 17.75V30.6Q38.05 31.4 37.65 32.1Q37.25 32.8 36.55 33.2L25.4 39.65Q24.7 40.05 23.9 40.05Q23.1 40.05 22.4 39.65ZM22.5 36.2V25L13 19.55V30.5Q13 30.5 13 30.5Q13 30.5 13 30.5ZM25.5 36.2 35.05 30.5Q35.05 30.5 35.05 30.5Q35.05 30.5 35.05 30.5V19.55L25.5 25ZM2 11.45V7.6Q2 5.3 3.65 3.65Q5.3 2 7.6 2H11.45V5H7.6Q6.5 5 5.75 5.75Q5 6.5 5 7.6V11.45ZM7.6 46Q5.3 46 3.65 44.35Q2 42.7 2 40.4V36.55H5V40.4Q5 41.5 5.75 42.25Q6.5 43 7.6 43H11.45V46ZM36.55 45.8V42.8H40.4Q41.5 42.8 42.25 42.05Q43 41.3 43 40.2V36.35H46V40.2Q46 42.5 44.35 44.15Q42.7 45.8 40.4 45.8ZM43 11.45V7.6Q43 6.5 42.25 5.75Q41.5 5 40.4 5H36.55V2H40.4Q42.7 2 44.35 3.65Q46 5.3 46 7.6V11.45ZM24 22.3 33.5 16.8 24 11.35Q24 11.35 24 11.35Q24 11.35 24 11.35L14.5 16.8ZM24.05 25ZM24 22.3ZM25.5 25ZM22.5 25Z" />
              </svg>
              MEINE ABOS
            </button></Link>
            <div className="w-4 md:w-0 md:mt-4"></div>
            <button className="w-1/3 md:w-full flex items-center justify-center rounded-10 text-white fill-white text-sm bg-theme-gray-5">
              <svg
                className="scale-50"
                xmlns="http://www.w3.org/2000/svg"
                height="48"
                width="48"
              >
                <path d="M23.1 38.9 31.6 20.9H25.1V8.9L16.6 26.9H23.1ZM24 44Q19.75 44 16.1 42.475Q12.45 40.95 9.75 38.25Q7.05 35.55 5.525 31.9Q4 28.25 4 24Q4 19.8 5.525 16.15Q7.05 12.5 9.75 9.8Q12.45 7.1 16.1 5.55Q19.75 4 24 4Q28.2 4 31.85 5.55Q35.5 7.1 38.2 9.8Q40.9 12.5 42.45 16.15Q44 19.8 44 24Q44 28.25 42.45 31.9Q40.9 35.55 38.2 38.25Q35.5 40.95 31.85 42.475Q28.2 44 24 44ZM24 24Q24 24 24 24Q24 24 24 24Q24 24 24 24Q24 24 24 24Q24 24 24 24Q24 24 24 24Q24 24 24 24Q24 24 24 24ZM24 41Q31.25 41 36.125 36.125Q41 31.25 41 24Q41 16.75 36.125 11.875Q31.25 7 24 7Q16.75 7 11.875 11.875Q7 16.75 7 24Q7 31.25 11.875 36.125Q16.75 41 24 41Z" />
              </svg>
              GIGA POWER
            </button>
            <div className="w-4 md:w-0 md:mt-4"></div>
            <button className="w-1/3 md:w-full flex items-center justify-center rounded-10 text-white fill-white text-sm bg-theme-gray-5">
              <svg
                className="scale-50"
                xmlns="http://www.w3.org/2000/svg"
                height="48"
                width="48"
              >
                <path d="M30 40Q23.3 40 18.65 35.35Q14 30.7 14 24Q14 17.3 18.65 12.65Q23.3 8 30 8Q36.7 8 41.35 12.65Q46 17.3 46 24Q46 30.7 41.35 35.35Q36.7 40 30 40ZM14.7 39.4Q9.05 38.7 5.525 34.225Q2 29.75 2 24Q2 18.25 5.525 13.775Q9.05 9.3 14.7 8.6V11.5Q10.3 12.3 7.65 15.875Q5 19.45 5 24Q5 28.55 7.65 32.125Q10.3 35.7 14.7 36.5ZM30 24Q30 24 30 24Q30 24 30 24Q30 24 30 24Q30 24 30 24Q30 24 30 24Q30 24 30 24Q30 24 30 24Q30 24 30 24ZM30 37Q35.35 37 39.175 33.175Q43 29.35 43 24Q43 18.65 39.175 14.825Q35.35 11 30 11Q24.65 11 20.825 14.825Q17 18.65 17 24Q17 29.35 20.825 33.175Q24.65 37 30 37Z" />
              </svg>
              GIGA COINS AUFLADEN
            </button>
          </div>
        </div>

      </div>
    </>
  );
}
