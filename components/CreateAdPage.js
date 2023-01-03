import classes from './CreateAdPage.module.css';
import Select from 'react-select';
import { useState, useTransition } from 'react';
import Expand from "./../public/expand.svg";
import Closer from "./../public/closer.svg";
import Deleter from './../public/deleter.svg';
import Bin from './../public/dealercard/bin.svg';
import PublishIcon from './../public/publishexpand.svg';
import Angebot from './ui/ads/Angebot'
import Schloss from './../public/schloss.svg';
import Sofort from './../public/sofort.svg';
import Visa from './../public/visa.svg';
import Klarna from './../public/klarna.svg';
import Eps from './../public/eps.svg';
import ApplePay from './../public/applepay.svg';

function CreateAdPage(){
    const style = {
        control: (base, state) => ({
          ...base,
          
          boxShadow: "none",
          border: "none",
          fontSize: '13px',
          borderRadius: '10px',
          height: "40px",
          width: "100%",
          backgroundColor: state.isDisabled ? "rgba(255,255,255,0.25)" : "rgba(255,255,255,0.75)",
          cursor: state.isDisabled ? "not-allowed" : "pointer",
          color: "rgba(108, 117, 125, 0.5)",
          color: "green",
          color: state.isSelected ? "green" : "green"

        }),
        option: (styles, state) => ({
          ...styles,
          backgroundColor: state.isSelected ? "#fbb900" : "",
          "&:active": "#fbb90080",
          fontSize: '13px',
          color: "rgba(108, 117, 125, 0.5)"

        }
        ),
        
      };

    const months = []
    for(let i = 1; i <= 12; i++){
        if(i < 10){
            let label = "0" + i
            let value = i;
            months.push({label: label, value: value});
        } else {
            let label = i + "";
            let value = i;
            months.push({label: label, value: value});
        }
    }

    const years = [];
    for(let i = 2023 - 110; i <= 2023 - 10; i++){
        years.push({label: i + "", value: i})
    } 

    const brands = [{value: "Mercedes Benz", label: "Mercedes Benz"}];
    const models = [{value: "CLS", label: "CLS"}];
    const fahrzeugtypen = [
        {value: "Bitte Wählen", label: "Bitte Wählen"},
        {value: "Klein-/Kombiwagen", label: "Klein-/Kombiwagen"},
        {value: "Kleinbus", label: "Kleinbus"},
        {value: "Limousine", label: "Limousine"},
        {value: "Kombi / Family Van", label: "Kombi / Family Van"},
        {value: "SUV / Geländewagen", label: "SUV / Geländewagen"},
        {value:"Sportwagen / Coupe", label:"Sportwagen / Coupe"},
        {value: "Cabrio / Roadster", label: "Cabrio / Roadster"},
        {value: "Mopedauto", label: "Mopedauto"},
    ]
    const waehrungen = [
        {value: "€", label: "€"},
        {value: "CHF", label: "CHF"},
        {value: "£", label: " £"},
        {value: "$", label: "$"},
        {value: "TL", label: "TL"},
        {value: "QAR", label: "QAR"},
    ]
    const treibstoffe = [
        {value: "Bitte wählen", label: "Bitte wählen"},
        {value: "Benzin", label: "Benzin"},
        {value: "Diesel", label: "Diesel"},
        {value: "Elektro", label: "Elektro"},
        {value: "Gas", label: "Gas"},
        {value: "Hybrid Elektro/Benzin", label: "Hybrid Elektro/Benzin"},
        {value: "Hybrid Elektro/Diesel", label: "Hybrid Elektro/Diesel"},
        {value: "Wasserstoff", label: "Wasserstoff"},
    ]
    const getriebearten = [
        {value: "Bitte wählen ...", label: "Bitte wählen ..."},
        {value: "Automatik", label: "Automatik"},
        {value: "Schaltgetriebe", label: "Schaltgetriebe"},
    ]
    const antriebe = [
        {value: "Bitte wählen ...", label: "Bitte wählen ..."},
        {value: "Vorderrad", label: "Vorderrad"},
        {value: "Hinterrad", label: "Hinterrad"},
        {value: "Allrad", label: "Allrad"},
    ]
    const farben = [
        {value: "Bitte wählen ...", label: "Bitte wählen ..."},
        {value: "Beige", label: "Beige"},
        {value: "Blau", label: "Blau"},
        {value: "Bronze", label: "Bronze"},
        {value: "Braun", label: "Braun"},
        {value: "Grün", label: "Grün"},
        {value: "Grau", label: "Grau"},
        {value: "Gelb", label: "Gelb"},
        {value: "Rot", label: "Rot"},
        {value: "Weiß", label: "Weiß"},
        {value: "Gold", label: "Gold"},
        {value: "Violett", label: "Violett"},
        {value: "Orange", label: "Orange"},
        {value: "Schwarz", label: "Schwarz"},
        {value: "Silber", label: "Silber"},
        {value: "Sonstige", label: "Sonstige"},
    ]
    const zustaende = [
        {value: "Bitte wählen ...", label: "Bitte wählen ..."},
        {value: "Gebrauchtwagen", label: "Gebrauchtwagen"},
        {value: "Jahreswagen", label: "Jahreswagen"},
        {value: "Neuwagen", label: "Neuwagen"},
        {value: "Oldtimer", label: "Oldtimer"},
        {value: "Tageszulassung", label: "Tageszulassung"},
        {value: "Unfallwagen", label: "Unfallwagen"},
        {value: "Vorführwagen", label: "Vorführwagen"},
    ]


    const [waehrung, setWaehrung] = useState(waehrungen[0].label);
    
    const [nationalerCode, setNationalerCode] = useState();
    const [month, setMonth] = useState();
    const [year, setYear] = useState();
    const [brand, setBrand] = useState();
    const [model, setModel] = useState();

    const [bezeichnung, setBezeichnung] = useState();
    const [erstzulassungMonat, setErstzulassungMonat] = useState();
    const [erstzulassungJahr, setErstzulassungJahr] = useState();
    const [fahrzeugtyp, setFahrzeugtyp] = useState();
    const [preis, setPreis] = useState();
    const [kilometerstand, setKilometerstand] = useState();
    const [treibstoff, setTreibstoff] = useState();
    const [getriebeart, setGetriebeart] = useState();
    const [antrieb, setAntrieb] = useState();
    const [farbe, setFarbe] = useState();
    const [zustand, setZustand] = useState();
    const [leistungInKw, setLeistungInKw] = useState();
    const [leistungInPs, setLeistungInPs] = useState();
    const [vorbesitzer, setVorbesitzer] = useState();
    const [anzahlSitze, setAnzahlSitze] = useState();
    const [anzahlTuere, setAnzahlTuere] = useState();
    const [pickerl, setPickerl] = useState(false);
    const [pickerlGueltigkeit, setPickerlGueltigkeit] = useState();
    const [garantie, setGarantie] = useState();

    // AUSSTATTUNGEN CHECKBOXEN
    const [zweizonenKlima, setZweizonenKlima] = useState(false)
    const [dreizonenKlima, setDreizonenKlima] = useState(false)
    const [drei60kamera, setDrei60kamera] = useState(false)
    const [vierzonenKlima, setVierzonenKlima] = useState(false)
    const [ABS, setABS] = useState(false);
    const [abstandsTempomat, setAbstandsTempomat] = useState(false);
    const [abstandsWarner, setAbstandsWarner] = useState(false)
    const [airbagHinten, setAirbagHinten] = useState(false)
    const [alarmanlage, setAlarmanlage] = useState(false)
    const [allrad, setAllrad] = useState(false)
    const [allwetterReifen, setAllwetterReifen] = useState(false)
    const [alufelgen, setAlufelgen] = useState(false)
    const [ambientebeleuchtung, setAmbientebeleuchtung] = useState(false)
    const [androidauto, setAndroidauto] = useState(false)
    const [anhaengerkupplung, setAnhaengerkupplung] = useState(false)
    const [applecarplay, setApplecarplay] = useState(false)
    const [armlehne, setArmlehne] = useState(false)
    const [beheizbareFrontscheibe, setBeheizbareFrontscheibe] = useState(false)
    const [beheizbaresLenkrad, setBeheizbaresLenkrad] = useState(false)
    const [behindertenGerecht, setBehindertenGerecht] = useState(false)
    const [beifahrerairbag, setBeifahrerairbag] = useState(false)
    const [berganfahrassistent, setBerganfahrassistent] = useState(false)
    const [bixenonscheinwerfer, setBixenonscheinwerfer] = useState(false)
    const [biodieselumruestung, setBiodieselumruestung] = useState(false)
    const [blendfreiesFernlicht, setBlendfreiesFernlicht] = useState(false)
    const [bluethoot, setBluethoot] = useState(false)
    const [bordcomputer, setBordcomputer] = useState(false)
    const [cd, setCd] = useState(false)
    const [dabradio, setDabradio] = useState(false)
    const [dachreling, setDachreling] = useState(false)
    const [ezehngeeignet, setEzehngeeignet] = useState(false)
    const [einparkhilfe, setEinparkhilfe] = useState(false)
    const [einparkhilfeKamera, setEinparkhilfeKamera] = useState(false)
    const [einparkhilfeSelbst, setEinparkhilfeSelbst] = useState(false)
    const [einparkhilfeSensorenVorne, setEinparkhilfeSensorenVorne] = useState(false)
    const [einparkhilfeSensorenHinten, setEinparkhilfeSensorenHinten] = useState(false)
    const [elektrfensterheber, setElektrfensterheber] = useState(false)
    const [elektrsitzhinten, setElektrsitzhinten] = useState(false)
    const [elektrheckklappe, setElektrheckklappe] = useState(false)
    const [elektrseitenspiegel, setElektrseitenspiegel] = useState(false)
    const [elektrsitze, setElektrsitze] = useState(false)
    const [elektrparkbremse, setElektrparkbremse] = useState(false)
    const [esp, setEsp] = useState(false)
    const [fahrerairbag, setFahrerairbag] = useState(false)
    const [fernlichassistent, setFernlichassistent] = useState(false)
    const [freisprecheinrichtung, setFreisprecheinrichtung] = useState(false)
    const [gepaeckraum, setGepaeckraum] = useState(false)
    const [geschwindigkeitsbegrenz, setGeschwindigkeitsbegrenz] = useState(false)
    const [getonteScheiben, setGetonteScheiben] = useState(false)
    const [headupDisplay, setHeadupDisplay] = useState(false)
    const [induktionsladen, setInduktionsladen] = useState(false)
    const [innenspiegelauto, setInnenspiegelauto] = useState(false)
    const [isofix, setIsofix] = useState(false)
    const [katalysator, setKatalysator] = useState(false)
    const [klimaanlage, setKlimaanlage] = useState(false)
    const [klimaautomatik, setKlimaautomatik] = useState(false)
    const [kopfairbag, setKopfairbag] = useState(false)
    const [kurvenlicht, setKurvenlicht] = useState(false)
    const [laserlicht, setLaserlicht] = useState(false)
    const [ledscheinwerfer, setLedscheinwerfer] = useState(false)
    const [ledtagfahrlicht, setLedtagfahrlicht] = useState(false)
    const [lederausstattung, setLederausstattung] = useState(false)
    const [lederlenkrad, setLederlenkrad] = useState(false)
    const [lichtsensor, setLichtsensor] = useState(false)
    const [lordosenstuetze, setLordoesenstuetze] = useState(false)
    const [luftfederung, setLuftfederung] = useState(false)
    const [markise, setMarkise] = useState(false)
    const [massageSitze, setMassageSitze] = useState(false)
    const [mp3, setMp3] = useState(false)
    const [muedigkeitswarn, setMuedigkeitswarn] = useState(false)
    const [multifunktionslenkrad, setMultifunktionslenkrad] = useState(false)
    const [musikstreamingIntegriert, setMusikstreamingIntegriert] = useState(false)
    const [nachtsichtAssistent, setNachtsichtAssistent] = useState(false)
    const [navigationssystem, setNavigationssystem] = useState(false);
    const [nebelscheinwerfer, setNebelscheinwerfer] = useState(false);
    const [notbremsassistent, setNotbremsassistent] = useState(false);
    const [notrad, setNotrad] = useState(false);
    const [notrufsystem, setNotrufsystem] = useState(false);
    const [pannenkit, setPannenkit] = useState(false);
    const [panoramadach, setPanoramadach] = useState(false);
    const [radio, setRadio] = useState(false);
    const [raucherpaket, setRaucherpaket] = useState(false);
    const [rechtslenker, setRechtslenker] = useState(false);
    const [regensensor, setRegensensor] = useState(false);
    const [reichweitenverlaengerer, setReichweitenverlaengerer] = useState(false);
    const [reifendruckkontrollsystem, setReifendruckkontrollsystem] = useState(false);
    const [reserverad, setReserverad] = useState(false);
    const [schaltwippen, setSchaltwippen] = useState(false);
    const [scheinwerferreinigung, setScheinwerferreinigung] = useState(false);
    const [schiebedach, setSchiebedach] = useState(false);
    const [schiebetuer, setSchiebetuer] = useState(false);
    const [schieblinks, setSchieblinks] = useState(false);
    const [schiebrechts, setSchiebrechts] = useState(false);
    const [schluessellose, setSchluessellose] = useState(false);
    const [seitenairbag, setSeitenairbag] = useState(false);
    const [servolenkung, setServolenkung] = useState(false);
    const [sitzbelueftung, setSitzbelueftung] = useState(false);
    const [sitzheizung, setSitzheizung] = useState(false);
    const [skisack, setSkisack] = useState(false);
    const [sommerreifen, setSommerreifen] = useState(false);
    const [soundsystem, setSoundsystem] = useState(false);
    const [spoiler, setSpoiler] = useState(false);
    const [sportfahrwerk, setSportfahrwerk] = useState(false);
    const [sportpaket, setSportpaket] = useState(false);
    const [sportsitze, setSportsitze] = useState(false);
    const [sprachsteuerung, setSprachsteuerung] = useState(false);
    const [spurhalteassistent, setSpurhalteassistent] = useState(false);
    const [stahlfelgen, setStahlfelgen] = useState(false);
    const [standheizung, setStandheizung] = useState(false);
    const [startstopauto, setStartstopauto] = useState(false);
    const [tagfahrlicht, setTagfahrlicht] = useState(false);
    const [taximietwage, setTaximietwagen] = useState(false);
    const [teilbruecksitzbank, setTeilbruecksitzbank] = useState(false);
    const [tempomat, setTempomat] = useState(false);
    const [totwinkelAssistent, setTotwinkelAssitent] = useState(false);
    const [touchscreen, setTouchscreen] = useState(false);
    const [traktionskontrolle, setTraktionskontrolle] = useState(false);
    const [tuning, setTuning] = useState(false);
    const [tv, setTv] = useState(false);
    const [umklappbeifahrer, setUmklappbeifahrer] = useState(false);
    const [usb, setUsb] = useState(false);
    const [verkehrszeichenErkennung, setVerkehrszeichenErkennung] = useState(false);
    const [vollledscheinwerfer, setVollledscheinwerfer] = useState(false);
    const [volldigitalesKombiinstrument, setVolldigitalesKombiinstrument] = useState(false);
    const [wlan, setWlan] = useState(false);
    const [wegfahrsperre, setWegfahrsperre] = useState(false);
    const [windschott, setWindschott] = useState(false);
    const [winterpaket, setWinterpaket] = useState(false);
    const [winterreifen, setWinterreifen] = useState(false);
    const [xenonscheinwerfer, setXenonscheinwerfer] = useState(false);
    const [zentralverriegelung, setZentralverriegelung] = useState(false);
    const [zentralFunkfern, setZentralFunkfern] = useState(false);
    const [achtFachBereift, setAchtFachBereift] = useState(false);
    const [kollisionsWarner, setKollisionsWarner] = useState(false);
    const [komfortFahrwerk, setKomfortFahrwerk] = useState(false);
    const [rueckfahrkamera, setRueckfahrkamera] = useState(false);
    const [asr, setAsr] = useState(false);
    const [leasingfaehigkeit, setLeasingfaehigkeit] = useState(false);
    const [schisack, setSchisack] = useState(false);
    const [automatischeHeckklappe, setAutomatischeHeckklappe] = useState(false);
    const [serviceGepflegt, setServiceGepflegt] = useState(false);
    const [lenkradheizung, setLenkradheizung] = useState(false);
    const [sperrdifferential, setSperrdifferential] = useState(false);
    const [dachgepaecktraeger, setDachgepaecktraeger] = useState(false);
    const [metallicLackierung, setMetalliclackierung] = useState(false);
    const [mittelarmlehne, setMittelarmlehne] = useState(false);
    const [stabilitaetsprogramme, setStabilitaetsprogramme] = useState(false);
    const [mwstAusweisbar, setMwstAusweisbar] = useState(false);
    const [teilAutonomesFahren, setTeilAutonomesFahren] = useState(false);
    const [nichtraucherfahrzeug, setNichtraucherFahrzeug] = useState(false);
    const [parkhilfesensorenHintenUndVorne, setParkhilfesensorenHintenUndVorne] = useState(false);

    const [pickerlMonth, setPickerlMonth] = useState();
    const [pickerlYear, setPickerlYear] = useState();

    // KONTAKT
    const [name, setName] = useState("Musa");
    const [tel, setTel] = useState();
    const [tel2, setTel2] = useState();
    const [mail, setMail] = useState("officialmusa58@gmail.com");
    const [showMail, setShowMail] = useState(false);

    // Verkaufsort
    const [strasse, setStrasse] = useState();
    const laender = [
        {value: "Österreich", label: "Österreich"},
        {value: "Afghanistan", label: "Afghanistan"},
        {value: "Ägypten", label: "Ägypten"},
    ]
    const [land, setLand] = useState();
    const [plz, setPlz] = useState();
    const [ort, setOrt] = useState();

    const [stepActive, setStepActive] = useState(1);

    // BILDER
    const [images, setImages] = useState([]);

    // Titelbildauswahl
    const [titelbild, setTitelbild] = useState();

    // GIGA POWER
    const [typeOpen1, setTypeOpen1] = useState(false);
    const [typeOpen2, setTypeOpen2] = useState(false);
    const [typeOpen3, setTypeOpen3] = useState(false);
    const [typeOpen4, setTypeOpen4] = useState(false);
    const [typeOpen5, setTypeOpen5] = useState(false);
    const [typeOpen6, setTypeOpen6] = useState(false);
  
    const [selectedItemPrice1, setSelectedItemPrice1] = useState(25);
    const [selectedItemPrice2, setSelectedItemPrice2] = useState(114);
    const [selectedItemPrice3, setSelectedItemPrice3] = useState(3);
    const [selectedItemPrice4, setSelectedItemPrice4] = useState(3);
    const [selectedItemPrice5, setSelectedItemPrice5] = useState(4);
    const [selectedItemPrice6, setSelectedItemPrice6] = useState(4);
  
    const [selectedItemName1, setSelectedItemName1] = useState("1 Woche");
    const [selectedItemName2, setSelectedItemName2] = useState("1 Woche");
    const [selectedItemName3, setSelectedItemName3] = useState("1 Tag");
    const [selectedItemName4, setSelectedItemName4] = useState("1-mal");
    const [selectedItemName5, setSelectedItemName5] = useState("30 Tage");
    const [selectedItemName6, setSelectedItemName6] = useState("1-mal");
  
    const [cart, setCart] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);
  
    function handleAddToCart(value, name, price){
      var adder = [...cart];
      adder.push({value, name, price});
      setTotalPrice(pr => pr + price);
      setCart(adder);
    }
  
    function deleteFromCart(index, price){
      var reducer = [...cart];
      reducer.splice(index, 1);
      setTotalPrice(pr => pr - price);
      setCart(reducer);
    }

    function delImg(index){
        var reducedImages = [...images];
        reducedImages.splice(index, 1);
        setImages(reducedImages);
    }

    const [showValidationTextStep1, setShowValidationTextStep1] = useState(false);

    const [allowNationalCode, setAllowNationalCode] = useState();
    const [securityQuestion, setSecurityQuestion] = useState();

    const [beschreibung, setBeschreibung] = useState();

    const [elektronischeRechnungAngefordert, setElektronischeRechnungAngefordert] = useState(false);
    const [gutscheincode, setGutscheincode] = useState();
    return (
        <div className={classes.container}>
            <div className={classes.partshower}>
               {stepActive == 1 &&  <>
                <div className={classes.one}>
                    1
                    <div className={classes.triangle}></div>
                </div>
                <div className={classes.two}>
                    
                    <div className={classes.boldtext}>2. DETAILS</div>
                    <div className={classes.parttext}>Fahrzeugsdaten<br></br>und Ausstattungen</div>
                </div>
                <div className={classes.three}>
                    
                    <div className={classes.boldtext}>3. BILDER</div>
                    <div className={classes.parttext}>Bilder hochladen<br></br><br></br></div>
                </div>
                <div className={classes.four}>
                    
                    <div className={classes.boldtext}>4. GIGA POWER</div>
                    <div className={classes.parttext}>Anzeige schneller<br></br>verkaufen</div>
                </div>
                <div className={classes.five}>
                    
                    <div className={classes.boldtext}>5. VERÖFFENTLICHEN</div>
                    <div className={classes.parttext}>Stelle deine<br />Anzeige online</div>
                </div>
               </>}
                {stepActive == 2 && <>
                    <div className={`${classes.one} ${classes.onelittle}`} onClick={() => setStepActive(1)}>
                    
                    <div className={classes.boldtext}>1. MODELL</div>
                    <div className={classes.parttext}>Fahrzeugsmodell und<br></br>Erstzulassung</div>
                </div>
                <div className={`${classes.two} ${classes.twobig}`}>
                    2
                    <div className={classes.triangle}></div>
                </div>
                <div className={classes.three}>
                    <div className={classes.boldtext}>3. BILDER</div>
                    <div className={classes.parttext}>Bilder hochladen<br></br><br></br></div>
                </div>
                <div className={classes.four}>
                    
                    <div className={classes.boldtext}>4. GIGA POWER</div>
                    <div className={classes.parttext}>Anzeige schneller<br></br>verkaufen</div>
                </div>
                <div className={classes.five}>
                    
                    <div className={classes.boldtext}>5. VERÖFFENTLICHEN</div>
                    <div className={classes.parttext}>Stelle deine<br />Anzeige online</div>
                </div>
                </>}
                {stepActive == 3 && <>
                    <div className={`${classes.one} ${classes.onelittle}`} onClick={() => setStepActive(1)}>
                    <div className={classes.boldtext}>MODELL</div>
                    <div className={classes.parttext}>Fahrzeugsmodell und<br></br>Erstzulassung</div>
                </div>
                <div className={`${classes.two} ${classes.wasActive}`} onClick={() => setStepActive(2)}>
                    <div className={classes.boldtext}>DETAILS</div>
                    <div className={classes.parttext}>Fahrzeugsdaten<br></br>und Ausstattungen</div>
                </div>
                <div className={`${classes.three} ${classes.twobig}`}>
                    3
                    <div className={classes.triangle}></div>
                </div>
                <div className={classes.four}>
                
                    <div className={classes.boldtext}>GIGA POWER</div>
                    <div className={classes.parttext}>Anzeige schneller<br></br>verkaufen</div>
                </div>
                <div className={classes.five}>
                    
                    <div className={classes.boldtext}>VERÖFFENTLICHEN</div>
                    <div className={classes.parttext}>Stelle deine<br />Anzeige online</div>
                </div>
                </>}
                {stepActive == 4 && <>
                    <div className={`${classes.one} ${classes.onelittle}`} onClick={() => setStepActive(1)}>
                    
                    <div className={classes.boldtext}>1. MODELL</div>
                    <div className={classes.parttext}>Fahrzeugsmodell und<br></br>Erstzulassung</div>
                </div>
                <div className={`${classes.two} ${classes.wasActive}`} onClick={() => setStepActive(2)}>
                    
                    <div className={classes.boldtext}>2. DETAILS</div>
                    <div className={classes.parttext}>Fahrzeugsdaten<br></br>und Ausstattungen</div>
                </div>
                <div className={`${classes.three} ${classes.wasActive}`} onClick={() => setStepActive(3)}>
                    
                    <div className={classes.boldtext}>3. BILDER</div>
                    <div className={classes.parttext}>Bilder hochladen<br></br><br></br></div>
                </div>
                <div className={`${classes.four} ${classes.twobig}`}>
                    <span className={classes.trnum}>4</span>
                    <div className={classes.triangle}></div>
                </div>
                <div className={classes.five}>
                    
                    <div className={classes.boldtext}>5. VERÖFFENTLICHEN</div>
                    <div className={classes.parttext}>Stelle deine<br />Anzeige online</div>
                </div>
                </>}
                {stepActive == 5 && <>
                    <div className={`${classes.one} ${classes.onelittle}`} onClick={() => setStepActive(1)}>
                    
                    <div className={classes.boldtext}>1. MODELL</div>
                    <div className={classes.parttext}>Fahrzeugsmodell und<br></br>Erstzulassung</div>
                </div>
                <div className={`${classes.two} ${classes.wasActive}`} onClick={() => setStepActive(2)}>
                    
                    <div className={classes.boldtext}>2. DETAILS</div>
                    <div className={classes.parttext}>Fahrzeugsdaten<br></br>und Ausstattungen</div>
                </div>
                <div className={`${classes.three} ${classes.wasActive}`} onClick={() => setStepActive(3)}>
                    
                    <div className={classes.boldtext}>3. BILDER</div>
                    <div className={classes.parttext}>Bilder hochladen<br></br><br></br></div>
                </div>
                <div className={`${classes.four} ${classes.wasActive}`} onClick={() => setStepActive(4)}>
                    <div className={classes.boldtext}>4. GIGA POWER</div>
                    <div className={classes.parttext}>Anzeige schneller<br></br>verkaufen</div>
                </div>
                <div className={`${classes.five} ${classes.twobig}`}>
                    <span className={classes.trnum}>5</span>
                    <div className={`${classes.triangle} ${classes.trnum}`}></div>
                </div>
                </>}
            </div>
             {stepActive == 1 && <form>
             <div className={classes.heading}>MODELL</div>
            <div className={classes.description}>Fahrzeugmodell und Erstzulassung</div>
            <div className={classes.point}>1. Erstzulassung</div>
            {showValidationTextStep1 && <div className={classes.shownError}>
                
            </div>}
            <div className={classes.half}>
                <Select 
                    styles={style}
                    options={months}
                    placeholder={month == null ? "Monat" : month}
                    className={`mr-2 w-full ${classes.invalidselect}`}
                    isSearchable={true}
                    onChange={(e) => setMonth(e.value)}
                  
                    required
                    />
                <Select 
                    styles={style}
                    options={years}
                    placeholder={year == null ? "Jahr" : year}
                    className='w-full'
                    isSearchable={true}
                    onChange={(e) => setYear(e.value)}
                    
                    required
                    />
            </div>
            <div className={classes.verticalline}></div>
            <div className={classes.halfer}>
                <div className={classes.left}>
                    <div className={classes.pointer}>2. Fahrzeugerfassung</div>
                    <div className={classes.point}>Selbsteingabe</div>
                    <div className={classes.paragraph}>Geben Sie die Marke und das Modell Ihres Fahrzeuges an.<br></br><br></br></div>
                    <div className={`${classes.halfer} mt-4`}>
                        <Select 
                        styles={style}
                        options={brands}
                        placeholder={brand == null ? "Marke" : brand}
                        className='w-full mr-4'
                        isSearchable={true}
                        onChange={(e) => setBrand(e.value)}
                        required={nationalerCode != "" ? false : true}
                        />
                    <Select 
                        styles={style}
                        options={models}
                        placeholder={model == null ? "Modell" : model}
                        className='w-full'
                        isSearchable={true}
                        onChange={(e) => setModel(e.value)}
                        required={nationalerCode != "" ? false : true}
                        
                        />
                    </div>
                </div>
                <div className={classes.horizontalline}></div>
                <div className={classes.right} onMouseEnter={() => setAllowNationalCode(true)} onMouseLeave={() => setAllowNationalCode(false)}>
                    {allowNationalCode == true && <div className={classes.baldverfuegbar}>Bald verfügbar</div>}
                    <div className={classes.pointerright}>Nationaler Code</div>
                    <div className={classes.text}>
                    Gib den nationalen Code (Eurotax-Code) des 
Fahrzeugs an, um Fahrzeug-Details automatisch zu
befüllen. Der Code befindet sich im Zulassungsschein.
                    </div>
                    <input type={"text"} onChange={(e) => setNationalerCode(e.target.value)} placeholder={"Nationaler Code"} className={classes.nationalcode} required={model != "" && brand != "" ? false : true} />
                </div>
            </div>             <div className={classes.halfer}>
                {stepActive > 1 && <div className={`${classes.savebtn} mr-4`} onClick={() => setStepActive(d => d - 1)}>Zurück</div>}
                <button className={classes.savebtn} onClick={() => {
                    if(nationalerCode != null){
                        setBrand(null);
                        setModel(null);
                    }
                    if(brand != null && model != null){
                        setNationalerCode(null);
                    }
                    if(month != null && year != null){
                        if(brand != null && model != null){
                            setStepActive(d => d + 1)
                        }
                        else if(nationalerCode != null){
                            setStepActive(d => d + 1)
                        } else{

                        }
                    }
                    setShowValidationTextStep1(true); 
                }} type={"submit"}>Weiter</button>
            </div></form>}
            {stepActive == 2 && <>
            {/* Fahrzeugdaten */}
             <form className={classes.form}>
             <div className={classes.heading}>DETAILS</div>
            <div className={classes.description}>Fahrzeugdaten und Ausstattung</div>
            <div className={`${classes.point} mb-4`}>1. Fahrzeugdaten</div>
            <div className={classes.flexer}>
                <span className={classes.valueleft}>Marke *</span>
                <span className={classes.valueright}>{brand}</span>
            </div>
            <div className={classes.flexer}>
                <span className={classes.valueleft}>Modell *</span>
                <span className={classes.valueright}>{model}</span>
            </div>
            <div className={classes.flexer}>
                <span className={classes.valueleft}>Bezeichnung</span>
                <span className={classes.valueright}><input type={"text"} value={bezeichnung} className={classes.input} onChange={(e) => setBezeichnung(e.target.value)} placeholder={"zum Beispiel 350 CDI"} /></span>
            </div>
            <div className={classes.flexer}>
                <span className={classes.valueleft}>Erstzulassung *</span>
                <div className={`${classes.halfer} w-full`}>
                    <label className='w-full mr-4 flex items-center'>
                        Monat
                    <Select 
                        styles={style}
                        options={months}
                        placeholder="Monat"
                        className='w-full ml-2'
                        isSearchable={true}
                        onChange={(e) => setErstzulassungMonat(e.value)}
                        defaultInputValue={erstzulassungMonat}
                        />
                    </label>
                    <label className='w-full flex items-center'>
                        Jahr
                    <Select 
                        styles={style}
                        options={years}
                        placeholder="Jahr"
                        className='w-full ml-2'
                        isSearchable={true}
                        onChange={(e) => setErstzulassungJahr(e.value)}
                        defaultInputValue={erstzulassungJahr}
                        />
                    </label>
                    </div>
            </div>
            <div className={classes.flexer}>
                <span className={classes.valueleft}>Fahrzeugtyp *</span>
                <Select 
                    styles={style}
                    options={fahrzeugtypen}
                    placeholder="Bitte wählen ..."
                    className='w-full'
                    isSearchable={true}
                    onChange={(e) => setFahrzeugtyp(e.value)}
                    defaultInputValue={fahrzeugtyp}
                    />
            </div>
            <div className={classes.flexer}>
                <span className={classes.valueleft}>Preis in                 <Select 
                    styles={style}
                    options={waehrungen}
                    placeholder="€"
                    className='w-18 ml-1'
                    isSearchable={true}
                    onChange={(e) => setWaehrung(e.value)}
                    />*</span>
                <span className={classes.valueright}><input type={"number"} min={0} value={preis} className={classes.input} onChange={(e) => setPreis(e.target.value)} placeholder={"in " + waehrung} /></span>
            </div>
            <div className={classes.flexer}>
                <span className={classes.valueleft}>Kilometerstand</span>
                <span className={classes.valueright}><input type={"text"} value={kilometerstand} onChange={(e) => setKilometerstand(e.target.value)} className={classes.input} placeholder={"in km"} /></span>
            </div>
            <div className={classes.flexer}>
                <span className={classes.valueleft}>Treibstoff *</span>
                <span className={classes.valueright}>
                    <Select 
                        styles={style}
                        options={treibstoffe}
                        placeholder="Bitte wählen ..."
                        className='w-full'
                        isSearchable={true}
                        onChange={(e) => setTreibstoff(e.value)}
                        defaultInputValue={treibstoff}
                        />
                </span>
            </div>
            <div className={classes.flexer}>
                <span className={classes.valueleft}>Getriebeart *</span>
                <span className={classes.valueright}>
                    <Select 
                        styles={style}
                        options={getriebearten}
                        placeholder="Bitte wählen ..."
                        className='w-full'
                        isSearchable={true}
                        onChange={(e) => setGetriebeart(e.value)}
                        defaultInputValue={getriebeart}
                        />
                </span>
            </div>
            <div className={classes.flexer}>
                <span className={classes.valueleft}>Antrieb *</span>
                <span className={classes.valueright}>
                    <Select 
                        styles={style}
                        options={antriebe}
                        placeholder="Bitte wählen ..."
                        className='w-full'
                        isSearchable={true}
                        onChange={(e) => setAntrieb(e.value)}
                        defaultInputValue={antrieb}
                        />
                </span>
            </div>
            <div className={classes.flexer}>
                <span className={classes.valueleft}>Farbe *</span>
                <span className={classes.valueright}>
                <Select 
                        styles={style}
                        options={farben}
                        placeholder="Bitte wählen ..."
                        className='w-full'
                        isSearchable={true}
                        onChange={(e) => setFarbe(e.value)}
                        defaultInputValue={farbe}
                        />
                </span>
            </div>
            <div className={classes.flexer}>
                <span className={classes.valueleft}>Zustand *</span>
                <span className={classes.valueright}>
                    <Select 
                        styles={style}
                        options={zustaende}
                        placeholder="Bitte wählen ..."
                        className='w-full'
                        isSearchable={true}
                        onChange={(e) => setZustand(e.value)}
                        defaultInputValue={zustand}
                        />
                </span>
            </div>
            <div className={classes.flexer}>
                <span className={classes.valueleft}>Leistung</span>
                <div className={`${classes.twovalues}`}>
                  <span><input type={"number"} min={0}  value={leistungInKw} onChange={(e) => {
                    setLeistungInKw(e.target.value)
                    setLeistungInPs(Math.round(e.target.value * 1.36))
                  }} className={`${classes.hinput} w-full mr-5`} placeholder={"KW"} /></span>
                  <div></div>
                  <span><input type={"number"}  min={0} value={leistungInPs} onChange={(e) => {
                    setLeistungInPs(e.target.value)
                    setLeistungInKw(Math.round(e.target.value / 1.36))
                  }} className={`${classes.hinput} w-full ml-5`} placeholder={"PS"} /></span>
                </div>
            </div>
            <div className={classes.flexer}>
                <span className={classes.valueleft}>Vorbesitzer</span>
                <span className={classes.valueright}><input type={"number"} min={0}  value={vorbesitzer} className={classes.input} onChange={(e) => setVorbesitzer(e.target.value)} placeholder={"anzahl aller Vorbesitzer"} /></span>
            </div>
            <div className={classes.flexer}>
                <span className={classes.valueleft}>Anzahl Sitze *</span>
                <span className={classes.valueright}><input type={"number"} min={0}  value={anzahlSitze} onChange={(e) => setAnzahlSitze(e.target.value)} className={classes.input} placeholder={"anzahl der Sitze"} /></span>
            </div>
            <div className={classes.flexer}>
                <span className={classes.valueleft}>Anzahl Türen</span>
                <span className={classes.valueright}><input type={"number"} min={0}  value={anzahlTuere} onChange={(e) => setAnzahlTuere(e.target.value)} className={classes.input} placeholder={"anzahl der Türen"} /></span>
            </div>
            <div className={classes.flexer}>
                <span className={classes.valueleft}>§ 57a "Pickerl"</span>
                <span className={classes.valueright}><input type={"checkbox"} checked={pickerl} onChange={() => setPickerl(d => !d)} className="mr-2 cursor-pointer" /> Ja</span>
            </div>
            <div className={classes.flexer}>
                <span className={classes.valueleft}>Pickerl gültig bis{pickerl && " *"}</span>
                <span className={classes.valueright}>
                    <label className='w-full mr-4 flex items-center'>
                        Von
                    <Select 
                        styles={style}
                        options={months}
                        placeholder=""
                        className='w-full ml-2'
                        isSearchable={true}
                        onChange={(e) => setPickerlMonth(e.value)}
                        isDisabled={!pickerl}
                        defaultInputValue={pickerlMonth}
                        />
                    </label>
                    <label className='w-full flex items-center'>
                        Bis
                    <Select 
                        styles={style}
                        options={years}
                        placeholder=""
                        className='w-full ml-2'
                        isSearchable={true}
                        onChange={(e) => setPickerlYear(e.value)}
                        isDisabled={!pickerl}
                        defaultInputValue={pickerlYear}
                        />
                    </label>
                </span>
            </div>
            <div className={classes.flexer}>
                <span className={classes.valueleft}>Garantie</span>
                <span className={classes.valueright}><input type={"checkbox"} checked={garantie} onChange={() => setGarantie(d => !d)} className="mr-2 cursor-pointer" /> Ja</span>
            </div>
             </form>
            {/* Ausstattungen */}
            <>
            <div className={classes.point}>2. Ausstattungen</div>
            <p className={classes.text}>Gib Ausstattung und Extras des Fahrzeugs an und überprüfe vorausgewählte Felder.</p>
            <div className={classes.ausstattungengrid}>
                <label className={classes.checkboxname}>
                    <input type={"checkbox"} checked={achtFachBereift} onChange={() => setAchtFachBereift(d => !d)} className="mr-2" />
                    8-fach Bereift
                </label>
                <label className={classes.checkboxname}>
                    <input type={"checkbox"} checked={klimaanlage} onChange={() => setKlimaanlage(d => !d)} className="mr-2" />
                    Klimaanlage
                </label>
                <label className={classes.checkboxname}>
                    <input type={"checkbox"}checked={parkhilfesensorenHintenUndVorne} onChange={() => {
                        setParkhilfesensorenHintenUndVorne(d => !d)
                        }} className="mr-2" />
                    Parksensor vorne & hinten
                </label>
                <label className={classes.checkboxname}>
                    <input type={"checkbox"} checked={ABS} onChange={() => {
                        setABS(d => !d)
                        }} className="mr-2" />
                    ABS
                </label>
                <label className={classes.checkboxname}>
                    <input type={"checkbox"} checked={klimaautomatik} onChange={() => {
                        setKlimaautomatik(d => !d);
                        }} className="mr-2" />
                    Klimaautomatik
                </label>
                <label className={classes.checkboxname}>
                    <input type={"checkbox"} checked={radio} onChange={() => {
                        setRadio(d => !d)
                        }} className="mr-2" />
                    Radio
                </label>
                <label className={classes.checkboxname}>
                    <input type={"checkbox"} checked={abstandsTempomat} onChange={() => {
                        setAbstandsTempomat(d => !d)
                        }} className="mr-2" />
                    Abstandstempomat
                </label>
                <label className={classes.checkboxname}>
                    <input type={"checkbox"} checked={kollisionsWarner} onChange={() => {
                        setKollisionsWarner(d => !d)
                        }} className="mr-2" />
                    Kollisionswarner
                </label>
                <label className={classes.checkboxname}>
                    <input type={"checkbox"} checked={regensensor} onChange={() => {
                        setRegensensor(d => !d)
                        }} className="mr-2" />
                    Regensensor
                </label>
                <label className={classes.checkboxname}>
                    <input type={"checkbox"} checked={alarmanlage} onChange={() => {
                        setAlarmanlage(d => !d)
                        }} className="mr-2" />
                    Alarmanlage
                </label>
                <label className={classes.checkboxname}>
                    <input type={"checkbox"} checked={komfortFahrwerk} onChange={() => {
                        setKomfortFahrwerk(d => !d)
                        }} className="mr-2" />
                    Komfortfahrwerk
                </label>
                <label className={classes.checkboxname}>
                    <input type={"checkbox"} checked={reifendruckkontrollsystem} onChange={() => {
                        setReifendruckkontrollsystem(d => !d)
                        }} className="mr-2" />
                    Reifendrucksensor
                </label>
                <label className={classes.checkboxname}>
                    <input type={"checkbox"} checked={androidauto} onChange={() => {
                        setAndroidauto(d => !d)
                        }} className="mr-2" />
                    Android Auto
                </label>
                <label className={classes.checkboxname}>
                    <input type={"checkbox"} checked={kopfairbag} onChange={() => {
                        setKopfairbag(d => !d)
                        }} className="mr-2" />
                    Kopfairbags
                </label>
                <label className={classes.checkboxname}>
                    <input type={"checkbox"} checked={rueckfahrkamera} onChange={() => {
                        setRueckfahrkamera(d => !d)
                        }} className="mr-2" />
                    Rückfahrkamera
                </label>
                <label className={classes.checkboxname}>
                    <input type={"checkbox"} checked={anhaengerkupplung} onChange={() => {
                        setAnhaengerkupplung(d => !d)
                        }} className="mr-2" />
                    Anhängerkupplung
                </label>
                <label className={classes.checkboxname}>
                    <input type={"checkbox"} checked={kurvenlicht} onChange={() => {
                        setKurvenlicht(d => !d)
                        }} className="mr-2" />
                    Kurvenfahrlicht
                </label>
                <label className={classes.checkboxname}>
                    <input type={"checkbox"} checked={schaltwippen} onChange={() => {
                        setSchaltwippen(d => !d)
                        }} className="mr-2" />
                    Schaltwippen
                </label>
                <label className={classes.checkboxname}>
                    <input type={"checkbox"} checked={asr} onChange={() => {
                        setAsr(d => !d)
                        }} className="mr-2" />
                    Antriebsschlupfregelung(ASR)
                </label>
                <label className={classes.checkboxname}>
                    <input type={"checkbox"} checked={laserlicht} onChange={() => {
                        setLaserlicht(d => !d)
                        }} className="mr-2" />
                    Laserlicht
                </label>
                <label className={classes.checkboxname}>
                    <input type={"checkbox"} checked={schiebedach} onChange={() => {
                        setSchiebedach(d => !d)
                        }} className="mr-2" />
                    Schiebedach
                </label>
                <label className={classes.checkboxname}>
                    <input type={"checkbox"} checked={applecarplay} onChange={() => {
                        setApplecarplay(d => !d)
                        }} className="mr-2" />
                    Apple CarPlay
                </label>
                <label className={classes.checkboxname}>
                    <input type={"checkbox"} checked={leasingfaehigkeit} onChange={() => {
                        setLeasingfaehigkeit(d => !d)
                        }} className="mr-2" />
                    Leasingfähigkeit
                </label>
                <label className={classes.checkboxname}>
                    <input type={"checkbox"} checked={schisack} onChange={() => {
                        setSchisack(d => !d)
                        }} className="mr-2" />
                    Schisack
                </label>
                <label className={classes.checkboxname}>
                    <input type={"checkbox"} checked={automatischeHeckklappe} onChange={() => {
                        setAutomatischeHeckklappe(d => !d)
                        }} className="mr-2" />
                    Aut. Heckklappe
                </label>
                <label className={classes.checkboxname}>
                    <input type={"checkbox"} checked={ledscheinwerfer} onChange={() => {
                        setLedscheinwerfer(d => !d)
                        }} className="mr-2" />
                    LED-Scheinwerfer
                </label> 
                <label className={classes.checkboxname}>
                    <input type={"checkbox"} checked={seitenairbag} onChange={() => {
                        setSeitenairbag(d => !d)
                        }} className="mr-2" />
                    Seitenairbags
                </label>  
                <label className={classes.checkboxname}>
                    <input type={"checkbox"} checked={behindertenGerecht} onChange={() => {
                        setBehindertenGerecht(d => !d)
                        }} className="mr-2" />
                    Behindertengerecht
                </label>  
                <label className={classes.checkboxname}>
                    <input type={"checkbox"} checked={lederausstattung} onChange={() => {
                        setLederausstattung(d => !d)
                        }} className="mr-2" />
                    Lederausstattung
                </label>  
                <label className={classes.checkboxname}>
                    <input type={"checkbox"} checked={serviceGepflegt} onChange={() => {
                        setServiceGepflegt(d => !d)
                        }} className="mr-2" />
                    Servicegepflegt
                </label>  
                <label className={classes.checkboxname}>
                    <input type={"checkbox"} checked={beifahrerairbag} onChange={() => {
                        setBeifahrerairbag(d => !d)
                        }} className="mr-2" />
                    Beifahrerairbags
                </label>  
                <label className={classes.checkboxname}>
                    <input type={"checkbox"} checked={lederlenkrad} onChange={() => {
                        setLederlenkrad(d => !d)
                        }} className="mr-2" />
                    Lederlenkrad
                </label>  
                <label className={classes.checkboxname}>
                    <input type={"checkbox"} checked={servolenkung} onChange={() => {
                        setServolenkung(d => !d)
                        }} className="mr-2" />
                    Servolenkung
                </label>  
                <label className={classes.checkboxname}>
                    <input type={"checkbox"} checked={bluethoot} onChange={() => {
                        setBluethoot(d => !d)
                        }} className="mr-2" />
                    Bluethoot / USB
                </label>  
                <label className={classes.checkboxname}>
                    <input type={"checkbox"} checked={alufelgen} onChange={() => {
                        setAlufelgen(d => !d)
                        }} className="mr-2" />
                    Leichtmetall-/Alufelgen
                </label>  
                <label className={classes.checkboxname}>
                    <input type={"checkbox"} checked={sitzheizung} onChange={() => {
                        setSitzheizung(d => !d)
                        }} className="mr-2" />
                    Sitzheizung
                </label>  
                <label className={classes.checkboxname}>
                    <input type={"checkbox"} checked={bordcomputer} onChange={() => {
                        setBordcomputer(d => !d)
                        }} className="mr-2" />
                    Bordcomputer
                </label>  
                <label className={classes.checkboxname}>
                    <input type={"checkbox"} checked={lenkradheizung} onChange={() => {
                        setLenkradheizung(d => !d)
                        }} className="mr-2" />
                    Lenkradheizung
                </label>  
                <label className={classes.checkboxname}>
                    <input type={"checkbox"} checked={sperrdifferential} onChange={() => {
                        setSperrdifferential(d => !d)
                        }} className="mr-2" />
                    Sperrdifferential
                </label>  
                <label className={classes.checkboxname}>
                    <input type={"checkbox"} checked={cd} onChange={() => {
                        setCd(d => !d)
                        }} className="mr-2" />
                    CD Player
                </label>  
                <label className={classes.checkboxname}>
                    <input type={"checkbox"} checked={lichtsensor} onChange={() => {
                        setLichtsensor(d => !d)
                        }} className="mr-2" />
                    Lichtsensor
                </label>  
                <label className={classes.checkboxname}>
                    <input type={"checkbox"} checked={sportfahrwerk} onChange={() => {
                        setSportfahrwerk(d => !d)
                        }} className="mr-2" />
                    Sportfahrwerk
                </label>  
                <label className={classes.checkboxname}>
                    <input type={"checkbox"} checked={dachgepaecktraeger} onChange={() => {
                        setDachgepaecktraeger(d => !d)
                        }} className="mr-2" />
                    Dachgepäckträger
                </label>  
                <label className={classes.checkboxname}>
                    <input type={"checkbox"} checked={lordosenstuetze} onChange={() => {
                        setLordoesenstuetze(d => !d)
                        }} className="mr-2" />
                    Lordosenstütze
                </label>  
                <label className={classes.checkboxname}>
                    <input type={"checkbox"} checked={sportpaket} onChange={() => {
                        setSportpaket(d => !d)
                        }} className="mr-2" />
                    Sportpaket
                </label>  
                <label className={classes.checkboxname}>
                    <input type={"checkbox"} checked={dachreling} onChange={() => {
                        setDachreling(d => !d)
                        }} className="mr-2" />
                    Dachreling
                </label>  
                <label className={classes.checkboxname}>
                    <input type={"checkbox"} checked={mp3} onChange={() => {
                        setMp3(d => !d)
                        }} className="mr-2" />
                    Media-Interface / mp3
                </label>  
                <label className={classes.checkboxname}>
                    <input type={"checkbox"} checked={sportsitze} onChange={() => {
                        setSportsitze(d => !d)
                        }} className="mr-2" />
                    Sportsitze
                </label>  
                <label className={classes.checkboxname}>
                    <input type={"checkbox"} checked={einparkhilfe} onChange={() => {
                        setEinparkhilfe(d => !d)
                        }} className="mr-2" />
                    Einparkhilfe
                </label>  
                <label className={classes.checkboxname}>
                    <input type={"checkbox"} checked={metallicLackierung} onChange={() => {
                        setMetalliclackierung(d => !d)
                        }} className="mr-2" />
                    Metallic-Lackierung
                </label>  
                <label className={classes.checkboxname}>
                    <input type={"checkbox"} checked={spurhalteassistent} onChange={() => {
                        setSpurhalteassistent(d => !d)
                        }} className="mr-2" />
                    Spurhalteassistent
                </label>  
                <label className={classes.checkboxname}>
                    <input type={"checkbox"} checked={elektrfensterheber} onChange={() => {
                        setElektrfensterheber(d => !d)
                        }} className="mr-2" />
                    elektr. Fensterheber
                </label>  
                <label className={classes.checkboxname}>
                    <input type={"checkbox"} checked={mittelarmlehne} onChange={() => {
                        setMittelarmlehne(d => !d)
                        }} className="mr-2" />
                    Mittelarmlehne
                </label>  
                <label className={classes.checkboxname}>
                    <input type={"checkbox"} checked={stabilitaetsprogramme} onChange={() => {
                        setStabilitaetsprogramme(d => !d)
                        }} className="mr-2" />
                    Stabilitätsprogramme
                </label>  
                <label className={classes.checkboxname}>
                    <input type={"checkbox"} checked={elektrsitze} onChange={() => {
                        setElektrsitze(d => !d)
                        }} className="mr-2" />
                    elektr. Sitze
                </label>  
                <label className={classes.checkboxname}>
                    <input type={"checkbox"} checked={multifunktionslenkrad} onChange={() => {
                        setMultifunktionslenkrad(d => !d)
                        }} className="mr-2" />
                    Multifunktionslenkrad
                </label>  
                <label className={classes.checkboxname}>
                    <input type={"checkbox"} checked={standheizung} onChange={() => {
                        setStandheizung(d => !d)
                        }} className="mr-2" />
                    Standheizung
                </label>  
                <label className={classes.checkboxname}>
                    <input type={"checkbox"} checked={elektrseitenspiegel} onChange={() => {
                        setElektrseitenspiegel(d => !d)
                        }} className="mr-2" />
                    elektr. Spiegel
                </label>  
                <label className={classes.checkboxname}>
                    <input type={"checkbox"} checked={mwstAusweisbar} onChange={() => {
                        setMwstAusweisbar(d => !d)
                        }} className="mr-2" />
                    MwSt. ausweisbar
                </label>  
                <label className={classes.checkboxname}>
                    <input type={"checkbox"} checked={startstopauto} onChange={() => {
                        setStartstopauto(d => !d)
                        }} className="mr-2" />
                    Start/Stopp-Automatik
                </label>  
                <label className={classes.checkboxname}>
                    <input type={"checkbox"} checked={fahrerairbag} onChange={() => {
                        setFahrerairbag(d => !d)
                        }} className="mr-2" />
                    Fahrerairbag
                </label>  
                <label className={classes.checkboxname}>
                    <input type={"checkbox"} checked={navigationssystem} onChange={() => {
                        setNavigationssystem(d => !d)
                        }} className="mr-2" />
                    Navigationssystem
                </label>  
                <label className={classes.checkboxname}>
                    <input type={"checkbox"} checked={tagfahrlicht} onChange={() => {
                        setTagfahrlicht(d => !d)
                        }} className="mr-2" />
                    Tagfahrlicht
                </label>  
                <label className={classes.checkboxname}>
                    <input type={"checkbox"} checked={fernlichassistent} onChange={() => {
                        setFernlichassistent(d => !d)
                        }} className="mr-2" />
                    Fernlichtassistent
                </label>  
                <label className={classes.checkboxname}>
                    <input type={"checkbox"} checked={nebelscheinwerfer} onChange={() => {
                        setNebelscheinwerfer(d => !d)
                        }} className="mr-2" />
                    Nebelscheinwerfer
                </label>  
                <label className={classes.checkboxname}>
                    <input type={"checkbox"} checked={teilAutonomesFahren} onChange={() => {
                        setTeilAutonomesFahren(d => !d)
                        }} className="mr-2" />
                    Teilautonomes Fahren
                </label>  
                <label className={classes.checkboxname}>
                    <input type={"checkbox"} checked={freisprecheinrichtung} onChange={() => {
                        setFreisprecheinrichtung(d => !d)
                        }} className="mr-2" />
                    Freisprecheinrichtung
                </label>
                <label className={classes.checkboxname}>
                    <input type={"checkbox"} checked={nichtraucherfahrzeug} onChange={() => {
                        setNichtraucherFahrzeug(d => !d)
                        }} className="mr-2" />
                    Nichtraucherfahrzeug
                </label>  
                <label className={classes.checkboxname}>
                    <input type={"checkbox"} checked={tempomat} onChange={() => {
                        setTempomat(d => !d)
                        }} className="mr-2" />
                    Tempomat
                </label>  
                <label className={classes.checkboxname}>
                    <input type={"checkbox"} checked={beheizbareFrontscheibe} onChange={() => {
                        setBeheizbareFrontscheibe(d => !d)
                        }} className="mr-2" />
                    Frontscheibenheizung
                </label>  
                <label className={classes.checkboxname}>
                    <input type={"checkbox"} checked={notbremsassistent} onChange={() => {
                        setNotbremsassistent(d => !d)
                        }} className="mr-2" />
                    Notbremsassistent
                </label>  
                <label className={classes.checkboxname}>
                    <input type={"checkbox"} checked={totwinkelAssistent} onChange={() => {
                        setTotwinkelAssitent(d => !d)
                        }} className="mr-2" />
                    Totwinkelassistent
                </label>  
                <label className={classes.checkboxname}>
                    <input type={"checkbox"} checked={induktionsladen} onChange={() => {
                        setInduktionsladen(d => !d)
                        }} className="mr-2" />
                    Handy induktiv laden
                </label>  
                <label className={classes.checkboxname}>
                    <input type={"checkbox"} checked={notrufsystem} onChange={() => {
                        setNotrufsystem(d => !d)
                        }} className="mr-2" />
                    Notrufsystem
                </label>  
                <label className={classes.checkboxname}>
                    <input type={"checkbox"} checked={winterpaket} onChange={() => {
                        setWinterpaket(d => !d)
                        }} className="mr-2" />
                    Winterpaket
                </label>  
                <label className={classes.checkboxname}>
                    <input type={"checkbox"} checked={headupDisplay} onChange={() => {
                        setHeadupDisplay(d => !d)
                        }} className="mr-2" />
                    Head-Up-Display
                </label>  
                <label className={classes.checkboxname}>
                    <input type={"checkbox"} checked={panoramadach} onChange={() => {
                        setPanoramadach(d => !d)
                        }} className="mr-2" />
                    Panoramadach
                </label>  
                <label className={classes.checkboxname}>
                    <input type={"checkbox"} checked={xenonscheinwerfer} onChange={() => {
                        setXenonscheinwerfer(d => !d)
                        }} className="mr-2" />
                    Xenon
                </label>  
                <label className={classes.checkboxname}>
                    <input type={"checkbox"} checked={isofix} onChange={() => {
                        setIsofix(d => !d)
                        }} className="mr-2" />
                    ISOFIX
                </label>  
                <label className={classes.checkboxname}>
                    <input type={"checkbox"} checked={einparkhilfeSensorenHinten} onChange={() => {
                        setEinparkhilfeSensorenHinten(d => !d)
                        }} className="mr-2" />
                    Parksensor hinten
                </label>  
                <label className={classes.checkboxname}>
                    <input type={"checkbox"} checked={zentralverriegelung} onChange={() => {
                        setZentralverriegelung(d => !d)
                        }} className="mr-2" />
                Zentralverriegelung
                </label>  
                <label className={classes.checkboxname}>
                    <input type={"checkbox"} checked={schluessellose} onChange={() => {
                        setSchluessellose(d => !d)
                        }} className="mr-2" />
                Keyless entry
                </label>  
            </div>
            </>
            {/* Beschreibung */}
            <>
            <div className={classes.point}>3. Beschreibung</div>
            <div className={classes.beschreibungarea}>
                <textarea rows={10} placeholder={`z.B.: Verkaufsgrund, Nichtraucherfahrzeug, Vignette, Serviceheft, Mängel,
         Besonderheiten wie nachträglich eingebautes Zubehör, ...`} className={classes.area} value={beschreibung} onChange={(e) => setBeschreibung(e.target.value)} />
            </div>
            </>
            {/* Kontakt */}
            <>
            <div className={classes.point}>4. Kontakt</div>
            <div className={classes.flexer}>
                <span className={classes.valueleft}>Name</span>
                <span className={classes.valueright}><input type={"text"} className={classes.input} disabled defaultValue={name} /></span>
            </div>
            <div className={classes.info}>Deinen Namen kannst du in deinem Profil ändern.</div>
            <br></br>
            <div className={classes.flexer}>
                <span className={classes.valueleft}>Telefonnummer</span>
                <span className={classes.valueright}><input type={"text"} value={tel} className={classes.input} onChange={(e) => setTel(e.target.value)} /></span>
            </div>
            <div className={classes.flexer}>
                <span className={classes.valueleft}>Telefonnummer 2</span>
                <span className={classes.valueright}><input type={"text"} className={classes.input} value={tel2} onChange={(e) => setTel2(e.target.value)} placeholder="(optional)" /></span>
            </div>
            <div className={classes.flexer}>
                <span className={classes.valueleft}> </span>
                <span className={classes.valueright}>
                    <label htmlFor='showMail'>
                        <input id='showMail' type={"checkbox"} checked={showMail} onChange={(e) => setShowMail(d => !d)} className={"mr-2"} />
                        Telefonnummer(n) anzeigen
                    </label>
                </span>
            </div>
            <div className={classes.flexer}>
                <span className={classes.valueleft}> </span>
                <span className={classes.valueright}>
                    Erhöhe deine Verkaufschancen mit der Angabe deiner Telefonnummer.
                </span>
            </div>
            <div className={classes.flexer}>
                <span className={classes.valueleft}>Email</span>
                <span className={classes.valueright}><input type={"email"} className={classes.input} disabled defaultValue={mail} /></span>
            </div>
            <div className={classes.flexer}>
                <span className={classes.valueleft}> </span>
                <span className={classes.valueright}>
                    Deine E-Mail-Adresse kannst du in deinem Profil ändern.<br></br>
                    Die E-Mail-Adresse scheint in der Anzeige NICHT auf.
                </span>
            </div>
            </>
            {/* Verkaufsort */}
            <>
            <div className={classes.point}>5. Verkaufsort</div>
            <div className={classes.flexer}>
                <span className={classes.valueleft}>Straße</span>
                <span className={classes.valueright}><input type={"text"} className={classes.input} value={strasse} onChange={(e) => setStrasse(e.target.value)} /></span>
            </div>
            <div className={classes.flexer}>
                <span className={classes.valueleft}>Land *</span>
                <span className={classes.valueright}>
                <Select 
                    styles={style}
                    options={laender}
                    placeholder={laender[0].label}
                    defaultInputValue={laender[0].label}
                    className='w-full'
                    isSearchable={true}
                    onChange={(e) => setLand(e.value)}
                    />
                </span>
            </div>
            <div className={classes.flexer}>
                <span className={classes.valueleft}>PLZ und Ort *</span>
                <span className={classes.valueright}>
                <input type={"number"} value={plz} min={0} onChange={(e) => setPlz(e.target.value)} className={classes.inputplz}/>
                <Select 
                    styles={style}
                    options={laender}
                    placeholder={laender[0].label}
                    defaultInputValue={laender[0].label}
                    className='w-full'
                    isSearchable={true}
                    isDisabled={plz == ""}

                    onChange={(e) => setLand(e.value)}
                    />
                </span>
            </div>
            <div className='flex'>
            {stepActive > 1 && <div className={`${classes.savebtn} mr-4`} onClick={() => setStepActive(d => d - 1)}>Zurück</div>}
                <button className={classes.savebtn} onClick={() => {
                    if(nationalerCode != null){
                        setBrand(null);
                        setModel(null);
                    }
                    if(brand != null && model != null){
                        setNationalerCode(null);
                    }
                    if(month != null && year != null){
                        if(brand != null && model != null){
                            setStepActive(d => d + 1)
                        }
                        else if(nationalerCode != null){
                            setStepActive(d => d + 1)
                        } else{

                        }
                    }
                    setShowValidationTextStep1(true); 
                }} type={"submit"}>Weiter</button>
            </div>
            </>
            </>}
            <>
            {stepActive == 3 && <>
                <div className={classes.heading}>BILDER HOCHLADEN</div>

                <div className={classes.point}>Fügen Sie Ihrer Anzeige Bilder hinzu</div>
                <div className={classes.text}>Klicken Sie zur Auswahl des Titelbildes auf das jeweilige Bild.</div>
                <div className={`${classes.text} mb-4`}>Das als Titelbild ausgewählte Bild bekommt eine gelbe Umrandung:<div className={classes.bordi}></div></div>
                <div className={classes.bildhochladenbtn}>Jetzt Bilder hochladen
                <input
                    id="fileSelect"
                    type="file"
                    accept='image/png, image/jpg, image/jpeg'
                    multiple={true}
                    onChange={e => {
                        console.log(e)
                        const files = e.target.files;
                        setImages(() => {
                            var arr = [...images];
                            for(let i = 0; i < files.length; i++){
                                arr.push(URL.createObjectURL(files[i]));
                            }
                            return arr;
                        });
                    }
                        
                        }
                    className={classes.selectFile}
                    />
                </div>
                {titelbild != null && <div className={classes.titelbildimg}>
                    <div className={classes.titleimg}>
                        <span className={classes.titelbildtext}>Titelbild</span>
                        <img src={titelbild} className={`${classes.half}`}/>
                    </div>
                </div>}
                <div className={classes.delallimages} onClick={() => setSecurityQuestion(true)}>
                    <Bin className={"mr-2"} />Alle Bilder löschen
                </div>
                {securityQuestion == true && <div className={classes.sicherheitsabfrage}>
                    <div className={classes.securitycontainer}>
                        <div className={classes.header}>Sind Sie sicher?</div>
                        <div className={`${classes.text} ${classes.center}`}>Möchten Sie wirklich alle Bilder löschen?</div>
                        <div className='flex items-center w-full mt-2'>
                            <div className={`${classes.button} mr-2`} onClick={() => setSecurityQuestion(false)}>Schließen</div>
                            <div className={`${classes.button} ${classes.red}`} onClick={() => {
                                setImages([]);
                                setSecurityQuestion(false);
                            }}>Löschen</div>
                        </div>
                    </div>
                </div>}
                <div className={classes.imagescontainer}>
                {images.map((img, index) => <div key={index} onClick={() => setTitelbild(img)} className={`${classes.imgcontainer} `}>
                    <img src={img} className={`${img == titelbild && classes.borderyellow} ${classes.img}`} />
                    <div className={classes.del} onClick={() => delImg(index)} ><Bin className={classes.bin} />Löschen</div>
                </div>)}
                </div>
                <div className='flex'>
            {stepActive > 1 && <div className={`${classes.savebtn} mr-4`} onClick={() => setStepActive(d => d - 1)}>Zurück</div>}
                <button className={classes.savebtn} onClick={() => {
                    if(nationalerCode != null){
                        setBrand(null);
                        setModel(null);
                    }
                    if(brand != null && model != null){
                        setNationalerCode(null);
                    }
                    if(month != null && year != null){
                        if(brand != null && model != null){
                            setStepActive(d => d + 1)
                        }
                        else if(nationalerCode != null){
                            setStepActive(d => d + 1)
                        } else{

                        }
                    }
                    setShowValidationTextStep1(true); 
                }} type={"submit"}>Weiter</button>
            </div>
            </>}
            {stepActive == 4 && <>
                <div className={classes.heading}>GIGA POWER</div>
                <div className={classes.description}>Anzeige schneller verkaufen</div>
                <div className={classes.point}>Schneller verkaufen mit Zusatzprodukten</div>
                <div className={classes.gridtwolayout}>
                <div className={classes.cardcontainer}>
              <div className={classes.padding}>
                <h2 className={classes.cardheading}>STARTSEITE SCHAUFENSTER</h2>
                <p className={classes.carddescription}>
                  Sichern Sie sich Ihren Platz im Schaufenster auf der
                  Startseite und sorgen Sie dafür, dass Ihr Inserat sofort
                  gesehen wird.
                </p>
                <p className={classes.showexample}>
                  Wie sieht mein Inserat aus?
                </p>
                <button className={classes.addtocart} onClick={() => {
                  handleAddToCart("STARTSEITE SCHAUFENSTER", selectedItemName1, selectedItemPrice1);
                }}>
                  Zum Warenkorb hinzufügen
                </button>
              </div>

              {/* CARD-CONTENT */}
              <div className={classes.grid}>
                {typeOpen1 == false ? (
                  <div
                    className={classes.productsclosed}
                    onClick={() => setTypeOpen1((d) => !d)}
                  >
                    <div className={classes.productnameclosed}>
                      {selectedItemName1}
                    </div>
                    <div className={classes.expandright}>
                      <div className={classes.productpriceclosed}>
                        {selectedItemPrice1},00 €
                      </div>
                      <Expand className={classes.expand} />
                    </div>
                  </div>
                ) : (
                  <div className={classes.productsopen}>
                    <div className={classes.toprow}>
                      <div className={classes.cardheading}>
                        STARTSEITE SCHAUFENSTER
                      </div>
                      <Closer
                        className={classes.closer}
                        onClick={() => setTypeOpen1((d) => !d)}
                      />
                    </div>
                    <div
                      className={classes.rowlight}
                      onClick={() => {
                        setSelectedItemPrice1(25);
                        setSelectedItemName1("1 Woche");
                        setTypeOpen1((d) => !d);
                      }}
                    >
                      <p className={classes.productnameopen}>1 Woche</p>
                      <div className={classes.productpriceopen}>25,00 €</div>
                    </div>
                    <div
                      className={classes.row}
                      onClick={() => {
                        setSelectedItemPrice1(45);
                        setSelectedItemName1("2 Woche");
                        setTypeOpen1((d) => !d);
                      }}
                    >
                      <p className={classes.productnameopen}>2 Woche</p>
                      <div className={classes.productpriceopen}>45,00 €</div>
                    </div>
                    <div
                      className={classes.rowlight}
                      onClick={() => {
                        setSelectedItemPrice1(65);
                        setSelectedItemName1("3 Woche");
                        setTypeOpen1((d) => !d);
                      }}
                    >
                      <p className={classes.productnameopen}>3 Woche</p>
                      <div className={classes.productpriceopen}>65,00 €</div>
                    </div>
                    <div
                      className={classes.row}
                      onClick={() => {
                        setSelectedItemPrice1(85);
                        setSelectedItemName1("4 Woche");
                        setTypeOpen1((d) => !d);
                      }}
                    >
                      <p className={classes.productnameopen}>4 Woche</p>
                      <div className={classes.productpriceopen}>85,00 €</div>
                    </div>
                  </div>
                )}
              </div>
                 </div>
                 <div className={classes.cardcontainer}>
              <div className={classes.padding}>
                <h2 className={classes.cardheading}>TOP INSERAT</h2>
                <p className={classes.carddescription}>
                Platzieren Sie Ihr Inserat ganz oben auf
der Auflistungsseite und zeigen Sie Ihren Beitrag
über anderen Ergebnissen an.
                </p>
                <p className={classes.showexample}>
                  Wie sieht mein Inserat aus?
                </p>
                <button className={classes.addtocart} onClick={() => {
                  handleAddToCart("TOP INSERAT", selectedItemName2, selectedItemPrice2);
                }}>
                  Zum Warenkorb hinzufügen
                </button>
              </div>

              {/* CARD-CONTENT */}
              <div className={classes.grid}>
                {typeOpen2 == false ? (
                  <div
                    className={classes.productsclosed}
                    onClick={() => setTypeOpen2(d => !d)}
                  >
                    <div className={classes.productnameclosed}>
                      {selectedItemName2}
                    </div>
                    <div className={classes.expandright}>
                      <div className={classes.productpriceclosed}>
                        {selectedItemPrice2},00 €
                      </div>
                      <Expand className={classes.expand} />
                    </div>
                  </div>
                ) : (
                  <div className={classes.productsopen}>
                    <div className={classes.toprow}>
                      <div className={classes.cardheading}>
                        TOP INSERAT
                      </div>
                      <Closer
                        className={classes.closer}
                        onClick={() => setTypeOpen2(d => !d)}
                      />
                    </div>
                    <div
                      className={classes.rowlight}
                      onClick={() => {
                        setSelectedItemPrice2(114);
                        setSelectedItemName2("1 Woche");
                        setTypeOpen2((d) => !d);
                      }}
                    >
                      <p className={classes.productnameopen}>1 Woche</p>
                      <div className={classes.productpriceopen}>114,00 €</div>
                    </div>
                    <div
                      className={classes.row}
                      onClick={() => {
                        setSelectedItemPrice2(228);
                        setSelectedItemName2("2 Woche");
                        setTypeOpen2((d) => !d);
                      }}
                    >
                      <p className={classes.productnameopen}>2 Woche</p>
                      <div className={classes.productpriceopen}>228,00 €</div>
                    </div>
                    <div
                      className={classes.rowlight}
                      onClick={() => {
                        setSelectedItemPrice2(342);
                        setSelectedItemName2("3 Woche");
                        setTypeOpen2((d) => !d);
                      }}
                    >
                      <p className={classes.productnameopen}>3 Woche</p>
                      <div className={classes.productpriceopen}>342,00 €</div>
                    </div>
                    <div
                      className={classes.row}
                      onClick={() => {
                        setSelectedItemPrice2(456);
                        setSelectedItemName2("4 Woche");
                        setTypeOpen2((d) => !d);
                      }}
                    >
                      <p className={classes.productnameopen}>4 Woche</p>
                      <div className={classes.productpriceopen}>456,00 €</div>
                    </div>
                  </div>
                )}
              </div>
            </div>
            <div className={classes.cardcontainer}>
              <div className={classes.padding}>
                <h2 className={classes.cardheading}>GIGA LABEL</h2>
                <p className={classes.carddescription}>
                Lassen Sie das Fahrzeug in der Liste mit dem Label 
„GIGA“ erscheinen 
und in der Kategorie „GIGA LABEL“ sein.
                </p>
                <p className={classes.showexample}>
                  Wie sieht mein Inserat aus?
                </p>
                <button className={classes.addtocart} onClick={() => {
                  handleAddToCart("GIGA LABEL", selectedItemName3, selectedItemPrice3);
                }}>
                  Zum Warenkorb hinzufügen
                </button>
              </div>

              {/* CARD-CONTENT */}
              <div className={classes.grid}>
                {typeOpen3 == false ? (
                  <div
                    className={classes.productsclosed}
                    onClick={() => setTypeOpen3((d) => !d)}
                  >
                    <div className={classes.productnameclosed}>
                      {selectedItemName3}
                    </div>
                    <div className={classes.expandright}>
                      <div className={classes.productpriceclosed}>
                        {selectedItemPrice3},00 €
                      </div>
                      <Expand className={classes.expand} />
                    </div>
                  </div>
                ) : (
                  <div className={classes.productsopen}>
                    <div className={classes.toprow}>
                      <div className={classes.cardheading}>
                        GIGA LABEL
                      </div>
                      <Closer
                        className={classes.closer}
                        onClick={() => setTypeOpen3(d => !d)}
                      />
                    </div>
                    <div
                      className={classes.rowlight}
                      onClick={() => {
                        setSelectedItemPrice3(3);
                        setSelectedItemName3("1 Tag");
                        setTypeOpen3(d => !d);
                      }}
                    >
                      <p className={classes.productnameopen}>1 Tag</p>
                      <div className={classes.productpriceopen}>3,00 €</div>
                    </div>
                    <div
                      className={classes.row}
                      onClick={() => {
                        setSelectedItemPrice3(8);
                        setSelectedItemName3("3 Tage");
                        setTypeOpen3(d => !d);
                      }}
                    >
                      <p className={classes.productnameopen}>3 Tage</p>
                      <div className={classes.productpriceopen}>8,00 €</div>
                    </div>
                    <div
                      className={classes.rowlight}
                      onClick={() => {
                        setSelectedItemPrice3(18);
                        setSelectedItemName3("7 Tage");
                        setTypeOpen3((d) => !d);
                      }}
                    >
                      <p className={classes.productnameopen}>7 Tage</p>
                      <div className={classes.productpriceopen}>18,00 €</div>
                    </div>
                    <div
                      className={classes.row}
                      onClick={() => {
                        setSelectedItemPrice3(30);
                        setSelectedItemName3("14 Tage");
                        setTypeOpen3(d => !d);
                      }}
                    >
                      <p className={classes.productnameopen}>14 Tage</p>
                      <div className={classes.productpriceopen}>30,00 €</div>
                    </div>
                  </div>
                )}
              </div>
            </div>
            <div className={classes.cardcontainer}>
              <div className={classes.padding}>
                <h2 className={classes.cardheading}>DATUMSAKTUALISIERUNG</h2>
                <p className={classes.carddescription}>
                Aktualisieren Sie das Veröffentlichungsdatum, damit Ihre 
Anzeige bei Suchanfragen einen hohen Rang einnimmt.<br></br><br></br>
                </p>
                <p className={classes.showexample}>
                  Wie sieht mein Inserat aus?
                </p>
                <button className={classes.addtocart} onClick={() => {
                  handleAddToCart("DATUMSAKTUALISIERUNG", selectedItemName4, selectedItemPrice4);
                }}>
                  Zum Warenkorb hinzufügen
                </button>
              </div>

              {/* CARD-CONTENT */}
              <div className={classes.grid}>
                {typeOpen4 == false ? (
                  <div
                    className={classes.productsclosed}
                    onClick={() => setTypeOpen4(d => !d)}
                  >
                    <div className={classes.productnameclosed}>
                      {selectedItemName4}
                    </div>
                    <div className={classes.expandright}>
                      <div className={classes.productpriceclosed}>
                        {selectedItemPrice4},00 €
                      </div>
                      <Expand className={classes.expand} />
                    </div>
                  </div>
                ) : (
                  <div className={classes.productsopen}>
                    <div className={classes.toprow}>
                      <div className={classes.cardheading}>
                        DATUMSAKTUALISIERUNG
                      </div>
                      <Closer
                        className={classes.closer}
                        onClick={() => setTypeOpen4(d => !d)}
                      />
                    </div>
                    <div
                      className={classes.rowlight}
                      onClick={() => {
                        setSelectedItemPrice4(3);
                        setSelectedItemName4("1-mal");
                        setTypeOpen4((d) => !d);
                      }}
                    >
                      <p className={classes.productnameopen}>1-mal</p>
                      <div className={classes.productpriceopen}>3,00 €</div>
                    </div>
                  </div>
                )}
              </div>
            </div>
            <div className={classes.cardcontainer}>
              <div className={classes.padding}>
                <h2 className={classes.cardheading}>FETTER TEXT UND FARBIGER RAHMEN</h2>
                <p className={classes.carddescription}>
                Der Titel der Anzeige wird fett geschrieben und findet auf 
einem farbigen Hintergrund statt.<br></br><br></br>
                </p>
                <p className={classes.showexample}>
                  Wie sieht mein Inserat aus?
                </p>
                <button className={classes.addtocart} onClick={() => {
                  handleAddToCart("FETTER TEXT UND FARBIGER RAHMEN", selectedItemName5, selectedItemPrice5);
                }}>
                  Zum Warenkorb hinzufügen
                </button>
              </div>

              {/* CARD-CONTENT */}
              <div className={classes.grid}>
                {typeOpen5 == false ? (
                  <div
                    className={classes.productsclosed}
                    onClick={() => setTypeOpen5(d => !d)}
                  >
                    <div className={classes.productnameclosed}>
                      {selectedItemName5}
                    </div>
                    <div className={classes.expandright}>
                      <div className={classes.productpriceclosed}>
                        {selectedItemPrice5},00 €
                      </div>
                      <Expand className={classes.expand} />
                    </div>
                  </div>
                ) : (
                  <div className={classes.productsopen}>
                    <div className={classes.toprow}>
                      <div className={classes.cardheading}>
                        FARBIGER RAHMEN UND FARBIGER HINTERGRUND
                      </div>
                      <Closer
                        className={classes.closer}
                        onClick={() => setTypeOpen5(d => !d)}
                      />
                    </div>
                    <div
                      className={classes.rowlight}
                      onClick={() => {
                        setSelectedItemPrice5(4);
                        setSelectedItemName5("30 Tage");
                        setTypeOpen5(d => !d);
                      }}
                    >
                      <p className={classes.productnameopen}>30 Tage</p>
                      <div className={classes.productpriceopen}>4,00 €</div>
                    </div>
                  </div>
                )}
              </div>
            </div>
            <div className={classes.cardcontainer}>
              <div className={classes.padding}>
                <h2 className={classes.cardheading}>50 FOTO RECHTE</h2>
                <p className={classes.carddescription}>
                Fügen Sie mehr Fotos hinzu, 
indem Sie das Limit von 25 auf 50 Fotos erhöhen.<br></br><br></br>
                </p>
                <p className={classes.showexample}>
                  Wie sieht mein Inserat aus?
                </p>
                <button className={classes.addtocart} onClick={() => {
                  handleAddToCart("50 FOTO RECHTE", selectedItemName6, selectedItemPrice6);
                }}>
                  Zum Warenkorb hinzufügen
                </button>
              </div>

              {/* CARD-CONTENT */}
              <div className={classes.grid}>
                {typeOpen6 == false ? (
                  <div
                    className={classes.productsclosed}
                    onClick={() => setTypeOpen6(d => !d)}
                  >
                    <div className={classes.productnameclosed}>
                      {selectedItemName6}
                    </div>
                    <div className={classes.expandright}>
                      <div className={classes.productpriceclosed}>
                        {selectedItemPrice6},00 €
                      </div>
                      <Expand className={classes.expand} />
                    </div>
                  </div>
                ) : (
                  <div className={classes.productsopen}>
                    <div className={classes.toprow}>
                      <div className={classes.cardheading}>
                        50 FOTO RECHTE
                      </div>
                      <Closer
                        className={classes.closer}
                        onClick={() => setTypeOpen6(d => !d)}
                      />
                    </div>
                    <div
                      className={classes.rowlight}
                      onClick={() => {
                        setSelectedItemPrice6(4);
                        setSelectedItemName6("1-mal");
                        setTypeOpen6((d) => !d);
                      }}
                    >
                      <p className={classes.productnameopen}>1-mal</p>
                      <div className={classes.productpriceopen}>4,00 €</div>
                    </div>
                  </div>
                )}
              </div>
            </div>
                </div>
                <div className={classes.c2}>
        <div className={classes.orderleft}>
          {cart.length != 0 ? cart.map((item, index) => <div key={index} className={classes.ordercontainer}>
            <div className={classes.ordervalue}>{item.value}</div>
            <div className={classes.last}>
            <div className={classes.ordername}>{item.name}</div>
              <div className={classes.orderprice}>{item.price},00 €</div>
              <Deleter className={classes.deleter} onClick={() => {
                deleteFromCart(index, item.price);
              }} />
            </div>
          </div>) : <h1 className={classes.warning}>WARENKORB LEER!</h1>}
        
        </div>
        <div className={classes.orderright}>
            <div className={classes.right}>
              <div className={classes.total}>GESAMT</div>
              <div className={classes.totalprice}>{totalPrice},00 €</div>
            </div>
        </div>
      </div>
      <div className={classes.littletext}>Nach Ablauf des Werbezeitraums wird dein Inserat zu einem Basis-Inserat</div>
      <div className={classes.gutscheincode}>
        <label className={classes.gclabel}>
          <div className={classes.gutscheincodelabel} >Gutscheincode</div>
          <input type={"text"} placeholder={"Gutscheincode"} onChange={(e) => setGutscheincode(e.target.value)} className={classes.gutscheincodeinput} />
          <button className={classes.codebtn}>Code Einlösen</button>
        </label>
      </div>
      <div className={classes.zahlungsmethoden}>
                <span className={classes.zahl}><Schloss className={classes.schloss} /> <span className={classes.zahlungtext}>Sichere Zahlung<br></br>per SSL-Verschlüsselung</span></span>
                <Sofort className={classes.sofort} />
                <Visa className={classes.sofort} />
                <Klarna className={classes.sofort} />
                <Eps className={classes.sofort} />
                <ApplePay className={classes.sofort} />
            </div>
      <div className='flex items-center'>
      {stepActive > 1 && <div className={`${classes.savebtn} mr-4`} onClick={() => setStepActive(d => d - 1)}>Zurück</div>}
                <button className={classes.savebtn} onClick={() => {
                    if(nationalerCode != null){
                        setBrand(null);
                        setModel(null);
                    }
                    if(brand != null && model != null){
                        setNationalerCode(null);
                    }
                    if(month != null && year != null){
                        if(brand != null && model != null){
                            setStepActive(d => d + 1)
                        }
                        else if(nationalerCode != null){
                            setStepActive(d => d + 1)
                        } else{

                        }
                    }
                    setShowValidationTextStep1(true); 
                }} type={"submit"}>Weiter</button>
      </div>
            </>}
            {stepActive == 5 && <>
             <div className={classes.heading}>Veröffentlichen</div>
            <div className={classes.publishdescription}>
              <PublishIcon className={classes.publishicon} />
              <div className={classes.publishtext}>
              Du bist fast fertig! Klicke als letzten Schritt auf BEZAHLEN UND VERÖFFENTLICHEN<br></br>
und deine Anzeige ist in Kürze online! Solltest du noch etwas ändern wollen, <br></br>
kannst du den gewünschten Schritt in der Navigation oben auswählen oder auf ZURÜCK klicken.
              </div>
            </div>
            <div>
              <Angebot 
                title={brand + " " + model} 
                price={preis} adNo={0} 
                start={erstzulassungMonat} 
                end={erstzulassungJahr} 
                imgSrc={titelbild} 
                description={beschreibung}
                cardView={true}
                details={
                  {
                    erstzulassung: erstzulassungMonat + " / " + erstzulassungJahr,
                    leistung: leistungInKw,
                    kraftstoff: treibstoff,
                    fahrzeugzustand: zustand,
                    kilometerstand: kilometerstand,
                  }
                }
                location={"2700 Wiener Neustadt, Österreich"}
                companyname={"Gigant Group Teknoloji A.S"}
                />
            </div>
            <div className={classes.publishheading}>Rechnungsübersicht</div>
            <div className={classes.rechnungcontainer}>
              <div className={classes.produktheading}>
                <span className={classes.bolder}>Produkte</span>
                <span className={classes.bolder}>Preis in EUR €</span>
              </div>
              {cart.map((item, index) => <div key={index} className={classes.produktheadingwhite}>
                <span className={classes.bolder}>{item.value + " " + item.name}</span>
                <span className={classes.bolder}>{item.price +",00"}</span>
              </div>)}
              <div className={classes.produktheading}>
                <span className={classes.bolder}>Rechnungsbetrag (inkl. USt.)</span>
                <span className={classes.bolder}>{totalPrice + ",00"}</span>
              </div>
            </div>
          

            <div className={classes.electronic}>
              <label className='flex items-center'>
                <input type={"checkbox"} onChange={() => setElektronischeRechnungAngefordert(d => !d)} />
                <span className={"ml-2"}>elektronische Rechnung anfordern</span>1 
              </label>
            </div>

            <div className='flex items-center'>
            {stepActive > 1 && <div className={`${classes.savebtn} mr-4`} onClick={() => {
                if(stepActive != 1){
                    setStepActive(d => d - 1);
                }
            }}>Zurück</div>}
                <button className={classes.savebtn} onClick={() => {
                    if(stepActive != 5){
                        setStepActive(d => d + 1)
                    }
                    setShowValidationTextStep1(true); 
                }} type={"submit"}>zur Zahlung</button>
            </div>
            </>}
            </>
        </div>
    )
}

export default CreateAdPage;