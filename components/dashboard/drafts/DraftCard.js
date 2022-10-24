export default function DraftCard({
  title,
  price,
  imgSrc,
  cardView,
}) {
  return (
    <div className={`${cardView == 'grid' ? 'w-60' : ''} relative group mt-6 text-theme-gray-4`}>
      <div
        className={`flex items-center rounded-10 overflow-hidden ${cardView == "grid" ? "flex-col" : ""
          } md:flex-col md:bg-white md:rounded-md`}
      >
        <div
          className={`${cardView == 'grid' ? 'absolute right-0.5 top-0.5 z-30 rounded-tr-10' : 'flex-col -mr-1 rounded-tl-10'} flex md:flex-row md:w-full bg-theme-gray-6 rounded-bl-10`}
          title="Detailansicht"
        >
          <button title="Inserat anschauen" className={`flex h-12 items-center justify-center md:border-none ${cardView == 'grid' ? 'px-3' : 'px-2'} border-theme-gray-2`}>
            <svg className="fill-theme-gray-5 hover:fill-theme-yellow-2" xmlns="http://www.w3.org/2000/svg" width="20" height="13.636" viewBox="0 0 20 13.636">
              <path id="visibility_FILL0_wght400_GRAD0_opsz48" d="M12,18.682a3.841,3.841,0,0,0,3.864-3.864A3.841,3.841,0,0,0,12,10.955a3.841,3.841,0,0,0-3.864,3.864A3.841,3.841,0,0,0,12,18.682Zm0-1.318a2.555,2.555,0,0,1-1.807-4.352,2.579,2.579,0,0,1,3.614,0A2.545,2.545,0,0,1,12,17.364Zm0,4.273A10.186,10.186,0,0,1,6,19.75a11.492,11.492,0,0,1-4-4.932A11.492,11.492,0,0,1,6,9.886,10.186,10.186,0,0,1,12,8a10.186,10.186,0,0,1,6,1.886,11.492,11.492,0,0,1,4,4.932,11.492,11.492,0,0,1-4,4.932A10.186,10.186,0,0,1,12,21.636Zm0-6.818Zm0,5.455a9.139,9.139,0,0,0,5.057-1.489,9.66,9.66,0,0,0,3.511-3.966,9.66,9.66,0,0,0-3.511-3.966,9.333,9.333,0,0,0-10.114,0,9.822,9.822,0,0,0-3.534,3.966,9.822,9.822,0,0,0,3.534,3.966A9.139,9.139,0,0,0,12,20.273Z" transform="translate(-2 -8)" />
            </svg>
          </button>
          <button title="Inserat bearbeiten" className={`flex h-12 items-center justify-center md:border-none ${cardView == 'grid' ? 'border-x px-3' : 'border-y px-2'} border-theme-gray-2`}>
            <svg className="fill-theme-gray-5 hover:fill-theme-yellow-2" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
              <path id="edit_FILL0_wght400_GRAD0_opsz48" d="M7.637,23.713h1.2L20.925,11.626l-1.2-1.2L7.637,22.512ZM24.39,10.452,20.9,6.96l1.146-1.146a1.648,1.648,0,0,1,2.292,0l1.2,1.2a1.648,1.648,0,0,1,0,2.292ZM23.244,11.6,9.492,25.35H6V21.858L19.752,8.106Zm-2.92-.573-.6-.6,1.2,1.2Z" transform="translate(-6 -5.35)" />
            </svg>

          </button>
          <button title="Inserat löschen" className={`flex h-12 items-center justify-center md:border-none ${cardView == 'grid' ? 'px-3' : 'px-2'} border-theme-gray-2`}>
            <svg className="fill-theme-gray-5 hover:fill-theme-yellow-2" xmlns="http://www.w3.org/2000/svg" width="17.778" height="20" viewBox="0 0 17.778 20">
              <path id="delete_FILL0_wght400_GRAD0_opsz48" d="M10.806,26a1.709,1.709,0,0,1-1.667-1.667V8.5H8V6.833h5.222V6h7.333v.833h5.222V8.5H24.639V24.333A1.709,1.709,0,0,1,22.972,26ZM22.972,8.5H10.806V24.333H22.972ZM13.75,21.944h1.667V10.861H13.75Zm4.611,0h1.667V10.861H18.361ZM10.806,8.5v0Z" transform="translate(-8 -6)" />
            </svg>

          </button>
        </div>
        <div className={`flex flex-1 border-2 border-transparent ease-linear duration-200 hover:border-theme-yellow-2 rounded-10 overflow-hidden ${cardView === 'grid'? 'flex-col' : ''}`}>
          <div
            className={`${cardView == "grid" ? "flex-col relative" : ""
              } flex relative text-white font-bold text-xs`}
          >
            <img className="w-full" src={imgSrc} />
            <img className="absolute left-4 top-4 ease-linear duration-200 opacity-0 -z-20 invisible group-hover:visible group-hover:z-20 group-hover:opacity-100" src="/images/draft-card-giga-logo.png" />
            {cardView === 'grid' && <h3 className="flex md:relative absolute bottom-0 right-0 text-xl md:text-base md:rounded-10 md:mb-2 -mr-0.5 -mt-0.5 md:flex-1 md:font-bold text-white bg-theme-yellow-2 rounded-tl-10 rounded-tr-10 font-bold">
                  <p className="py-2 px-3">€ {price},-</p>
                  <button title="Inserat veröffentlichen" className='flex items-center justify-center px-3 rounded-bl-10 hover:bg-theme-gray-4 hover:fill-theme-blue ease-linear duration-150 bg-theme-blue fill-theme-gray-5'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30">
                    <g id="paper-plane" transform="translate(0 0)">
                      <g id="Group_1451" data-name="Group 1451" transform="translate(0 0)">
                        <path id="Path_1079" data-name="Path 1079" d="M29.708.123A.68.68,0,0,0,28.98.09L.344,16.454a.682.682,0,0,0,.123,1.239l8.551,2.85,3.3,9.01a.682.682,0,0,0,.64.447.622.622,0,0,0,.079,0,.673.673,0,0,0,.449-.258l.007.005,4.851-6.093,6.673,2.224a.669.669,0,0,0,.216.035.682.682,0,0,0,.673-.57L29.991.794A.681.681,0,0,0,29.708.123ZM2.345,16.881,25.032,3.916,9.367,19.222ZM13.366,21.05a.683.683,0,0,0-.128.324l-.616,5.048L10.337,20.18,23.672,7.152Zm.558,5.957.566-4.64,2.472.824Zm10.763-2.678-9.664-3.221L28.18,3.362Z" transform="translate(0 0)" />
                      </g>
                    </g>
                  </svg>
                  </button>
                </h3>}
          </div>
          <div className={`${cardView == 'grid' ? 'pt-0' : ''} flex-1 text-theme-gray-4 bg-white`}>
            <div className="relative flex flex-col justify-between p-4 text-15 flex-1 md:rounded-br-md md:rounded-bl-md md:rounded-none rounded-tr-md rounded-br-10 bg-white ease-linear duration-200 group-hover:shadow-md">
              <div className="flex justify-between items-center md:items-start md:flex-col">
                <div className="">
                  <h4 className="text-xl md:text-base mb-2 font-bold">{title}</h4>
                </div>
                {cardView === 'list' && <h3 className="flex md:relative absolute top-0 right-0 text-2xl md:text-base md:rounded-10 md:mb-2 -mr-0.5 -mt-0.5 md:flex-1 md:font-bold text-white bg-theme-yellow-2 rounded-bl-10 rounded-tr-10 font-bold">
                  <p className="py-2 px-3">€ {price},-</p>
                  <button title="Inserat veröffentlichen" className='flex items-center justify-center px-3 rounded-bl-10 hover:bg-theme-gray-4 hover:fill-theme-blue ease-linear duration-150 bg-theme-blue fill-theme-gray-5'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30">
                    <g id="paper-plane" transform="translate(0 0)">
                      <g id="Group_1451" data-name="Group 1451" transform="translate(0 0)">
                        <path id="Path_1079" data-name="Path 1079" d="M29.708.123A.68.68,0,0,0,28.98.09L.344,16.454a.682.682,0,0,0,.123,1.239l8.551,2.85,3.3,9.01a.682.682,0,0,0,.64.447.622.622,0,0,0,.079,0,.673.673,0,0,0,.449-.258l.007.005,4.851-6.093,6.673,2.224a.669.669,0,0,0,.216.035.682.682,0,0,0,.673-.57L29.991.794A.681.681,0,0,0,29.708.123ZM2.345,16.881,25.032,3.916,9.367,19.222ZM13.366,21.05a.683.683,0,0,0-.128.324l-.616,5.048L10.337,20.18,23.672,7.152Zm.558,5.957.566-4.64,2.472.824Zm10.763-2.678-9.664-3.221L28.18,3.362Z" transform="translate(0 0)" />
                      </g>
                    </g>
                  </svg>
                  </button>
                </h3>}
              </div>
              <div className={`${cardView === 'grid' ? 'text-center text-13': ''}`}>
                <p className="py-2">{`4.2 FSI quattro * ABT KOMPRESSOR, 20" MB DESIGN Felgen..`}</p>
              <p className="py-2 border-y">{`01/2020 | Benzin | 125 PS | 412.000 KM | Automatik | Gebraucht`}</p>
              <div className={`flex py-2 items-center justify-between ${cardView==='grid' ? 'flex-col': ''} text-theme-blue md:flex-col md:items-start`}>
                <div className="flex items-center py-1 md:my-1">
                  <svg xmlns="http://www.w3.org/2000/svg" width="10.4" height="13" viewBox="0 0 10.4 13">
                    <path id="home_pin_FILL0_wght400_GRAD0_opsz48" d="M11.413,10.987V7.981L13.2,6.8l1.787,1.186v3.006h-.975V9.038H12.388v1.95ZM13.2,15.716a19.032,19.032,0,0,0,3.193-3.567A5.411,5.411,0,0,0,17.425,9.33,4.23,4.23,0,0,0,16.2,6.194a4.092,4.092,0,0,0-3-1.219,4.092,4.092,0,0,0-3,1.219A4.23,4.23,0,0,0,8.975,9.33a5.333,5.333,0,0,0,1.056,2.819A20.667,20.667,0,0,0,13.2,15.716ZM13.2,17a21.608,21.608,0,0,1-3.908-4.136A6.431,6.431,0,0,1,8,9.33,5.027,5.027,0,0,1,9.568,5.446a5.283,5.283,0,0,1,7.264,0A5.027,5.027,0,0,1,18.4,9.33a6.431,6.431,0,0,1-1.292,3.534A21.608,21.608,0,0,1,13.2,17Z" transform="translate(-8 -4)" fill="#0067b8" />
                  </svg>
                  <p className="ml-2">2700 Wiener Neustadt | AT</p>
                </div>
                <div className="flex items-center py-1">
                  <svg xmlns="http://www.w3.org/2000/svg" width="14.808" height="13" viewBox="0 0 14.808 13">
                    <path id="store_FILL0_wght400_GRAD0_opsz48" d="M6.694,9.219V8H19.734V9.219ZM6.8,21V15.759h-1V14.541l.894-4.1h13.02l.894,4.1v1.219h-1V21H18.394V15.759H14.555V21Zm1.219-1.219h5.322V15.759H8.014ZM7,14.541H7Zm0,0H19.409l-.63-2.884H7.628Z" transform="translate(-5.8 -8)" fill="#0067b8" />
                  </svg>
                  <p className="ml-2">Gigant Group Teknoloji A.S.</p>
                </div>
              </div>
              </div>
              
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
