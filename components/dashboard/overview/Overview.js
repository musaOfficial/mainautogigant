import { useState } from "react";
import classes from './Overview.module.css';
import OverviewSchedule from "./OverviewSchedule";
import DashboardChart from "./Chart";
import Advertisements from "./Advertisements";
import Angebot from "../../ui/ads/Angebot";
import { useEffect } from "react";

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

export default function Overview() {

  const [width, height] = useDeviceSize();

  const [zoomChart, setZoomChart] = useState(false);

  const begehrtestenInserate = [
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
  ]

  return (
    <>
      <OverviewSchedule />
      <div className="w-full rounded-bl-md rounded-br-md overflow-hidden shadow-md my-8">
        <DashboardChart />
        <div className="relative bg-theme-gray-5 md:text-10">
          <div className="w-full flex justify-center md:justify-start py-3">
            <button className="px-2 py-1.5 rounded mx-4 md:mx-0 md:ml-2 bg-white">
              1 Monat
            </button>
            <button className="px-2 py-1.5 rounded mx-4 md:mx-1 bg-white">
              3 Monate
            </button>
            <button className="px-2 py-1.5 rounded mx-4 md:mx-1 bg-white">
              6 Monate
            </button>
            <button className="px-2 py-1.5 rounded mx-4 md:mx-1 bg-white">
              12 Monate
            </button>
          </div>
          <button onClick={() => setZoomChart(true)} className="absolute top-2 md:top-1 mt-px right-8 md:right-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              viewBox="0 0 40 40"
            >
              <path
                id="zoom_out_map_FILL0_wght400_GRAD0_opsz48_3_"
                data-name="zoom_out_map_FILL0_wght400_GRAD0_opsz48 (3)"
                d="M6,46V33.222H9.333v7.056l8.222-8.222,2.389,2.389-8.222,8.222h7.056V46Zm27.222,0V42.667h7.056L32.111,34.5,34.5,32.111l8.167,8.167V33.222H46V46ZM17.5,19.889,9.333,11.722v7.056H6V6H18.778V9.333H11.722L19.889,17.5Zm17,0L32.111,17.5l8.167-8.167H33.222V6H46V18.778H42.667V11.722Z"
                transform="translate(-6 -6)"
                fill="#fff"
              />
            </svg>
          </button>
        </div>
        {zoomChart ? (
        <div className="fixed flex items-center justify-center z-10 top-0 left-0 h-screen w-screen">
          <div
            onClick={() => setZoomChart(false)}
            className="absolute z-10 top-0 left-0 h-full w-full bg-black bg-opacity-60"
          ></div>
          <div className="relative z-40 w-2/3 lg:w-full bg-white">
           <DashboardChart />
          </div>
        </div>
      ) : null}
      </div>
      <div className="p-4 rounded-md bg-theme-gray-4 mt-6">
            <div className="flex justify-between text-xl md:text-base font-bold text-theme-black-2">
                <h4>Die begehrtesten Inserate</h4>
                <h4>Letzten 7 Tage</h4>
            </div>
            <div className={classes.adgrid}>
              {begehrtestenInserate.map((fav, index) => <div key={index} className={width >= 1250 && classes.adprop}>
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
                    cardView={width >= 800 ? true : false}
                    location={fav.location}
                    companyname={fav.companyname}
                    onClick={() => handleDel(index)}
                    gigalabel={fav.gigalabel}
                    colorad={fav.colorad}       
                />
              </div>)}
          </div>
        </div>
    </>
  );
}
