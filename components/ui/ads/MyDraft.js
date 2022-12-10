function MyDraft(){
    return (
        <>
            <div className={`relative flex items-center py-4 md:py-0 ${cardView === 'grid' ? 'flex-col w-250 md:mx-auto': 'w-full'} group md:flex-col md:bg-white md:rounded-10 md:mt-4 text-theme-gray-4`}>
      <div className={`${cardView ==='grid' ? 'w-full h-auto rounded-t-md' : 'w-10 flex-col h-40 rounded-tl-md rounded-bl-md'}  flex md:flex-row md:w-full md:h-auto justify-between  md:rounded-bl-none md:rounded-tr-md bg-theme-gray-6 ease-linear duration-200 group-hover:shadow-md`}>
        <a className={`cursor-pointer group-one relative flex items-center justify-center text-white duration-100 ease-linear hover:text-theme-yellow-2 ${cardView === 'grid' ? 'w-1/6 h-full border-r text-base p-2': 'h-1/3 text-xl p-1'}`}>
          <AiOutlineEye />
          <div className="absolute whitespace-nowrap z-10 text-xs py-px px-1 rounded font-bold top-10 hidden group-one-hover:block bg-white shadow-sm text-theme-blue">
            <button className="relative z-10">Inserat anschauen</button>
            <span className="absolute h-3 w-3 left-12 -top-1 -z-10 rotate-45 bg-white block"></span>
          </div>
        </a>
        <a className={`cursor-pointer group-one relative flex items-center justify-center p-1 md:border-none  border-theme-gray-2  text-white duration-100 ease-linear hover:text-theme-yellow-2 ${cardView === 'grid' ? 'w-1/6 h-full border-r text-base p-2': 'h-1/3 border-y p-1 text-xl'}`}>
          <BsPrinter />
          <div className="absolute whitespace-nowrap z-10 text-xs py-px px-1 rounded font-bold top-10 hidden group-one-hover:block bg-white shadow-sm text-theme-blue">
            <button className="relative z-10">Inserat drucken</button>
            <span className="absolute h-3 w-3 left-10 -top-1 -z-10 rotate-45 bg-white block"></span>
          </div>
        </a>
        <div className={`cursor-pointer relative group-one flex items-center justify-center p-1 text-white duration-100 ease-linear hover:text-theme-yellow-2 ${cardView === 'grid' ? 'w-1/6 h-full border-r text-base p-2': 'h-1/3 p-1 text-xl'}`}>
          <FiShare2 />
          <div className="absolute z-10 text-xs py-px px-1 rounded font-bold top-12 hidden group-one-hover:block bg-white shadow-sm text-theme-gray-4">
            <div className="relative z-10">
              <a className="flex items-center text-xl p-1 shadow">
                <BsEnvelopeFill />
                <p className="ml-2 text-xs whitespace-nowrap text-theme-blue">
                  E-Mail
                </p>
              </a>
              <a className="flex items-center text-xl p-1 shadow">
                <FaLink />
                <p className="ml-2 text-xs whitespace-nowrap text-theme-blue">
                  Link kopieren
                </p>
              </a>
              <a className="flex items-center text-xl p-1 shadow">
                <FaFacebook />
                <p className="ml-2 text-xs whitespace-nowrap text-theme-blue">
                  Facebook
                </p>
              </a>
              <a className="flex items-center text-xl p-1 shadow">
                <IoLogoWhatsapp />
                <p className="ml-2 text-xs whitespace-nowrap text-theme-blue">
                  WhatsApp
                </p>
              </a>
            </div>
            <span className="absolute h-3 w-3 left-12 ml-1 -top-1 -z-10 rotate-45 bg-white block"></span>
          </div>
        </div>
        {cardView === "grid" && (
          <>
            <a className={`cursor-pointer group-one relative flex items-center justify-center p-2 text-white  duration-100 ease-linear hover:text-theme-yellow-2 ${cardView === 'grid' ? 'w-1/6 h-full border-r text-base':'h-1/3 text-xl'}`}>
              <BsLightningChargeFill />
              <div className="absolute whitespace-nowrap z-10 text-xs py-px px-1 rounded font-bold top-10 hidden group-one-hover:block bg-white shadow-sm text-theme-blue">
                <p className="relative z-10">Giga Power</p>
                <span className="absolute h-3 w-3 left-12 -top-1 -z-10 rotate-45 bg-white block"></span>
              </div>
            </a>
            <a className={`cursor-pointer group-one relative flex items-center justify-center p-2 md:border-none border-theme-gray-2  text-white  duration-100 ease-linear hover:text-theme-yellow-2 ${cardView === 'grid' ? 'w-1/6 h-full border-r text-base':'h-1/3 border-x text-xl'}`}>
              <BiPencil />
              <div className="absolute whitespace-nowrap z-10 text-xs py-px px-1 rounded font-bold top-10 hidden group-one-hover:block bg-white shadow-sm text-theme-blue">
                <p className="relative z-10">Inserat bearbeiten</p>
                <span className="absolute h-3 w-3 left-12 -top-1 -z-10 rotate-45 bg-white block"></span>
              </div>
            </a>
            <a className={`cursor-pointer group-one relative flex items-center justify-center p-2 md:border-none text-white duration-100 ease-linear hover:text-theme-yellow-2 ${cardView === 'grid' ? 'w-1/6 h-full text-base':'h-1/3 text-xl'}`}>
              <RiDeleteBin6Line />
              <div className="absolute whitespace-nowrap z-10 text-xs py-px px-1 rounded font-bold top-10 hidden group-one-hover:block bg-white shadow-sm text-theme-blue">
                <p className="relative z-10">Inserat löschen</p>
                <span className="absolute h-3 w-3 left-12 -top-1 -z-10 rotate-45 bg-white block"></span>
              </div>
            </a>
          </>
        )}
      </div>
      <div className={`${cardView === 'grid' ? 'w-full' : ''} relative md:w-full`}>
        <img className={`${cardView === 'grid' ? 'w-full' : ''}  md:w-full`} src="/images/adcard-car-1.png" />
        {cardView === 'grid' && <h3 className="md:relative absolute bottom-0 right-0 text-lg md:text-base md:rounded-10 md:mb-2 md:flex-1 md:font-bold text-white bg-theme-yellow-2 py-2 px-3 rounded-tl-10 font-bold">
            € 213.520,-
          </h3>}
        <img
          className={`absolute ease-linear duration-200 opacity-0 -z-20 invisible group-hover:visible group-hover:z-20 group-hover:opacity-100 ${cardView =='grid' ? 'right-4 bottom-16' : 'left-4 top-4'}`}
          src="/images/draft-card-giga-logo.png"
        />
        { cardView === 'grid' ? null:  <div className="absolute right-0 bottom-0 flex md:w-full md:h-auto justify-between rounded-tl-md rounded-br-md md:rounded-bl-none md:rounded-tr-md bg-theme-gray-6 ease-linear duration-200 group-hover:shadow-md">
          <a className="cursor-pointer group-one relative h-1/3 flex items-center justify-center p-2 text-white text-xl duration-100 ease-linear hover:text-theme-yellow-2">
            <BsLightningChargeFill />
            <div className="absolute whitespace-nowrap z-10 text-xs py-px px-1 rounded font-bold top-10 hidden group-one-hover:block bg-white shadow-sm text-theme-blue">
              <p className="relative z-10">Giga Power</p>
              <span className="absolute h-3 w-3 left-12 -top-1 -z-10 rotate-45 bg-white block"></span>
            </div>
          </a>
          <a className="cursor-pointer group-one relative h-1/3 flex items-center justify-center p-2 md:border-none border-x border-theme-gray-2  text-white text-xl duration-100 ease-linear hover:text-theme-yellow-2">
            <BiPencil />
            <div className="absolute whitespace-nowrap z-10 text-xs py-px px-1 rounded font-bold top-10 hidden group-one-hover:block bg-white shadow-sm text-theme-blue">
              <p className="relative z-10">Inserat bearbeiten</p>
              <span className="absolute h-3 w-3 left-12 -top-1 -z-10 rotate-45 bg-white block"></span>
            </div>
          </a>
          <a className="cursor-pointer group-one relative h-1/3 flex items-center justify-center p-2 md:border-none text-white text-xl duration-100 ease-linear hover:text-theme-yellow-2">
            <RiDeleteBin6Line />
            <div className="absolute whitespace-nowrap z-10 text-xs py-px px-1 rounded font-bold top-10 hidden group-one-hover:block bg-white shadow-sm text-theme-blue">
              <p className="relative z-10">Inserat löschen</p>
              <span className="absolute h-3 w-3 left-12 -top-1 -z-10 rotate-45 bg-white block"></span>
            </div>
          </a>
        </div>}
      </div>
      <div className={`${cardView === 'grid'?'w-full border-t-0 border-l-2 rounded-tr-0 rounded-bl-md text-xs':'rounded-tr-md text-sm'} relative h-40 flex flex-col justify-between px-4 py-2 flex-1 md:rounded-br-md md:rounded-bl-md md:rounded-none rounded-br-md border-transparent border-y-2 border-r-2 md:border-t-0 md:border-l-2 group-hover:border-theme-yellow-2 bg-white ease-linear duration-200 group-hover:shadow-md`}>
        <div className={`flex items-center text-theme-blue font-semibold ${cardView === 'grid'? 'text-10' : '' }`}>
          <div className="flex items-center">
            <AiOutlineEye />
            <p className="px-2">12,600</p>
          </div>
          <div className="flex items-center">
            <FiHeart />
            <p className="px-2">28</p>
          </div>
          <div className="flex items-center">
            <FaRegImages />
            <p className="px-2">25</p>
          </div>
          <div className="flex items-center">
            <BsClockHistory />
            <p className="px-2">22/10/2022</p>
          </div>
        </div>
        <div className="flex justify-between items-center md:items-start md:flex-col">
          <div className="">
            <h4 className="text-lg md:text-base mb-2 font-bold">
              Mercedes AMG GT
            </h4>
          </div>
          {cardView === 'list' && <h3 className="md:relative absolute top-0 right-0 text-2xl md:text-base md:rounded-10 md:mb-2 -mr-0.5 -mt-0.5 md:flex-1 md:font-bold text-white bg-theme-yellow-2 py-2 px-3 rounded-bl-10 rounded-tr-10 font-bold">
            € 213.520,-
          </h3>}
        </div>
        <p className={`py-1  ${cardView === 'grid' ? 'text-center' : ''}`}>{`4.2 FSI quattro * ABT KOMPRESSOR, 20" MB DESIGN Felgen..`}</p>
        <p className={`py-1 border-y ${cardView === 'grid' ? 'text-center' : ''}`}>{`01/2020 | Benzin | 125 PS | 412.000 KM | Automatik | Gebraucht`}</p>
        <div className={`flex items-center justify-between text-theme-blue md:flex-col md:items-start ${cardView === 'grid' ? 'flex-col' : ''}`}>
          <div className="flex items-center py-1 md:my-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="10.4"
              height="13"
              viewBox="0 0 10.4 13"
            >
              <path
                id="home_pin_FILL0_wght400_GRAD0_opsz48"
                d="M11.413,10.987V7.981L13.2,6.8l1.787,1.186v3.006h-.975V9.038H12.388v1.95ZM13.2,15.716a19.032,19.032,0,0,0,3.193-3.567A5.411,5.411,0,0,0,17.425,9.33,4.23,4.23,0,0,0,16.2,6.194a4.092,4.092,0,0,0-3-1.219,4.092,4.092,0,0,0-3,1.219A4.23,4.23,0,0,0,8.975,9.33a5.333,5.333,0,0,0,1.056,2.819A20.667,20.667,0,0,0,13.2,15.716ZM13.2,17a21.608,21.608,0,0,1-3.908-4.136A6.431,6.431,0,0,1,8,9.33,5.027,5.027,0,0,1,9.568,5.446a5.283,5.283,0,0,1,7.264,0A5.027,5.027,0,0,1,18.4,9.33a6.431,6.431,0,0,1-1.292,3.534A21.608,21.608,0,0,1,13.2,17Z"
                transform="translate(-8 -4)"
                fill="#0067b8"
              />
            </svg>
            <p className="ml-2">2700 Wiener Neustadt | AT</p>
          </div>
          <div className="flex items-center py-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14.808"
              height="13"
              viewBox="0 0 14.808 13"
            >
              <path
                id="store_FILL0_wght400_GRAD0_opsz48"
                d="M6.694,9.219V8H19.734V9.219ZM6.8,21V15.759h-1V14.541l.894-4.1h13.02l.894,4.1v1.219h-1V21H18.394V15.759H14.555V21Zm1.219-1.219h5.322V15.759H8.014ZM7,14.541H7Zm0,0H19.409l-.63-2.884H7.628Z"
                transform="translate(-5.8 -8)"
                fill="#0067b8"
              />
            </svg>
            <p className="ml-2">Gigant Group Teknoloji A.S.</p>
          </div>
        </div>
      </div>
    </div>
        </>
    )
}

export default MyDraft;