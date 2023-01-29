import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import classes from "./Sidebar.module.css";
import Up from "./../../public/up.svg";

const useDeviceSize = () => {
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);

  const handleWindowResize = () => {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  };

  useEffect(() => {
    // component is mounted and window is available
    handleWindowResize();
    window.addEventListener("resize", handleWindowResize);
    // unsubscribe from the event on component unmount
    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);

  return [width, height];
};

export default function Sidebar() {
  const [active, setActive] = useState("overview");
  const [expandSidebar, setExpandSidebar] = useState(false);

  const [width, height] = useDeviceSize();

  const router = useRouter();

  useEffect(() => {
    setActive(router.pathname);
  }, []);

  return (
    <div
      className={`w-280 lg:top-0 relative lg:absolute ${
        expandSidebar ? "lg:left-0 z-11 lg:top-0" : "lg:-left-80 z-10"
      } z-10 ${classes.backgroundcolor} ease-linear duration-200`}
    >
      <div className={classes.cornerwhite}>
        <div className={classes.cornercolor}></div>
      </div>

      {expandSidebar && <></>}
      {!expandSidebar && (
        <button
          className="lg:fixed top-1/2 lg:-mt-10 left-0 hidden lg:block"
          onClick={() => setExpandSidebar(!expandSidebar)}
        >
          {width < 1024 && <img src="/images/icons/mobile-hamburger.png" />}
        </button>
      )}
      
        <div
          className={classes.burgeractive}
          onClick={() => setExpandSidebar((d) => !d)}
        >
          {width < 1024 && <img src="/images/icons/mobile-hamburger.png" />}
        </div>
      <div className={classes.burgercontainer}>
        <div className={`lg:fixed z-40 lg:h-screen lg:bg-theme-gray-4 ${width < 1024 && classes.overflow} `}>
          <div className={` pl-6 pr-6 pb-10 border-b border-opacity-15 border-theme-gray-3 ${width < 1024 && classes.overflow} `}>
            <Link href="/dashboard">
              <a
                className={`w-full h-12 flex items-center mt-6 text-14 group py-2 px-4 rounded-md ease-linear duration-150 text-white bg-theme-gray-10 hover:bg-[#FBB900] ${
                  active === "/dashboard" ? "bg-[#FBB900] font-bold" : ""
                }`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  viewBox="0 0 30 30"
                >
                  <path
                    id="account_circle_FILL0_wght400_GRAD0_opsz48"
                    d="M9.325,27.438a21.6,21.6,0,0,1,4.688-2.531A13.955,13.955,0,0,1,19,24.025a14.107,14.107,0,0,1,5.006.881,21.426,21.426,0,0,1,4.706,2.531,13.164,13.164,0,0,0,2.344-4.087A13.553,13.553,0,0,0,31.75,19,12.492,12.492,0,0,0,19,6.25,12.492,12.492,0,0,0,6.25,19a13.228,13.228,0,0,0,.712,4.35A13.5,13.5,0,0,0,9.325,27.438ZM19,20.125a5.059,5.059,0,0,1-5.138-5.137A5.059,5.059,0,0,1,19,9.85a5.059,5.059,0,0,1,5.137,5.138A5.059,5.059,0,0,1,19,20.125ZM19,34a14.514,14.514,0,0,1-5.813-1.181,15.113,15.113,0,0,1-8.006-8.006,14.937,14.937,0,0,1,0-11.644,15.163,15.163,0,0,1,8.006-7.988,14.937,14.937,0,0,1,11.644,0,15.215,15.215,0,0,1,7.987,7.988,14.937,14.937,0,0,1,0,11.644,15.163,15.163,0,0,1-7.987,8.006A14.473,14.473,0,0,1,19,34Zm0-2.25a13.753,13.753,0,0,0,4.031-.6,11.98,11.98,0,0,0,3.881-2.1,16.321,16.321,0,0,0-3.9-2.062,11.655,11.655,0,0,0-8.025,0,16.321,16.321,0,0,0-3.9,2.062,11.98,11.98,0,0,0,3.881,2.1A13.753,13.753,0,0,0,19,31.75Zm0-13.875a2.763,2.763,0,0,0,2.888-2.887,2.889,2.889,0,1,0-5.775,0A2.763,2.763,0,0,0,19,17.875Zm0-2.887Zm0,14.025Z"
                    transform="translate(-4 -4)"
                    className={`ease-linear duration-300 fill-white ${
                      active === "/dashboard" ? "fill-white" : ""
                    }`}
                  />
                </svg>
                <p className="ml-2">ÜBERSICHT</p>
              </a>
            </Link>
            <Link href="/dashboard/create-ad">
              <a
                className={`w-full h-12 mt-2 flex items-center text-14 group py-2 px-4 bg-theme-gray-10 rounded-md ease-linear duration-150 text-white hover:bg-[#FBB900] ${
                  active === "/dashboard/create-ad"
                    ? "bg-[#FBB900] fill-white font-bold"
                    : ""
                }`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  viewBox="0 0 30 30"
                >
                  <path
                    id="playlist_add_circle_FILL0_wght400_GRAD0_opsz48"
                    d="M23.875,26.125h2.25v-3h3v-2.25h-3v-3h-2.25v3h-3v2.25h3Zm-12-7.5h9.75v-2.25h-9.75Zm0-4.5h9.75v-2.25h-9.75Zm0,9.375h3.75V20.875h-3.75ZM19,34a15.214,15.214,0,0,1-5.925-1.144,14.518,14.518,0,0,1-7.931-7.931A15.214,15.214,0,0,1,4,19a15.117,15.117,0,0,1,1.144-5.888A14.64,14.64,0,0,1,8.313,8.35,14.954,14.954,0,0,1,19,4,14.88,14.88,0,0,1,34,19a14.954,14.954,0,0,1-4.35,10.688,14.64,14.64,0,0,1-4.762,3.169A15.117,15.117,0,0,1,19,34Zm0-15Zm0,12.75A12.492,12.492,0,0,0,31.75,19,12.492,12.492,0,0,0,19,6.25,12.492,12.492,0,0,0,6.25,19,12.492,12.492,0,0,0,19,31.75Z"
                    transform="translate(-4 -4)"
                    className={`ease-linear duration-300 fill-white group-hover:fill-white ${
                      active === "/dashboard/create-ad" ? "fill-white" : ""
                    }`}
                  />
                </svg>

                <p className="ml-2">ANZEIGE AUFGEBEN</p>
              </a>
            </Link>
            <Link href="/dashboard/my-ads">
              <a
                className={`w-full h-12 mt-2 flex items-center text-14 group py-2 px-4 rounded-md ease-linear duration-100 text-white bg-theme-gray-10 hover:bg-[#FBB900]${
                  active === "/dashboard/my-ads"
                    ? " bg-[#FBB900] font-bold"
                    : ""
                }`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="16.667"
                  viewBox="0 0 30 16.667"
                  className=""
                >
                  <path
                    id="list_FILL0_wght400_GRAD0_opsz48"
                    d="M13.083,16.5V14H36v2.5Zm0,7.083v-2.5H36v2.5Zm0,7.083v-2.5H36v2.5ZM7.25,16.5a1.25,1.25,0,1,1,0-2.5,1.25,1.25,0,1,1,0,2.5Zm0,7.083a1.25,1.25,0,1,1,0-2.5,1.25,1.25,0,1,1,0,2.5Zm0,7.083a1.25,1.25,0,1,1,0-2.5,1.25,1.25,0,1,1,0,2.5Z"
                    transform="translate(-6 -14)"
                    className={`ease-linear duration-300 fill-white group-hover:fill-white ${
                      active === "/dashboard/my-ads" ? "fill-white" : ""
                    }`}
                  />
                </svg>
                <p className="ml-2">MEINE INSERATE</p>
              </a>
            </Link>
            <Link href="/dashboard/drafts">
              <a
                className={`w-full h-12 mt-2 flex -mb-4 items-center text-14 group py-2 px-4 rounded-md ease-linear duration-100 text-white bg-theme-gray-10 hover:bg-[#FBB900] ${
                  active === "/dashboard/drafts" ? "bg-[#FBB900] font-bold" : ""
                }`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="30"
                  viewBox="0 0 24 30"
                  className="mr-2"
                >
                  <path
                    id="draft_FILL0_wght400_GRAD0_opsz48"
                    d="M10.25,34A2.307,2.307,0,0,1,8,31.75V6.25a2.159,2.159,0,0,1,.675-1.575A2.159,2.159,0,0,1,10.25,4H23.787L32,12.212V31.75A2.307,2.307,0,0,1,29.75,34Zm0-2.25h19.5V13.225H22.662V6.25H10.25v25.5Zm0,0h0V6.25h0v25.5Z"
                    transform="translate(-8 -4)"
                    className={`ease-linear duration-300 fill-white group-hover:fill-white ${
                      active === "/dashboard/drafts" ? "fill-white" : ""
                    }`}
                  />
                </svg>

                <p className="ml-2">ENTWÜRFE</p>
              </a>
            </Link>
          </div>
          <div className="pl-6 pr-6 pb-6 pt-6 border-b border-opacity-25 border-theme-gray-3">
            <Link href="/dashboard/calendar">
              <a
                className={`w-full h-12 flex items-center text-14 group py-2 px-4 rounded-md ease-linear duration-300 text-white bg-theme-gray-10 hover:bg-[#FBB900] hover:white hover:shadow-md ${
                  active === "/dashboard/calendar"
                    ? "bg-[#FBB900] font-bold fill-white"
                    : ""
                }`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="29"
                  height="32"
                  viewBox="0 0 29 32"
                >
                  <g
                    id="Icon_feather-calendar"
                    data-name="Icon feather-calendar"
                    transform="translate(-3.5 -2)"
                  >
                    <path
                      id="Path_711"
                      data-name="Path 711"
                      d="M7.5,6h21a3,3,0,0,1,3,3V30a3,3,0,0,1-3,3H7.5a3,3,0,0,1-3-3V9a3,3,0,0,1,3-3Z"
                      fill="none"
                      className={`ease-linear duration-300 stroke-white  group-hover:stroke-white ${
                        active === "/dashboard/calendar" ? "stroke-white" : ""
                      }`}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                    />
                    <path
                      id="Path_712"
                      data-name="Path 712"
                      d="M24,3V9"
                      fill="none"
                      className={`ease-linear duration-300 stroke-white group-hover:stroke-white ${
                        active === "/dashboard/calendar" ? "stroke-white" : ""
                      }`}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                    />
                    <path
                      id="Path_713"
                      data-name="Path 713"
                      d="M12,3V9"
                      fill="none"
                      className={`ease-linear duration-300 stroke-white group-hover:stroke-white ${
                        active === "/dashboard/calendar" ? "stroke-white" : ""
                      }`}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                    />
                    <path
                      id="Path_714"
                      data-name="Path 714"
                      d="M4.5,15h27"
                      fill="none"
                      className={`ease-linear duration-300 stroke-white group-hover:stroke-white ${
                        active === "/dashboard/calendar" ? "stroke-white" : ""
                      }`}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                    />
                  </g>
                </svg>

                <p className="ml-2">KALENDER</p>
              </a>
            </Link>
            <Link href="/dashboard/messages">
              <a
                className={`w-full h-12 mt-2 flex items-center text-14 group py-2 px-4 rounded-md ease-linear duration-300 text-white bg-theme-gray-10 hover:bg-[#FBB900] hover:text-white hover:shadow-md ${
                  active === "/dashboard/messages"
                    ? "bg-[#FBB900] font-bold"
                    : ""
                }`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  viewBox="0 0 30 30"
                >
                  <path
                    id="chat_FILL0_wght400_GRAD0_opsz48"
                    d="M10,22.037H21.737v-2.25H10Zm0-4.875H28v-2.25H10Zm0-4.875H28v-2.25H10ZM4,34V6.25a2.18,2.18,0,0,1,.675-1.556A2.131,2.131,0,0,1,6.25,4h25.5a2.152,2.152,0,0,1,1.556.694A2.152,2.152,0,0,1,34,6.25v19.5A2.38,2.38,0,0,1,31.75,28H10Zm2.25-5.437L9.063,25.75H31.75V6.25H6.25Zm0-22.312h0v19.5h0V6.25Z"
                    transform="translate(-4 -4)"
                    className={`ease-linear duration-300 fill-white group-hover:fill-white ${
                      active === "/dashboard/messages" ? "fill-white" : ""
                    }`}
                  />
                </svg>

                <p className="ml-2">NACHRICHTEN</p>
              </a>
            </Link>
            <Link href="/dashboard/notifications">
              <a
                className={`w-full h-12 mt-2 flex items-center text-14 group py-2 px-4 rounded-md ease-linear duration-300 text-white bg-theme-gray-10 hover:bg-[#FBB900] hover:text-white hover:shadow-md ${
                  active === "/dashboard/notifications"
                    ? "bg-[#FBB900] font-bold"
                    : ""
                }`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  viewBox="0 0 30 30"
                >
                  <path
                    id="circle_notifications_FILL0_wght400_GRAD0_opsz48_1_"
                    data-name="circle_notifications_FILL0_wght400_GRAD0_opsz48 (1)"
                    d="M19,28.9a1.992,1.992,0,0,0,1.481-.638,2.083,2.083,0,0,0,.619-1.5H16.862A2.178,2.178,0,0,0,19,28.9Zm-7.275-4.388H26.238v-2.25h-1.5V17.95a7.65,7.65,0,0,0-1.181-4.163A4.869,4.869,0,0,0,20.237,11.5V10.375A1.217,1.217,0,0,0,19,9.138a1.26,1.26,0,0,0-.9.356,1.167,1.167,0,0,0-.375.881V11.5a4.932,4.932,0,0,0-3.319,2.213,7.156,7.156,0,0,0-1.181,4.012v4.538h-1.5ZM19,34a15.214,15.214,0,0,1-5.925-1.144,14.518,14.518,0,0,1-7.931-7.931A15.214,15.214,0,0,1,4,19a15.117,15.117,0,0,1,1.144-5.888A14.64,14.64,0,0,1,8.313,8.35,14.954,14.954,0,0,1,19,4,14.88,14.88,0,0,1,34,19a14.954,14.954,0,0,1-4.35,10.688,14.64,14.64,0,0,1-4.763,3.169A15.117,15.117,0,0,1,19,34Zm0-2.25A12.492,12.492,0,0,0,31.75,19,12.492,12.492,0,0,0,19,6.25,12.492,12.492,0,0,0,6.25,19,12.492,12.492,0,0,0,19,31.75Zm-3.525-9.487V17.5a3.687,3.687,0,0,1,.994-2.606A3.3,3.3,0,0,1,19,13.825a3.246,3.246,0,0,1,2.513,1.069,3.727,3.727,0,0,1,.975,2.606v4.763ZM19,19Z"
                    transform="translate(-4 -4)"
                    className={`ease-linear duration-300 fill-white group-hover:fill-white ${
                      active === "/dashboard/notifications" ? "fill-white" : ""
                    }`}
                  />
                </svg>

                <p className="ml-2">BENACHRICHTIGUNGEN</p>
              </a>
            </Link>
            <Link href="/dashboard/settings">
              <a
                className={`w-full h-12 mt-2 flex items-center text-14 group py-2 px-4 rounded-md ease-linear duration-300 text-white bg-theme-gray-10 hover:bg-[#FBB900] hover:text-white hover:shadow-md ${
                  active === "/dashboard/settings"
                    ? "bg-[#FBB900] font-bold"
                    : ""
                }`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  viewBox="0 0 30 30"
                >
                  <path
                    id="settings_FILL0_wght400_GRAD0_opsz48"
                    d="M15.55,34l-.75-4.725a10.048,10.048,0,0,1-1.5-.713,10.306,10.306,0,0,1-1.387-.937L7.487,29.65,4,23.5l4.05-2.963a4.458,4.458,0,0,1-.094-.769q-.019-.431-.019-.769t.019-.769a4.458,4.458,0,0,1,.094-.769L4,14.5,7.487,8.35l4.425,2.025A10.306,10.306,0,0,1,13.3,9.438a7.76,7.76,0,0,1,1.5-.675L15.55,4h6.9l.75,4.725a12.158,12.158,0,0,1,1.519.694,6.455,6.455,0,0,1,1.369.956L30.512,8.35,34,14.5l-4.05,2.888a5.284,5.284,0,0,1,.094.806q.019.431.019.806t-.019.787a5.221,5.221,0,0,1-.094.788L34,23.5l-3.488,6.15-4.425-2.025a12.44,12.44,0,0,1-1.369.956,6.535,6.535,0,0,1-1.519.694L22.45,34ZM19,23.875A4.865,4.865,0,0,0,23.875,19,4.865,4.865,0,0,0,19,14.125,4.865,4.865,0,0,0,14.125,19,4.865,4.865,0,0,0,19,23.875Zm0-2.25a2.625,2.625,0,0,1-1.856-4.481,2.625,2.625,0,0,1,3.713,3.713A2.529,2.529,0,0,1,19,21.625ZM19,19ZM17.35,31.75h3.3l.525-4.2a8.844,8.844,0,0,0,2.344-.937,9.612,9.612,0,0,0,2.006-1.538L29.5,26.8,31,24.1l-3.525-2.587q.15-.638.244-1.256A8.374,8.374,0,0,0,27.813,19a10.431,10.431,0,0,0-.075-1.256,7.759,7.759,0,0,0-.263-1.256L31,13.9l-1.5-2.7-3.975,1.725a8.359,8.359,0,0,0-1.95-1.631,6.325,6.325,0,0,0-2.4-.844l-.525-4.2h-3.3l-.525,4.2a7.945,7.945,0,0,0-2.381.9,8.271,8.271,0,0,0-1.969,1.575L8.5,11.2,7,13.9l3.525,2.587q-.15.638-.244,1.256a8.464,8.464,0,0,0,0,2.512q.094.619.244,1.256L7,24.1l1.5,2.7,3.975-1.725a9.611,9.611,0,0,0,2.006,1.538,8.844,8.844,0,0,0,2.344.938Z"
                    transform="translate(-4 -4)"
                    className={`ease-linear duration-300 fill-white group-hover:fill-white ${
                      active === "/dashboard/settings" ? "fill-white" : ""
                    }`}
                  />
                </svg>

                <p className="ml-2">EINSTELLUNGEN</p>
              </a>
            </Link>
          </div>
          <div className="pl-6 pr-6 pb-6 pt-6 border-b border-opacity-25 border-theme-gray-3">
            <Link href="/dashboard/favourites">
              <a
                className={`w-full h-12 flex items-center text-14 group py-2 px-4 rounded-md ease-linear duration-300 text-white bg-theme-gray-10 hover:bg-[#FBB900] hover:text-white hover:shadow-md ${
                  active === "/dashboard/favourites"
                    ? "bg-[#FBB900] font-bold"
                    : ""
                }`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="27.487"
                  viewBox="0 0 30 27.487"
                >
                  <path
                    id="favorite_FILL0_wght400_GRAD0_opsz48"
                    d="M19,32.788,17.463,31.4a133.051,133.051,0,0,1-9.788-9.75Q4,17.487,4,13.213A7.751,7.751,0,0,1,11.875,5.3a8.531,8.531,0,0,1,3.787.919A8.9,8.9,0,0,1,19,9.238a10.877,10.877,0,0,1,3.412-3.019A7.923,7.923,0,0,1,26.125,5.3,7.751,7.751,0,0,1,34,13.213q0,4.275-3.675,8.438a133.05,133.05,0,0,1-9.788,9.75Zm0-14.1Zm0,11.138q5.7-5.25,9.225-9.112t3.525-7.5A5.453,5.453,0,0,0,26.125,7.55,6.01,6.01,0,0,0,22.6,8.713a8.471,8.471,0,0,0-2.7,3.337H18.063a8.127,8.127,0,0,0-2.681-3.337A6.039,6.039,0,0,0,11.875,7.55a5.448,5.448,0,0,0-4.05,1.594A5.546,5.546,0,0,0,6.25,13.213q0,3.637,3.525,7.5T19,29.825Z"
                    transform="translate(-4 -5.3)"
                    className={`ease-linear duration-300 fill-white group-hover:fill-white ${
                      active === "/dashboard/favourites" ? "fill-white" : ""
                    }`}
                  />
                </svg>

                <p className="ml-2">FAVORITEN</p>
              </a>
            </Link>
            <Link href="/dashboard/search-orders">
              <a
                className={`w-full h-12 mt-2 flex items-center text-14 group py-2 px-4 rounded-md ease-linear duration-300 text-white bg-theme-gray-10 hover:bg-[#FBB900] hover:text-white hover:shadow-md ${
                  active === "/dashboard/search-orders"
                    ? "bg-[#FBB900] font-bold"
                    : ""
                }`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="19.5"
                  viewBox="0 0 30 19.5"
                >
                  <path
                    id="manage_search_FILL0_wght400_GRAD0_opsz48"
                    d="M4,15.75V13.5h7.5v2.25Zm0,7.875v-2.25h7.5v2.25ZM32.425,31.5l-6-6a7.12,7.12,0,0,1-2.1,1.125A7.3,7.3,0,0,1,22,27a7.49,7.49,0,0,1-7.5-7.5A7.49,7.49,0,0,1,22,12a7.49,7.49,0,0,1,7.5,7.5,7.3,7.3,0,0,1-.375,2.325A7.12,7.12,0,0,1,28,23.925l6,6ZM22,24.75a5.249,5.249,0,0,0,5.25-5.25A5.249,5.249,0,0,0,22,14.25a5.249,5.249,0,0,0-5.25,5.25A5.249,5.249,0,0,0,22,24.75ZM4,31.5V29.25H19V31.5Z"
                    transform="translate(-4 -12)"
                    className={`ease-linear duration-300 fill-white group-hover:fill-white ${
                      active === "/dashboard/search-orders" ? "fill-white" : ""
                    }`}
                  />
                </svg>

                <p className="ml-2">SUCHAUFTRÄGE</p>
              </a>
            </Link>
            <Link href="/dashboard/saved-searches">
              <a
                className={`w-full h-12 mt-2 flex items-center text-14 group py-2 px-4 rounded-md ease-linear duration-300 text-white bg-theme-gray-10 hover:bg-[#FBB900] hover:text-white hover:shadow-md ${
                  active === "/dashboard/saved-searches"
                    ? "bg-[#FBB900] font-bold"
                    : ""
                }`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  viewBox="0 0 30 30"
                >
                  <path
                    id="saved_search_FILL0_wght400_GRAD0_opsz48"
                    d="M34.167,35.95,23.208,24.992a9.182,9.182,0,0,1-2.917,1.688,10.312,10.312,0,0,1-3.542.6,10.375,10.375,0,0,1-7.625-3.125A10.277,10.277,0,0,1,6,16.617,10.277,10.277,0,0,1,9.125,9.075,10.326,10.326,0,0,1,16.708,5.95a10.208,10.208,0,0,1,7.521,3.125,10.312,10.312,0,0,1,3.1,7.542,10.393,10.393,0,0,1-.583,3.458A10.576,10.576,0,0,1,25,23.2L36,34.117ZM16.708,24.783a7.8,7.8,0,0,0,5.75-2.4,7.9,7.9,0,0,0,2.375-5.771,7.9,7.9,0,0,0-2.375-5.771,7.8,7.8,0,0,0-5.75-2.4,7.915,7.915,0,0,0-5.813,2.4,7.866,7.866,0,0,0-2.4,5.771,7.866,7.866,0,0,0,2.4,5.771A7.915,7.915,0,0,0,16.708,24.783Zm-3.083-3.708,1.208-3.625-3.042-2.333h3.625l1.25-3.625,1.25,3.625H21.5L18.458,17.45l1.208,3.625-3-2.292Z"
                    transform="translate(-6 -5.95)"
                    className={`ease-linear duration-300 fill-white group-hover:fill-white ${
                      active === "/dashboard/saved-searches" ? "fill-white" : ""
                    }`}
                  />
                </svg>

                <p className="ml-2">GESPEICHERTE SUCHEN</p>
              </a>
            </Link>
            <Link href="/dashboard/latest-advertisements">
              <a
                className={`w-full h-12 mt-2 flex items-center text-14 group py-2 px-4 rounded-md ease-linear duration-300 text-white bg-theme-gray-10 hover:bg-[#FBB900] hover:text-white hover:shadow-md ${
                  active === "/dashboard/latest-advertisements"
                    ? "bg-[#FBB900] font-bold"
                    : ""
                }`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="33"
                  viewBox="0 0 24 33"
                >
                  <path
                    id="Icon_material-autorenew"
                    data-name="Icon material-autorenew"
                    d="M18,9v4.5l6-6-6-6V6A11.979,11.979,0,0,0,7.86,24.39l2.19-2.19A8.806,8.806,0,0,1,9,18,9.007,9.007,0,0,1,18,9Zm10.14,2.61L25.95,13.8A8.985,8.985,0,0,1,18,27V22.5l-6,6,6,6V30A11.979,11.979,0,0,0,28.14,11.61Z"
                    transform="translate(-6 -1.5)"
                    className={`ease-linear duration-300 fill-white group-hover:fill-white ${
                      active === "/dashboard/latest-advertisements"
                        ? "fill-white"
                        : ""
                    }`}
                  />
                </svg>

                <p className="ml-2">NEUESTEN INSERATE</p>
              </a>
            </Link>
          </div>
          <div className="pl-6 pr-6 pb-6 pt-6">
            <Link href="/dashboard/my-subscriptions">
              <a
                className={`w-full h-12 mt-2 flex items-center mb-2 text-14 group py-2 px-4 rounded-md ease-linear duration-300 text-white bg-theme-gray-10 hover:bg-[#FBB900] hover:text-white hover:shadow-md ${
                  active === "/dashboard/my-subscriptions"
                    ? "bg-[#FBB900] font-bold"
                    : ""
                }`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="26.337"
                  viewBox="0 0 30 26.337"
                >
                  <path
                    id="store_FILL0_wght400_GRAD0_opsz48"
                    d="M7.611,10.469V8H34.03v2.469Zm.206,23.868V23.72H5.8V21.251l1.811-8.313H33.989L35.8,21.251V23.72H33.784V34.337H31.314V23.72H23.537V34.337Zm2.469-2.469H21.067V23.72H10.286ZM8.228,21.251h0Zm0,0H33.372L32.1,15.407H9.5Z"
                    transform="translate(-5.8 -8)"
                    className={`ease-linear duration-300 fill-white group-hover:fill-white ${
                      active === "/dashboard/my-subscriptions"
                        ? "fill-white"
                        : ""
                    }`}
                  />
                </svg>

                <p className="ml-2">MEINE ABOS</p>
              </a>
            </Link>
            <Link href="/dashboard/giga-power">
              <a
                className={`w-full h-12 flex items-center text-14 group py-2 px-4 rounded-md ease-linear duration-300 text-white bg-theme-gray-10 hover:bg-[#FBB900] hover:text-white hover:shadow-md ${
                  active === "/dashboard/giga-power"
                    ? "bg-[#FBB900] font-bold"
                    : ""
                }`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  viewBox="0 0 30 30"
                >
                  <path
                    id="charger_FILL0_wght400_GRAD0_opsz48"
                    d="M18.325,30.175l6.375-13.5H19.825v-9l-6.375,13.5h4.875ZM19,34a15.214,15.214,0,0,1-5.925-1.144,14.518,14.518,0,0,1-7.931-7.931A15.214,15.214,0,0,1,4,19a15.117,15.117,0,0,1,1.144-5.888A14.64,14.64,0,0,1,8.313,8.35,14.954,14.954,0,0,1,19,4,14.88,14.88,0,0,1,34,19a14.954,14.954,0,0,1-4.35,10.688,14.64,14.64,0,0,1-4.763,3.169A15.117,15.117,0,0,1,19,34Zm0-15Zm0,12.75A12.492,12.492,0,0,0,31.75,19,12.492,12.492,0,0,0,19,6.25,12.492,12.492,0,0,0,6.25,19,12.492,12.492,0,0,0,19,31.75Z"
                    transform="translate(-4 -4)"
                    className={`ease-linear duration-300 fill-white group-hover:fill-white ${
                      active === "/dashboard/giga-power" ? "fill-white" : ""
                    }`}
                  />
                </svg>

                <p className="ml-2">GIGA POWER</p>
              </a>
            </Link>
            <Link href="/dashboard/recharge-giga-coins">
              <a
                className={`w-full h-12 mt-2 flex items-center text-14 group py-2 px-4 rounded-md ease-linear duration-300 text-white bg-theme-gray-10 hover:bg-[#FBB900] hover:text-white hover:shadow-md ${
                  active === "/dashboard/recharge-giga-coins"
                    ? "bg-[#FBB900]"
                    : ""
                }`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="21.818"
                  viewBox="0 0 30 21.818"
                >
                  <path
                    id="toll_FILL0_wght400_GRAD0_opsz48"
                    d="M21.091,29.818A10.826,10.826,0,0,1,10.182,18.909,10.826,10.826,0,0,1,21.091,8,10.826,10.826,0,0,1,32,18.909,10.826,10.826,0,0,1,21.091,29.818Zm-10.432-.409A9.1,9.1,0,0,1,4.4,25.881,10.959,10.959,0,0,1,2,18.909a10.959,10.959,0,0,1,2.4-6.972,9.1,9.1,0,0,1,6.256-3.528v1.977a7.433,7.433,0,0,0-4.807,2.983,9.064,9.064,0,0,0-1.807,5.54,9.064,9.064,0,0,0,1.807,5.54,7.433,7.433,0,0,0,4.807,2.983Zm10.432-10.5Zm0,8.864a8.532,8.532,0,0,0,6.256-2.608,8.532,8.532,0,0,0,2.608-6.256,8.532,8.532,0,0,0-2.608-6.256,8.532,8.532,0,0,0-6.256-2.608,8.532,8.532,0,0,0-6.256,2.608,8.532,8.532,0,0,0-2.608,6.256,8.532,8.532,0,0,0,2.608,6.256A8.532,8.532,0,0,0,21.091,27.773Z"
                    transform="translate(-2 -8)"
                    className={`ease-linear duration-300 fill-white group-hover:fill-white ${
                      active === "/dashboard/recharge-giga-coins"
                        ? "fill-white"
                        : ""
                    }`}
                  />
                </svg>

                <p className="ml-2">GIGA COINS AUFLADEN</p>
              </a>
            </Link>
            <Link href="/dashboard/bills">
              <a
                className={`w-full h-12 mt-2 flex items-center text-14 group py-2 px-4 rounded-md ease-linear duration-300 text-white bg-theme-gray-10 hover:bg-[#FBB900] hover:text-white hover:shadow-md ${
                  active === "/dashboard/bills" ? "bg-[#FBB900] font-bold" : ""
                }`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="33.25"
                  viewBox="0 0 30 33.25"
                >
                  <path
                    id="receipt_FILL0_wght400_GRAD0_opsz48"
                    d="M6,37.3V4.05l2.5,2.5L11,4.05l2.5,2.5L16,4.05l2.5,2.5L21,4.05l2.5,2.5L26,4.05l2.5,2.5L31,4.05l2.5,2.5L36,4.05V37.3l-2.5-2.5L31,37.3l-2.5-2.5L26,37.3l-2.5-2.5L21,37.3l-2.5-2.5L16,37.3l-2.5-2.5L11,37.3,8.5,34.8Zm4.875-8.958H31.292v-2.5H10.875Zm0-6.417H31.292v-2.5H10.875Zm0-6.458H31.292v-2.5H10.875ZM8.5,33.092h25V8.258H8.5Zm0-24.833v0Z"
                    transform="translate(-6 -4.05)"
                    className={`ease-linear duration-300 fill-white group-hover:fill-white ${
                      active === "/dashboard/bills" ? "fill-white" : ""
                    }`}
                  />
                </svg>

                <p className="ml-2">RECHNUNGEN</p>
              </a>
            </Link>
          </div>
          <div className="p-6 bg-opacity-15 bg-theme-gray-10">
            <button
              className={`w-full h-12 mt-2 flex items-center text-14 group py-2 px-4 rounded-md ease-linear duration-300 text-white bg-theme-gray-10 hover:bg-[#FBB900] hover:text-white hover:shadow-md`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                viewBox="0 0 30 30"
              >
                <path
                  id="logout_FILL0_wght400_GRAD0_opsz48"
                  d="M16.625,19.75h14.5l-4.25-4.25,1.792-1.792L36,21.042l-7.25,7.25L26.958,26.5l4.25-4.25H16.625Zm4-13.75V8.5H8.5v25H20.625V36H8.5a2.4,2.4,0,0,1-1.75-.75A2.4,2.4,0,0,1,6,33.5V8.5a2.4,2.4,0,0,1,.75-1.75A2.4,2.4,0,0,1,8.5,6Z"
                  transform="translate(-6 -6)"
                  className={`ease-linear duration-300 fill-white group-hover:fill-white`}
                />
              </svg>

              <p className="ml-2">LOGOUT</p>
            </button>
          </div>
        </div>
        </div>
    </div>
  );
}
