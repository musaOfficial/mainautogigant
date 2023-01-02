import classes from './LatestAdvertisementsPage.module.css';
import { useState } from 'react';
import FavAngebot from './../components/ui/ads/FavAngebot';
import Angebot from './ui/ads/Angebot';
import BigReload from './../public/bigreload.svg';
function LatestAdvertisementsPage(){
    const [latestAdvertisements, setLatestAdvertisements] = useState([

    ]);


    const handleDel = (index) => {
        var reducedFilters = [...latestAdvertisements];
        reducedFilters.splice(index, 1);
        setLatestAdvertisements(reducedFilters);
    }
    return (
        <div className={classes.container}>
            <div className={classes.heading}>Neuesten Inserate</div>
            <div className={classes.bigtext}>Aktuelle Fahrzeugangebote die auf AUTO GIGANT.</div>
            {latestAdvertisements.length != 0 ? <div className={classes.flex}>
            {latestAdvertisements.map((fav, index) => <div key={indexit} className={classes.angebot}>
                <Angebot 
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
                <span className={classes.reload}>
                    <BigReload className={classes.bigreload} />
                </span>
            </div>}
        </div>
    )
}

export default LatestAdvertisementsPage;