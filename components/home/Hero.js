import InputSelect from "../ui/InputSelect";
import Link from "next/link";

export default function Hero() {
  const option1 = [
    { value: "alle marken", label: "Alle Marken" },
    { value: "alle marken2", label: "Alle Marken" },
    { value: "alle marken3", label: "Alle Marken" },
  ];
  const option2 = [
    { value: "alle marken", label: "Alle Marken" },
    { value: "alle marken2", label: "Alle Marken" },
    { value: "alle marken3", label: "Alle Marken" },
  ];
  const option3 = [
    { value: "alle marken", label: "Alle Marken" },
    { value: "alle marken2", label: "Alle Marken" },
    { value: "alle marken3", label: "Alle Marken" },
  ];
  const option4 = [
    { value: "alle marken", label: "Alle Marken" },
    { value: "alle marken2", label: "Alle Marken" },
    { value: "alle marken3", label: "Alle Marken" },
  ];
  return (
    <div className="bg-theme-gray-3 px-0 md:!px-0 lg:px-6  shadow-lg">
      <div className="w-10/12 max-w-ag-container lg:w-full md:!w-full mx-auto relative shadow-lg">
        <img className="w-full lg:h-72 md:hidden" src="/images/hero.jpg" />
        <div className="hero-content w-2/3 md:!w-full lg:w-10/12 absolute md:relative right-0 bottom-0 px-10 md:p-4 hero-content">
          <div className="text-3xl 2xl:text-2xl lg:text-lg px-2 mb-4">
            <h2 className="text-theme-yellow-2">EINFACH</h2>
            <h2 className="text-white">
              GIGANTISCH
              <span className="inline-block h-1.5 w-1.5 bg-theme-yellow ml-1"></span>
            </h2>
          </div>

          <div className="flex justify-between md:justify-start text-center md:flex-wrap text-10 uppercase text-white shadow-lg ">
            <div className="px-2 2xl:w-24">
              <img className="mx-auto" src="/images/cars/limo.png" />
              <p>limousine</p>
            </div>
            <div className="2xl:w-24">
              <img className="mx-auto 2xl:w-16" src="/images/cars/suv.png" />
              <p>suv gelÄndewagen</p>
            </div>
            <div className="2xl:w-24">
              <img className="mx-auto 2xl:w-16" src="/images/cars/kombi.png" />
              <p>kombi family van</p>
            </div>
            <div className="2xl:w-24">
              <img className="mx-auto 2xl:w-16" src="/images/cars/sports.png" />
              <p>sportwagen coupË</p>
            </div>
            <div className="2xl:w-24">
              <img className="mx-auto 2xl:w-16" src="/images/cars/cabrio.png" />
              <p>carbio roadster</p>
            </div>
            <div className="2xl:w-24">
              <img className="mx-auto 2xl:w-16" src="/images/cars/klein.png" />
              <p>kleinbus</p>
            </div>
          </div>
          <div className="flex mt-2 md:flex-wrap text-14">
            <div className="w-1/4 md:w-1/2 pl-4 md:pl-0">
              <InputSelect options={option1} placeholder={option1[1].label} />
            </div>
            <div className="w-1/4 md:w-1/2 pl-2 md:pl-2 md:mb-2">
              <InputSelect options={option2} placeholder={option2[1].label} />
            </div>
            <div className="w-1/4 md:w-1/2 pl-2 md:pl-0">
              <InputSelect options={option3} placeholder={option3[1].label} />
            </div>
            <div className="w-1/4 md:w-1/2 pl-2 md:pl-2">
              <InputSelect options={option4} placeholder={option4[1].label} />
            </div>
          </div>
          <div className="flex md:flex-wrap items-center mt-6 lg:mt-2 mb-2 pl-2 justify-between text-xl lg:text-sm text-15">
              <Link href="/search-details"><button className="w-1/4 md:w-1/2 lg:w-auto text-left text-white underline">Erweiterte Suche</button></Link>
              <button className="w-1/4 md:w-1/2 lg:w-auto pl-4 text-center text-white underline">Filter zurücksetzen</button>
              <div className="w-4 2xl:w-0"></div>
              <button className="w-1/2 md:!w-8/12 md:mx-auto md:mt-3 lg:w-auto 2xl:w-1/3  text-center py-1 lg:py-2 border-black border-2 rounded-lg font-bold text-black bg-theme-yellow">Suchen</button>
          </div>
        </div>
      </div>
    </div>
  );
}
