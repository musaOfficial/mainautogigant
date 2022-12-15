import { useState } from "react";
import Link from "next/link";
import Input from "./ui/Input";
import InputSelect from "./ui/InputSelect";

export default function Registration() {
  const [gender, setGender] = useState("");
  const [isStepActive, setIsStepActive] = useState(1);
  const [newsLaterChecked, setNewsLaterChecked] = useState(false);
  const [privacyChecked, setPrivacyChecked] = useState(false);

  const option1 = [
    { value: "alle marken", label: "Alle Marken" },
    { value: "alle", label: "Alle Marken" },
    { value: "marken", label: "Alle Marken" },
  ];
  return (
    <div className="bg-theme-gray-3 overflow-hidden lg:px-6 md:!px-0 pb-max-h-full ">
      <div className="relative w-10/12 lg:w-full max-w-ag-container max-h-full md:!w-full mx-auto flex lg:flex-col bg-white p-6">
        <div className="w-1/2 lg:w-full relative before:lg:w-full mr-3 flex flex-col text-theme-gray-4 text-15 md:text-xs lg:flex-col">
          <div className="p-6 rounded-10 bg-theme-gray-4">
            <div className="flex items-center justify-between text-3xl md:text-xl font-bold text-white mb-4">
              <button
                className={`h-14 w-14 md:w-10 md:h-10 flex items-center cursor-default justify-center rounded-full ${
                  isStepActive == 1 ? "bg-theme-yellow-2" : "bg-theme-gray-8"
                }`}
              >
                1
              </button>
              <span className="w-32 md:w-12 h-px p-px rounded-md bg-theme-gray-8"></span>
              <button
                className={`h-14 w-14 md:w-10 md:h-10 flex items-center cursor-default justify-center rounded-full ${
                  isStepActive == 2 ? "bg-theme-yellow-2" : "bg-theme-gray-8"
                }`}
              >
                2
              </button>
              <span className="w-32 md:w-12 h-px p-px rounded-md bg-theme-gray-8"></span>
              <button
                className={`h-14 w-14 md:w-10 md:h-10 flex cursor-default items-center justify-center rounded-full ${
                  isStepActive == 3 ? "bg-theme-yellow-2" : "bg-theme-gray-8"
                }`}
              >
                3
              </button>
            </div>
            {/* DEALER REGISTER STEP
            ONE START FROM HERE */}
            {isStepActive === 1 && (
              <div>
                <div className="relative">
                  <Link href="/">
                    <a className="absolute right-6 top-1 lg:top-4 flex flex-col items-end text-theme-blue text-xs">
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
                </div>
                <div className="">
                  <h3 className="text-2xl text-gray-500 font-bold">
                    Neu Registrieren
                  </h3>
                  <div className="">
                    <p className="mb-4">oder als bestehender User einloggen</p>
                    <div className="flex mb-4">
                      <div
                        onClick={() =>
                          gender === "male" ? setGender("") : setGender("male")
                        }
                        className="flex cursor-pointer mr-6"
                      >
                        <div className="bg-white w-6 h-6 p-1 flex justify-center items-center mr-2 rounded">
                          <input
                            type="checkbox"
                            className="hidden"
                            checked={gender === "male" ? true : false}
                            onChange={() =>
                              gender === "male"
                                ? setGender("")
                                : setGender("male")
                            }
                          />
                          <svg
                            className={`${
                              gender === "male" ? "block" : "hidden"
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
                              style={{ mixBlendMode: "normal" }}
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
                        Mann
                      </div>
                      <div
                        onClick={() =>
                          gender === "female"
                            ? setGender("")
                            : setGender("female")
                        }
                        className="flex cursor-pointer"
                      >
                        <div className="bg-white w-6 h-6 p-1 flex justify-center items-center mr-2 rounded">
                          <input
                            type="checkbox"
                            className="hidden"
                            checked={gender === "female" ? true : false}
                            onChange={() =>
                              gender === "female"
                                ? setGender("")
                                : setGender("female")
                            }
                          />
                          <svg
                            className={`${
                              gender === "female" ? "block" : "hidden"
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
                              style={{ mixBlendMode: "normal" }}
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
                        Frau
                      </div>
                    </div>
                  </div>

                  <div className="">
                    <div className="flex justify-between">
                      <div className="w-1/2 mr-2">
                        <Input placeholder="Vorname" inputType="text" />
                      </div>
                      <div className="w-1/2 ml-2">
                        <Input placeholder="Nachname" inputType="text" />
                      </div>
                    </div>
                    <Input placeholder="E-Mail-Adresse" inputType="email" />
                    <Input
                      placeholder="Passwort"
                      inputType="password"
                      sublabel="mind. 8 Zeichen, ein Groß- & Kleinbuchstabe und eine Ziffer"
                    />
                    <Input
                      placeholder="Passwort wiederholen"
                      inputType="password"
                    />
                    <div className="flex justify-between items-center md:flex-col">
                      <div className="w-1/2 md:!w-full mr-2 md:mr-0 whitespace-nowrap">
                        <InputSelect
                          options={option1}
                          placeholder="Geburtsjahr (nur für dich sichtbar)"
                          regYear
                        />
                      </div>
                      <div className="w-1/2 md:!w-full ml-2 h-10 flex text-11 flex-col justify-between mb-5">
                        <div
                          className="flex items-center"
                          onClick={() => setNewsLaterChecked(!newsLaterChecked)}
                        >
                          <div className="bg-white w-4 h-4 p-1 flex justify-center items-center mr-2 rounded">
                            <input
                              type="checkbox"
                              className="hidden"
                              id="newslater"
                              name="newslater"
                              value="newslater"
                              checked={newsLaterChecked}
                              onChange={() =>
                                setNewsLaterChecked(!newsLaterChecked)
                              }
                            />
                            <svg
                              className={`${
                                newsLaterChecked ? "block" : "hidden"
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
                                style={{ mixBlendMode: "normal" }}
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
                          <label htmlFor="stayLoggedIn">
                            Newsletter, Updates und Trends erhalten.
                          </label>
                        </div>
                        <div
                          className="flex items-center"
                          onClick={() => setPrivacyChecked(!privacyChecked)}
                        >
                          <div className="bg-white w-4 h-4 p-1 flex justify-center items-center mr-2 rounded">
                            <input
                              type="checkbox"
                              className="hidden"
                              id="newslater"
                              name="newslater"
                              value="newslater"
                              checked={privacyChecked}
                              onChange={() =>
                                setPrivacyChecked(!privacyChecked)
                              }
                            />
                            <svg
                              className={`${
                                privacyChecked ? "block" : "hidden"
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
                                style={{ mixBlendMode: "normal" }}
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
                          <label htmlFor="stayLoggedIn">
                            Ich erkläre mich mit den AGB einverstanden
                          </label>
                        </div>
                      </div>
                    </div>
                    <div className="flex md:flex-col items-center mt-6">
                      <img
                        className="w-60 md:w-full md:mr-0 mr-2 md:mb-4"
                        src="/images/icons/recapcha.png"
                      />
                      <button
                        onClick={() => setIsStepActive(2)}
                        className="w-1/2 sm:w-full sm:mb-4 sm:mr-0 ml-2 inline-block px-10 py-3 sm:px-4 sm:text-sm rounded-10 bg-theme-yellow-2 text-white text-base font-bold ease-linear duration-300 hover:bg-theme-yellow-3"
                      >
                        Neu registrieren
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}
            {isStepActive === 1 && (
              <div className="w-full flex items-center items-ceter mt-10 bg-theme-gray-4 rounded-10 text-sm sm:flex-col">
                <Link href="/registration/dealer">
                  <a className="w-1/2 sm:w-full sm:mb-4 mr-4 sm:mr-0 inline-block px-4 sm:px-4 sm:text-sm py-3 rounded-10 bg-theme-yellow-2 text-white text-base font-bold ease-linear duration-300 hover:bg-theme-yellow-3">
                    Als Händler registrieren
                  </a>
                </Link>

                <div className="sm:w-full">
                  <p>Haben Sie Fragen?</p>
                  <p>Wir helfen Ihnen gerne weiter.</p>
                  <a
                    href="/#"
                    target="_blank"
                    rel="noreferer"
                    className="underline text-theme-blue"
                  >
                    Kontaktformular
                  </a>
                </div>
              </div>
            )}
            {/* DEALER REGISTER STEP
            ONE ENDS HERE */}
            {/* DEALER REGISTER STEP
            TWO START FROM HERE */}
            {/* DEALER REGISTER STEP
            TWO ENDS HERE */}
            {isStepActive === 2 && (
              <div>
                <h3 className="text-2xl md:text-xl font-bold mt-8 mb-6 md:mb-6">
                  Registrierung abschließen
                </h3>
                <div className="relative w-full text-13">
                  <div className="flex items-center">
                    <div className="w-14 md:mr-4">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="40"
                        height="40"
                        viewBox="0 0 40 40"
                      >
                        <path
                          id="info_FILL0_wght400_GRAD0_opsz48"
                          d="M22.65,34h3V22h-3ZM24,18.3a1.643,1.643,0,0,0,1.175-.45,1.515,1.515,0,0,0,.475-1.15,1.681,1.681,0,0,0-.475-1.2,1.631,1.631,0,0,0-2.35,0,1.681,1.681,0,0,0-.475,1.2,1.515,1.515,0,0,0,.475,1.15A1.643,1.643,0,0,0,24,18.3ZM24,44a20.285,20.285,0,0,1-7.9-1.525A19.357,19.357,0,0,1,5.525,31.9,20.285,20.285,0,0,1,4,24a20.156,20.156,0,0,1,1.525-7.85A19.52,19.52,0,0,1,9.75,9.8,19.939,19.939,0,0,1,24,4,19.84,19.84,0,0,1,44,24a19.939,19.939,0,0,1-5.8,14.25,19.52,19.52,0,0,1-6.35,4.225A20.156,20.156,0,0,1,24,44Zm0-20Zm0,17a16.366,16.366,0,0,0,12-5,16.366,16.366,0,0,0,5-12,16.366,16.366,0,0,0-5-12A16.366,16.366,0,0,0,24,7a16.366,16.366,0,0,0-12,5A16.366,16.366,0,0,0,7,24a16.366,16.366,0,0,0,5,12A16.366,16.366,0,0,0,24,41Z"
                          transform="translate(-4 -4)"
                          fill="#dfdfdf"
                        />
                      </svg>
                    </div>
                    <div>
                      <p>Sie können Ihr Benutzerkonto</p>
                      <p>nur mit einer bestätigten E-Mail-Adresse verwenden.</p>
                    </div>
                  </div>
                  <div className="flex items-center mt-8">
                    <div className="w-14 md:mr-4">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="40"
                        height="32"
                        viewBox="0 0 40 32"
                      >
                        <path
                          id="mail_FILL0_wght400_GRAD0_opsz48"
                          d="M7,40a2.878,2.878,0,0,1-2.1-.9A2.878,2.878,0,0,1,4,37V11a2.878,2.878,0,0,1,.9-2.1A2.878,2.878,0,0,1,7,8H41a2.878,2.878,0,0,1,2.1.9A2.878,2.878,0,0,1,44,11V37a3.076,3.076,0,0,1-3,3ZM24,24.9,7,13.75V37H41V13.75Zm0-3L40.8,11H7.25ZM7,13.75V37H7Z"
                          transform="translate(-4 -8)"
                          fill="#dfdfdf"
                        />
                      </svg>
                    </div>
                    <div>
                      <p>E-Mail-Adresse bestätigen</p>
                      <p>
                        In kürze erhalten Sie eine E-Mail mit einem
                        Bestätigungslink.
                      </p>
                      <p>
                        Keine E-Mail erhalten?
                        <a
                          href="#"
                          target="_blank"
                          rel="norefferer"
                          className="text-theme-blue pl-1"
                        >
                          Hier neu anfordern.
                        </a>
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center mt-8">
                    <div className="w-14 md:mr-4">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="40"
                        height="31.9"
                        viewBox="0 0 40 31.9"
                      >
                        <path
                          id="how_to_reg_FILL0_wght400_GRAD0_opsz48"
                          d="M4,40V35.3a5.988,5.988,0,0,1,.85-3.125A5.4,5.4,0,0,1,7.4,30,37.376,37.376,0,0,1,14,27.7a26.327,26.327,0,0,1,6-.7,28.78,28.78,0,0,1,3.075.175A22.344,22.344,0,0,1,26.4,27.8l-2.45,2.45q-1-.1-1.975-.175T20,30a24.485,24.485,0,0,0-5.275.525A34.7,34.7,0,0,0,8.6,32.7a2.5,2.5,0,0,0-1.225,1.15A3.236,3.236,0,0,0,7,35.3V37H22.95l3,3Zm27.25.8L24.2,33.75l2.1-2.1,4.95,4.95L41.9,25.95l2.1,2.1ZM20,23.9a7.193,7.193,0,0,1-7.5-7.5A7.193,7.193,0,0,1,20,8.9a7.193,7.193,0,0,1,7.5,7.5A7.193,7.193,0,0,1,20,23.9ZM22.95,37ZM20,20.9a4.361,4.361,0,0,0,4.5-4.5A4.361,4.361,0,0,0,20,11.9a4.361,4.361,0,0,0-4.5,4.5A4.361,4.361,0,0,0,20,20.9Zm0-4.5Z"
                          transform="translate(-4 -8.9)"
                          fill="#dfdfdf"
                        />
                      </svg>
                    </div>
                    <div>
                      <p>
                        Mit Klick auf den Bestätigungslink ist Ihr AUTO GIGANT.
                      </p>
                      <p>Benutzerkonto aktiv!</p>
                    </div>
                  </div>
                </div>
                <div className="text-xs mt-24 md:mt-10 pl-14">
                  <p>Wenn du keine E-Mail von uns erhalten hast,</p>
                  <p>
                    schaue bitte auch in den Spam-Ordner deines
                    E-Mail-Postfaches.
                  </p>
                </div>
              </div>
            )}
            {/* DEALER REGISTER STEP
            THREE START FROM HERE */}

            {isStepActive === 3 && (
              <div className="flex flex-col items-center text-base py-20 md:py-10">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="100"
                  height="84.305"
                  viewBox="0 0 100 84.305"
                >
                  <path
                    id="how_to_reg_FILL0_wght400_GRAD200_opsz40"
                    d="M2.5,89.453V75.065A15.8,15.8,0,0,1,4.7,66.92a14.543,14.543,0,0,1,6.361-5.767,83.046,83.046,0,0,1,16.885-6,68.752,68.752,0,0,1,14.982-1.724,66.1,66.1,0,0,1,7.311.417,70.7,70.7,0,0,1,7.908,1.367L49.586,63.77l-3.27-.237q-1.6-.12-3.507-.12A57.971,57.971,0,0,0,30.561,64.72a80.224,80.224,0,0,0-15.1,5.351,4.308,4.308,0,0,0-2.32,2.083,6.663,6.663,0,0,0-.654,2.911v4.4H48.159l10.582,9.988Zm67.776.477L52.083,71.737,59.1,64.72,70.276,75.9l25.09-25.09,7.134,7.017ZM42.809,45.577A19.215,19.215,0,0,1,28.54,39.93,19.526,19.526,0,0,1,22.953,25.6,19.315,19.315,0,0,1,42.809,5.625,19.616,19.616,0,0,1,57.2,11.273,19.307,19.307,0,0,1,62.9,25.6,19.307,19.307,0,0,1,57.2,39.93,19.616,19.616,0,0,1,42.809,45.577Zm5.351,33.888ZM42.929,35.589A9.753,9.753,0,0,0,52.917,25.6a9.68,9.68,0,0,0-2.854-7.134,9.828,9.828,0,0,0-7.254-2.854,9.481,9.481,0,0,0-7.074,2.854A9.789,9.789,0,0,0,32.941,25.6a9.789,9.789,0,0,0,2.794,7.134A9.628,9.628,0,0,0,42.929,35.589Zm0-9.988Z"
                    transform="translate(-2.5 -5.625)"
                    fill="#555"
                  />
                </svg>

                <h3 className="text-2xl md:text-xl font-bold mt-2 mb-10 md:mb-6 md:text-center md:mt-4">
                  Sie haben sich erfolgreich registriert!
                </h3>

                <p>Vielen Dank für die Registrierung.</p>
                <p className="mb-6 md:my-4 text-center">
                  Sie werden in Kürze zur Startseite weitergeleitet.
                </p>
                <p className="md:text-center">
                  Oder
                  <a
                    className="text-theme-blue font-bold pl-1"
                    href="#"
                    target="_blank"
                    rel="norefferer"
                  >
                    Klicken Sie hier
                  </a>
                  , wenn Sie nicht warten wollen.
                </p>
              </div>
            )}
            {/* DEALER REGISTER STEP
            THREE ENDS HERE */}
          </div>
        </div>
        <div className="relative w-1/2 lg:w-auto lg:ml-0 lg:mt-4 ml-3 h-full">
          <img
            className="w-full rounded-10"
            src={`/images/${
              isStepActive === 1
                ? "reg-car"
                : isStepActive === 2
                ? "dealer-register-close"
                : isStepActive === 3
                ? "register-success"
                : null
            }.png`}
          />
        </div>
      </div>
    </div>
  );
}
