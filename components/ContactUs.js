import classes from './ContactUs.module.css';
import CallIcon from './../public/aboutus/call.svg';
import MailIcon from './../public/aboutus/mail.svg';
import AccountIcon from './../public/aboutus/account.svg';
import ShopIcon from './../public/aboutus/shop.svg';
import { useState } from 'react';
import Select from 'react-select';
import Link from 'next/link'

function ContactUs(){

    const style = {
        control: (base) => ({
          ...base,
          boxShadow: "none",
          border: "none",
          fontSize: '15px',
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
          fontSize: '15px',
        }),
      };

    const [haendler, setHaendler] = useState(false);
    const genders = [
        {value: "herr", label: "Herr"},
        {value: "frau", label: "Frau"},
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
    const [bereich, setBereich] = useState();

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

    const bereiche = [
        {value: "" ,label: "Bitte wählen"},
        {value: "ihrVertrag" ,label: "Ihr Vertrag"},
        {value: "problemMelden" ,label: "Probleme & Inserate melden"},
        {value: "schnittstellenService" ,label: "Schnittstellen-Service"},
        {value: "aenderungKundendaten" ,label: "Änderung Ihrer Kundendaten"},
        {value: "allgemeineAnfrage" ,label: "Allgemeine Anfrage"},
    ];

    const [showTelNum, setShowTelNum] = useState(false);

    return (
        <div className={classes.container}>
            <div className={`${classes.contentcontainer} overflow-y-hidden relative w-10/12 lg:w-full max-w-ag-container md:!w-full mx-auto flex lg:flex-col bg-white p-6`}>
                <h1 className={classes.heading}>KONTAKT</h1>
                <div className={classes.toprow}>
                    <div className={classes.selector}>
                        <div className={`${haendler == false ? classes.privat : classes.privatselected}`} onClick={() => setHaendler(false)} >
                            <span>PRIVAT</span> <AccountIcon className={classes.account} />
                        </div>
                        <div className={`${haendler == true ? classes.haendler : classes.haendlernotselected}`} onClick={() => {
                            setHaendler(true);
                        }}>
                            <ShopIcon className={classes.shop} /> <span>HÄNDLER</span>
                        </div>
                    </div>
                    <div className={classes.contacter}>
                        <div className={`${classes.con} ${haendler == false && "transition-all duration-100 opacity-0"}`} onMouseEnter={() => setShowTelNum(true)} onMouseLeave={() => setShowTelNum(false)}>
                            <CallIcon className={classes.consvg} />
                           {showTelNum == true && <div className={classes.numcontainer}>
                                <div className={classes.conhover}>
                                    <span className={classes.num}>+43 (0) 699 19778899</span>
                                </div>
                                <div className={classes.contriangle}></div>
                            </div>}
                        </div>
                        <div className={classes.con}>
                            <MailIcon className={classes.consvg} />
                        </div>
                        <Link href={"/faq"}>
                            <div className={classes.conlast}>
                                FAQ
                            </div>
                        </Link>
                    </div>
                </div> 
                <div className={classes.form}>
                    {haendler == false && <div className={classes.privatcontainer}>
                        <div className={classes.privatleft}>
                            <div className={classes.parent}>
                                <div className={classes.genderselector}>
                                    <Select 
                                        options={genders} 
                                        styles={style}
                                        onChange={(e) => {
                                            setGender(e.value)
                                        }}
                                        className="mr-2"
                                        placeholder="Anrede"
                                    ></Select>
                                </div>
                                <div className='w-full'></div>
                            </div>
                            <input type={"text"} className={classes.input} onChange={(e) => setVorname(e.target.value)} placeholder="Vorname *" />
                            <input type={"text"} className={classes.input} onChange={(e) => setNachname(e.target.value)} placeholder="Nachname *"/>
                            <input type={"text"} className={classes.input} onChange={(e) => setMail(e.target.value)} placeholder="E-Mail *"/>
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
                                <input type={"number"} className={classes.input} onChange={(e) => setTelnum(e.target.value)} placeholder="Telefonnummer *" />
                            </div>
                        </div>
                        <div className={classes.privatright}>
                            <Select 
                                options={themen} 
                                styles={style}
                                onChange={(e) => {
                                    setVorwahl(e.value)
                                }}
                                placeholder="Thema *"
                            ></Select>
                            <textarea className={classes.anliegenarea} rows="9" placeholder='Mein Anliegen *' ></textarea>
                        </div>
                    </div>}
                    {haendler == true && <div className={classes.privatcontainer}>
                        <div className={classes.privatleft}>
                            <div className={classes.parent}>
                                <div className={classes.genderselector}>
                                    <Select 
                                        options={genders} 
                                        styles={style}
                                        onChange={(e) => {
                                            setGender(e.value)
                                        }}
                                        className="mr-2"
                                        placeholder="Anrede"
                                    ></Select>
                                </div>
                                <div className='w-full'></div>
                            </div>
                            <input type={"text"} className={classes.input} onChange={(e) => setVorname(e.target.value)} placeholder="Vorname *" />
                            <input type={"text"} className={classes.input} onChange={(e) => setNachname(e.target.value)} placeholder="Nachname *"/>
                            <input type={"text"} className={classes.input} onChange={(e) => setMail(e.target.value)} placeholder="E-Mail *"/>
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
                                <input type={"number"} className={classes.input} onChange={(e) => setTelnum(e.target.value)} placeholder="Telefonnummer *" />
                            </div>
                            <input type={"text"} className={`${classes.input} ${classes.firmainput}`} onChange={(e) => setVorname(e.target.value)} placeholder="Firma" />
                            <input type={"number"} className={`${classes.input} ${classes.postleitzahlinput}`} onChange={(e) => setVorname(e.target.value)} placeholder="Postleitzahl" />
                        </div>
                        <div className={classes.privatright}>
                            <input type={"number"} className={classes.haendlerinput} onChange={(e) => setVorname(e.target.value)} placeholder="Kundennummer" />
                            <Select 
                                options={bereiche} 
                                styles={style}
                                onChange={(e) => {
                                    setBereich(e.value)
                                }}
                                placeholder={`Bereich *`}
                            ></Select>
                            <Select 
                                options={themen} 
                                styles={style}
                                onChange={(e) => {
                                    setThema(e.value)
                                }}
                                placeholder="Thema *"
                                className={classes.margintop}
                            ></Select>
                            <textarea className={classes.haendleranliegenarea} rows="9" placeholder='Mein Anliegen *' ></textarea>
                        </div>
                    </div>}
                    <div className={classes.bottomcontainer}>
                        <p className={classes.text}>Durch Ihre Kontaktaufnahme speichern wir personenbezogene Daten. 
    Dies sind jene Daten, die Sie im Kontaktformular freiwillig angeben sowie Ihre IP-Adresse, 
    Zeit Stempel, App-Version, Handy-Modell und dein jeweiliges Betriebssystem. 
    Wir speichern diese Daten, um Ihre Anfrage komplett und so schnell wie möglich 
    beantworten zu können.</p>
                        <button className={classes.sendbtn}>NACHRICHT SENDEN</button>
                    </div>
                </div>
                <p className={classes.contactdesc}>
                    Wenn Sie Fragen zu Autogigant.at haben, finden Sie schnelle Antworten in unserem <Link href="/help">Hilfebereich.</Link><br></br>
 Unser Support-Team steht Ihnen gerne für weitere Fragen, Wünsche und Anregungen zur Verfügung. Sie erreichen uns Montag bis Freitag von 09:00 bis 17:00 Uhr.
                    </p>
            </div>
        </div>
    )
}

export default ContactUs;