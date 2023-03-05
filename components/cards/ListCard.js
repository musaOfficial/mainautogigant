import classes from "./ListCard.module.css";
import Image from "next/image";
import CompanyLocation from "./../../public/icons/companylocation.svg";
import FavoriteIcon from './../../public/fav.svg';
import ShareIcon from './../../public/sha.svg';
import EyeIcon from './../../public/eye.svg';
import { useState } from "react";
import { useEffect } from "react";
import Automatik from './../../public/listcard/automatik.svg';
import PsIcon from './../../public/horsepower.svg';
import BenzinIcon from './../../public/benzin.svg';
import KilometerstandIcon from './../../public/kilometerstand.svg';
import BaujahrIcon from './../../public/bj.svg';
import CompareIcon from './../../public/compare.svg';
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

function ListCard({
  id,
  adNo,
  price,
  title,
  img,
  state,
  country,
  gigalabel,
  colorad,
  description,
  details,
  baujahr,
  getriebe,
  ps,
  kmStand,
  treibstoff,
  seller,
  onAddCompare,
  brand,
  model,
  bodyType,
  transmissionType,
  conditionOption,
  performance,
  exteriourColour,
  upholstery,
  fuelType,
  pollutantClass,
  seats,
  doors,
  valueChanger
}) {

  const [width, height] = useDeviceSize();

  var displayPrice = price.toLocaleString();
  var displayDescription = description.substring(0, 35) + "...";
  var displayPs = ps.toLocaleString() + " PS";
  var displayKmStand = kmStand.toLocaleString() + " KM";

  // bodyType={fav.bodyType}
  // transmissionType={fav.transmissionType}
  // conditionOption={fav.conditionOption}
  // performance={fav.performance}
  // exteriourColour={fav.exteriourColour}
  // upholstery={fav.upholstery}
  // fuelType={fav.fuelType}
  // pollutantClass={fav.pollutantClass}
  // seats={fav.seats}
  // doors={fav.doors}
  const [value, setValue] = useState(null)
  function handleCompare(){
    onAddCompare({ 
      id: id,
      preis: price,
      erstzulassung: baujahr,
      marke: brand,
      modell: model,
      karosserieform: bodyType,
      kilometer: kmStand,
      getriebe: transmissionType,
      fahrzeugzustand: conditionOption,
      leistung: performance,
      aussenfarbe: exteriourColour,
      polsterfarbe: upholstery,
      treibstoff: fuelType,
      schadstoffklasse: pollutantClass,
      sitze: seats,
      tuere: doors,
      img: img,
})
    if(value == null){

      setValue("3");
    } else {
      setValue(null);
    }
  }

  return (
    <div className={`${classes.wrapper} ${colorad == true && classes.coloradwrapper}`}>
        {width <= 530 && <div className={`${classes.above} ${colorad == true && classes.coloradabove}`}>
            <div className={`${classes.e} ${colorad == true && classes.colorade}`}><div className={`${classes.u} ${colorad == true && classes.coloradu}`}><div className={`${classes.k} ${classes.firstk}`}><EyeIcon className={classes.whiteicon} /></div></div></div>
            <div className={`${classes.e} ${colorad == true && classes.colorade}`}><div className={`${classes.u} ${colorad == true && classes.coloradu}`}><div className={`${classes.k} ${classes.firstk}`}><FavoriteIcon className={classes.whiteicon} /></div></div></div>
            <div className={`${classes.e} ${colorad == true && classes.colorade}`}><div className={`${classes.u} ${colorad == true && classes.coloradu}`}><div className={`${classes.k} ${classes.firstk}`}><ShareIcon className={classes.whiteicon} /></div></div></div>
            
            <div className={classes.aboveprice}>€ {displayPrice},-</div>
        </div>}
        <div className={`${classes.container} ${colorad == true && classes.coloradcontainer}`}>
      <div className={classes.img}>
        <Image src={img} layout="fill" objectFit="cover" />
      </div>
      <div className={`${classes.about} ${colorad == true && classes.colorad}`}>
        <div className={`${classes.title} ${width <= 800 && classes.responsivetitle} ${width <= 530 && classes.titledistance}`}>{title}{width >= 737 && <span>{width <= 800 && <div className={classes.description}>{displayDescription}</div>}</span>}</div>
        {width > 800 && <div className={classes.description}>{displayDescription}</div>}
        <div className={classes.details}>
          <div className={classes.detail}><BaujahrIcon className={classes.svg} />{baujahr}</div>
          {width > 530 && <div className={classes.detail}><KilometerstandIcon className={classes.svg} />{displayKmStand}</div>}
          {width > 900 && <div className={classes.detail}><BenzinIcon className={classes.svg} />{treibstoff}</div>}
          <div className={classes.detail}><Automatik className={classes.svg} />{getriebe}</div>
          
          
          {width > 530 && <div className={classes.lastdetail}><PsIcon className={classes.svg} />{displayPs}</div>}
          {/* {width > 530 && <div className={classes.lastdetail}>{seller}</div>} */}
        </div>
        {width <= 530 && <div className={classes.details}>
          <div className={classes.detail}><KilometerstandIcon className={classes.svg} />{displayKmStand}</div>
          <div className={classes.lastdetail}><PsIcon className={classes.svg} />{displayPs}</div>
        </div>}
        {width <= 530 && <div className={classes.details}>
            <div className={classes.detail}><BenzinIcon className={classes.svg} />{treibstoff}</div>
            <div className={classes.lastdetail}>{seller}</div> 
        </div>}
        <div className={classes.interactions}>
          {width > 530 && <span className={classes.location}>
            <CompanyLocation className={classes.svg} />
            <span className={classes.locationtext}>{state}{width > 530 && ", " + country}</span>
          </span>}
          {width > 530 && <div className={classes.icons}>
            <div className={`${classes.i} ${classes.b} ${value != null && classes.comp}`} onClick={handleCompare}><CompareIcon className={classes.icon} /></div>
            <div className={`${classes.i} ${classes.b}`}><FavoriteIcon className={classes.icon} /></div>
            <div className={`${classes.i} ${classes.b}`}><ShareIcon className={classes.icon} /></div>
            <div className={`${classes.i} ${classes.b} ${classes.lasticon}`}><EyeIcon className={classes.icon} /></div>
        </div>}
        </div>
       { width <= 530 && <span className={classes.location}>
            <CompanyLocation className={classes.svg} />
            <span className={classes.locationtext}>{state}{width > 530 && ", " + country}</span>
        </span>}
        {width > 530 && <div className={classes.price}>€ {displayPrice},-</div>}
      </div>
    </div>
    </div>
  );
}

export default ListCard;
