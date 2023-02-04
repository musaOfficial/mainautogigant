
import BackHome from "./../../public/home.svg";
import classes from './TopRow.module.css';
import Link from "next/link";

function TopRow(){
    return (
        <div className={`${classes.top_row}`}>
        <span className={classes.leftrow}>
          <Link href={"/"}>
            <BackHome className={classes.backhome} />
          </Link>
        </span>
      </div>
    )
}

export default TopRow;