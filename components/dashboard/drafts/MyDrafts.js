import { useEffect, useState } from "react";
import Pagination from "../../dealer/list/Pagination";
import DraftCard from "./DraftCard";
import classes from "./MyDrafts.module.css";
import PostAd from "./../../../public/postad.svg";
import Select from "react-select";
import Angebot from "../../ui/ads/Angebot";

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


export default function MyDrafts() {
  const [cardView, setCardView] = useState("list");
  const [cards, setCards] = useState(10);
  const [width, height] = useDeviceSize();

  useEffect(() => {
    if (window.innerWidth <= 1023) {
      setCardView("grid");
    }
  }, []);

  const style = {
    control: (base) => ({
      ...base,
      boxShadow: "none",
      border: "none",
      fontSize: "13px",
      borderRadius: "10px",
    }),
    option: (styles, state) => ({
      ...styles,
      backgroundColor: state.isSelected ? "#fbb900" : "",
      "&:active": "#fbb90080",
      fontSize: "13px",
    }),
  };

  const drafts = [
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
  ];

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

  const [gridView, setGridView] = useState(false);

  return (
    <>
      <div className={classes.container}>
        <div className={classes.r1}>
          <div className={classes.toprow}>
            <h1 className={classes.heading}>MEINE ENTWÜRFE</h1>
            <div className={classes.postad}>
              <span className={classes.postadtext}>INSERAT AUFGEBEN</span>
              <PostAd />
            </div>
          </div>
          
          <div className={classes.listeditorcontainer}>
            <div className={classes.sort}>
              <Select
                options={sortOptions}
                styles={style}
                onChange={(e) => {}}
                placeholder={"SORTIEREN NACH"}
                className="w-full"
              ></Select>
            </div>
          </div>
          <div className={`${width >= 720 ? classes.flex : classes.grid}`}>
            {drafts.map((fav, index) => (
              <DraftCard
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
                cardView={width >= 720 ? true : false}
                location={fav.location}
                companyname={fav.companyname}
                onClick={() => handleDel(index)}
                gigalabel={fav.gigalabel}
                colorad={fav.colorad} 
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
