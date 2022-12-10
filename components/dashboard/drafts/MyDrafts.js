import { useEffect, useState } from "react";
import Pagination from "../../dealer/list/Pagination";
import DraftCard from "./DraftCard";
import classes from "./MyDrafts.module.css";
import PostAd from "./../../../public/postad.svg";
import Select from "react-select";
import Angebot from "../../ui/ads/Angebot";

export default function MyDrafts() {
  const [cardView, setCardView] = useState("list");
  const [cards, setCards] = useState(10);

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
    { value: "modell", label: "Modell" },
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
          <div className={classes.adcountercontainer}>
            <div className={classes.adcounterleft}>
              <div className={classes.adcountersvg}></div>
              <div className={classes.count}>{drafts.length}</div>
            </div>
            <div className={classes.adcounterright}></div>
          </div>
          <div className={classes.listeditorcontainer}>
            <div className={classes.amounttoshow}>
              <span>ANZEIGEN:</span>
              <Select
                options={sortOptions}
                styles={style}
                onChange={(e) => {}}
                placeholder={"Alle"}
                className="ml-2"
              ></Select>
            </div>
            <div className={classes.sort}>
              <span>SORTIEREN NACH: </span>
              <Select
                options={sortOptions}
                styles={style}
                onChange={(e) => {}}
                placeholder={"Alle"}
                className="w-full"
              ></Select>
            </div>
          </div>
          <div className={`${gridView == true ? classes.grid : classes.list} ${classes.cardscontainer}`}>
            {drafts.map((item, index) => (
              <DraftCard
                key={index}
                title={item.title}
                description="This is a long description, this is a long descriptionThis is a long description, this is a long descriptionThis is a long description, this is a long descriptionThis is a long description, this is a long descriptionThis is a long description, this is a long descriptionThis is a long description, this is a long descriptionThis is a long description, this is a long descriptionThis is a long description, this is a long descriptionThis is a long description, this is a long descriptionThis is a long description, this is a long descriptionThis is a long description, this is a long descriptionThis is a long description, this is a long descriptionThis is a long description, this is a long descriptionThis is a long description, this is a long descriptionThis is a long description, this is a long descriptionThis is a long description, this is a long descriptionThis is a long description, this is a long descriptionThis is a long description, this is a long descriptionThis is a long description, this is a long descriptionThis is a long description, this is a long descriptionThis is a long description, this is a long descriptionThis is a long description, this is a long descriptionThis is a long description, this is a long descriptionThis is a long description, this is a long descriptionThis is a long description, this is a long descriptionThis is a long description, this is a long description"
                price="€ 45.520,-"
                adNo="#123456789"
                start="01/01/2020"
                end="01/01/2020"
                imgSrc="/images/draft-card-img-car-1.png"
                cardView={!gridView}
                details={{
                  erstzulassung: "01/2022",
                  kraftstoff: "Benzin",
                  leistung: "125 PS",
                  kilometerstand: "412.000 KM",
                  getriebe: "Automatik",
                  fahrzeugzustand: "Gebraucht",
                }}
                location="2700 Wiener Neustadt | AT"
                companyname="Gigant Group Teknoloji A.S"
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
