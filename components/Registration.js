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
import Check from './../public/hackerl.svg';
import BackHome from './../public/home.svg';
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

export default function Registration() {

  const [width, height] = useDeviceSize();

  const style = {
    control: (base) => ({
      ...base,
      boxShadow: "none",
      border: "none",
      fontSize: '13px',
      borderRadius: '10px',
      width: "50%",
      cursor: "pointer",
    }),
    option: (styles, state) => ({
      ...styles,
      backgroundColor: state.isSelected ? "#fbb900" : "",
      "&:active": "#fbb90080",
      "&:hover" : {
        backgroundColor: "#FFE497"
      },
      "&:focus" : {
        backgroundColor: "#FBB900"
      },
      fontSize: '13px',
      cursor: "pointer",
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

  const [geburtsjahr, setGeburtsjahr] = useState();

  const option1 = [
    { value: "alle marken", label: "Alle Marken" },
    { value: "alle", label: "Alle Marken" },
    { value: "marken", label: "Alle Marken" },
  ];

  var geburtsjahre = [];
  for(let i = 2023 - 18; i >= 1930; i-- ){
    geburtsjahre.push({value: i, label: i});
  }
  return (
    <div className="bg-theme-gray-10 overflow-hidden lg:px-6 md:!px-0 pb-max-h-full ">
      <div className="relative w-10/12 lg:w-full max-w-ag-container max-h-full md:!w-full mx-auto flex flex-col lg:flex-col bg-white p-6">
        <div className={`${classes.top_row}`}>
            <span className={classes.leftrow}><Link href={"/"}><BackHome className={classes.backhome} /></Link></span>
        </div>
        <div className="flex">
        <div className={classes.container}>
          <div className={classes.left}>
            <div className={classes.stepshower}>
              <div className={classes.steponeactive}>1<div className={classes.triangle}></div></div>
              <div className={classes.steptwo}>2</div>
              <div className={classes.stepthree}>3</div>
            </div>
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
            <p className={classes.label}>mind. 8 Zeichen, {width < 450 && <br></br>} ein Groß- & Kleinbuchstabe und eine Ziffer</p>
            <Input inputType={"password"} className={classes.pflichtfelder} placeholder={"Passwort *"} onChange={(e) => setPassword(e.target.value)} />
            <Input inputType={"password"} className={classes.pflichtfelder} placeholder={"Passwort Wiederholen *"} onChange={(e) => setConfirmPassword(e.target.value)} />
            </div>
            <div className={classes.birth}>
              <div className={classes.label}>Geburtsjahr ist nur für Sie sichtbar</div>
              <Select 
              styles={style}
              options={geburtsjahre}
              placeholder="Alle"
              className='mt-1 mb-1'
              isSearchable={true}
              onChange={(e) => setGeburtsjahr(e.value)}
              />
            </div>
            <div className={classes.newslettercheckboxes}>

              <label htmlFor="agb" className={classes.bottominput}>
              <div className='flex items-center'>
                <div className={classes.weiss} onClick={() => setNewsletterActive(d => !d)}>
                  {newsletterActive == true && <Check className={classes.blackcheck} />}
                </div>
                <span className={classes.typlabel}>Newsletter, Updates und Trends erhalten.</span>
              </div>
              </label>
              <label htmlFor="agb" className={`${classes.bottominput} mt-2`}>
              <div className='flex'>
                <div className={classes.weiss} onClick={() => setAgb(d => !d)}>
                  {agb == true && <Check className={classes.blackcheck} />}
                </div>
                <span className={classes.typlabel}>Es gelten unsere Allgemeinen Geschäftsbedingungen. Informationen zum Datenschutz finden Sie in unserer Datenschutzerklärung.</span>
              </div>
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
              <Link href={"dealer"}><div className={classes.sendbtn}><ShopWithLine className={classes.shopwithline} />Als Händler registrieren</div></Link>
            </div>
          </div>
        </div>

        </div>
      </div>
    </div>
  );
}
