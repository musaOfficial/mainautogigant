import { useState } from "react";
import classes from "./Kaufvertrag.module.css";
import Link from "next/link";
import BackHome from "./../public/home.svg";
import Check from "./../public/hackerl.svg";

function KFZKaufvertrag() {
  // KÄUFER
  const [purchaserFirstName, setPurchaserFirstName] = useState();
  const [purchaserLastName, setPurchaserLastName] = useState();
  const [purchaserStrasse, setPurchaserStrasse] = useState();
  const [purchaserHausnummer, setPurchaserHausnummer] = useState();
  const [purchaserPLZ, setPurchaserPLZ] = useState();
  const [purchaserOrt, setPurchaserOrt] = useState();
  const [purchaserLand, setPurchaserLand] = useState();
  const [purchaserSteuernummer, setPurchaserSteuernummer] = useState();
  const [purchaserTelefonnummer, setPurchaserTelefonnummer] = useState();

  // VERKÄUFER
  const [sellerFirstName, setSellerFirstName] = useState();
  const [sellerLastName, setSellerLastName] = useState();
  const [sellerStrasse, setSellerStrasse] = useState();
  const [sellerHausnummer, setSellerHausnummer] = useState();
  const [sellerPLZ, setSellerPLZ] = useState();
  const [sellerOrt, setSellerOrt] = useState();
  const [sellerLand, setSellerLand] = useState();
  const [sellerSteuernummer, setSellerSteuernummer] = useState();
  const [sellerTelefonnummer, setSellerTelefonnummer] = useState();

  // KRAFTFAHRZEUG
  const [brandName, setBrandName] = useState();
  const [modelName, setModelName] = useState();
  const [yearOfManifacture, setYearOfManifacture] = useState();
  // Fahrgestellnummer
  const [chassisNumber, setChassisNumber] = useState();
  // Motornummer
  const [engineNumber, setEngineNumber] = useState();
  const [purchaserDate, setPurchaserDate] = useState();
  const [sellerDate, setSellerDate] = useState();

  const [anzahlVorbesitzer, setAnzahlVorbesitzer] = useState();
  const [erstzulassung, setErstzulassung] = useState();
  const [kilometerStand, setKilometerStand] = useState();

  // PREIS
  const [verkaufspreis, setVerkaufspreis] = useState();
  const [preis1, setPreis1] = useState(false);
  const [preis1Datum, setPreis1Datum] = useState();
  const [preis2, setPreis2] = useState(false);
  const [preis3, setPreis3] = useState(false);
  const [preis4, setPreis4] = useState(false);
  const [preis5, setPreis5] = useState(false);
  const [preis6, setPreis6] = useState(false);
  const [preis7, setPreis7] = useState(false);

  // ZUSICHERUNGEN DES VERKÄUFERS
  const [zusicherung1, setZusicherung1] = useState(false);
  const [zusicherung2, setZusicherung2] = useState(false);
  const [zusicherung3, setZusicherung3] = useState(false);
  const [zusicherung4, setZusicherung4] = useState(false);
  const [zusicherung5, setZusicherung5] = useState(false);
  const [zusicherung6, setZusicherung6] = useState(false);

  // ÜBERGABE
  const [uebergabeDatum, setUebergabeDatum] = useState();
  const [anzKfzSchluessel, setAnzKfzSchluessel] = useState();
  const [verbleibendesZubehoer, setVerbleibendesZubehoer] = useState();

  // MIT FAHRZEUG ÜBERGEBEN
  const [mit1, setMit1] = useState(false);
  const [mit2, setMit2] = useState(false);
  const [mit3, setMit3] = useState(false);
  const [mit4, setMit4] = useState(false);
  const [mit4Datum, setMit4Datum] = useState();

  // ZAHLUNGSBEDINGUNGEN
  const [zahlungsbedingungen1, setZahlungsbedingungen1] = useState(false);
  const [zahlungsbedingungen1Anzahlung, setZahlungsbedingungen1Anzahlung] =
    useState();
  const [zahlungsbedingungen1Restzahlung, setZahlungsbedingungen1Restzahlung] =
    useState();
  const [
    zahlungsbedingungen1Faelligkeitsdatum,
    setZahlungsbedingungen1Faelligkeitsdatum,
  ] = useState();

  const [zahlungsbedingungen2, setZahlungsbedingungen2] = useState(false);
  const [zahlungsbedingungen2Anzahlung, setZahlungsbedingungen2Anzahlung] =
    useState();
  const [
    zahlungsbedingungen2Faelligkeitsdatum,
    setZahlungsbedingungen2Faelligkeitsdatum,
  ] = useState();
  const [zahlungsbedingungen2Raten, setZahlungsbedingungen2Raten] = useState();
  const [
    zahlungsbedingungen2FaelligJeweils,
    setZahlungsbedingungen2FaelligJeweils,
  ] = useState();
  const [zahlungsbedingungen2LetzteRate, setZahlungsbedingungen2LetzteRate] =
    useState();

  // ZAHLUNGSSICHERUNG
  const [zahlungssicherung1, setZahlungssicherung1] = useState();

  // RÜCKTRITT UND STORNO
  const [storno, setStorno] = useState(false);
  const [storno1, setStorno1] = useState();
  const [storno2, setStorno2] = useState();

  // GEWÄHRLEISTUNG, LEISTUNGSBESCHREIBUNG
  const [gewaehrleistung, setGewaehrleistung] = useState(false);

  // ANMERKUNGEN
  const [anmerkungen, setAnmerkungen] = useState();

  const handleSubmit = () => {};

  return (
    <div className={classes.container}>
      <div
        className={`${classes.contentcontainer} relative w-10/12 lg:w-full max-w-ag-container md:!w-full mx-auto flex flex-col lg:flex-col bg-white p-6`}
      >
        <div className={`${classes.top_row}`}>
          <span className={classes.leftrow}>
            <Link href={"/"}>
              <BackHome className={classes.backhome} />
            </Link>
          </span>
        </div>
        <div className="flex w-full lg:flex-col">
          <div className={classes.content}>
            <form onSubmit={handleSubmit}>
              <h1 className={classes.heading}>KFZ Kaufvertrag</h1>
              <p className={classes.desc}>
                Einfach Kfz Kaufvertrag ausfüllen und kostenlos herunterladen,
                <br /> und schon haben Sie das notwendige Dokument für die
                Anmeldung des Fahrzeuges.
              </p>
              <h2 className={classes.sectionheading}>Käufer</h2>
              <div className={classes.row}>
                <input
                  className={classes.first}
                  placeholder={"Vorname"}
                  onChange={(e) => setPurchaserFirstName(e.target.value)}
                ></input>
                <input
                  className={classes.second}
                  placeholder={"Nachname"}
                  onChange={(e) => setPurchaserLastName(e.target.value)}
                ></input>
              </div>
              <div className={classes.row}>
                <input
                  className={classes.first}
                  placeholder={"Strasse"}
                  onChange={(e) => setPurchaserStrasse(e.target.value)}
                ></input>
                <input
                  className={classes.second}
                  placeholder={"Hausnummer"}
                  onChange={(e) => setPurchaserHausnummer(e.target.value)}
                ></input>
              </div>
              <div className={classes.row}>
                <input
                  className={classes.first}
                  placeholder={"PLZ"}
                  onChange={(e) => setPurchaserPLZ(e.target.value)}
                ></input>
                <input
                  className={classes.second}
                  placeholder={"Ort"}
                  onChange={(e) => setPurchaserOrt(e.target.value)}
                ></input>
              </div>
              <div className={classes.row}>
                <input
                  className={classes.first}
                  placeholder={"Land"}
                  onChange={(e) => setPurchaserLand(e.target.value)}
                ></input>
                <input
                  className={classes.second}
                  placeholder={"Steuernummer"}
                  onChange={(e) => setPurchaserSteuernummer(e.target.value)}
                ></input>
              </div>
              <div className={classes.row}>
                <input
                  className={classes.first}
                  placeholder={"Telefonnummer"}
                  onChange={(e) => setPurchaserTelefonnummer(e.target.value)}
                ></input>
                <div className={classes.second}></div>
              </div>
              <h2 className={classes.sectionheading}>Verkäufer</h2>
              <div className={classes.row}>
                <input
                  className={classes.first}
                  placeholder={"Vorname"}
                  onChange={(e) => setSellerFirstName(e.target.value)}
                ></input>
                <input
                  className={classes.second}
                  placeholder={"Nachname"}
                  onChange={(e) => setSellerLastName(e.target.value)}
                ></input>
              </div>
              <div className={classes.row}>
                <input
                  className={classes.first}
                  placeholder={"Strasse"}
                  onChange={(e) => setSellerStrasse(e.target.value)}
                ></input>
                <input
                  className={classes.second}
                  placeholder={"Hausnummer"}
                  onChange={(e) => setSellerHausnummer(e.target.value)}
                ></input>
              </div>
              <div className={classes.row}>
                <input
                  className={classes.first}
                  placeholder={"PLZ"}
                  onChange={(e) => setSellerPLZ(e.target.value)}
                ></input>
                <input
                  className={classes.second}
                  placeholder={"Ort"}
                  onChange={(e) => setSellerOrt(e.target.value)}
                ></input>
              </div>
              <div className={classes.row}>
                <input
                  className={classes.first}
                  placeholder={"Land"}
                  onChange={(e) => setSellerLand(e.target.value)}
                ></input>
                <input
                  className={classes.second}
                  placeholder={"Steuernummer"}
                  onChange={(e) => setSellerSteuernummer(e.target.value)}
                ></input>
              </div>
              <div className={classes.row}>
                <input
                  className={classes.first}
                  placeholder={"Telefonnummer"}
                  onChange={(e) => setSellerTelefonnummer(e.target.value)}
                ></input>
                <div className={classes.second}></div>
              </div>
              <h2 className={classes.sectionheading}>Fahrzeug</h2>
              <input
                className={classes.inputfields}
                placeholder={"Marke"}
                onChange={(e) => setBrandName(e.target.value)}
              />
              <input
                className={classes.inputfields}
                placeholder={"Modell"}
                onChange={(e) => setModelName(e.target.value)}
              />
              <input
                className={classes.inputfields}
                placeholder={"Baujahr"}
                onChange={(e) => setYearOfManifacture(e.target.value)}
              />
              <input
                className={classes.inputfields}
                placeholder={"Fahrzeugidentifikationsnummer"}
                onChange={(e) => setChassisNumber(e.target.value)}
              />
              <input
                className={classes.inputfields}
                placeholder={"Motonummer"}
                onChange={(e) => setEngineNumber(e.target.value)}
              />
              <input
                className={classes.inputfields}
                placeholder={"Zahl der Vorbesitzer"}
                onChange={(e) => setAnzahlVorbesitzer(e.target.value)}
              />
              <input
                className={classes.inputfields}
                placeholder={"Erstzulassung"}
                onChange={(e) => setErstzulassung(e.target.value)}
              />
              <input
                className={classes.inputfields}
                placeholder={"Km-Stand"}
                onChange={(e) => setKilometerStand(e.target.value)}
              />
              <h2 className={classes.sectionheading}>Verkaufspreis</h2>
              <input
                className={classes.inputfields}
                placeholder={"Verkaufspreis in €"}
                type="number"
                onChange={(e) => setVerkaufspreis(e.target.value)}
              ></input>
              <div className="flex text-13 items-center -mt-2 mb-3">
                <div
                  className={classes.weiss}
                  onClick={() => setPreis1((d) => !d)}
                >
                  {preis1 == true && <Check className={classes.blackcheck} />}
                </div>
                <label>
                  Kaufüberprüfung wurde am{" "}
                  <input
                    type={"text"}
                    className={classes.middleinput}
                    disabled={preis1 == false}
                    onChange={(e) => setPreis1Datum(e.target.value)}
                  />{" "}
                  vorgenommen <sup className={classes.sup}>2)</sup>
                </label>
              </div>
              <div className="flex text-13  -mt-2 mb-3">
                <div
                  className={classes.weiss}
                  onClick={() => setPreis2((d) => !d)}
                >
                  {preis2 == true && <Check className={classes.blackcheck} />}
                </div>
                <label>
                  Der Kaufvertrag kommt nur unter der Bedingung einer positiven
                  Kaufüberprüfung zustande.{" "}
                  <sup className={classes.sup}>3)</sup>
                </label>
              </div>
              <div className="flex text-13 items-center -mt-2 mb-3">
                <div
                  className={classes.weiss}
                  onClick={() => setPreis3((d) => !d)}
                >
                  {preis3 == true && <Check className={classes.blackcheck} />}
                </div>
                <label>
                  Die NoVA (Normverbrauchsabgabe) wurde bereits entrichtet.{" "}
                  <sup className={classes.sup}>4)</sup>
                </label>
              </div>
              <div className="flex text-13 items-center -mt-2 mb-3">
                <div
                  className={classes.weiss}
                  onClick={() => setPreis4((d) => !d)}
                >
                  {preis4 == true && <Check className={classes.blackcheck} />}
                </div>
                <label>
                  Barzahlung bzw. Überweisung vor Übernahme{" "}
                  <sup className={classes.sup}>5, 14)</sup>
                </label>
              </div>
              <div className="flex text-13 items-center -mt-2 mb-3">
                <div
                  className={classes.weiss}
                  onClick={() => setPreis5((d) => !d)}
                >
                  {preis5 == true && <Check className={classes.blackcheck} />}
                </div>
                <label>
                  Ratenzahlung <sup className={classes.sup}>5, 14)</sup>
                </label>
              </div>
              <div className="flex text-13 -mt-2 mb-3">
                <div
                  className={classes.weiss}
                  onClick={() => setPreis6((d) => !d)}
                >
                  {preis6 == true && <Check className={classes.blackcheck} />}
                </div>
                <label>
                  <span className="font-bold text-13">
                    Die Gewährleistung, also die Haftung für Mängel, ist{" "}
                    <input
                      type={"text"}
                      disabled={preis6 == false}
                      className={`${classes.middleinputleft}`}
                    />{" "}
                    ausgeschlossen
                  </span>{" "}
                  (evtl. "NICHT" einfügen)<sup className={classes.sup}>6)</sup>
                </label>
              </div>
              <div className="flex text-13 -mt-2 mb-3">
                <div
                  className={classes.weiss}
                  onClick={() => setPreis7((d) => !d)}
                >
                  {preis7 == true && <Check className={classes.blackcheck} />}
                </div>
                <label>
                  <span className="font-bold text-13">
                    Derzeit bestehende Ansprüche aus Gewährleistung und/ oder
                    Garantie werden
                    <input
                      type={"text"}
                      disabled={preis7 == false}
                      className={`${classes.middleinputleft}`}
                    />{" "}
                    auf den Käufer übertragen
                  </span>{" "}
                  (evtl. "NICHT" einfügen)<sup className={classes.sup}>7)</sup>
                </label>
              </div>
              <div className={classes.row}>
                <input
                  className={classes.a}
                  placeholder={"Ort, Datum"}
                  onChange={(e) => setPurchaserDate(e.target.value)}
                ></input>
                <input
                  className={classes.b}
                  placeholder={"Unterschrift Käufer"}
                  readOnly={true}
                ></input>
              </div>
              <div className={classes.row}>
                <input
                  className={classes.a}
                  placeholder={"Ort, Datum"}
                  onChange={(e) => setSellerDate(e.target.value)}
                ></input>
                <input
                  className={classes.b}
                  placeholder={"Unterschrift Verkäufer"}
                  readOnly={true}
                ></input>
              </div>
              <h2 className={classes.sectionheading}>
                Zusicherungen des Verkäufers
              </h2>
              <div className="flex text-13 items-center -mt-2 mb-3">
                <div
                  className={classes.weiss}
                  onClick={() => setZusicherung1((d) => !d)}
                >
                  {zusicherung1 == true && (
                    <Check className={classes.blackcheck} />
                  )}
                </div>
                <label>
                  Das Fahrzeug ist mein alleiniges und{" "}
                  <span className="font-bold">unbelastetes Eigentum</span>{" "}
                  <sup className={classes.sup}>8)</sup>
                </label>
              </div>
              <div className="flex text-13 items-center -mt-2 mb-3">
                <div
                  className={classes.weiss}
                  onClick={() => setZusicherung2((d) => !d)}
                >
                  {zusicherung2 == true && (
                    <Check className={classes.blackcheck} />
                  )}
                </div>
                <label>
                  Das Fahrzeug ist{" "}
                  <span className="font-bold">
                    verkehrs- und betriebssicher
                  </span>{" "}
                  <sup className={classes.sup}>9)</sup>
                </label>
              </div>
              <div className="flex text-13 items-center -mt-2 mb-3">
                <div
                  className={classes.weiss}
                  onClick={() => setZusicherung3((d) => !d)}
                >
                  {zusicherung3 == true && (
                    <Check className={classes.blackcheck} />
                  )}
                </div>
                <label>
                  Ich habe alle fälligen{" "}
                  <span className="font-bold">
                    Steuer- und Versicherungsbeträge
                  </span>{" "}
                  entrichtet. <sup className={classes.sup}></sup>
                </label>
              </div>
              <div className="flex text-13 items-center -mt-2 mb-3">
                <div
                  className={classes.weiss}
                  onClick={() => setZusicherung4((d) => !d)}
                >
                  {zusicherung4 == true && (
                    <Check className={classes.blackcheck} />
                  )}
                </div>
                <label>
                  Alle <span className="font-bold">Änderungen</span> am Fahrzeug
                  sind zulässig bzw. genehmigt.
                  <sup className={classes.sup}>10)</sup>
                </label>
              </div>
              <div className="flex text-13 items-center -mt-2 mb-3">
                <div
                  className={classes.weiss}
                  onClick={() => setZusicherung5((d) => !d)}
                >
                  {zusicherung5 == true && (
                    <Check className={classes.blackcheck} />
                  )}
                </div>
                <label>
                  Ich garantiere den oben genannten{" "}
                  <span className="font-bold">Kilometerstand</span>
                  <sup className={classes.sup}>11)</sup>
                </label>
              </div>
              <div className="flex text-13 items-center -mt-2 mb-3">
                <div
                  className={classes.weiss}
                  onClick={() => setZusicherung6((d) => !d)}
                >
                  {zusicherung6 == true && (
                    <Check className={classes.blackcheck} />
                  )}
                </div>
                <label>
                  Es sind <span className="font-bold">keine Vorschäden</span>{" "}
                  vorhanden.<sup className={classes.sup}>12)</sup>
                </label>
              </div>

              <h2 className={classes.sectionheading}>Übergabe</h2>
              <div className={classes.row}>
                <input
                  className={classes.first}
                  placeholder={"Übergabedatum"}
                  onChange={(e) => setUebergabeDatum(e.target.value)}
                ></input>
                <input
                  className={classes.second}
                  placeholder={"Anzahl der Kfz-Schlüssel"}
                  onChange={(e) => setAnzKfzSchluessel(e.target.value)}
                ></input>
              </div>
              <textarea
                className={classes.textarea}
                placeholder="Anmerkungen"
                onChange={(e) => setVerbleibendesZubehoer(e.target.value)}
              ></textarea>
              <h2 className={classes.sectionheading}>Mit Fahrzeug übergeben</h2>
              <div className="flex text-13 items-center -mt-2 mb-3">
                <div
                  className={classes.weiss}
                  onClick={() => setMit1((d) => !d)}
                >
                  {mit1 == true && <Check className={classes.blackcheck} />}
                </div>
                <label>
                  Letzter <span className="font-bold">Prüfbericht</span> nach §
                  57a KFG, gültige Plakette, aufgeklebt
                </label>
              </div>
              <div className="flex text-13 items-center -mt-2 mb-3">
                <div
                  className={classes.weiss}
                  onClick={() => setMit2((d) => !d)}
                >
                  {mit2 == true && <Check className={classes.blackcheck} />}
                </div>
                <label>
                  <span className="font-bold">Serviceheft</span>
                </label>
              </div>
              <div className="flex text-13 items-center -mt-2 mb-3">
                <div
                  className={classes.weiss}
                  onClick={() => setMit3((d) => !d)}
                >
                  {mit3 == true && <Check className={classes.blackcheck} />}
                </div>
                <label>
                  <span className="font-bold">Genehmigungsnachweis</span> (z.B.
                  Typenschein)<sup className={classes.sup}>13)</sup>
                </label>
              </div>
              <div className="flex text-13 items-center -mt-2 mb-3">
                <div
                  className={classes.weiss}
                  onClick={() => setMit4((d) => !d)}
                >
                  {mit4 == true && <Check className={classes.blackcheck} />}
                </div>
                <label>
                  Autobahn-Vignette, gültig bis{" "}
                  <input
                    type={"text"}
                    disabled={mit4 == false}
                    className={classes.middleinput}
                    onChange={(e) => setMit4Datum(e.target.value)}
                  />
                </label>
              </div>
              <h2 className={classes.sectionheading}>
                Zahlungsbedingungen<sup className={classes.sup}>15)</sup>
              </h2>
              <div className="flex text-13 -mt-2 mb-3">
                <div
                  className={`${classes.weiss} mt-1.5`}
                  onClick={() => setZahlungsbedingungen1((d) => !d)}
                >
                  {zahlungsbedingungen1 == true && (
                    <Check className={classes.blackcheck} />
                  )}
                </div>
                <label className="flex w-full flex-col">
                    <label htmlFor="1a">
                    <div>
                        <span className="relative flex items-center">
                        <span className={classes.inputlabel}>Anzahlung € </span>
                        <input
                        type={"text"}
                        disabled={zahlungsbedingungen1 == false}
                        className={classes.middleinputbottom}
                        id="1a"
                        onChange={(e) =>
                            setZahlungsbedingungen1Anzahlung(e.target.value)
                        }
                        />
                        </span>
                    </div>
                    </label>
                    <label htmlFor="1b">
                    <div>
                        <span className="relative flex items-center">
                        <span className={classes.inputlabel}>Restzahlung € </span>
                        <input
                        type={"text"}
                        disabled={zahlungsbedingungen1 == false}
                        className={classes.middleinputbottom}
                        id="1b"
                        onChange={(e) =>
                            setZahlungsbedingungen1Restzahlung(e.target.value)
                        }
                        />
                        </span>
                    </div>
                    </label>
                    <label htmlFor="1c">
                    <div>
                        <span className="relative flex items-center">
                        <span className={classes.inputlabel}>Fällig am </span>
                        <input
                        type={"date"}
                        disabled={zahlungsbedingungen1 == false}
                        id="1c"
                        className={classes.middleinputbottom}
                        onChange={(e) =>
                            setZahlungsbedingungen1Faelligkeitsdatum(e.target.value)
                        }
                        />
                        </span>
                    </div>
                    </label>

                </label>
              </div>
              <div className="flex text-13 -mt-2 mb-3">
                <div
                  className={`${classes.weiss} mt-1.5`}
                  onClick={() => setZahlungsbedingungen2((d) => !d)}
                >
                  {zahlungsbedingungen2 == true && (
                    <Check className={classes.blackcheck} />
                  )}
                </div>
                <label className="flex w-full flex-col">
                    <label htmlFor="1">
                        <div>
                        <span className="relative flex items-center">
                        <span className={classes.inputlabel}>Anzahlung € </span>
                        <input
                        type={"text"}
                        disabled={zahlungsbedingungen1 == false}
                        className={classes.middleinputbottom}
                        id="1"
                        onChange={(e) =>
                            setZahlungsbedingungen2Anzahlung(e.target.value)
                        }
                        />
                        </span>
                        </div>
                    </label>
                    <label htmlFor="2">
                    <div>
                        <span className="relative flex items-center">
                        <span className={classes.inputlabel}>Fällig am</span>
                        <input
                        type={"date"}
                        disabled={zahlungsbedingungen1 == false}
                        className={classes.middleinputbottom}
                        id="2"
                        onChange={(e) =>
                            setZahlungsbedingungen2Faelligkeitsdatum(e.target.value)
                        }
                        />
                        </span>
                    </div>
                    </label>
                    <label htmlFor="3">
                    <div>
                        <span className="relative flex items-center">
                        <span className={classes.inputlabel}>Raten zu je €</span>
                        <input
                        type={"text"}
                        disabled={zahlungsbedingungen1 == false}
                        className={classes.middleinputbottom}
                        id="3"
                        onChange={(e) =>
                            setZahlungsbedingungen2Raten(e.target.value)
                        }
                        />
                        </span>
                    </div>
                    </label>
                    <label className="4">
                    <div>
                        <span className="relative flex items-center">
                        <span className={classes.inputlabel}>Fällig jeweils am</span>
                        <input
                        type={"text"}
                        disabled={zahlungsbedingungen1 == false}
                        className={classes.middleinputbottom}
                        id="4"
                        onChange={(e) =>
                            setZahlungsbedingungen2FaelligJeweils(e.target.value)
                        }
                        />
                        </span>
                    </div>
                    </label>
                  
                </label>
              </div>
              <h2 className={classes.sectionheading}>
                Zahlungssicherung<sup className={classes.sup}>16)</sup>
              </h2>
              <div className="flex text-13 -mt-2 mb-3">
                <div
                  className={classes.weiss}
                  onClick={() => setZahlungssicherung1((d) => !d)}
                >
                  {zahlungssicherung1 == true && (
                    <Check className={classes.blackcheck} />
                  )}
                </div>
                <label>
                  <span className="font-bold">Genehmigungsnachweis</span> (z.B.
                  Typenschein) bleibt bis zur Bezahlung des gesamten Kaufpreises
                  beim Verkäufer
                </label>
              </div>
              <h2 className={classes.sectionheading}>
                Rücktritt und Storno<sup className={classes.sup}>17)</sup>
              </h2>
              <div className="flex text-13 -mt-2 mb-3">
                <div
                  className={classes.weiss}
                  onClick={() => setStorno((d) => !d)}
                >
                  {storno == true && <Check className={classes.blackcheck} />}
                </div>
                <label>
                  Erfüllt ein Vertragspartner ohne wichtigen Grund seine
                  Verpflichtungen<br></br>bis zum{" "}
                  <input
                    type={"text"}
                    disabled={storno == false}
                    className={classes.middleinputleft}
                    onChange={(e) => setStorno1(e.target.value)}
                  />{" "}
                  nicht, so kann der andere <strong>anstelle</strong> der
                  Erfüllung und/oder eines Schadenersatzes eine{" "}
                  <strong>Stornogebühr</strong>
                  <br></br>von{" "}
                  <input
                    type={"text"}
                    className={classes.middleinputleft}
                    disabled={storno == false}
                    onChange={(e) => setStorno2(e.target.value)}
                  />{" "}
                  % des Kaufpreises verlangen.^
                </label>
              </div>
              <h2 className={classes.sectionheading}>
                Gewährleistung, Leistungsbeschreibung
                <sup className={classes.sup}>18)</sup>
              </h2>
              <div className="flex text-13 -mt-2 mb-3">
                <div
                  className={classes.weiss}
                  onClick={() => setGewaehrleistung((d) => !d)}
                >
                  {gewaehrleistung == true && (
                    <Check className={classes.blackcheck} />
                  )}
                </div>
                <label>
                  Der Verkäufer schränkt seine Gewährleistungspflichten auf
                  Eigenschaften gemäß einer Leistungsbeschreibung (s. unten)
                  ein.
                </label>
              </div>
              <h2 className={classes.sectionheading}>Anmerkungen</h2>
              <div className="text-13">
                An dieser Stelle können auch sonstige wichtige Anmerkungen
                formuliert werden.
              </div>
              <textarea
                className={classes.textarea}
                rows={6}
                placeholder="Anmerkungen"
                onChange={(e) => setAnmerkungen(e.target.value)}
              ></textarea>
              <button type="submit" className={classes.generatekaufvertragbtn}>
                Kaufvertrag generieren
              </button>
            </form>
          </div>
          <div className={classes.secondcontent}>
            <div className={classes.img}>
              <div
                className={`relative w-full lg:w-auto lg:ml-0 lg:mt-4 ml-3 ${classes.border} `}
              >
                <p
                  className={`px-2 table text-blackn  bg-theme-yellow-2 font-bold ${classes.text}`}
                >
                  Mehr
                </p>
                <p
                  className={`px-2 table mt-1 text-black  bg-theme-yellow-2 font-bold ${classes.text}`}
                >
                  als nur eine
                </p>
                <p
                  className={`px-2 table mt-1 text-black  bg-theme-yellow-2 font-bold ${classes.text}`}
                >
                  Auto Suchmaschine.
                </p>
              </div>
            </div>
            <p className={classes.scdesc}>
              Im gebrauchten Zustand, wie besichtigt und Probe gefahren,
              <br />
              ohne jede Gewährleistung.
            </p>
            <p className={classes.scdesc}>
              Der Kaufpreis wurde bei der Übergabe des Wagens bezahlt
              <br />
              und der Empfang hiermit bestätigt.
            </p>
            <p className={classes.scdesc}>
              Für die Richtigkeit und Echtheit der Motor- und Fahrgestellnummer
              <br /> sowie der Fahrzeugpapiere haftet der Verkäufer.
            </p>
            <p className={classes.scdesc}>
              Er bestätigt, dass das Fahrzeug sein alleiniges Eigentum ist und
              von
              <br />
              keiner Seite irgendwelche Forderungen an denselben bestehen.
            </p>
            <button className={classes.downloadtemplate}>
              Kaufvertrag Vorlage herunterladen
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default KFZKaufvertrag;
