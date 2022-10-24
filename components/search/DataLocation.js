import { useState, useEffect } from "react";
import Input from "../ui/Input";
import InputSelect from "../ui/InputSelect";
import CheckBoxItem from "./CheckBoxItem";
import ModelItem from "./ModelItem";
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

export default function DataLocation() {
  const [expanded, setExpanded] = useState(false);
  const [brandName, setBrandName] = useState("Marke");
  const [modelName, setModelName] = useState("");
  const [modelItems, setModelItems] = useState([]);


  const addModel = () => {
    setModelItems([
      ...modelItems,
      {
        brandName: brandName,
        modelName: modelName,
        varient: ".B. Avantgarde, TDI, 320, usw",
      },
    ]);
  };

  const deleteHandler = (id) => {
    let newArr = modelItems;
    newArr.splice(id, 1);
    setModelItems([...newArr]);
  }

  return (
    <div className="text-base border-b-2 pt-6">
      <button
        onClick={() => setExpanded(!expanded)}
        className="w-full inline-flex items-center justify-between font-bold md:pt-6 text-theme-gray-4"
      >
        Basisdaten & Standort
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
              onChange={(e) => setBrandName(e.value)}
              regYear
            />
          </div>
          {/* <div className="w-8"></div> */}
          <div className="w-300 lg:w-200 md:!w-full md:mb-4">
            <p className="mb-1">Marke</p>
            <InputSelect
              options={marke2}
              placeholder={marke1[0].label}
              onChange={(e) => setModelName(e.value)}
              regYear
            />
          </div>
          {/* <div className="w-8"></div> */}
          <div className="md:w-full flex items-end justify-between md:flex-col">
            <div className="mr-4 md:mr-0 md:w-full">
              <p className="mb-1">Variante</p>
              <Input
                placeholder="z.B. Avantgarde, TDI, 320, usw."
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
          className="text-theme-gray-4 font-bold py-8 text-base flex items-center"
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
                  placeholder="z.B. Avantgarde, TDI, 320, usw. "
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
  );
}
