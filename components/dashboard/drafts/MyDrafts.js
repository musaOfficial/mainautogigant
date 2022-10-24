import { useEffect, useState } from "react";
import Pagination from "../../dealer/list/Pagination";
import DraftCard from "./DraftCard";

export default function MyDrafts() {
  const [cardView, setCardView] = useState("list");
  const [cards, setCards] = useState(4);

  useEffect(() => {
    if (window.innerWidth <= 1023) {
      setCardView("grid");
    }
  }, []);

  return (
    <>
      <div className="flex-1">
        <div className="rounded-10 bg-theme-gray-4 p-4">
          <div className="border-b border-theme-gray-2 pb-4 mb-4">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-3xl font-bold text-theme-gray-4">
                MEINE ENTWÜRFE
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
                      // dataname="Icon awesome-arrow-circle-right"
                      d="M10.563.563a10,10,0,1,1-10,10A10,10,0,0,1,10.563.563ZM9.4,6.353l3.044,2.919H5.079a.965.965,0,0,0-.968.968v.645a.965.965,0,0,0,.968.968h7.363L9.4,14.772a.969.969,0,0,0-.016,1.383l.444.44a.964.964,0,0,0,1.367,0l5.351-5.347a.964.964,0,0,0,0-1.367L11.192,4.526a.964.964,0,0,0-1.367,0l-.444.44A.974.974,0,0,0,9.4,6.353Z"
                      transform="translate(-0.563 -0.563)"
                      fill="#0067b8"
                    />
                  </svg>
                </button>
              ) : null}
            </div>
            <div className="flex items-end justify-between text-xs">
              <div className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 60 60">
                  <g id="Group_2066" transform="translate(-720 -461)">
                    <rect id="Rectangle_1115" width="60" height="60" rx="5" transform="translate(720 461)" fill="#c3c3c3" />
                    <path id="list_FILL0_wght400_GRAD0_opsz48" d="M20.167,17.265V14H50.093v3.265Zm0,9.25V23.25H50.093v3.265Zm0,9.25V32.5H50.093v3.265Z" transform="translate(720.562 466.117)" fill="#f1f2f3" />
                    <g id="Path_966" transform="translate(730 497)" fill="#f1f2f3">
                      <path d="M 3 5.5 C 1.621500015258789 5.5 0.5 4.378499984741211 0.5 3 C 0.5 1.621500015258789 1.621500015258789 0.5 3 0.5 C 4.378499984741211 0.5 5.5 1.621500015258789 5.5 3 C 5.5 4.378499984741211 4.378499984741211 5.5 3 5.5 Z" stroke="none" />
                      <path d="M 3 1 C 1.897200107574463 1 1 1.897200107574463 1 3 C 1 4.102799892425537 1.897200107574463 5 3 5 C 4.102799892425537 5 5 4.102799892425537 5 3 C 5 1.897200107574463 4.102799892425537 1 3 1 M 3 0 C 4.65684986114502 0 6 1.34315013885498 6 3 C 6 4.65684986114502 4.65684986114502 6 3 6 C 1.34315013885498 6 0 4.65684986114502 0 3 C 0 1.34315013885498 1.34315013885498 0 3 0 Z" stroke="none" fill="#f1f2f3" />
                    </g>
                    <g id="Path_965" transform="translate(730 488)" fill="#f1f2f3">
                      <path d="M 3 5.5 C 1.621500015258789 5.5 0.5 4.378499984741211 0.5 3 C 0.5 1.621500015258789 1.621500015258789 0.5 3 0.5 C 4.378499984741211 0.5 5.5 1.621500015258789 5.5 3 C 5.5 4.378499984741211 4.378499984741211 5.5 3 5.5 Z" stroke="none" />
                      <path d="M 3 1 C 1.897200107574463 1 1 1.897200107574463 1 3 C 1 4.102799892425537 1.897200107574463 5 3 5 C 4.102799892425537 5 5 4.102799892425537 5 3 C 5 1.897200107574463 4.102799892425537 1 3 1 M 3 0 C 4.65684986114502 0 6 1.34315013885498 6 3 C 6 4.65684986114502 4.65684986114502 6 3 6 C 1.34315013885498 6 0 4.65684986114502 0 3 C 0 1.34315013885498 1.34315013885498 0 3 0 Z" stroke="none" fill="#f1f2f3" />
                    </g>
                    <g id="Ellipse_76" transform="translate(730 479)" fill="#f1f2f3" stroke="#f1f2f3" strokeWidth="1">
                      <circle cx="3" cy="3" r="3" stroke="none" />
                      <circle cx="3" cy="3" r="2.5" fill="none" />
                    </g>
                  </g>
                </svg>
                <span className="w-px h-14 bg-theme-gray-5 mx-6 block"></span>
                <h2 className="text-50 font-bold text-theme-gray-4">
                  {cards ? cards : 0}
                </h2>
              </div>
              {cards ? (
                <>
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
            <div
              className={`${cardView == "grid" ? "flex flex-wrap justify-between" : ""
                }`}
            >
              <DraftCard
                title="Lamborghini Huracán"
                price="45.520"
                adNo="#123456789"
                start="01/01/2020"
                end="01/01/2020"
                imgSrc="/images/draft-card-img-car-1.png"
                cardView={cardView}
              />
              <DraftCard
                title="Lamborghini Huracán"
                price="45.520"
                adNo="#123456789"
                start="01/01/2020"
                end="01/01/2020"
                imgSrc="/images/draft-card-img-car-1.png"
                cardView={cardView}
              />
              {cardView == "grid" && (
                <DraftCard
                  title="Lamborghini Huracán"
                  price="45.520"
                  adNo="#123456789"
                  start="01/01/2020"
                  end="01/01/2020"
                  imgSrc="/images/draft-card-img-car-1.png"
                  cardView={cardView}
                />
              )}
              <DraftCard
                title="Lamborghini Huracán"
                price="45.520"
                adNo="#123456789"
                start="01/01/2020"
                end="01/01/2020"
                imgSrc="/images/draft-card-img-car-1.png"
                cardView={cardView}
              />
              <DraftCard
                title="Lamborghini Huracán"
                price="45.520"
                adNo="#123456789"
                start="01/01/2020"
                end="01/01/2020"
                imgSrc="/images/draft-card-img-car-1.png"
                cardView={cardView}
              />
              <DraftCard
                title="Lamborghini Huracán"
                price="45.520"
                adNo="#123456789"
                start="01/01/2020"
                end="01/01/2020"
                imgSrc="/images/draft-card-img-car-1.png"
                cardView={cardView}
              />
            </div>
          ) : (
            <div className="mt-6 pb-4">
              <div className="flex md:flex-col items-center md:items-start justify-between p-6 rounded-10 text-theme-gray-4 bg-white">
                <div className="xl0:mr-4">
                  <p className="text-xl xl0:text-base lg:!text-xl font-bold">Sie haben noch keine Entwürfe.</p>
                  <p className="text-13 lg:!text-13 xl0:text-10">Werben Sie jetzt und erreichen Sie Millionen von Käufern!</p>
                </div>
                <button className="inline-block px-10 md:mt-4 xl0:px-4 py-3 xl:text-xs sm:px-4 sm:text-sm rounded-10 bg-theme-yellow-2 text-white text-base font-bold ease-linear duration-300 hover:bg-theme-yellow-3">
                  INSERAT AUFGEBEN
                </button>
              </div>
              <div className="flex justify-between md:flex-col mt-6 text-14 xl0:text-10 md:!text-sm">
                <button className="w-60 xl:w-52 xl0:w-40 lg:w-60 md:!w-auto inline-flex items-center justify-center py-3 px-4 xl:px-2 rounded-10 text-white bg-theme-gray-5">
                  <svg className="mr-2" xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30">
                    <path id="view_in_ar_FILL0_wght400_GRAD0_opsz48" d="M15.909,27.67l-7.5-4.4a1.862,1.862,0,0,1-.733-.75A2.133,2.133,0,0,1,7.42,21.5V12.739a2.133,2.133,0,0,1,.256-1.023,1.862,1.862,0,0,1,.733-.75L15.943,6.5a2.184,2.184,0,0,1,2.114,0l7.534,4.466a1.862,1.862,0,0,1,.733.75,2.133,2.133,0,0,1,.256,1.023V21.5a2.028,2.028,0,0,1-.273,1.023,1.981,1.981,0,0,1-.75.75l-7.6,4.4a2.054,2.054,0,0,1-2.045,0Zm.068-2.352V17.682L9.5,13.966v7.466h0Zm2.045,0,6.511-3.886h0V13.966l-6.511,3.716ZM2,8.443V5.818A3.674,3.674,0,0,1,3.125,3.125,3.674,3.674,0,0,1,5.818,2H8.443V4.045H5.818A1.747,1.747,0,0,0,4.045,5.818V8.443ZM5.818,32a3.674,3.674,0,0,1-2.693-1.125A3.674,3.674,0,0,1,2,28.182V25.557H4.045v2.625a1.747,1.747,0,0,0,1.773,1.773H8.443V32Zm19.739-.136V29.818h2.625a1.747,1.747,0,0,0,1.773-1.773V25.42H32v2.625a3.841,3.841,0,0,1-3.818,3.818Zm4.4-23.42V5.818a1.747,1.747,0,0,0-1.773-1.773H25.557V2h2.625a3.674,3.674,0,0,1,2.693,1.125A3.674,3.674,0,0,1,32,5.818V8.443ZM17,15.841l6.477-3.75L17,8.375h0l-6.477,3.716ZM17.034,17.682ZM17,15.841ZM18.023,17.682ZM15.977,17.682Z" transform="translate(-2 -2)" fill="#fff" />
                  </svg>
                  MEINE ABOS
                </button>
                <button className="w-60 xl:w-52 xl0:w-40 lg:w-60 md:!w-auto md:mt-4 inline-flex items-center justify-center py-3 px-4 xl:px-2 rounded-10 text-white bg-theme-gray-5">
                  <svg className="mr-2" xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30">
                    <path id="charger_FILL0_wght400_GRAD0_opsz48" d="M18.325,30.175l6.375-13.5H19.825v-9l-6.375,13.5h4.875ZM19,34a15.214,15.214,0,0,1-5.925-1.144,14.518,14.518,0,0,1-7.931-7.931A15.214,15.214,0,0,1,4,19a15.117,15.117,0,0,1,1.144-5.888A14.64,14.64,0,0,1,8.313,8.35,14.954,14.954,0,0,1,19,4,14.88,14.88,0,0,1,34,19a14.954,14.954,0,0,1-4.35,10.688,14.64,14.64,0,0,1-4.763,3.169A15.117,15.117,0,0,1,19,34Zm0-15Zm0,12.75A12.492,12.492,0,0,0,31.75,19,12.492,12.492,0,0,0,19,6.25,12.492,12.492,0,0,0,6.25,19,12.492,12.492,0,0,0,19,31.75Z" transform="translate(-4 -4)" fill="#fff" />
                  </svg>

                  GIGA POWER
                </button>
                <button className="w-60 xl:w-52 xl0:w-40 lg:w-60 md:!w-auto md:mt-4 inline-flex items-center justify-center py-3 px-4 xl:px-2 rounded-10 text-white bg-theme-gray-5">
                  <svg className="mr-2" xmlns="http://www.w3.org/2000/svg" width="30" height="21.818" viewBox="0 0 30 21.818">
                    <path id="toll_FILL0_wght400_GRAD0_opsz48" d="M21.091,29.818A10.826,10.826,0,0,1,10.182,18.909,10.826,10.826,0,0,1,21.091,8,10.826,10.826,0,0,1,32,18.909,10.826,10.826,0,0,1,21.091,29.818Zm-10.432-.409A9.1,9.1,0,0,1,4.4,25.881,10.959,10.959,0,0,1,2,18.909a10.959,10.959,0,0,1,2.4-6.972,9.1,9.1,0,0,1,6.256-3.528v1.977a7.433,7.433,0,0,0-4.807,2.983,9.064,9.064,0,0,0-1.807,5.54,9.064,9.064,0,0,0,1.807,5.54,7.433,7.433,0,0,0,4.807,2.983Zm10.432-10.5Zm0,8.864a8.532,8.532,0,0,0,6.256-2.608,8.532,8.532,0,0,0,2.608-6.256,8.532,8.532,0,0,0-2.608-6.256,8.532,8.532,0,0,0-6.256-2.608,8.532,8.532,0,0,0-6.256,2.608,8.532,8.532,0,0,0-2.608,6.256,8.532,8.532,0,0,0,2.608,6.256A8.532,8.532,0,0,0,21.091,27.773Z" transform="translate(-2 -8)" fill="#fff" />
                  </svg>

                  GIGA COINS AUFLADEN
                </button>
              </div>
            </div>
          )}
        </div>
        {cards ? <Pagination wFull pagType='sm-border' /> : null}
      </div>
    </>
  );
}
