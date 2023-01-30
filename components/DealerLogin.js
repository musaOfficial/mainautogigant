import Link from "next/link";
import { useState } from "react";
import Input from "./ui/Input";
import classes from './DealerLogin.module.css';
import BackHome from './../public/home.svg';
import Check from './../public/registerclose/check.svg';

export default function DealerLogin() {
  const [passWordSave, setPasswordSave] = useState(false);

  return (
    <>
      <div className="bg-theme-gray-10 overflow-hidden lg:px-6 md:!px-0">
        <div className="relative w-10/12 lg:w-full max-w-ag-container md:!w-full mx-auto flex flex-col lg:flex-col bg-white p-6">
        <div className={`${classes.top_row}`}>
            <span className={classes.leftrow}><Link href={"/"}><BackHome className={classes.backhome} /></Link></span>
          </div>
          <div className="flex relative w-full md:!w-full lg:flex-col">
          <div className="w-full lg:w-full rounded-10 bg-theme-gray-4 flex flex-col text-theme-gray-4 text-15 md:text-xs lg:flex-col">
            <div className="p-6">
              <div className="mt-2">
                <h3 className="text-3xl md:text-xl font-bold">Händler Login</h3>
                <p className="mt-1 text-base">
                  Um fortzufahren, musst du eingeloggt sein.
                </p>
              </div>

              <div className="mt-4">
                <Input placeholder="E-Mail-Adresse" inputType="email" />
                <Input placeholder="Passwort" inputType="password" />
                <div className="flex justify-between mt-4">
                  <div
                    className="flex items-center"
                    onClick={() => setPasswordSave(!passWordSave)}
                  >
                    <div className="bg-white w-6 h-6 p-1 flex justify-center items-center mr-2 rounded">
                      <input
                        type="checkbox"
                        className="hidden"
                        checked={passWordSave}
                        onChange={() => setPasswordSave(!passWordSave)}
                      />
                      <svg
                        className={`${
                          passWordSave ? "block" : "hidden"
                        } w-4 h-4 text-purple pointer-events-none`}
                        viewBox="0 0 172 172"
                      >
                        <g
                          fill="none"
                          strokeWidth="none"
                          strokeMiterlimit="10"
                          fontFamily="none"
                          fontWeight="none"
                          fontSize="none"
                          textAnchor="none"
                          style={{ "mix-blend-mode": "normal" }}
                        >
                          <path d="M0 172V0h172v172z" />
                          <path
                            d="M145.433 37.933L64.5 118.8658 33.7337 88.0996l-10.134 10.1341L64.5 139.1341l91.067-91.067z"
                            fill="currentColor"
                            strokeWidth="1"
                          />
                        </g>
                      </svg>
                    </div>
                    <label htmlFor="stayLoggedIn">Eingeloggt bleiben</label>
                  </div>
                  <Link href="/reset-password">
                    <a className={`text-theme-blue ${classes.forgotpassword}`}>Passwort vergessen?</a>
                  </Link>
                </div>
                <div className="flex flex-col items-end justify-between mt-10 sm:flex-col">
                  <button className={`w-full sm:w-full sm:mb-4 sm:mr-0 inline-block px-10 py-3 sm:px-4 sm:text-sm rounded-10 bg-theme-yellow-2 text-white text-base font-bold ease-linear duration-300 hover:bg-theme-yellow-3 ${classes.btn} `}>
                    Einloggen
                  </button>
                  <Link href="/registration/user">
                    <div className="w-full sm:w-full sm:mb-4 mt-2 sm:ml-0 ml-2 flex items-center  text-13">
                      <Check className={classes.check} />
                      <div>
                        <p>Du bist noch nicht registriert?<br /><span className="text-theme-blue cursor-pointer hover:underline">
                          {" "}Jetzt neu registrieren
                        </span></p>
                        
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="relative w-full lg:w-auto lg:ml-0 lg:mt-4 ml-3">
            <div className={`relative w-full lg:w-auto lg:ml-0 lg:mt-4 ml-3 `}>
            <img className="w-full rounded-10 h-full" src="/images/login-dealer.png" />

             <div className={`absolute top-8 left-8 ${classes.img}`}>
              <p className={`px-2 table text-black bg-theme-yellow-2 font-bold`}>
                Mehr
              </p>
              <p className={`px-2 table mt-1 text-black  bg-theme-yellow-2 font-bold`}>
                als nur eine
              </p>
              <p className={`px-2 table mt-1 text-black  bg-theme-yellow-2 font-bold`}>
                Auto Suchmaschine.
              </p>
            </div>
          </div>
          </div>
          </div>
        </div>
      </div>
    </>
  );
}
