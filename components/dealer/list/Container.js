import { useEffect, useState } from "react";
import ListCard from "./Card";
import Pagination from "./Pagination";

export default function DealerListContainer() {
  const [cardView, setCardView] = useState("grid");
  const [sidebar, setSidebar] = useState(null);
  const [filterSlide, setFilterSlide] = useState(null);
  const [starCheck1, setStarCheck1] = useState(false);
  const [starCheck2, setStarCheck2] = useState(false);
  const [starCheck3, setStarCheck3] = useState(false);
  const [starCheck4, setStarCheck4] = useState(false);
  const [starCheck5, setStarCheck5] = useState(false);

  const [filterCity1, setFilterCity1] = useState(false);
  const [filterCity2, setFilterCity2] = useState(false);
  const [filterCity3, setFilterCity3] = useState(false);
  const [filterCity4, setFilterCity4] = useState(false);
  const [filterCity5, setFilterCity5] = useState(false);
  const [filterCity6, setFilterCity6] = useState(false);
  const [filterCity7, setFilterCity7] = useState(false);
  const [filterCity8, setFilterCity8] = useState(false);

  useEffect(() => {
    if (window.innerWidth <= 1023) {
      setCardView("grid");
    }
    if (window.innerWidth <= 767) {
      setFilterSlide("rating");
    }
  }, []);

  return (
    <div className="bg-theme-gray-3">
      <div className="lg:px-6 md:!px-0">
        <div className="w-10/12 lg:w-full max-w-ag-container mx-auto lg:pt-4 lg:px-4 px-8 bg-white pt-8 pb-12">
          <div className="w-full mb-8 lg:mb-4">
            <img src="/images/details-ad-1.png" className="w-full" />
          </div>
          <div className="flex md:flex-col">
            {/* LEFT
             SIDE
             CONTENTS */}
            <div className="w-250 md:!w-full lg:w-224 text-theme-gray-4">
              {filterSlide === "checkboxes" ? null : (
                <div className="">
                  <div className="p-4 rounded-10 bg-theme-gray-4 md:rounded-b-none">
                    <h4 className="text-xl font-bold">1.212</h4>
                    <p className="text-sm lg:text-xs">
                      REGISTRIERTE AUTOHÄNDLER
                    </p>
                  </div>
                  <div className="mt-8 md:!mt-0 lg:mt-4 p-4 md:rounded-none md:bg-theme-gray-5 rounded-10 bg-theme-gray-4 ">
                    <h4 className="text-sm font-bold md:text-white">
                      HÄNDLER SUCHEN
                    </h4>
                    <div className="relative mt-2">
                      <input
                        className="w-full pl-10 pr-2 py-3 text-base rounded-10 font-bold"
                        placeholder="FIRMENNAME"
                      />
                      <svg
                        className="absolute top-4 -mt-px left-3"
                        xmlns="http://www.w3.org/2000/svg"
                        width="20.027"
                        height="20"
                        viewBox="0 0 20.027 20"
                      >
                        <path
                          id="search_FILL0_wght500_GRAD0_opsz48"
                          d="M24.359,25.75,19.291,20.7l-2.182-2.174a5.781,5.781,0,0,1-1.888,1.067,6.989,6.989,0,0,1-2.326.383,6.967,6.967,0,0,1-5.1-2.079A6.834,6.834,0,0,1,5.7,12.864,6.834,6.834,0,0,1,7.793,7.829,6.9,6.9,0,0,1,12.841,5.75a6.857,6.857,0,0,1,5.034,2.079,6.857,6.857,0,0,1,2.079,5.034,6.825,6.825,0,0,1-.383,2.271,7.286,7.286,0,0,1-1.122,2.052l7.278,7.2ZM12.868,18.117a4.967,4.967,0,0,0,3.68-1.546,5.1,5.1,0,0,0,1.518-3.707,5.1,5.1,0,0,0-1.518-3.707,4.967,4.967,0,0,0-3.68-1.546,5.255,5.255,0,0,0-5.28,5.253,5.255,5.255,0,0,0,5.28,5.253Z"
                          transform="translate(-5.7 -5.75)"
                          fill="#6c757d"
                          opacity="0.66"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="mt-8 lg:mt-4 md:!mt-0 p-4 rounded-10 md:rounded-t-none bg-theme-gray-4">
                    <h4 className="text-sm font-bold border-b-2 pb-1 border-theme-gray-2">
                      FILTERN NACH BEWERTUNG
                    </h4>
                    <div className="mt-4">
                      <div
                        onClick={() => setStarCheck1(!starCheck1)}
                        className="flex items-center"
                      >
                        <div
                          className={`bg-white w-5 h-5 p-1 flex justify-center items-center mr-4 rounded`}
                        >
                          <input
                            type="checkbox"
                            className="hidden"
                            checked={starCheck1}
                            onChange={() => setStarCheck1(!starCheck1)}
                          />
                          <svg
                            className={`${starCheck1 ? "block" : "hidden"
                              } w-4 h-4 text-purple pointer-events-none`}
                            viewBox="0 0 172 172"
                          >
                            <g
                              fill="none"
                              strokeWidth="none"
                              strokeMiterlimit="10"
                              fontFamily="none"
                              fontWeight="none"
                              fontSize="none"
                              textAnchor="none"
                              style={{ mixBlendMode: "normal" }}
                            >
                              <path d="M0 172V0h172v172z" />
                              <path
                                d="M145.433 37.933L64.5 118.8658 33.7337 88.0996l-10.134 10.1341L64.5 139.1341l91.067-91.067z"
                                fill="currentColor"
                                strokeWidth="1"
                              />
                            </g>
                          </svg>
                        </div>
                        <label
                          className="w-5/6 flex justify-between"
                          htmlFor="5star"
                        >
                          <div className="w-full flex justify-between">
                            <img src="/images/icons/sd-star-y.png" />
                            <img src="/images/icons/sd-star-y.png" />
                            <img src="/images/icons/sd-star-y.png" />
                            <img src="/images/icons/sd-star-y.png" />
                            <img src="/images/icons/sd-star-y.png" />
                          </div>
                          <p className="text-xs ml-4">(58)</p>
                        </label>
                      </div>
                      <div
                        onClick={() => setStarCheck2(!starCheck2)}
                        className="flex items-center mt-4"
                      >
                        <div
                          className={`bg-white w-5 h-5 p-1 flex justify-center items-center mr-4 rounded`}
                        >
                          <input
                            type="checkbox"
                            className="hidden"
                            checked={starCheck2}
                            onChange={() => setStarCheck2(!starCheck2)}
                          />
                          <svg
                            className={`${starCheck2 ? "block" : "hidden"
                              } w-4 h-4 text-purple pointer-events-none`}
                            viewBox="0 0 172 172"
                          >
                            <g
                              fill="none"
                              strokeWidth="none"
                              strokeMiterlimit="10"
                              fontFamily="none"
                              fontWeight="none"
                              fontSize="none"
                              textAnchor="none"
                              style={{ mixBlendMode: "normal" }}
                            >
                              <path d="M0 172V0h172v172z" />
                              <path
                                d="M145.433 37.933L64.5 118.8658 33.7337 88.0996l-10.134 10.1341L64.5 139.1341l91.067-91.067z"
                                fill="currentColor"
                                strokeWidth="1"
                              />
                            </g>
                          </svg>
                        </div>
                        <label
                          className="w-5/6 flex justify-between"
                          htmlFor="5star"
                        >
                          <div className="w-full flex justify-between">
                            <img src="/images/icons/sd-star-y.png" />
                            <img src="/images/icons/sd-star-y.png" />
                            <img src="/images/icons/sd-star-y.png" />
                            <img src="/images/icons/sd-star-y.png" />
                            <img src="/images/icons/sd-star-g.png" />
                          </div>
                          <p className="text-xs ml-4">(38)</p>
                        </label>
                      </div>
                      <div
                        onClick={() => setStarCheck3(!starCheck3)}
                        className="flex items-center mt-4"
                      >
                        <div
                          className={`bg-white w-5 h-5 p-1 flex justify-center items-center mr-4 rounded`}
                        >
                          <input
                            type="checkbox"
                            className="hidden"
                            checked={starCheck3}
                            onChange={() => setStarCheck1(!starCheck3)}
                          />
                          <svg
                            className={`${starCheck3 ? "block" : "hidden"
                              } w-4 h-4 text-purple pointer-events-none`}
                            viewBox="0 0 172 172"
                          >
                            <g
                              fill="none"
                              strokeWidth="none"
                              strokeMiterlimit="10"
                              fontFamily="none"
                              fontWeight="none"
                              fontSize="none"
                              textAnchor="none"
                              style={{ mixBlendMode: "normal" }}
                            >
                              <path d="M0 172V0h172v172z" />
                              <path
                                d="M145.433 37.933L64.5 118.8658 33.7337 88.0996l-10.134 10.1341L64.5 139.1341l91.067-91.067z"
                                fill="currentColor"
                                strokeWidth="1"
                              />
                            </g>
                          </svg>
                        </div>
                        <label
                          className="w-5/6 flex justify-between"
                          htmlFor="5star"
                        >
                          <div className="w-full flex justify-between">
                            <img src="/images/icons/sd-star-y.png" />
                            <img src="/images/icons/sd-star-y.png" />
                            <img src="/images/icons/sd-star-y.png" />
                            <img src="/images/icons/sd-star-g.png" />
                            <img src="/images/icons/sd-star-g.png" />
                          </div>
                          <p className="text-xs ml-4">(21)</p>
                        </label>
                      </div>
                      <div
                        onClick={() => setStarCheck4(!starCheck4)}
                        className="flex items-center mt-4"
                      >
                        <div
                          className={`bg-white w-5 h-5 p-1 flex justify-center items-center mr-4 rounded`}
                        >
                          <input
                            type="checkbox"
                            className="hidden"
                            checked={starCheck4}
                            onChange={() => setStarCheck4(!starCheck4)}
                          />
                          <svg
                            className={`${starCheck4 ? "block" : "hidden"
                              } w-4 h-4 text-purple pointer-events-none`}
                            viewBox="0 0 172 172"
                          >
                            <g
                              fill="none"
                              strokeWidth="none"
                              strokeMiterlimit="10"
                              fontFamily="none"
                              fontWeight="none"
                              fontSize="none"
                              textAnchor="none"
                              style={{ mixBlendMode: "normal" }}
                            >
                              <path d="M0 172V0h172v172z" />
                              <path
                                d="M145.433 37.933L64.5 118.8658 33.7337 88.0996l-10.134 10.1341L64.5 139.1341l91.067-91.067z"
                                fill="currentColor"
                                strokeWidth="1"
                              />
                            </g>
                          </svg>
                        </div>
                        <label
                          className="w-5/6 flex justify-between"
                          htmlFor="5star"
                        >
                          <div className="w-full flex justify-between">
                            <img src="/images/icons/sd-star-y.png" />
                            <img src="/images/icons/sd-star-y.png" />
                            <img src="/images/icons/sd-star-g.png" />
                            <img src="/images/icons/sd-star-g.png" />
                            <img src="/images/icons/sd-star-g.png" />
                          </div>
                          <p className="text-xs ml-4">(18)</p>
                        </label>
                      </div>
                      <div
                        onClick={() => setStarCheck5(!starCheck5)}
                        className="flex items-center mt-4"
                      >
                        <div
                          className={`bg-white w-5 h-5 p-1 flex justify-center items-center mr-4 rounded`}
                        >
                          <input
                            type="checkbox"
                            className="hidden"
                            checked={starCheck5}
                            onChange={() => setStarCheck1(!starCheck5)}
                          />
                          <svg
                            className={`${starCheck5 ? "block" : "hidden"
                              } w-4 h-4 text-purple pointer-events-none`}
                            viewBox="0 0 172 172"
                          >
                            <g
                              fill="none"
                              strokeWidth="none"
                              strokeMiterlimit="10"
                              fontFamily="none"
                              fontWeight="none"
                              fontSize="none"
                              textAnchor="none"
                              style={{ mixBlendMode: "normal" }}
                            >
                              <path d="M0 172V0h172v172z" />
                              <path
                                d="M145.433 37.933L64.5 118.8658 33.7337 88.0996l-10.134 10.1341L64.5 139.1341l91.067-91.067z"
                                fill="currentColor"
                                strokeWidth="1"
                              />
                            </g>
                          </svg>
                        </div>
                        <label
                          className="w-5/6 flex justify-between"
                          htmlFor="5star"
                        >
                          <div className="w-full flex justify-between">
                            <img src="/images/icons/sd-star-y.png" />
                            <img src="/images/icons/sd-star-g.png" />
                            <img src="/images/icons/sd-star-g.png" />
                            <img src="/images/icons/sd-star-g.png" />
                            <img src="/images/icons/sd-star-g.png" />
                          </div>
                          <p className="text-xs ml-4">(10)</p>
                        </label>
                      </div>
                    </div>
                    <button className="w-full flex justify-center py-3 mt-8 rounded-10 font-bold bg-theme-yellow-2 text-white">
                      <svg
                        className="mr-4"
                        xmlns="http://www.w3.org/2000/svg"
                        width="18.128"
                        height="20"
                        viewBox="0 0 18.128 20"
                      >
                        <path
                          id="delete_FILL0_wght500_GRAD0_opsz48"
                          d="M10.366,25.45a1.755,1.755,0,0,1-1.3-.556A1.791,1.791,0,0,1,8.521,23.6V8.245H7.3V6.4h5.373V5.45h7.381V6.4h5.373V8.245H24.206V23.6a1.791,1.791,0,0,1-.543,1.289,1.755,1.755,0,0,1-1.3.556Zm11.995-17.2H10.366V23.6H22.361Zm-9.145,13.08h1.737V10.5H13.216Zm4.559,0h1.737V10.5H17.775ZM10.366,8.245V23.6h0Z"
                          transform="translate(-7.3 -5.45)"
                          fill="#fff"
                        />
                      </svg>
                      FILTER LÖSCHEN
                    </button>
                  </div>
                </div>
              )}
              {filterSlide === "rating" ? null : (
                <div className="mt-8 lg:mt-4 p-4 rounded-10 bg-theme-gray-4">
                  <h4 className="text-sm font-bold border-theme-gray-2">
                    FILTERN NACH STADT
                  </h4>
                  <div className="relative mt-2">
                    <input
                      className="w-full pl-10 pr-2 py-3 text-base rounded-10 font-bold"
                      placeholder="SUCHEN"
                    />
                    <svg
                      className="absolute top-4 -mt-px left-3"
                      xmlns="http://www.w3.org/2000/svg"
                      width="20.027"
                      height="20"
                      viewBox="0 0 20.027 20"
                    >
                      <path
                        id="search_FILL0_wght500_GRAD0_opsz48"
                        d="M24.359,25.75,19.291,20.7l-2.182-2.174a5.781,5.781,0,0,1-1.888,1.067,6.989,6.989,0,0,1-2.326.383,6.967,6.967,0,0,1-5.1-2.079A6.834,6.834,0,0,1,5.7,12.864,6.834,6.834,0,0,1,7.793,7.829,6.9,6.9,0,0,1,12.841,5.75a6.857,6.857,0,0,1,5.034,2.079,6.857,6.857,0,0,1,2.079,5.034,6.825,6.825,0,0,1-.383,2.271,7.286,7.286,0,0,1-1.122,2.052l7.278,7.2ZM12.868,18.117a4.967,4.967,0,0,0,3.68-1.546,5.1,5.1,0,0,0,1.518-3.707,5.1,5.1,0,0,0-1.518-3.707,4.967,4.967,0,0,0-3.68-1.546,5.255,5.255,0,0,0-5.28,5.253,5.255,5.255,0,0,0,5.28,5.253Z"
                        transform="translate(-5.7 -5.75)"
                        fill="#6c757d"
                        opacity="0.66"
                      />
                    </svg>
                  </div>
                  <div className="mt-4">
                    <div
                      onClick={() => setFilterCity1(!filterCity1)}
                      className="flex items-center"
                    >
                      <div
                        className={`bg-white w-5 h-5 p-1 flex justify-center items-center mr-4 rounded`}
                      >
                        <input
                          type="checkbox"
                          className="hidden"
                          checked={filterCity1}
                          onChange={() => setFilterCity1(!filterCity1)}
                        />
                        <svg
                          className={`${filterCity1 ? "block" : "hidden"
                            } w-4 h-4 text-purple pointer-events-none`}
                          viewBox="0 0 172 172"
                        >
                          <g
                            fill="none"
                            strokeWidth="none"
                            strokeMiterlimit="10"
                            fontFamily="none"
                            fontWeight="none"
                            fontSize="none"
                            textAnchor="none"
                            style={{ mixBlendMode: "normal" }}
                          >
                            <path d="M0 172V0h172v172z" />
                            <path
                              d="M145.433 37.933L64.5 118.8658 33.7337 88.0996l-10.134 10.1341L64.5 139.1341l91.067-91.067z"
                              fill="currentColor"
                              strokeWidth="1"
                            />
                          </g>
                        </svg>
                      </div>
                      <label
                        className="w-5/6 flex justify-between"
                        htmlFor="5star"
                      >
                        <div className="w-full flex justify-between">Wien</div>
                        <p className="text-xs ml-4">(58)</p>
                      </label>
                    </div>
                    <div
                      onClick={() => setFilterCity2(!filterCity2)}
                      className="flex items-center mt-4"
                    >
                      <div
                        className={`bg-white w-5 h-5 p-1 flex justify-center items-center mr-4 rounded`}
                      >
                        <input
                          type="checkbox"
                          className="hidden"
                          checked={filterCity2}
                          onChange={() => setFilterCity2(!filterCity2)}
                        />
                        <svg
                          className={`${filterCity2 ? "block" : "hidden"
                            } w-4 h-4 text-purple pointer-events-none`}
                          viewBox="0 0 172 172"
                        >
                          <g
                            fill="none"
                            strokeWidth="none"
                            strokeMiterlimit="10"
                            fontFamily="none"
                            fontWeight="none"
                            fontSize="none"
                            textAnchor="none"
                            style={{ mixBlendMode: "normal" }}
                          >
                            <path d="M0 172V0h172v172z" />
                            <path
                              d="M145.433 37.933L64.5 118.8658 33.7337 88.0996l-10.134 10.1341L64.5 139.1341l91.067-91.067z"
                              fill="currentColor"
                              strokeWidth="1"
                            />
                          </g>
                        </svg>
                      </div>
                      <label
                        className="w-5/6 flex justify-between"
                        htmlFor="5star"
                      >
                        <div className="w-full flex justify-between">Graz</div>
                        <p className="text-xs ml-4">(38)</p>
                      </label>
                    </div>
                    <div
                      onClick={() => setFilterCity3(!filterCity3)}
                      className="flex items-center mt-4"
                    >
                      <div
                        className={`bg-white w-5 h-5 p-1 flex justify-center items-center mr-4 rounded`}
                      >
                        <input
                          type="checkbox"
                          className="hidden"
                          checked={filterCity3}
                          onChange={() => setFilterCity3(!filterCity3)}
                        />
                        <svg
                          className={`${filterCity3 ? "block" : "hidden"
                            } w-4 h-4 text-purple pointer-events-none`}
                          viewBox="0 0 172 172"
                        >
                          <g
                            fill="none"
                            strokeWidth="none"
                            strokeMiterlimit="10"
                            fontFamily="none"
                            fontWeight="none"
                            fontSize="none"
                            textAnchor="none"
                            style={{ mixBlendMode: "normal" }}
                          >
                            <path d="M0 172V0h172v172z" />
                            <path
                              d="M145.433 37.933L64.5 118.8658 33.7337 88.0996l-10.134 10.1341L64.5 139.1341l91.067-91.067z"
                              fill="currentColor"
                              strokeWidth="1"
                            />
                          </g>
                        </svg>
                      </div>
                      <label
                        className="w-5/6 flex justify-between"
                        htmlFor="5star"
                      >
                        <div className="w-full flex justify-between">Linz</div>
                        <p className="text-xs ml-4">(21)</p>
                      </label>
                    </div>
                    <div
                      onClick={() => setFilterCity4(!filterCity4)}
                      className="flex items-center mt-4"
                    >
                      <div
                        className={`bg-white w-5 h-5 p-1 flex justify-center items-center mr-4 rounded`}
                      >
                        <input
                          type="checkbox"
                          className="hidden"
                          checked={filterCity4}
                          onChange={() => setFilterCity4(!filterCity4)}
                        />
                        <svg
                          className={`${filterCity4 ? "block" : "hidden"
                            } w-4 h-4 text-purple pointer-events-none`}
                          viewBox="0 0 172 172"
                        >
                          <g
                            fill="none"
                            strokeWidth="none"
                            strokeMiterlimit="10"
                            fontFamily="none"
                            fontWeight="none"
                            fontSize="none"
                            textAnchor="none"
                            style={{ mixBlendMode: "normal" }}
                          >
                            <path d="M0 172V0h172v172z" />
                            <path
                              d="M145.433 37.933L64.5 118.8658 33.7337 88.0996l-10.134 10.1341L64.5 139.1341l91.067-91.067z"
                              fill="currentColor"
                              strokeWidth="1"
                            />
                          </g>
                        </svg>
                      </div>
                      <label
                        className="w-5/6 flex justify-between"
                        htmlFor="5star"
                      >
                        <div className="w-full flex justify-between">Salzburg</div>
                        <p className="text-xs ml-4">(18)</p>
                      </label>
                    </div>
                    <div
                      onClick={() => setFilterCity5(!filterCity5)}
                      className="flex items-center mt-4"
                    >
                      <div
                        className={`bg-white w-5 h-5 p-1 flex justify-center items-center mr-4 rounded`}
                      >
                        <input
                          type="checkbox"
                          className="hidden"
                          checked={filterCity5}
                          onChange={() => setFilterCity5(!filterCity5)}
                        />
                        <svg
                          className={`${filterCity5 ? "block" : "hidden"
                            } w-4 h-4 text-purple pointer-events-none`}
                          viewBox="0 0 172 172"
                        >
                          <g
                            fill="none"
                            strokeWidth="none"
                            strokeMiterlimit="10"
                            fontFamily="none"
                            fontWeight="none"
                            fontSize="none"
                            textAnchor="none"
                            style={{ mixBlendMode: "normal" }}
                          >
                            <path d="M0 172V0h172v172z" />
                            <path
                              d="M145.433 37.933L64.5 118.8658 33.7337 88.0996l-10.134 10.1341L64.5 139.1341l91.067-91.067z"
                              fill="currentColor"
                              strokeWidth="1"
                            />
                          </g>
                        </svg>
                      </div>
                      <label
                        className="w-5/6 flex justify-between"
                        htmlFor="5star"
                      >
                        <div className="w-full flex justify-between">Klagenfurt</div>
                        <p className="text-xs ml-4">(10)</p>
                      </label>
                    </div>
                    <div
                      onClick={() => setFilterCity6(!filterCity6)}
                      className="flex items-center mt-4"
                    >
                      <div
                        className={`bg-white w-5 h-5 p-1 flex justify-center items-center mr-4 rounded`}
                      >
                        <input
                          type="checkbox"
                          className="hidden"
                          checked={filterCity6}
                          onChange={() => setFilterCity6(!filterCity6)}
                        />
                        <svg
                          className={`${filterCity6 ? "block" : "hidden"
                            } w-4 h-4 text-purple pointer-events-none`}
                          viewBox="0 0 172 172"
                        >
                          <g
                            fill="none"
                            strokeWidth="none"
                            strokeMiterlimit="10"
                            fontFamily="none"
                            fontWeight="none"
                            fontSize="none"
                            textAnchor="none"
                            style={{ mixBlendMode: "normal" }}
                          >
                            <path d="M0 172V0h172v172z" />
                            <path
                              d="M145.433 37.933L64.5 118.8658 33.7337 88.0996l-10.134 10.1341L64.5 139.1341l91.067-91.067z"
                              fill="currentColor"
                              strokeWidth="1"
                            />
                          </g>
                        </svg>
                      </div>
                      <label
                        className="w-5/6 flex justify-between"
                        htmlFor="5star"
                      >
                        <div className="w-full flex justify-between">Villach</div>
                        <p className="text-xs ml-4">(21)</p>
                      </label>
                    </div>
                    <div
                      onClick={() => setFilterCity7(!filterCity7)}
                      className="flex items-center mt-4"
                    >
                      <div
                        className={`bg-white w-5 h-5 p-1 flex justify-center items-center mr-4 rounded`}
                      >
                        <input
                          type="checkbox"
                          className="hidden"
                          checked={filterCity7}
                          onChange={() => setFilterCity7(!filterCity7)}
                        />
                        <svg
                          className={`${filterCity7 ? "block" : "hidden"
                            } w-4 h-4 text-purple pointer-events-none`}
                          viewBox="0 0 172 172"
                        >
                          <g
                            fill="none"
                            strokeWidth="none"
                            strokeMiterlimit="10"
                            fontFamily="none"
                            fontWeight="none"
                            fontSize="none"
                            textAnchor="none"
                            style={{ mixBlendMode: "normal" }}
                          >
                            <path d="M0 172V0h172v172z" />
                            <path
                              d="M145.433 37.933L64.5 118.8658 33.7337 88.0996l-10.134 10.1341L64.5 139.1341l91.067-91.067z"
                              fill="currentColor"
                              strokeWidth="1"
                            />
                          </g>
                        </svg>
                      </div>
                      <label
                        className="w-5/6 flex justify-between"
                        htmlFor="5star"
                      >
                        <div className="w-full flex justify-between">Wels</div>
                        <p className="text-xs ml-4">(18)</p>
                      </label>
                    </div>
                    <div
                      onClick={() => setFilterCity8(!filterCity8)}
                      className="flex items-center mt-4"
                    >
                      <div
                        className={`bg-white w-5 h-5 p-1 flex justify-center items-center mr-4 rounded`}
                      >
                        <input
                          type="checkbox"
                          className="hidden"
                          checked={filterCity8}
                          onChange={() => setFilterCity8(!filterCity8)}
                        />
                        <svg
                          className={`${filterCity8 ? "block" : "hidden"
                            } w-4 h-4 text-purple pointer-events-none`}
                          viewBox="0 0 172 172"
                        >
                          <g
                            fill="none"
                            strokeWidth="none"
                            strokeMiterlimit="10"
                            fontFamily="none"
                            fontWeight="none"
                            fontSize="none"
                            textAnchor="none"
                            style={{ mixBlendMode: "normal" }}
                          >
                            <path d="M0 172V0h172v172z" />
                            <path
                              d="M145.433 37.933L64.5 118.8658 33.7337 88.0996l-10.134 10.1341L64.5 139.1341l91.067-91.067z"
                              fill="currentColor"
                              strokeWidth="1"
                            />
                          </g>
                        </svg>
                      </div>
                      <label
                        className="w-5/6 flex justify-between"
                        htmlFor="5star"
                      >
                        <div className="w-full flex justify-between">St. Pölten</div>
                        <p className="text-xs ml-4">(10)</p>
                      </label>
                    </div>
                  </div>
                  <button className="w-full flex justify-center py-3 mt-8 rounded-10 font-bold bg-theme-yellow-2 text-white">
                    <svg
                      className="mr-4"
                      xmlns="http://www.w3.org/2000/svg"
                      width="18.128"
                      height="20"
                      viewBox="0 0 18.128 20"
                    >
                      <path
                        id="delete_FILL0_wght500_GRAD0_opsz48"
                        d="M10.366,25.45a1.755,1.755,0,0,1-1.3-.556A1.791,1.791,0,0,1,8.521,23.6V8.245H7.3V6.4h5.373V5.45h7.381V6.4h5.373V8.245H24.206V23.6a1.791,1.791,0,0,1-.543,1.289,1.755,1.755,0,0,1-1.3.556Zm11.995-17.2H10.366V23.6H22.361Zm-9.145,13.08h1.737V10.5H13.216Zm4.559,0h1.737V10.5H17.775ZM10.366,8.245V23.6h0Z"
                        transform="translate(-7.3 -5.45)"
                        fill="#fff"
                      />
                    </svg>
                    FILTER LÖSCHEN
                  </button>
                </div>
              )}
              <div className="hidden md:flex justify-center p-6">
                <button
                  onClick={() => setFilterSlide("rating")}
                  className={`h-3 w-12 mx-1 border rounded-md border-theme-gray-2 ${filterSlide == "rating" ? "bg-theme-gray-5" : ""
                    }`}
                ></button>
                <button
                  onClick={() => setFilterSlide("checkboxes")}
                  className={`h-3 w-12 mx-1 border rounded-md border-theme-gray-2 ${filterSlide == "checkboxes" ? "bg-theme-gray-5" : ""
                    }`}
                ></button>
              </div>
            </div>
            {/* RIGHT
             SIDE
             CONTENTS */}
            <div className="flex-1 lg:w-auto ml-6 lg:ml-4 md:!ml-0 md:mt-4">
              <div className="p-4 rounded-10 bg-theme-gray-4 text-theme-black-2">
                <div className="flex text-xs text-10 md:flex-col">
                  <div className="flex items-center text-base ">
                    ANZEIGEN:
                    <div className="relative ml-2 rounded-md bg-theme-gray-8">
                      <select className="outline-none appearance-none bg-transparent py-2 pl-6 pr-10 text-white">
                        <option className="bg-theme-gray-8">12</option>
                        <option className="bg-theme-gray-8">16</option>
                        <option className="bg-theme-gray-8">20</option>
                      </select>
                      <svg
                        className="absolute top-4 right-3"
                        xmlns="http://www.w3.org/2000/svg"
                        width="16.678"
                        height="10"
                        viewBox="0 0 16.678 10"
                      >
                        <path
                          id="expand_more_FILL0_wght500_GRAD0_opsz48"
                          d="M20.039,26.3,11.7,17.961,13.361,16.3l6.678,6.712,6.678-6.678,1.661,1.661Z"
                          transform="translate(-11.7 -16.3)"
                          fill="#fff"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="flex items-center justify-end md:justify-start md:mt-4 flex-1 text-base">
                    <p className="lg:hidden">SORTIEREN NACH :</p>
                    <div className="relative ml-2 rounded-md bg-theme-gray-8">
                      <select className="ml-2 outline-none appearance-none bg-transparent rounded py-2 pl-6 pr-10 text-white">
                        <option className="bg-theme-gray-8">BESTE BEWERTUNG</option>
                        <option className="bg-theme-gray-8">BESTE BEWERTUNG</option>
                        <option className="bg-theme-gray-8">BESTE BEWERTUNG</option>
                      </select>
                      <svg
                        className="absolute top-4 right-3"
                        xmlns="http://www.w3.org/2000/svg"
                        width="16.678"
                        height="10"
                        viewBox="0 0 16.678 10"
                      >
                        <path
                          id="expand_more_FILL0_wght500_GRAD0_opsz48"
                          d="M20.039,26.3,11.7,17.961,13.361,16.3l6.678,6.712,6.678-6.678,1.661,1.661Z"
                          transform="translate(-11.7 -16.3)"
                          fill="#fff"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="flex items-center ml-24 lg:hidden">
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
                </div>
              </div>
              <div
                className={`flex ${cardView == "grid" ? "justify-between flex-wrap" : "flex-col"
                  }`}
              >
                <ListCard
                  hgm="HGMEDIA WERBEAGENTUR"
                  usrname="HASAN GÜLER"
                  address="WIENER STRASSE 90, 2700 WIENER NEUSTADT"
                  rating="4,9 / 27 BEWERTUNGEN"
                  cardView={cardView}
                />
                <ListCard
                  hgm="HGMEDIA WERBEAGENTUR"
                  usrname="HASAN GÜLER"
                  address="WIENER STRASSE 90, 2700 WIENER NEUSTADT"
                  rating="4,9 / 27 BEWERTUNGEN"
                  cardView={cardView}
                />
                <ListCard
                  hgm="HGMEDIA WERBEAGENTUR"
                  usrname="HASAN GÜLER"
                  address="WIENER STRASSE 90, 2700 WIENER NEUSTADT"
                  rating="4,9 / 27 BEWERTUNGEN"
                  cardView={cardView}
                />
                {cardView == "list" ? (
                  <div className="w-full pt-8">
                    <img className="w-full" src="/images/details-ad-2.png" />
                  </div>
                ) : null}
                <ListCard
                  hgm="HGMEDIA WERBEAGENTUR"
                  usrname="HASAN GÜLER"
                  address="WIENER STRASSE 90, 2700 WIENER NEUSTADT"
                  rating="4,9 / 27 BEWERTUNGEN"
                  cardView={cardView}
                />
                <ListCard
                  hgm="HGMEDIA WERBEAGENTUR"
                  usrname="HASAN GÜLER"
                  address="WIENER STRASSE 90, 2700 WIENER NEUSTADT"
                  rating="4,9 / 27 BEWERTUNGEN"
                  cardView={cardView}
                />
                <ListCard
                  hgm="HGMEDIA WERBEAGENTUR"
                  usrname="HASAN GÜLER"
                  address="WIENER STRASSE 90, 2700 WIENER NEUSTADT"
                  rating="4,9 / 27 BEWERTUNGEN"
                  cardView={cardView}
                />
                {cardView == "list" ? (
                  <div className="w-full pt-8">
                    <img className="w-full" src="/images/details-ad-2.png" />
                  </div>
                ) : null}
                {cardView == "grid" ? (
                  <div className="w-full pt-8">
                    <img className="w-full" src="/images/details-ad-2.png" />
                  </div>
                ) : null}
                <ListCard
                  hgm="HGMEDIA WERBEAGENTUR"
                  usrname="HASAN GÜLER"
                  address="WIENER STRASSE 90, 2700 WIENER NEUSTADT"
                  rating="4,9 / 27 BEWERTUNGEN"
                  cardView={cardView}
                />
                <ListCard
                  hgm="HGMEDIA WERBEAGENTUR"
                  usrname="HASAN GÜLER"
                  address="WIENER STRASSE 90, 2700 WIENER NEUSTADT"
                  rating="4,9 / 27 BEWERTUNGEN"
                  cardView={cardView}
                />
                <ListCard
                  hgm="HGMEDIA WERBEAGENTUR"
                  usrname="HASAN GÜLER"
                  address="WIENER STRASSE 90, 2700 WIENER NEUSTADT"
                  rating="4,9 / 27 BEWERTUNGEN"
                  cardView={cardView}
                />
              </div>
            </div>
          </div>
          {/* 
              PAGINATION
            */}
          <Pagination pagType='no-border' />
        </div>
      </div>
    </div>
  );
}
