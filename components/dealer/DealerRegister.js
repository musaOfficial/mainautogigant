import { useState } from "react";
import Link from "next/link";
import Input from "../ui/Input";
import InputSelect from "../ui/InputSelect";
import Checkbox from "../ui/Checkbox";
import classes from "./DealerRegister.module.css";
import BackHome from "./../../public/home.svg";
import Check from "./../../public/hackerl.svg";
import Select from 'react-select'
import { useEffect } from "react";
import Albania from './../../public/flags/albania.svg';
import Austria from './../../public/flags/austria.svg';
import Bosnia from './../../public/flags/bosnia.svg';
import Bulgaria from './../../public/flags/bulgaria.svg';
import Croatia from './../../public/flags/croatia.svg';
import Czech from './../../public/flags/czech.svg';
import France from './../../public/flags/france.svg';
import Hungary from './../../public/flags/hungary.svg';
import Iran from './../../public/flags/iran.svg';
import Poland from './../../public/flags/poland.svg';
import Italy from './../../public/flags/italy.svg';
import Qatar from './../../public/flags/qatar.svg';
import Romania from './../../public/flags/romania.svg';
import Russia from './../../public/flags/russia.svg';
import Saudi from './../../public/flags/saudi.svg';
import Serbia from './../../public/flags/serbia.svg';
import Spain from './../../public/flags/spain.svg';
import Switzerland from './../../public/flags/switzerland.svg';
import Turkey from './../../public/flags/turkey.svg';
import Ukraine from './../../public/flags/ukraine.svg';
import United from './../../public/flags/united.svg';
import Germany from './../../public/flags/germany.svg';
import Slovakia from './../../public/flags/slovakia.svg';
import Azerbaijan from './../../public/flags/azerbaijan.svg';
import option4 from "../data/phonePrefixes";
import TopRow from "../ui/TopRow";

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


export default function DealerRegister() {

  const [width, height] = useDeviceSize();

  const style = {
    control: (base) => ({
      ...base,
      boxShadow: "none",
      border: "none",
      fontSize: '13px',
      borderRadius: '10px',
      width: "100%",
      cursor: "pointer",
      height: "40px",
      marginBottom: "24px"
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

  const [isStepActive, setIsStepActive] = useState(1);
  const [firmenname, setFirmenname] = useState();
  const [ergaenzung, setErgaenzung] = useState();
  const [strasse, setStrasse] = useState();
  const [hausnummer, setHausnummer] = useState();
  const [stadt, setStadt] = useState();
  const [plz, setPlz] = useState();
  const [land, setLand] = useState();
  const [uidNr, setUidNr] = useState();
  const [email, setEmail] = useState();
  const [internetaddresse, setInternetaddresse] = useState();
  const [anrede, setAnrede] = useState();
  const [titel, setTitel] = useState();
  const [vorname, setVorname] = useState();
  const [nachname, setNachname] = useState();
  const [vorwahl1, setVorwahl1] = useState();
  const [vorwahl2, setVorwahl2] = useState();
  const [telefonnummer, setTelefonnummer] = useState();
  const [mobiltelefonnummer, setMobiltelefonnummer] = useState();
  const [passwort, setPasswort] = useState();
  const [passwort2, setPasswort2] = useState();
  const [fahrzeugHaendler, setFahrzeugHaendler] = useState();
  const [kreditvermittler, setKreditvermittler] = useState();
  const [zulassungsstelle, setZulassungsstelle] = useState();
  const [kfzWerkstatt, setKfzWerkstatt] = useState();
  const [versicherungsmakler, setVersicherungsmakler] = useState();
  const [autoaufbereitung, setAutoaufbereitung] = useState();
  const [newsletter, setNewsletter] = useState();
  const [agbZustimmung, setAgbZustimmung] = useState();

  const option1 = [
    { value: "alle marken", label: "Alle Marken" },
    { value: "alle", label: "Alle Marken" },
    { value: "marken", label: "Alle Marken" },
  ];
  const option2 = [
    {value: "AL", label: <Albania />, name: "Albania"},
    {value: "AT", label: <Austria />, name: "Austria"},
    {value: "BA", label: <Bosnia />, name: "Bosnia"},
    {value: "BG", label: <Bulgaria />, name: "Bulgaria"},
    {value: "HR", label: <Croatia />, name: "Croatia"},
    {value: "CZ", label: <Czech />, name: "Czech Republic"},
    {value: "FR", label: <France />, name: "France"},
    {value: "HU", label: <Hungary />, name: "Hungary"},
    {value: "IR", label: <Iran />, name: "Iran"},
    {value: "PL", label: <Poland />, name: "Poland"},
    {value: "IT", label: <Italy />, name: "Italy"},
    {value: "QA", label: <Qatar />, name: "Qatar"},
    {value: "RO", label: <Romania />, name: "Romania"},
    {value: "RU", label: <Russia />, name: "Russia"},
    {value: "SA", label: <Saudi />, name: "Saudi Arabia"},
    {value: "RS", label: <Serbia />, name: "Serbia"},
    {value: "ES", label: <Spain />, name: "Spain"},
    {value: "CH", label: <Switzerland />, name: "Switzerland"},
    {value: "TR", label: <Turkey />, name: "Turkey"},
    {value: "UA", label: <Ukraine />, name: "Ukraine"},
    {value: "GB", label: <United />, name: "United Kingdom"},
    {value: "DE", label: <Germany />, name: "Germany"},
    {value: "SK", label: <Slovakia />, name: "Slovakia"},
    {value: "AZ", label: <Azerbaijan />, name: "Azerbaijan"}
  ];
  const option3 = [
    { value: "Frau", label: "Frau" },
    { value: "Herr", label: "Herr" },
  ];

  return (
    <div className="bg-theme-gray-10 overflow-hidden lg:px-6 md:!px-0">
      <div className="relative w-10/12 lg:w-full max-w-ag-container md:!w-full mx-auto flex flex-col lg:flex-col bg-white p-6">
        <TopRow />
        <div className="flex w-full lg:flex-col">
          <div className="w-1/2 lg:w-full relative before:lg:w-full mr-2 flex flex-col text-theme-gray-4 text-15 md:text-xs lg:flex-col">
            <div className="p-6 rounded-10 bg-theme-gray-4">
              <div className={classes.stepshower}>
                <div className={classes.steponeactive}>
                  1<div className={classes.triangle}></div>
                </div>
                <div className={classes.steptwo}>2</div>
                <div className={classes.stepthree}>3</div>
              </div>

              {/* DEALER REGISTER STEP
            ONE START FROM HERE */}
              {isStepActive === 1 && (
                <div>
                  <div className="relative"></div>
                  <h3 className="text-3xl text-theme-gray-4 font-bold mt-14">
                    Als Händler registrieren
                  </h3>
                  <div className="flex items-center mt-6 text-16 justify-between text-base">
                    <p className="pr-4">Firma</p>
                    <p className="text-13">*=Pflichtfelder</p>
                  </div>
                  <div className="mt-2">
                    <div>
                      <div className="flex items-center justify-between md:flex-col">
                        <div className="w-60 lg:w-6/12 md:!w-full mr-2 md:mr-0">
                          <Input
                            onChange={(e) => setFirmenname(e.target.value)}
                            placeholder="Firmenname *"
                          />
                        </div>
                        <div className="w-60 lg:w-6/12 md:!w-full ml-2 md:ml-0">
                          <Input
                            onChange={(e) => setErgaenzung(e.target.value)}
                            placeholder="Ergänzung"
                          />
                        </div>
                      </div>
                      <div className="flex items-center justify-between md:flex-col">
                        <div className="w-60 lg:w-6/12 md:!w-full mr-2 md:mr-0">
                          <Input
                            onChange={(e) => setStrasse(e.target.value)}
                            placeholder="Straße *"
                          />
                        </div>
                        <div className="w-60 lg:w-6/12 md:!w-full ml-2 md:ml-0">
                          <Input
                            onChange={(e) => setHausnummer(e.target.value)}
                            placeholder="Hausnummer *"
                          />
                        </div>
                      </div>
                      <div className="flex items-center justify-between md:flex-col">
                        <div className="w-60 lg:w-6/12 md:!w-full mr-2 md:mr-0">
                          <Input
                            onChange={(e) => setStadt(e.target.value)}
                            placeholder="Stadt *"
                          />
                        </div>
                        <div className="w-60 lg:w-6/12 md:!w-full ml-2 md:ml-0">
                          <Input
                            onChange={(e) => setPlz(e.target.value)}
                            placeholder="PLZ *"
                          />
                        </div>
                      </div>
                      <div className="flex items-center justify-between md:flex-col">
                        <div className="w-60 lg:w-6/12 md:!w-full mr-2 md:mr-0">
                          <Select
                            styles={style}
                            options={option2}
                            placeholder={"Land *"}
                            formatOptionLabel={option => <div className="flex items-center">
                              <span className="mr-2">{option.label}</span>
                              {option.name}
                            </div>}
                            onChange={(e) => setLand(e.value)}
                          />
                        </div>
                        <div className="w-60 lg:w-6/12 md:!w-full ml-2 md:ml-0">
                          <Input
                            placeholder="UID-Nr."
                            onChange={(e) => setUidNr(e.target.value)}
                          />
                        </div>
                      </div>
                      <div className="flex items-center justify-between md:flex-col">
                        <div className="w-60 lg:w-6/12 md:!w-full mr-2 md:mr-0">
                          <Input
                            placeholder="E-Mail-Adresse *"
                            onChange={(e) => setEmail(e.target.value)}
                          />
                        </div>
                        <div className="w-60 lg:w-6/12 md:!w-full ml-2 md:ml-0">
                          <Input
                            placeholder="Internet-Adresse (URL)"
                            onChange={(e) =>
                              setInternetaddresse(e.target.value)
                            }
                          />
                        </div>
                      </div>
                      <h3 className="text-base mb-4">Ansprechpartner</h3>
                      <div className="flex items-center justify-between md:flex-col">
                        <div className="w-60 lg:w-6/12 md:!w-full mr-2 md:mr-0">
                          <Select
                            styles={style}
                            options={option3}
                            placeholder={"Anrede *"}
                            regYear
                            onChange={(e) => setAnrede(e.value)}
                          />
                        </div>
                        <div className="w-60 lg:w-6/12 md:!w-full ml-2 md:ml-0">
                          <Input
                            placeholder="Titel"
                            onChange={(e) => setTitel(e.target.value)}
                          />
                        </div>
                      </div>
                      <div className="flex items-center justify-between md:flex-col">
                        <div className="w-60 lg:w-6/12 md:!w-full mr-2 md:mr-0">
                          <Input
                            placeholder="Vorname *"
                            onChange={(e) => setVorname(e.target.value)}
                          />
                        </div>
                        <div className="w-60 lg:w-6/12 md:!w-full ml-2 md:ml-0">
                          <Input
                            placeholder="Nachname *"
                            onChange={(e) => setNachname(e.target.value)}
                          />
                        </div>
                      </div>
                      <div className="flex items-center justify-between md:flex-col">
                        <div className="w-60 lg:w-6/12 md:!w-full mr-2 md:mr-0">
                          <Select
                            styles={style}
                            options={option4}
                            placeholder={<div className={"flex items-center"}>
                            <span className="mr-2">{option4[0].label}</span> {option4[0].value}
                          </div>}
                            formatOptionLabel={option => <div className={"flex items-center"}>
                              <span className="mr-2">{option.label}</span> {option.value}
                            </div> }
                          
                            regYear
                            onChange={(e) => setVorwahl1(e.value)}
                          />
                        </div>
                        <div className="w-60 lg:w-6/12 md:!w-full ml-2 md:ml-0">
                          <Input
                            placeholder="Telefonnummer *"
                            onChange={(e) => setTelefonnummer(e.target.value)}
                          />
                        </div>
                      </div>
                      <div className="flex items-center justify-between md:flex-col">
                        <div className="w-60 lg:w-6/12 md:!w-full mr-2 md:mr-0">
                          <Select
                            styles={style}
                            options={option4}
                            placeholder={<div className={"flex items-center"}>
                            <span className="mr-2">{option4[0].label}</span> {option4[0].value}
                          </div>}
                            formatOptionLabel={option => <div className={"flex items-center"}>
                            <span className="mr-2">{option.label}</span> {option.value}
                          </div> }
                            regYear
                            onChange={(e) => setVorwahl2(e.value)}
                          />
                        </div>
                        <div className="w-60 lg:w-6/12 md:!w-full ml-2 md:ml-0">
                          <Input
                            placeholder="Mobiltelefonnummern *"
                            name={"Mobiltelefonnummer"}
                            onChange={(e) =>
                              setMobiltelefonnummer(e.target.value)
                            }
                          />
                        </div>
                      </div>
                    </div>
                    <div>
                      <div className="relative mb-4">
                        <Input
                          placeholder="Passwort *"
                          inputType="password"
                          sublabel={`mind. 8 Zeichen, ${width < 450 ? `
                          ` : ""} ein Groß- & Kleinbuchstabe und eine Ziffer` }
                      
                          name={"passwort"}
                          onChange={(e) => setPasswort(e.target.value)}
                        />
                        <Input
                          placeholder="Passwort wiederholen *"
                          inputType="password"
                          name={"passwortWiederholen"}
                          onChange={(e) => setPasswort2(e.target.value)}
                        />
                      </div>
                    </div>
                    <h3 className="text-base">Branche Auswählen</h3>
                    <div className="pt-3 pb-3">
                      <div
                        className={`flex sm:flex-col justify-between text-15 text-gray-500 font-medium sm:mb-0 ${classes.grid}`}
                      >
                        <div className="">
                          <div className="flex items-center">
                            <div
                              className={classes.weiss}
                              onClick={() => setFahrzeugHaendler((d) => !d)}
                            >
                              {fahrzeugHaendler == true && (
                                <Check className={classes.blackcheck} />
                              )}
                            </div>
                            <span className={classes.typlabel}>
                              Fahrzeug Händler
                            </span>
                          </div>
                        </div>
                        <div className="">
                          <div className="flex items-center">
                            <div
                              className={classes.weiss}
                              onClick={() => setKreditvermittler((d) => !d)}
                            >
                              {kreditvermittler == true && (
                                <Check className={classes.blackcheck} />
                              )}
                            </div>
                            <span className={classes.typlabel}>
                              Kreditvermittler
                            </span>
                          </div>
                        </div>
                        <div className="">
                          <div className="flex items-center">
                            <div
                              className={classes.weiss}
                              onClick={() => setZulassungsstelle((d) => !d)}
                            >
                              {zulassungsstelle == true && (
                                <Check className={classes.blackcheck} />
                              )}
                            </div>
                            <span className={classes.typlabel}>
                              Zulassungsstelle
                            </span>
                          </div>
                        </div>
                        <div className="">
                          <div className="flex items-center">
                            <div
                              className={classes.weiss}
                              onClick={() => setKfzWerkstatt((d) => !d)}
                            >
                              {kfzWerkstatt == true && (
                                <Check className={classes.blackcheck} />
                              )}
                            </div>
                            <span className={classes.typlabel}>
                              KFZ Werkstatt
                            </span>
                          </div>
                        </div>
                        <div className="">
                          <div className="flex items-center">
                            <div
                              className={classes.weiss}
                              onClick={() => setVersicherungsmakler((d) => !d)}
                            >
                              {versicherungsmakler == true && (
                                <Check className={classes.blackcheck} />
                              )}
                            </div>
                            <span className={classes.typlabel}>
                              Versicherungsmakler
                            </span>
                          </div>
                        </div>
                        <div className="">
                          <div className="flex items-center">
                            <div
                              className={classes.weiss}
                              onClick={() => setAutoaufbereitung((d) => !d)}
                            >
                              {autoaufbereitung == true && (
                                <Check className={classes.blackcheck} />
                              )}
                            </div>
                            <span className={classes.typlabel}>
                              Autoaufbereitung
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex justify-between items-end">
                      <div className="h-14 flex text-xs flex-col md:w-full justify-between pt-2">
                        <div className="">
                          <div className="flex items-center">
                            <div
                              className={classes.weiss}
                              onClick={() => setNewsletter((d) => !d)}
                            >
                              {newsletter == true && (
                                <Check className={classes.blackcheck} />
                              )}
                            </div>
                            <span className={classes.typlabel}>
                              Newsletter, Updates und Trends per E-Mail.
                            </span>
                          </div>
                        </div>
                        <div className="mt-1">
                          <div className="flex items-center">
                            <div
                              className={classes.weiss}
                              onClick={() => setAgbZustimmung((d) => !d)}
                            >
                              {agbZustimmung == true && (
                                <Check className={classes.blackcheck} />
                              )}
                            </div>
                            <span className={classes.typlabel}>
                              Ich erkläre mich mit den AGB einverstanden.
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center justify-between mt-6 md:flex-col">
                      <img
                        className="w-2/5 md:w-full md:mr-0 md:mb-4 mr-4 inline-block"
                        src="/images/icons/recapcha.png"
                      />
                      <button className={`w-1/2 sm:w-full sm:mb-4 ml-4 sm:mr-0 inline-block px-4 sm:px-4 sm:text-sm py-3 rounded-10 bg-theme-yellow-2 text-white text-base font-bold ease-linear sm:ml-0 duration-300 hover:bg-theme-yellow-3 ${classes.registerbtn}`}>
                        Neu registrieren
                      </button>
                    </div>
                  </div>
                </div>
              )}
              {/* {isStepActive === 1 && (
              <div className="w-full flex items-center items-ceter mt-10 bg-theme-gray-4 rounded-10 text-sm sm:flex-col">
                <button className="w-1/2 sm:w-full sm:mb-4 mr-4 sm:mr-0 inline-block px-4 sm:px-4 sm:text-sm py-3 rounded-10 bg-theme-yellow-2 text-white text-base font-bold ease-linear duration-300 hover:bg-theme-yellow-3">
                  Als Händler registrieren
                </button>
                <div className="sm:w-full">
                  <p>Haben Sie Fragen?</p>
                  <p>Wir helfen Ihnen gerne weiter.</p>
                  <a
                    href="/#"
                    target="_blank"
                    rel="noreferer"
                    className="underline text-theme-blue"
                  >
                    Kontaktformular
                  </a>
                </div>
              </div>
            )} */}
              {/* DEALER REGISTER STEP
            ONE ENDS HERE */}
              {/* DEALER REGISTER STEP
            TWO START FROM HERE */}
              {/* DEALER REGISTER STEP
            TWO ENDS HERE */}
              {isStepActive === 2 && (
                <div>
                  <h3 className="text-2xl md:text-xl font-bold mt-8 mb-6 md:mb-6">
                    Registrierung abschließen
                  </h3>
                  <div className="relative w-full text-13">
                    <div className="flex items-center">
                      <div className="w-14 md:mr-4">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="40"
                          height="40"
                          viewBox="0 0 40 40"
                        >
                          <path
                            id="info_FILL0_wght400_GRAD0_opsz48"
                            d="M22.65,34h3V22h-3ZM24,18.3a1.643,1.643,0,0,0,1.175-.45,1.515,1.515,0,0,0,.475-1.15,1.681,1.681,0,0,0-.475-1.2,1.631,1.631,0,0,0-2.35,0,1.681,1.681,0,0,0-.475,1.2,1.515,1.515,0,0,0,.475,1.15A1.643,1.643,0,0,0,24,18.3ZM24,44a20.285,20.285,0,0,1-7.9-1.525A19.357,19.357,0,0,1,5.525,31.9,20.285,20.285,0,0,1,4,24a20.156,20.156,0,0,1,1.525-7.85A19.52,19.52,0,0,1,9.75,9.8,19.939,19.939,0,0,1,24,4,19.84,19.84,0,0,1,44,24a19.939,19.939,0,0,1-5.8,14.25,19.52,19.52,0,0,1-6.35,4.225A20.156,20.156,0,0,1,24,44Zm0-20Zm0,17a16.366,16.366,0,0,0,12-5,16.366,16.366,0,0,0,5-12,16.366,16.366,0,0,0-5-12A16.366,16.366,0,0,0,24,7a16.366,16.366,0,0,0-12,5A16.366,16.366,0,0,0,7,24a16.366,16.366,0,0,0,5,12A16.366,16.366,0,0,0,24,41Z"
                            transform="translate(-4 -4)"
                            fill="#dfdfdf"
                          />
                        </svg>
                      </div>
                      <div>
                        <p>Sie können Ihr Benutzerkonto</p>
                        <p>
                          nur mit einer bestätigten E-Mail-Adresse verwenden.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center mt-8">
                      <div className="w-14 md:mr-4">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="40"
                          height="32"
                          viewBox="0 0 40 32"
                        >
                          <path
                            id="mail_FILL0_wght400_GRAD0_opsz48"
                            d="M7,40a2.878,2.878,0,0,1-2.1-.9A2.878,2.878,0,0,1,4,37V11a2.878,2.878,0,0,1,.9-2.1A2.878,2.878,0,0,1,7,8H41a2.878,2.878,0,0,1,2.1.9A2.878,2.878,0,0,1,44,11V37a3.076,3.076,0,0,1-3,3ZM24,24.9,7,13.75V37H41V13.75Zm0-3L40.8,11H7.25ZM7,13.75V37H7Z"
                            transform="translate(-4 -8)"
                            fill="#dfdfdf"
                          />
                        </svg>
                      </div>
                      <div>
                        <p>E-Mail-Adresse bestätigen</p>
                        <p>
                          In kürze erhalten Sie eine E-Mail mit einem
                          Bestätigungslink.
                        </p>
                        <p>
                          Keine E-Mail erhalten?
                          <a
                            href="#"
                            target="_blank"
                            rel="norefferer"
                            className="text-theme-blue pl-1"
                          >
                            Hier neu anfordern.
                          </a>
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center mt-8">
                      <div className="w-14 md:mr-4">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="40"
                          height="31.9"
                          viewBox="0 0 40 31.9"
                        >
                          <path
                            id="how_to_reg_FILL0_wght400_GRAD0_opsz48"
                            d="M4,40V35.3a5.988,5.988,0,0,1,.85-3.125A5.4,5.4,0,0,1,7.4,30,37.376,37.376,0,0,1,14,27.7a26.327,26.327,0,0,1,6-.7,28.78,28.78,0,0,1,3.075.175A22.344,22.344,0,0,1,26.4,27.8l-2.45,2.45q-1-.1-1.975-.175T20,30a24.485,24.485,0,0,0-5.275.525A34.7,34.7,0,0,0,8.6,32.7a2.5,2.5,0,0,0-1.225,1.15A3.236,3.236,0,0,0,7,35.3V37H22.95l3,3Zm27.25.8L24.2,33.75l2.1-2.1,4.95,4.95L41.9,25.95l2.1,2.1ZM20,23.9a7.193,7.193,0,0,1-7.5-7.5A7.193,7.193,0,0,1,20,8.9a7.193,7.193,0,0,1,7.5,7.5A7.193,7.193,0,0,1,20,23.9ZM22.95,37ZM20,20.9a4.361,4.361,0,0,0,4.5-4.5A4.361,4.361,0,0,0,20,11.9a4.361,4.361,0,0,0-4.5,4.5A4.361,4.361,0,0,0,20,20.9Zm0-4.5Z"
                            transform="translate(-4 -8.9)"
                            fill="#dfdfdf"
                          />
                        </svg>
                      </div>
                      <div>
                        <p>
                          Mit Klick auf den Bestätigungslink ist Ihr AUTO
                          GIGANT.
                        </p>
                        <p>Benutzerkonto aktiv!</p>
                      </div>
                    </div>
                  </div>
                  <div className="text-xs mt-24 md:mt-10 pl-14">
                    <p>Wenn du keine E-Mail von uns erhalten hast,</p>
                    <p>
                      schaue bitte auch in den Spam-Ordner deines
                      E-Mail-Postfaches.
                    </p>
                  </div>
                </div>
              )}
              {/* DEALER REGISTER STEP
            THREE START FROM HERE */}

              {isStepActive === 3 && (
                <div className="flex flex-col items-center text-base py-20 md:py-10">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="100"
                    height="84.305"
                    viewBox="0 0 100 84.305"
                  >
                    <path
                      id="how_to_reg_FILL0_wght400_GRAD200_opsz40"
                      d="M2.5,89.453V75.065A15.8,15.8,0,0,1,4.7,66.92a14.543,14.543,0,0,1,6.361-5.767,83.046,83.046,0,0,1,16.885-6,68.752,68.752,0,0,1,14.982-1.724,66.1,66.1,0,0,1,7.311.417,70.7,70.7,0,0,1,7.908,1.367L49.586,63.77l-3.27-.237q-1.6-.12-3.507-.12A57.971,57.971,0,0,0,30.561,64.72a80.224,80.224,0,0,0-15.1,5.351,4.308,4.308,0,0,0-2.32,2.083,6.663,6.663,0,0,0-.654,2.911v4.4H48.159l10.582,9.988Zm67.776.477L52.083,71.737,59.1,64.72,70.276,75.9l25.09-25.09,7.134,7.017ZM42.809,45.577A19.215,19.215,0,0,1,28.54,39.93,19.526,19.526,0,0,1,22.953,25.6,19.315,19.315,0,0,1,42.809,5.625,19.616,19.616,0,0,1,57.2,11.273,19.307,19.307,0,0,1,62.9,25.6,19.307,19.307,0,0,1,57.2,39.93,19.616,19.616,0,0,1,42.809,45.577Zm5.351,33.888ZM42.929,35.589A9.753,9.753,0,0,0,52.917,25.6a9.68,9.68,0,0,0-2.854-7.134,9.828,9.828,0,0,0-7.254-2.854,9.481,9.481,0,0,0-7.074,2.854A9.789,9.789,0,0,0,32.941,25.6a9.789,9.789,0,0,0,2.794,7.134A9.628,9.628,0,0,0,42.929,35.589Zm0-9.988Z"
                      transform="translate(-2.5 -5.625)"
                      fill="#555"
                    />
                  </svg>

                  <h3 className="text-2xl md:text-xl font-bold mt-2 mb-10 md:mb-6 md:text-center md:mt-4">
                    Sie haben sich erfolgreich registriert!
                  </h3>

                  <p>Vielen Dank für die Registrierung.</p>
                  <p className="mb-6 md:my-4 text-center">
                    Sie werden in Kürze zur Startseite weitergeleitet.
                  </p>
                  <p className="md:text-center">
                    Oder
                    <a
                      className="text-theme-blue font-bold pl-1"
                      href="#"
                      target="_blank"
                      rel="norefferer"
                    >
                      Klicken Sie hier
                    </a>
                    , wenn Sie nicht warten wollen.
                  </p>
                </div>
              )}
              {/* DEALER REGISTER STEP
            THREE ENDS HERE */}
            </div>
        
          </div>
          <div className="relative w-1/2 lg:w-auto lg:ml-0 lg:mt-4 ml-3">
            <img
              className="w-full h-120 rounded-10 object-cover"
              src={`/images/${
                isStepActive === 1
                  ? "reg-car"
                  : isStepActive === 2
                  ? "dealer-register-close"
                  : isStepActive === 3
                  ? "register-success"
                  : null
              }.png`}
            />
            {isStepActive === 1 && (
              <div className={`w-1/2 lg:w-auto lg:ml-0 lg:mt-4 ml-3 `}>
              <div className={`absolute top-8 left-8 ${classes.img}`}>
                <p className={`px-2 table text-black  bg-theme-yellow-2 font-bold`}>
                  Die
                </p>
                <p className={`px-2 table mt-1 text-black  bg-theme-yellow-2 font-bold`}>
                  gigantische
                </p>
                <p className={`px-2 table mt-1 text-black  bg-theme-yellow-2 font-bold`}>
                  Plattform für Neu-
                </p>
                <p className={`px-2 table mt-1 text-black  bg-theme-yellow-2 font-bold`}>
                  und Gebrauchtwagen
                </p>
              </div>
            </div>
            )}
            
            <div className={classes.textcontainer}>
              <div className={classes.textheading}>AutoGigant. bietet den Benutzern eine Reihe von Vorteilen, darunter: </div>
              <div className={classes.text}><span className={classes.textsmallheading}>Bequemlichkeit:</span> Benutzer können bequem von zu Hause aus nach Autos suchen und vergleichen, ohne dass sie physisch einen Autohändler besuchen müssen.</div>
              <div className={classes.text}><span className={classes.textsmallheading}>Zeitersparnis:</span> Online-Automärkte ermöglichen es Benutzern, innerhalb weniger Minuten Hunderte von Autos zu durchsuchen und zu vergleichen, anstatt stundenlang von einem Autohändler zum nächsten zu gehen.</div>
              <div className={classes.text}><span className={classes.textsmallheading}>Preisvergleich:</span>Benutzer können leicht Preise für ähnliche Autos vergleichen, um sicherzustellen, dass sie den besten Preis erhalten.</div>
              <div className={classes.text}><span className={classes.textsmallheading}>Größere Auswahl:</span>Online-Automärkte haben in der Regel eine größere Auswahl an Autos, einschließlich gebrauchter und neuer Autos, als traditionelle Autohändler.</div>
              <div className={classes.text}><span className={classes.textsmallheading}>Transparenz:</span>Online-Automärkte bieten oft detaillierte Informationen über jedes Auto, einschließlich Fotos, Spezifikationen und Historienberichte, die es Benutzern ermöglichen, eine informierte Entscheidung über den Kauf zu treffen.</div>
              <div className={classes.text}><span className={classes.textsmallheading}>Verkauf und Kauf von Autos:</span>Benutzer können ihr Auto auf einem Online-Automarkt verkaufen oder ein Auto kaufen, indem sie einfach eine Anzeige erstellen oder durch Anzeigen blättern.</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
