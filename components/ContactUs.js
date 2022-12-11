import classes from './ContactUs.module.css';
import CallIcon from './../public/aboutus/call.svg';
import MailIcon from './../public/aboutus/mail.svg';
import AccountIcon from './../public/aboutus/account.svg';
import ShopIcon from './../public/aboutus/shop.svg';
import { useState } from 'react';
import Select from 'react-select';
import { setTouched } from 'react-advanced-form';

function ContactUs(){

    const style = {
        control: (base) => ({
          ...base,
          boxShadow: "none",
          border: "none",
          fontSize: '13px',
          borderRadius: '10px',
          height: '40px',
        }),
        option: (styles, state) => ({
          ...styles,
          backgroundColor: state.isSelected ? "#fbb900" : "",
          "&:active": "#fbb90080",
          transition: "all .08s ease-in",
          "&:hover": {
            backgroundColor: "#fbb900"
          },
          fontSize: '13px',
        }),
      };

    const [haendler, setHaendler] = useState(false);
    const genders = [
        {value: "maennlich", label: "Männlich"},
        {value: "weiblich", label: "Weiblich"},
    ]

    const [gender, setGender] = useState(genders[0]);
    const [vorname, setVorname] = useState("");
    const [nachname, setNachname] = useState("");
    const [mail, setMail] = useState("");
    const [vorwahl, setVorwahl] = useState();
    const [telnum, setTelnum] = useState();
    const [kundennummer, setKundennummer] = useState();
    const [firma, setFirma] = useState();
    const [postleitzahl, setPostleitzahl] = useState();
    const [thema, setThema] = useState();

    const vorwahle = [
        {value: "+43", label: "+43"},
        {value: "+49", label: "+49"},
        {value: "+41", label: "+41"},
        {value: "+974", label: "+974"},
    ];

    const themen = [
        {value: "angebotBeanstanden", label: "Angebot Beanstanden"},
        {value: "beschwerde", label: "Beschwerde"},
        {value: "inseratAendern", label: "Inserat Ändern"},
        {value: "inseratOffline", label: "Inserat Offline"},
        {value: "kostenpflichtigeDienste", label: "Kostenpflichtige Dienste"},
        {value: "neuInserieren", label: "Neu Inserieren"},
        {value: "passwortVergessen", label: "Passwort Vergessen"},
        {value: "registrieren", label: "Registrieren"},
        {value: "suchen", label: "Suchen"},
        {value: "verbesserungsvorschlag", label: "Verbesserungsvorschlag"},
        {value: "sonstiges", label: "Sonstiges"},
    ]

    return (
        <div className={classes.container}>
            <div className={`${classes.contentcontainer} overflow-y-hidden relative w-10/12 lg:w-full max-w-ag-container md:!w-full mx-auto flex lg:flex-col bg-white p-6`}>
                <h1 className={classes.heading}>KONTAKT</h1>
                <div className={classes.toprow}>
                    <div className={classes.selector}>
                        <div className={`${haendler == false ? classes.privat : classes.privatselected}`} onClick={() => setHaendler(false)} >
                            PRIVAT <AccountIcon className={classes.account} />
                        </div>
                        <div className={`${haendler == true ? classes.haendler : classes.haendlernotselected}`} onClick={() => {
                            setHaendler(true);
                        }}>
                            <ShopIcon className={classes.shop} /> HÄNDLER
                        </div>
                    </div>
                    <div className={classes.contacter}>
                        <div className={classes.con}>
                            <CallIcon  />
                        </div>
                        <div className={classes.con}>
                            <MailIcon />
                        </div>
                        <div className={classes.conlast}>
                            FAQ
                        </div>
                    </div>
                </div> 
                <div className={classes.form}>
                    {haendler == false && <div className={classes.privatcontainer}>
                        <div className={classes.privatleft}>
                            <div className={classes.genderselector}>
                                <Select 
                                    options={genders} 
                                    styles={style}
                                    onChange={(e) => {
                                        setGender(e.value)
                                    }}
                                    className="mr-2"
                                    placeholder="Männlich"
                                ></Select>
                            </div>
                            <input type={"text"} className={classes.input} onChange={(e) => setVorname(e.target.value)} placeholder="Vorname*" />
                            <input type={"text"} className={classes.input} onChange={(e) => setNachname(e.target.value)} placeholder="Nachname*"/>
                            <input type={"text"} className={classes.input} onChange={(e) => setMail(e.target.value)} placeholder="E-Mail*"/>
                            <div className={classes.telcontainer}>
                                <div className={classes.genderselector}>
                                    <Select 
                                        options={vorwahle} 
                                        styles={style}
                                        onChange={(e) => {
                                            setVorwahl(e.value)
                                        }}
                                        className={`mr-2 ${classes.margintop}`}
                                        placeholder="+43"
                                    ></Select>
                                </div>
                                <input type={"number"} className={classes.input} onChange={(e) => setTelnum(e.target.value)} placeholder="Telefonnummer*" />
                            </div>
                            <p className={classes.text}>Durch Ihre Kontaktaufnahme speichern wir personenbezogene Daten. 
Dies sind jene Daten, die Sie im Kontaktformular freiwillig angeben sowie Ihre IP-Adresse, 
Zeit Stempel, App-Version, Handy-Modell und dein jeweiliges Betriebssystem. 
Wir speichern diese Daten, um Ihre Anfrage komplett und so schnell wie möglich 
beantworten zu können.</p>
                        </div>
                        <div className={classes.privatright}>
                            <Select 
                                options={themen} 
                                styles={style}
                                onChange={(e) => {
                                    setVorwahl(e.value)
                                }}
                                placeholder="Thema*"
                            ></Select>
                            <textarea className={classes.anliegenarea} rows="9" placeholder='Mein Anliegen*' ></textarea>
                            <button className={classes.sendbtn}>NACHRICHT SENDEN</button>
                        </div>
                    </div>}
                    {haendler == true && <div className={classes.privatcontainer}>
                        <div className={classes.privatleft}>
                            <div className={classes.genderselector}>
                                <Select 
                                    options={genders} 
                                    styles={style}
                                    onChange={(e) => {
                                        setGender(e.value)
                                    }}
                                    className="mr-2"
                                    placeholder="Männlich"
                                ></Select>
                            </div>
                            <input type={"text"} className={classes.input} onChange={(e) => setVorname(e.target.value)} placeholder="Vorname*" />
                            <input type={"text"} className={classes.input} onChange={(e) => setNachname(e.target.value)} placeholder="Nachname*"/>
                            <input type={"text"} className={classes.input} onChange={(e) => setMail(e.target.value)} placeholder="E-Mail*"/>
                            <div className={classes.telcontainer}>
                                <div className={classes.genderselector}>
                                    <Select 
                                        options={vorwahle} 
                                        styles={style}
                                        onChange={(e) => {
                                            setVorwahl(e.value)
                                        }}
                                        className={`mr-2 ${classes.margintop}`}
                                        placeholder="+43"
                                    ></Select>
                                </div>
                                <input type={"number"} className={classes.input} onChange={(e) => setTelnum(e.target.value)} placeholder="Telefonnummer*" />
                            </div>
                            <input type={"text"} className={classes.input} onChange={(e) => setVorname(e.target.value)} placeholder="Firma" />
                            <input type={"text"} className={classes.input} onChange={(e) => setVorname(e.target.value)} placeholder="Postleitzahl" />
                            <p className={classes.text}>Durch Ihre Kontaktaufnahme speichern wir personenbezogene Daten. 
Dies sind jene Daten, die Sie im Kontaktformular freiwillig angeben sowie Ihre IP-Adresse, 
Zeit Stempel, App-Version, Handy-Modell und dein jeweiliges Betriebssystem. 
Wir speichern diese Daten, um Ihre Anfrage komplett und so schnell wie möglich 
beantworten zu können.</p>
                        </div>
                        <div className={classes.privatright}>
                            <input type={"text"} className={classes.haendlerinput} onChange={(e) => setVorname(e.target.value)} placeholder="Kundennummer" />
                            <Select 
                                options={themen} 
                                styles={style}
                                onChange={(e) => {
                                    setThema(e.value)
                                }}
                                placeholder="Thema*"
                            ></Select>
                            <textarea className={classes.haendleranliegenarea} rows="9" placeholder='Mein Anliegen*' ></textarea>
                            <button className={classes.sendbtn}>NACHRICHT SENDEN</button>
                        </div>
                    </div>}
                </div>
                <p className={classes.contactdesc}>
                    Wenn Sie Fragen zu AUTO GIGANT. haben, finden Sie schnelle Antworten in unserem <a>Hilfebereich.</a>{" "}
 Unser Support-Team steht Ihnen gerne für weitere Fragen, Wünsche und Anregungen zur Verfügung. Sie erreichen uns Montag bis Freitag von 09:00 bis 17:00 Uhr.
                    </p>
            </div>
        </div>
    )
}

export default ContactUs;