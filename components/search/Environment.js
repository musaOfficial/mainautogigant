import { useState } from "react";
import InputSelect from "../ui/InputSelect";
import CheckBoxItem from "./CheckBoxItem";
import { schads, fahrzeu } from "./selectOptions";

export default function Environment() {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="text-base border-b-2 mt-4">
      <button
        onClick={() => setExpanded(!expanded)}
        className="w-full inline-flex items-center justify-between font-bold text-base text-theme-gray-4"
      >
        Umwelt
        <img
          src="/images/icons/expand-arrow.png"
          className={`w-8 opacity-50 ${expanded ? "rotate-0" : "rotate-180"}`}
        />
      </button>
      <div
        className={`${expanded ? "h-auto pb-4" : "h-0"} overflow-hidden pt-4`}
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
  );
}
