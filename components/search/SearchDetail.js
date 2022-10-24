import Router from "next/router";
import { useState, useEffect } from "react";

import Colors from "./Colors";
import DataLocation from "./DataLocation";
import Environment from "./Environment";
import Furnishing from "./Furnishing";
import Offer from "./Offer";
import UphosteryColor from "./UphosteryColor";
import VehicleCondition from "./VehicleCondition";

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
          <DataLocation />
          <Furnishing />
          <Colors />
          <UphosteryColor />
          <VehicleCondition />
          <Environment />
          <Offer />
          <div className="relative">
            <div className="flex justify-center pt-6 pb-10 md:pb-16">
            <button className="w-80 inline-block px-10 py-3 sm:px-4 sm:text-sm rounded-10 bg-theme-yellow-2 text-white text-base font-bold ease-linear duration-300 hover:bg-theme-yellow-3">
                Suchen
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
