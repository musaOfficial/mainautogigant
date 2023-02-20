import classes from './Impressum.module.css';
import { useState, useEffect } from "react";
import Expand from './../public/expand.svg';
import Link from 'next/link'
import Select from "react-select";
import Bin from './../public/bin.svg';
import Add from './../public/add.svg';
import Checked from './../public/checked.svg';
import Unchecked from './../public/unchecked.svg';
import CheckedRadio from './../public/checkedradio.svg';
import UncheckedRadio from './../public/uncheckedradio.svg';
import Closex from './../public/closex.svg';
import Check from './../public/hackerl.svg';
import BackHome from './../public/home.svg';
import FileIcon from './../public/file.svg';
function FAQ(){

    const [impressumOpen, setImpressumOpen] = useState(true);
    const [verbaucherAgbOpen, setVerbraucherAgbOpen] = useState(false);
    const [haendlerAgb, setHaendlerAgb] = useState(false);
    const [datenschutzOpen, setDatenschutzOpen] = useState(false);
    const [gestaltungOpen, setGestaltungOpen] = useState(false);
    const [datenschutzeinwilligungOpen, setDatenschutzeinwilligungOpen] = useState(false);


    // Questions
    const [question1, setQuestion1] = useState(false);
    const [question2, setQuestion2] = useState(false);
    const [question3, setQuestion3] = useState(false);
    const [question4, setQuestion4] = useState(false);
    const [question5, setQuestion5] = useState(false);
    const [question6, setQuestion6] = useState(false);
    const [question7, setQuestion7] = useState(false);

    const [gestaltung1, setGestaltung1] = useState(false);
    const [gestaltung2, setGestaltung2] = useState(false);


    return (
        <div className="bg-theme-gray-10 lg:px-6 md:!px-0">
            <div className={`w-10/12 lg:w-full max-w-ag-container ${classes.contentcontainer}`}>
                <div className={`${classes.top_row}`}>
                <span className={classes.leftrow}><BackHome className={classes.backhome} /> ../Impressum</span>
                </div>
                <div className={classes.row}>
                    <div className={classes.left}>
                        <div className={`${classes.sectionheader} ${impressumOpen == true && classes.sectionheaderopen}`} onClick={() => {
                            setImpressumOpen(d => !d);
                            setVerbraucherAgbOpen(false);
                            setHaendlerAgb(false);
                            setDatenschutzOpen(false);
                            setGestaltungOpen(false);
                            setDatenschutzeinwilligungOpen(false);
                        }}>
                            <div className={classes.leftpart}>
                                <FileIcon className={classes.fileicon} />
                                <span className={classes.filetext}>Impressum</span>
                            </div>
                            <Expand className={`${classes.unrotated} ${impressumOpen == true && classes.rotated}`} />
                        </div>
                        <div className={`${classes.sectionheader} ${verbaucherAgbOpen == true && classes.sectionheaderopen}`} onClick={() => {
                            setVerbraucherAgbOpen(d => !d);
                            setImpressumOpen(false);
                            setHaendlerAgb(false);
                            setDatenschutzOpen(false);
                            setGestaltungOpen(false);
                            setDatenschutzeinwilligungOpen(false);
                        }}>
                            <div className={classes.leftpart}>
                                <FileIcon className={classes.fileicon} />
                                <span className={classes.filetext}>Verbaucher-AGB</span>
                            </div>
                            <Expand className={`${classes.unrotated} ${verbaucherAgbOpen == true && classes.rotated}`} />
                        </div>
                        <div className={`${classes.sectionheader} ${haendlerAgb == true && classes.sectionheaderopen}`} onClick={() => {
                            setHaendlerAgb(d => !d)
                            setVerbraucherAgbOpen(false);
                            setImpressumOpen(false);
                            setDatenschutzOpen(false);
                            setGestaltungOpen(false);
                            setDatenschutzeinwilligungOpen(false);
                        }}>
                            <div className={classes.leftpart}>
                                <FileIcon className={classes.fileicon} />
                                <span className={classes.filetext}>Händler-AGB</span>
                            </div>
                            <Expand className={`${classes.unrotated} ${haendlerAgb == true && classes.rotated}`} />
                        </div>
                        <div className={`${classes.sectionheader} ${datenschutzOpen == true && classes.sectionheaderopen}`} onClick={() => {
                            setDatenschutzOpen(d => !d);
                            setGestaltungOpen(false);
                            setDatenschutzeinwilligungOpen(false);
                            setVerbraucherAgbOpen(false);
                            setImpressumOpen(false);
                            setHaendlerAgb(false);
                        }}>
                            <div className={classes.leftpart}>
                                <FileIcon className={classes.fileicon} />
                                <span className={classes.filetext}>Datenschutz</span>
                            </div>
                            <Expand className={`${classes.unrotated} ${datenschutzOpen == true && classes.rotated}`} />
                        </div>
                        <div className={`${classes.sectionheader} ${gestaltungOpen == true && classes.sectionheaderopen}`} onClick={() => {
                            setGestaltungOpen(d => !d);
                            setDatenschutzOpen(false);
                            setDatenschutzeinwilligungOpen(false);
                            setVerbraucherAgbOpen(false);
                            setImpressumOpen(false);
                            setHaendlerAgb(false);
                        }}>
                            <div className={classes.leftpart}>
                                <FileIcon className={classes.fileicon} />
                                <span className={classes.filetext}>Gestaltung von Anzeigen</span>
                            </div>
                            <Expand className={`${classes.unrotated} ${gestaltungOpen == true && classes.rotated}`} />
                        </div>
                        <div className={`${classes.sectionheader} ${datenschutzeinwilligungOpen == true && classes.sectionheaderopen}`} onClick={() => {
                            setDatenschutzeinwilligungOpen(d => !d);
                            setGestaltungOpen(false);
                            setDatenschutzOpen(false);
                            setVerbraucherAgbOpen(false);
                            setImpressumOpen(false);
                            setHaendlerAgb(false);
                        }}>
                            <div className={classes.leftpart}>
                                <FileIcon className={classes.fileicon} />
                                <span className={classes.filetext}>Datenschutzeinwilligung</span>
                            </div>
                            <Expand className={`${classes.unrotated} ${datenschutzeinwilligungOpen == true && classes.rotated}`} />
                        </div>
                    </div>
                    <div className={classes.right}>
                        {impressumOpen == true && <div className={classes.basiscontainer}>
                            <div className={classes.heading}>Impressum</div>
                            <div className={classes.date}>Stand 01.01.2023</div>
                            <p className={classes.description}>
                            Die Plattform AutoGigant.at wird von Hasan Güler e.U., mit Sitz in Wiener Straße 90, A-2700 Wiener Neustadt, betrieben. Hasan Güler fungiert als verantwortliche Person im Sinne der geltenden Datenschutzgesetze. Diese Datenschutzinformation informiert dich darüber, welche personenbezogenen Daten wir bei Nutzung von AutoGigant.at erheben und wie wir damit umgehen.
Du kannst diese Information jederzeit unter der Rubrik "Datenschutz" auf der Website einsehen.
                            </p>
                        </div>}
                        {datenschutzOpen == true && <div className={classes.basiscontainer}>
                            <div className={classes.heading}>Datenschutz</div>
                            <div className={classes.date}>Stand 01.01.2023</div>
                            <div className={classes.description}>
                            Die Plattform AutoGigant.at wird von Hasan Güler e.U., mit Sitz in Wiener Straße 90, A-2700 Wiener Neustadt, betrieben. Hasan Güler fungiert als verantwortliche Person im Sinne der geltenden Datenschutzgesetze. Diese Datenschutzinformation informiert dich darüber, welche personenbezogenen Daten wir bei Nutzung von AutoGigant.at erheben und wie wir damit umgehen.
Du kannst diese Information jederzeit unter der Rubrik "Datenschutz" auf der Website einsehen.
                            </div>
                            <div className={classes.question} onClick={() => setQuestion1(d => !d)}>
                                <div className='flex'>
                                    <span className={classes.point}>1.</span>
                                    <span>Welche Art von personenbezogenen Daten verarbeitet AutoGigant.at, wenn du die Plattform nutzt?</span>
                                </div>
                                <Expand className={`${classes.expandor} ${question1 == true && classes.unexpandor}`} />
                            </div>
                            {question1 == true && <div className={classes.basistext}>
                            AutoGigant.at ist eine Online-Plattform, die sich an Anbieter und Interessenten von Fahrzeugen und deren Finanzierung richtet. In der Regel können Sie unsere Seite besuchen, ohne sich registrieren zu müssen und uns dabei aktiv personenbezogene Informationen zu übermitteln. In solch einem Fall sammeln wir lediglich die folgenden Daten:<br></br><br></br>
-	Der Name der Seite oder Datei, die Sie angefordert haben, oder von Ihnen im Zusammenhang mit Eingaben übermittelte Informationen (z.B. Queryparameter in der URL);<br></br>
-	Der Name der Seite, von der aus die aktuelle Seite oder Datei angefordert wurde;<br></br>
-	Das Datum und die Uhrzeit der Anfrage;<br></br>
-	Die übertragene Datenmenge;<br></br>
-	Der Zugriffsstatus (Seite übertragen, Seite nicht gefunden usw.);<br></br>
-	Der Typ und das Betriebssystem des verwendeten Webbrowsers;<br></br>
-	Die IP-Adresse des Clients und gegebenenfalls der Domainname oder der Name des Internet-Service-Providers;<br></br>
-	Statistiken zu Seitenaufrufen, Verkehrsdaten und Werbedaten (jeweils über Cookies – siehe unten unter Cookies)."<br></br><br></br>
<div className={classes.textheading}>1.1 Registrierung bei AutoGigant.at</div><br></br>
Wenn Sie sich entscheiden, aktiv am Marktplatz teilzunehmen, ist eine Registrierung erforderlich, bei der wir folgende Daten von Ihnen erheben:<br></br><br></br>
<strong>Als Anbieter</strong>: E-Mail-Adresse und Passwort, Vorname, Nachname, Straße und Hausnummer, Postleitzahl und Ort, Vorwahl und Telefonnummer<br></br><br></br>

<strong>Als gewerblicher Anbieter</strong>: Anrede, Vor- und Nachname, Adresse, E-Mail-Adresse und Telefonnummer, Firmenname, USt-IdNr., Benutzername, Mobilfunknummer (optional), Fax (optional). Außerdem der Ansprechpartner für Vertragsangelegenheiten, eine abweichende Rechnungsadresse und eine abweichende Geschäftsadresse, falls angegeben.<br></br><br></br>
<strong>Als Nachfrager</strong>: E-Mail-Adresse und Passwort, Anrede, Nachname, Vorname, Postleitzahl, aktueller Fahrzeugbesitz, Kundentyp (privat/gewerblich)"<br></br><br></br>
<div className={classes.textheading}>1.2 Daten, die Sie bei AutoGigant.at eingeben</div><br></br>
Je nachdem, wie Sie die Plattform nutzen, erheben wir weitere Daten, die Sie in unserer Plattform eingeben. Sie sind nicht verpflichtet, diese Angaben zu machen; ohne diese Daten können Sie die jeweilige Funktion möglicherweise jedoch nicht nutzen. Wir informieren Sie hier über Daten, die wir im Zusammenhang mit Ihrer Nutzung der Plattform erheben.<br></br><br></br>

Als Nutzer der <strong>Fahrzeugsuche-Funktion</strong>: Informationen über die Art des gesuchten Fahrzeugs (Marke, Modell, Preis, Erstzulassung, Kilometerstand, Leistung, Fahrzeugzustand und vergleichbare Daten).<br /><br />
Als Nutzer das <strong>Verkaufen/Inserieren-Funktion</strong>: Informationen über die Art des angebotenen Fahrzeugs (Fahrzeugart, Hersteller, Typ, Modell, Preis, Erstzulassung, Kilometerstand, Leistung, Fahrzeugzustand, Fahrzeugidentifikationsnummer (FIN), Fotos und vergleichbare Daten), sowie Informationen über das Inserat (Laufzeit).<br /><br />
Als Nutzer der <strong>Express-Verkauf-Funktion</strong>: Informationen über die Art des angebotenen Fahrzeugs (Fahrzeugart, Hersteller, Typ, Modell, Preis, Erstzulassung, Kilometerstand, Leistung, Fahrzeugzustand, Fotos und vergleichbare Daten). Anrede, Vor- und Nachname, Adresse, E-Mail-Adresse und Telefonnummer zum Zweck der telefonischen Kontaktaufnahme durch das Beratungsteam von AutoGigant.at und der Erstellung der Kaufvertragsvorlage, sowie die Fahrzeugidentifikationsnummer (FIN) zur Ermittlung der Fahrzeugbewertung.<br /><br />
Als Nutzer der <strong>Direkt-Verkauf-Funktion</strong>: Informationen über die Art des angebotenen Fahrzeugs (Fahrzeugart, Hersteller, Typ, Modell, Preis, Erstzulassung, Kilometerstand, Leistung, Fahrzeugzustand) sowie den vollständigen Namen, E-Mail-Adresse und die Telefonnummer. Diese Daten werden an den ausgewählten Händler übermittelt und bei AutoGigant.at temporär gespeichert.<br /><br />
Als Nutzer der <strong>Autokredit, Autoversicherung, Leasing-Funktionen</strong>: Benutzername und Passwort (nur bei Registrierung als Nachfrager), Anrede, Vor- und Nachname, Adresse und E-Mail-Adresse; Daten zur Darlehnsberechnung, Finanzierungsanfragen oder -anträge. Diese werden an die Finanzdienstleister übermittelt und zu Abrechnungszwecken temporär gespeichert.<br /><br />
Als Nutzer des <strong>Werkstatt-Bereichs</strong>: E-Mail-Adresse, Automarke, Leistung, Postleitzahl/Ort, weitere Fahrzeugdaten (Modell, Erstzulassung usw.).<br /><br />
Als Nutzer von  <strong>Kontaktformularen</strong>: Anrede, Vor- und Nachname, Adresse, E-Mail-Adresse und Telefonnummer sowie weitere Angaben zur Kontaktaufnahme<br /><br />
Als Nutzer von <strong>Kontaktformularen in Finanzkalkulator-Integrationen</strong>: Anrede, Vor- und Nachname, Adresse, E-Mail-Adresse und Telefonnummer sowie weitere Angaben zur Kontaktaufnahme. Diese werden an die Finanzdienstleister übermittelt und bei AutoGigant.at für 4 Wochen temporär gespeichert.<br /><br />
Als Abonnent von <strong>Newslettern und Mailings</strong>: E-Mail-Adresse sowie, falls bei der Registrierung als Anbieter angegeben, Vor- und Nachname zur Anrede, weitere Daten wie Postleitzahl zur Personalisierung von lokalen Angeboten, sowie weitere Personalisierung basierend auf Konsumentenverhalten (z.B. Suchhistorie, Inseratsinhalte). Um den Newsletter an Ihre Interessen und Wünsche anzupassen, werden die Klicks auf Links in dem E-Mail-Newsletter registriert und gespeichert.<br /><br />
Als Teilnehmer von <strong>Gewinnspielen im Rahmen von Online-Umfragen</strong>: Wir erheben Anrede, Vor- und Nachname und E-Mail-Adresse zum Zweck der Verlosung und der Kontaktaufnahme mit den Gewinnern.<br /><br />
Als Teilnehmer von <strong>Probefahrten im Rahmen von Fahrzeug-Markteinführungen (AutoGigant.at TestDriver Wanted)</strong>: Wir erheben Anrede, Vor- und Nachname, E-Mail-Adresse und Telefonnummer zum Zweck der Kontaktaufnahme durch den Hersteller und seinen Vertragshändler. Die Daten werden bei AutoGigant.at und dem beauftragenden Hersteller gespeichert.<br /><br />
Als Teilnehmer von <strong>Nutzer-Tests, rekrutiert durch Online-Umfragen</strong>: Wir erheben Anrede, Vor- und Nachname und E-Mail-Adresse zum Zweck der Kontaktaufnahme.<br /><br />
Als Nutzer von <strong>GIGA360</strong>: Vor- und Nachname, E-Mail-Adresse.<br /><br />
Als Nutzer der <strong>Online-Händlerregistrierung</strong>: Anrede, Vor- und Nachname, Adresse, E-Mail-Adresse und Telefonnummer, Firmenname, USt-IdNr., Benutzername, Mobilfunknummer (optional), Fax (optional). Sowie Ansprechpartner für Vertragsfragen, abweichende Rechnungsadresse und abweichende Geschäftsadresse, falls angegeben.<br /><br />
Als Nutzer des <strong>Händler Exklusivangebots</strong>: Angebotstext, Enddatum des Angebots.<br /><br />
Als Nutzer der <strong>Händler E-Mail-Verwaltung</strong>: Anrede, Position, Vor- und Nachname, E-Mail-Adresse, Benachrichtigungstyp.<br /><br />
Als Teilnehmer von <strong>Online-Umfragen als Händler</strong>:
-	Die Auswertung unserer Umfragen wird im Allgemeinen pseudonymisiert durchgeführt. 
-	In Einzelfällen kann jedoch eine Zuordnung der Antworten aus einer Umfrage zu personenbezogenen Informationen wie Vertragsdaten oder Nutzungsdaten von Produkten erfolgen, um die Qualität zu sichern oder spezielle Analysen bestimmter Kundengruppen durchzuführen (z.B. Vergleich von Kunden, die verschiedene Produkte gebucht haben). Die Angaben aus den Umfragen werden in diesen Fällen jedoch aggregiert, d.h. nur zusammen mit den Antworten anderer Teilnehmer einer Kundengruppe ausgewertet.
<br /><br />
<div className={classes.textheading}>1.3 Daten, die wir bei Dritte erheben</div><br></br>
Von Zeit zu Zeit sammeln wir Daten über Händler aus öffentlichen Verzeichnissen wie mobile.de, pkw.de, Gelbe Seiten, ebaykleinanzeigen.de usw. Diese Daten sind frei zugänglich und auf den entsprechenden Seiten angegeben, zum Beispiel Beschreibungen des Autos (Marke, Modell, Verkaufspreis) oder Informationen über den Händler (Firmenanschrift, Kontaktdaten wie Telefonnummer). Wir verwenden diese Daten ausschließlich in Übereinstimmung mit den aktuellen Datenschutzgesetzen.<br></br><br></br>

                            </div>}
                            <div className={classes.question} onClick={() => setQuestion2(d => !d)}>
                                <div className='flex'>
                                    <span className={classes.point}>2.</span>
                                    <span>Wozu werden Ihre Daten von AutoGigant.at verwendet und auf welcher rechtlichen Grundlage erfolgt die Verarbeitung?</span>
                                </div>
                                <Expand className={`${classes.expandor} ${question2 == true && classes.unexpandor}`} />
                            </div>
                            {question2 == true && <div className={classes.basistext}>
                            Wir verarbeiten Ihre Daten hauptsächlich, um Ihnen das Angebot und die damit verbundenen Services und Funktionen zur Verfügung zu stellen. Daneben erfolgen weitere Verarbeitungen für weitere Zwecke, die wir zusammen mit den jeweiligen Rechtsgrundlagen nachfolgend darstellen. Unter anderen verwenden wir auf der Plattform verschiedene Verfahren zur Nutzungsanalyse und zur Ausspielung von Online-Werbung (beides auch unter Einsatz von Cookies). Außerdem verarbeiten wir Daten zu Zwecken der Direktwerbung mittels E-Mail und zu Sicherheits- und Rechtsverfolgungszwecken.<br></br><br></br>
                            <div className={classes.textheading}>2.1 Bereitstellung des Portals</div>
                            Wir nutzen Ihre Daten, um Ihnen das Angebot und die damit verbundenen Funktionen und Services zur Verfügung zu stellen. Wenn Sie das Kontaktformular innerhalb unserer Plattform nutzen, um mit Inserenten in Kontakt zu treten, werden Ihre Kontaktdaten an die Inserenten weitergeleitet.

Wir speichern und verarbeiten die von Ihnen übermittelten Fahrzeugdaten (wie Fahrzeugtyp, Hersteller, Modell, Preis, Erstzulassung, Kilometerstand, Leistung, Fahrzeugzustand, FIN) auch für statistische Auswertungen und deren Veröffentlichung über die Dauer der Anzeige hinaus.

Um sicherzustellen, dass möglichst viele Interessenten Ihre Angebote/Inserate sehen, teilen wir diese manchmal auch über kooperierende Autobörsen/Websites. Das bedeutet, dass wir die in Ihrem Inserat angezeigten Daten an die kooperierenden Plattformen weitergeben. Wir senden Ihre Inserate auch per Benachrichtigungsemail an Interessenten, die einen Suchauftrag abonniert haben, und teilen sie in sozialen Medien wie Facebook.
<br></br><br></br>In einigen Bereichen unserer Plattform ermöglichen wir es Ihnen, Dienstleistungen von Partner- und Drittunternehmen, die Sie über unsere Plattform gefunden haben, zu bewerten, um anderen Nutzern als Orientierungshilfe zu dienen. Wir senden Ihnen in diesem Fall eine E-Mail, in der wir Sie um die Abgabe einer solchen Bewertung bitten.

Wir verarbeiten Ihre Daten auch, um vertragliche Verpflichtungen zu erfüllen und um Transaktionen abzuwickeln, etwa indem wir Rechnungen versenden oder bei auftretenden Problemen Kontakt mit Ihnen aufnehmen.
Die Verarbeitung Ihrer Daten basiert auf gesetzlichen Vorschriften, die es uns gestatten, personenbezogene Daten zu verarbeiten, wenn dies für die Nutzung eines Dienstes oder die Erfüllung eines Vertrages erforderlich ist (z.B. § 15 Abs. 1 TMG; Art. 6 Abs. 1 b) DSGVO), oder wenn AutoGigant.at ein überwiegendes berechtigtes Interesse daran hat, die Nutzung der Plattform so einfach und effizient wie möglich zu gestalten (Art. 6 Abs. 1 f) DSGVO). In manchen Fällen bitten wir auch um Ihre Einwilligung zur Verarbeitung Ihrer Daten (Art. 6 Abs. 1 a) DSGVO).

                            <br></br><br></br>
                            <div className={classes.textheading}>2.2 Um unsere Plattform für Sie zu optimieren und Ihre Bedürfnisse besser zu verstehen, führen wir statistische Auswertungen durch und nutzen Cookies, um die Gestaltung unserer Plattform an Ihre Bedürfnisse anzupassen.</div>
        
                            Um unsere Plattform für Sie zu optimieren und Ihre Bedürfnisse besser zu verstehen, erstellen wir Nutzungsprofile unter Verwendung von Pseudonymen. Dies geschieht zu Zwecken der statistischen Auswertung und der an Ihre Bedürfnisse angepassten Gestaltung unseres Angebots. Die Verarbeitung Ihrer Daten basiert auf gesetzlichen Vorschriften, die es uns gestatten, personenbezogene Daten zu verarbeiten, da AutoScout24 ein überwiegendes berechtigtes Interesse an einer an Ihren Nutzungsgewohnheiten ausgerichteten und bedarfsgerechten Gestaltung unseres Angebots sowie der statistischen Auswertung hat (u.a. § 15 Abs. 3 TMG, Art. 6 Abs. 1 f) DSGVO).
                            <br></br><br></br>
Um Nutzungsprofile zu erstellen und unsere Plattform für Sie zu optimieren, verwenden wir sogenannte Cookies, die alphanumerische Identifikationszeichen darstellen, die wir mithilfe Ihres Web-Browsers an Ihren Computer senden. Sie ermöglichen es unseren Systemen, Ihren Browser vorübergehend von anderen zu unterscheiden. Zu diesem Zweck senden wir Ihnen auch persistente Cookies, die es uns ermöglichen, die von Ihnen im Rahmen unserer Autodatenbank eingegebenen Gesuchskriterien mitzuschreiben und für unsere internen Auswertungen zu speichern.<br></br><br></br>

Wir verwenden auch sogenannte Session-Cookies, die es uns ermöglichen, Ihnen während Ihres Besuchs auf unserer Seite eine Session-ID zu vergeben, mit deren Hilfe wir Sie als anonymen Nutzer wiedererkennen können. Dadurch können wir Ihnen Kontinuität während Ihres Besuchs bieten und sicherstellen, dass Sie nicht immer wieder mit den gleichen Werbeanzeigen konfrontiert werden. Der Session-Cookie und Ihre Session-ID werden am Ende Ihres Besuchs auf unserer Seite gelöscht.<br></br><br></br>
Sie können das Setzen von Cookies verhindern, indem Sie die Cookies in Ihrem Webbrowser deaktivieren. Die Hilfe-Funktion in der Menüleiste der meisten Webbrowser erklärt Ihnen, wie Sie Ihren Browser so einstellen, dass er keine oder nur eingeschränkt Cookies akzeptiert. Sie erfahren auch, wie Sie Ihren Browser so konfigurieren können, dass Sie benachrichtigt werden, wenn Ihnen ein Cookie angeboten wird. Bedauerlicherweise können Sie die volle Funktionalität unserer Website nur nutzen und erleben, wenn Sie die Annahme von Cookies aktiviert haben.

Um Ihnen die volle Funktionalität unserer Plattform bieten zu können, empfehlen wir Ihnen, die Cookiefunktion Ihres Browsers während Ihres Besuchs auf unseren Seiten eingeschaltet zu lassen. Wenn Sie Ihren Computer mit anderen teilen und der Browser des Rechners so eingestellt ist, dass er Cookies akzeptiert, empfehlen wir Ihnen außerdem, sich immer vollständig abzumelden, wenn Sie den Computer nicht mehr nutzen. Wenn Sie Cookies nicht akzeptieren, ist es uns leider nicht möglich, Ihnen alle Funktionen und Services unserer Plattform zur Verfügung zu stellen.

Um unsere Plattform für Sie zu optimieren und für Zwecke der statistischen Auswertung nutzen zu können, setzen wir - vorausgesetzt, dass Sie dem nicht widersprochen haben - unterschiedliche Verfahren ein.<br></br><br></br>
{/* <a href="https://www.comscore.com/ger/Ueber-Uns/Datenschutzerklaerung" className={classes.link}>https://www.comscore.com/ger/Ueber-Uns/Datenschutzerklaerung</a> und <br></br><a href="http://www.scorecardresearch.com/privacy.aspx?newLanguage=3" className={classes.link}>http://www.scorecardresearch.com/privacy.aspx?newLanguage=3</a>. 

<br></br>Die Möglichkeit zum Opt-Out finden Sie unter <a href="http://www.scorecardresearch.com/preferences.aspx" className={classes.link}>http://www.scorecardresearch.com/preferences.aspx</a>. */}
<div className={classes.textheading}>2.2.1 Adjust</div>
                        
                            Wir nutzen den App-Analysedienst von Adjust GmbH (Saarbrücker Str. 38a, 10405 Berlin) zur Analyse der Nutzung unserer App. Der Adjust-Dienst wurde von der ePrivacyseal GmbH nach dem ePrivacyseal (European Seal for your Privacy) geprüft und zertifiziert (siehe <a href="http://www.eprivacy.eu/vergebene-siegel/" className={classes.link}>http://www.eprivacy.eu/vergebene-siegel/</a>). Die bei der Nutzung der App gesammelten Informationen werden verwendet, um die Funktion und Nutzung der App zu analysieren, indem anonymisierte Auswertungen und Grafiken zum Nutzungsverhalten erstellt werden. Diese Analysen werden ausschließlich zu Marktforschungszwecken und zur Optimierung und angepassten Gestaltung der App verwendet. Dabei werden Ihre IP- und Mac-Adresse genutzt, die unmittelbar nach der Übermittlung anonymisiert werden und keine Rückschlüsse auf Ihre Person ermöglichen. Nähere Informationen zum Datenschutz von Adjust finden Sie unter <a href="https://www.adjust.com/privacy-policy" className={classes.link}>https://www.adjust.com/privacy-policy</a>/. 
                            <br></br>
                            <br></br>
                            Sie haben die Möglichkeit, sich von der Analyse auszuschließen, indem Sie den Link <a href="https://www.adjust.com/opt-out/" className={classes.link}>https://www.adjust.com/opt-out/</a> nutzen.
                            <br></br>
                            <br></br>
                            <div className={classes.textheading}>2.2.2 comScore</div>
                            Auf unserer Plattform ist der Tracking-Dienst von ScorecardResearch integriert, einem Service von Full Circle Studies, Inc. (11950 Democracy Drive, Suite 600 Reston, VA 20190, USA), das Teil des Unternehmens <strong>comScore</strong>, Inc. (Marktforschungsgruppe) ist. Nähere Informationen zum Datenschutz von comScore finden Sie unter 
                            <br></br>
                            <br></br>
                            <a href="https://www.comscore.com/ger/Ueber-Uns/Datenschutzerklaerung" className={classes.link}>https://www.comscore.com/ger/Ueber-Uns/Datenschutzerklaerung</a> und <br></br><a href="http://www.scorecardresearch.com/privacy.aspx?newLanguage=3" className={classes.link}>http://www.scorecardresearch.com/privacy.aspx?newLanguage=3</a>. 

<br></br>Die Möglichkeit zum Opt-Out finden Sie unter<br></br> <a href="http://www.scorecardresearch.com/preferences.aspx" className={classes.link}>http://www.scorecardresearch.com/preferences.aspx</a>.
                            <br></br>
                            <br></br>
                            <div className={classes.textheading}>2.2.3 Crashlytics</div>
                            Um unsere Apps zu verbessern, arbeiten wir mit Crashlytics (Google Ireland Limited, Gordon House, Barrow Street, Dublin 4, Ireland) zusammen. Das Crashlytics-Tool erfasst Daten zur Nutzung der App in Bezug auf Systemabstürze und Fehler. Dabei werden Informationen über das verwendete Gerät, die installierte App-Version und andere Informationen über die Software und Hardware des von Ihnen verwendeten mobilen Geräts erhoben und zur Fehlerbehebung verwendet. Nähere Informationen zum Datenschutz von Crashlytics finden Sie unter <a href="https://try.crashlytics.com/terms/privacy-policy.pdf" className={classes.link}>https://try.crashlytics.com/terms/privacy-policy.pdf</a>. Sie können Ihren Löschungsantrag an <a href="support@crashlytics.com" className={classes.link}></a> senden (siehe <a href="http://try.crashlytics.com/terms/" className={classes.link}>http://try.crashlytics.com/terms/</a>).
                            <br></br>
                            <br></br>
                            <div className={classes.textheading}>2.2.4 Google Analytics</div>
                            Diese Webseite verwendet Google Analytics, einen Webanalysedienst von Google Inc. ("Google"). Google Analytics setzt Cookies ein, d.h. Textdateien, die auf Ihrem Computer gespeichert werden und die eine Analyse Ihrer Nutzung der Webseite ermöglichen. Die durch die Cookies erzeugten Informationen über Ihre Nutzung dieser Webseite werden in der Regel an einen Server von Google in den USA übertragen und dort gespeichert. Durch die Aktivierung der IP-Anonymisierung auf diesen Webseiten wird Ihre IP-Adresse von Google jedoch innerhalb von Mitgliedstaaten der Europäischen Union oder in anderen Vertragsstaaten des Abkommens über den Europäischen Wirtschaftsraum vorher gekürzt. Nur in Ausnahmefällen wird die volle IP-Adresse an einen Server von Google in den USA übertragen und dort gekürzt. Diese Übertragung der Daten erfolgt aufgrund einer entsprechenden EU-US-Privacy-Shield-Zertifizierung von Google, die unter <a href="https://www.privacyshield.gov/participant?id=a2zt000000001L5AAI" className={classes.link} >https://www.privacyshield.gov/participant?id=a2zt000000001L5AAI</a> eingesehen werden kann.<br /> <br />
                            Google wird im Auftrag des Betreibers dieser Webseite diese Informationen nutzen, um Ihre Nutzung der Webseite auszuwerten, um Reports über die Webseitenaktivitäten zusammenzustellen und um weitere Dienstleistungen im Zusammenhang mit der Webseitennutzung und der Internetnutzung dem Betreiber der Webseite zur Verfügung zu stellen. Die von Ihrem Browser im Rahmen von Google Analytics übermittelte IP-Adresse wird nicht mit anderen Daten von Google zusammengeführt. Sie können die Erfassung der durch das Cookie erzeugten und auf Ihre Nutzung der Webseite bezogenen Daten (einschließlich Ihrer IP-Adresse) durch Google sowie die Verarbeitung dieser Daten durch Google verhindern, indem Sie das unter dem 
                            <br /> <br />
                            folgenden Link verfügbare Browser-Plugin herunterladen und installieren: <a href="http://tools.google.com/dlpage/gaoptout?hl=de" className={classes.link}>http://tools.google.com/dlpage/gaoptout?hl=de</a>.
                            <br /> <br />
                            Nähere Informationen zu Nutzungsbedingungen und Datenschutz finden Sie unter <a href="http://www.google.com/analytics/terms/de.html" className={classes.link} >http://www.google.com/analytics/terms/de.html</a> und <a href='https://www.google.de/intl/de/policies/' className={classes.link} >https://www.google.de/intl/de/policies/</a>. Wir möchten darauf hinweisen, dass auf dieser Webseite Google Analytics um den Code "gat._anonymizeIp();" erweitert wurde, um eine anonymisierte Erfassung von IP-Adressen (sog. IP-Masking) zu gewährleisten.
                            <br /> <br />
                            Die Verwendung von Google Analytics basiert auf unserem berechtigten Interesse an einer ansprechenden Gestaltung, der statistischen Auswertung sowie der effektiven Bewerbung unserer Webseite und dem Umstand, dass Ihre berechtigten Interessen nicht überwiegen (Art. 6 Abs. 1 lit. f DSGVO).
                            <br></br><br></br>
                            </div>}
                            <div className={classes.question} onClick={() => setQuestion3(d => !d)}>
                                <div className='flex'>
                                    <span className={classes.point}>3.</span>
                                    <span>An wen geben wir Ihre Daten weiter?</span>
                                </div>
                                <Expand className={`${classes.expandor} ${question3 == true && classes.unexpandor}`} />
                            </div>
                            <div className={classes.question} onClick={() => setQuestion4(d => !d)}>
                                <div className='flex'>
                                    <span className={classes.point}>4.</span>
                                    <span className={classes.questiontext}>Für wie lange speichern wir Ihre Daten?</span>
                                </div>
                                <Expand className={`${classes.expandor} ${question4 == true && classes.unexpandor}`} />
                            </div>
                            <div className={classes.question} onClick={() => setQuestion5(d => !d)}>
                                <div className='flex'>
                                    <span className={classes.point}>5.</span>
                                    <span className={classes.questiontext}>Welche Rechte haben Sie als betroffene Person?</span>
                                </div>
                                <Expand className={`${classes.expandor} ${question5 == true && classes.unexpandor}`} />
                            </div>
                            <div className={classes.question} onClick={() => setQuestion6(d => !d)}>
                                <div className='flex'>
                                    <span className={classes.point}>6.</span>
                                    <span className={classes.questiontext}>Was sollten Sie beim Umgang mit den Daten anderer Nutzer beachten?</span>
                                </div>
                                <Expand className={`${classes.expandor} ${question6 == true && classes.unexpandor}`} />
                            </div>
                            <div className={classes.question} onClick={() => setQuestion7(d => !d)}>
                                <div className='flex'>
                                    <span className={classes.point}>7.</span>
                                    <span className={classes.questiontext}>Änderungen an dieser Datenschutzerklärung</span>
                                </div>
                                <Expand className={`${classes.expandor} ${question7 == true && classes.unexpandor}`} />
                            </div>
                        </div>}
                        {datenschutzeinwilligungOpen == true && <div className={classes.basiscontainer}>
                            <div className={classes.heading}>Datenschutzeinwilligung</div>
                            <div className={classes.date}>Stand 01.01.2023</div>
                            <div className={classes.description}>
                            1. Ich willige ein, dass AutoGigant.at („Hasan Güler e.U.“) meine E-Mail-Adresse für Werbung von 
AutoGigant.at nutzen darf, wozu Werbung im Zusammenhang mit dem Verkauf, Kauf und Besitz 
von Fahrzeugen gehört, wie zum Beispiel Informationen zum Fahrzeugwert, interessante Angebote 
und Versicherungen/Finanzierungen für den Fahrzeugbesitz. 
<br/> <br/>
2. Ich bin damit einverstanden, dass AutoGigant.at meine Registrierungsdaten mit meinen 
Bewegungsdaten auf der Website und in der mobilen App von AutoGigant.at 
(aufgerufene Seiten, angeklickte Inhalte usw.) und Daten aus Marketing-Kampagnen oder 
zusätzlichen Services (z.B. Fahrzeugdaten bei der Fahrzeugbewertung, Suchparameter bei 
Suchaufträgen oder gemerkte Fahrzeuge auf dem Merkzettel) zusammenführt, um mir auf 
dieser Website/in dieser mobilen App interessante Werbeangebote anzeigen zu können und
 mir mithilfe der in Absatz 1 genannten E-Mail-Werbung besonders interessengerechte 
Angebote zu machen.
<br/> <br/>
3. Ich kann diese Einwilligung jederzeit mit Wirkung für die Zukunft widerrufen, indem ich eine 
schriftliche Erklärung an AutoGigant.at („Hasan Güler e.U.“), Wiener Straße 90, 
A-2700 Wiener Neustadt, per E-Mail an <span className={classes.link}>widerspruch@autogigant.at</span> schicke. 
Weitere Hinweise zur Verwendung meiner Daten finde ich in den <span className={classes.link}>Datenschutzinformationen</span>.

                            </div>
                        </div>}
                        {gestaltungOpen == true && <div className={classes.basiscontainer}>
                            <div className={classes.heading}>Gestaltung von Anzeigen</div>
                            <div className={classes.date}>Stand 01.01.2023</div>
                            <div className={classes.description}>Anforderungen an die Gestaltung von Anzeigen auf der Internetseite www.autogigant.at durch den Nutzer.</div>
                            <div className={classes.question} onClick={() => setGestaltung1(d => !d)}>
                                <div className='flex'>
                                    <span className={classes.point}>§ 1</span>
                                    <span>Anforderung an Texte</span>
                                </div>
                                <Expand className={`${classes.expandor} ${gestaltung1 == true && classes.unexpandor}`} /> 
                            </div>
                            <div className={classes.question} onClick={() => setGestaltung2(d => !d)}>
                                <div className='flex'>
                                    <span className={classes.point}>§ 2</span>
                                    <span>Anforderung an Bildern</span>
                                </div>
                                <Expand className={`${classes.expandor} ${gestaltung2 == true && classes.unexpandor}`} />
                            </div>
                        </div>}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FAQ;