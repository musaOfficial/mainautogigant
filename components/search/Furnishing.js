import { useState } from "react";
import CheckBoxItem from "./CheckBoxItem";

export default function Furnishing() {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="text-base border-b-2 mt-4">
      <button
        onClick={() => setFurnishingExpanded(!expanded)}
        className="w-full inline-flex items-center justify-between font-bold text-theme-gray-4"
      >
        Ausstattung
        <img
          src="/images/icons/expand-arrow.png"
          className={`w-8 opacity-50 ${furnishingExpanded ? "rotate-0" : "rotate-180"}`}
        />
      </button>
      <div
        className={`${furnishingExpanded ? "h-auto pb-4" : "h-0"} overflow-hidden pt-4`}
      >
        <div className="flex justify-between md:flex-wrap">
          <div className="w-1/3">
            <CheckBoxItem wAuto marginBottom title="2-Zonen Klimaautomatik" />
            <CheckBoxItem wAuto marginBottom title="3-Zonen Klimaautomatik" />
            <CheckBoxItem wAuto marginBottom title="4-Zonen Klimaautomatik" />
            <CheckBoxItem wAuto marginBottom title="360º Kamera" />
            <CheckBoxItem wAuto marginBottom title="ABS" />
            <CheckBoxItem wAuto marginBottom title="Abstandstempomat" />
            <CheckBoxItem wAuto marginBottom title="Abstandswarner" />
            <CheckBoxItem wAuto marginBottom title="Airbag hinten" />
            <CheckBoxItem wAuto marginBottom title="Alarmanlage" />
            <CheckBoxItem wAuto marginBottom title="Allrad" />
            <CheckBoxItem wAuto marginBottom title="Allwetterreifen" />
            <CheckBoxItem wAuto marginBottom title="Alufelgen" />
            <CheckBoxItem wAuto marginBottom title="Ambientebeleuchtung" />
            <CheckBoxItem wAuto marginBottom title="Android Auto" />
            <CheckBoxItem wAuto marginBottom title="Anhängerkupplung" />
            <CheckBoxItem wAuto marginBottom title="Apple CarPlay" />
            <CheckBoxItem wAuto marginBottom title="Armlehne" />
            <CheckBoxItem wAuto marginBottom title="Beheizbare Frontscheibe" />
            <CheckBoxItem wAuto marginBottom title="Beheizbares Lenkrad" />
            <CheckBoxItem wAuto marginBottom title="Behindertengerecht" />
            <CheckBoxItem wAuto marginBottom title="Beifahrerairbag" />
            <CheckBoxItem wAuto marginBottom title="Berganfahrassistent" />
            <CheckBoxItem wAuto marginBottom title="Bi-Xenon Scheinwerfer" />
            <CheckBoxItem wAuto marginBottom title="Biodieselumrüstung" />
            <CheckBoxItem wAuto marginBottom title="Blendfreies Fernlicht" />
            <CheckBoxItem wAuto marginBottom title="Bluetooth" />
            <CheckBoxItem wAuto marginBottom title="Bordcomputer" />
            <CheckBoxItem wAuto marginBottom title="CD" />
            <CheckBoxItem wAuto marginBottom title="DAB-Radio" />
            <CheckBoxItem wAuto marginBottom title="Dachreling" />
            <CheckBoxItem wAuto marginBottom title="E10-geignet" />
            <CheckBoxItem wAuto marginBottom title="Einparkhilfe" />
            <CheckBoxItem wAuto marginBottom title="Einparkhilfe Kamera" />
            <CheckBoxItem wAuto marginBottom title="Einparkhilfe selbst lenkendes System" />
            <CheckBoxItem wAuto marginBottom title="Einparkhilfe Sensoren hinten" />
            <CheckBoxItem wAuto marginBottom title="Einparkhilfe Sensoren vorne" />
            <CheckBoxItem wAuto marginBottom title="Elektr. Fensterheber" />
            <CheckBoxItem wAuto marginBottom title="Elektr. Sitzeinstellung, hinten" />
            <CheckBoxItem wAuto marginBottom title="Elektrische Seitenspiegel" />
            <CheckBoxItem wAuto marginBottom title="Elektrische Sitze" />
            <CheckBoxItem wAuto marginBottom title="Elektronische Parkbremse" />
            <CheckBoxItem wAuto marginBottom title="ESP" />
            <CheckBoxItem wAuto marginBottom title="Fahrerairbag" />
            <CheckBoxItem wAuto title="Fernlichtassistent" />
          </div>
          <div className="w-1/3">
            <CheckBoxItem wAuto marginBottom title="Freisprecheinrichtung" />
            <CheckBoxItem wAuto marginBottom title="Gebäckraumabtrennung" />
            <CheckBoxItem wAuto marginBottom title="Geschwindigkeitsbegrenzungsanlage" />
            <CheckBoxItem wAuto marginBottom title="Getönte Scheiben" />
            <CheckBoxItem wAuto marginBottom title="Head-up display" />
            <CheckBoxItem wAuto marginBottom title="Induktionsladen für Smartphones" />
            <CheckBoxItem wAuto marginBottom title="Innenspiegel automatisch abblendend" />
            <CheckBoxItem wAuto marginBottom title="Isofix" />
            <CheckBoxItem wAuto marginBottom title="Katalysator" />
            <CheckBoxItem wAuto marginBottom title="Klimaanlage" />
            <CheckBoxItem wAuto marginBottom title="Klimaautomatik" />
            <CheckBoxItem wAuto marginBottom title="Kopfairbag" />
            <CheckBoxItem wAuto marginBottom title="Kurvenlicht" />
            <CheckBoxItem wAuto marginBottom title="Laserlicht" />
            <CheckBoxItem wAuto marginBottom title="LED-Scheinwerfer" />
            <CheckBoxItem wAuto marginBottom title="LED-Tagfahrlicht" />
            <CheckBoxItem wAuto marginBottom title="Lederausstattung" />
            <CheckBoxItem wAuto marginBottom title="Lederlenkrad" />
            <CheckBoxItem wAuto marginBottom title="Lichtsensor" />
            <CheckBoxItem wAuto marginBottom title="Lordosenstütze" />
            <CheckBoxItem wAuto marginBottom title="Luftfederung" />
            <CheckBoxItem wAuto marginBottom title="Markise" />
            <CheckBoxItem wAuto marginBottom title="Massagesitze" />
            <CheckBoxItem wAuto marginBottom title="MP3" />
            <CheckBoxItem wAuto marginBottom title="Müdigkeitswarnsystem" />
            <CheckBoxItem wAuto marginBottom title="Multifunktionslenkrad" />
            <CheckBoxItem wAuto marginBottom title="Musikstreaming integriert" />
            <CheckBoxItem wAuto marginBottom title="Nachtsicht-Assistent" />
            <CheckBoxItem wAuto marginBottom title="Navigationssystem" />
            <CheckBoxItem wAuto marginBottom title="Nebelscheinwerfer" />
            <CheckBoxItem wAuto marginBottom title="Notbremsassistent" />
            <CheckBoxItem wAuto marginBottom title="Notrad" />
            <CheckBoxItem wAuto marginBottom title="Notrufsystem" />
            <CheckBoxItem wAuto marginBottom title="Pannenkit" />
            <CheckBoxItem wAuto marginBottom title="Panoramadach" />
            <CheckBoxItem wAuto marginBottom title="Radio" />
            <CheckBoxItem wAuto marginBottom title="Raucherpaket" />
            <CheckBoxItem wAuto marginBottom title="Rechtslenker" />
            <CheckBoxItem wAuto marginBottom title="Regensensor" />
            <CheckBoxItem wAuto marginBottom title="Reichweitenverlängerer" />
            <CheckBoxItem wAuto marginBottom title="Reifendruckkontrollsystem" />
            <CheckBoxItem wAuto marginBottom title="Reserverad" />
            <CheckBoxItem wAuto marginBottom title="Schaltwippen" />
            <CheckBoxItem wAuto title="Scheinwerferreinigung" />
          </div>
          <div className="w-1/3">
            <CheckBoxItem wAuto marginBottom title="Schiebedach" />
            <CheckBoxItem wAuto marginBottom title="Schiebetür" />
            <CheckBoxItem wAuto marginBottom title="Schiebetür links" />
            <CheckBoxItem wAuto marginBottom title="Schiebetür rechts" />
            <CheckBoxItem wAuto marginBottom title="Schlüssellose Zentralverriegelung" />
            <CheckBoxItem wAuto marginBottom title="Seitenairbag" />
            <CheckBoxItem wAuto marginBottom title="Servolenkung" />
            <CheckBoxItem wAuto marginBottom title="Sitzbelüftung" />
            <CheckBoxItem wAuto marginBottom title="Sitzheizung" />
            <CheckBoxItem wAuto marginBottom title="Skisack" />
            <CheckBoxItem wAuto marginBottom title="Sommerreifen" />
            <CheckBoxItem wAuto marginBottom title="Soundsystem" />
            <CheckBoxItem wAuto marginBottom title="Spoiler" />
            <CheckBoxItem wAuto marginBottom title="Sportfahrwerk" />
            <CheckBoxItem wAuto marginBottom title="Sportpaket" />
            <CheckBoxItem wAuto marginBottom title="Sportsitze" />
            <CheckBoxItem wAuto marginBottom title="Sprachsteuerung" />
            <CheckBoxItem wAuto marginBottom title="Spurhalteassistent" />
            <CheckBoxItem wAuto marginBottom title="Stahlfelgen" />
            <CheckBoxItem wAuto marginBottom title="Standheizung" />
            <CheckBoxItem wAuto marginBottom title="Start/Stop-Automatik" />
            <CheckBoxItem wAuto marginBottom title="Tagfahrlicht" />
            <CheckBoxItem wAuto marginBottom title="Taxi oder Mietwagen" />
            <CheckBoxItem wAuto marginBottom title="teilb. Rücksitzbank" />
            <CheckBoxItem wAuto marginBottom title="Tempomat" />
            <CheckBoxItem wAuto marginBottom title="Totwinkel-Assistent" />
            <CheckBoxItem wAuto marginBottom title="Tochscreen" />
            <CheckBoxItem wAuto marginBottom title="Traktionskontrolle" />
            <CheckBoxItem wAuto marginBottom title="Tuning" />
            <CheckBoxItem wAuto marginBottom title="TV" />
            <CheckBoxItem wAuto marginBottom title="Umklappbarer Beifahrersitz" />
            <CheckBoxItem wAuto marginBottom title="USB" />
            <CheckBoxItem wAuto marginBottom title="Verkehrszeichenerkennung" />
            <CheckBoxItem wAuto marginBottom title="Voll-LED Scheinwerfer" />
            <CheckBoxItem wAuto marginBottom title="Volldigitales Kombiinstrument" />
            <CheckBoxItem wAuto marginBottom title="W-Lan / Wifi Hotspot" />
            <CheckBoxItem wAuto marginBottom title="Wegfahrsperre" />
            <CheckBoxItem wAuto marginBottom title="Windschott (Cabrio)" />
            <CheckBoxItem wAuto marginBottom title="Winterpaket" />
            <CheckBoxItem wAuto marginBottom title="Winterreifen" />
            <CheckBoxItem wAuto marginBottom title="Xenonscheinwerfer" />
            <CheckBoxItem wAuto marginBottom title="Zentralverriegelung" />
            <CheckBoxItem wAuto title="Zentralverriegelung mit Funkfernbedienung" />
          </div>
        </div>
        <button className="font-bold py-8 text-xs flex items-center">
          <img className="w-6 opacity-80 mr-2" src='/images/icons/remove-minus-icon.png' />
          Ungenutzte Filter ausblenden
        </button>
      </div>
    </div>
  );
}
