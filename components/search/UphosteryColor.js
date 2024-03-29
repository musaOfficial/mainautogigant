import { useState } from "react";
import ColorItem from "./ColorItem";

export default function UphosteryColor() {
    const [uphosteryExpanded, setUphosteryExpanded] = useState(false);

  return (
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
  );
}