import { useState } from "react";
import InputSelect from "../ui/InputSelect";
import CheckBoxItem from "./CheckBoxItem";
import { offer } from "./selectOptions";

export default function Offer() {
  const [offerExpanded, setOfferExpanded] = useState(false);

  return (
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
  );
}
