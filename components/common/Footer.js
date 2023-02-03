import Link from "next/link";
import { useState } from "react";
import { SwiperSlide } from "swiper/react";
import FooterCarousel from "./Carousel";
import FooterLinks from "./FooterLinks";
import classes from './Footer.module.css'
import YouTubeIcon from './../../public/icons/youtube.svg';
import InstagramIcon from './../../public/icons/instagram.svg';
import TikTokIcon from './../../public/icons/tiktok.svg';
import FaceBookIcon from './../../public/icons/facebook.svg';
import WorldIcon from './../../public/world.svg';
import { useEffect } from "react";
import Albania from './../../public/flags/albania.svg';
import Austria from './../../public/flags/austria.svg';
import Bosnia from './../../public/flags/bosnia.svg';
import Bulgaria from './../../public/flags/bulgaria.svg';
import Croatia from './../../public/flags/croatia.svg';
import Czech from './../../public/flags/czech.svg';
import France from './../../public/flags/france.svg';
import Hungary from './../../public/flags/hungary.svg';
import Iran from './../../public/flags/iran.svg';
import Poland from './../../public/flags/poland.svg';
import Italy from './../../public/flags/italy.svg';
import Qatar from './../../public/flags/qatar.svg';
import Romania from './../../public/flags/romania.svg';
import Russia from './../../public/flags/russia.svg';
import Saudi from './../../public/flags/saudi.svg';
import Serbia from './../../public/flags/serbia.svg';
import Spain from './../../public/flags/spain.svg';
import Switzerland from './../../public/flags/switzerland.svg';
import Turkey from './../../public/flags/turkey.svg';
import Ukraine from './../../public/flags/ukraine.svg';
import United from './../../public/flags/united.svg';
import Germany from './../../public/flags/germany.svg';
import Slovakia from './../../public/flags/slovakia.svg';
import Azerbaijan from './../../public/flags/azerbaijan.svg';
import Image from "next/image";
import SwiperSlideImage from './../../public/swiperslide.png';
import Gigantlogo from './../../public/gigantlogo.jpg';
import Expand from './../../public/expand.svg';
import Facebook from './../../public/facebook.svg';
import Tiktok from './../../public/tiktok.svg';
import Instagram from './../../public/instagram.svg';
import Youtube from './../../public/youtube.svg';
import Linkedin from './../../public/Linkedin.svg';

const useDeviceSize = () => {

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

  return [width, height]

}

export default function Footer() {

  const [width, height] = useDeviceSize();

  const links1 = [
    { linkTitle: "ANMELDEN", url: "/login" },
    { linkTitle: "REGISTRIEREN", url: "/registration/dealer" },
    { linkTitle: "VORTEILE", url: "#" },
    { linkTitle: "PREISE", url: "#" },
    { linkTitle: "HILFE", url: "#" },
    { linkTitle: "WERBUNG", url: "#" },
  ];
  const links2 = [
    { linkTitle: "FAHRZEUG HÄNDLER", url: "#" },
    { linkTitle: "KREDITVERMITTLER", url: "#" },
    { linkTitle: "VERSICHERUNGSMAKLER", url: "#" },
    { linkTitle: "ZULASSUNGSSTELLEN", url: "#" },
    { linkTitle: "WERKSTÄTTEN", url: "#" },
    { linkTitle: "AUTOAUFBEREITUNG", url: "#" },
  ];
  const links3 = [
    { linkTitle: "KFZ KAUFVERTRAG", url: "/kaufvertrag" },
    { linkTitle: "UNFALLBERICHT", url: "#" },
    { linkTitle: "NOVA RECHNER", url: "#" },
    { linkTitle: "DIGITALE VIGNETTE", url: "#" },
    { linkTitle: "FAHRSCHULEN", url: "#" },
    { linkTitle: "AUTOMARKEN", url: "#" },
  ];

  const [openLanguagesBar, setOpenLanguagesBar] = useState(false);


  const [language, setLanguage] = useState("Deutsch");
  const [flag, setFlag] = useState(<WorldIcon className={classes.world} />);

  return (
    <footer className="md:!px-0">
      {openLanguagesBar == true && <div className={classes.openbar}>
          <div className={classes.heading}>Sprache auswählen</div>
          <div className={classes.firstrow}>
              <div className={classes.language} onClick={() => {
                setFlag(<Austria className={classes.world} />);
                setLanguage("Deutsch");
                setOpenLanguagesBar(false);
              }}>
                <Austria className={`${classes.flag} ${classes.germanflag}`} />
                <div className={classes.flagname}>Deutsch </div>
              </div>
              <div className={classes.language} onClick={() => {
                setFlag(<Turkey className={classes.world} />);
                setLanguage("Türkçe");
                setOpenLanguagesBar(false);
              }}>
                <Turkey className={`${classes.flag} ${classes.turkishflag}`} />
                <div className={classes.flagname}>Türkçe</div>
              </div>
              <div className={classes.language} onClick={() => {
                setFlag(<United className={classes.world} />);
                setLanguage("English");
                setOpenLanguagesBar(false);
              }}>
                <United className={`${classes.flag} ${classes.englishflag}`} />
                <div className={classes.flagname}>English</div>
              </div>
          </div>
          <div className={classes.secondrow}>
            <div className={classes.language}>
                <Germany className={classes.flag} onClick={() => {
                  setFlag(<Germany className={classes.world} />);
                  setLanguage("Deutsch")
                  setOpenLanguagesBar(false);
                }} />
                <div className={classes.flagname}>Deutsch</div>
              </div>
              <div className={classes.language} onClick={() => {
                setFlag(<Slovakia className={classes.world} />);
                setLanguage("Slovenská");
                setOpenLanguagesBar(false);
              }}>
                <Slovakia className={classes.flag} />
                <div className={classes.flagname}>Slovenská</div>
              </div>
            <div className={classes.language} onClick={() => {
              setFlag(<Qatar className={classes.world} />);
              setLanguage("عربي");
              setOpenLanguagesBar(false);
            }}>
                <Qatar className={classes.flag} />
                <div className={classes.flagname}>عربي</div>
              </div>
              <div className={classes.language} onClick={() => {
                setFlag(<France className={classes.world} />);
                setLanguage("Français");
                setOpenLanguagesBar(false);
              }} >
                <France className={classes.flag} />
                <div className={classes.flagname}>Français</div>
              </div>
              <div className={classes.language} onClick={() => {
                setFlag(<Russia className={classes.world} />);
                setLanguage("Русский");
                setOpenLanguagesBar(false);
              }}>
                <Russia className={classes.flag} />
                <div className={classes.flagname}>Русский</div>
              </div>
              <div className={classes.language} onClick={() => {
                setFlag(<Hungary className={classes.world} />);
                setLanguage("Magyar");
                setOpenLanguagesBar(false);
              }}>
                <Hungary className={classes.flag} />
                <div className={classes.flagname}>Magyar</div>
              </div>

            <div className={classes.language} onClick={() => {
                setFlag(<Switzerland className={classes.world} />)
                setLanguage("Schweiz")
                setOpenLanguagesBar(false);
            }}>
                <Switzerland className={classes.flag} />
                <div className={classes.flagname}>Schweiz</div>
              </div>
              <div className={classes.language} onClick={() => {
                setFlag(<Ukraine className={classes.world} />);
                setLanguage("українська");
                setOpenLanguagesBar(false);
              }}>
                <Ukraine className={classes.flag} />
                <div className={classes.flagname}>українська</div>
              </div>
            <div className={classes.language} onClick={() => {
              setFlag(<Italy className={classes.world} />);
              setLanguage("Italiano")
              setOpenLanguagesBar(false);
            }}>
                <Italy className={classes.flag} />
                <div className={classes.flagname}>Italiano</div>
              </div>
              <div className={classes.language} onClick={() => {
                setFlag(<Albania className={classes.world} />);
                setLanguage("shqiptare");
                setOpenLanguagesBar(false);
              }}>
                <Albania className={classes.flag} />
                <div className={classes.flagname}>shqiptare</div>
              </div>
              <div className={classes.language} onClick={() => {
                setFlag(<Serbia className={classes.world} />);
                setLanguage("Српски");
                setOpenLanguagesBar(false);
              }}>
                <Serbia className={classes.flag} />
                <div className={classes.flagname}>Српски</div>
              </div>
              <div className={classes.language} onClick={() => {
                setFlag(<Bulgaria className={classes.world} />);
                setLanguage("български");
                setOpenLanguagesBar(false);
              }}>
                <Bulgaria className={classes.flag} />
                <div className={classes.flagname}>български</div>
              </div>

            <div className={classes.language} onClick={() => {
              setFlag(<Croatia className={classes.world} />);
              setLanguage("Hrvatski");
              setOpenLanguagesBar(false);
            }}>
                <Croatia className={classes.flag} />
                <div className={classes.flagname}>Hrvatski</div>
              </div>
              <div className={classes.language} onClick={() => {
                setFlag(<Romania className={classes.world} />);
                setLanguage("Română");
                setOpenLanguagesBar(false);
              }}>
                <Romania className={classes.flag} />
                <div className={classes.flagname}>Română</div>
              </div>
            <div className={classes.language} onClick={() => {
              setFlag(<Spain className={classes.world} />);
              setLanguage("español");
              setOpenLanguagesBar(false);
            }}>
                <Spain className={classes.flag} />
                <div className={classes.flagname}>español</div>
              </div>
              <div className={classes.language} onClick={() => {
                setFlag(<Czech className={classes.world} />);
                setLanguage("čeština");
                setOpenLanguagesBar(false);
              }}>
                <Czech className={classes.flag} />
                <div className={classes.flagname}>čeština</div>
              </div>
              <div className={classes.language} onClick={() => {
                setFlag(<Bosnia className={classes.world} />);
                setLanguage("bosanski");
                setOpenLanguagesBar(false);
              }}>
                <Bosnia className={classes.flag} />
                <div className={classes.flagname}>bosanski</div>
              </div>
              <div className={classes.language} onClick={() => {
                setFlag(<Iran className={classes.world} />);
                setLanguage("فارسی");
                setOpenLanguagesBar(false);
              }}>
                <Iran className={classes.flag} />
                <div className={classes.flagname}>فارسی</div>
              </div>
              <div className={classes.language} onClick={() => {
                setFlag(<Poland className={classes.world} />);
                setLanguage("Polski")
                setOpenLanguagesBar(false);
              }}>
                <Poland className={classes.flag} />
                <div className={classes.flagname}>Polski</div>
              </div>
              <div className={classes.language} onClick={() => {
                setFlag(<Saudi className={classes.world} />);
                setLanguage("عربي");
                setOpenLanguagesBar(false);
              }}>
                <Saudi className={classes.flag} />
                <div className={classes.flagname}>عربي</div>
              </div>
              <div className={classes.language} onClick={() => {
                setFlag(<Azerbaijan className={classes.world} />);
                setLanguage("Azərbaycan")
                setOpenLanguagesBar(false);
              }}>
                <Azerbaijan className={classes.flag} />
                <div className={classes.flagname}>Azərbaycan</div>
              </div>
          </div>
        </div>}
      {openLanguagesBar == true && <div className={classes.closebar} onClick={() => setOpenLanguagesBar(false)}></div>}
      {openLanguagesBar == true && <div className={classes.openbarbackground}>
        
      </div>}
      <div className={`${classes.backgroundfooterlinks}`}>
        <div className="w-10/12 max-w-ag-container lg:w-full mx-auto">
          <div className="flex md:flex-col bg-theme-gray-4 p-6 pb-0">
            <div className="w-2/3 md:mb-6 md:w-full flex flex-1 md:flex-col">
              <FooterLinks title="HÄNDLERBEREICH" links={links1} />
              <div className="w-16"></div>
              <FooterLinks title="KOOPERATIONEN" links={links2} />
              <div className="w-16"></div>
              <FooterLinks title="NÜTZLICHES" links={links3} />
            </div>
            <div className="w-1/3 ml-4 md:w-1/2 md:mx-auto sm:!w-full">
              <FooterCarousel
              className={`z-0 w-full ${classes.footercarousel} `}>
                <SwiperSlide>
                  <div className={classes.swiperslide}>
                    <div className={classes.swiperslidetop}>
                      <Image src={SwiperSlideImage} layout="fill" objectFit="cover" />
                      <div className={classes.swiperslidelogo}>
                        <Image src={Gigantlogo} layout='fill' objectFit="cover" />
                      </div>
                    </div>
                    <div className={classes.swiperslidebottom}>
                        <div className="flex justify-between items-center">
                          <div>
                            <div className={classes.swiperslideheading}>Gigant Group Teknoloji A.S.</div>
                            <div className={classes.swiperslidelocation}>Wiener Straße 90<br />2700 Wiener Neustadt<br />Österreich</div>
                          </div>
                          <div>
                            <Link href={"/dealer-profile"}><div className={classes.expand}><Expand className={classes.expandor} /></div></Link>
                          </div>
                        </div>
                        <div className={`flex items-center w-full ${classes.socialcontainer}`}>
                          <div className={`${classes.opened} ${classes.notopened}`}>Jetzt geöffnet</div>
                          <Facebook className={classes.socialmediaicon} />
                          <Instagram className={classes.socialmediaicon} />
                          <Youtube className={classes.socialmediaicon} />
                          <Linkedin className={classes.socialmediaicon} />
                          <Tiktok className={classes.socialmediaicon} />
                        </div>
                    </div>
                  </div>
                </SwiperSlide>
              </FooterCarousel>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-black pb-10">
        <div className="w-10/12 max-w-ag-container lg:w-full mx-auto lg:px-6">
          <div className="flex justify-between md:flex-col lg:justify-around items-start xl:items-center py-4 md:py-8 bg-black">
            <div className="flex w-1/2 lg:w-auto md:mr-auto items-start lg:flex-col lg:items-start">
              <Link href="/">
                <div className="md:w-full">
                  <img
                    className="cursor-pointer w-60 lg:mr-auto xl:w-32 2xl:w-40"
                    src="/images/icons/footer-logo.png"
                  />
                  <p className={classes.logodesc}>
                    A COMPANY OF THE GIGANT GROUP
                  </p>
                </div>
              </Link>
              <div className="flex flex-col justify-between lg:border-0 border-l border-footer-border lg:mr-auto lg:pt-4 ml-4 pl-4 text-white text-xs lg:ml-0 lg:pl-0">
                <h4 className="text-base font-bold">GIGANT WORLD</h4>
                <div className="mt-1">
                  <Link href="https://www.egigant.at">
                    <a className="flex items-center text-13 mb-1 duration-100 hover:text-yellow-600" target='_blank' rel='noreferer'>
                      <img
                        className="mr-1"
                        src="/images/icons/footer-link-expand.png"
                      />
                      E GIGANT.
                    </a>
                  </Link>
                  <Link href="https://www.immo-gigant.at">
                    <a className="flex items-center text-13 mb-1 duration-100 hover:text-yellow-600" target='_blank' rel='noreferer'>
                      <img
                        className="mr-1"
                        src="/images/icons/footer-link-expand.png"
                      />
                      IMMO GIGANT.
                    </a>
                  </Link>
                  <Link href="https://www.gastrogigant.at">
                    <a className="flex items-center text-13 mb-1 duration-100 hover:text-yellow-600" target='_blank' rel='noreferer'>
                      <img
                        className="mr-1"
                        src="/images/icons/footer-link-expand.png"
                      />
                      GASTRO GIGANT.
                    </a>
                  </Link>
                  <Link href="https://www.hosting-gigant.at duration-100 hover:text-yellow-600">
                    <a className="flex items-center text-13 mb-1 duration-100 hover:text-yellow-600" target='_blank' rel='noreferer'>
                      <img
                        className="mr-1"
                        src="/images/icons/footer-link-expand.png"
                      />
                      HOSTING GIGANT.
                    </a>
                  </Link>
                  <Link href="https://www.gigant.shop">
                    <a className="flex items-center text-13 duration-100 hover:text-yellow-600" target='_blank' rel='noreferer'>
                      <img
                        className="mr-1"
                        src="/images/icons/footer-link-expand.png"
                      />
                      GIGANT SHOP.
                    </a>
                  </Link>
                </div>
              </div>
            </div>
            <div className="flex justify-between w-1/2 lg:w-auto md:mr-auto md:mt-10 pl-10 lg:pl-0 lg:flex-col lg:items-start">
              <div className="lg:mb-8 md:!mb-0 text-white xl:text-xs">
                <p className="text-base tracking-wide">
                  Jetzt App kostenlos downloaden!
                </p>
                <div className="flex mt-2 items-center justify-between">
                  <img className="" src="/images/icons/google-play.png" />
                  <img className="" src="/images/icons/app-store.png" />
                </div>
              </div>
              <div className="md:items-start md:mt-8">
                <h4 className="font-bold text-white">
                  <span className="text-theme-yellow-2">EINFACH{" "}</span>GIGANTISCH
                  <span className="text-theme-yellow-2">.</span>
                </h4>
                <div className="flex mt-2">
                  <button className="w-8 xl:w-8 rounded-full overflow-hidden brightness-150">
                    <Link href="https://www.facebook.com/Autogigant.at">
                      <FaceBookIcon className={classes.footericon} />
                    </Link>
                  </button>
                  <button className="w-8 xl:w-8 ml-3 rounded-full overflow-hidden brightness-150">
                    <Link href="https://www.instagram.com/autogigant.at/">
                      <InstagramIcon className={classes.footericon}/>
                    </Link>
                  </button>
                  <button className="w-8 xl:w-8 ml-3 rounded-full overflow-hidden brightness-150">
                    <Link href="https://www.youtube.com/channel/UCvCGl8oqdgGhaGD5bDDvUYw">
                      <YouTubeIcon className={classes.footericon}/>
                    </Link>
                  </button>
                  <button className="w-8 xl:w-8 ml-3 rounded-full overflow-hidden brightness-150">
                    <Link href="https://www.tiktok.com/@autogigant.at">
                      <TikTokIcon className={classes.footericon}/>
                    </Link>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={`w-10/12 max-w-ag-container lg:w-full mx-auto shadow-1 ${classes.lineheight}`}>
          <div className={`flex items-center flex-column justify-between py-2 text-white text-13 bg-black border-t border-theme-gray-3 xl:flex-wrap md:justify-center`}>
              <div className={classes.linkscontainer}>
                <div className={classes.links}>
                  <span className={`${classes.linkgroup1}`}>
                    <div className="flex">
                      <Link href={"#"}><span className={`md:px-2 ${classes.linkprop} ${classes.linkpropfirst} cursor-pointer hover:text-yellow-600 pr-4 text-12 hover:transition-all border-r-2 border-theme-gray-3`}>© 2023 AUTO GIGANT.</span></Link>
                      <span className={`md:px-2 ${classes.linkprop} cursor-default pl-4 pr-4 text-12 border-r-2 border-theme-gray-3`}>ALLE RECHTE VORBEHALTEN.</span>
                      <span className={`md:px-2 ${classes.linkprop} ${classes.linkpropperfirst} cursor-pointer hover:text-yellow-600 pl-4 pr-4 text-12 hover:transition-all border-r-2 border-theme-gray-3`}>COOKIE HINWEISE</span>
                    </div>
                  </span>
                  <span className={`${classes.linkgroup2}`}>
                    <div className="flex">
                      <span className={`md:px-2 ${classes.linkprop} ${classes.linkpropmiddle} cursor-pointer hover:text-yellow-600 pl-4 pr-4 text-12 hover:transition-all border-r-2 border-theme-gray-3`}>DATENSCHUTZ</span>
                      <span className={`md:px-2 ${classes.linkprop} cursor-pointer hover:text-yellow-600 pl-4 pr-4 text-12 hover:transition-all border-r-2 border-theme-gray-3`}>NUTZUNGSBEDINGUNGEN</span>
                      <Link href={"/about-us"}><span className={`md:px-2 ${classes.linkprop} ${classes.linkpropper} cursor-pointer hover:text-yellow-600 pl-4 pr-4 text-12 hover:transition-all border-r-2 border-theme-gray-3`}>ÜBER UNS</span></Link>
                    </div>
                  </span>
                  <span className={`${classes.linkgroup3}`}>
                    <div className="flex">
                      <span className={`md:px-2 ${classes.linkprop} ${classes.linkproplast} cursor-pointer hover:text-yellow-600 pl-4 pr-4 text-12 hover:transition-all border-r-2 border-theme-gray-3`}>IMPRESSUM</span>
                      <Link href={"/contact-us"}><span className={`md:px-2 ${classes.linkprop} ${classes.borderright} cursor-pointer hover:text-yellow-600 pl-4 pr-4 text-12 hover:transition-all`}>KONTAKT</span></Link>
                      {width < 575 && <p className="flex items-center cursor-pointer hover:transition-all hover:text-yellow-600" onClick={() => setOpenLanguagesBar(d => !d)}>{flag}{language}</p>}
                    </div>
                  </span>
                </div>
                <div className={`${classes.languages} langBar`}>
                  {width >= 575 && <p className="flex items-center cursor-pointer hover:transition-all hover:text-yellow-600" onClick={() => setOpenLanguagesBar(d => !d)}>{flag}{language}</p>}
                </div>
              </div>              
          </div>
          <div className={classes.belowfootercontainer}>
            <p className={`flex items-center ${classes.linkpropfirst} ${width < 1024 && classes.noborderright} md:px-2 cursor-pointer hover:text-yellow-600 hover:transition-all border-r-2 border-theme-gray-3`}>MADE WITH <img className={`${classes.hearticon}`} src="/images/icons/copyright-fav.png" />IN AUSTRIA</p>
            <Link href={"https://www.hgmedia.at/"}><p className={`md:px-2 ${classes.linkprop} cursor-pointer text-12  `}>IN COOPERATION WITH <span className="hover:text-yellow-600">HGMEDIA ADVERTISING AGENCY</span></p></Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
