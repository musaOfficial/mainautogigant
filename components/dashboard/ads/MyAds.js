import { useEffect, useState } from "react";
import Pagination from "../../dealer/list/Pagination";
import AdCard from "./AdCard";
import { AiOutlineCodeSandbox } from "react-icons/bi";

// import AdsCard from "./AdsCard";

export default function MyAds() {
  const [cardView, setCardView] = useState("list");
  const [cards, setCards] = useState(3);

  useEffect(() => {
    if (window.innerWidth <= 767) {
      setCardView("list");
    }
  }, []);


  return (
    <>
      <div className="flex-1">
        <div className="rounded-md bg-theme-gray-4 p-4">
          <div className="border-b border-theme-gray-2 pb-4 mb-4">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-3xl xl:text-2xl font-bold text-theme-black-2">
                MEINE INSERATE
              </h2>
              {cards ? (
                <button className="flex items-center text-13 font-bold text-theme-blue">
                  <p className="mr-2">INSERAT AUFGEBEN</p>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                  >
                    <path
                      id="Icon_awesome-arrow-circle-right"
                      data-name="Icon awesome-arrow-circle-right"
                      d="M10.563.563a10,10,0,1,1-10,10A10,10,0,0,1,10.563.563ZM9.4,6.353l3.044,2.919H5.079a.965.965,0,0,0-.968.968v.645a.965.965,0,0,0,.968.968h7.363L9.4,14.772a.969.969,0,0,0-.016,1.383l.444.44a.964.964,0,0,0,1.367,0l5.351-5.347a.964.964,0,0,0,0-1.367L11.192,4.526a.964.964,0,0,0-1.367,0l-.444.44A.974.974,0,0,0,9.4,6.353Z"
                      transform="translate(-0.563 -0.563)"
                      fill="#0067b8"
                    />
                  </svg>
                </button>
              ) : null}
            </div>
            <div className="flex items-end xl:items-center justify-between text-xs xl:text-10">
              <div className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="60"
                  height="60"
                  viewBox="0 0 60 60"
                  className="xl:w-6"
                >
                  <g
                    id="Group_708"
                    data-name="Group 708"
                    transform="translate(-1274 -543)"
                  >
                    <rect
                      id="Rectangle_1115"
                      data-name="Rectangle 1115"
                      width="60"
                      height="60"
                      rx="5"
                      transform="translate(1274 543)"
                      fill="#c3c3c3"
                    />
                    <path
                      id="list_FILL0_wght400_GRAD0_opsz48"
                      d="M20.167,17.265V14H50.093v3.265Zm0,9.25V23.25H50.093v3.265Zm0,9.25V32.5H50.093v3.265Z"
                      transform="translate(1274.562 548.117)"
                      fill="#f1f2f3"
                    />
                    <g
                      id="Path_959"
                      data-name="Path 959"
                      transform="translate(1284 579)"
                      fill="#f1f2f3"
                    >
                      <path
                        d="M 3 5.5 C 1.621500015258789 5.5 0.5 4.378499984741211 0.5 3 C 0.5 1.621500015258789 1.621500015258789 0.5 3 0.5 C 4.378499984741211 0.5 5.5 1.621500015258789 5.5 3 C 5.5 4.378499984741211 4.378499984741211 5.5 3 5.5 Z"
                        stroke="none"
                      />
                      <path
                        d="M 3 1 C 1.897200107574463 1 1 1.897200107574463 1 3 C 1 4.102799892425537 1.897200107574463 5 3 5 C 4.102799892425537 5 5 4.102799892425537 5 3 C 5 1.897200107574463 4.102799892425537 1 3 1 M 3 0 C 4.65684986114502 0 6 1.34315013885498 6 3 C 6 4.65684986114502 4.65684986114502 6 3 6 C 1.34315013885498 6 0 4.65684986114502 0 3 C 0 1.34315013885498 1.34315013885498 0 3 0 Z"
                        stroke="none"
                        fill="#f1f2f3"
                      />
                    </g>
                    <g
                      id="Path_958"
                      data-name="Path 958"
                      transform="translate(1284 570)"
                      fill="#f1f2f3"
                    >
                      <path
                        d="M 3 5.5 C 1.621500015258789 5.5 0.5 4.378499984741211 0.5 3 C 0.5 1.621500015258789 1.621500015258789 0.5 3 0.5 C 4.378499984741211 0.5 5.5 1.621500015258789 5.5 3 C 5.5 4.378499984741211 4.378499984741211 5.5 3 5.5 Z"
                        stroke="none"
                      />
                      <path
                        d="M 3 1 C 1.897200107574463 1 1 1.897200107574463 1 3 C 1 4.102799892425537 1.897200107574463 5 3 5 C 4.102799892425537 5 5 4.102799892425537 5 3 C 5 1.897200107574463 4.102799892425537 1 3 1 M 3 0 C 4.65684986114502 0 6 1.34315013885498 6 3 C 6 4.65684986114502 4.65684986114502 6 3 6 C 1.34315013885498 6 0 4.65684986114502 0 3 C 0 1.34315013885498 1.34315013885498 0 3 0 Z"
                        stroke="none"
                        fill="#f1f2f3"
                      />
                    </g>
                    <g
                      id="Ellipse_76"
                      data-name="Ellipse 76"
                      transform="translate(1284 561)"
                      fill="#f1f2f3"
                      stroke="#f1f2f3"
                      strokeWidth="1"
                    >
                      <circle cx="3" cy="3" r="3" stroke="none" />
                      <circle cx="3" cy="3" r="2.5" fill="none" />
                    </g>
                  </g>
                </svg>
                <span className="w-px h-14 xl:h-6 bg-theme-gray-5 mx-6 xl:mx-2 block"></span>
                <h2 className="text-50 xl:text-3xl font-bold text-theme-black-2">
                  {cards ? cards : 0}
                </h2>
              </div>
              {cards ? (
                <>
                  {/* <div className="flex items-center">
                    ANZEIGEN :
                    <div className="relative">
                      <select className="ml-2 outline-none appearance-none  bg-transparent rounded border-2 py-2 pl-6 pr-8 xl:pl-3 xl:pr-6 border-theme-gray-2">
                        <option>12</option>
                        <option>16</option>
                        <option>20</option>
                      </select>
                      <img
                        className="absolute top-4 -mt-0.5 right-3"
                        src="/images/icons/sd-select-arrow.png"
                      />
                    </div>
                  </div> */}
                  {/* <div className="flex items-center justify-end">
                    <p className="lg:hidden">SORTIEREN NACH :</p>
                    <div className="relative">
                      <select className="ml-2 outline-none appearance-none  bg-transparent rounded border-2 py-2 pl-6 pr-8 xl:pl-2 border-theme-gray-2">
                        <option>Preis: aufsteigend</option>
                        <option>Preis: aufsteigend</option>
                        <option>Preis: aufsteigend</option>
                      </select>
                      <img
                        className="absolute top-4 -mt-0.5 right-3"
                        src="/images/icons/sd-select-arrow.png"
                      />
                    </div>
                  </div> */}
                  <div className="flex items-center lg:hidden">
                    <button onClick={() => setCardView("grid")}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                      >
                        <path
                          id="grid_view_FILL0_wght500_GRAD0_opsz48"
                          d="M5.7,14.88V5.7h9.18v9.18Zm0,10.82V16.52h9.18V25.7ZM16.52,14.88V5.7H25.7v9.18Zm0,10.82V16.52H25.7V25.7ZM7.558,13.022h5.464V7.558H7.558Zm10.82,0h5.464V7.558H18.378Zm0,10.82h5.464V18.378H18.378Zm-10.82,0h5.464V18.378H7.558ZM18.378,13.022ZM18.378,18.378ZM13.022,18.378ZM13.022,13.022Z"
                          transform="translate(-5.7 -5.7)"
                          fill={cardView === "grid" ? "#fbb900" : "#555"}
                        />
                      </svg>
                    </button>
                    <button
                      className="ml-4"
                      onClick={() => setCardView("list")}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                      >
                        <path
                          id="view_list_FILL0_wght500_GRAD0_opsz48"
                          d="M5.8,29.7V9.7h20v20ZM7.668,15.784h2.857V12.078H7.668Zm4.505,0H23.932V12.078H12.174Zm0,5.734H23.932V17.882H12.174Zm0,5.769H23.932V23.616H12.174Zm-4.505,0h2.857V23.616H7.668Zm0-5.769h2.857V17.882H7.668Z"
                          transform="translate(-5.8 -9.7)"
                          fill={cardView === "list" ? "#fbb900" : "#555"}
                        />
                      </svg>
                    </button>
                  </div>
                </>
              ) : null}
            </div>
          </div>
          {cards ? (
            <div className="flex items-center md:flex-col md:items-start justify-between mb-6">
              <div className="flex items-center md:mb-4">
                ANZEIGEN :
                <div className="relative">
                  <select className="ml-2 outline-none appearance-none  bg-transparent rounded border-2 py-2 pl-6 pr-8 xl:pl-3 xl:pr-6 border-theme-gray-2">
                    <option>12</option>
                    <option>16</option>
                    <option>20</option>
                  </select>
                  <img
                    className="absolute top-4 -mt-0.5 right-3"
                    src="/images/icons/sd-select-arrow.png"
                  />
                </div>
              </div>
              <div className="flex items-center justify-end">
                <p className="lg:hidden">SORTIEREN NACH :</p>
                <div className="relative">
                  <select className="ml-2 outline-none appearance-none  bg-transparent rounded border-2 py-2 pl-6 pr-8 xl:pl-2 border-theme-gray-2">
                    <option>Preis: aufsteigend</option>
                    <option>Preis: aufsteigend</option>
                    <option>Preis: aufsteigend</option>
                  </select>
                  <img
                    className="absolute top-4 -mt-0.5 right-3"
                    src="/images/icons/sd-select-arrow.png"
                  />
                </div>
              </div>
            </div>
          ) : null}
          {cards && cardView === "grid" && (
            <div className="flex justify-between flex-wrap">
              <AdCard
                title="Lamborghini Huracán"
                price="45.520"
                adNo="#123456789"
                start="01/01/2020"
                end="01/01/2020"
                imgSrc="/images/draft-card-img-car-1.png"
                cardView={cardView}
              />
              <AdCard
                title="Lamborghini Huracán"
                price="45.520"
                adNo="#123456789"
                start="01/01/2020"
                end="01/01/2020"
                imgSrc="/images/draft-card-img-car-1.png"
                cardView={cardView}
              />
              <AdCard
                title="Lamborghini Huracán"
                price="45.520"
                adNo="#123456789"
                start="01/01/2020"
                end="01/01/2020"
                imgSrc="/images/draft-card-img-car-1.png"
                cardView={cardView}
              />
            </div>
          )}
          {cards && cardView === "list" && (
            <>
              <AdCard
                title="Lamborghini Huracán"
                price="45.520"
                adNo="#123456789"
                start="01/01/2020"
                end="01/01/2020"
                imgSrc="/images/draft-card-img-car-1.png"
                cardView={cardView}
              />
              <AdCard
                title="Lamborghini Huracán"
                price="45.520"
                adNo="#123456789"
                start="01/01/2020"
                end="01/01/2020"
                imgSrc="/images/draft-card-img-car-1.png"
                cardView={cardView}
              />
              <AdCard
                title="Lamborghini Huracán"
                price="45.520"
                adNo="#123456789"
                start="01/01/2020"
                end="01/01/2020"
                imgSrc="/images/draft-card-img-car-1.png"
                cardView={cardView}
              />
            </>
          )}
          <div className="flex items-center justify-between md:flex-col mt-8">
            <button className="w-1/3 md:w-full flex items-center justify-center rounded-10 text-white fill-white text-sm bg-theme-gray-5">
              <svg
                className="scale-50"
                xmlns="http://www.w3.org/2000/svg"
                height="48"
                width="48"
              >
                <path d="M22.4 39.65 11.4 33.2Q10.7 32.8 10.325 32.1Q9.95 31.4 9.95 30.6V17.75Q9.95 16.95 10.325 16.25Q10.7 15.55 11.4 15.15L22.45 8.6Q23.15 8.2 24 8.2Q24.85 8.2 25.55 8.6L36.6 15.15Q37.3 15.55 37.675 16.25Q38.05 16.95 38.05 17.75V30.6Q38.05 31.4 37.65 32.1Q37.25 32.8 36.55 33.2L25.4 39.65Q24.7 40.05 23.9 40.05Q23.1 40.05 22.4 39.65ZM22.5 36.2V25L13 19.55V30.5Q13 30.5 13 30.5Q13 30.5 13 30.5ZM25.5 36.2 35.05 30.5Q35.05 30.5 35.05 30.5Q35.05 30.5 35.05 30.5V19.55L25.5 25ZM2 11.45V7.6Q2 5.3 3.65 3.65Q5.3 2 7.6 2H11.45V5H7.6Q6.5 5 5.75 5.75Q5 6.5 5 7.6V11.45ZM7.6 46Q5.3 46 3.65 44.35Q2 42.7 2 40.4V36.55H5V40.4Q5 41.5 5.75 42.25Q6.5 43 7.6 43H11.45V46ZM36.55 45.8V42.8H40.4Q41.5 42.8 42.25 42.05Q43 41.3 43 40.2V36.35H46V40.2Q46 42.5 44.35 44.15Q42.7 45.8 40.4 45.8ZM43 11.45V7.6Q43 6.5 42.25 5.75Q41.5 5 40.4 5H36.55V2H40.4Q42.7 2 44.35 3.65Q46 5.3 46 7.6V11.45ZM24 22.3 33.5 16.8 24 11.35Q24 11.35 24 11.35Q24 11.35 24 11.35L14.5 16.8ZM24.05 25ZM24 22.3ZM25.5 25ZM22.5 25Z" />
              </svg>
              MEINE ABOS
            </button>
            <div className="w-4 md:w-0 md:mt-4"></div>
            <button className="w-1/3 md:w-full flex items-center justify-center rounded-10 text-white fill-white text-sm bg-theme-gray-5">
              <svg
                className="scale-50"
                xmlns="http://www.w3.org/2000/svg"
                height="48"
                width="48"
              >
                <path d="M23.1 38.9 31.6 20.9H25.1V8.9L16.6 26.9H23.1ZM24 44Q19.75 44 16.1 42.475Q12.45 40.95 9.75 38.25Q7.05 35.55 5.525 31.9Q4 28.25 4 24Q4 19.8 5.525 16.15Q7.05 12.5 9.75 9.8Q12.45 7.1 16.1 5.55Q19.75 4 24 4Q28.2 4 31.85 5.55Q35.5 7.1 38.2 9.8Q40.9 12.5 42.45 16.15Q44 19.8 44 24Q44 28.25 42.45 31.9Q40.9 35.55 38.2 38.25Q35.5 40.95 31.85 42.475Q28.2 44 24 44ZM24 24Q24 24 24 24Q24 24 24 24Q24 24 24 24Q24 24 24 24Q24 24 24 24Q24 24 24 24Q24 24 24 24Q24 24 24 24ZM24 41Q31.25 41 36.125 36.125Q41 31.25 41 24Q41 16.75 36.125 11.875Q31.25 7 24 7Q16.75 7 11.875 11.875Q7 16.75 7 24Q7 31.25 11.875 36.125Q16.75 41 24 41Z" />
              </svg>
              GIGA POWER
            </button>
            <div className="w-4 md:w-0 md:mt-4"></div>
            <button className="w-1/3 md:w-full flex items-center justify-center rounded-10 text-white fill-white text-sm bg-theme-gray-5">
              <svg
                className="scale-50"
                xmlns="http://www.w3.org/2000/svg"
                height="48"
                width="48"
              >
                <path d="M30 40Q23.3 40 18.65 35.35Q14 30.7 14 24Q14 17.3 18.65 12.65Q23.3 8 30 8Q36.7 8 41.35 12.65Q46 17.3 46 24Q46 30.7 41.35 35.35Q36.7 40 30 40ZM14.7 39.4Q9.05 38.7 5.525 34.225Q2 29.75 2 24Q2 18.25 5.525 13.775Q9.05 9.3 14.7 8.6V11.5Q10.3 12.3 7.65 15.875Q5 19.45 5 24Q5 28.55 7.65 32.125Q10.3 35.7 14.7 36.5ZM30 24Q30 24 30 24Q30 24 30 24Q30 24 30 24Q30 24 30 24Q30 24 30 24Q30 24 30 24Q30 24 30 24Q30 24 30 24ZM30 37Q35.35 37 39.175 33.175Q43 29.35 43 24Q43 18.65 39.175 14.825Q35.35 11 30 11Q24.65 11 20.825 14.825Q17 18.65 17 24Q17 29.35 20.825 33.175Q24.65 37 30 37Z" />
              </svg>
              GIGA COINS AUFLADEN
            </button>
          </div>
        </div>
        {cards ? <Pagination wFull /> : null}
      </div>
    </>
  );
}
