
import BackHome from "./../../public/home.svg";
import classes from './TopRow.module.css';
import Link from "next/link";
import Hom from './../../public/hom.svg'
import Plu from './../../public/plu.svg'
import Mes from './../../public/mes.svg'
import Not from './../../public/not.svg'
import Set from './../../public/set.svg'
import Das from './../../public/das.svg'
import Sea from './../../public/searchicon.svg';
import { useState } from "react";

function TopRow(){

    const [search, setSearch] = useState("");

    return (
      <div className={`${classes.top_row}`}>
        <div className={classes.top}>
          <div className={`${classes.i} ${classes.b}`}><Hom className={classes.icon} /></div>
          <div className={`${classes.i} ${classes.b}`}><Plu className={classes.icon} /></div>
          <div className={`${classes.i} ${classes.b}`}><Mes className={classes.icon} /></div>
          <div className={`${classes.i} ${classes.b}`}><Not className={classes.icon} /></div>
          <div className={`${classes.i} ${classes.b}`}><Set className={classes.icon} /></div>
          <div className={`${classes.i} ${classes.b} ${classes.lasticon}`}><Das className={classes.icon} /></div>
        </div>
        <div className={classes.bottom}>
            <div className={classes.searchfield}>
              <Sea className={classes.icon} /><input type={"text"} value={search} onChange={(e) => setSearch(e.target.value)} className={classes.searchinput} />
            </div>
        </div>
      </div>
    )
}

export default TopRow;