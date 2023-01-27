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
function Impressum(){

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
                            <div className={classes.question} onClick={() => setQuestion1(d => !d)}>
                                <div className='flex'>
                                    <span className={classes.point}>1.</span>
                                    <span>Welche Art von personenbezogenen Daten verarbeitet AutoGigant.at, wenn du die Plattform nutzt?</span>
                                </div>
                                <Expand className={`${classes.expandor} ${question1 == true && classes.unexpandor}`} />
                            </div>
                            <div className={classes.question} onClick={() => setQuestion2(d => !d)}>
                                <div className='flex'>
                                    <span className={classes.point}>2.</span>
                                    <span>Wozu werden Ihre Daten von AutoGigant.at verwendet und auf welcher rechtlichen Grundlage erfolgt die Verarbeitung?</span>
                                </div>
                                <Expand className={`${classes.expandor} ${question2 == true && classes.unexpandor}`} />
                            </div>
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
                            <div className={classes.question} onClick={() => setQuestion2(d => !d)}>
                                <div className='flex'>
                                    <span className={classes.point}>2.</span>
                                    <span>Wozu werden Ihre Daten von AutoGigant.at verwendet und auf welcher rechtlichen Grundlage erfolgt die Verarbeitung?</span>
                                </div>
                                <Expand className={`${classes.expandor} ${question2 == true && classes.unexpandor}`} />
                            </div>
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

export default Impressum;