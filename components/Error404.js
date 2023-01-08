import Link from "next/link";
import classes from './Error404.module.css'
import Image from 'next/image';
import BackTo from './../public/backto.svg';

export default function Err404() {
  return (
    <div className="bg-theme-gray-10 md:bg-white lg:px-6 md:!px-0">
      <div className={`w-10/12 lg:w-full max-w-ag-container mx-auto relative bg-white text-center ${classes.padding}`}>
        <div className={classes.container}>
        <Link href={"/"}><div className={classes.backtohome}><BackTo className={classes.backto} />zurück zur Startseite</div></Link>
          <div className={classes.content}>
            <div className={classes.heading}>Seite nicht gefunden</div>
            <div className={classes.text}>Leider konnten wir die angeforderte Seite nicht finden. | Error 404</div>
            <img className="mx-auto md:w-72 mt-10 mb-10" src="/images/404-gorila.png" />
          </div>
        </div>
      </div>
    </div>
  );
}
