export default function ListCard({ hgm, usrname, address, rating, cardView }) {
  return (
    <div
      className={`${
        cardView == "grid" ? "flex-col w-250 lg:w-224 md:!w-full" : ""
      } mt-8 lg:mt-4 p-4 border-2 transition duration-300 ease-linear hover:shadow-lg hover:border-theme-yellow-2 border-theme-gray-4 rounded-10 bg-theme-gray-4 text-theme-gray-4`}
    >
      <div className={`flex ${cardView == "grid" ? "flex-col" : ""}`}>
        <div className={`${cardView === 'list' ? 'w-1/2' : ''} flex relative`}>
           <div className={`${cardView == "grid" ? "w-full" : ""}`}>
          <img className="md:w-full rounded-10" src="/images/dl-card-1.png" />
        </div>
        <img
          className={`absolute ${
            cardView == "grid"
              ? "h-10 w-10 -bottom-5 left-4 lg:mt-1 lg:left-2"
              : "h-20 w-20 top-1/2 -right-9 -mt-10 -ml-10"
          }`}
          src="/images/icons/list-card-circle.png"
        />
        </div>
       
        <div
          className={`flex flex-col justify-between ${
            cardView == "grid" ? "w-full text-xs" : "w-5/12 ml-auto text-xs"
          }`}
        >
          <div className={`${cardView == "grid" ? "px-4 lg:px-2 my-4" : ""}`}>
            <div className="flex items-center mt-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="17.778"
                height="15.607"
                viewBox="0 0 17.778 15.607"
              >
                <path
                  id="store_FILL0_wght400_GRAD0_opsz48"
                  d="M6.873,9.463V8H22.529V9.463Zm.122,14.144V17.316H5.8V15.852l1.073-4.926H22.5l1.073,4.926v1.463H22.383v6.292H20.92V17.316H16.311v6.292Zm1.463-1.463h6.389V17.316H8.458ZM7.239,15.852h0Zm0,0h14.9l-.756-3.463H7.995Z"
                  transform="translate(-5.8 -8)"
                  fill="#6c757d"
                />
              </svg>
              <p className="flex-1 ml-3">{hgm}</p>
            </div>
            <div className="flex items-center mt-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="17.778"
                height="17.778"
                viewBox="0 0 17.778 17.778"
              >
                <path
                  id="account_circle_FILL0_wght500_GRAD0_opsz48"
                  d="M6.962,17.449a13.25,13.25,0,0,1,2.726-1.456,8.059,8.059,0,0,1,2.9-.515,8.236,8.236,0,0,1,2.923.515,12.544,12.544,0,0,1,2.726,1.456,7.571,7.571,0,0,0,1.357-2.365,7.841,7.841,0,0,0,.394-2.5,7.256,7.256,0,0,0-7.4-7.4,7.256,7.256,0,0,0-7.4,7.4,7.647,7.647,0,0,0,.405,2.5A7.763,7.763,0,0,0,6.962,17.449Zm5.627-4.16a2.908,2.908,0,0,1-2.157-.876,2.963,2.963,0,0,1-.865-2.167,2.991,2.991,0,0,1,3.021-3.021,2.908,2.908,0,0,1,2.157.876,2.963,2.963,0,0,1,.865,2.167,2.991,2.991,0,0,1-3.021,3.021Zm0,8.188a8.567,8.567,0,0,1-3.437-.7A9.034,9.034,0,0,1,4.4,16.037a8.836,8.836,0,0,1,0-6.9A9.064,9.064,0,0,1,9.141,4.4a8.836,8.836,0,0,1,6.9,0,9.064,9.064,0,0,1,4.74,4.74,8.809,8.809,0,0,1,0,6.886,9.034,9.034,0,0,1-4.74,4.751A8.544,8.544,0,0,1,12.589,21.478Zm0-1.489a7.972,7.972,0,0,0,2.31-.339,7.074,7.074,0,0,0,2.244-1.193A9.437,9.437,0,0,0,14.9,17.263a6.784,6.784,0,0,0-2.31-.405,6.691,6.691,0,0,0-2.3.405,9.936,9.936,0,0,0-2.255,1.193,7.073,7.073,0,0,0,2.244,1.193A7.972,7.972,0,0,0,12.589,19.989Zm0-8.079a1.637,1.637,0,0,0,1.193-.46,1.608,1.608,0,0,0,.471-1.2,1.581,1.581,0,0,0-.471-1.182,1.778,1.778,0,0,0-2.386,0,1.581,1.581,0,0,0-.471,1.182,1.608,1.608,0,0,0,.471,1.2A1.637,1.637,0,0,0,12.589,11.91Zm0-1.664Zm0,8.188Z"
                  transform="translate(-3.7 -3.7)"
                  fill="#6c757d"
                />
              </svg>
              <p className="flex-1 ml-3">{usrname}</p>
            </div>
            <div className="flex items-center mt-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="17.778"
                height="17.778"
                viewBox="0 0 17.778 17.778"
              >
                <path
                  id="map_FILL0_wght500_GRAD0_opsz48"
                  d="M17.795,23.478l-6.387-2.259-4.3,1.724a.908.908,0,0,1-.947-.049.944.944,0,0,1-.461-.85V8.493a1.054,1.054,0,0,1,.206-.644,1.3,1.3,0,0,1,.546-.425L11.407,5.7l6.387,2.234L22.069,6.21a.966.966,0,0,1,.947.061.916.916,0,0,1,.461.838V20.831a.792.792,0,0,1-.206.546,1.325,1.325,0,0,1-.522.352Zm-.826-2.04V9.294l-4.76-1.6V19.835Zm1.457,0,3.4-1.117V8.007l-3.4,1.287ZM7.351,21.146l3.4-1.311V7.691l-3.4,1.141ZM18.426,9.294v0Zm-7.675-1.6v0Z"
                  transform="translate(-5.7 -5.7)"
                  fill="#6c757d"
                />
              </svg>
              <p className="flex-1 ml-3">{address}</p>
            </div>
            <div className="flex items-center mt-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="17.799"
                height="17.778"
                viewBox="0 0 17.799 17.778"
              >
                <path
                  id="star_FILL0_wght500_GRAD0_opsz48"
                  d="M6.9,21.228l2.06-6.743L3.5,10.561h6.743L12.389,3.45l2.146,7.111H21.3l-5.485,3.924,2.06,6.743-5.485-4.163Z"
                  transform="translate(-3.5 -3.45)"
                  fill="#6c757d"
                />
              </svg>
              <p className="flex-1 ml-3">{rating}</p>
            </div>
          </div>
          <div className="flex justify-between">
            <button
              className={`${
                cardView == "grid" ? "px-1.5 pt-3 pb-2.5 text-10" : "text-md p-3"
              } font-bold rounded-10 transition-all ease-linear duration-300 hover:bg-theme-yellow-2 hover:text-white bg-white`}
            >
              PROFIL BESUCHEN
            </button>
            <button
              className={`${
                cardView == "grid" ? "px-1.5 pt-3 pb-2.5 text-10" : "text-md p-3"
              } font-bold rounded-10 transition-all ease-linear duration-300 hover:bg-theme-yellow-2 hover:text-white bg-white`}
            >
              NACHRICHT SENDEN
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
