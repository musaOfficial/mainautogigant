import Link from "next/link";
import { useState } from "react";
import classes from './Header.module.css';
import X from './../../public/images/x.svg';
import { useEffect } from "react";
import FavoriteIcon from './../../public/icons/favorite.svg';
import SearchIcon from './../../public/icons/search.svg';
import AccountIcon from './../../public/icons/account.svg';
import NotificationsIcon from './../../public/icons/notifications.svg';
import SettingsIcon from './../../public/icons/settingsicon.svg';


export default function Header() {

  const [width, setWidth] = useState(0)
  const [height, setHeight] = useState(0)

  const handleWindowResize = () => {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  }

  useEffect(() => {
    // component is mounted and window is available
    handleWindowResize();
    window.addEventListener('resize', handleWindowResize);
    // unsubscribe from the event on component unmount
    return () => window.removeEventListener('resize', handleWindowResize);
  }, []);

  
  const [collapse, setCollapse] = useState({
    dealerArea: false,
    cooperations: false,
    useFull: false,
    gigantWorld: false,
  });

  const onMenuClick = (target) => {
    switch (target) {
      case 'dealer':
        return setCollapse({ dealerArea: !collapse.dealerArea, cooperations: false, useFull: false, gigantWorld: false });
      case 'cooperation':
        return setCollapse({ dealerArea: false, cooperations: !collapse.cooperations, useFull: false, gigantWorld: false });
      case 'usefull':
        return setCollapse({ dealerArea: false, cooperations: false, useFull: !collapse.useFull, gigantWorld: false });
      case 'gigaworld':
        return setCollapse({ dealerArea: false, cooperations: false, useFull: false, gigantWorld: !collapse.gigantWorld });
    }
  }

  const [openTextarea, setOpenTextarea] = useState(false);

  return (
    <header className={`bg-black shadow-1 py-3 relative lg:px-6 ${classes.header} ${width < 950 && classes.searchmargin}`}>
      {openTextarea == true && width < 950 && <div className={classes.textareasearch}>
        <div className={classes.relative}>
          <textarea placeholder={"Fahrzeug suchen"} className={classes.textarea}></textarea>
          <img className={classes.searchicon} src="/images/icons/header-search.png" />
          <button className={classes.searchbutton} onClick={() => setOpenTextarea(false)}>Suchen</button>
          <X className={classes.searchx} onClick={() => setOpenTextarea(false)}/>
        </div>
      </div>}
      <div className="max-w-ag-container w-10/12 lg:w-full mx-auto flex justify-between items-end py-6 md:py-4 md:pb-2 md:items-start">
        <Link href="/">
          <img
            className={`w-60 md:w-32 cursor-pointer ${classes.logo}`}
            src="/images/icons/logo.png"
            alt="logo"
          />
        </Link>
        <div className={`flex items-center ${classes.margintop}`}>
          <div className={`flex md:ml-6 lg:mr-0 ${classes.threeicons}`}>
            <button className="mr-4">
              {width >= 950 && <div className="container">
                <div className={`row ${classes.searchhover}`}>
                  <input type={"text"} className="in" placeholder={"Suchen"} />
                  <div className="icon w-8 md:w-6 mr-4">
                    <i><SearchIcon className={` ${classes.search} text-theme-yellow fa fa-search searchicon`} /></i>
                    <i><SearchIcon className={` ${classes.search} text-theme-yellow fa-solid fa-xmark searchicon`} /></i>
                  </div>
                </div>
              </div>}
            {width < 950 && <SearchIcon className={classes.searchiconf} onClick={() => {
              setOpenTextarea(d => !d);
            }} />}
            </button>
            <button className="w-8 md:w-6 mr-4">
              <NotificationsIcon className={classes.headericon}/>
            </button>
            <button className="w-8 md:w-6 mr-4">
              <FavoriteIcon className={classes.headericon}/>
            </button>
          </div>
          <div className={`w-60 ${classes.widthauto} ${classes.headerbtn} relative group flex items-center justify-end md:flex-1 h-14 rounded-tl-20 rounded-tr-20 hover:bg-theme-gray-10 px-2 pb-2 pb-0 `}>
            <button className="inline-flex justify-end">
              <AccountIcon className={classes.headericon} />
            </button>
            <div className={`${classes.headerbtn} w-full sm:!w-40 md:pl-4 sm:rounded-tl-20 md:text-10 absolute z-50 uppercase invisible opacity-0 py-10 md:py-6 group-hover:visible group-hover:opacity-100 flex flex-col top-full overflow-hidden -mt-2 right-0 text-white rounded-bl-20 bg-theme-gray-10 ease-linear`}>
              <Link href="/">
                <a className={`px-4 ${classes.opacityhover} text-sm py-2 md:px-1 ease-in duration-300 hover:bg-theme-yellow hover:fill-white hover:text-white  fill-white inline-flex items-center border-b border-opacity-60 hover:border-opacity-0 border-white`}>
                  <svg className="mr-2" xmlns="http://www.w3.org/2000/svg" width="15.059" height="14.129" viewBox="0 0 12.059 11.129">
                    <g id="图层_x0020_1" transform="translate(-2.213 -2.428)">
                      <g id="_177771720" transform="translate(2.212 2.427)">
                        <path id="_177771768" d="M9.52,5.335h0V9.406a.291.291,0,0,1-.291.291H6.6a.291.291,0,0,1-.291-.291V7.193A.291.291,0,0,0,6.021,6.9h-1.6a.291.291,0,0,0-.291.291V9.406A.291.291,0,0,1,3.84,9.7H1.211A.291.291,0,0,1,.92,9.406V5.335h0L3.064,3.155,5,1.185a.291.291,0,0,1,.415,0l1.937,1.97Z" transform="translate(0.808 1.431)" />
                        <path id="_177772128" d="M7.123.917l3,3.053,2.444,2.485a.581.581,0,0,1-.415.989h-.015a.561.561,0,0,1-.415-.174L9.292,4.8,7.1,2.571a.581.581,0,0,0-.829,0L4.087,4.8,1.655,7.27a.224.224,0,0,1-.024.021A.574.574,0,1,1,.88,6.423L3.292,3.969l3-3.053a.581.581,0,0,1,.829,0Z" transform="translate(-0.677 -0.743)" />
                      </g>
                    </g>
                  </svg>
                  <p className="opacity-70">STARTSEITE</p>
                </a>
              </Link>
              <Link href="/login">
                <a className={`px-4 text-sm py-2 md:px-1 ease-in duration-100 hover:bg-theme-yellow fill-white inline-flex items-center`}>
                  <svg className="mr-2" xmlns="http://www.w3.org/2000/svg" width="15" height="14.643" viewBox="0 0 12 11.643">
                    <path id="login_FILL0_wght400_GRAD200_opsz40" d="M8.541,13.556,7.589,12.6l1.67-1.685H4V9.607H9.243L7.558,7.938,8.525,7,11.8,10.294ZM10.148,16.1V14.788h4.541V5.769H10.148V4.458h4.541A1.333,1.333,0,0,1,16,5.769v9.02A1.333,1.333,0,0,1,14.689,16.1Z" transform="translate(-4 -4.457)" />
                  </svg>
                  Login
                </a>
              </Link>
              <Link href="/registration/user">
                <a className="px-4 text-sm py-2 md:px-1 ease-in duration-100 hover:bg-theme-yellow  fill-white inline-flex items-center">
                  <svg className="mr-2" xmlns="http://www.w3.org/2000/svg" width="15" height="13.117" viewBox="0 0 12 10.117">
                    <path id="how_to_reg_FILL0_wght400_GRAD200_opsz40" d="M2.5,15.684V13.958a1.9,1.9,0,0,1,.264-.977,1.745,1.745,0,0,1,.763-.692,9.965,9.965,0,0,1,2.026-.721,8.25,8.25,0,0,1,1.8-.207,7.931,7.931,0,0,1,.877.05,8.484,8.484,0,0,1,.949.164L8.15,12.6l-.392-.028q-.192-.014-.421-.014a6.956,6.956,0,0,0-1.47.157,9.627,9.627,0,0,0-1.812.642.517.517,0,0,0-.278.25.8.8,0,0,0-.078.349v.528H7.979l1.27,1.2Zm8.133.057L8.45,13.558l.842-.842,1.341,1.341,3.011-3.011.856.842Zm-3.3-5.322a2.306,2.306,0,0,1-1.712-.678,2.343,2.343,0,0,1-.671-1.719,2.318,2.318,0,0,1,2.383-2.4A2.354,2.354,0,0,1,9.064,6.3a2.317,2.317,0,0,1,.685,1.719,2.317,2.317,0,0,1-.685,1.719A2.354,2.354,0,0,1,7.337,10.419Zm.642,4.067ZM7.351,9.221a1.211,1.211,0,0,0,.856-2.055,1.179,1.179,0,0,0-.87-.342,1.138,1.138,0,0,0-.849.342,1.261,1.261,0,0,0,0,1.712A1.155,1.155,0,0,0,7.351,9.221Zm0-1.2Z" transform="translate(-2.5 -5.625)" />
                  </svg>
                  Registrieren
                </a>
              </Link>
              <Link href="/dashboard">
                <a className="px-4 text-sm py-2 md:px-1 ease-in duration-100 hover:bg-theme-yellow fill-white inline-flex items-center">
                  <svg className="mr-2" xmlns="http://www.w3.org/2000/svg" width="15" height="9.604" viewBox="0 0 12 6.604">
                    <path id="timeline_FILL0_wght400_GRAD200_opsz40" d="M2.321,16.31A.981.981,0,0,1,1.593,16a1.014,1.014,0,0,1-.3-.735,1.027,1.027,0,0,1,1.029-1.029h.134a1.152,1.152,0,0,1,.16.013l2.592-2.592a1.06,1.06,0,0,1-.033-.147,1.094,1.094,0,0,1-.007-.133.981.981,0,0,1,.307-.728,1.014,1.014,0,0,1,.735-.3.981.981,0,0,1,.728.308,1.014,1.014,0,0,1,.3.735q0,.027-.04.281l1.43,1.417a.983.983,0,0,1,.154-.033,1.139,1.139,0,0,1,.127-.007h.14a.585.585,0,0,1,.154.027l2.045-2.031a.438.438,0,0,1-.02-.16,1.47,1.47,0,0,0,.007-.147A1.035,1.035,0,0,1,13,10.009a1.019,1.019,0,0,1,.294.742,1.027,1.027,0,0,1-1.029,1.029h-.134a1.152,1.152,0,0,1-.16-.013L9.924,13.8a.6.6,0,0,1,.027.16V14.1a1.038,1.038,0,0,1-1.042,1.029.981.981,0,0,1-.728-.307,1,1,0,0,1-.3-.722q0-.08.007-.147a.691.691,0,0,1,.033-.147l-1.43-1.43a.691.691,0,0,1-.147.033,1.337,1.337,0,0,1-.134.007q-.027,0-.294-.04L3.337,14.973a1.18,1.18,0,0,1,.013.16v.147a1,1,0,0,1-.3.722A.981.981,0,0,1,2.321,16.31Z" transform="translate(-1.293 -9.707)" />
                  </svg>
                  Dashboard
                </a>
              </Link>
              <Link href="/dealer-list">
                <a className="px-4 text-sm py-2 md:px-1 ease-in duration-100 hover:bg-theme-yellow fill-white inline-flex items-center">
                  <svg className="mr-2" xmlns="http://www.w3.org/2000/svg" width="13" height="12" viewBox="0 0 10 9">
                    <path id="Subtraction_2" data-name="Subtraction 2" d="M10,9H0V0H10V9ZM1,7V8H9V7ZM1,5V6H9V5ZM1,3V4H9V3ZM1,1V2H9V1Z" />
                  </svg>

                  HANDLERLISTE
                </a>
              </Link>
              <Link href="/dashboard/create-ad">
                <a className="px-4 text-sm py-2 md:px-1 ease-in duration-100 hover:bg-theme-yellow fill-white inline-flex items-center">
                  <svg className="mr-2" xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 10 10">
                    <g id="Group_1611" data-name="Group 1611" transform="translate(19765 20127)">
                      <path id="playlist_add_circle_FILL0_wght400_GRAD200_opsz40" d="M7.458,12.458a5.031,5.031,0,0,1-1.966-.386A4.832,4.832,0,0,1,2.844,9.424a5.2,5.2,0,0,1,0-3.931A4.862,4.862,0,0,1,3.907,3.9,5.02,5.02,0,0,1,7.458,2.458a5.028,5.028,0,0,1,1.966.386,4.83,4.83,0,0,1,2.648,2.648,5.031,5.031,0,0,1,.386,1.966,4.989,4.989,0,0,1-1.443,3.551,4.862,4.862,0,0,1-1.591,1.063A5.031,5.031,0,0,1,7.458,12.458Z" transform="translate(-19767.457 -20129.457)" />
                      <rect id="Rectangle_3862" data-name="Rectangle 3862" width="2" height="8" transform="translate(-19761 -20126)" fill="#6c757d" />
                      <rect id="Rectangle_3863" data-name="Rectangle 3863" width="2" height="8" transform="translate(-19756 -20123) rotate(90)" fill="#6c757d" />
                    </g>
                  </svg>
                  Inserat Aufgeben
                </a>
              </Link>
              <Link href="/dashboard/my-ads">
                <a className="px-4 py-2 md:px-1 text-sm ease-in duration-100 hover:bg-theme-yellow fill-white inline-flex items-center">
                  <svg className="mr-2" xmlns="http://www.w3.org/2000/svg" width="13" height="10" viewBox="0 0 10 7">
                    <g id="Group_1616" data-name="Group 1616" transform="translate(19536 20105)">
                      <rect id="Rectangle_3865" data-name="Rectangle 3865" width="8" height="1" transform="translate(-19534 -20105)" />
                      <rect id="Rectangle_3866" data-name="Rectangle 3866" width="8" height="1" transform="translate(-19534 -20103)" />
                      <rect id="Rectangle_3867" data-name="Rectangle 3867" width="8" height="1" transform="translate(-19534 -20101)" />
                      <circle id="Ellipse_119" data-name="Ellipse 119" cx="0.5" cy="0.5" r="0.5" transform="translate(-19536 -20105)" />
                      <circle id="Ellipse_120" data-name="Ellipse 120" cx="0.5" cy="0.5" r="0.5" transform="translate(-19536 -20103)" />
                      <circle id="Ellipse_121" data-name="Ellipse 121" cx="0.5" cy="0.5" r="0.5" transform="translate(-19536 -20101)" />
                      <rect id="Rectangle_3868" data-name="Rectangle 3868" width="8" height="1" transform="translate(-19534 -20099)" />
                      <circle id="Ellipse_122" data-name="Ellipse 122" cx="0.5" cy="0.5" r="0.5" transform="translate(-19536 -20099)" />
                    </g>
                  </svg>
                  MEINE ANZEIGEN
                </a>
              </Link>
              <Link href="/dashboard/settings">
                <a className={`${classes.settingscontainer} px-4 text-sm py-2 md:px-1 ease-in duration-100 hover:bg-theme-yellow fill-white inline-flex items-center`}>
                  <SettingsIcon className={classes.settingsicon} />
                  Einstellungen
                </a>
              </Link>
              <button onClick={() => onMenuClick('dealer')} className="px-4 text-sm py-2 md:px-1 ease-in duration-100 hover:bg-theme-yellow fill-white inline-flex items-center border-y border-opacity-60 hover:border-opacity-0 border-white">
                {collapse.dealerArea ? <svg className="mr-2" xmlns="http://www.w3.org/2000/svg" width="8" height="2" viewBox="0 0 8 2">
                  <g id="Group_1605" data-name="Group 1605" transform="translate(19764 20123)">
                    <rect id="Rectangle_3863" data-name="Rectangle 3863" width="2" height="8" transform="translate(-19756 -20123) rotate(90)" />
                  </g>
                </svg> : <svg className="mr-2" xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 8 8">
                  <g id="Group_1625" data-name="Group 1625" transform="translate(19764 20126)">
                    <rect id="Rectangle_3862" data-name="Rectangle 3862" width="2" height="8" transform="translate(-19761 -20126)" />
                    <rect id="Rectangle_3863" data-name="Rectangle 3863" width="2" height="8" transform="translate(-19756 -20123) rotate(90)" />
                  </g>
                </svg>}

                HÄNDLERBEREICH
              </button>
              {collapse.dealerArea && <>
                <Link href="/dashboard">
                  <a className="px-4 py-2 text-sm md:px-1 ease-in duration-100 hover:bg-theme-yellow fill-white inline-flex items-center">
                    <svg className="mr-2 opacity-0" xmlns="http://www.w3.org/2000/svg" width="10" height="9.701" viewBox="0 0 10 9.701">
                      <path id="logout_FILL0_wght400_GRAD200_opsz40" d="M7.485,8.749h4.369L10.463,7.358l.793-.78L14,9.322l-2.718,2.718-.806-.793,1.4-1.4h-4.4ZM8.876,4.458V5.55H5.092v7.516H8.876v1.092H5.092A1.111,1.111,0,0,1,4,13.067V5.55A1.111,1.111,0,0,1,5.092,4.458Z" transform="translate(-4 -4.457)" />
                    </svg>

                    ANMELDEN
                  </a>
                </Link>
                <Link href="/dashboard">
                  <a className="px-4 text-sm py-2 md:px-1 ease-in duration-100 hover:bg-theme-yellow fill-white inline-flex items-center">
                    <svg className="mr-2 opacity-0" xmlns="http://www.w3.org/2000/svg" width="10" height="9.701" viewBox="0 0 10 9.701">
                      <path id="logout_FILL0_wght400_GRAD200_opsz40" d="M7.485,8.749h4.369L10.463,7.358l.793-.78L14,9.322l-2.718,2.718-.806-.793,1.4-1.4h-4.4ZM8.876,4.458V5.55H5.092v7.516H8.876v1.092H5.092A1.111,1.111,0,0,1,4,13.067V5.55A1.111,1.111,0,0,1,5.092,4.458Z" transform="translate(-4 -4.457)" />
                    </svg>

                    REGISTRIEREN
                  </a>
                </Link>
                <Link href="/dashboard">
                  <a className="px-4 py-2 text-sm md:px-1 ease-in duration-100 hover:bg-theme-yellow fill-white inline-flex items-center">
                    <svg className="mr-2 opacity-0" xmlns="http://www.w3.org/2000/svg" width="10" height="9.701" viewBox="0 0 10 9.701">
                      <path id="logout_FILL0_wght400_GRAD200_opsz40" d="M7.485,8.749h4.369L10.463,7.358l.793-.78L14,9.322l-2.718,2.718-.806-.793,1.4-1.4h-4.4ZM8.876,4.458V5.55H5.092v7.516H8.876v1.092H5.092A1.111,1.111,0,0,1,4,13.067V5.55A1.111,1.111,0,0,1,5.092,4.458Z" transform="translate(-4 -4.457)" />
                    </svg>

                    VORTEILE
                  </a>
                </Link>
                <Link href="/dashboard">
                  <a className="px-4 text-sm py-2 md:px-1 ease-in duration-100 hover:bg-theme-yellow fill-white inline-flex items-center">
                    <svg className="mr-2 opacity-0" xmlns="http://www.w3.org/2000/svg" width="10" height="9.701" viewBox="0 0 10 9.701">
                      <path id="logout_FILL0_wght400_GRAD200_opsz40" d="M7.485,8.749h4.369L10.463,7.358l.793-.78L14,9.322l-2.718,2.718-.806-.793,1.4-1.4h-4.4ZM8.876,4.458V5.55H5.092v7.516H8.876v1.092H5.092A1.111,1.111,0,0,1,4,13.067V5.55A1.111,1.111,0,0,1,5.092,4.458Z" transform="translate(-4 -4.457)" />
                    </svg>

                    PREISE
                  </a>
                </Link>
                <Link href="/dashboard">
                  <a className="px-4 text-sm py-2 md:px-1 ease-in duration-100 hover:bg-theme-yellow fill-white inline-flex items-center">
                    <svg className="mr-2 opacity-0" xmlns="http://www.w3.org/2000/svg" width="10" height="9.701" viewBox="0 0 10 9.701">
                      <path id="logout_FILL0_wght400_GRAD200_opsz40" d="M7.485,8.749h4.369L10.463,7.358l.793-.78L14,9.322l-2.718,2.718-.806-.793,1.4-1.4h-4.4ZM8.876,4.458V5.55H5.092v7.516H8.876v1.092H5.092A1.111,1.111,0,0,1,4,13.067V5.55A1.111,1.111,0,0,1,5.092,4.458Z" transform="translate(-4 -4.457)" />
                    </svg>

                    HILFE
                  </a>
                </Link>
                <Link href="/dashboard">
                  <a className="px-4 text-sm py-2 md:px-1 ease-in duration-100 hover:bg-theme-yellow fill-white inline-flex items-center">
                    <svg className="mr-2 opacity-0" xmlns="http://www.w3.org/2000/svg" width="10" height="9.701" viewBox="0 0 10 9.701">
                      <path id="logout_FILL0_wght400_GRAD200_opsz40" d="M7.485,8.749h4.369L10.463,7.358l.793-.78L14,9.322l-2.718,2.718-.806-.793,1.4-1.4h-4.4ZM8.876,4.458V5.55H5.092v7.516H8.876v1.092H5.092A1.111,1.111,0,0,1,4,13.067V5.55A1.111,1.111,0,0,1,5.092,4.458Z" transform="translate(-4 -4.457)" />
                    </svg>

                    WERBUNG
                  </a>
                </Link>
              </>}
              <button onClick={() => onMenuClick('cooperation')} className={`${classes.opacityhover} px-4 text-sm py-2 md:px-1 ease-in duration-100 hover:bg-theme-yellow fill-white inline-flex items-center`}>
                {collapse.cooperations ? <svg className="mr-2 opacity-70" xmlns="http://www.w3.org/2000/svg" width="8" height="2" viewBox="0 0 8 2">
                  <g id="Group_1605" data-name="Group 1605" transform="translate(19764 20123)">
                    <rect id="Rectangle_3863" data-name="Rectangle 3863" width="2" height="8" transform="translate(-19756 -20123) rotate(90)" />
                  </g>
                </svg> : <svg className="mr-2 opacity-70" xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 8 8">
                  <g id="Group_1625" data-name="Group 1625" transform="translate(19764 20126)">
                    <rect id="Rectangle_3862" data-name="Rectangle 3862" width="2" height="8" transform="translate(-19761 -20126)" />
                    <rect id="Rectangle_3863" data-name="Rectangle 3863" width="2" height="8" transform="translate(-19756 -20123) rotate(90)" />
                  </g>
                </svg>}
                <p className="opacity-70">KOOPERATIONEN</p>
              </button>
              {collapse.cooperations && <>
                <Link href="/dashboard">
                  <a className={`${classes.opacityhover} px-4 text-sm py-2 md:px-1 ease-in duration-100 hover:bg-theme-yellow fill-white inline-flex items-center`}>
                    <svg className="mr-2 opacity-0" xmlns="http://www.w3.org/2000/svg" width="10" height="9.701" viewBox="0 0 10 9.701">
                      <path id="logout_FILL0_wght400_GRAD200_opsz40" d="M7.485,8.749h4.369L10.463,7.358l.793-.78L14,9.322l-2.718,2.718-.806-.793,1.4-1.4h-4.4ZM8.876,4.458V5.55H5.092v7.516H8.876v1.092H5.092A1.111,1.111,0,0,1,4,13.067V5.55A1.111,1.111,0,0,1,5.092,4.458Z" transform="translate(-4 -4.457)" />
                    </svg>
                    <p className="opacity-70">FAHRZEUG HÄNDLER</p>
                  </a>
                </Link>
                <Link href="/dashboard">
                  <a className={`${classes.opacityhover} px-4 text-sm py-2 md:px-1 ease-in duration-100 hover:bg-theme-yellow  fill-white inline-flex items-center`}>
                    <svg className="mr-2 opacity-0" xmlns="http://www.w3.org/2000/svg" width="10" height="9.701" viewBox="0 0 10 9.701">
                      <path id="logout_FILL0_wght400_GRAD200_opsz40" d="M7.485,8.749h4.369L10.463,7.358l.793-.78L14,9.322l-2.718,2.718-.806-.793,1.4-1.4h-4.4ZM8.876,4.458V5.55H5.092v7.516H8.876v1.092H5.092A1.111,1.111,0,0,1,4,13.067V5.55A1.111,1.111,0,0,1,5.092,4.458Z" transform="translate(-4 -4.457)" />
                    </svg>
                    <p className="opacity-70">KREDITVERMITTLER</p>
                  </a>
                </Link>
                <Link href="/dashboard">
                  <a className={`${classes.opacityhover} px-4 text-sm py-2 md:px-1 ease-in duration-100 hover:bg-theme-yellow fill-white inline-flex items-center`}>
                    <svg className="mr-2 opacity-0" xmlns="http://www.w3.org/2000/svg" width="10" height="9.701" viewBox="0 0 10 9.701">
                      <path id="logout_FILL0_wght400_GRAD200_opsz40" d="M7.485,8.749h4.369L10.463,7.358l.793-.78L14,9.322l-2.718,2.718-.806-.793,1.4-1.4h-4.4ZM8.876,4.458V5.55H5.092v7.516H8.876v1.092H5.092A1.111,1.111,0,0,1,4,13.067V5.55A1.111,1.111,0,0,1,5.092,4.458Z" transform="translate(-4 -4.457)" />
                    </svg>
                    <p className="opacity-70">VERSICHERUNGSMAKLER</p>


                  </a>
                </Link>
                <Link href="/dashboard">
                  <a className={`${classes.opacityhover} px-4 text-sm py-2 md:px-1 ease-in duration-100 hover:bg-theme-yellow fill-white inline-flex items-center`}>
                    <svg className="mr-2 opacity-0" xmlns="http://www.w3.org/2000/svg" width="10" height="9.701" viewBox="0 0 10 9.701">
                      <path id="logout_FILL0_wght400_GRAD200_opsz40" d="M7.485,8.749h4.369L10.463,7.358l.793-.78L14,9.322l-2.718,2.718-.806-.793,1.4-1.4h-4.4ZM8.876,4.458V5.55H5.092v7.516H8.876v1.092H5.092A1.111,1.111,0,0,1,4,13.067V5.55A1.111,1.111,0,0,1,5.092,4.458Z" transform="translate(-4 -4.457)" />
                    </svg>
                    <p className="opacity-70">WERKSTÄTTEN</p>


                  </a>
                </Link>
                <Link href="/dashboard">
                  <a className={`${classes.opacityhover} px-4 text-sm py-2 md:px-1 ease-in duration-100 hover:bg-theme-yellow fill-white inline-flex items-center`}>
                    <svg className="mr-2 opacity-0" xmlns="http://www.w3.org/2000/svg" width="10" height="9.701" viewBox="0 0 10 9.701">
                      <path id="logout_FILL0_wght400_GRAD200_opsz40" d="M7.485,8.749h4.369L10.463,7.358l.793-.78L14,9.322l-2.718,2.718-.806-.793,1.4-1.4h-4.4ZM8.876,4.458V5.55H5.092v7.516H8.876v1.092H5.092A1.111,1.111,0,0,1,4,13.067V5.55A1.111,1.111,0,0,1,5.092,4.458Z" transform="translate(-4 -4.457)" />
                    </svg>
                    <p className="opacity-70">AUTOAUFBEREITUNG</p>


                  </a>
                </Link>
                <Link href="/dashboard">
                  <a className={`${classes.opacityhover} px-4 text-sm py-2 md:px-1 ease-in duration-100 hover:bg-theme-yellow fill-white inline-flex items-center`}>
                    <svg className="mr-2 opacity-0" xmlns="http://www.w3.org/2000/svg" width="10" height="9.701" viewBox="0 0 10 9.701">
                      <path id="logout_FILL0_wght400_GRAD200_opsz40" d="M7.485,8.749h4.369L10.463,7.358l.793-.78L14,9.322l-2.718,2.718-.806-.793,1.4-1.4h-4.4ZM8.876,4.458V5.55H5.092v7.516H8.876v1.092H5.092A1.111,1.111,0,0,1,4,13.067V5.55A1.111,1.111,0,0,1,5.092,4.458Z" transform="translate(-4 -4.457)" />
                    </svg>
                    <p className="opacity-70">FAHRSCHULEN</p>


                  </a>
                </Link>
              </>}
              <button onClick={() => onMenuClick('usefull')} className={`${classes.opacityhover} px-4 text-sm py-2 md:px-1 ease-in duration-100 hover:bg-theme-yellow fill-white inline-flex items-center`}>
                {collapse.useFull ? <svg className="mr-2 opacity-70" xmlns="http://www.w3.org/2000/svg" width="8" height="2" viewBox="0 0 8 2">
                  <g id="Group_1605" data-name="Group 1605" transform="translate(19764 20123)">
                    <rect id="Rectangle_3863" data-name="Rectangle 3863" width="2" height="8" transform="translate(-19756 -20123) rotate(90)" />
                  </g>
                </svg> : <svg className="mr-2 opacity-70" xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 8 8">
                  <g id="Group_1625" data-name="Group 1625" transform="translate(19764 20126)">
                    <rect id="Rectangle_3862" data-name="Rectangle 3862" width="2" height="8" transform="translate(-19761 -20126)" />
                    <rect id="Rectangle_3863" data-name="Rectangle 3863" width="2" height="8" transform="translate(-19756 -20123) rotate(90)" />
                  </g>
                </svg>}
                <p className="opacity-70">NÜTZLICHES</p>
              </button>
              {collapse.useFull && <>
                <Link href="/dashboard">
                  <a className={`${classes.opacityhover} px-4 text-sm py-2 md:px-1 ease-in duration-100 hover:bg-theme-yellow fill-white inline-flex items-center`}>
                    <svg className="mr-2 opacity-0" xmlns="http://www.w3.org/2000/svg" width="10" height="9.701" viewBox="0 0 10 9.701">
                      <path id="logout_FILL0_wght400_GRAD200_opsz40" d="M7.485,8.749h4.369L10.463,7.358l.793-.78L14,9.322l-2.718,2.718-.806-.793,1.4-1.4h-4.4ZM8.876,4.458V5.55H5.092v7.516H8.876v1.092H5.092A1.111,1.111,0,0,1,4,13.067V5.55A1.111,1.111,0,0,1,5.092,4.458Z" transform="translate(-4 -4.457)" />
                    </svg>
                    <p className="opacity-70">NOVA RECHNER</p>
                  </a>
                </Link>
                <Link href="/dashboard">
                  <a className={`${classes.opacityhover} px-4 text-sm py-2 md:px-1 ease-in duration-100 hover:bg-theme-yellow  fill-white inline-flex items-center`}>
                    <svg className="mr-2 opacity-0" xmlns="http://www.w3.org/2000/svg" width="10" height="9.701" viewBox="0 0 10 9.701">
                      <path id="logout_FILL0_wght400_GRAD200_opsz40" d="M7.485,8.749h4.369L10.463,7.358l.793-.78L14,9.322l-2.718,2.718-.806-.793,1.4-1.4h-4.4ZM8.876,4.458V5.55H5.092v7.516H8.876v1.092H5.092A1.111,1.111,0,0,1,4,13.067V5.55A1.111,1.111,0,0,1,5.092,4.458Z" transform="translate(-4 -4.457)" />
                    </svg>
                    <p className="opacity-70">DIGITALE VIGNETTE</p>
                  </a>
                </Link>
                <Link href="/dashboard">
                  <a className={`${classes.opacityhover} px-4 text-sm py-2 md:px-1 ease-in duration-100 hover:bg-theme-yellow fill-white inline-flex items-center`}>
                    <svg className="mr-2 opacity-0" xmlns="http://www.w3.org/2000/svg" width="10" height="9.701" viewBox="0 0 10 9.701">
                      <path id="logout_FILL0_wght400_GRAD200_opsz40" d="M7.485,8.749h4.369L10.463,7.358l.793-.78L14,9.322l-2.718,2.718-.806-.793,1.4-1.4h-4.4ZM8.876,4.458V5.55H5.092v7.516H8.876v1.092H5.092A1.111,1.111,0,0,1,4,13.067V5.55A1.111,1.111,0,0,1,5.092,4.458Z" transform="translate(-4 -4.457)" />
                    </svg>
                    <p className="opacity-70">ZULASSUNGSSTELLEN</p>
                  </a>
                </Link>
                <Link href="/dashboard">
                  <a className={`${classes.opacityhover} px-4 text-sm py-2 md:px-1 ease-in duration-100 hover:bg-theme-yellow hover:text-white fill-white inline-flex items-center`}>
                    <svg className="mr-2 opacity-0" xmlns="http://www.w3.org/2000/svg" width="10" height="9.701" viewBox="0 0 10 9.701">
                      <path id="logout_FILL0_wght400_GRAD200_opsz40" d="M7.485,8.749h4.369L10.463,7.358l.793-.78L14,9.322l-2.718,2.718-.806-.793,1.4-1.4h-4.4ZM8.876,4.458V5.55H5.092v7.516H8.876v1.092H5.092A1.111,1.111,0,0,1,4,13.067V5.55A1.111,1.111,0,0,1,5.092,4.458Z" transform="translate(-4 -4.457)" />
                    </svg>
                    <p className="opacity-70">KFZ VORSCHRIFTEN</p>
                  </a>
                </Link>
                <Link href="/dashboard">
                  <a className={`${classes.opacityhover} px-4 text-sm py-2 md:px-1 ease-in duration-100 hover:bg-theme-yellow hover:text-white fill-white inline-flex items-center`}>
                    <svg className="mr-2 opacity-0" xmlns="http://www.w3.org/2000/svg" width="10" height="9.701" viewBox="0 0 10 9.701">
                      <path id="logout_FILL0_wght400_GRAD200_opsz40" d="M7.485,8.749h4.369L10.463,7.358l.793-.78L14,9.322l-2.718,2.718-.806-.793,1.4-1.4h-4.4ZM8.876,4.458V5.55H5.092v7.516H8.876v1.092H5.092A1.111,1.111,0,0,1,4,13.067V5.55A1.111,1.111,0,0,1,5.092,4.458Z" transform="translate(-4 -4.457)" />
                    </svg>
                    <p className="opacity-70 hover:text-white">KFZ KAUFVERTRAG</p>
                  </a>
                </Link>
                <Link href="/dashboard">
                  <a className={`${classes.opacityhover} px-4 text-sm py-2 md:px-1 ease-in duration-100 hover:bg-theme-yellow hover:text-white fill-white inline-flex items-center`}>
                    <svg className="mr-2 opacity-0" xmlns="http://www.w3.org/2000/svg" width="10" height="9.701" viewBox="0 0 10 9.701">
                      <path id="logout_FILL0_wght400_GRAD200_opsz40" d="M7.485,8.749h4.369L10.463,7.358l.793-.78L14,9.322l-2.718,2.718-.806-.793,1.4-1.4h-4.4ZM8.876,4.458V5.55H5.092v7.516H8.876v1.092H5.092A1.111,1.111,0,0,1,4,13.067V5.55A1.111,1.111,0,0,1,5.092,4.458Z" transform="translate(-4 -4.457)" />
                    </svg>
                    <p className="opacity-70">EVENTS</p>
                  </a>
                </Link>
              </>}
              <button onClick={() => onMenuClick('gigaworld')} className={`${classes.opacityhover} px-4 text-sm py-2 md:px-1 ease-in duration-100 hover:bg-theme-yellow hover:text-white fill-white inline-flex items-center`}>
                {collapse.gigantWorld ? <svg className="mr-2 opacity-70" xmlns="http://www.w3.org/2000/svg" width="8" height="2" viewBox="0 0 8 2">
                  <g id="Group_1605" data-name="Group 1605" transform="translate(19764 20123)">
                    <rect id="Rectangle_3863" data-name="Rectangle 3863" width="2" height="8" transform="translate(-19756 -20123) rotate(90)" />
                  </g>
                </svg> : <svg className="mr-2 opacity-70" xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 8 8">
                  <g id="Group_1625" data-name="Group 1625" transform="translate(19764 20126)">
                    <rect id="Rectangle_3862" data-name="Rectangle 3862" width="2" height="8" transform="translate(-19761 -20126)" />
                    <rect id="Rectangle_3863" data-name="Rectangle 3863" width="2" height="8" transform="translate(-19756 -20123) rotate(90)" />
                  </g>
                </svg>}
                <p className="opacity-70">GIGANT WORLD</p>
              </button>
              {collapse.gigantWorld && <>
                <Link href="/dashboard">
                  <a className={`${classes.opacityhover} px-4 text-sm py-2 md:px-1 ease-in duration-100 hover:bg-theme-yellow hover:text-white fill-white inline-flex items-center`}>
                    <svg className="mr-2 opacity-0" xmlns="http://www.w3.org/2000/svg" width="10" height="9.701" viewBox="0 0 10 9.701">
                      <path id="logout_FILL0_wght400_GRAD200_opsz40" d="M7.485,8.749h4.369L10.463,7.358l.793-.78L14,9.322l-2.718,2.718-.806-.793,1.4-1.4h-4.4ZM8.876,4.458V5.55H5.092v7.516H8.876v1.092H5.092A1.111,1.111,0,0,1,4,13.067V5.55A1.111,1.111,0,0,1,5.092,4.458Z" transform="translate(-4 -4.457)" />
                    </svg>
                    <p className="opacity-70">E GIGANT.</p>
                  </a>
                </Link>
                <Link href="/dashboard">
                  <a className={`${classes.opacityhover} px-4 text-sm py-2 md:px-1 ease-in duration-100 hover:bg-theme-yellow hover:text-white fill-white inline-flex items-center`}>
                    <svg className="mr-2 opacity-0" xmlns="http://www.w3.org/2000/svg" width="10" height="9.701" viewBox="0 0 10 9.701">
                      <path id="logout_FILL0_wght400_GRAD200_opsz40" d="M7.485,8.749h4.369L10.463,7.358l.793-.78L14,9.322l-2.718,2.718-.806-.793,1.4-1.4h-4.4ZM8.876,4.458V5.55H5.092v7.516H8.876v1.092H5.092A1.111,1.111,0,0,1,4,13.067V5.55A1.111,1.111,0,0,1,5.092,4.458Z" transform="translate(-4 -4.457)" />
                    </svg>
                    <p className="opacity-70">IMMO GIGANT.</p>
                  </a>
                </Link>
                <Link href="/dashboard">
                  <a className={`${classes.opacityhover} px-4 text-sm py-2 md:px-1 ease-in duration-100 hover:bg-theme-yellow hover:text-white fill-white inline-flex items-center`}>
                    <svg className="mr-2 opacity-0" xmlns="http://www.w3.org/2000/svg" width="10" height="9.701" viewBox="0 0 10 9.701">
                      <path id="logout_FILL0_wght400_GRAD200_opsz40" d="M7.485,8.749h4.369L10.463,7.358l.793-.78L14,9.322l-2.718,2.718-.806-.793,1.4-1.4h-4.4ZM8.876,4.458V5.55H5.092v7.516H8.876v1.092H5.092A1.111,1.111,0,0,1,4,13.067V5.55A1.111,1.111,0,0,1,5.092,4.458Z" transform="translate(-4 -4.457)" />
                    </svg>
                    <p className="opacity-70">GASTRO GIGANT.</p>
                  </a>
                </Link>
                <Link href="/dashboard">
                  <a className={`${classes.opacityhover} px-4 text-sm py-2 md:px-1 ease-in duration-100 hover:bg-theme-yellow hover:text-white  fill-white inline-flex items-center`}>
                    <svg className="mr-2 opacity-0" xmlns="http://www.w3.org/2000/svg" width="10" height="9.701" viewBox="0 0 10 9.701">
                      <path id="logout_FILL0_wght400_GRAD200_opsz40" d="M7.485,8.749h4.369L10.463,7.358l.793-.78L14,9.322l-2.718,2.718-.806-.793,1.4-1.4h-4.4ZM8.876,4.458V5.55H5.092v7.516H8.876v1.092H5.092A1.111,1.111,0,0,1,4,13.067V5.55A1.111,1.111,0,0,1,5.092,4.458Z" transform="translate(-4 -4.457)" />
                    </svg>
                    <p className="opacity-70">HOSTING GIGANT.</p>
                  </a>
                </Link>
                <Link href="/dashboard">
                  <a className={`${classes.opacityhover} px-4 text-sm py-2 md:px-1 ease-in duration-300 hover:bg-theme-yellow hover:text-white fill-white inline-flex items-center`}>
                    <svg className="mr-2 opacity-0" xmlns="http://www.w3.org/2000/svg" width="10" height="9.701" viewBox="0 0 10 9.701">
                      <path id="logout_FILL0_wght400_GRAD200_opsz40" d="M7.485,8.749h4.369L10.463,7.358l.793-.78L14,9.322l-2.718,2.718-.806-.793,1.4-1.4h-4.4ZM8.876,4.458V5.55H5.092v7.516H8.876v1.092H5.092A1.111,1.111,0,0,1,4,13.067V5.55A1.111,1.111,0,0,1,5.092,4.458Z" transform="translate(-4 -4.457)" />
                    </svg>
                    <p className="opacity-70">GIGANT SHOP.</p>
                  </a>
                </Link>
              </>}
              <Link href="/logout-success">
                <a className="px-4 text-sm py-2 md:px-1 ease-in duration-100 hover:bg-theme-yellow hover:text-white fill-white inline-flex items-center border-t border-opacity-60 hover:border-opacity-0 border-white">
                  <svg className="mr-2" xmlns="http://www.w3.org/2000/svg" width="10" height="9.701" viewBox="0 0 10 9.701">
                    <path id="logout_FILL0_wght400_GRAD200_opsz40" d="M7.485,8.749h4.369L10.463,7.358l.793-.78L14,9.322l-2.718,2.718-.806-.793,1.4-1.4h-4.4ZM8.876,4.458V5.55H5.092v7.516H8.876v1.092H5.092A1.111,1.111,0,0,1,4,13.067V5.55A1.111,1.111,0,0,1,5.092,4.458Z" transform="translate(-4 -4.457)" />
                  </svg>

                  logout
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
