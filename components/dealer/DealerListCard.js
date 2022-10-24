import Link from "next/link";

export default function DealerListCard() {
  return (
    <div className="">
      <div className="px-4 my-2">
        <div className="border-b-2 border-gray-300"></div>
      </div>
      <div className="flex md:flex-wrap items-center justify-between px-4 bg-gray-100 rounded-md py-2">
        <div className="flex items-center md:flex-wrap">
          <Link href="/">
            <img
              className="rounded-md cursor-pointer lg:w-24 md:!w-28 md:mb-4"
              src="/images/icons/card-logo.jpg"
            />
          </Link>
          <div className="w-80 md:w-40 lg:w-52 ml-5 lg:ml-4 text-black md:mb-4">
            <h4 className="font-bold">EGIGANT GmbH</h4>
            <p className="text-sm">
              Wienerstrasse 90, 2700 Wiener Neustadt Österreich
            </p>
          </div>
          <div className="text-black text-md md:mb-4">
            <div className="flex items-center text-black">
              <p className="mr-1 text-sm">HändlerBewertung:</p>
              <img className={`ml-1`} src="/images/icons/rating-star.png" />
              <img className={`ml-0.5`} src="/images/icons/rating-star.png" />
              <img className={`ml-0.5`} src="/images/icons/rating-star.png" />
              <img className={`ml-0.5 opacity-30`} src="/images/icons/rating-star.png" />
              <img className={`ml-0.5 opacity-30`} src="/images/icons/rating-star.png" />
              <p className="ml-2">(123)</p>
            </div>
            <p>
              <span className="text-sm">Homepage:</span> 123456
            </p>
            <p>
              <span className="text-sm">Fahrzeuge online:</span>
              <a
                className="ml-2"
                href="https://www.egigant.at"
                target="_blank"
                rel="noreferrer"
              >
                www.egigant.at
              </a>
            </p>
          </div>
        </div>
        <div className="flex flex-col w-60 md:!w-full lg:w-32 text-sm lg:text-xs">
          <button className="inline-flex items-center border rounded-md border-slate-400 p-2 mb-2">
              <img className="w-6 mr-2" src="/images/icons/card-car.png" />
              FAHRZEUGE ANZEIGEN
              </button>
              <button className="inline-flex items-center border rounded-md border-slate-400 p-2 mb-2">
          <img className="w-6 mr-2" src="/images/icons/card-location.png" />
              LAGEPLAN
              </button>
        </div>
      </div>
    </div>
  );
}
