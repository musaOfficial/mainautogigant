
import classes from './SearchDetails.module.css';
import { useState, useEffect } from "react";
import Expand from './../../public/expand.svg';
import Link from 'next/link'
import Select from "react-select";
import Bin from './../../public/bin.svg';
import Add from './../../public/add.svg';
import Checked from './../../public/checked.svg';
import Unchecked from './../../public/unchecked.svg';
import CheckedRadio from './../../public/checkedradio.svg';
import UncheckedRadio from './../../public/uncheckedradio.svg';
import Closex from './../../public/closex.svg';
import Limo from './../../public/acar/limo.svg';
import Suv from './../../public/acar/suv.svg'
import KombiVan from './../../public/acar/kombivan.svg';
import Coupe from './../../public/acar/coupe.svg';
import Cabrio from './../../public/acar/cabrio.svg';
import Kleinbus from './../../public/acar/kleinbus.svg';
import Check from './../../public/hackerl.svg';

import {
  marke1,
  marke2,
  karo,
  van1,
  van2,
  bis,
  bis1,
  bis2,
  bis3,
  land,
  umk,
  kraft,
  kilo,
  kilo2,
  leis,
  von,
  leis2,
  von2,
  getri,
  von4,
  bis4,
} from "./selectOptions";
import BackHome from './../../public/home.svg';
import Checkbox from './Checkbox';

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


export default function SearchDetail() {

  const [width, height] = useDeviceSize();

  const [markeOpen, setMarkeOpen] = useState(false);
  const [basisdatenOpen, setBasisdatenOpen] = useState(false);
  const [typOpen, setTypOpen] = useState(false);
  const [motorOpen, setMotorOpen] = useState(false);
  const [ausstattungOpen, setAusstattungOpen] = useState(false);
  const [standortOpen, setStandortOpen] = useState(false);

  const [easybtnOpen, setEasybtnOpen] = useState(false);

  const [anzahlTreffer, setAnzahlTreffer] = useState(117);

  const style = {
    control: (base) => ({
      ...base,
      boxShadow: "none",
      height: "40px",
      border: "2px solid #F1F2F3",
      "&:hover": {
        border: "2px solid #FBB900",
        cursor: "pointer"
      },
      backgroundColor: "#F1F2F3",
      fontSize: '13px',
      borderRadius: '10px',
      "&::placeholder": {
        color: "rgba(241, 242, 243, 0.75)"
      }
    }),
    option: (styles, state) => ({
      ...styles,
      backgroundColor: state.isSelected ? "#fbb900" : "",
      "&:active": "#fbb90080",
      fontSize: '13px',
    }),
};

  const whitestyle = {
    control: (base) => ({
      ...base,
      boxShadow: "none",
      height: "40px",
      border: "2px solid #F1F2F3",
      "&:hover": {
        border: "2px solid #FBB900",
        cursor: "pointer"
      },
      backgroundColor: "#fff",
      fontSize: '13px',
      borderRadius: '10px',
      "&::placeholder": {
        color: "rgba(241, 242, 243, 0.75)"
      }
    }),
    option: (styles, state) => ({
      ...styles,
      backgroundColor: state.isSelected ? "#fbb900" : "",
      "&:active": "#fbb90080",
      fontSize: '13px',
    }),
};

  // START of Variables for MARKE & MODELL
  const brands = [
    {value: "Alle Marken", label: "Alle Marken"},
    {value: 'Acura', label: 'Acura'},
    {value: 'Alfa Romeo', label: 'Alfa Romeo'},
    {value: 'Aston Martin', label: 'Aston Martin'},
    {value: 'Audi', label: 'Audi'},
    {value: 'Bentley', label: 'Bentley'},
    {value: 'BMW', label: 'BMW'},
    {value: 'Bugatti', label: 'Bugatti'},
    {value: 'Buick', label: 'Buick'},
    {value: 'Cadillac', label: 'Cadillac'},
    {value: 'Chevrolet', label: 'Chevrolet'},
    {value: 'Chrysler', label: 'Chrysler'},
    {value: 'Citroen', label: 'Citroen'},
    {value: 'Dodge', label: 'Dodge'},
    {value: 'Ferrari', label: 'Ferrari'},
    {value: 'Fiat', label: 'Fiat'},
    {value: 'Ford', label: 'Ford'},
    {value: 'GMC', label: 'GMC'},
    {value: 'Honda', label: 'Honda'},
    {value: 'Hyundai', label: 'Hyundai'},
    {value: 'Infiniti', label: 'Infiniti'},
    {value: 'Jaguar', label: 'Jaguar'},
    {value: 'Jeep', label: 'Jeep'},
    {value: 'Kia', label: 'Kia'},
    {value: 'Lamborghini', label: 'Lamborghini'},
    {value: 'Land Rover', label: 'Land Rover'},
    {value: 'Lexus', label: 'Lexus'},
    {value: 'Lincoln', label: 'Lincoln'},
    {value: 'Lotus', label: 'Lotus'},
    {value: 'Maserati', label: 'Maserati'},
    {value: 'Mazda', label: 'Mazda'},
    {value: 'McLaren', label: 'McLaren'},
    {value: 'Mercedes-Benz', label: 'Mercedes-Benz'},
    {value: 'Mini', label: 'Mini'},
    {value: 'Mitsubishi', label: 'Mitsubishi'},
    {value: 'Nissan', label: 'Nissan'},
    {value: 'Porsche', label: 'Porsche'},
    {value: 'Ram', label: 'Ram'},
    {value: 'Renault', label: 'Renault'},
    {value: 'Rolls-Royce', label: 'Rolls-Royce'},
    {value: 'Saab', label: 'Saab'},
    {value: 'Subaru', label: 'Subaru'},
    {value: 'Suzuki', label: 'Suzuki'},
    {value: 'Tesla', label: 'Tesla'},
  ]

  const [models, setModels] = useState([
    {value: 'Alle Modelle', label: 'Alle Modelle' },
    {value: 'A3', label: 'A3'},
    {value: 'A4', label: 'A4'},
    {value: 'A5', label: 'A5'},
    {value: 'A6', label: 'A6'},
    {value: 'A7', label: 'A7'},
    {value: 'A8', label: 'A8'},
    {value: 'Q3', label: 'Q3'},
    {value: 'Q5', label: 'Q5'},
    {value: 'Q7', label: 'Q7'},
    {value: 'R8', label: 'R8'},
    {value: 'RS3', label: 'RS3'},
    {value: 'RS4', label: 'RS4'},
    {value: 'RS5', label: 'RS5'},
    {value: 'RS6', label: 'RS6'},
    {value: 'RS7', label: 'RS7'},
    {value: 'S3', label: 'S3'},
    {value: 'S4', label: 'S4'},
    {value: 'S5', label: 'S5'},
    {value: 'S6', label: 'S6'},
    {value: 'S7', label: 'S7'},
    {value: 'S8', label: 'S8'},
    {value: 'TT', label: 'TT'},
    {value: 'e-tron', label: 'e-tron'},
    {value: 'e-tron GT', label: 'e-tron GT'},
    {value: 'Q2', label: 'Q2'},
    {value: 'Q4', label: 'Q4'},
  ]);
  
  const [brandSelectionOpen, setBrandSelectionOpen] = useState(false);
  const [modelSelectionOpen, setModelSelectionOpen] = useState(false);

  const [selectedBrand, setSelectedBrand] = useState(brands[0]);
  const [selectedModel, setSelectedModel] = useState(models[0]);
  const [variante, setVariante] = useState("");

  const [modals, setModals] = useState([
  ]);

  function addModal(){
    setModals([
      ...modals,
      {
        brandName: selectedBrand.label,
        modelName: selectedModel.label,
        variant: variante,
      }
    ])

    setSelectedBrand(brands[0]);
    setSelectedModel(models[0]);
    setVariante("")
    console.log(modals)
  }

  function reduceModals(index){
    var reducedModals = [...modals];
    reducedModals.splice(index, 1)
    setModals(reducedModals);
  }

  const bodyTypes = [
    {value: 'Sedan', label: 'Sedan'},
    {value: 'Hatchback', label: 'Hatchback'},
    {value: 'SUV', label: 'SUV'},
    {value: 'Crossover', label: 'Crossover'},
    {value: 'Coupe', label: 'Coupe'},
    {value: 'Convertible', label: 'Convertible'},
    {value: 'Pickup', label: 'Pickup'},
    {value: 'Van', label: 'Van'},
    {value: 'Wagon', label: 'Wagon'},
    {value: 'Minivan', label: 'Minivan'},
    {value: 'Roadster', label: 'Roadster'},
    {value: 'Sports Car', label: 'Sports Car'},
    {value: 'Electric Car', label: 'Electric Car'},
    {value: 'Hybrid Car', label: 'Hybrid Car'},
    {value: 'Plug-in Hybrid', label: 'Plug-in Hybrid'},
  ]

  const [selectedBodyType, setSelectedBodyType] = useState();
  // END of Variables for MARKE & MODELL
  // -----------------------------------
  // START of Variables for BASISDATEN
  var erstzulassungen = [{value: "beliebig", label: "beliebig"}];
  for(let i = 2023; i >= 1900; i-- ){
      erstzulassungen.push({value: i, label: i})
  }

  var preise = [{value: "beliebig", label: "beliebig"}];
  for(let i = 0; i < 105000; ){
      preise.push({value: i, label: i})
      if(i < 30000){
        i += 2500;
      } else {
        i += 10000
      }
    
  }


  const [erstzulassungVon, setErstzulassungVon] = useState();
  const [erstzulassungBis, setErstzulassungBis] = useState();

  const [preisVon, setPreisVon] = useState();
  const [preisBis, setPreisBis] = useState();

  const [kilometerstandVon, setKilometerstandVon] = useState();
  const [kilometerstandBis, setKilometerstandBis] = useState();
  // END of Variables for BASISDATEN
  // -----------------------------------
  // START of Variables for TYP & ZUSTAND

  // Fahrzeugtyp
  const [cabrio, setCabrio] = useState(false);
  const [kleinwagen, setKleinwagen] = useState(false);
  const [kleinbus, setKleinbus] = useState(false);
  const [kombi, setKombi] = useState(false);
  const [limousine, setLimousine] = useState(false);
  const [mopedauto, setMopedauto] = useState(false);
  const [sportwagen, setSportwagen] = useState(false);
  const [suv, setSuv] = useState(false);

  // Zustand
  const [gebrauchtwagen, setGebrauchtwagen] = useState(false);
  const [jahreswagen, setJahreswagen] = useState(false);
  const [neuwagen, setNeuwagen] = useState(false);
  const [oldtimer, setOldtimer] = useState(false);
  const [tageszulassung, setTageszulassung] = useState(false);
  const [unfallwagen, setUnfallwagen] = useState(false);
  const [vorfuehrwagen, setVorfuehrwagen] = useState(false);

  // Garantie
  const [ja, setJa] = useState(false);
  const [scheckhaftgepflegt, setScheckhaftgepflegt] = useState(false);
  const [herstellerzertifizerung, setHerstellerzertifizierung] = useState(false);
  
  // Fahrzeughalter
  var fahrzeughalterArr = [{value: "Alle", label: "Alle"}];
  for(let i = 0; i <= 10; i++){
    fahrzeughalterArr.push({value: i, label: i})
  }

  const [fahrzeughalter, setFahrzeughalter] = useState(false);
  const [nichtraucherfahrzeug, setNichtraucherFahrzeug] = useState(false);

  // END of Variables for TYP & ZUSTAND
  // -----------------------------------
  // START of Variables for MOTOR

  // Leistung
  var leistungArr = [];
  for(let i = 0; i <= 400; ){
    if(i < 100){
      i += 10;
    } else {
      i += 50;
    }
    leistungArr.push({value: i, label: i})
  }

  const [leistungVon, setLeistungVon] = useState();
  const [leistungBis, setLeistungBis] = useState();

  const [selectPs, setSelectPs] = useState(true);

  // Treibstoff
  const [benzin, setBenzin] = useState(false);
  const [diesel, setDiesel] = useState(false);
  const [elektro, setElektro] = useState(false);
  const [gas, setGas] = useState(false);
  const [hybridBenzin, setHybridBenzin] = useState(false);
  const [hybridDiesel, setHybridDiesel] = useState(false);
  const [wasserstoff, setWasserstoff] = useState(false);

  // Getriebeart
  const [automatik, setAutomatik] = useState(false);
  const [schaltgetriebe, setSchaltgetriebe] = useState(false);
  const [getriebeNeuwagen, setGetriebeNeuwagen] = useState(false);

  // Antrieb
  const [allrad, setAllrad] = useState(false);
  const [vorderrad, setVorderrad] = useState(false);
  const [hinterrad, setHinterrad] = useState(false);


  // END of Variables for MOTOR
  // -----------------------------------
  // START of Variables for AUSSTATTUNG
  const [zweizonenKlima, setZweizonenKlima] = useState(false)
  const [dreizonenKlima, setDreizonenKlima] = useState(false)
  const [drei60kamera, setDrei60kamera] = useState(false)
  const [vierzonenKlima, setVierzonenKlima] = useState(false)
  const [ABS, setABS] = useState(false);
  const [abstandsTempomat, setAbstandsTempomat] = useState(false);
  const [abstandsWarner, setAbstandsWarner] = useState(false)
  const [airbagHinten, setAirbagHinten] = useState(false)
  const [alarmanlage, setAlarmanlage] = useState(false)
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
  const [parkhilfesensorenHintenUndVorne, setParkhilfesensorenHintenUndVorne] = useState(false);


  const [openAusstattung, setOpenAusstattung] = useState();

  // Außenfarbe
  const [aussenfarbeBeige , setAussenfarbeBeige] = useState(false)
  const [aussenfarbeBlau , setAussenfarbeBlau] = useState(false)
  const [aussenfarbeSchwarz , setAussenfarbeSchwarz] = useState(false)
  const [aussenfarbeGruen , setAussenfarbeGruen] = useState(false)
  const [aussenfarbeOrange , setAussenfarbeOrange] = useState(false)
  const [aussenfarbeRot , setAussenfarbeRot] = useState(false)
  const [aussenfarbeGold , setAussenfarbeGold] = useState(false)
  const [aussenfarbeBraun , setAussenfarbeBraun] = useState(false)
  const [aussenfarbeSilber , setAussenfarbeSilber] = useState(false)
  const [aussenfarbeGelb , setAussenfarbeGelb] = useState(false)
  const [aussenfarbeBronze , setAussenfarbeBronze] = useState(false)
  const [aussenfarbeViolett , setAussenfarbeViolett] = useState(false)
  const [aussenfarbeGrau , setAussenfarbeGrau] = useState(false)
  const [aussenfarbeWeiss , setAussenfarbeWeiss] = useState(false)

  // Lackierungsart
  const [metallic, setMetallic] = useState(false);

  // Polsterfarbe
  const [polsterfarbeBeige, setPolsterfarbeBeige] = useState(false);
  const [polsterfarbeBlau, setPolsterfarbeBlau] = useState(false);
  const [polsterfarbeSchwarz, setPolsterfarbeSchwarz] = useState(false);
  const [polsterfarbeGruen, setPolsterfarbeGruen] = useState(false);
  const [polsterfarbeOrange, setPolsterfarbeOrange] = useState(false);
  const [polsterfarbeRot, setPolsterfarbeRot] = useState(false);
  const [polsterfarbeWeiss, setPolsterfarbeWeiss] = useState(false);
  const [polsterfarbeBraun, setPolsterfarbeBraun] = useState(false);
  const [polsterfarbeGrau, setPolsterfarbeGrau] = useState(false);
  const [polsterfarbeGelb, setPolsterfarbeGelb] = useState(false);
  const [polsterfarbeSonstiges, setPolsterfarbeSonstiges] = useState(false);

  // Material
  const [alcantara, setAlcantara] = useState(false);
  const [stoff, setStoff] = useState(false);
  const [vollleder, setVollleder] = useState(false);
  const [teilleder, setTeilleder] = useState(false);
  const [velours, setVelours] = useState(false);
  const [sonstiges, setSonstiges] = useState(false);

  // Anzahl Türe und Sitze
  const [tuereVon, setTuereVon] = useState();
  const [tuereBis, setTuereBis] = useState();

  const [sitzeVon, setSitzeVon] = useState();
  const [sitzeBis, setSitzeBis] = useState();

  // END of Variables for AUSSTATTUNG
  // -----------------------------------
  // START of Variables for STANDORT & SONSTIGES
  const laender = [
    { label: 'United States', value: 'US' },
    { label: 'Canada', value: 'CA' },
    { label: 'Mexico', value: 'MX' },
    { label: 'Germany', value: 'DE' },
    { label: 'France', value: 'FR' },
    { label: 'Japan', value: 'JP' },
    { label: 'China', value: 'CN' },
    { label: 'United Kingdom', value: 'UK' },
    { label: 'Australia', value: 'AU' },
    { label: 'Brazil', value: 'BR' }
  ]

  const bundeslaender = [
    { label: 'Burgenland', value: 'BL' },
    { label: 'Kärnten', value: 'KT' },
    { label: 'Niederösterreich', value: 'NO' },
    { label: 'Oberösterreich', value: 'OO' },
    { label: 'Salzburg', value: 'SB' },
    { label: 'Steiermark', value: 'ST' },
    { label: 'Tirol', value: 'TR' },
    { label: 'Vorarlberg', value: 'VB' },
    { label: 'Wien', value: 'WI' }  
  ]

  const umkreis = [
    { label: '500m', value: 500 },
    { label: '1km', value: 1000 },
    { label: '2km', value: 2000 },
    { label: '5km', value: 5000 },
    { label: '10km', value: 10000 },
    { label: '20km', value: 20000 },
    { label: '50km', value: 50000 }
  ]

  const schadstoffklassen = [
    {label: 'Euro 6', value: 'Euro6'},
    {label: 'Euro 5', value: 'Euro5'},
    {label: 'Euro 4', value: 'Euro4'},
    {label: 'Euro 3', value: 'Euro3'},
    {label: 'Euro 2', value: 'Euro2'},
    {label: 'Euro 1', value: 'Euro1'},
    {label: 'Keine Schadstoffklasse', value: 'None'}
  ]

  const feinstaubplaketten = [
    {label: 'Grün', value: 'green'},
    {label: 'Gelb', value: 'yellow'},
    {label: 'Rot', value: 'red'},
    {label: 'Keine Plakette', value: 'none'}
  ]

  const suchzeitraum = [
    {label: 'Heute', value: 'today'},
    {label: 'Gestern', value: 'yesterday'},
    {label: 'Letzte Woche', value: 'lastweek'},
    {label: 'Letzten Monat', value: 'lastmonth'},
    {label: 'Letztes Jahr', value: 'lastyear'},
];

  const [selectedLand, setSelectedLand] = useState();
  const [selectedBundesland, setSelectedBundesland] = useState();
  const [selectedUmkreis, setSelectedUmkreis] = useState();

  const [inserentHaendler, setInserentHaendler] = useState();
  const [inserentPrivat, setInserentPrivat] = useState();
  const [inserentAlle, setInserentAlle] = useState();

  const [selectedSchadstoffklasse, setSelectedSchadstoffklasse] = useState();
  const [selectedFeinstaubplakette, setSelectedFeinstaubplakette] = useState();
  const [russpartikelfilter, setRusspartikelfilter] = useState();

  const [selectedSuchzeitraum, setSelectedSuchzeitraum] = useState();
  const [zweitage, setZweitage] = useState();
  const [mwstAusweisbarSuche, setMwstAusweisbarSuche] = useState();


  useEffect(() => {
    if(inserentHaendler == true && inserentPrivat == true){
      setInserentAlle(true);
    }
    
  }, [inserentAlle ,inserentHaendler, inserentPrivat]) 

  useEffect(() => {

    if(inserentHaendler == false || inserentPrivat == false){
      setInserentAlle(false)
    }
  }, [inserentHaendler, inserentPrivat])

  // END of Variables for STANDORT & SONSTIGES




  // EINFACHE SUCHE

  // Inserent-Auswahl
  const [inserent, setInserent] = useState("alle")
  const [bodyType, setBodyType] = useState("limousine");

  const [minVal, setMinVal] = useState();
  const [maxVal, setMaxVal] = useState();

  const [minValLeistung, setMinValLeistung] = useState();
  const [maxValLeistung, setMaxValLeistung] = useState();

  const [minValPreis, setMinValPreis] = useState();
  const [maxValPreis, setMaxValPreis] = useState();

  const priceGap = 1000;
  
  if (typeof window !== "undefined") {
      const rangeInput = document.querySelectorAll(".range-input input")
      const progress = document.querySelector(".slider .progress")
      rangeInput.forEach(input => {
        input.addEventListener("input", e => {
          if(maxVal - minVal < priceGap){
            if(e.target.className === "range-min"){
              rangeInput[0].value = maxVal - priceGap;
            } else {
              rangeInput[1].value = minVal + 1000;
            }
          } else {
            
            progress.style.left = (minVal / rangeInput[0].max) * 100 + "%";
            progress.style.right = 100 - (maxVal / rangeInput[1].max) * 100 + "%";
          }
        })
      })

      const rangeInputLeistung = document.querySelectorAll(".range-inputLeistung input")
      const progressLeistung = document.querySelector(".sliderL .progressL")
      rangeInputLeistung.forEach(input => {
        input.addEventListener("input", e => {
          if(maxValLeistung - minValLeistung < 10){
            if(e.target.className === "range-minLeistung"){
              rangeInputLeistung[0].value = maxValLeistung - 2;
            } else {
              rangeInputLeistung[1].value = minValLeistung + 2;
            }
          } else {
            progressLeistung.style.left = (minValLeistung / rangeInputLeistung[0].max) * 100 + "%";
            progressLeistung.style.right = 100 - (maxValLeistung / rangeInputLeistung[1].max) * 100 + "%";
          }
        })
      })

      const rangeInputPreis = document.querySelectorAll(".range-inputPreis input")
      const progressPreis = document.querySelector(".sliderPreis .progressPreis")
      rangeInputPreis.forEach(input => {
        input.addEventListener("input", e => {
          if(maxValPreis - minValPreis < priceGap){
            if(e.target.className === "range-minPreis"){
              rangeInputPreis[0].value = maxValPreis - 1000;
            } else {
              rangeInputPreis[1].value = minValPreis + 1000;
            }
          } else {
            
            progressPreis.style.left = (minValPreis / rangeInputPreis[0].max) * 100 + "%";
            progressPreis.style.right = 100 - (maxValPreis / rangeInputPreis[1].max) * 100 + "%";
          }
        })
      })
  }

  return (
    <div className="bg-theme-gray-10 lg:px-6 md:!px-0">
      {/* BRAND SELECTION */}
      {brandSelectionOpen == true && <div className={classes.brandselectioncontainer}>
        <div className={classes.brandselection}>
          {brands.map((brand, index) => <div key={index} onClick={(e) => {
            setSelectedBrand(brand)
            console.log(brand)
            setBrandSelectionOpen(false);
          }}>
            <input type={"radio"} name={"brand"} />
            <span className={classes.brandspan}>{brand.label}</span>
          </div>)}
        </div>
      </div>}
      {/* BRAND SELECTION */}

      {/* MODEL SELECTION */}
      {modelSelectionOpen == true && <div className={classes.brandselectioncontainer}>
        <div className={classes.brandselection}>
          {models.map((model, index) => <div key={index} onClick={(e) => {
            setSelectedModel(model)
            console.log(model)
            setModelSelectionOpen(false);
          }}>
            <input type={"radio"} name={"model"} />
            <span className={classes.brandspan}>{model.label}</span>
          </div>)}
        </div>
      </div>}
      {/* MODEL SELECTION */}

      {/* AUSTATTUNGEN */}
      {openAusstattung == true && <div className={classes.ausstattungContainer} >
            <Closex className={classes.closex} onClick={() => setOpenAusstattung(false)} />
            <div className={classes.ausstattungencon}>
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
        </div>}
      {/* AUSTATTUNGEN */}
      <div className={`w-10/12 lg:w-full max-w-ag-container mx-auto flex md:flex-col-reverse ${classes.contentcontainer} ${easybtnOpen == true && classes.contentpadding}`}>
        <div className={`${classes.top_row} ${easybtnOpen == false && classes.contentpadding}`}>
          <span className={classes.leftrow}><BackHome className={classes.backhome} /> ../Detailsuche</span>
          <div className={classes.rightrow}>
            <div className={`${classes.easybtn} ${easybtnOpen == true && classes.easybtnopen}`} onClick={() => setEasybtnOpen(true)} >Einfache Suche</div>
            <div className={`${classes.delallfilter} ${easybtnOpen == true && classes.delallfilterclose}`} onClick={() => setEasybtnOpen(false)} >Erweiterte Suche</div>
          </div>
        </div>
        {easybtnOpen == false ? 
        <>
        <div className={`${classes.section} ${markeOpen == false && classes.closedsection}`} onClick={() => setMarkeOpen(d => !d)}>
          <div className={classes.sectionheading}>Marke & Modell</div>
          <div className={classes.expandrow}><Expand className={`${classes.unrotated} ${markeOpen == true && classes.rotated}`} /></div>
        </div> 
        {markeOpen == true && <div className={classes.basiscontainer}>
          {modals.length != 0 && <div className={classes.modalsection}>
            {modals.map((modal, index) => <div className={`${classes.modalcontainer} ${index == modals.length - 1 && classes.lastmodalel}`}>
              <div className={classes.modalinfo}>
                <span className={classes.modalbrand}>{modal.brandName}</span>
                <span className={classes.modalmodel}>{modal.modelName}</span>
                <span className={classes.modalvariant}>{modal.variant}</span>
              </div>
              <div className={classes.delete} onClick={() => reduceModals(index)} ><Bin className={classes.bin} /></div>
            </div>)
          } 
          </div>}
          <div className={classes.admodelinputrow}>
            <div className={classes.brandinputcontainer} onClick={() => setBrandSelectionOpen(d => !d)}>
              <span>{selectedBrand.label}</span>
              <Add className={classes.admodelsvg} />
            </div>
            <div className={classes.brandinputcontainer} onClick={() => setModelSelectionOpen(d => !d)}>
              <span>{selectedModel.label}</span>
              <Add className={classes.admodelsvg} />
            </div>
            <input type={"text"} value={variante} onChange={(e) => setVariante(e.target.value)} className={classes.variantinput} placeholder={"Variante / z.B Avantgarde, TDI,.."} />
          </div>
          <div className={classes.addmorecontainer} onClick={() => addModal()}>
            <Add className={classes.addmore} />
            <span className={classes.addmoretext}>Weitere Marken/Modelle hinzufügen</span>
          </div>

          <div className={classes.karocontainer}>
            <Select 
              options={bodyTypes}
              styles={style}
              onChange={(e) => setSelectedBodyType(e.value)}
              placeholder={"Karosserieform"}
            />
          </div>
        </div>}

        <div className={`${classes.section} ${basisdatenOpen == false && classes.closedsection}`} onClick={() => setBasisdatenOpen(d => !d)}>
          <div className={classes.sectionheading}>Basisdaten</div>
          <div className={classes.expandrow}><Expand className={`${classes.unrotated} ${basisdatenOpen == true && classes.rotated}`} /></div>
        </div> 
        {basisdatenOpen == true && <div className={classes.basiscontainer}>
          <label className={classes.label}>Erstzulassung</label>
          <div className={classes.vonbiscontainer}>
            <Select
              options={erstzulassungen}
              styles={style}
              placeholder={"Von"}
              onChange={(e) => setErstzulassungVon(e.value)}
              className={`${classes.select} mr-4`}
              isSearchable
              isMulti
            />
            <Select
              options={erstzulassungen}
              styles={style}
              placeholder={"Bis"}
              onChange={(e) => setErstzulassungVon(e.value)}
              className={classes.select}
              isSearchable
            />
          </div>
          <label className={classes.label}>Preis</label>
          <div className={classes.vonbiscontainer}>
            <Select
              options={preise}
              styles={style}
              placeholder={"Von"}
              onChange={(e) => setPreisVon(e.value)}
              className={`${classes.select} mr-4`}
            />
            <Select
              options={preise}
              styles={style}
              placeholder={"Bis"}
              onChange={(e) => setPreisBis(e.value)}
              className={classes.select}
            />
          </div>
          <label className={classes.label}>Kilometerstand</label>
          <div className={classes.lastvonbiscontainer}>
            <Select
              options={preise}
              styles={style}
              placeholder={"Von"}
              onChange={(e) => setKilometerstandVon(e.value)}
              className={`${classes.select} mr-4`}
            />
            <Select
              options={preise}
              styles={style}
              placeholder={"Bis"}
              onChange={(e) => setKilometerstandBis(e.value)}
              className={classes.select}
            />
          </div>
        </div>}

        <div className={`${classes.section} ${typOpen == false && classes.closedsection}`} onClick={() => setTypOpen(d => !d)}>
          <div className={classes.sectionheading}>Typ & Zustand</div>
          <div className={classes.expandrow}><Expand className={`${classes.unrotated} ${typOpen == true && classes.rotated}`} /></div>
        </div> 
        {typOpen == true && <div className={classes.basiscontainer}>
            <label className={classes.label}>Fahrzeugtyp</label>
            <div className={classes.fahrzeugtypgrid}>
              <div className={classes.checkinput} onClick={() => {
                    setCabrio(d => !d);
                }}>
                <span >
                    {cabrio == false ? <span className={classes.checker}><Unchecked className={classes.checker}/></span> : <span className={classes.checker}><Checked className={classes.checker} /></span> }
                </span>
                <span className={classes.typlabel}>Cabrio / Roadster</span>
              </div>
            <div className={classes.checkinput} onClick={() => {
                  setKleinwagen(d => !d);
              }}>
              <span >
                  {kleinwagen == false ? <span className={classes.checker}><Unchecked className={classes.checker}/></span> : <span className={classes.checker}><Checked className={classes.checker} /></span> }
              </span>
              <span className={classes.typlabel}>Klein-/ Kompaktwagen</span>
            </div>
            <div className={classes.checkinput} onClick={() => {
                  setKleinbus(d => !d);
              }}>
              <span >
                  {kleinbus == false ? <span className={classes.checker}><Unchecked className={classes.checker}/></span> : <span className={classes.checker}><Checked className={classes.checker} /></span> }
              </span>
              <span className={classes.typlabel}>Kleinbus</span>
            </div>
            <div className={classes.checkinput} onClick={() => {
                  setKombi(d => !d);
              }}>
              <span >
                  {kombi == false ? <span className={classes.checker}><Unchecked className={classes.checker}/></span> : <span className={classes.checker}><Checked className={classes.checker} /></span> }
              </span>
              <span className={classes.typlabel}>Kombi / Family Van</span>
            </div>
            <div className={classes.checkinput} onClick={() => {
                  setLimousine(d => !d);
              }}>
              <span >
                  {limousine == false ? <span className={classes.checker}><Unchecked className={classes.checker}/></span> : <span className={classes.checker}><Checked className={classes.checker} /></span> }
              </span>
              <span className={classes.typlabel}>Limousine</span>
            </div>
            <div className={classes.checkinput} onClick={() => {
                  setMopedauto(d => !d);
              }}>
              <span >
                  {mopedauto == false ? <span className={classes.checker}><Unchecked className={classes.checker}/></span> : <span className={classes.checker}><Checked className={classes.checker} /></span> }
              </span>
              <span className={classes.typlabel}>Mopedauto</span>
            </div>
            <div className={classes.checkinput} onClick={() => {
                  setSportwagen(d => !d);
              }}>
              <span >
                  {sportwagen == false ? <span className={classes.checker}><Unchecked className={classes.checker}/></span> : <span className={classes.checker}><Checked className={classes.checker} /></span> }
              </span>
              <span className={classes.typlabel}>Sportwagen / Coupé</span>
            </div>
            <div className={classes.checkinput} onClick={() => {
                  setSuv(d => !d);
              }}>
              <span >
                  {suv == false ? <span className={classes.checker}><Unchecked className={classes.checker}/></span> : <span className={classes.checker}><Checked className={classes.checker} /></span> }
              </span>
              <span className={classes.typlabel}>SUV / Geländewagen</span>
            </div>
            </div>
            
            <label className={classes.label}>Zustand</label>
            <div className={classes.fahrzeugtypgrid}>
              <div className={classes.checkinput} onClick={() => {
                    setGebrauchtwagen(d => !d);
                }}>
                <span >
                    {gebrauchtwagen == false ? <span className={classes.checker}><Unchecked className={classes.checker}/></span> : <span className={classes.checker}><Checked className={classes.checker} /></span> }
                </span>
                <span className={classes.typlabel}>Gebrauchtwagen</span>
              </div>
            <div className={classes.checkinput} onClick={() => {
                  setJahreswagen(d => !d);
              }}>
              <span >
                  {jahreswagen == false ? <span className={classes.checker}><Unchecked className={classes.checker}/></span> : <span className={classes.checker}><Checked className={classes.checker} /></span> }
              </span>
              <span className={classes.typlabel}>Jahreswagen</span>
            </div>
            <div className={classes.checkinput} onClick={() => {
                  setNeuwagen(d => !d);
              }}>
              <span >
                  {neuwagen == false ? <span className={classes.checker}><Unchecked className={classes.checker}/></span> : <span className={classes.checker}><Checked className={classes.checker} /></span> }
              </span>
              <span className={classes.typlabel}>Neuwagen</span>
            </div>
            <div className={classes.checkinput} onClick={() => {
                  setOldtimer(d => !d);
              }}>
              <span >
                  {oldtimer == false ? <span className={classes.checker}><Unchecked className={classes.checker}/></span> : <span className={classes.checker}><Checked className={classes.checker} /></span> }
              </span>
              <span className={classes.typlabel}>Oldtimer</span>
            </div>
            <div className={classes.checkinput} onClick={() => {
                  setTageszulassung(d => !d);
              }}>
              <span >
                  {tageszulassung == false ? <span className={classes.checker}><Unchecked className={classes.checker}/></span> : <span className={classes.checker}><Checked className={classes.checker} /></span> }
              </span>
              <span className={classes.typlabel}>Tageszulassung</span>
            </div>
            <div className={classes.checkinput} onClick={() => {
                  setUnfallwagen(d => !d);
              }}>
              <span >
                  {unfallwagen == false ? <span className={classes.checker}><Unchecked className={classes.checker}/></span> : <span className={classes.checker}><Checked className={classes.checker} /></span> }
              </span>
              <span className={classes.typlabel}>Unfallwagen</span>
            </div>
            <div className={classes.checkinput} onClick={() => {
                  setVorfuehrwagen(d => !d);
              }}>
              <span >
                  {vorfuehrwagen == false ? <span className={classes.checker}><Unchecked className={classes.checker}/></span> : <span className={classes.checker}><Checked className={classes.checker} /></span> }
              </span>
              <span className={classes.typlabel}>Vorführwagen</span>
            </div>
            
            </div>

            <label className={classes.label}>Garantie</label>
            <div className={classes.fahrzeugtypgrid}>   
                <div className={classes.checkinput} onClick={() => {
                      setJa(d => !d);
                  }}>
                  <span >
                      {ja == false ? <span className={classes.checker}><Unchecked className={classes.checker}/></span> : <span className={classes.checker}><Checked className={classes.checker} /></span> }
                  </span>
                  <span className={classes.typlabel}>Ja</span>
                </div>
                <div className={classes.checkinput} onClick={() => {
                      setScheckhaftgepflegt(d => !d);
                  }}>
                  <span >
                      {scheckhaftgepflegt == false ? <span className={classes.checker}><Unchecked className={classes.checker}/></span> : <span className={classes.checker}><Checked className={classes.checker} /></span> }
                  </span>
                  <span className={classes.typlabel}>Scheckhaftgepflegt</span>
                </div>
                <div className={classes.checkinput} onClick={() => {
                      setHerstellerzertifizierung(d => !d);
                  }}>
                  <span >
                      {herstellerzertifizerung == false ? <span className={classes.checker}><Unchecked className={classes.checker}/></span> : <span className={classes.checker}><Checked className={classes.checker} /></span> }
                  </span>
                  <span className={classes.typlabel}>Herstellerzertifizierung<br></br><span className={classes.sublabel}>(Technisch geprüfte Fahrzeuge mit Garantie)</span></span>
                </div>
            </div>

            <label className={classes.label}>Fahrzeughalter (max.)</label>
            <div className={classes.lastfahrzeugtypgrid}>   
                <div className={classes.fahrzeughalter}>
                  <Select
                    options={fahrzeughalterArr}
                    styles={style}
                    placeholder={"Alle"}
                    onChange={(e) => setFahrzeughalter(e.value)}
                  />
                </div>
                <div className={classes.checkinput} onClick={() => {
                      setNichtraucherFahrzeug(d => !d);
                  }}>
                  <span >
                      {nichtraucherfahrzeug == false ? <span className={classes.checker}><Unchecked className={classes.checker}/></span> : <span className={classes.checker}><Checked className={classes.checker} /></span> }
                  </span>
                  <span className={classes.typlabel}>Nichtraucherfahrzeug</span>
                </div>
            </div>
        </div>}
      
        <div className={`${classes.section} ${motorOpen == false && classes.closedsection}`} onClick={() => setMotorOpen(d => !d)}>
          <div className={classes.sectionheading}>Motor</div>
          <div className={classes.expandrow}><Expand className={`${classes.unrotated} ${motorOpen == true && classes.rotated}`} /></div>
        </div> 
        {motorOpen == true && <div className={classes.basiscontainer}>
          <label className={classes.label}>Leistung</label>
          <div className={classes.leistungrow}>
            <Select 
              options={leistungArr}
              styles={style}
              placeholder={"Von"}
              onChange={(e) => setLeistungVon(e.value)}
              className={`${classes.select} mr-4`}
            />
            <Select 
              options={leistungArr}
              styles={style}
              placeholder={"Bis"}
              onChange={(e) => setLeistungBis(e.value)}
              className={classes.select}
            />
          </div>
          <div className={classes.psrow}>
          <div className={`${classes.checkinput} mr-4`} onClick={() => {
              setSelectPs(d => !d);
            }}>
            <span >
                {selectPs == false ? <span className={classes.checker}><UncheckedRadio className={classes.checker}/></span> : <span className={classes.checker}><CheckedRadio className={classes.checker} /></span> }
            </span>
            <span className={classes.typlabel}>PS</span>
          </div>

          <div className={classes.checkinput} onClick={() => {
              setSelectPs(d => !d);
            }}>
            <span >
                {selectPs == true ? <span className={classes.checker}><UncheckedRadio className={classes.checker}/></span> : <span className={classes.checker}><CheckedRadio className={classes.checker} /></span> }
            </span>
            <span className={classes.typlabel}>kW</span>
          </div>
          </div>
          <label className={classes.label}>Treibstoff</label>
          <div className={classes.fahrzeugtypgrid}>
              <div className={classes.checkinput} onClick={() => {
                    setBenzin(d => !d);
                }}>
                <span >
                    {benzin == false ? <span className={classes.checker}><Unchecked className={classes.checker}/></span> : <span className={classes.checker}><Checked className={classes.checker} /></span> }
                </span>
                <span className={classes.typlabel}>Benzin</span>
              </div>
            <div className={classes.checkinput} onClick={() => {
                  setDiesel(d => !d);
              }}>
              <span >
                  {diesel == false ? <span className={classes.checker}><Unchecked className={classes.checker}/></span> : <span className={classes.checker}><Checked className={classes.checker} /></span> }
              </span>
              <span className={classes.typlabel}>Diesel</span>
            </div>
            <div className={classes.checkinput} onClick={() => {
                  setElektro(d => !d);
              }}>
              <span >
                  {elektro == false ? <span className={classes.checker}><Unchecked className={classes.checker}/></span> : <span className={classes.checker}><Checked className={classes.checker} /></span> }
              </span>
              <span className={classes.typlabel}>Elektro</span>
            </div>
            <div className={classes.checkinput} onClick={() => {
                  setGas(d => !d);
              }}>
              <span >
                  {gas == false ? <span className={classes.checker}><Unchecked className={classes.checker}/></span> : <span className={classes.checker}><Checked className={classes.checker} /></span> }
              </span>
              <span className={classes.typlabel}>Gas</span>
            </div>
            <div className={classes.checkinput} onClick={() => {
                  setHybridBenzin(d => !d);
              }}>
              <span >
                  {hybridBenzin == false ? <span className={classes.checker}><Unchecked className={classes.checker}/></span> : <span className={classes.checker}><Checked className={classes.checker} /></span> }
              </span>
              <span className={classes.typlabel}>Hybrid Elektro/Benzin</span>
            </div>
            <div className={classes.checkinput} onClick={() => {
                  setHybridDiesel(d => !d);
              }}>
              <span >
                  {diesel == false ? <span className={classes.checker}><Unchecked className={classes.checker}/></span> : <span className={classes.checker}><Checked className={classes.checker} /></span> }
              </span>
              <span className={classes.typlabel}>Hybrid Elektro/Diesel</span>
            </div>
            <div className={classes.checkinput} onClick={() => {
                  setWasserstoff(d => !d);
              }}>
              <span >
                  {wasserstoff == false ? <span className={classes.checker}><Unchecked className={classes.checker}/></span> : <span className={classes.checker}><Checked className={classes.checker} /></span> }
              </span>
              <span className={classes.typlabel}>Wasserstoff</span>
            </div>
            </div>
          <label className={classes.label}>Getriebeart</label>
          <div className={classes.fahrzeugtypgrid}>
              <div className={classes.checkinput} onClick={() => {
                    setAutomatik(d => !d);
                }}>
                <span >
                    {automatik == false ? <span className={classes.checker}><Unchecked className={classes.checker}/></span> : <span className={classes.checker}><Checked className={classes.checker} /></span> }
                </span>
                <span className={classes.typlabel}>Automatik</span>
              </div>
            <div className={classes.checkinput} onClick={() => {
                  setSchaltgetriebe(d => !d);
              }}>
              <span >
                  {schaltgetriebe == false ? <span className={classes.checker}><Unchecked className={classes.checker}/></span> : <span className={classes.checker}><Checked className={classes.checker} /></span> }
              </span>
              <span className={classes.typlabel}>Schaltgetriebe</span>
            </div>
            <div className={classes.checkinput} onClick={() => {
                  setNeuwagen(d => !d);
              }}>
              <span >
                  {neuwagen == false ? <span className={classes.checker}><Unchecked className={classes.checker}/></span> : <span className={classes.checker}><Checked className={classes.checker} /></span> }
              </span>
              <span className={classes.typlabel}>Neuwagen</span>
            </div>
            </div>
          <label className={classes.label}>Antrieb</label>
          <div className={classes.lastfahrzeugtypgrid}>
              <div className={classes.checkinput} onClick={() => {
                    setAllrad(d => !d);
                }}>
                <span >
                    {allrad == false ? <span className={classes.checker}><Unchecked className={classes.checker}/></span> : <span className={classes.checker}><Checked className={classes.checker} /></span> }
                </span>
                <span className={classes.typlabel}>Allrad</span>
              </div>
            <div className={classes.checkinput} onClick={() => {
                  setVorderrad(d => !d);
              }}>
              <span >
                  {vorderrad == false ? <span className={classes.checker}><Unchecked className={classes.checker}/></span> : <span className={classes.checker}><Checked className={classes.checker} /></span> }
              </span>
              <span className={classes.typlabel}>Vorderrad</span>
            </div>
            <div className={classes.checkinput} onClick={() => {
                  setHinterrad(d => !d);
              }}>
              <span >
                  {hinterrad == false ? <span className={classes.checker}><Unchecked className={classes.checker}/></span> : <span className={classes.checker}><Checked className={classes.checker} /></span> }
              </span>
              <span className={classes.typlabel}>Hinterrad</span>
            </div>
            </div>
        </div>}
      
        <div className={`${classes.section} ${ausstattungOpen == false && classes.closedsection}`} onClick={() => setAusstattungOpen(d => !d)}>
          <div className={classes.sectionheading}>Ausstattung</div>
          <div className={classes.expandrow}><Expand className={`${classes.unrotated} ${ausstattungOpen == true && classes.rotated}`} /></div>
        </div> 
        {ausstattungOpen == true && <div className={classes.basiscontainer}>
            <div className={classes.bb}>
              <div className={classes.ausstattung} onClick={() => setOpenAusstattung(d => !d)}>
                <span>Ausstattung</span>
                <Add className={classes.add} />
              </div> 
            </div>
            <label className={classes.label}>Außenfarbe</label>
            <div className={classes.colorsgrid}>
              <div className='flex items-center'>
                <div className={classes.beige} onClick={() => setAussenfarbeBeige(d => !d)}>
                  {aussenfarbeBeige == true && <Check className={classes.whitecheck} />}
                </div>
                <span className={classes.typlabel}>Beige</span>
              </div>
              <div className='flex items-center'>
                <div className={classes.blau} onClick={() => setAussenfarbeBlau(d => !d)}>
                  {aussenfarbeBlau == true && <Check className={classes.whitecheck} />}
                </div>
                <span className={classes.typlabel}>Blau</span>
              </div>

              <div className='flex items-center'>
                <div className={classes.schwarz} onClick={() => setAussenfarbeSchwarz(d => !d)}>
                  {aussenfarbeSchwarz == true && <Check className={classes.whitecheck} />}
                </div>
                <span className={classes.typlabel}>Schwarz</span>
              </div>
              <div className='flex items-center'>
                <div className={classes.gruen} onClick={() => setAussenfarbeGruen(d => !d)}>
                  {aussenfarbeGruen == true && <Check className={classes.whitecheck} />}
                </div>
                <span className={classes.typlabel}>Grün</span>
              </div>
              <div className='flex items-center'>
                <div className={classes.orange} onClick={() => setAussenfarbeOrange(d => !d)}>
                  {aussenfarbeOrange == true && <Check className={classes.whitecheck} />}
                </div>
                <span className={classes.typlabel}>Orange</span>
              </div>
              <div className='flex items-center'>
                <div className={classes.rot} onClick={() => setAussenfarbeRot(d => !d)}>
                  {aussenfarbeRot == true && <Check className={classes.whitecheck} />}
                </div>
                <span className={classes.typlabel}>Rot</span>
              </div>
              <div className='flex items-center'>
                <div className={classes.gold} onClick={() => setAussenfarbeGold(d => !d)}>
                  {aussenfarbeGold == true && <Check className={classes.whitecheck} />}
                </div>
                <span className={classes.typlabel}>Gold</span>
              </div>
              <div className='flex items-center'>
                <div className={classes.braun} onClick={() => setAussenfarbeBraun(d => !d)}>
                  {aussenfarbeBraun == true && <Check className={classes.whitecheck} />}
                </div>
                <span className={classes.typlabel}>Braun</span>
              </div>
              <div className='flex items-center'>
                <div className={classes.silber} onClick={() => setAussenfarbeSilber(d => !d)}>
                  {aussenfarbeSilber == true && <Check className={classes.blackcheck} />}
                </div>
                <span className={classes.typlabel}>Silber</span>
              </div>
              <div className='flex items-center'>
                <div className={classes.gelb} onClick={() => setAussenfarbeGelb(d => !d)}>
                  {aussenfarbeGelb == true && <Check className={classes.whitecheck} />}
                </div>
                <span className={classes.typlabel}>Gelb</span>
              </div>
              <div className='flex items-center'>
                <div className={classes.bronze} onClick={() => setAussenfarbeBronze(d => !d)}>
                  {aussenfarbeBronze == true && <Check className={classes.whitecheck} />}
                </div>
                <span className={classes.typlabel}>Bronze</span>
              </div>
              <div className='flex items-center'>
                <div className={classes.violett} onClick={() => setAussenfarbeViolett(d => !d)}>
                  {aussenfarbeViolett == true && <Check className={classes.whitecheck} />}
                </div>
                <span className={classes.typlabel}>Violett</span>
              </div>
              <div className='flex items-center'>
                <div className={classes.grau} onClick={() => setAussenfarbeGrau(d => !d)}>
                  {aussenfarbeGrau == true && <Check className={classes.whitecheck} />}
                </div>
                <span className={classes.typlabel}>Grau</span>
              </div>
              <div className='flex items-center'>
                <div className={classes.weiss} onClick={() => setAussenfarbeWeiss(d => !d)}>
                  {aussenfarbeWeiss == true && <Check className={classes.blackcheck} />}
                </div>
                <span className={classes.typlabel}>Weiß</span>
              </div>
              {/* <span className={classes.blau}></span>
              <span className={classes.schwarz}></span>
              <span className={classes.gruen}></span>
              <span className={classes.orange}></span>
              <span className={classes.rot}></span>
              <span className={classes.gold}></span>
              <span className={classes.braun}></span>
              <span className={classes.silber}></span>
              <span className={classes.gelb}></span>
              <span className={classes.bronze}></span>
              <span className={classes.violett}></span>
              <span className={classes.grau}></span>
              <span className={classes.weiss}></span> */}
            </div>
            <label className={classes.label}>Lackierungsart</label>
            <div className={`flex items-center mt-2 ${classes.bb}`}>
                <div className={classes.weiss} onClick={() => setMetallic(d => !d)}>
                  {metallic == true && <Check className={classes.blackcheck} />}
                </div>
                <span className={classes.typlabel}>Metallic</span>
            </div>
            <label className={classes.label}>Polsterfarbe</label>
            <div className={classes.colorsgrid}>
              <div className='flex items-center'>
                <div className={classes.beige} onClick={() => setPolsterfarbeBeige(d => !d)}>
                  {polsterfarbeBeige == true && <Check className={classes.whitecheck} />}
                </div>
                <span className={classes.typlabel}>Beige</span>
              </div>
              <div className='flex items-center'>
                <div className={classes.blau} onClick={() => setPolsterfarbeBlau(d => !d)}>
                  {polsterfarbeBlau == true && <Check className={classes.whitecheck} />}
                </div>
                <span className={classes.typlabel}>Blau</span>
              </div>

              <div className='flex items-center'>
                <div className={classes.schwarz} onClick={() => setPolsterfarbeSchwarz(d => !d)}>
                  {polsterfarbeSchwarz == true && <Check className={classes.whitecheck} />}
                </div>
                <span className={classes.typlabel}>Schwarz</span>
              </div>
              <div className='flex items-center'>
                <div className={classes.gruen} onClick={() => setPolsterfarbeGruen(d => !d)}>
                  {polsterfarbeGruen == true && <Check className={classes.whitecheck} />}
                </div>
                <span className={classes.typlabel}>Grün</span>
              </div>
              <div className='flex items-center'>
                <div className={classes.orange} onClick={() => setPolsterfarbeOrange(d => !d)}>
                  {polsterfarbeOrange == true && <Check className={classes.whitecheck} />}
                </div>
                <span className={classes.typlabel}>Orange</span>
              </div>
              <div className='flex items-center'>
                <div className={classes.rot} onClick={() => setPolsterfarbeRot(d => !d)}>
                  {polsterfarbeRot == true && <Check className={classes.whitecheck} />}
                </div>
                <span className={classes.typlabel}>Rot</span>
              </div>
              <div className='flex items-center'>
                <div className={classes.weiss} onClick={() => setPolsterfarbeWeiss(d => !d)}>
                  {polsterfarbeWeiss == true && <Check className={classes.blackcheck} />}
                </div>
                <span className={classes.typlabel}>Weiss</span>
              </div>
              <div className='flex items-center'>
                <div className={classes.braun} onClick={() => setPolsterfarbeBraun(d => !d)}>
                  {polsterfarbeBraun == true && <Check className={classes.whitecheck} />}
                </div>
                <span className={classes.typlabel}>Braun</span>
              </div>
              <div className='flex items-center'>
                <div className={classes.silber} onClick={() => setPolsterfarbeGrau(d => !d)}>
                  {polsterfarbeGrau == true && <Check className={classes.blackcheck} />}
                </div>
                <span className={classes.typlabel}>Grau</span>
              </div>
              <div className='flex items-center'>
                <div className={classes.gelb} onClick={() => setPolsterfarbeGelb(d => !d)}>
                  {polsterfarbeGelb == true && <Check className={classes.whitecheck} />}
                </div>
                <span className={classes.typlabel}>Gelb</span>
              </div>
              <div className='flex items-center'>
                <div className={classes.bronze} onClick={() => setPolsterfarbeBraun(d => !d)}>
                  {polsterfarbeBraun == true && <Check className={classes.whitecheck} />}
                </div>
                <span className={classes.typlabel}>Bronze</span>
              </div>
              <div className='flex items-center'>
                <div className={classes.weiss} onClick={() => setPolsterfarbeSonstiges(d => !d)}>
                  {polsterfarbeSonstiges == true && <Check className={classes.blackcheck} />}
                </div>
                <span className={classes.typlabel}>Sonstiges</span>
              </div>
            </div>
            <label className={classes.label}>Material</label>
            <div className={classes.colorsgrid}>
              <div className='flex items-center'>
                <div className={classes.weiss} onClick={() => setAlcantara(d => !d)}>
                  {alcantara == true && <Check className={classes.blackcheck} />}
                </div>
                <span className={classes.typlabel}>Alcantara</span>
              </div>
              <div className='flex items-center'>
                <div className={classes.weiss} onClick={() => setStoff(d => !d)}>
                  {stoff == true && <Check className={classes.blackcheck} />}
                </div>
                <span className={classes.typlabel}>Stoff</span>
              </div>
              <div className='flex items-center'>
                <div className={classes.weiss} onClick={() => setVollleder(d => !d)}>
                  {vollleder == true && <Check className={classes.blackcheck} />}
                </div>
                <span className={classes.typlabel}>Vollleder</span>
              </div>

              <div className='flex items-center'>
                <div className={classes.weiss} onClick={() => setTeilleder(d => !d)}>
                  {teilleder == true && <Check className={classes.blackcheck} />}
                </div>
                <span className={classes.typlabel}>Teilleder</span>
              </div>
              <div className='flex items-center'>
                <div className={classes.weiss} onClick={() => setVelours(d => !d)}>
                  {velours == true && <Check className={classes.blackcheck} />}
                </div>
                <span className={classes.typlabel}>Velours</span>
              </div>
              <div className='flex items-center'>
                <div className={classes.weiss} onClick={() => setSonstiges(d => !d)}>
                  {sonstiges == true && <Check className={classes.blackcheck} />}
                </div>
                <span className={classes.typlabel}>Sonstiges</span>
              </div>
            </div>
            <label className={classes.label}>Anzahl der Türen</label>
            <div className={classes.leistungrow}>
            <Select 
              options={fahrzeughalterArr}
              styles={style}
              placeholder={"Von"}
              onChange={(e) => setTuereVon(e.value)}
              className={`${classes.select} mr-4`}
            />
            <Select 
              options={fahrzeughalterArr}
              styles={style}
              placeholder={"Bis"}
              onChange={(e) => setTuereBis(e.value)}
              className={classes.select}
            />
          </div>
            <label className={classes.label}>Anzahl der Sitze</label>
            <div className={classes.leistungrow}>
            <Select 
              options={fahrzeughalterArr}
              styles={style}
              placeholder={"Von"}
              onChange={(e) => setSitzeVon(e.value)}
              className={`${classes.select} mr-4`}
            />
            <Select 
              options={fahrzeughalterArr}
              styles={style}
              placeholder={"Bis"}
              onChange={(e) => setSitzeBis(e.value)}
              className={classes.select}
            />
          </div>
        </div>}
      
        <div className={`${classes.section} ${standortOpen == false && classes.closedsection}`} onClick={() => setStandortOpen(d => !d)}>
          <div className={classes.sectionheading}>Standort & Sonstiges</div>
          <div className={classes.expandrow}><Expand className={`${classes.unrotated} ${standortOpen == true && classes.rotated}`} /></div>
        </div> 
        {standortOpen == true && <div className={classes.basiscontainer}>
          <label className={classes.label}>Suche in Region</label> 
          <div className={classes.regionrow}>
            <Select 
              options={laender}
              styles={style}
              placeholder="Land"
              onChange={(e) => setSelectedLand(e.value)}
              className={`${classes.select} mr-4`}
            />
            <Select 
              options={bundeslaender}
              styles={style}
              placeholder="Bundesland/Bezirk"
              onChange={(e) => setSelectedLand(e.value)}
              className={`${classes.select} mr-4`}
            />
            <Select 
              options={umkreis}
              styles={style}
              placeholder="Umkreis"
              onChange={(e) => setSelectedUmkreis(e.value)}
              className={`${classes.select}`}
            />
          </div> 
          <label className={classes.label}>Inserent</label> 
          <div className={classes.colorsgrid}>
            <div className='flex items-center'>
              <div className={classes.weiss} onClick={() => {
                setInserentAlle(d => !d);
                if(inserentAlle == false){
                  setInserentHaendler(true)
                  setInserentPrivat(true)
                }
                if(inserentAlle == true){
                  setInserentHaendler(false)
                  setInserentPrivat(false)
                }
              }}>
                {inserentAlle == true && <Check className={classes.blackcheck} />}
              </div>
              <span className={classes.typlabel}>Alle</span>
            </div>
            <div className='flex items-center'>
              <div className={classes.weiss} onClick={() => setInserentHaendler(d => !d)}>
                {inserentHaendler == true && <Check className={classes.blackcheck} />}
              </div>
              <span className={classes.typlabel}>Händler</span>
            </div>
            <div className='flex items-center'>
              <div className={classes.weiss} onClick={() => setInserentPrivat(d => !d)}>
                {inserentPrivat == true && <Check className={classes.blackcheck} />}
              </div>
              <span className={classes.typlabel}>Privat</span>
            </div>
          </div>
          <label className={classes.label}>Umwelt</label>
          <div className={classes.fahrzeugtypgrid}>
            <Select 
              options={schadstoffklassen}
              styles={style}
              placeholder={"Schadstoffklasse (mind.)"}
              onChange={(e) => setSelectedSchadstoffklasse(e.value)}
              isSearchable
            />
            <Select 
              options={feinstaubplaketten}
              styles={style}
              placeholder={"Feinstaubplakette (mind.)"}
              onChange={(e) => setSelectedSchadstoffklasse(e.value)}
              isSearchable
            />
            <div className='flex items-center'>
              <div className={classes.weiss} onClick={() => setRusspartikelfilter(d => !d)}>
                {russpartikelfilter == true && <Check className={classes.blackcheck} />}
              </div>
              <span className={classes.typlabel}>Rußpartikelfilter</span>
            </div>
          </div>
          <label className={classes.label}>Suchzeitraum</label>
          <div className={classes.lastfahrzeugtypgrid}>
            <Select 
              options={suchzeitraum}
              styles={style}
              placeholder={"Alle"}
              onChange={(e) => setSelectedSuchzeitraum(e.value)}
              isSearchable
            />
            <div className='flex items-center' onClick={() => setZweitage(d => !d)}>
              <div className={classes.weiss} >
                {zweitage == true && <Check className={classes.blackcheck} />}
              </div>
              <span className={classes.suchlabel}>nur Anzeigen<br></br>der letzten 48 Stunden</span>
            </div>

            <div className='flex items-center' onClick={() => setMwstAusweisbarSuche(d => !d)}>
              <div className={classes.weiss} >
                {mwstAusweisbarSuche == true && <Check className={classes.blackcheck} />}
              </div>
              <span className={classes.suchlabel}>MwSt. ausweisbar</span>
            </div>

          
          </div>
        </div>}
      
        
        
        
        <div className={classes.bottomrow}>
            <div className={classes.tworow}>
              <div className={classes.resetfilter}>Filter zurücksetzen</div>
              <div className={classes.suchenundspeichern}>Suchen & Speichern</div>
            </div>
            <div className={classes.suchen}>
             {anzahlTreffer} Treffer anzeigen
            </div>
        </div>
        
        
        
        </>
        
        : 
        
        <>
          <div className={classes.inserentcontainer}>
              <div className={`${classes.inserentitem} ${inserent == "alle" && classes.selectedinserent}`} onClick={() => setInserent("alle")}>Alle</div>
              <div className={`${classes.inserentitem} ${inserent == "haendler" && classes.selectedinserent}`} onClick={() => setInserent("haendler")}>Händler</div>
              <div className={`${classes.inserentitem} ${inserent == "privat"  && classes.selectedinserent}`} onClick={() => setInserent("privat")}>Privat</div>
          </div>
          <div className={classes.easysearchcontainer}>
              <div className={classes.left}>
                <Select 
                  options={brands}
                  styles={whitestyle}
                  placeholder={"Marke"}
                  onChange={(e) => setSelectedBrand(e.value)}
                  className={"mb-4"}
                />
                <Select 
                  options={models}
                  styles={whitestyle}
                  placeholder={"Modell"}
                  onChange={(e) => setSelectedModel(e.value)}
                  className={"mb-4"}
                />
                <Select 
                  options={erstzulassungen}
                  styles={whitestyle}
                  placeholder={"Erstzulassung"}
                  onChange={(e) => setErstzulassungVon(e.value)}
                  className={"mb-4"}
                />
                <div className={`${classes.tworow} mb-4`}>
                  <div className={classes.filter}>Filter zurücksetzen</div>
                  <div className={classes.speichern}>Suche speichern</div>
                </div>
                <div className={classes.save}>
                  {anzahlTreffer} Treffer anzeigen
                </div>
              </div>
              <div className={classes.right}>
                <div className={classes.carsgrid}>
                  <div className={classes.car}>
                    <Limo className={`${classes.carsvg} ${bodyType == "limousine" && classes.selectedcarsvg}`} onClick={() => setBodyType("limousine")} />
                    <span className={`${classes.text} ${bodyType == "limousine" && classes.selectedcarsvg}`}>Limousine</span>
                  </div>
                  <div className={classes.car}>
                    <Suv className={`${classes.carsvg} ${bodyType == "suv" && classes.selectedcarsvg}`} onClick={() => setBodyType("suv")} />
                    <span className={`${classes.text} ${bodyType == "suv" && classes.selectedcarsvg}`}>SUV</span>
                  </div>
                  <div className={classes.car}>
                    <KombiVan className={`${classes.carsvg} ${bodyType == "kombivan" && classes.selectedcarsvg}`} onClick={() => setBodyType("kombivan")} />
                    <span className={`${classes.text} ${bodyType == "kombivan" && classes.selectedcarsvg}`}>Kombi Van</span>
                  </div>
                  <div className={classes.car}>
                    <Coupe className={`${classes.carsvg} ${bodyType == "coupe" && classes.selectedcarsvg}`} onClick={() => setBodyType("coupe")} />
                    <span className={`${classes.text} ${bodyType == "coupe" && classes.selectedcarsvg}`}>Coupè</span>
                  </div>
                  <div className={classes.car}>
                    <Cabrio className={`${classes.carsvg} ${bodyType == "cabrio" && classes.selectedcarsvg}`} onClick={() => setBodyType("cabrio")} />
                    <span className={`${classes.text} ${bodyType == "cabrio" && classes.selectedcarsvg}`}>Cabrio</span>
                  </div>
                  <div className={classes.car}>
                    <Kleinbus className={`${classes.carsvg} ${bodyType == "kleinbus" && classes.selectedcarsvg}`} onClick={() => setBodyType("kleinbus")}/>
                    <span className={`${classes.text} ${bodyType == "kleinbus" && classes.selectedcarsvg}`}>Kleinbus</span>
                  </div>
                </div>
                <div className={classes.wrapper}>
                  <label className={classes.label}>Preis (€)</label>
                  <div className={`${classes.slider} slider`}>
                    <div className={`${classes.progress} progress`}></div>
                  </div>
                  <div className={`${classes.range_input} range-input`}>
                    <input type={"range"} className={`${classes.range_min} range-min`} min={0} max={50000} defaultValue={12000} step={100} onChange={(e) => {
                      setMinVal(e.target.value);
                    }} />
                    <input type={"range"} className={`${classes.range_max} range-max`} min={0} max={50000} defaultValue={38000} step={100}  onChange={(e) => {
                      setMaxVal(e.target.value)
                    }}/>
                  </div>
                  <div className={classes.minmaxinputs}>
                    <input type={"number"} className={`${classes.inputmin} input-min`} value={minVal} defaultValue={12000} placeholder="Min"  />
                    <input type={"number"} className={`${classes.inputmin} input-max`} value={maxVal} defaultValue={38000} placeholder="Max"  />
                  </div>
                </div>
                <div className={classes.wrapper}>
                  <label className={classes.label}>Leistung (kW)</label>
                  <div className={`${classes.slider} sliderL`}>
                    <div className={`${classes.progress} progressL`}></div>
                  </div>
                  <div className={`${classes.range_input} range-inputLeistung`}>
                    <input type={"range"} className={`${classes.range_min} range-minLeistung`} min={0} max={1000} defaultValue={250} step={1} onChange={(e) => {
                      setMinValLeistung(e.target.value);
                    }} />
                    <input type={"range"} className={`${classes.range_max} range-maxLeistung`} min={0} max={1000} defaultValue={750} step={1}  onChange={(e) => {
                      setMaxValLeistung(e.target.value)
                    }}/>
                  </div>
                  <div className={classes.minmaxinputs}>
                    <input type={"number"} className={`${classes.inputmin} input-minLeistung`} value={minValLeistung} defaultValue={250} placeholder="Min"  />
                    <input type={"number"} className={`${classes.inputmin} input-maxLeistung`} value={maxValLeistung} defaultValue={750} placeholder="Max"  />
                  </div>
                </div>
                <div className={classes.wrapper}>
                  <label className={classes.label}>Preis (€)</label>
                  <div className={`${classes.slider} sliderPreis`}>
                    <div className={`${classes.progress} progressPreis`}></div>
                  </div>
                  <div className={`${classes.range_input} range-inputPreis`}>
                    <input type={"range"} className={`${classes.range_min} range-minPreis`} min={0} max={50000} defaultValue={12000} step={500} onChange={(e) => {
                      setMinValPreis(e.target.value);
                    }} />
                    <input type={"range"} className={`${classes.range_max} range-maxPreis`} min={0} max={50000} defaultValue={38000} step={500}  onChange={(e) => {
                      setMaxValPreis(e.target.value)
                    }}/>
                  </div>
                  <div className={classes.minmaxinputs}>
                    <input type={"number"} className={`${classes.inputmin} input-minPreis`} value={minValPreis} defaultValue={12000} placeholder="Min"  />
                    <input type={"number"} className={`${classes.inputmin} input-maxPreis`} value={maxValPreis} defaultValue={38000} placeholder="Max"  />
                  </div>
                </div>
              </div>
          </div>
        </>}
      </div>
    </div>
  );
}
