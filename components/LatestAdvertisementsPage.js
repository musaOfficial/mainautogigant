import classes from './LatestAdvertisementsPage.module.css';
import { useState } from 'react';
import FavAngebot from './../components/ui/ads/FavAngebot';
import Angebot from './ui/ads/Angebot';
import BigReload from './../public/bigreload.svg';
import { useEffect } from 'react';

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

function LatestAdvertisementsPage(){

    const [width, height] = useDeviceSize();

    const [latestAdvertisements, setLatestAdvertisements] = useState([
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

    const handleDel = (index) => {
        var reducedFilters = [...latestAdvertisements];
        reducedFilters.splice(index, 1);
        setLatestAdvertisements(reducedFilters);
    }

    return (
        <div className={classes.container}>
            <div className={classes.heading}>Neuesten Inserate</div>
            <div className={classes.bigtext}>Eine Liste der aktuellen Fahrzeugangebote, die auf AutoGigant.at veröffentlicht wurden, nach Aktualität sortiert.</div>
            {latestAdvertisements.length != 0 ? <div className={width >= 720 ? classes.flex : classes.grid}>
            {latestAdvertisements.map((fav, index) => <div key={index} className={classes.angebot}>
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
                    cardView={width >= 720 ? true : false}
                    location={fav.location}
                    companyname={fav.companyname}
                    onClick={() => handleDel(index)}
                    gigalabel={fav.gigalabel}
                    colorad={fav.colorad}        
                    />
            </div>)}
            </div> : 
            <div className={classes.heading}>
                <span className={classes.reload}>
                    <BigReload className={classes.bigreload} />
                </span>
            </div>}
        </div>
    )
}

export default LatestAdvertisementsPage;