import { useState } from 'react';
import classes from './FavouritesPage.module.css';
import FavAngebot from './ui/ads/FavAngebot';
function FavouritesPage(){
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
            companyname: "Gigant Group Teknoloji A.S"

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
            {favourites.length != 0 ? <div className={classes.flex}>
            {favourites.map((fav, index) => <div className={classes.angebot}>
                <FavAngebot 
                    key={index}
                    title={fav.title} 
                    price={fav.preis} 
                    adNo={fav.adNo} 
                    start={fav.start}  
                    end={fav.end}
                    imgSrc={fav.imgSrc}
                    description={"This is a description"}
                    details={fav.details}
                    cardView={true}
                    location={fav.location}
                    companyname={fav.companyname}
                    onClick={() => handleDel(index)}
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