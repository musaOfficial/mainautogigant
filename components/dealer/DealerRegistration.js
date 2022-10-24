import Link from "next/link";
import { useState } from "react";
import Input from "../ui/Input";
// import Input from "../ui/Input";
import InputSelect from "../ui/InputSelect";

export default function DealerRegistration() {
  const [password, setPassword] = useState(true);
  const [password2, setPassword2] = useState(true);

  const option1 = [
    { value: "alle marken", label: "Alle Marken" },
    { value: "alle", label: "Alle Marken" },
    { value: "marken", label: "Alle Marken" },
  ];
  const option2 = [
    { value: "*Land", label: "*Land" },
    { value: "Österreich", label: "Österreich" },
    { value: "Österreich2", label: "Österreich" },
    { value: "Österreich3", label: "Österreich" },
  ];
  const option3 = [
    { value: "Anrede", label: "Anrede" },
    { value: "Herr", label: "Herr" },
    { value: "Herr2", label: "Herr" },
    { value: "Herr3", label: "Herr" },
  ];
  const option4 = [
    { value: "* Ländervorwahl", label: "* Ländervorwahl" },
    { value: "+43", label: "+43" },
    { value: "+44", label: "+44" },
    { value: "+45", label: "+45" },
  ];
  const option5 = [
    { value: "Ländervorwahl", label: "Ländervorwahl" },
    { value: "+43", label: "+43" },
    { value: "+44", label: "+44" },
    { value: "+45", label: "+45" },
  ];
  return (
    <div className="bg-theme-gray-3 overflow-hidden lg:px-6 md:!px-0">
      <div className="relative w-10/12 lg:w-full max-w-ag-container md:!w-full mx-auto flex lg:flex-col bg-white p-4">
        <div className="w-1/2 relative lg:w-full mr-2 rounded-md bg-theme-gray-4 flex flex-col text-theme-gray-4 text-15 md:text-xs lg:flex-col p-6">
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
          <h3 className="text-2xl text-gray-500 font-bold">
            Als Händler registrieren
          </h3>
          <div className="flex items-center mt-6 text-base">
            <p className="">Firma</p>
            <p className="">*=Pflichtfelder</p>
          </div>
          <div className="mt-4">
            <div>
              <div className="flex items-center justify-between mb-4">
                <input
                  className="w-60 border rounded text-md p-2 border-slate-300"
                  placeholder="* Firmenname"
                />
                <input
                  className="w-60 border rounded text-md p-2 border-slate-300"
                  placeholder="Ergänzung"
                />
              </div>
              <div className="flex items-center justify-between mb-4">
                <input
                  className="w-60 border rounded text-md p-2 border-slate-300"
                  placeholder="Ergänzung"
                />
                <input
                  className="w-60 border rounded text-md p-2 border-slate-300"
                  placeholder="*Hausnummer"
                />
              </div>
              <div className="flex items-center justify-between mb-4">
                <input
                  className="w-60 border rounded text-md p-2 border-slate-300"
                  placeholder="*Stadt"
                />
                <input
                  className="w-60 border rounded text-md p-2 border-slate-300"
                  placeholder="* PLZ"
                />
              </div>
              <div className="flex items-center justify-between mb-2">
                <div className="w-60">
                  <InputSelect
                    options={option2}
                    placeholder={option2[0].value}
                    regYear
                  />
                </div>
                <input
                  className="w-60 border rounded text-md p-2 border-slate-300"
                  placeholder="UID-Nr."
                />
              </div>
              <div className="flex items-center justify-between mb-4">
                <input
                  className="w-60 border rounded text-md p-2 border-slate-300"
                  placeholder="*E-Mail-Adresse"
                />
                <input
                  className="w-60 border rounded text-md p-2 border-slate-300"
                  placeholder="Internet-Adresse (URL)"
                />
              </div>

              <h3 className="text-2xl font-bold mt-8 mb-4">Ansprechpartner</h3>
              <div className="flex items-center justify-between mb-2">
                <div className="w-60">
                  <InputSelect
                    options={option3}
                    placeholder={option3[0].value}
                    regYear
                  />
                </div>
                <input
                  className="w-60 border rounded text-md p-2 border-slate-300"
                  placeholder="Titel"
                />
              </div>
              <div className="flex items-center justify-between mb-4">
                <input
                  className="w-60 border rounded text-md p-2 border-slate-300"
                  placeholder="* Vorname"
                />
                <input
                  className="w-60 border rounded text-md p-2 border-slate-300"
                  placeholder="* Nachname"
                />
              </div>
              <div className="flex items-center justify-between mb-2">
                <div className="w-60">
                  <InputSelect
                    options={option4}
                    placeholder={option4[0].value}
                    regYear
                  />
                </div>
                <input
                  className="w-60 border rounded text-md p-2 border-slate-300"
                  placeholder="*Telefonnummer"
                />
              </div>
              <div className="flex items-center justify-between mb-2">
                <div className="w-60">
                  <InputSelect
                    options={option5}
                    placeholder={option5[0].value}
                    regYear
                  />
                </div>
                <input
                  className="w-60 border rounded text-md p-2 border-slate-300"
                  placeholder="Mobil"
                />
              </div>
            </div>
            <div className=" mt-8 mb-4">
              <h3 className="text-2xl font-bold">Ansprechpartner</h3>
              <p className="text-10">
                mind. 8 Zeichen, ein Groß- & Kleinbuchstabe und eine Ziffer
              </p>
            </div>
            <div>
              <div className="relative mb-4">
                <input
                  className="w-full border rounded text-md p-2 border-slate-300"
                  placeholder="*Passwort"
                  type={password ? "password" : "text"}
                />
                <button
                  className="absolute right-3 top-2 mt-px opacity-50"
                  onClick={() => setPassword(!password)}
                >
                  {!password ? (
                    <img className="w-6" src="/images/icons/eye-open.png" />
                  ) : (
                    <img className="w-6" src="/images/icons/eye-close.png" />
                  )}
                </button>
              </div>
              <div className="relative mb-4">
                <input
                  className="w-full border rounded text-md p-2 border-slate-300"
                  placeholder="*Passwort wiederholen"
                  type={password2 ? "password" : "text"}
                />
                <button
                  className="absolute right-3 top-2 mt-px opacity-50"
                  onClick={() => setPassword2(!password2)}
                >
                  {!password2 ? (
                    <img className="w-6" src="/images/icons/eye-open.png" />
                  ) : (
                    <img className="w-6" src="/images/icons/eye-close.png" />
                  )}
                </button>
              </div>
            </div>
            <div className="py-6">
              <div className="flex justify-between text-15 text-gray-500 font-medium mb-4">
              <div className="w-1/3">
                  <input
                    className="mr-2"
                    type="radio"
                    id="Fahrzeug"
                    name="person"
                    value="Fahrzeug Händler"
                  />
                  <label htmlFor="Fahrzeug">Fahrzeug Händler</label>
                </div>
                <div className="w-1/3">
                  <input
                    className="mr-2"
                    type="radio"
                    id="Kreditvermittler"
                    name="person"
                    value="Kreditvermittler"
                  />
                  <label htmlFor="Kreditvermittler">Kreditvermittler</label>
                </div>
                <div className="w-1/3">
                  <input
                    className="mr-2"
                    type="radio"
                    id="Zulassungstelle"
                    name="person"
                    value="Zulassungstelle"
                  />
                  <label htmlFor="Zulassungstelle">Zulassungstelle</label>
                </div>
              </div>
              <div className="flex justify-between text-15 text-gray-500 font-medium">
                <div className="w-1/3">
                  <input
                    className="mr-2"
                    type="radio"
                    id="KFZ"
                    name="person"
                    value="KFZ Werkstatt"
                  />
                  <label htmlFor="KFZ">KFZ Werkstatt</label>
                </div>
                <div className="w-1/3">
                  <input
                    className="mr-2"
                    type="radio"
                    id="Versicherungsmakler"
                    name="person"
                    value="Versicherungsmakler"
                  />
                  <label htmlFor="Versicherungsmakler">Versicherungsmakler</label>
                </div>
                <div className="w-1/3">
                  <input
                    className="mr-2"
                    type="radio"
                    id="Autoaufbereitung"
                    name="person"
                    value="Autoaufbereitung"
                  />
                  <label htmlFor="Autoaufbereitung">Autoaufbereitung</label>
                </div>
              </div>
            </div>
            <div className="flex justify-between items-end">
              <div className="h-14 flex text-xs flex-col md:w-full justify-between pt-2">
                <div className="flex">
                  <input
                    className="w-4 h-4 mr-2"
                    type="checkbox"
                    id="newslater"
                    name="newslater"
                    value="newslater"
                  />
                  <label htmlFor="newslater">
                    Nēwsletter, Updates and Trends und per E-Mail
                  </label>
                </div>
                <div className="flex items-center">
                  <input
                    className="w-4 h-4 mr-2"
                    type="checkbox"
                    id="privacy"
                    name="privacy"
                    value="privacy"
                  />
                  <label htmlFor="privacy">
                    Ich erkläre mich mit den AGB einverstanden
                  </label>
                </div>
              </div>
            </div>
            <div className="flex items-center mt-4 md:flex-col">
              <img
                className="w-1/2 md:w-full md:mr-0 md:mb-4 mr-2"
                src="/images/icons/recapcha.png"
              />
              <button className="w-1/2 md:w-full ml-2 md:mr-0 md:mb-6 text-black font-bold text-xl px-4 py-3 rounded-md border-2 border-theme-gray-3 bg-theme-yellow-2">
                Neu registrieren
              </button>
            </div>
          </div>
        </div>
        <div className="w-1/2 relative lg:w-3/4 md:!w-full lg:mx-auto md:px-6 lg:mb-12">
          <img className="w-full h-full" src="/images/dealer-reg-car.png" />
          <div className="absolute text-white top-36 left-16 md:left-10">
            <div className="flex flex-col w-96 md:w-64 mx-auto">
              <Link href="/login/user">
                <a className="w-72 md:w-60 bg-theme-yellow-2 text-xl font-bold mb-2 text-black text-center p-4 rounded-lg border-2 border-black">
                  Als Händler einlogen
                </a>
              </Link>
              Haben Sie Fragen? Wir helfen Ihnen gerne weiter.
              <Link href="#">
                <a className="underline">Kontaktformular</a>
              </Link>
              <Link href="#">
                <a className="underline">Häufige Fragen</a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
