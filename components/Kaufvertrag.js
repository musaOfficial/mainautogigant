import { useState } from "react";
import classes from "./Kaufvertrag.module.css";
import Link from "next/link";
import BackHome from "./../public/home.svg";
import Check from "./../public/hackerl.svg";
import FileIcon from "./../public/file.svg";
import Expand from "./../public/expand.svg";
import TopRow from "./ui/TopRow";
import ControlledCheckbox from "./ui/ControlledCheckbox";
import Sect from "./ui/Sect";
import Info from "./../public/info.svg";
import Download from "./../public/download.svg";
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

function KFZKaufvertrag() {

  const [width, height] = useDeviceSize();
  // KÄUFER
  const [purchaserFirstName, setPurchaserFirstName] = useState();
  const [purchaserLastName, setPurchaserLastName] = useState();
  const [purchaserStrasse, setPurchaserStrasse] = useState();
  const [purchaserHausnummer, setPurchaserHausnummer] = useState();
  const [purchaserPLZ, setPurchaserPLZ] = useState();
  const [purchaserOrt, setPurchaserOrt] = useState();
  const [purchaserLand, setPurchaserLand] = useState();
  const [purchaserPersonalausweis, setPurchaserPersonalausweis] = useState();
  const [purchaserTelefonnummer, setPurchaserTelefonnummer] = useState();

  // VERKÄUFER
  const [sellerFirstName, setSellerFirstName] = useState();
  const [sellerLastName, setSellerLastName] = useState();
  const [sellerStrasse, setSellerStrasse] = useState();
  const [sellerHausnummer, setSellerHausnummer] = useState();
  const [sellerPLZ, setSellerPLZ] = useState();
  const [sellerOrt, setSellerOrt] = useState();
  const [sellerLand, setSellerLand] = useState();
  const [sellerPersonalausweis, setSellerPersonalausweis] = useState();
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

  const [erstzulassung, setErstzulassung] = useState();
  const [kilometerStand, setKilometerStand] = useState();
  const [amtlichesKennzeichen, setAmtlichesKennzeichen] = useState();
  const [gesamtpreis, setGesamtpreis] = useState();
  const [gesamtpreisInWorten, setGesamtpreisInWorten] = useState();
  const [
    nummerDerZulassungsbescheinigung,
    setNummerDerZulassungsbescheinigung,
  ] = useState();
  const [naechsteHauptuntersuchung, setNaechsteHauptuntersuchung] = useState();

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

  // Garantien des Verkäufers
  const [unfallfrei, setUnfallfrei] = useState();
  const [keineSchaden, setKeineSchaden] = useState();
  const [nurFolgenderUnfall, setNurFolgenderUnfall] = useState();
  const [keinImportfahrzeug, setKeinImportfahrzeug] = useState();
  const [einImportfahrzeug, setEinImportfahrzeug] = useState();
  const [ausgestattetOriginalmotor, setAusgestattetOriginalmotor] = useState();
  const [ausgestattetAustausch, setAusgestattetAustausch] = useState();
  const [nachfolgendeLaufleistung, setNachfolgendeLaufleistung] = useState();

  const [laufleistung, setLaufleistung] = useState();

  const [abgeleseneKilometerstand, setAbgeleseneKilometerstand] = useState();
  const [anzahlVorbesitzer, setAnzahlVorbesitzer] = useState();
  const [anzahlVorbesitzerChecked, setAnzahlVorbesitzerChecked] = useState();
  const [unfalltext, setUnfalltext] = useState();

  // Checkboxen
  const [
    zulassungsbescheinigungTeil1Vorhanden,
    setZulassungsBescheinigungTeil1Vorhanden,
  ] = useState();
  const [
    zulassungsbescheinigungTeil2Vorhanden,
    setZulassungsBescheinigungTeil2Vorhanden,
  ] = useState();
  const [schluesselAnzahlVorhanden, setSchluesselAnzahlVorhanden] = useState();
  const [schluesselAnzahl, setSchluesselAnzahl] = useState();
  const [huBescheinigung, setHuBescheinigung] = useState();
  const [stilllegungsbescheinigung, setStilllegungsbescheinigung] = useState();
  const [amtlichesKennzeichenVorhanden, setAmtlichesKennzeichenVorhanden] =
    useState();
  const [cocBescheinigung, setCocBescheinigung] = useState();

  // Fahrzeugübergabe
  const [EURO, setEURO] = useState();
  const [ort, setOrt] = useState();
  const [datum, setDatum] = useState();
  const [uhrzeit, setUhrzeit] = useState();
  const [sellerSignature, setSellerSignature] = useState();
  const [purchaserSignature, setPurchaserSignature] = useState();

  const handleSubmit = () => {};

  return (
    <div className={classes.container}>
      <div
        className={`${classes.contentcontainer} relative w-10/12 lg:w-full max-w-ag-container md:!w-full mx-auto flex flex-col lg:flex-col bg-white p-6`}
      >
        <TopRow />
        <div className={classes.helprow}>
          <div className={classes.left}>
            <div
              className={`${classes.sectionheader} ${classes.sectionheaderopen}`}
            >
              <div className={classes.leftpart}>
                <FileIcon className={classes.fileicon} />
                <span className={classes.filetext}>KFZ Kaufvertrag</span>
              </div>
              <Expand className={`${classes.expandopen} ${classes.rotated}`} />
            </div>
            <div className={classes.sectionheader}>
              <div className={classes.leftpart}>
                <FileIcon className={classes.fileicon} />
                <span className={classes.filetext}>Unfallbericht</span>
              </div>
              <Expand />
            </div>
            <div className={classes.sectionheader}>
              <div className={classes.leftpart}>
                <FileIcon className={classes.fileicon} />
                <span className={classes.filetext}>Nova Rechner</span>
              </div>
              <Expand />
            </div>
            <div className={classes.sectionheader}>
              <div className={classes.leftpart}>
                <FileIcon className={classes.fileicon} />
                <span className={classes.filetext}>Digitale Vignette</span>
              </div>
              <Expand />
            </div>
            <div className={classes.sectionheader}>
              <div className={classes.leftpart}>
                <FileIcon className={classes.fileicon} />
                <span className={classes.filetext}>Fahrschulen</span>
              </div>
              <Expand />
            </div>
            <div className={classes.sectionheader}>
              <div className={classes.leftpart}>
                <FileIcon className={classes.fileicon} />
                <span className={classes.filetext}>Automarken</span>
              </div>
              <Expand />
            </div>
          </div>
          <div className="flex w-full flex-col-reverse">
            <div className={classes.secondcontent}>
              <div className={classes.abovedownloadtemplate}>
                <h1 className={classes.secondcontentheading}>
                  Kfz-Kaufvertrag
                </h1>
                <h2 className={classes.secondcontentsubheading}>
                  Für ein gebrauchtes Fahrzeug von privat.
                </h2>
              </div>
              <button className={classes.downloadtemplate}>
                {/* Kaufvertrag Vorlage herunterladen */}
                <div className={classes.downloadleft}>
                  Vorlage für einen Kfz-Kaufvertrag zum Herunterladen:
                  <span className={classes.downloadtext}>
                    {" "}
                    Wir bieten Ihnen hier eine kostenlose Vorlage für einen
                    Kfz-Kaufvertrag zum Download an. Dieser Vertrag ist speziell
                    auf den Kauf eines Fahrzeugs zugeschnitten und enthält alle
                    notwendigen Angaben und Vereinbarungen. Bitte beachten Sie,
                    dass dieser Vertrag als allgemeine Vorlage gedacht ist und
                    gegebenenfalls an Ihre individuellen Anforderungen und
                    Bedürfnisse angepasst werden sollte.
                  </span>
                </div>
                <div className={classes.download}>
                  <Download className={classes.downloadicon} />
                  <div className={classes.downloadbluetext}>
                    Kaufvertrag Vorlage downloaden
                  </div>
                </div>
              </button>
              <div className={classes.recommend}>
                <div className="flex items-center text-13 mt-2 mb-1">
                  <Info className={classes.icon} />
                  <div className={classes.blueboldtext}>Empfehlung:</div>
                </div>
                <div className={classes.blue}>
                  <div>
                    Verwenden Sie einen Kfz-Kaufvertrag und achten Sie darauf:
                  </div>
                  Jede Partei erhält eine identische Ausfertigung. Schriftliche
                  Festlegung aller Absprachen und Vereinbarungen im Kaufvertrag.
                  Unterschreiben Sie erst, wenn alle Fragen einvernehmlich
                  geklärt sind.
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={classes.content}>
          <form onSubmit={handleSubmit}>
            <h1 className={classes.heading}>KFZ Kaufvertrag</h1>
            <p className={classes.desc}>
              Einfach Kfz Kaufvertrag ausfüllen und kostenlos herunterladen, und
              schon haben Sie das notwendige Dokument für die Anmeldung des
              Fahrzeuges.
            </p>
            <div className={classes.sellerpurchaserrow}>
              <div>
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
                    placeholder={"Telefonnummer"}
                    onChange={(e) => setPurchaserTelefonnummer(e.target.value)}
                  ></input>
                </div>
                <div className={classes.row}>
                  <input
                    className={classes.second}
                    placeholder={
                      "Personalausweis- / Reisepassnummer und ausstellende Behörde"
                    }
                    onChange={(e) =>
                      setPurchaserPersonalausweis(e.target.value)
                    }
                  ></input>
                </div>
              </div>
              <div className={classes.sellercontainer}>
                <h2 className={classes.sectionheading}>
                  Verkäufer (Privatverkauf)
                </h2>
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
                    placeholder={"Telefonnummer"}
                    onChange={(e) => setSellerTelefonnummer(e.target.value)}
                  ></input>
                </div>
                <div className={classes.row}>
                  <input
                    className={classes.second}
                    placeholder={
                      "Personalausweis- / Reisepassnummer und ausstellende Behörde"
                    }
                    onChange={(e) => setSellerPersonalausweis(e.target.value)}
                  ></input>
                </div>
              </div>
            </div>
            <h2 className={classes.sectionheading}>Fahrzeug</h2>
            <div className={classes.eighterinput}>
              <input
                className={`${classes.inputfields} ${classes.one}`}
                placeholder={"Marke"}
                onChange={(e) => setBrandName(e.target.value)}
              />
              <input
                className={`${classes.inputfields} ${classes.two}`}
                placeholder={"Modell"}
                onChange={(e) => setModelName(e.target.value)}
              />
              <input
                className={`${classes.inputfields} ${classes.four}`}
                placeholder={erstzulassung == null && "Erstzulassung (MM/JJ)"}
                onChange={(e) => setErstzulassung(e.target.value)}
                type={erstzulassung == null ? "text" : "date"}
              />
              <input
                className={`${classes.inputfields} ${classes.eight}`}
                placeholder={"Zahl der Vorbesitzer"}
                onChange={(e) => setAnzahlVorbesitzer(e.target.value)}
              />
              <input
                className={`${classes.inputfields} ${classes.five}`}
                placeholder={"Fahrzeugidentifikationsnummer"}
                onChange={(e) => setChassisNumber(e.target.value)}
              />
              <input
                className={`${classes.inputfields} ${classes.ten}`}
                placeholder={"Kilometerstand"}
                onChange={(e) => setKilometerStand(e.target.value)}
              />
              <input
                className={`${classes.inputfields} ${classes.six}`}
                placeholder={
                  "Nummer der Zulassungsbescheinigung Teil 2 (Kfz-Brief)"
                }
                onChange={(e) =>
                  setNummerDerZulassungsbescheinigung(e.target.value)
                }
              />
              <input
                className={`${classes.inputfields} ${classes.seven}`}
                placeholder={"§ 57a-Pickerl gültig bis (MM/JJ)"}
                onChange={(e) => setNaechsteHauptuntersuchung(e.target.value)}
              />
              <input
                className={`${classes.inputfields} ${classes.eleven}`}
                placeholder={"Gesamtpreis in €"}
                onChange={(e) => setGesamtpreis(e.target.value)}
              />
              <input
                className={`${classes.inputfields} ${classes.twelve}`}
                placeholder={"Gesamtpreis in Worten"}
                onChange={(e) => setGesamtpreisInWorten(e.target.value)}
              />
              <div className={classes.l}>
                <div className="font-bold text-13">
                  Ausschluss der Gewährleistung (nur für Privatverkäufe, nicht
                  für Unternehmer im Sinne des § 1 Abs. 1 Nr. 1
                  Konsumentenschutzgesetz):
                </div>
                <div className="text-13 mt-2 mb-2">
                  Das Fahrzeug wird ohne Gewährleistung verkauft, es sei denn,
                  der Verkäufer gibt untenstehende Zusicherungen ab. Der
                  Ausschluss der Gewährleistung gilt nicht im Falle von Vorsatz,
                  grober Fahrlässigkeit oder bei Verletzung von Leben, Körper
                  oder Gesundheit.
                </div>
                <div className="text-13 mb-2 font-bold">
                  Garantien des Verkäufers:
                </div>
                <div className="text-13 mb-2">
                  Der Verkäufer garantiert, dass er uneingeschränkter Eigentümer
                  des Fahrzeugs ist und es frei von Rechten Dritter ist.
                  Außerdem garantiert er, dass das Fahrzeug während seiner
                  Besitzzeit und, soweit ihm bekannt, auch früher:
                </div>
                <div className="text-13">
                  <ControlledCheckbox
                    onUpdate={(val) => {
                      setUnfallfrei(val);
                    }}
                    label={"unfallfrei war"}
                  />
                  <ControlledCheckbox
                    onUpdate={(val) => {
                      setKeineSchaden(val);
                    }}
                    label={"keine sonstigen Schäden hatte"}
                  />
                  <div className={`flex flex-row ${width < 1111 && 'flex-col'}`}>
                    <div className="flex items-center">
                    <ControlledCheckbox
                      onUpdate={(val) => {
                        setNurFolgenderUnfall(val);
                      }}
                      label={
                        width < 1111 ? "nur die folgenden Unfallschäden oder erheblichen " : "nur die folgenden Unfallschäden oder erheblichen Schäden (Zahl, Art, Umfang) erlitten hat"
                      }
                    />
                    </div>
                    <div className="flex items-center">
                    {width < 1111 && <span className="ml-9">Schäden (Zahl, Art, Umfang) erlitten hat</span>}
                    <input
                      type={"text"}
                      className={classes.input}
                      placeholder={"Zahl, Art, Umfang"}
                      onChange={(e) => setUnfalltext(e.target.value)}
                      disabled={!nurFolgenderUnfall}
                    />
                    </div>
                  </div>
                  <ControlledCheckbox
                    onUpdate={(val) => {
                      setKeinImportfahrzeug(val);
                    }}
                    label={"kein Importfahrzeug ist"}
                  />
                  <ControlledCheckbox
                    onUpdate={(val) => {
                      setEinImportfahrzeug(val);
                    }}
                    label={"ein EU- oder Parallelimport ist"}
                  />
                  <ControlledCheckbox
                    onUpdate={(val) => {
                      setAusgestattetOriginalmotor(val);
                    }}
                    label={
                      "das Fahrzeug mit dem Originalmotor ausgestattet ist"
                    }
                  />
                  <div className={`flex ${width < 1111 && "flex-col"} `}>
                    <div className="flex items-center">
                    <ControlledCheckbox
                      onUpdate={(val) => {
                        setAusgestattetAustausch(val);
                      }}
                      label={width >= 1111 ? `mit einem Austausch- oder gebrauchten Ersatzmotor ausgerüstet ist, der eine Laufleistung von`: `mit einem Austausch- oder gebrauchten Ersatzmotor`}
                    />

                    </div>
                    <div className="flex items-center">
                   {width < 1111 && <span className="ml-9"> ausgerüstet ist, der eine Laufleistung von</span>}
                    <input
                      type={"text"}
                      disabled={!ausgestattetAustausch}
                      className={classes.input}
                      placeholder={"Laufleistung"}
                      onChange={(e) => setLaufleistung(e.target.value)}
                    />{" "}
                    aufweist
                    </div>
                  </div>
                  <ControlledCheckbox
                    onUpdate={(val) => {
                      setAbgeleseneKilometerstand(val);
                    }}
                    label={
                      "der abgelesene Kilometerstand der Gesamtlaufleistung des Fahrzeugs entspricht"
                    }
                  />
                  <div className="flex items-center">
                    <ControlledCheckbox
                      onUpdate={(val) => {
                        setAnzahlVorbesitzerChecked(val);
                      }}
                      label={"das Fahrzeug eine Anzahl von"}
                    />{" "}
                    <input
                      type={"number"}
                      disabled={!anzahlVorbesitzerChecked}
                      onChange={(e) => setAnzahlVorbesitzer(e.target.value)}
                      className={classes.input}
                      placeholder={"Anzahl Vorbesitzer"}
                    />{" "}
                    Vorbesitzern hatte.
                  </div>
                </div>
              </div>
            </div>

            <div className={classes.sectionheading}>Erklärung des Käufers</div>
            <ol className="font-bold text-13">
              <li>1. Der Käufer meldet das Kfz unverzüglich um.</li>
              <li>
                2. Der Käufer erkennt an, dass das Kfz bis zur vollständigen
                Bezahlung des Kaufpreises Eigentum des Verkäufers bleibt.
              </li>
            </ol>
            <div className={classes.twentypxtop}></div>
            <div className={classes.bluetext}>
              <Info className={classes.info} /> In dem Abschnitt für
              Sondervereinbarungen haben Sie die Möglichkeit, individuelle
              Vereinbarungen zu ergänzen, die über den Rahmen dieses
              Kaufvertrags hinausgehen. Bitte beachten Sie, dass dieser
              Abschnitt nicht ausgefüllt werden muss, wenn keine besonderen
              Vereinbarungen getroffen  werden.
            </div>
            <div className={classes.explanationcontainer}>
              <input
                className={`${classes.inputfields} ${classes.a1}`}
                placeholder={"Sondervereinbarung"}
                onChange={(e) => setGesamtpreis(e.target.value)}
              />
              <div className={classes.smallgridleft}>
                <input
                className={`${classes.inputfields}  ${classes.br1}`}
                placeholder={"Ort"}
                onChange={(e) => setGesamtpreisInWorten(e.target.value)}
              />
              <input
                className={`${classes.inputfields} ${classes.c1}`}
                placeholder={"Datum"}
                onChange={(e) => setGesamtpreis(e.target.value)}
              />
                <input
                  className={`${classes.inputfields} ${classes.f1}`}
                  placeholder={
                    "Name und Vorname des Verkäufers (in Blockbuchstaben)"
                  }
                  onChange={(e) => setGesamtpreisInWorten(e.target.value)}
                />
              </div>
              <div className={classes.smallgridright}>
              <input
                className={`${classes.inputfields} ${classes.d1}`}
                placeholder={"Ort"}
                onChange={(e) => setGesamtpreisInWorten(e.target.value)}
              />
              <input
                className={`${classes.inputfields} ${classes.e1}`}
                placeholder={"Datum"}
                onChange={(e) => setGesamtpreis(e.target.value)}
              />
              <input
                className={`${classes.inputfields} ${classes.g1}`}
                placeholder={
                  "Name und Vorname des Käufers (in Blockbuchstaben)"
                }
                onChange={(e) => setGesamtpreisInWorten(e.target.value)}
              />
              </div>
            </div>
            <h1 className={classes.sectionheading}>
              Fahrzeugübergabe{" "}
              <div className={classes.smallsectionheading}>
                Der Käufer bestätigt den Erhalt von:
              </div>
            </h1>
            <div className={classes.checkboxes}>
              <div className={classes.a2}>
                <ControlledCheckbox
                  onUpdate={(val) => {
                    setZulassungsBescheinigungTeil1Vorhanden(val);
                  }}
                  label={"Zulassungsbescheinigung Teil 1 (Kfz-Schein)"}
                />
              </div>
              <div className={classes.b2}>
                <ControlledCheckbox
                  onUpdate={(val) => {
                    setZulassungsBescheinigungTeil2Vorhanden(val);
                  }}
                  label={"Zulassungsbescheinigung Teil 2 (Kfz-Brief)"}
                />
              </div>
              <div className={classes.c2}>
                <ControlledCheckbox
                  onUpdate={(val) => {
                    setSchluesselAnzahlVorhanden(val);
                  }}
                  label={"Schlüsselanzahl"}
                />
                <input
                  type={"number"}
                  onChange={(e) => setSchluesselAnzahl(e.target.value)}
                  className={classes.input}
                />
              </div>
              <div className={classes.d2}>
                <ControlledCheckbox
                  onUpdate={(val) => {
                    setHuBescheinigung(val);
                  }}
                  label={"Pickerl-Gutachten"}
                />
              </div>
              <div className={classes.e2}>
                <ControlledCheckbox
                  onUpdate={(val) => {
                    setStilllegungsbescheinigung(val);
                  }}
                  label={"Abmeldebestätigung"}
                />
              </div>
              <div className={classes.f2}>
                <ControlledCheckbox
                  onUpdate={(val) => {
                    setAmtlichesKennzeichenVorhanden(val);
                  }}
                  label={"Amtliches Kennzeichen"}
                />
              </div>
              <div className={classes.g2}>
                <ControlledCheckbox
                  onUpdate={(val) => {
                    setCocBescheinigung(val);
                  }}
                  label={"CoC-Bescheinigung (bei EU- oder Parallelimport)"}
                />
              </div>
            </div>
            <div className="text-13 font-bold">
              Der Verkäufer bestätigt den Erhalt von:
            </div>
            <div className={classes.sellerinputcontainer}>
              <div className={classes.sellerbottom}>
              <div className="relative">
                <div className={classes.euro}>€</div>
                <input
                  className={`${classes.inputfields} ${classes.b1}`}
                  placeholder={"EURO"}
                  onChange={(e) => setEURO(e.target.value)}
                />
              </div>
              <input
                className={`${classes.inputfields} ${classes.c1}`}
                placeholder={"Ort"}
                onChange={(e) => setOrt(e.target.value)}
              />
              <input
                className={`${classes.inputfields} ${classes.d1}`}
                placeholder={datum == null && "Datum"}
                onChange={(e) => setDatum(e.target.value)}
                type={datum == null ? "text" : "date"}
              />
              <input
                className={`${classes.inputfields} ${classes.e1}`}
                placeholder={uhrzeit == null && "Uhrzeit"}
                onChange={(e) => setUhrzeit(e.target.value)}
                type={uhrzeit == null ? "text" : "time"}
              />
              </div>
              <div className={classes.bluetext}>
                <Info className={classes.info} /> Um einen Kaufvertrag zu
                generieren, schreiben Sie bitte Ihren Namen und Vornamen in
                Großbuchstaben und klicken Sie dann auf die Schaltfläche
                "Kaufvertrag generieren". Dadurch wird ein PDF-Dokument
                erstellt, das Sie ausdrucken und unterschreiben können.
              </div>
              <div className="flex">
              <input
                className={`${classes.inputfields} ${classes.highleft}`}
                placeholder={
                  "Name und Vorname des Verkäufers (in Blockbuchstaben)"
                }
                onChange={(e) => setSellerSignature(e.target.value)}
              />
              <input
                className={`${classes.inputfields} ${classes.highright}`}
                placeholder={
                  "Name und Vorname des Käufers (in Blockbuchstaben)"
                }
                onChange={(e) => setPurchaserSignature(e.target.value)}
              />
              </div>
            </div>
            <button type="submit" className={classes.generatekaufvertragbtn}>
              Kaufvertrag generieren
            </button>
          </form>
        </div>
        <div className="mt-6"></div>
        <div className={classes.graybackground}>
          <Sect
            nobordertop={true}
            point={"1."}
            heading={"Kfz-Kaufvertrag"}
            text={
              "Im Fahrzeugkaufvertrag sollten neben den standardmäßigen rechtlichen Regelungen auch individuelle Vereinbarungen und Angaben berücksichtigt werden. Der Vertrag sollte nur unterschrieben werden, wenn alle Angaben korrekt sind. Es wird empfohlen, zwei identische Exemplare des Kaufvertrags anzufertigen - eines für den Käufer und eines für den Verkäufer, beide unterschrieben. Wenn der Verkäufer minderjährig und somit nicht voll geschäftsfähig ist, sollte eine schriftliche Verkaufsvollmacht verlangt werden."
            }
          />
          <Sect
            point={"2."}
            heading={"Fahrzeugangaben"}
            text={
              "Zur eindeutigen Identifizierung eines Fahrzeugs sind die Fahrzeug-Identifikationsnummer sowie die Nummer des Fahrzeugscheins oder der Zulassungsbescheinigung II unerlässlich. Weitere wesentliche Angaben, die im Kaufvertrag nicht fehlen sollten, sind das Datum der Erstzulassung, der Kilometerstand, die Anzahl der Vorbesitzer und der nächste Termin für die Haupt- und Abgasuntersuchung."
            }
          />
          <Sect
            point={"3."}
            heading={"Unfallfrei?"}
            text={
              "Es ist ratsam, sich vom Verkäufer bestätigen zu lassen, dass das Fahrzeug unfallfrei ist. Sollte es doch zu Schäden gekommen sein, sollten Art des Schadens und die Art der Reparatur so genau wie möglich beschrieben werden. Zusätzlich sollten vom Käufer alle vorhandenen Gutachten und Rechnungen eingeholt und dem Kaufvertrag als Anlage beigefügt werden."
            }
          />
          <Sect
            point={"4."}
            heading={"Gewerbliche Einsätze"}
            text={
              "Es sollte im Kaufvertrag vermerkt werden, dass das Fahrzeug nicht gewerblich genutzt wurde, wie zum Beispiel als Miet- oder Fahrschulwagen. Wenn es sich um ein Import-Fahrzeug handelt, ist es besonders wichtig darauf hinzuweisen."
            }
          />
          <Sect
            point={"5."}
            heading={"Größere Reparaturen"}
            text={
              "Falls das Fahrzeug mit einem Austauschmotor oder einem neuen Getriebe ausgestattet wurde, sollten diese Informationen im Kaufvertrag vermerkt werden. Es ist ebenfalls ratsam, im Falle von größeren Reparaturen, die durchgeführt wurden, die Laufleistung der neuen Aggregate zu erwähnen."
            }
          />
          <Sect
            point={"6."}
            heading={"Gewerbliche Einsätze"}
            text={
              "Es sollte im Kaufvertrag vermerkt werden, dass das Fahrzeug nicht gewerblich genutzt wurde, wie zum Beispiel als Miet- oder Fahrschulwagen. Wenn es sich um ein Import-Fahrzeug handelt, ist es besonders wichtig darauf hinzuweisen."
            }
          />
          <Sect
            point={"7."}
            heading={"Größere Reparaturen"}
            text={
              "Falls das Fahrzeug mit einem Austauschmotor oder einem neuen Getriebe ausgestattet wurde, sollten diese Informationen im Kaufvertrag vermerkt werden. Es ist ebenfalls ratsam, im Falle von größeren Reparaturen, die durchgeführt wurden, die Laufleistung der neuen Aggregate zu erwähnen."
            }
          />
          <Sect
            point={"8."}
            heading={"Mängel"}
            text={
              "Falls das gewünschte Fahrzeug Mängel aufweist, sollten diese im Kaufvertrag möglichst genau beschrieben werden. Hierbei sollten Angaben zu Art, Zeitpunkt und Reparatur des Mangels gemacht werden."
            }
          />
          <Sect
            point={"9."}
            heading={"Preis"}
            text={
              "Im Kaufvertrag wird üblicherweise auch der Kaufpreis vereinbart. Der Verkäufer bestätigt in der Regel mit seiner Unterschrift, dass er die vereinbarte Summe erhalten hat. Als Käufer quittieren Sie den Erhalt des Fahrzeugs, der Schlüssel und der dazugehörigen Dokumente."
            }
          />
        </div>
      </div>
    </div>
  );
}

export default KFZKaufvertrag;
