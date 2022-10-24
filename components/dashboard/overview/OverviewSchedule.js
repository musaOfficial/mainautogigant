import Link from "next/link";

export default function OverviewSchedule() {
  return (
    <div className="">
      <div className="flex 2xl:flex-wrap w-full items-start">
        <div className="mr-6 sm:mr-0 sm:w-full">
          <div className="md:!w-full xl:w-96 w-64 lg:w-full lg:mb-6 rounded-md py-3 px-2 text-theme-black-2 bg-theme-gray-4">
            <h3 className="text-lg font-bold mb-1 px-2">
              Mittwoch, 15 Juni 2022
            </h3>
            <p className="text-14 mb-1 px-2">Bevorstehende Termine:</p>
            <ul className="text-xs border-b border-theme-gray-3">
              <li className="flex py-1 px-2 bg-opacity-10 bg-theme-green mb-2">
                <p className="font-bold mr-6">10:00 - 11:30</p>
                <p>Das ist ein Blindtext..</p>
              </li>
              <li className="flex py-1 px-2 bg-opacity-5 bg-theme-green mb-2">
                <p className="font-bold mr-6">13:30 - 14:00</p>
                <p>Das ist ein Blindtext..</p>
              </li>
              <li className="flex py-1 px-2 bg-opacity-3 bg-theme-green mb-2">
                <p className="font-bold mr-6">15:45 - 17:30</p>
                <p>Das ist ein Blindtext..</p>
              </li>
            </ul>
            <button className="flex items-center font-bold text-14 mx-auto mt-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 30 30"
              >
                <path
                  id="Icon_material-add-circle"
                  data-name="Icon material-add-circle"
                  d="M18,3A15,15,0,1,0,33,18,15.005,15.005,0,0,0,18,3Zm7.5,16.5h-6v6h-3v-6h-6v-3h6v-6h3v6h6Z"
                  transform="translate(-3 -3)"
                  fill="#555"
                />
              </svg>
              <p className="ml-2 text-xs">Termin oder Besichtigung Eintragen</p>
            </button>
          </div>
          <div className="xl:w-96 w-64 lg:w-72 md:!w-full flex mt-6 p-4 rounded-md text-theme-black-2 bg-theme-gray-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="60"
              height="60"
              viewBox="0 0 60 60"
            >
              <g
                id="Group_491"
                data-name="Group 491"
                transform="translate(-721 -672)"
              >
                <rect
                  id="Rectangle_1117"
                  data-name="Rectangle 1117"
                  width="60"
                  height="60"
                  rx="5"
                  transform="translate(721 672)"
                  fill="#c3c3c3"
                />
                <path
                  id="move_to_inbox_FILL0_wght400_GRAD0_opsz48"
                  d="M9.333,46A3.2,3.2,0,0,1,7,45a3.2,3.2,0,0,1-1-2.333V9.333A3.2,3.2,0,0,1,7,7,3.2,3.2,0,0,1,9.333,6H42.667A3.2,3.2,0,0,1,45,7a3.2,3.2,0,0,1,1,2.333V42.667A3.418,3.418,0,0,1,42.667,46Zm0-3.333H42.667V35.111H34.556a9.773,9.773,0,0,1-3.75,3.417,10.264,10.264,0,0,1-9.611,0,9.773,9.773,0,0,1-3.75-3.417H9.333v7.556ZM26,36.389a6.919,6.919,0,0,0,4.111-1.306,11.809,11.809,0,0,0,3.111-3.306h9.444V9.333H9.333V31.778h9.444a11.809,11.809,0,0,0,3.111,3.306A6.919,6.919,0,0,0,26,36.389Zm0-7.167-8.5-8.5,2.389-2.389,4.444,4.444v-10.5h3.333v10.5l4.444-4.444L34.5,20.722ZM9.333,42.667Z"
                  transform="translate(725 676)"
                  fill="#f1f2f3"
                />
              </g>
            </svg>
            <span className="w-px rounded mx-4 bg-theme-gray-5"></span>
            <div className="flex flex-col justify-between items-center">
              <p className="text-xs font-bold">Eingehende Anfragen</p>
              <h4 className="text-xl">123</h4>
            </div>
          </div>
        </div>
        <div className="mr-6 xl:mt-6 sm:mr-0 sm:w-full">
          <div className="xl:w-96 w-64 flex lg:w-72 md:!w-full p-4 rounded-md text-theme-black-2 bg-theme-gray-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="60"
              height="60"
              viewBox="0 0 60 60"
            >
              <g
                id="Group_488"
                data-name="Group 488"
                transform="translate(-1274 -413)"
              >
                <rect
                  id="Rectangle_1116"
                  data-name="Rectangle 1116"
                  width="60"
                  height="60"
                  rx="5"
                  transform="translate(1274 413)"
                  fill="#c3c3c3"
                />
                <path
                  id="toll_FILL0_wght400_GRAD0_opsz48"
                  d="M27.455,37.091a14.038,14.038,0,0,1-10.318-4.227,14.038,14.038,0,0,1-4.227-10.318,14.038,14.038,0,0,1,4.227-10.318A14.038,14.038,0,0,1,27.455,8a14.038,14.038,0,0,1,10.318,4.227A14.038,14.038,0,0,1,42,22.545a14.038,14.038,0,0,1-4.227,10.318A14.038,14.038,0,0,1,27.455,37.091Zm-13.909-.545a12.135,12.135,0,0,1-8.341-4.7,14.612,14.612,0,0,1-3.2-9.3,14.612,14.612,0,0,1,3.2-9.3,12.135,12.135,0,0,1,8.341-4.7v2.636a9.911,9.911,0,0,0-6.409,3.977,12.086,12.086,0,0,0-2.409,7.386,12.086,12.086,0,0,0,2.409,7.386,9.911,9.911,0,0,0,6.409,3.977Zm13.909-14Zm0,11.818A11.376,11.376,0,0,0,35.8,30.886a11.376,11.376,0,0,0,3.477-8.341A11.376,11.376,0,0,0,35.8,14.2a11.376,11.376,0,0,0-8.341-3.477A11.376,11.376,0,0,0,19.114,14.2a11.376,11.376,0,0,0-3.477,8.341,11.376,11.376,0,0,0,3.477,8.341A11.376,11.376,0,0,0,27.455,34.364Z"
                  transform="translate(1282 420)"
                  fill="#f1f2f3"
                />
              </g>
            </svg>
            <span className="w-px rounded mx-4 bg-theme-gray-5"></span>
            <div className="flex flex-col justify-between items-center">
              <p className="text-xs font-bold">GIGA COINS</p>
              <h4 className="text-xl font-bold">500</h4>
              <Link href="#">
                <a className="flex items-center text-10 font-bold text-theme-blue">
                  <p className="mr-2">COINS AUFLADEN</p>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="15"
                    height="15"
                    viewBox="0 0 15 15"
                  >
                    <path
                      id="Icon_awesome-arrow-circle-right"
                      data-name="Icon awesome-arrow-circle-right"
                      d="M8.063.563a7.5,7.5,0,1,1-7.5,7.5A7.5,7.5,0,0,1,8.063.563ZM7.189,4.905l2.283,2.19H3.95a.724.724,0,0,0-.726.726V8.3a.724.724,0,0,0,.726.726H9.472L7.189,11.22a.727.727,0,0,0-.012,1.037l.333.33a.723.723,0,0,0,1.025,0l4.013-4.01a.723.723,0,0,0,0-1.025L8.534,3.535a.723.723,0,0,0-1.025,0l-.333.33A.73.73,0,0,0,7.189,4.905Z"
                      transform="translate(-0.563 -0.563)"
                      fill="#0067b8"
                    />
                  </svg>
                </a>
              </Link>
            </div>
          </div>
          <div className="xl:w-96 w-64 lg:w-72 md:!w-full md:mb-4 flex p-4 mt-6 rounded-md text-theme-black-2 bg-theme-gray-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="60"
              height="60"
              viewBox="0 0 60 60"
            >
              <g
                id="Group_489"
                data-name="Group 489"
                transform="translate(-998 -543)"
              >
                <rect
                  id="Rectangle_1112"
                  data-name="Rectangle 1112"
                  width="60"
                  height="60"
                  rx="5"
                  transform="translate(998 543)"
                  fill="#c3c3c3"
                />
                <path
                  id="visibility_FILL0_wght400_GRAD0_opsz48"
                  d="M22,29.364a7.682,7.682,0,0,0,7.727-7.727A7.682,7.682,0,0,0,22,13.909a7.682,7.682,0,0,0-7.727,7.727A7.682,7.682,0,0,0,22,29.364Zm0-2.636a5.044,5.044,0,0,1-5.091-5.091A5.044,5.044,0,0,1,22,16.545a5.044,5.044,0,0,1,5.091,5.091A5.044,5.044,0,0,1,22,26.727Zm0,8.545A20.372,20.372,0,0,1,10,31.5a22.984,22.984,0,0,1-8-9.864,22.984,22.984,0,0,1,8-9.864A20.372,20.372,0,0,1,22,8a20.372,20.372,0,0,1,12,3.773,22.984,22.984,0,0,1,8,9.864A22.984,22.984,0,0,1,34,31.5,20.372,20.372,0,0,1,22,35.273Zm0-13.636Zm0,10.909a18.279,18.279,0,0,0,10.114-2.977,19.32,19.32,0,0,0,7.023-7.932A19.32,19.32,0,0,0,32.114,13.7,18.279,18.279,0,0,0,22,10.727,18.279,18.279,0,0,0,11.886,13.7a19.645,19.645,0,0,0-7.068,7.932,19.645,19.645,0,0,0,7.068,7.932A18.279,18.279,0,0,0,22,32.545Z"
                  transform="translate(1006 551)"
                  fill="#f1f2f3"
                />
              </g>
            </svg>
            <span className="w-px rounded mx-4 bg-theme-gray-5"></span>
            <div className="flex flex-col justify-between items-center">
              <p className="text-xs font-bold">Gesamtaufrufe</p>
              <h4 className="text-xl">3572</h4>
            </div>
          </div>
          <div className="xl:w-96 w-64 lg:w-72 md:!w-full flex md:mt-4 mt-6 p-4 rounded-md text-theme-black-2 bg-theme-gray-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="60"
              height="60"
              viewBox="0 0 60 60"
            >
              <g
                id="Group_492"
                data-name="Group 492"
                transform="translate(-998 -672)"
              >
                <rect
                  id="Rectangle_1111"
                  data-name="Rectangle 1111"
                  width="60"
                  height="60"
                  rx="5"
                  transform="translate(998 672)"
                  fill="#c3c3c3"
                />
                <path
                  id="phone_in_talk_FILL0_wght400_GRAD0_opsz48"
                  d="M42.394,25.589A16.891,16.891,0,0,0,26.083,9.279V5.95A19.5,19.5,0,0,1,33.6,7.642a20.494,20.494,0,0,1,10.43,10.43,19.5,19.5,0,0,1,1.692,7.517Zm-9.376,0A7.418,7.418,0,0,0,30.8,20.9a7.6,7.6,0,0,0-4.716-2.191V15.381a10.748,10.748,0,0,1,7.074,3.162,10.584,10.584,0,0,1,3.19,7.046ZM43.448,45.95a29.926,29.926,0,0,1-13.454-3.329,45.678,45.678,0,0,1-12.011-8.655A45.678,45.678,0,0,1,9.329,21.956,29.926,29.926,0,0,1,6,8.5a2.463,2.463,0,0,1,2.5-2.5h7.767a1.962,1.962,0,0,1,1.359.527,2.452,2.452,0,0,1,.749,1.415l1.5,6.99a3.99,3.99,0,0,1-.028,1.415,2.138,2.138,0,0,1-.583,1.082l-5.548,5.6a46.061,46.061,0,0,0,6.963,8.988,38.48,38.48,0,0,0,8.738,6.491l5.27-5.437a3.067,3.067,0,0,1,1.276-.86,2.564,2.564,0,0,1,1.442-.083L44,33.578a2.424,2.424,0,0,1,1.942,2.386v7.49a2.463,2.463,0,0,1-2.5,2.5Zm-31.4-25.964,4.494-4.549h0l-1.276-6.1H9.329a19.1,19.1,0,0,0,.666,4.743A44.719,44.719,0,0,0,12.047,19.986ZM42.616,42.621h0V36.685h0L36.9,35.52h0l-4.383,4.6a27.69,27.69,0,0,0,4.938,1.72A26.036,26.036,0,0,0,42.616,42.621Zm-10.1-2.5ZM12.047,19.986Z"
                  transform="translate(1002 676.05)"
                  fill="#f1f2f3"
                />
              </g>
            </svg>

            <span className="w-px rounded mx-4 bg-theme-gray-5"></span>
            <div className="flex flex-col justify-between items-center">
              <p className="text-xs font-bold">Eingehende Anrufe</p>
              <h4 className="text-xl">3250</h4>
            </div>
          </div>
        </div>
        <div className="2xl:mt-6 sm:w-full">
          <div className="xl:w-96 w-64 flex lg:w-72 md:!w-full xl:mb-4 p-4 rounded-md text-theme-black-2 bg-theme-gray-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="60"
              height="60"
              viewBox="0 0 60 60"
            >
              <g
                id="Group_382"
                data-name="Group 382"
                transform="translate(-998 -413)"
              >
                <rect
                  id="Rectangle_1165"
                  data-name="Rectangle 1165"
                  width="60"
                  height="60"
                  rx="5"
                  transform="translate(998 413)"
                  fill="#c3c3c3"
                />
                <path
                  id="view_in_ar_FILL0_wght400_GRAD0_opsz48"
                  d="M20.545,36.227l-10-5.864a2.482,2.482,0,0,1-.977-1A2.844,2.844,0,0,1,9.227,28V16.318a2.844,2.844,0,0,1,.341-1.364,2.482,2.482,0,0,1,.977-1L20.591,8a2.912,2.912,0,0,1,2.818,0l10.045,5.955a2.482,2.482,0,0,1,.977,1,2.844,2.844,0,0,1,.341,1.364V28a2.7,2.7,0,0,1-.364,1.364,2.641,2.641,0,0,1-1,1L23.273,36.227a2.739,2.739,0,0,1-2.727,0Zm.091-3.136V22.909L12,17.955v9.955h0Zm2.727,0,8.682-5.182h0V17.955l-8.682,4.955ZM2,10.591v-3.5A4.9,4.9,0,0,1,3.5,3.5,4.9,4.9,0,0,1,7.091,2h3.5V4.727h-3.5A2.329,2.329,0,0,0,4.727,7.091v3.5ZM7.091,42A4.9,4.9,0,0,1,3.5,40.5,4.9,4.9,0,0,1,2,36.909v-3.5H4.727v3.5a2.329,2.329,0,0,0,2.364,2.364h3.5V42Zm26.318-.182V39.091h3.5a2.329,2.329,0,0,0,2.364-2.364v-3.5H42v3.5a5.122,5.122,0,0,1-5.091,5.091Zm5.864-31.227v-3.5a2.329,2.329,0,0,0-2.364-2.364h-3.5V2h3.5A4.9,4.9,0,0,1,40.5,3.5,4.9,4.9,0,0,1,42,7.091v3.5ZM22,20.455l8.636-5L22,10.5h0l-8.636,4.955ZM22.045,22.909ZM22,20.455ZM23.364,22.909ZM20.636,22.909Z"
                  transform="translate(1006 421)"
                  fill="#f1f2f3"
                />
              </g>
            </svg>
            <span className="w-px rounded mx-4 bg-theme-gray-5"></span>
            <div className="flex flex-col justify-between items-center">
              <p className="text-xs font-bold">Mein Abonnement</p>
              <h4 className="text-xl font-bold">SILBER</h4>
              <Link href="#">
                <a className="flex items-center text-10 font-bold text-theme-blue">
                  <p className="mr-2">ABO UPGRADEN</p>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="15"
                    height="15"
                    viewBox="0 0 15 15"
                  >
                    <path
                      id="Icon_awesome-arrow-circle-right"
                      data-name="Icon awesome-arrow-circle-right"
                      d="M8.063.563a7.5,7.5,0,1,1-7.5,7.5A7.5,7.5,0,0,1,8.063.563ZM7.189,4.905l2.283,2.19H3.95a.724.724,0,0,0-.726.726V8.3a.724.724,0,0,0,.726.726H9.472L7.189,11.22a.727.727,0,0,0-.012,1.037l.333.33a.723.723,0,0,0,1.025,0l4.013-4.01a.723.723,0,0,0,0-1.025L8.534,3.535a.723.723,0,0,0-1.025,0l-.333.33A.73.73,0,0,0,7.189,4.905Z"
                      transform="translate(-0.563 -0.563)"
                      fill="#0067b8"
                    />
                  </svg>
                </a>
              </Link>
            </div>
          </div>
          <div className="xl:w-96 w-64 lg:w-72 md:!w-full flex p-4 mt-6 rounded-md text-theme-black-2 bg-theme-gray-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="60"
              height="60"
              viewBox="0 0 60 60"
            >
              <g
                id="Group_490"
                data-name="Group 490"
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
                  id="Ellipse_78"
                  data-name="Ellipse 78"
                  transform="translate(1284 579)"
                  fill="#00ce00"
                  stroke="#f1f2f3"
                  strokeWidth="1"
                >
                  <circle cx="3" cy="3" r="3" stroke="none" />
                  <circle cx="3" cy="3" r="2.5" fill="none" />
                </g>
                <g
                  id="Ellipse_77"
                  data-name="Ellipse 77"
                  transform="translate(1284 570)"
                  fill="#00ce00"
                  stroke="#f1f2f3"
                  strokeWidth="1"
                >
                  <circle cx="3" cy="3" r="3" stroke="none" />
                  <circle cx="3" cy="3" r="2.5" fill="none" />
                </g>
                <g
                  id="Ellipse_76"
                  data-name="Ellipse 76"
                  transform="translate(1284 561)"
                  fill="#00ce00"
                  stroke="#f1f2f3"
                  strokeWidth="1"
                >
                  <circle cx="3" cy="3" r="3" stroke="none" />
                  <circle cx="3" cy="3" r="2.5" fill="none" />
                </g>
              </g>
            </svg>
            <span className="w-px rounded mx-4 bg-theme-gray-5"></span>
            <div className="flex flex-col justify-between items-center">
              <p className="text-xs font-bold">Inserate online</p>
              <h4 className="text-xl font-bold">1234</h4>
              <Link href="#">
                <a className="flex items-center text-10 font-bold text-theme-blue">
                  <p className="mr-2">INSERAT AUFGEBEN</p>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="15"
                    height="15"
                    viewBox="0 0 15 15"
                  >
                    <path
                      id="Icon_awesome-arrow-circle-right"
                      data-name="Icon awesome-arrow-circle-right"
                      d="M8.063.563a7.5,7.5,0,1,1-7.5,7.5A7.5,7.5,0,0,1,8.063.563ZM7.189,4.905l2.283,2.19H3.95a.724.724,0,0,0-.726.726V8.3a.724.724,0,0,0,.726.726H9.472L7.189,11.22a.727.727,0,0,0-.012,1.037l.333.33a.723.723,0,0,0,1.025,0l4.013-4.01a.723.723,0,0,0,0-1.025L8.534,3.535a.723.723,0,0,0-1.025,0l-.333.33A.73.73,0,0,0,7.189,4.905Z"
                      transform="translate(-0.563 -0.563)"
                      fill="#0067b8"
                    />
                  </svg>
                </a>
              </Link>
            </div>
          </div>
          <div className="xl:w-96 w-64 lg:w-72 md:!w-full flex p-4 lg:mt-4 mt-6 rounded-md text-theme-black-2 bg-theme-gray-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="60"
              height="60"
              viewBox="0 0 60 60"
            >
              <g
                id="Group_493"
                data-name="Group 493"
                transform="translate(-1274 -672)"
              >
                <rect
                  id="Rectangle_1114"
                  data-name="Rectangle 1114"
                  width="60"
                  height="60"
                  rx="5"
                  transform="translate(1274 672)"
                  fill="#c3c3c3"
                />
                <path
                  id="no_crash_FILL0_wght400_GRAD0_opsz48"
                  d="M21,9.75,16.583,5.375l1.75-1.792L21,6.25,27.25,0,29,1.75ZM9.333,36.5v2.25A1.211,1.211,0,0,1,8.083,40H7.25A1.211,1.211,0,0,1,6,38.75V25.25L9.542,14.583a1.836,1.836,0,0,1,.688-.917,1.886,1.886,0,0,1,1.1-.333H30.667a1.886,1.886,0,0,1,1.1.333,1.836,1.836,0,0,1,.687.917L36,25.25v13.5A1.211,1.211,0,0,1,34.75,40h-.875A1.146,1.146,0,0,1,33,39.646a1.255,1.255,0,0,1-.333-.9V36.5Zm.125-13.75H32.542L30.25,15.833H11.75ZM8.5,25.25v0Zm4.417,6.667a2.143,2.143,0,0,0,1.6-.667,2.2,2.2,0,0,0,.646-1.583,2.32,2.32,0,0,0-.646-1.646,2.112,2.112,0,0,0-1.6-.687,2.347,2.347,0,0,0-2.333,2.333,2.112,2.112,0,0,0,.688,1.6A2.32,2.32,0,0,0,12.917,31.917Zm16.208,0a2.281,2.281,0,0,0,1.646-.667,2.131,2.131,0,0,0,.688-1.583,2.347,2.347,0,0,0-2.333-2.333,2.112,2.112,0,0,0-1.6.687,2.32,2.32,0,0,0-.646,1.646,2.143,2.143,0,0,0,.667,1.6A2.2,2.2,0,0,0,29.125,31.917ZM8.5,34h25V25.25H8.5Z"
                  transform="translate(1283 682)"
                  fill="#f1f2f3"
                />
              </g>
            </svg>
            <span className="w-px rounded mx-4 bg-theme-gray-5"></span>
            <div className="flex flex-col justify-between items-center">
              <p className="text-xs font-bold">Verkaufte Fahrzeuge</p>
              <h4 className="text-xl">3572</h4>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-6 lg:mt-4 flex xl:flex-wrap lg:justify-between"></div>
    </div>
  );
}
