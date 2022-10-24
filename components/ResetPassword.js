import Link from "next/link";
import Input from "./ui/Input";

export default function ResetPassword() {
  return (
    <>
      <div className="bg-theme-gray-3 overflow-hidden lg:px-6 md:!px-0">
        <div className="relative w-10/12 lg:w-full max-w-ag-container md:!w-full mx-auto flex lg:flex-col bg-white p-6">
          <div className="w-1/2 lg:w-full relative before:lg:w-full mr-3 rounded-10 bg-theme-gray-4 flex flex-col text-theme-gray-4 text-15 md:text-xs lg:flex-col">
            <Link href="/">
              <a className="absolute right-6 top-6 lg:top-4 flex flex-col items-end text-theme-blue text-xs">
                <p>zurück</p>
                <p className="mb-1">zur Startseite</p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="22.116"
                  height="15"
                  viewBox="0 0 22.116 15"
                >
                  <path
                    id="keyboard_return_FILL0_wght400_GRAD200_opsz40"
                    d="M11.917,24.458l-7.5-7.5,7.5-7.5L13.659,11.2,9.171,15.718H24.052V10.669h2.48v7.5H9.171l4.488,4.488Z"
                    transform="translate(-4.417 -9.458)"
                    fill="#0067b8"
                  />
                </svg>
              </a>
            </Link>
            <div className="p-6">
              <div className="mt-2 pr-20 text-base">
                <h3 className="text-2xl md:text-xl font-bold pt-6 pb-2">
                  Passwort vergessen
                </h3>
                <p className="mt-1">
                  Bitte geben Sie hier Ihre E-Mail-Adresse ein, mit der Sie sich
                  registriert haben.
                </p>
                <p className="mt-4">
                  Wir schicken Ihnen einen Link, mit dem Sie ihr Passwort
                  zurücksetzen können.
                </p>
              </div>

              <div className="mt-4">
                <Input placeholder="E-Mail-Adresse" inputType="email" />
                <div className="flex lg:flex-col lg:items-start items-end justify-between -mt-10">
                  <div className="w-full flex items-end justify-between mt-10 sm:flex-col">
                    <button className="w-1/2 sm:w-full sm:mb-4 sm:mr-0 mr-2 inline-block px-10 py-3 sm:px-4 sm:text-sm rounded-10 bg-theme-yellow-2 text-white text-base font-bold ease-linear duration-300 hover:bg-theme-yellow-3">
                      Senden
                    </button>
                    <div className="w-1/2 sm:w-full sm:mb-4 sm:ml-0 ml-2 flex items-center cursor-pointer text-13">
                      <Link href="/registration/user">
                        <div className="flex items-center cursor-pointer">
                          <img
                            className="opacity-50 mr-2"
                            src="/images/icons/login-user.png"
                          />
                          <div>
                            <p>Du bist noch nicht registriert?</p>
                            <p className="text-theme-blue">
                              Jetzt neu registrieren
                            </p>
                          </div>
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="relative w-1/2 lg:w-auto lg:ml-0 lg:mt-4 ml-3">
            <img
              className="w-full rounded-10"
              src="/images/reset-password.png"
            />
            <div className="absolute top-8 left-8">
              <p className="px-2 table text-black text-2xl bg-theme-yellow-2  font-bold">
                Passwort
              </p>
              <p className="px-2 table mt-1 text-black text-2xl bg-theme-yellow-2 font-bold">
                vergessen?
              </p>
              <p className="px-2 table mt-1 text-black text-2xl bg-theme-yellow-2 font-bold">
                Keine Sorge!
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
