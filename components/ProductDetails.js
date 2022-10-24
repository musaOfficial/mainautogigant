import { useState } from "react";

export default function ProductDetails({
  carName,
  prevPrice,
  currentPrice,
  desc,
  milage,
  engine,
  releaseDate,
  fuel,
}) {
  const [carImg, setCarImg] = useState('car-1.jpg');
  return (
    <div className="w-10/12 mx-auto pb-4">
      <div className="flex items-center my-4">
        <img className="w-7 mr-2" src="/images/icons/left-arrow.svg" />
        <p className="text-2xl font-medium">{carName}</p>
      </div>
      <div className="flex md:flex-col">
        <div className="w-55 md:w-full">
          <img className="w-full" src={`/images/${carImg}`}/>
          <div className="flex mt-2">
            <button onClick={() => setCarImg('car-1.jpg')} className="inline-block">
              <img src="/images/car-1.jpg" />
            </button>
            <span className="inline-block px-1"></span>
            <button onClick={() => setCarImg('car-2.jpg')} className="inline-block">
              <img src="/images/car-2.jpg" />
            </button>
            <span className="inline-block px-1"></span>
            <button onClick={() => setCarImg('car-3.jpg')} className="inline-block">
              <img src="/images/car-3.jpg" />
            </button>
            <span className="inline-block px-1"></span>
            <button onClick={() => setCarImg('car-4.jpg')} className="inline-block">
              <img src="/images/car-4.jpg" />
            </button>
            <span className="inline-block px-1"></span>
            <button onClick={() => setCarImg('car-5.jpg')} className="inline-block">
              <img src="/images/car-5.jpg" />
            </button>
          </div>
        </div>
        <div className="flex flex-col justify-between w-4/12 ml-6 md:ml-0 md:w-full md:mt-4">
          <div className="w-full">
            <div className="flex w-full justify-between">
              <h4 className="text-3xl md:text-xl font-semibold">
                € {currentPrice}
                <span className="text-lg md:text-sm opacity-60">€{prevPrice}</span>
              </h4>
              <div>
                <button className="w-8">
                  <img src="/images/icons/eye.png" />
                </button>
                <button className="w-8 mx-2">
                  <img src="/images/icons/share.svg" />
                </button>
                <button className="w-8">
                  <img src="/images/icons/print.svg" />
                </button>
              </div>
            </div>
          </div>
          <p className="text-lg md:text-sm md:py-4">{desc}</p>
          <div>
            <div className="flex">
              <img className="w-8 mr-4" src="/images/icons/milage.svg" />
              <h5 className="text-2xl font-medium">{milage} KM</h5>
            </div>
            <div className="flex mt-2">
              <img className="w-8 mr-4" src="/images/icons/engine.svg" />
              <h5 className="text-2xl font-medium">{engine}</h5>
            </div>
            <div className="flex mt-2">
              <img className="w-8 mr-4" src="/images/icons/releaseDate.svg" />
              <h5 className="text-2xl font-medium">{releaseDate}</h5>
            </div>
            <div className="flex mt-2">
              <img className="w-8 mr-4" src="/images/icons/fuel.svg" />
              <h5 className="text-2xl font-medium">{fuel}</h5>
            </div>
          </div>
          <div>
            <div className="flex mb-2 md:flex-col-reverse md:mt-4">
              <button className="w-49 inline-block md:w-full">
                <img src="/images/icons/logo-white.jpg" />
              </button>
              <p className="w-1/2 font-medium pl-4 md:pl-0 md:pb-4">
                EGIGANT GmbH<br/>Wiener Straß90<br/>2700 Wiener Neustadt<br/>www.egigant.at
              </p>
            </div>
            <div className="flex justify-between mb-2">
              <button className="w-49 inline-block px-4 py-2 text-white bg-theme-gray border-theme-gray">
                E-MAIL SENDEN
              </button>
              <button className="w-49 inline-block px-4 py-2 text-white bg-theme-gray border-theme-gray">
                +43 (0) 2622 331777
              </button>
            </div>
            <button className="w-full inline-block px-4 py-2 text-white bg-theme-gray border-theme-gray">
              KAUNFANFRAGE
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
