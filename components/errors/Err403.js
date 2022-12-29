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
            <div className={classes.heading}>Zugriff verweigert</div>
            <div classes={classes.text}>Um alle Funktionen nutzen zu können<br></br>melden Sie sich bitte mit Ihren Login-Daten an. | Error 403</div>
            <img className="mx-auto md:w-72 mt-10 mb-10" src="/images/404-gorila.png" />
          </div>
        </div>
      </div>
    </div>
  );
}
