import classes from "./ListCard.module.css";
import Image from "next/image";
import CompanyLocation from "./../../public/icons/companylocation.svg";
import FavoriteIcon from './../../public/fav.svg';
import ShareIcon from './../../public/sha.svg';
import EyeIcon from './../../public/eye.svg';
import { useState } from "react";
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
}) {

  const [width, height] = useDeviceSize();

  var displayPrice = price.toLocaleString();
  var displayDescription = description.substring(0, 35) + "...";
  var displayPs = ps.toLocaleString() + " PS";
  var displayKmStand = kmStand.toLocaleString() + " KM";

  return (
    <div className={classes.wrapper}>
        <div className={classes.container}>
      <div className={classes.img}>
        <Image src={img} layout="fill" objectFit="cover" />
      </div>
      <div className={`${classes.about} ${colorad == true && classes.colorad}`}>
        <div className={`${classes.title} ${width <= 800 && classes.responsivetitle}`}>{title}{width >= 737 && <span>{width <= 800 && <div className={classes.description}>{displayDescription}</div>}</span>}</div>
        {width > 800 && <div className={classes.description}>{displayDescription}</div>}
        <div className={classes.details}>
          <div className={classes.detail}>{baujahr}</div>
          {width > 900 && <div className={classes.detail}>{treibstoff}</div>}
          <div className={classes.detail}>{getriebe}</div>
          
          {width > 530 && <div className={classes.detail}>{displayKmStand}</div>}
          {width > 530 && <div className={classes.lastdetail}>{displayPs}</div>}
        </div>
        {width <= 530 && <div className={classes.lastdetails}>
          <div className={classes.detail}>{displayKmStand}</div>
          <div className={classes.lastdetail}>{displayPs}</div>
        </div>}
        {width <= 530 && <div className={classes.lastdetails}>
            <div className={classes.detail} >{seller}</div>
            <div className={classes.lastdetail}>{treibstoff}</div>
        </div>}
        <div className={classes.interactions}>
          {width > 530 && <span className={classes.location}>
            <CompanyLocation className={classes.svg} />
            <span className={classes.locationtext}>{state}{width > 530 && ", " + country}</span>
          </span>}
          {width > 530 && <div className={classes.icons}>
            <div className={`${classes.i} ${classes.b}`}><FavoriteIcon className={classes.icon} /></div>
            <div className={`${classes.i} ${classes.b}`}><ShareIcon className={classes.icon} /></div>
            <div className={`${classes.i} ${classes.b} ${classes.lasticon}`}><EyeIcon className={classes.icon} /></div>
        </div>}
        </div>
        <div className={classes.price}>€ {displayPrice},-</div>
      </div>
    </div>
    {width <= 530 && <div className={classes.smallcontainer}>
        <div className={classes.belowimg}>
            <div className={classes.responsiveicons}>
                <div className={`${classes.firstt} ${classes.r}`}><FavoriteIcon className={classes.icon} /></div>
                <div className={`${classes.t} ${classes.r}`}><ShareIcon className={classes.icon} /></div>
                <div className={`${classes.t} ${classes.r} ${classes.lasticon}`}><EyeIcon className={classes.icon} /></div>
            </div>
        </div>
        <div className={`${classes.belowabout} ${colorad == true && classes.belowaboutcolorad}`}>
            {width <= 530 && <span className={classes.location}>
            <CompanyLocation className={classes.svg} />
            <span className={classes.locationtext}>{state}{width > 530 && ", " + country}</span>
          </span>}
        </div>
    </div>}
    </div>
  );
}

export default ListCard;
