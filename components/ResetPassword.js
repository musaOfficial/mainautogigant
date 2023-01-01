import Link from "next/link";
import Input from "./ui/Input";
import classes from './ResetPassword.module.css';
import BackArrow from './../public/backto.svg';
import { useState } from "react";
import Check from './../public/checkaccount.svg'
import Image from "next/image";
export default function ResetPassword() {
  const [mail, setMail] = useState();
  return (
    <>
      <div className="bg-theme-gray-10 overflow-hidden lg:px-6 md:!px-0">
        <div className={`${classes.contentcontainer} relative w-10/12 lg:w-full max-w-ag-container md:!w-full mx-auto flex lg:flex-col bg-white p-6`}>
          <div className={classes.row}>
              <div className={classes.left}>
                <Link href={"/"}><div className={classes.backto}><BackArrow className={classes.backarrow} /> zurück zur Startseite</div></Link>
                <div className={classes.heading}>Passwort vergessen</div>
                <div className={classes.text}>
                  Bitte geben Sie hier Ihre E-Mail-Adresse ein,<br></br>
                  mit der Sie sich registriert haben.
                  <br></br>
                  <br></br>
                  Wir schicken Ihnen einen Link,<br></br>
                  mit dem Sie ihr Passwort zurücksetzen können
                </div>
                <Input placeholder={"E-Mail-Adresse"} inputType={"email"} onChange={(e) => setMail(e.target.value)} />
                <div className={classes.sendarea}>
                  <div className={classes.sendbtn}>Senden</div>
                  <div className={classes.acccheck}>
                      <Check className={classes.check} />
                      <span className={classes.checktext}>Du bist noch nicht registriert?<br></br><span className={classes.link}>Jetzt neu registrieren</span></span>
                  </div>
                </div>
              </div>
              <div className={classes.right}>
                <Image src={"/images/reset-password.png"} layout='fill' objectFit="cover" />
                <div className={classes.threerowtext}>
                  <div className={classes.first}>Passwort</div>
                  <div className={classes.second}>vergessen?</div>
                  <div className={classes.third}>Keine Sorge!</div>
                </div>
              </div>
          </div>
        </div>
      </div>
    </>
  );
}
