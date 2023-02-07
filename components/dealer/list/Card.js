import classes from './Card.module.css';
import Image from 'next/image';
import Store from './../../../public/dealercard/store.svg'
import Account from './../../../public/dealercard/account.svg'
import Map from './../../../public/dealercard/map.svg'
import Star from './../../../public/dealercard/star.svg'
import { useState } from 'react';

export default function ListCard({ hgm, usrname, address, state, rating, fromRatingAmount, gridView, profileimgsrc, bannerimgsrc }) {

  const [hover, setHover] = useState(false);

  return (
    <>
      {gridView == false ? <div className={classes.container} onMouseLeave={() => setHover(false)} >
        <div className={classes.left} onMouseOver={() => setHover(true)} onMouseLeave={() => setHover(false)}>
          <div className={classes.cardimg}>
          {bannerimgsrc ? <Image src={bannerimgsrc} layout="fill" objectFit='cover'/> : null}
        </div>
          <div className={classes.profileimg}>{profileimgsrc ? <Image src={profileimgsrc} layout="fill" objectFit='cover'/> : null}</div>
        </div>
        <div className={classes.right}>
          <div className='flex flex-col mr-6 w-full '>
            <div className={classes.listitemlist}><strong>{hgm}</strong></div>
            {usrname != "" && <div className={classes.listitemlist}>{usrname}</div>}
            <div className={classes.listitemlist}><div className={classes.state}>{address}<br></br>{state}</div></div>
            <div className={classes.lastlistitemlist}>{rating} / von {fromRatingAmount} Bewertungen</div>
          </div>
          <div className={classes.buttons}>
            <button className={classes.halfbtn}>Profil besuchen</button>
            <button className={classes.halfbtnsend}>Nachricht senden</button>
          </div>
        </div>
    </div> :
    
    <div className={classes.card} onMouseLeave={() => setHover(false)} >
      <div className={classes.top} onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)} >
        <div className={classes.cardimage} >
          {bannerimgsrc ? <Image src={bannerimgsrc} layout="fill" objectFit='cover'/> : null}
        </div>
        <div className={classes.profileimage}>
          {profileimgsrc ? <Image src={profileimgsrc} layout="fill" objectFit='cover'/> : null}
        </div>
      </div>
      <div className={classes.bottom}>
        <div className={classes.listitem}><span className='font-bold'>{hgm}</span></div>
          {usrname != "" && <div className={classes.listitem}>{usrname}</div>}
          <div className={classes.listitem}><div className={classes.state}>{address}<br></br>{state}</div></div>
          <div className={classes.lastlistitem}>{rating} / von {fromRatingAmount} Bewertungen</div>
          <div className={`${classes.buttonscard} mt-2`}>
            <button className={classes.halfbtncard}>Profil besuchen</button>
            <button className={classes.halfbtnsendcard}>Nachricht senden</button>
          </div>
      </div>
    </div>
    }
    </>
  );
}