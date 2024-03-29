import Link from "next/link";
import classes from './Error403.module.css'
import Image from 'next/image';
import BackTo from './../public/backto.svg';
export default function Err403() {
  return (
    <div className="bg-theme-gray-3 md:bg-white lg:px-6 md:!px-0">
      <div className={`w-10/12 lg:w-full max-w-ag-container mx-auto relative bg-white text-center ${classes.padding}`}>
        <div className={classes.container}>
          <Link href={"/"}><div className={classes.backtohome}><BackTo className={classes.backto} />zurück zur Startseite</div></Link>
          <div className={classes.content}>
            <div className={classes.heading}>Technischer Fehler</div>
            <div className={classes.text}>Leider ist ein technischer Fehler aufgetreten.<br></br>Wir arbeiten gerade an der Behebung dieses Fehlers und bitten um Ihr Verständnis | Error 500</div>
            <img className="mx-auto md:w-72 mt-10 mb-10" src="/images/404-gorila.png" />
          </div>
        </div>
      </div>
    </div>
  );
}
