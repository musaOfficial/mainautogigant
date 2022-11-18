import Link from "next/link";
import { useState } from "react";
import { SwiperSlide } from "swiper/react";
import FooterCarousel from "./Carousel";
import FooterLinks from "./FooterLinks";
import classes from './Footer.module.css'
export default function Footer() {

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
    { linkTitle: "NOVA RECHNER", url: "#" },
    { linkTitle: "DIGITALE VIGNETTE", url: "#" },
    { linkTitle: "AUTOMARKEN", url: "#" },
    { linkTitle: "FAHRSCHULEN", url: "#" },
    { linkTitle: "KFZ VORSCHRIFTEN", url: "#" },
    { linkTitle: "KFZ KAUFVERTRAG", url: "/kaufvertrag" },
  ];

  const [openLanguagesBar, setOpenLanguagesBar] = useState(false);
  return (
    <footer className="md:!px-0">
      <div className="bg-theme-gray-6">
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
              >
                <SwiperSlide>
                  <div className="w-full h-full rounded-t-20 relative z-10 flex items-center p-6 bg-white">
                    <div className="absolute md:h-12 h-20 w-full left-0 bottom-0 z-20 bg-theme-gray-10"></div>
                    <div className="relative z-30 mr-4 rounded-full border-4 border-theme-gray-4">
                      <img className="rounded-full" src="/images/logo.png" />
                    </div>
                    <div className="flex-1 relative z-30">
                      <h4 className="text-base font-bold">HGMEDIA WERBEAGENTUR</h4>
                      <p className="text-13 py-2">WIENER STRASSE 90 2700 WIENER NEUSTADT</p>
                      <button className="inline-block px-2 py-2 text-13 sm:px-4 sm:text-sm rounded-10 bg-theme-yellow-2 text-white font-bold ease-linear duration-300 hover:bg-theme-yellow-3">PROFIL BESUCHEN</button>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="w-full h-full rounded-t-20 relative z-10 flex items-center p-6 bg-white">
                  <div className="absolute md:h-12 h-20 w-full left-0 bottom-0 z-20 bg-theme-gray-10"></div>
                    <div className="relative z-30 mr-4 rounded-full border-4 border-theme-gray-4">
                      <img className="rounded-full" src="/images/logo.png" />
                    </div>
                    <div className="flex-1 relative z-30">
                      <h4 className="text-base font-bold">HGMEDIA WERBEAGENTUR</h4>
                      <p className="text-13 py-2">WIENER STRASSE 90 2700 WIENER NEUSTADT</p>
                      <button className="inline-block px-2 py-2 text-13 sm:px-4 sm:text-sm rounded-10 bg-theme-yellow-2 text-white font-bold ease-linear duration-300 hover:bg-theme-yellow-3">PROFIL BESUCHEN</button>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="w-full h-full rounded-t-20 relative z-10 flex items-center p-6 bg-white">
                  <div className="absolute md:h-12 h-20 w-full left-0 bottom-0 z-20 bg-theme-gray-10"></div>
                    <div className="relative z-30 mr-4 rounded-full border-4 border-theme-gray-4">
                      <img className="rounded-full" src="/images/logo.png" />
                    </div>
                    <div className="flex-1 relative z-30">
                      <h4 className="text-base font-bold">HGMEDIA WERBEAGENTUR</h4>
                      <p className="text-13 py-2">WIENER STRASSE 90 2700 WIENER NEUSTADT</p>
                      <button className="inline-block px-2 py-2 text-13 sm:px-4 sm:text-sm rounded-10 bg-theme-yellow-2 text-white font-bold ease-linear duration-300 hover:bg-theme-yellow-3">PROFIL BESUCHEN</button>
                    </div>
                  </div>
                </SwiperSlide>
              </FooterCarousel>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-black">
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
                    <a className="flex items-center text-13 mb-1" target='_blank' rel='noreferer'>
                      <img
                        className="mr-1"
                        src="/images/icons/footer-link-expand.png"
                      />
                      E GIGANT.
                    </a>
                  </Link>
                  <Link href="https://www.immo-gigant.at">
                    <a className="flex items-center text-13 mb-1" target='_blank' rel='noreferer'>
                      <img
                        className="mr-1"
                        src="/images/icons/footer-link-expand.png"
                      />
                      IMMO GIGANT.
                    </a>
                  </Link>
                  <Link href="https://www.gastrogigant.at">
                    <a className="flex items-center text-13 mb-1" target='_blank' rel='noreferer'>
                      <img
                        className="mr-1"
                        src="/images/icons/footer-link-expand.png"
                      />
                      GASTRO GIGANT.
                    </a>
                  </Link>
                  <Link href="https://www.hosting-gigant.at">
                    <a className="flex items-center text-13 mb-1" target='_blank' rel='noreferer'>
                      <img
                        className="mr-1"
                        src="/images/icons/footer-link-expand.png"
                      />
                      HOSTING GIGANT.
                    </a>
                  </Link>
                  <Link href="https://www.gigant.shop">
                    <a className="flex items-center text-13" target='_blank' rel='noreferer'>
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
                  <span className="text-theme-yellow-2">EINFACH</span>GIGANTISCH
                  <span className="text-theme-yellow-2">.</span>
                </h4>
                <div className="flex mt-2">
                  <button className="w-8 xl:w-8 rounded-full overflow-hidden hover:border-2 hover:border-yellow-600 brightness-150">
                    <Link href="https://www.facebook.com/Autogigant.at">
                      <img src="/images/icons/facebook.png" />
                    </Link>
                  </button>
                  <button className="w-8 xl:w-8 ml-3 rounded-full overflow-hidden hover:border-2 hover:border-yellow-600 brightness-150">
                    <Link href="https://www.instagram.com/autogigant.at/">
                      <img src="/images/icons/instagram.png" />
                    </Link>
                  </button>
                  <button className="w-8 xl:w-8 ml-3 rounded-full overflow-hidden hover:border-2 hover:border-yellow-600  brightness-150">
                    <Link href="https://www.youtube.com/channel/UCvCGl8oqdgGhaGD5bDDvUYw">
                      <img src="/images/icons/youtube.png" />
                    </Link>
                  </button>
                  <button className="w-8 xl:w-8 ml-3 rounded-full overflow-hidden hover:border-2 hover:border-yellow-600 brightness-150">
                    <Link href="https://www.tiktok.com/@autogigant.at">
                      <img src="/images/icons/tiktok.png" />
                    </Link>
                  </button>
                </div>
              </div>
            </div>
          </div>
          {openLanguagesBar == true && <div className={classes.langcontainer}>
          <div className="w-10/12 max-w-ag-container lg:w-full mx-auto flex justify-end">
            <div className={classes.languagesbar}>
              <div className={classes.language}>
                <Link href="http://autogigant.at">
                    DEUTSCH / ÖSTERREICH
                </Link>
              </div>
              <div className={classes.language}>
                <Link href="https://autogigant.de">
                    DEUTSCH / DEUTSCHLAND
                </Link>
              </div>
              <div className={classes.language}>
                <Link href="https://autogigant.ch">
                    DEUTSCH / SCHWEIZ
                </Link>
              </div>
              <div className={classes.language}>
                <Link href="https://autogigant.tr">
                    TÜRKCE / TÜRKIYE
                </Link>
              </div>
            </div>  
          </div>  
          </div>}
        </div>
        <div className="w-10/12 max-w-ag-container lg:w-full mx-auto shadow-1">
          <div className="flex items-center justify-between py-2 text-white text-13 bg-black border-t border-theme-gray-3 leading-5 xl:flex-wrap md:justify-center">
            <p className="md:px-2 cursor-pointer hover:text-yellow-600 hover:transition-all">© 2023 AUTO GIGANT.</p>
            <p className="flex items-center md:px-2 cursor-pointer hover:text-yellow-600 hover:transition-all">MADE WITH <img className="scale-75 py-px" src="/images/icons/copyright-fav.png" />IN AUSTRIA</p>
            <p className="md:px-2 cursor-pointer hover:transition-all hover:text-yellow-600">IMPRESSUM</p>
            <p className="md:px-2 cursor-pointer hover:transition-all hover:text-yellow-600">DATENSCHUTZ</p>
            <p className="md:px-2 cursor-pointer hover:transition-all hover:text-yellow-600">COOKIE HINWEISE</p>
            <p className="md:px-2 cursor-pointer hover:transition-all hover:text-yellow-600">NUTZUNGSBEDINGNUNGEN</p>
            <p className="md:px-2 cursor-pointer hover:transition-all hover:text-yellow-600">KONTAKT</p>
            <p className="flex items-center cursor-pointer hover:transition-all hover:text-yellow-600" onClick={() => setOpenLanguagesBar(d => !d)}><img className="w-4 mr-1 md:px-2 scale-90" src="/images/icons/copyright-world.png" />DEUTSCH | ÖSTERREICH</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
