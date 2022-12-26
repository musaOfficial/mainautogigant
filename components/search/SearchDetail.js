import Router from "next/router";

import Colors from "./Colors";
import DataLocation from "./DataLocation";
import Environment from "./Environment";
import Furnishing from "./Furnishing";
import Offer from "./Offer";
import UphosteryColor from "./UphosteryColor";
import VehicleCondition from "./VehicleCondition";
import { useState, useEffect } from "react";
import Input from "../ui/Input";
import InputSelect from "../ui/InputSelect";
import CheckBoxItem from "./CheckBoxItem";
import ModelItem from "./ModelItem";
import ColorItem from "./ColorItem";
import { fahrz, unfall } from "./selectOptions";
import { schads, fahrzeu } from "./selectOptions";
import { offer } from "./selectOptions";
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

export default function SearchDetail() {
  const [showGoTop, setShowGoTop] = useState(false);

  const handleVisibleButton = () => {
    setShowGoTop(window.pageYOffset > 50);
  };

  const handleScrollUp = () => {
    window.scrollTo({ left: 0, top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleVisibleButton);
  }, []);

  const [expanded, setExpanded] = useState(true);
  const [brandName, setBrandName] = useState({}); 
  const [varient, setVarient] = useState("");
  const [modelName, setModelName] = useState({});
  const [modelItems, setModelItems] = useState([]);

  

  const addModel = () => {
    setModelItems([
      ...modelItems,
      {
        brandName: brandName.value,
        modelName: modelName.value,
        varient: varient,
      },
    ]);

    setBrandName({value: "", label: ""});
    setVarient("");
    setModelName({value: "", label: ""});
    setBrandNameInputValue("");
    setBrandSelected(false);
  };

  const deleteHandler = (id) => {
    let newArr = modelItems;
    newArr.splice(id, 1);
    setModelItems([...newArr]);
  }

  const [brandSelected, setBrandSelected] = useState();

  const [modelInputValue, setModelInputValue] = useState();
  const [brandNameInputValue, setBrandNameInputValue] = useState();

  const [furnishingExpanded, setFurnishingExpanded] = useState(false);
  const [colorsExpanded, setColorsExpanded] = useState(false);
  const [uphosteryExpanded, setUphosteryExpanded] = useState(false);
  const [vehicleExpanded, setVehicleExpanded] = useState(false);
  const [environmentExpanded, setEnvironmentExpanded] = useState(false);
  const [offerExpanded, setOfferExpanded] = useState(false);
  return (
    <div className="bg-white py-6">
      <div className="lg:px-6 md:!px-0">
        <div className="w-10/12 lg:w-full max-w-ag-container mx-auto lg:pt-0">
          <div className="pb-4 md:py-4 rounded-tr-10 rounded-tl-10 px-8 bg-theme-gray-4 pt-6 mt-7">
            <button onClick={() => Router.back()} className="inline-flex">
              <img
                className="w-6 opacity-60"
                src="/images/icons/back-button.png"
              />
              Zurück
            </button>
            <h2 className="text-3xl font-bold text-theme-gray-4">
              Detailsuche
            </h2>
          </div>
        </div>
        <div className="w-10/12 lg:w-full max-w-ag-container mx-auto lg:px-6 lg:pt-0 px-8 bg-theme-gray-4 rounded-bl-10 rounded-br-10">
        <div className="text-base border-b-2 pt-6">
      <button
        onClick={() => setExpanded(!expanded)}
        className="w-full inline-flex items-center justify-between font-bold md:pt-6 text-theme-gray-4"
      >
        Basisdaten &amp; Standort
        <img
          src="/images/icons/expand-arrow.png"
          className={`w-8 opacity-50 ${expanded ? "rotate-0" : "rotate-180"}`}
        />
      </button>
      <div
        className={`${expanded ? "h-auto pb-4" : "h-0"} overflow-hidden pt-4`}
      >
        {modelItems
          ? modelItems.map((item, i) => (
            <ModelItem
              key={i}
              id={i}
              brandName={item.brandName}
              modelName={item.modelName}
              varient={item.varient}
              deleteHandler={() => deleteHandler(i)}
            />
          ))
          : null}
        {/* Basisdaten & Standort */}
        <div className="flex items-end md:flex-col justify-between">
          <div className="w-300 lg:w-200 md:!w-full md:mb-4">
            <p className="mb-1">Marke</p>
            <InputSelect
              options={marke1}
              placeholder={marke1[0].label}
              onChange={(e) => {
                setBrandSelected(true);
                if(e.value == "alle"){
                  setBrandSelected(false);
                }
                setBrandName(e);
              }}
              name={"Marke"}
              value={brandName || marke1[0].label}
              regYear
            />
          </div>
          {/* <div className="w-8"></div> */}
          <div className="w-300 lg:w-200 md:!w-full md:mb-4">
            <p className="mb-1">Modell</p>
            <InputSelect
              options={marke2}
              placeholder={marke1[0].label}
              onChange={(e) => {
                setModelName(e)
              }}
              value={modelName || marke1[0].label}
              name={"Modell"}
              disabled={!brandSelected}
              regYear
            />
          </div>
          {/* <div className="w-8"></div> */}
          <div className="md:w-full flex items-end justify-between md:flex-col">
            <div className="mr-4 md:mr-0 md:w-full">
              <p className="mb-1">Variante</p>
              <Input
                placeholder={marke1[0].label}
                onChange={(e) => setVarient(e.target.value)}
                value={varient}
              />
            </div>
            {/* <div className="w-8"></div> */}
            <button className="w-1/2 sm:w-full mb-6 sm:mb-4 sm:mr-0 md:mx-auto inline-block px-4 py-3 sm:px-4 lg:text-sm rounded-10 bg-theme-yellow-2 text-white text-base font-bold ease-linear duration-300 hover:bg-theme-yellow-3">
              Alle Filter entfernen
            </button>
          </div>
        </div>
        {/* Add more brands/models */}

        <button
          onClick={addModel}
          className={`text-theme-gray-4 font-bold py-8 text-base flex items-center`}
        >
          <svg className="mr-2" xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25">
            <path id="add_circle" d="M15.656,22.75h1.875V17.563H22.75V15.688H17.531V10.25H15.656v5.438H10.25v1.875h5.406ZM16.5,29a12.678,12.678,0,0,1-4.937-.953,12.1,12.1,0,0,1-6.609-6.609A12.678,12.678,0,0,1,4,16.5a12.6,12.6,0,0,1,.953-4.906A12.2,12.2,0,0,1,7.594,7.625,12.462,12.462,0,0,1,16.5,4,12.4,12.4,0,0,1,29,16.5a12.462,12.462,0,0,1-3.625,8.906,12.2,12.2,0,0,1-3.969,2.641A12.6,12.6,0,0,1,16.5,29Zm0-12.5Zm0,10.625A10.229,10.229,0,0,0,24,24a10.229,10.229,0,0,0,3.125-7.5A10.229,10.229,0,0,0,24,9a10.229,10.229,0,0,0-7.5-3.125A10.229,10.229,0,0,0,9,9a10.229,10.229,0,0,0-3.125,7.5A10.229,10.229,0,0,0,9,24,10.229,10.229,0,0,0,16.5,27.125Z" transform="translate(-4 -4)" fill="#6c757d" />
          </svg>

          Weitere Marken/Modelle hinzufügen
        </button>
        {/* Select boxes */}
        <div className="flex justify-between md:flex-col">
          <div className="w-300 md:w-full md:mb-4">
            <p className="mb-1">Karosserieform</p>
            <InputSelect options={karo} placeholder={karo[1].label} regYear />
          </div>
          <div className="w-5"></div>
          <div className="flex flex-1 items-end md:w-full md:mb-4">
            <div className="w-1/2">
              <p className="mb-1">Erstzulassung</p>
              <InputSelect
                options={van1}
                placeholder={van1[1].label}
                regYear
                classes="pr-4"
              />
            </div>
            <span className="mr-3"></span>
            <div className="w-1/2">
              <InputSelect options={bis1} placeholder={bis1[1].label} regYear />
            </div>
          </div>
          <div className="w-5"></div>
          <div className="flex flex-1 items-end">
            <div className="w-1/2">
              <p className="mb-1">Preis</p>
              <InputSelect
                options={van2}
                placeholder={van2[1].label}
                regYear
                classes="pr-4"
              />
            </div>
            <span className="mr-3"></span>
            <div className="w-1/2">
              <InputSelect options={bis2} placeholder={bis2[1].label} regYear />
            </div>
          </div>
        </div>
        <div className="flex justify-between md:flex-col mt-8">
          <div className="w-300 md:w-full md:mb-4">
            <p className="mb-1">Land</p>
            <InputSelect options={land} placeholder={land[1].label} regYear />
          </div>
          <div className="w-5"></div>
          <div className="flex flex-1 items-end md:mb-4">
            <div className="w-full">
              <p className="mb-1">Stadt/PLZ</p>
              <div className="relative">
                <Input
                  placeholder="z.B Wien oder 1010 "
                />
                <button className="w-6 bg-white absolute right-2 bottom-3">
                  <img className="opacity-50" src="/images/icons/location-mark.png" />
                </button>
              </div>
            </div>
          </div>
          <div className="w-5"></div>
          <div className="flex flex-1 items-end">
            <div className="w-full">
              <p className="mb-1">Umkreis (km)</p>
              <InputSelect
                options={umk}
                placeholder={umk[1].label}
                regYear
                classes="pr-4"
              />
            </div>
          </div>
        </div>
        <div className="flex justify-between mt-8 md:flex-col">
          <div className="w-300 md:w-full md:mb-4">
            <p className="mb-1">Kraftstoff</p>
            <InputSelect options={kraft} placeholder={kraft[1].label} regYear />
          </div>
          <div className="w-5"></div>
          <div className="flex flex-1 items-end md:mb-4">
            <div className="w-1/2">
              <p className="mb-1">Kilometerstand</p>
              <InputSelect
                options={kilo}
                placeholder={kilo[1].label}
                regYear
                classes="pr-4"
              />
            </div>
            <span className="mr-3"></span>
            <div className="w-1/2">
              <InputSelect
                options={kilo2}
                placeholder={kilo2[1].label}
                regYear
              />
            </div>
          </div>
          <div className="w-5 md:hidden"></div>
          <div className="flex flex-1">
            <div className="">
              <p className="mb-1">Leistung</p>
              <InputSelect
                options={leis}
                placeholder={leis[1].label}
                regYear
                classes="pr-4 md:pr-0"
              />
            </div>
            <div className="w-5 md:hidden"></div>
            <div className="flex items-end flex-1">
              <div className="w-1/2">
                <p className="mb-1">von</p>
                <InputSelect
                  options={von}
                  placeholder={von[1].label}
                  regYear
                  classes="pr-4"
                />
              </div>
              <span className="mr-3"></span>
              <div className="w-1/2">
                <p className="mb-1">bis</p>
                <InputSelect options={bis} placeholder={bis[1].label} regYear />
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-between mt-8 md:flex-col">
          <div className="w-300 md:w-full md:mb-4">
            <p className="mb-1">Getriebe</p>
            <InputSelect options={getri} placeholder={getri[1].label} regYear />
          </div>
          <div className="w-5"></div>
          <div className="flex-1 items-end md:mb-4">
            <p className="mb-1">Anzahl Türen</p>
            <div className="flex justify-between mt-3">
              <div className="flex items-center form-check form-check-inline">
                <CheckBoxItem title="Alle" wAuto />
              </div>
              <div className="flex items-center">
                <CheckBoxItem title="2/3" wAuto />
              </div>
              <div className="flex items-center">
                <CheckBoxItem title="4/5" wAuto />
              </div>
              <div className="flex items-center">
                <CheckBoxItem title="6/7" wAuto />
              </div>
            </div>
          </div>
          <div className="w-5 md:hidden"></div>
          <div className="flex flex-1 items-end">
            <div className="w-1/2">
              <p className="mb-1">Sitzplätze</p>
              <InputSelect
                options={von4}
                placeholder={von4 ? von4[1].label : ""}
                regYear
                classes="pr-4"
              />
            </div>
            <span className="mr-3"></span>
            <div className="w-1/2">
              <InputSelect options={bis4} placeholder={bis4[1].label} regYear />
            </div>
          </div>
        </div>
        <div className="w-1/3 pr-10 mt-8 md:w-full">
          <p className="mb-1">Verkäufer</p>
          <div className="flex justify-between mt-2">
            <div className="flex items-center form-check form-check-inline">
              <CheckBoxItem title="Alle" wAuto />
            </div>
            <div className="flex items-center">
              <CheckBoxItem title="Händler" wAuto />
            </div>
            <div className="flex items-center">
              <CheckBoxItem title="Privat" wAuto />
            </div>
          </div>
        </div>
        <div className="w-4/5 lg:w-full mt-8 md:w-full">
          <p className="mb-1">Fahrzeugzustand</p>
          <div className="flex justify-between mt-2 md:flex-wrap md:justify-start">
            <div className="flex items-center md:mr-4 md:mb-4">
              <CheckBoxItem title="Neu" wAuto />
            </div>
            <div className="flex items-center md:mr-4 md:mb-4">
              <CheckBoxItem title="Gebraucht" wAuto />
            </div>
            <div className="flex items-center md:mr-4 md:mb-4">
              <CheckBoxItem title="Oldtimer" wAuto />
            </div>
            <div className="flex items-center md:mr-4 md:mb-4">
              <CheckBoxItem title="Jahreswagen" wAuto />
            </div>
            <div className="flex items-center md:mr-4 md:mb-4">
              <CheckBoxItem title="Vorführfahrzeug" wAuto />
            </div>
            <div className="flex items-center md:mr-4 md:mb-4">
              <CheckBoxItem title="Tageszulassung" wAuto />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="text-base border-b-2 mt-4">
      <button
        onClick={() => setFurnishingExpanded(d => !d)}
        className="w-full inline-flex items-center justify-between font-bold text-theme-gray-4"
      >
        Ausstattung
        <img
          src="/images/icons/expand-arrow.png"
          className={`w-8 opacity-50 ${furnishingExpanded ? "rotate-0" : "rotate-180"}`}
        />
      </button>
      <div
        className={`${furnishingExpanded ? "h-auto pb-4" : "h-0"} overflow-hidden pt-4`}
      >
        <div className="flex justify-between md:flex-wrap">
          <div className="w-1/3">
            <CheckBoxItem wAuto marginBottom title="2-Zonen Klimaautomatik" />
            <CheckBoxItem wAuto marginBottom title="3-Zonen Klimaautomatik" />
            <CheckBoxItem wAuto marginBottom title="4-Zonen Klimaautomatik" />
            <CheckBoxItem wAuto marginBottom title="360º Kamera" />
            <CheckBoxItem wAuto marginBottom title="ABS" />
            <CheckBoxItem wAuto marginBottom title="Abstandstempomat" />
            <CheckBoxItem wAuto marginBottom title="Abstandswarner" />
            <CheckBoxItem wAuto marginBottom title="Airbag hinten" />
            <CheckBoxItem wAuto marginBottom title="Alarmanlage" />
            <CheckBoxItem wAuto marginBottom title="Allrad" />
            <CheckBoxItem wAuto marginBottom title="Allwetterreifen" />
            <CheckBoxItem wAuto marginBottom title="Alufelgen" />
            <CheckBoxItem wAuto marginBottom title="Ambientebeleuchtung" />
            <CheckBoxItem wAuto marginBottom title="Android Auto" />
            <CheckBoxItem wAuto marginBottom title="Anhängerkupplung" />
            <CheckBoxItem wAuto marginBottom title="Apple CarPlay" />
            <CheckBoxItem wAuto marginBottom title="Armlehne" />
            <CheckBoxItem wAuto marginBottom title="Beheizbare Frontscheibe" />
            <CheckBoxItem wAuto marginBottom title="Beheizbares Lenkrad" />
            <CheckBoxItem wAuto marginBottom title="Behindertengerecht" />
            <CheckBoxItem wAuto marginBottom title="Beifahrerairbag" />
            <CheckBoxItem wAuto marginBottom title="Berganfahrassistent" />
            <CheckBoxItem wAuto marginBottom title="Bi-Xenon Scheinwerfer" />
            <CheckBoxItem wAuto marginBottom title="Biodieselumrüstung" />
            <CheckBoxItem wAuto marginBottom title="Blendfreies Fernlicht" />
            <CheckBoxItem wAuto marginBottom title="Bluetooth" />
            <CheckBoxItem wAuto marginBottom title="Bordcomputer" />
            <CheckBoxItem wAuto marginBottom title="CD" />
            <CheckBoxItem wAuto marginBottom title="DAB-Radio" />
            <CheckBoxItem wAuto marginBottom title="Dachreling" />
            <CheckBoxItem wAuto marginBottom title="E10-geignet" />
            <CheckBoxItem wAuto marginBottom title="Einparkhilfe" />
            <CheckBoxItem wAuto marginBottom title="Einparkhilfe Kamera" />
            <CheckBoxItem wAuto marginBottom title="Einparkhilfe selbst lenkendes System" />
            <CheckBoxItem wAuto marginBottom title="Einparkhilfe Sensoren hinten" />
            <CheckBoxItem wAuto marginBottom title="Einparkhilfe Sensoren vorne" />
            <CheckBoxItem wAuto marginBottom title="Elektr. Fensterheber" />
            <CheckBoxItem wAuto marginBottom title="Elektr. Sitzeinstellung, hinten" />
            <CheckBoxItem wAuto marginBottom title="Elektrische Seitenspiegel" />
            <CheckBoxItem wAuto marginBottom title="Elektrische Sitze" />
            <CheckBoxItem wAuto marginBottom title="Elektronische Parkbremse" />
            <CheckBoxItem wAuto marginBottom title="ESP" />
            <CheckBoxItem wAuto marginBottom title="Fahrerairbag" />
            <CheckBoxItem wAuto title="Fernlichtassistent" />
          </div>
          <div className="w-1/3">
            <CheckBoxItem wAuto marginBottom title="Freisprecheinrichtung" />
            <CheckBoxItem wAuto marginBottom title="Gebäckraumabtrennung" />
            <CheckBoxItem wAuto marginBottom title="Geschwindigkeitsbegrenzungsanlage" />
            <CheckBoxItem wAuto marginBottom title="Getönte Scheiben" />
            <CheckBoxItem wAuto marginBottom title="Head-up display" />
            <CheckBoxItem wAuto marginBottom title="Induktionsladen für Smartphones" />
            <CheckBoxItem wAuto marginBottom title="Innenspiegel automatisch abblendend" />
            <CheckBoxItem wAuto marginBottom title="Isofix" />
            <CheckBoxItem wAuto marginBottom title="Katalysator" />
            <CheckBoxItem wAuto marginBottom title="Klimaanlage" />
            <CheckBoxItem wAuto marginBottom title="Klimaautomatik" />
            <CheckBoxItem wAuto marginBottom title="Kopfairbag" />
            <CheckBoxItem wAuto marginBottom title="Kurvenlicht" />
            <CheckBoxItem wAuto marginBottom title="Laserlicht" />
            <CheckBoxItem wAuto marginBottom title="LED-Scheinwerfer" />
            <CheckBoxItem wAuto marginBottom title="LED-Tagfahrlicht" />
            <CheckBoxItem wAuto marginBottom title="Lederausstattung" />
            <CheckBoxItem wAuto marginBottom title="Lederlenkrad" />
            <CheckBoxItem wAuto marginBottom title="Lichtsensor" />
            <CheckBoxItem wAuto marginBottom title="Lordosenstütze" />
            <CheckBoxItem wAuto marginBottom title="Luftfederung" />
            <CheckBoxItem wAuto marginBottom title="Markise" />
            <CheckBoxItem wAuto marginBottom title="Massagesitze" />
            <CheckBoxItem wAuto marginBottom title="MP3" />
            <CheckBoxItem wAuto marginBottom title="Müdigkeitswarnsystem" />
            <CheckBoxItem wAuto marginBottom title="Multifunktionslenkrad" />
            <CheckBoxItem wAuto marginBottom title="Musikstreaming integriert" />
            <CheckBoxItem wAuto marginBottom title="Nachtsicht-Assistent" />
            <CheckBoxItem wAuto marginBottom title="Navigationssystem" />
            <CheckBoxItem wAuto marginBottom title="Nebelscheinwerfer" />
            <CheckBoxItem wAuto marginBottom title="Notbremsassistent" />
            <CheckBoxItem wAuto marginBottom title="Notrad" />
            <CheckBoxItem wAuto marginBottom title="Notrufsystem" />
            <CheckBoxItem wAuto marginBottom title="Pannenkit" />
            <CheckBoxItem wAuto marginBottom title="Panoramadach" />
            <CheckBoxItem wAuto marginBottom title="Radio" />
            <CheckBoxItem wAuto marginBottom title="Raucherpaket" />
            <CheckBoxItem wAuto marginBottom title="Rechtslenker" />
            <CheckBoxItem wAuto marginBottom title="Regensensor" />
            <CheckBoxItem wAuto marginBottom title="Reichweitenverlängerer" />
            <CheckBoxItem wAuto marginBottom title="Reifendruckkontrollsystem" />
            <CheckBoxItem wAuto marginBottom title="Reserverad" />
            <CheckBoxItem wAuto marginBottom title="Schaltwippen" />
            <CheckBoxItem wAuto title="Scheinwerferreinigung" />
          </div>
          <div className="w-1/3">
            <CheckBoxItem wAuto marginBottom title="Schiebedach" />
            <CheckBoxItem wAuto marginBottom title="Schiebetür" />
            <CheckBoxItem wAuto marginBottom title="Schiebetür links" />
            <CheckBoxItem wAuto marginBottom title="Schiebetür rechts" />
            <CheckBoxItem wAuto marginBottom title="Schlüssellose Zentralverriegelung" />
            <CheckBoxItem wAuto marginBottom title="Seitenairbag" />
            <CheckBoxItem wAuto marginBottom title="Servolenkung" />
            <CheckBoxItem wAuto marginBottom title="Sitzbelüftung" />
            <CheckBoxItem wAuto marginBottom title="Sitzheizung" />
            <CheckBoxItem wAuto marginBottom title="Skisack" />
            <CheckBoxItem wAuto marginBottom title="Sommerreifen" />
            <CheckBoxItem wAuto marginBottom title="Soundsystem" />
            <CheckBoxItem wAuto marginBottom title="Spoiler" />
            <CheckBoxItem wAuto marginBottom title="Sportfahrwerk" />
            <CheckBoxItem wAuto marginBottom title="Sportpaket" />
            <CheckBoxItem wAuto marginBottom title="Sportsitze" />
            <CheckBoxItem wAuto marginBottom title="Sprachsteuerung" />
            <CheckBoxItem wAuto marginBottom title="Spurhalteassistent" />
            <CheckBoxItem wAuto marginBottom title="Stahlfelgen" />
            <CheckBoxItem wAuto marginBottom title="Standheizung" />
            <CheckBoxItem wAuto marginBottom title="Start/Stop-Automatik" />
            <CheckBoxItem wAuto marginBottom title="Tagfahrlicht" />
            <CheckBoxItem wAuto marginBottom title="Taxi oder Mietwagen" />
            <CheckBoxItem wAuto marginBottom title="teilb. Rücksitzbank" />
            <CheckBoxItem wAuto marginBottom title="Tempomat" />
            <CheckBoxItem wAuto marginBottom title="Totwinkel-Assistent" />
            <CheckBoxItem wAuto marginBottom title="Tochscreen" />
            <CheckBoxItem wAuto marginBottom title="Traktionskontrolle" />
            <CheckBoxItem wAuto marginBottom title="Tuning" />
            <CheckBoxItem wAuto marginBottom title="TV" />
            <CheckBoxItem wAuto marginBottom title="Umklappbarer Beifahrersitz" />
            <CheckBoxItem wAuto marginBottom title="USB" />
            <CheckBoxItem wAuto marginBottom title="Verkehrszeichenerkennung" />
            <CheckBoxItem wAuto marginBottom title="Voll-LED Scheinwerfer" />
            <CheckBoxItem wAuto marginBottom title="Volldigitales Kombiinstrument" />
            <CheckBoxItem wAuto marginBottom title="W-Lan / Wifi Hotspot" />
            <CheckBoxItem wAuto marginBottom title="Wegfahrsperre" />
            <CheckBoxItem wAuto marginBottom title="Windschott (Cabrio)" />
            <CheckBoxItem wAuto marginBottom title="Winterpaket" />
            <CheckBoxItem wAuto marginBottom title="Winterreifen" />
            <CheckBoxItem wAuto marginBottom title="Xenonscheinwerfer" />
            <CheckBoxItem wAuto marginBottom title="Zentralverriegelung" />
            <CheckBoxItem wAuto title="Zentralverriegelung mit Funkfernbedienung" />
          </div>
        </div>
        <button className="font-bold py-8 text-xs flex items-center">
          <img className="w-6 opacity-80 mr-2" src='/images/icons/remove-minus-icon.png' />
          Ungenutzte Filter ausblenden
        </button>
      </div>
    </div>
    <div className="text-base border-b-2 mt-4">
      <button
        onClick={() => setColorsExpanded(d => !d)}
        className="w-full inline-flex items-center justify-between font-bold text-base text-theme-gray-4"
      >
        Farbe
        <img
          src="/images/icons/expand-arrow.png"
          className={`w-8 opacity-50 ${colorsExpanded ? "rotate-0" : "rotate-180"}`}
        />
      </button>
      <div
        className={`${colorsExpanded ? "h-auto pb-4" : "h-0"} overflow-hidden pt-4`}
      >
          <div className="">
                <p className="text-base mb-6">Außenfarbe</p>
                <div className="flex justify-between md:flex-wrap">
                    <ColorItem title='Beige' bgColor='bg-farbe-beige' />
                    <ColorItem title='Blau' bgColor='bg-farbe-blue'/>
                    <ColorItem title='Schwarz' bgColor='bg-black' />
                    <ColorItem title='Grün' bgColor='bg-farbe-green' />
                    <ColorItem title='Orange' bgColor='bg-farbe-orange' />
                    <ColorItem title='Rot' bgColor='bg-farbe-red'/>
                </div>
                <div className="flex justify-between mt-8 md:mt-0 md:flex-wrap">
                    <ColorItem title='Gold' bgColor='bg-farbe-golden' />
                    <ColorItem title='Braun' bgColor='bg-farbe-brown' />
                    <ColorItem title='Silber' bgColor='bg-farbe-silver' borderColor />
                    <ColorItem title='Gelb' bgColor='bg-farbe-yellow' />
                    <ColorItem title='Bronze' bgColor='bg-farbe-bronze' />
                    <ColorItem title='Violett' bgColor='bg-farbe-violet'/>
                </div>
                <div className="flex mt-8 md:mt-0">
                    <ColorItem title='Grau' bgColor='bg-farbe-gray'/>
                    <ColorItem title='Weiss' bgColor='bg-white' blackChecked />
                </div>
                <p className="text-base my-6">Lackierungsart</p>
                <div className="flex">
                    <ColorItem title='Metallic' bgColor='bg-white' blackChecked />
                </div>
          </div>
      </div>
    </div>
    <div className="text-base border-b-2 mt-4">
      <button
        onClick={() => setUphosteryExpanded(d => !d)}
        className="w-full inline-flex items-center justify-between font-bold text-base text-theme-gray-4"
      >
        Polsterfarbe
        <img
          src="/images/icons/expand-arrow.png"
          className={`w-8 opacity-50 ${uphosteryExpanded ? "rotate-0" : "rotate-180"}`}
        />
      </button>
      <div
        className={`${uphosteryExpanded ? "h-auto pb-4" : "h-0"} overflow-hidden pt-4`}
      >
          <div className="">
                <div className="flex justify-between md:flex-wrap">
                    <ColorItem title='Beige' bgColor='bg-farbe-beige' />
                    <ColorItem title='Blau' bgColor='bg-farbe-blue' />
                    <ColorItem title='Schwarz' bgColor='bg-black' />
                    <ColorItem title='Grün' bgColor='bg-farbe-green' />
                    <ColorItem title='Orange' bgColor='bg-farbe-orange' />
                    <ColorItem title='Rot' bgColor='bg-farbe-red' />
                </div>
                <div className="flex justify-between mt-8 md:mt-0 md:flex-wrap">
                    <ColorItem title='Weiß' bgColor='bg-white' />
                    <ColorItem title='Braun' bgColor='bg-farbe-brown' />
                    <ColorItem title='Grau' bgColor='bg-farbe-gray' />
                    <ColorItem title='Gelb' bgColor='bg-farbe-yellow' />
                    <ColorItem title='Braun' bgColor='bg-farbe-brown' />
                    <ColorItem title='Sonstiges' bgColor='bg-white' />
                </div>
                <p className="text-base my-6">Material</p>
                <div className="flex md:flex-wrap">
                    <ColorItem title='Alcantara' bgColor='bg-white' />
                    <ColorItem title='Stoff' bgColor='bg-white' />
                    <ColorItem title='Volleder' bgColor='bg-white' />
                    <ColorItem title='Teilleder' bgColor='bg-white' />
                    <ColorItem title='Velours' bgColor='bg-white' />
                    <ColorItem title='Sonstiges' bgColor='bg-white' />
                </div>
          </div>
      </div>
    </div>
    <div className="text-base border-b-2 mt-4">
      <button
        onClick={() => setVehicleExpanded(d => !d)}
        className="w-full inline-flex items-center justify-between font-bold text-base text-theme-gray-4"
      >
        Fahrzeugzustand
        <img
          src="/images/icons/expand-arrow.png"
          className={`w-8 opacity-50 ${vehicleExpanded ? "rotate-0" : "rotate-180"}`}
        />
      </button>
      <div
        className={`${vehicleExpanded ? "h-auto pb-4" : "h-0"} overflow-hidden pt-4`}
      >
        {/* Basisdaten & Standort */}
        <div className="flex items-end md:flex-col">
          <div className="w-1/4 lg:w-1/3 md:!w-full mr-20 md:mr-0 md:mb-4">
            <p className="mb-1 text-base">Fahrzeughalter (max.)</p>
            <InputSelect options={fahrz} placeholder={fahrz[1].label} regYear />
          </div>

          {/* <div className="w-8"></div> */}
          <div className="w-1/4 lg:w-1/3 md:!w-full relative">
            <p className="mb-1 text-base">Unfallfahrzeug</p>
            <InputSelect
              options={unfall}
              placeholder={unfall[1].label}
              regYear
            />
          </div>
        </div>
        <div className="flex md:flex-col mt-4">
          <div className="flex w-1/3 lg:w-1/3 md:!w-full md:flex-wrap justify-between mr-20">
            <CheckBoxItem title="Nichtraucherfahrzeug" wAuto />
            <CheckBoxItem title="Garantie" wAuto />
          </div>
          <div className="flex w-5/12 lg:w-1/2 md:!w-full justify-between">
            <CheckBoxItem title="Scheckheftgepflegt" wAuto />
            <CheckBoxItem title="Herstellerzertifizierung" sublabel="(Technisch geprüfte Fahrzeuge mit Garantie)" wAuto />
          </div>
        </div>
      </div>
    </div>
    <div className="text-base border-b-2 mt-4">
      <button
        onClick={() => setEnvironmentExpanded(d => !d)}
        className="w-full inline-flex items-center justify-between font-bold text-base text-theme-gray-4"
      >
        Umwelt
        <img
          src="/images/icons/expand-arrow.png"
          className={`w-8 opacity-50 ${environmentExpanded ? "rotate-0" : "rotate-180"}`}
        />
      </button>
      <div
        className={`${environmentExpanded ? "h-auto pb-4" : "h-0"} overflow-hidden pt-4`}
      >
        {/* Basisdaten & Standort */}
        <div className="flex items-center md:flex-col md:items-start">
          <div className="w-1/4 md:w-full md:mr-0 md:mb-4 mr-20">
            <p className="mb-1 text-base">Schadstoffklasse (mind.)</p>
            <InputSelect
              options={schads}
              placeholder={schads[1].label}
              regYear
            />
          </div>
          {/* <div className="w-8"></div> */}
          <div className="w-1/4 md:w-full">
            <p className="mb-1 text-base">Fahrzeughalter (max.)</p>
            <InputSelect
              options={schads}
              placeholder={schads[1].label}
              regYear
            />
          </div>
          <div className="ml-10 md:ml-0">
            <CheckBoxItem title="Rußpartikelfilter" wAuto />
          </div>
        </div>
      </div>
    </div>
    <div className="text-base border-b-2 mt-4">
      <button
        onClick={() => setOfferExpanded(d => !d)}
        className="w-full inline-flex items-center justify-between font-bold text-base text-theme-gray-4"
      >
        Angebotsdetails
        <img
          src="/images/icons/expand-arrow.png"
          className={`w-8 opacity-50 ${offerExpanded ? "rotate-0" : "rotate-180"}`}
        />
      </button>
      <div
        className={`${offerExpanded ? "h-auto pb-4" : "h-0"} overflow-hidden pt-4`}
      >
        {/* Basisdaten & Standort */}
        <div className="flex items-center md:flex-col md:items-start">
          <div className="w-1/4 md:w-full md:mr-0 mr-20">
            <p className="mb-1 text-base">Online seit (mind.)</p>

            <InputSelect
              options={offer}
              placeholder={offer[1].label}
              regYear
            />
          </div>
          <CheckBoxItem title="MwSt. ausweisbar" wAuto />
        </div>
      </div>
    </div>
          <div className="relative">
            <div className="flex justify-center pt-6 pb-10 md:pb-16">
            <button className="w-80 mr-2 inline-block px-10 py-3 sm:px-4 sm:text-sm rounded-10 bg-theme-yellow-2 text-white text-base font-bold ease-linear duration-100 hover:bg-theme-yellow-3">
                Suchen
              </button>
            <button className="w-80 inline-block px-10 py-3 sm:px-4 sm:text-sm rounded-10 bg-theme-yellow-2 text-white text-base font-bold ease-linear duration-100 hover:bg-theme-yellow-3">
                Suchen & Speichern
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
