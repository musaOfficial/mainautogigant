export default function DashboardCard({ adNo, start, end, title, price, imgSrc }) {
  return (
    <div className="mt-6 text-theme-black-2">
      <div className="flex items-center justify-between text-xs">
        <p>
          INSERAT NR.: <span className="text-theme-blue">{adNo}</span>
        </p>
        <p>BEGINN: {start}</p>
        <p>ENDET: {end}</p>
      </div>
      <div className="flex rounded-md overflow-hidden md:flex-col border-l-8 md:border-l-0 border-t-4 border-theme-yellow-2 md:bg-white md:rounded-md">
        <div className="flex flex-col md:flex-row md:w-full md:h-auto justify-between bg-theme-gray-6" title='Detailansicht'>
          <button className="h-1/3 md:w-1/3 flex items-center justify-center p-1 pt-4">
            <img src="/images/icons/ads-card-eye.svg" />
          </button>
          <button className="h-1/3 md:w-1/3 flex items-center justify-center p-1 pt-3 md:border-none border-y border-theme-gray-2" title="AFavoriten hinzufügen">
            <img src="/images/icons/ads-card-fav.svg" />
          </button>
          <button className="h-1/3 md:w-1/3 flex items-center justify-center p-1 pt-3" title='Teilen'>
            <img src="/images/icons/ads-card-share.svg" />
          </button>
        </div>
        <div className="flex relative text-white font-bold text-xs">
          <img className="w-full" src={imgSrc} />
          <div className="absolute flex w-full justify-around items-center top-6 px-8">
            <div className="flex items-center">
              <img src="/images/icons/db-card-eye.png" />
              <p className="ml-2">12,600</p>
            </div>
            <div className="flex items-center">
            <img src="/images/icons/db-card-fav.png" />
              <p className="ml-2">28</p>
            </div>
            <div className="flex items-center">
            <img src="/images/icons/db-card-phl.png" />
              <p className="ml-2">25</p>
            </div>
          </div>
        </div>
        <div className="flex-1 xl:flex-auto pt-4 border-b-8 border-theme-yellow-2 text-theme-black bg-white">
          <div className="px-4 flex items-center justify-between font-bold text-theme-blue">
            <h3 className="text-lg xl:text-sm">{title}</h3>
            <h3 className="text-2xl xl:text-base">{price} €</h3>
          </div>
          <div className="px-4 text-sm my-3 xl:text-xs">
            <p>4.2 FSI quattro * ABT KOMPRESSOR</p>
            <p>20{`"`} MB DESIGN Felgen</p>
          </div>
          <div className="flex flex-wrap text-13 py-1 px-4 pr-20 leading-5 bg-theme-gray-7 xl:pr-0">
            <p className="mr-4">2020</p>
            <p className="mr-4">Benzin</p>
            <p className="mr-4">125 PS</p>
            <p className="mr-4">Automatik</p>
            <p className="mr-4">412.000 KM</p>
            <p className="mr-4">Gebraucht</p>
            <p className="mr-4">Händler</p>
          </div>
          <div className="flex xl:flex-col justify-between text-xs px-4 py-2 bg-theme-gray-3 text-white">
            <div className="flex items-center">
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
                  fill="#f1f2f3"
                />
              </svg>
              <p className="ml-3">Gigant Group Teknoloji A.S.</p>
            </div>
            <div className="flex items-center">
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
                  fill="#f1f2f3"
                />
              </svg>
              <p className="ml-3">2700 Wiener Neustadt | AT</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
