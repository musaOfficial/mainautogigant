import Link from "next/link";
import { useState, useEffect } from "react";

export default function CarListBrands() { 
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
    <div className="bg-theme-gray-3 md:bg-white lg:px-6 md:!px-0">
      <div className="w-10/12 lg:w-full max-w-ag-container mx-auto pt-10 relative bg-white text-center text-theme-black">
        <h2 className='text-2xl font-bold md:text-xl'>Gebrauchtwagen gesucht?</h2>
        <p className='text-xl font-thin md:text-15'>Entdecke hier das Angebot von AUTOGIGANT.</p>
      </div>

      <div className="w-10/12 max-w-ag-container lg:w-full mx-auto flex md:flex-wrap justify-between p-10 pb-20 md:p-8 relative bg-white">
        <div className="md:w-1/2 md:mb-6">
          <h3 className="mb-6 text-xl font-bold text-black">Audi</h3>
          <ul className="text-black opacity-90 leading-7">
            <li>
              <Link href="/">Audi A1</Link>
            </li>
            <li>
              <Link href="/">Audi A3</Link>
            </li>
            <li>
              <Link href="/">Audi A4</Link>
            </li>
            <li>
              <Link href="/">Audi A6</Link>
            </li>
            <li>
              <Link href="/">Audi Q3</Link>
            </li>
            <li>
              <Link href="/">Mehr Audi Modelle</Link>
            </li>
          </ul>
        </div>
        <div className="md:w-1/2 md:mb-6">
          <h3 className="mb-6 text-xl font-bold text-black">BMW</h3>
          <ul className="text-black opacity-90 leading-7">
            <li>
              <Link href="/">BMW 1er</Link>
            </li>
            <li>
              <Link href="/">BMW 3er</Link>
            </li>
            <li>
              <Link href="/">BMW 5er</Link>
            </li>
            <li>
              <Link href="/">BMW x1</Link>
            </li>
            <li>
              <Link href="/">BMW x3</Link>
            </li>
            <li>
              <Link href="/">Mehr BMW Modelle</Link>
            </li>
          </ul>
        </div>
        <div className="md:w-1/2 md:mb-6">
          <h3 className="mb-6 text-xl font-bold text-black">VW</h3>
          <ul className="text-black opacity-90 leading-7">
            <li>
              <Link href="/">VW Caddy</Link>
            </li>
            <li>
              <Link href="/">VW Golf</Link>
            </li>
            <li>
              <Link href="/">VW Polo</Link>
            </li>
            <li>
              <Link href="/">VW Tiguan</Link>
            </li>
            <li>
              <Link href="/">VW Touran</Link>
            </li>
            <li>
              <Link href="/">Mehr VW Modelle</Link>
            </li>
          </ul>
        </div>
        <div className="md:w-1/2 md:mb-6">
          <h3 className="mb-6 text-xl font-bold text-black">Mercedes</h3>
          <ul className="text-black opacity-90 leading-7">
            <li>
              <Link href="/">Mercedes A-Klasse</Link>
            </li>
            <li>
              <Link href="/">Mercedes B-Klasse</Link>
            </li>
            <li>
              <Link href="/">Mercedes C-Klasse</Link>
            </li>
            <li>
              <Link href="/">Mercedes E-Klasse</Link>
            </li>
            <li>
              <Link href="/">Mercedes S-Klasse</Link>
            </li>
            <li>
              <Link href="/">Mehr Mercedes Modelle</Link>
            </li>
          </ul>
        </div>
        <div className="md:w-1/2 md:mb-6">
          <h3 className="mb-6 text-xl font-bold text-black">Weitere Marken</h3>
          <ul className="text-black opacity-90 leading-7">
            <li>
              <Link href="/">Ford</Link>
            </li>
            <li>
              <Link href="/">Hyundai</Link>
            </li>
            <li>
              <Link href="/">Opel</Link>
            </li>
            <li>
              <Link href="/">Peugeot</Link>
            </li>
            <li>
              <Link href="/">Skoda</Link>
            </li>
            <li>
              <Link href="/">Mehr Marken</Link>
            </li>
          </ul>
        </div>
        <button onClick={handleScrollUp} className="absolute flex items-center right-10 bottom-6 font-bold">
          Nach Oben
          <img className="ml-4" src="/images/icons/top-btn.png" />
        </button>
      </div>
    </div>
  );
}
