import { useState } from 'react';
import classes from './FavouritesPage.module.css';
import FavAngebot from './ui/ads/FavAngebot';
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

function FavouritesPage(){

    const [width, height] = useDeviceSize();

    const [favourites, setFavourites] = useState([
        {
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
                fahrzeugzustand: "Neu"
            },
            location: "Österreich, 2700 Wiener Neustadt",
            companyname: "Gigant Group Teknoloji A.S"

        },
        {
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
                fahrzeugzustand: "Neu"
            },
            location: "Österreich, 2700 Wiener Neustadt",
            companyname: "Gigant Group Teknoloji A.S"
        },
        {
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
                fahrzeugzustand: "Neu"
            },
            location: "Österreich, 2700 Wiener Neustadt",
            companyname: "Gigant Group Teknoloji A.S",
            colorad: true,

        },
    ]);


    const handleDel = (index) => {
        var reducedFilters = [...favourites];
        reducedFilters.splice(index, 1);
        setFavourites(reducedFilters);
    }

    return (
        <div className={classes.container}>
            <div className={classes.heading}>Meine bevorzugten Inserate</div>
            <div className={classes.text}>
                Wenn Sie eine Anzeige verfolgen möchten, können Sie zu Ihrer Favoritenliste hinzufügen.<br></br>
                Auf diese Weise werden Sie sofort über jegliche Änderungen informiert und bleiben stets auf dem neuesten Stand!
            </div>
            {favourites.length != 0 ? <div className={width >= 1250 ? classes.flex : classes.grid }>
            {favourites.map((fav, index) => <div key={index} className={classes.angebot}>
            <FavAngebot
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
            </div> : 
            <div className={classes.heading}>
                Sie haben keine favorisierte Anzeigen!
            </div>}
        </div>
    )
}

export default FavouritesPage;