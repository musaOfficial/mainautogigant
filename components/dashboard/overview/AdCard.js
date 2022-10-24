export default function AdCard() {
  return (
    <div className="flex items-center p-4 group md:flex-col md:bg-white md:rounded-10 md:mt-4 text-theme-gray-4 ">
      <div className="h-40 flex flex-col md:flex-row md:w-full md:h-auto justify-between rounded-tl-md rounded-bl-md md:rounded-bl-none md:rounded-tr-md bg-theme-gray-6 ease-linear duration-200 group-hover:shadow-md">
        <button className="h-1/3 md:w-1/3 flex items-center justify-center p-1 pt-4">
          <img src="/images/icons/ads-card-eye.svg" />
        </button>
        <button className="h-1/3 md:w-1/3 flex items-center justify-center p-1 pt-3 md:border-none border-y border-theme-gray-2">
          <img src="/images/icons/ads-card-fav.svg" />
        </button>
        <button className="h-1/3 md:w-1/3 flex items-center justify-center p-1 pt-3">
          <img src="/images/icons/ads-card-share.svg" />
        </button>
      </div>
      <div className="md:w-full">
        <img className="md:w-full" src="/images/adcard-car-1.png" />
        {/* <div>

        </div> */}
      </div>
      <div className="relative h-40 flex flex-col justify-between p-4 text-13 flex-1 md:rounded-br-md md:rounded-bl-md md:rounded-none rounded-tr-md rounded-br-md border-transparent border-y-2 border-r-2 md:border-t-0 md:border-l-2 group-hover:border-theme-yellow-2 bg-white ease-linear duration-200 group-hover:shadow-md">
        <div className="flex justify-between items-center md:items-start md:flex-col">
          <div className="">
            <h4 className="text-lg md:text-base mb-2 font-bold">Lamborghini Huracán</h4>
          </div>
          <h3 className="md:relative absolute top-0 right-0 text-2xl md:text-base md:rounded-10 md:mb-2 -mr-0.5 -mt-0.5 md:flex-1 md:font-bold text-white bg-theme-yellow-2 py-2 px-3 rounded-bl-10 rounded-tr-10 font-bold">€ 213.520,-</h3>
        </div>
        <p className="py-1">{`4.2 FSI quattro * ABT KOMPRESSOR, 20" MB DESIGN Felgen..`}</p>
        <p className="py-1 border-y">{`01/2020 | Benzin | 125 PS | 412.000 KM | Automatik | Gebraucht`}</p>
        <div className="flex items-center justify-between text-theme-blue md:flex-col md:items-start">
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
  );
}
