import { useState } from "react";
import Link from "next/link";
import Input from "./ui/Input";
import InputSelect from "./ui/InputSelect";
import classes from './Registration.module.css';
import BackTo from './../public/backto.svg';
import Checkbox from "./ui/Checkbox";
import Select from 'react-select';
import Image from "next/image";
import ShopWithLine from './../public/shopwithline.svg';

export default function Registration() {
  const style = {
    control: (base) => ({
      ...base,
      boxShadow: "none",
      border: "none",
      fontSize: '13px',
      borderRadius: '10px',
      width: "50%",
    }),
    option: (styles, state) => ({
      ...styles,
      backgroundColor: state.isSelected ? "#fbb900" : "",
      "&:active": "#fbb90080",
      fontSize: '13px',
    }),
  };

  const [gender, setGender] = useState();

  const [firstname, setFirstname] = useState();
  const [lastname, setLastname] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [confirmPassword, setConfirmPassword] = useState();

  const [newsletterActive, setNewsletterActive] = useState();
  const [agb, setAgb] = useState();

  const option1 = [
    { value: "alle marken", label: "Alle Marken" },
    { value: "alle", label: "Alle Marken" },
    { value: "marken", label: "Alle Marken" },
  ];

  var geburtsjahre = [];
  for(let i = 2023 - 110; i <= 2023 - 10; i++ ){
    geburtsjahre.push({value: i, label: i});
  }
  console.log(geburtsjahre)
  return (
    <div className="bg-theme-gray-10 overflow-hidden lg:px-6 md:!px-0 pb-max-h-full ">
      <div className="relative w-10/12 lg:w-full max-w-ag-container max-h-full md:!w-full mx-auto flex lg:flex-col bg-white p-6">
        <div className={classes.container}>
          <div className={classes.left}>
            <div className={classes.stepshower}>
              <div className={classes.steponeactive}>1<div className={classes.triangle}></div></div>
              <div className={classes.steptwo}>2</div>
              <div className={classes.stepthree}>3</div>
            </div>
            <Link href={"/"}><div className={classes.backtohome}><BackTo className={classes.backto} />zurück zur Startseite</div></Link>
            <div className={classes.heading}>Neu Registrieren</div>
            <div className={classes.rowhalfer}>
              <div className={classes.gendercheckboxes}>
                <label htmlFor="male" className={classes.wholeinput}>
                  <input id="male" type={"radio"} className={classes.radioinput} onChange={() => setGender(d => !d)} name={"gender"} />
                  Mann
                </label>
                <label htmlFor="female" className={classes.wholeinput}>
                  <input id="female" type={"radio"} className={classes.radioinput} onChange={() => setGender(d => !d)} name={"gender"} />
                  Frau
                </label>
              </div>
              <div className={classes.pflichtfelder}>
                *= Pflichtfelder
              </div>
            </div>
            <div className={classes.name}>
              <input type={"text"} className={classes.inputleft} onChange={(e) => setFirstname(e.target.value)} placeholder={"Vorname *"} />
              <input type={"text"} className={classes.input} onChange={(e) => setFirstname(e.target.value)} placeholder={"Vorname *"} />
            </div>
            <div className={classes.mail}>
              <input type={"email"} placeholder={"E-Mail-Addresse *"} className={classes.input} onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div className={classes.password}>
            <p className={classes.label}>mind. 8 Zeichen, ein Groß- & Kleinbuchstabe und eine Ziffer</p>
            <Input inputType={"password"} placeholder={"Passwort *"} onChange={(e) => setPassword(e.target.value)} />
            <Input inputType={"password"} placeholder={"Passwort Wiederholen *"} onChange={(e) => setConfirmPassword(e.target.value)} />
            </div>
            <div className={classes.birth}>
              <div className={classes.label}>Geburtsjahr ist nur für Sie sichtbar</div>
              <Select 
              styles={style}
              options={geburtsjahre}
              placeholder="Alle"
              className='mt-1 mb-1'
              isSearchable={true}
              defaultInputValue={geburtsjahre[geburtsjahre.length - 1].value}
              />
            </div>
            <div className={classes.newslettercheckboxes}>
              <label htmlFor="newsletter" className={classes.wholeinput}>
                <input id="newsletter" className={classes.radioinput} type={"checkbox"} onChange={() => setNewsletterActive(d => !d)} />  
                Newsletter, Updates und Trends erhalten.
              </label>
              <label htmlFor="agb" className={classes.bottominput}>
                <input id="agb" className={`${classes.radioinput} ${classes.transform}`} type={"checkbox"} onChange={() => setAgb(d => !d)} />  
                Es gelten unsere Allgemeinen Geschäftsbedingungen.
Informationen zum Datenschutz finden Sie in unserer Datenschutzerklärung.
              </label>
            </div>
            <div className={classes.captcha}>Captcha</div>
            <div className={classes.sendbtn}>Neu registrieren</div>
          </div>
          <div className={classes.right}>
            <div className={classes.image}>
              <Image src={"/images/reg-car.png"} layout="fill" objectFit="cover" />
            </div>
            <div className={classes.registerasdealer}>
              <div className={classes.dealerheading}>Als Händler registrieren</div>
              <div className={classes.dealertext}>
              Haben Sie Fragen?<br/>
Wir helfen Ihnen gerne weiter. <Link href={"/contact-us"}><span className={classes.link}>Kontaktformular</span></Link>
              </div>
              <div className={classes.sendbtn}><ShopWithLine className={classes.shopwithline} />Als Händler registrieren</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
