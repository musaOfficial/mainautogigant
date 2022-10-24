import { useState } from "react";
import InputSelect from "../ui/InputSelect";
import CheckBoxItem from "./CheckBoxItem";
import { fahrz, unfall } from "./selectOptions";

export default function VehicleCondition() {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="text-base border-b-2 mt-4">
      <button
        onClick={() => setExpanded(!expanded)}
        className="w-full inline-flex items-center justify-between font-bold text-base text-theme-gray-4"
      >
        Fahrzeugzustand
        <img
          src="/images/icons/expand-arrow.png"
          className={`w-8 opacity-50 ${expanded ? "rotate-0" : "rotate-180"}`}
        />
      </button>
      <div
        className={`${expanded ? "h-auto pb-4" : "h-0"} overflow-hidden pt-4`}
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
  );
}
