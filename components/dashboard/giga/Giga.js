import GigaCard from "./GigaCard";

export default function Giga() {
  return (
    <>
      <div className="flex-1">
        <div className="rounded-md bg-theme-gray-4 p-4">
          <div className="mb-2 text-theme-gray-4">
            <h2 className="text-3xl font-bold">GIGA POWER</h2>
            <p className="text-xs">
            GIGA POWER-Pakete bestehen aus Zusatzleistungen, mit denen Ihr Fahrzeug schneller verkauft werden kann. Wenn Sie wissen möchten, welcher Service für Sie geeignet ist, können Sie die Paketdetails unten überprüfen.
            </p>
          </div>
          <div className="flex md:flex-col">
          <GigaCard
              title="STARTSEITE SCHAUFENSTER"
              desc="Sichern Sie sich Ihren Platz im Schaufenster auf der Startseite und sorgen Sie dafür, dass Ihr Inserat sofort gesehen wird."
              adUrl="#"
              package1Title="1 Woche"
              package1Price="114,00"
              package2Title="2 Woche"
              package2Price="124,00"
              package3Title="3 Woche"
              package3Price="134,00"
              package4Title="4 Woche"
              package4Price="144,00"
            />
            <div className="w-4 md:hidden"></div>
            
            <GigaCard
              title="TOP INSERAT"
              desc="Platzieren Sie Ihr Inserat ganz oben auf der Auflistungsseite 
          und zeigen Sie Ihren Beitrag über anderen Ergebnissen an."
              adUrl="#"
              package1Title="1 Woche"
              package1Price="25,00"
              package2Title="2 Woche"
              package2Price="45,00"
              package3Title="3 Woche"
              package3Price="65,00"
              package4Title="4 Woche"
              package4Price="90,00"
            />
          </div>
          <div className="flex md:flex-col">
            <GigaCard
              title="GIGA LABEL"
              desc="Lassen Sie das Fahrzeug in der Liste mit dem Label 
              „GIGA“ erscheinen 
              und in der Kategorie „GIGA LABEL“ sein."
              adUrl="#"
              package1Title="1 Tag"
              package1Price="6,00"
            />
            <div className="w-4 md:hidden"></div>
            <GigaCard
              title="DATUMSAKTUALISIERUNG"
              desc="Aktualisieren Sie das Veröffentlichungsdatum, damit Ihre 
          Anzeige bei Suchanfragen einen hohen Rang einnimmt."
              adUrl="#"
              package1Title="1-mal"
              package1Price="3,00"
            />
          </div>
          <div className="flex md:flex-col">
            <GigaCard
              title="FETTER TEXT UND FARBIGER RAHMEN"
              desc="Der Titel der Anzeige wird fett geschrieben und findet auf 
          einem farbigen Hintergrund statt."
              adUrl="#"
              package1Title="1-mal"
              package1Price="4,00"
            />
            <div className="w-4 md:hidden"></div>
            <GigaCard
              title="25 FOTO RECHTE"
              desc="Fügen Sie mehr Fotos hinzu, indem Sie das Limit von 15 auf 25 Fotos erhöhen."
              adUrl="#"
              package1Title="1-mal"
              package1Price="4,00"
            />
          </div>
        </div>
        <div className="mt-8 rounded-md bg-theme-gray-4 p-4">
          <div className="mb-2 text-theme-black-2">
            <h2 className="text-3xl font-bold">PROFIL BOOSTER</h2>
            <p className="text-xs">
              Anwendbar für folgende Kooperationspartner:
            </p>
            <p className="text-xs">
              FAHRZEUG HÄNDLER | FINANZIERUNGEN | VERSICHERUNGEN |
              ZULASSUNGSSTELLEN | WERKSTÄTTEN | AUTOAUFBEREITUNG
            </p>
          </div>
          <div className="flex md:flex-col">
            <GigaCard
              title="LIGHT PROFIL"
              adUrl="#"
              package1Title="1 Monat"
              package1Price="2,00"
              package2Title="3 Monat"
              package2Price="5,00"
              package3Title="12 Monat"
              package3Price="20,00"
            >
              <>
                <p>- PROFILBILD</p>
                <p>- TITELBILD</p>
                <p>- TEXT BEREICH</p>
                <p>- KONTAKTDATEN</p>
                <p>- GOOGLE MAP</p>
                <p className="mb-10">- SOCIAL MEDIA</p>
              </>
            </GigaCard>
            <div className="w-4 md:hidden"></div>
            <GigaCard
              title="TOP PROFIL"
              adUrl="#"
              package1Title="1 Monat"
              package1Price="4,00"
              package2Title="3 Monat"
              package2Price="10,00"
              package3Title="12 Monat"
              package3Price="40,00"
            >
              <>
              <p>- PROFILBILD</p>
                <p>- TITELBILD</p>
                <p>- TEXT BEREICH</p>
                <p>- KONTAKTDATEN</p>
                <p>- GOOGLE MAP</p>
                <p>- SOCIAL MEDIA</p>
                <p className="mb-6">- 5 FOTOS</p>
              </>
            </GigaCard>
            <div className="w-4 md:hidden"></div>
            <GigaCard
              title="EXKLUSIV PROFIL"
              adUrl="#"
              package1Title="1 Monat"
              package1Price="6,00"
              package2Title="3 Monat"
              package2Price="15,00"
              package3Title="12 Monat"
              package3Price="60,00"
            >
              <>
              <p>- PROFILBILD</p>
                <p>- TITELBILD</p>
                <p>- TEXT BEREICH</p>
                <p>- KONTAKTDATEN</p>
                <p>- GOOGLE MAP</p>
                <p>- SOCIAL MEDIA</p>
                <p>- 5 FOTOS</p>
                <p className="mb-2">- WERBESLIDER HÄNDLERLISTE</p>
              </>
            </GigaCard>
          </div>
        </div>
        <div className="mt-4 rounded-md bg-theme-yellow-2 p-4 text-theme-black text-15 2xl:text-xs">
          <div className="flex items-center justify-between lg:flex-col">
            <div className="lg:w-full">
              <div className="flex items-center justify-between leading-8">
                <p className="font-bold mr-10 2xl:mr-4">STARTSEITE SCHAUFENSTER</p>
                <div className="flex items-center text-left">
                  <p>1 Woche</p>
                  <p className="ml-4">25,00 €</p>
                  <button className="ml-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="14.414"
                      height="14.414"
                      viewBox="0 0 14.414 14.414"
                    >
                      <g
                        id="Group_560"
                        data-name="Group 560"
                        transform="translate(-1054.793 -663.793)"
                      >
                        <line
                          id="Line_243"
                          data-name="Line 243"
                          x2="13"
                          y2="13"
                          transform="translate(1055.5 664.5)"
                          fill="none"
                          stroke="#db0000"
                          strokeWidth="2"
                        />
                        <line
                          id="Line_244"
                          data-name="Line 244"
                          x1="13"
                          y2="13"
                          transform="translate(1055.5 664.5)"
                          fill="none"
                          stroke="#db0000"
                          strokeWidth="2"
                        />
                      </g>
                    </svg>
                  </button>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <p className="font-bold mr-10 2xl:mr-4">DATUMAKTUALISIERUNG</p>
                <div className="flex items-center text-left">
                  <p>1-mal</p>
                  <p className="ml-4">3,00 €</p>
                  <button className="ml-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="14.414"
                      height="14.414"
                      viewBox="0 0 14.414 14.414"
                    >
                      <g
                        id="Group_560"
                        data-name="Group 560"
                        transform="translate(-1054.793 -663.793)"
                      >
                        <line
                          id="Line_243"
                          data-name="Line 243"
                          x2="13"
                          y2="13"
                          transform="translate(1055.5 664.5)"
                          fill="none"
                          stroke="#db0000"
                          strokeWidth="2"
                        />
                        <line
                          id="Line_244"
                          data-name="Line 244"
                          x1="13"
                          y2="13"
                          transform="translate(1055.5 664.5)"
                          fill="none"
                          stroke="#db0000"
                          strokeWidth="2"
                        />
                      </g>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
            <div className="flex lg:mt-6 2xl:items-center">
              <div className="font-bold">
                <p className="2xl:text-xs">GESAMT</p>
                <p className="text-2xl 2xl:text-lg">28,00 €</p>
              </div>
              <button className="rounded-md text-xl 2xl:text-sm font-bold ml-8 2xl:ml-4 bg-theme-gray-6 text-white px-10 2xl:px-6 2xl:py-4">
                KAUFEN
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}