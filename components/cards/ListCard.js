import classes from "./ListCard.module.css";
import Image from "next/image";
import CompanyLocation from "./../../public/icons/companylocation.svg";
import FavoriteIcon from './../../public/fav.svg';
import ShareIcon from './../../public/sha.svg';
import EyeIcon from './../../public/eye.svg';


function ListCard({
  id,
  adNo,
  price,
  title,
  img,
  location,
  gigalabel,
  colorad,
  description,
  details,
  baujahr,
  getriebe,
  ps,
  kmStand,
}) {
  var displayPrice = price.toLocaleString();
  var displayDescription = description.substring(0, 35) + "...";
  var displayPs = ps.toLocaleString() + " PS";
  var displayKmStand = kmStand.toLocaleString() + " KM";

  return (
    <div className={classes.container}>
      <div className={classes.img}>
        <Image src={img} layout="fill" objectFit="cover" />
      </div>
      <div className={classes.about}>
        <div className={classes.icons}>
            <div className={classes.i}><FavoriteIcon className={classes.icon} /></div>
            <div className={classes.i}><ShareIcon className={classes.icon} /></div>
            <div className={classes.i}><EyeIcon className={classes.icon} /></div>
        </div>
        <div className={classes.title}>{title}</div>
        <div className={classes.description}>{displayDescription}</div>
        <div className={classes.details}>
          <div className={classes.detail}>{baujahr}</div>
          <div className={classes.detail}>{displayPs}</div>
          <div className={classes.detail}>{displayKmStand}</div>
          <div className={classes.lastdetail}>{getriebe}</div>
        </div>
        <div className={classes.location}>
          <CompanyLocation className={classes.svg} />
          {location}
        </div>
      </div>
      <div className={classes.price}>€ {displayPrice},-</div>
    </div>
  );
}

export default ListCard;
