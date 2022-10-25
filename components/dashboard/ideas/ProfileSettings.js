import Head from 'next/head';
import classes from './ProfileSettings.module.css';
import Zahnradgrau from './../../../public/Zahnradgrau.svg'
import Link from 'next/link';
import Expand from './../../../public/expand.svg';
import { useState } from 'react';
import Settingson from './../../../public/settingson.svg'
import Settingsoff from './../../../public/settingsoff.svg'
import Settingsclosebtn from './../../../public/Settingsclosebtn.svg'
import Facebook from './../../../public/facebook.svg'
import Youtube from './../../../public/youtube.svg'
import Instagram from './../../../public/instagram.svg'
import Linkedin from './../../../public/linkedin.svg'
import Tiktok from './../../../public/tiktok.svg'
import Clip from './../../../public/Clip.svg';
import Paperplane from './../../../public/Paperplane.svg';
import Toggle from '../../ui/Toggle';
import Avatar from '../../ui/Avatar';
import Image from 'next/image'
import DragDrop from './../../ui/dragdrop/DragDrop'
export default function ProfileSettings(){

    const [profilbildopened, setprofilbildopened] = useState(false);
    const [profilDataOpened, setProfileDataOpened] = useState(false);
    const [kontoSicherheitOpened, setKontoSicherheitOpened] = useState(false);
    const [benachrichtigungenOpened, setBenachrichtigungenOpened] = useState(false);
    const [blockierteBenutzerOpened, setBlockierteBenutzerOpened] = useState(false);
    const profileClassname = profilbildopened ? `${classes.profileopen}` : `${classes.profileclosed}`;
    const profileDataClassname = profilDataOpened ? `${classes.profileopen}` : `${classes.profileclosed}`;
    const kontoSicherheitClassname = kontoSicherheitOpened ? `${classes.profileopen}` : `${classes.profileclosed}`;
    const benachrichtigungenClassname = benachrichtigungenOpened ? `${classes.profileopen}` : `${classes.profileclosed}`;
    const blockierteBenutzerClassname = blockierteBenutzerOpened ? `${classes.profileopen}` : `${classes.profileclosed}`;

    const [avatarSelectionPopup, setAvatarSelectionPopup] = useState(false);

    const [selectedAvatar, setSelectedAvatar] = useState("/../public/avatars/m1.jpg");

    const [ImagesToggleOn, setImagesToggleOn] = useState(false);
    const [t1, setT1] = useState(false);
    const [t2, setT2] = useState(false);
    const [t3, setT3] = useState(false);
    const [t4, setT4] = useState(false);
    const [t5, setT5] = useState(false);
    const [t6, setT6] = useState(false);
    const [t7, setT7] = useState(false);
    return (
        <div className={classes.container}>
            {avatarSelectionPopup == true && <div className={classes.avatarselectionbackground}>
                <div className={classes.avatarselectionbox}>
                    <div className={classes.clsbtn} onClick={() => setAvatarSelectionPopup(false)}>
x
                    </div>
                    <div>
                    <div className={classes.linebelow}>
                        <span onClick={() => {
                            setSelectedAvatar("/../public/avatars/m1.jpg");
                            setAvatarSelectionPopup(d => !d);
                        }}>
                            <Avatar path="/../public/avatars/m1.jpg" value="/../public/avatars/m1.jpg" />
                        </span>
                        <span onClick={() => {
                            setSelectedAvatar("/../public/avatars/m2.jpg");
                            setAvatarSelectionPopup(d => !d);
                        }}>
                            <Avatar path="/../public/avatars/m2.jpg" value="/../public/avatars/m2.jpg" />
                        </span>
                        <span onClick={() => {
                            setSelectedAvatar("/../public/avatars/m3.jpg");
                            setAvatarSelectionPopup(d => !d);
                        }}>
                            <Avatar path="/../public/avatars/m3.jpg" value="/../public/avatars/m3.jpg" />
                        </span>
                        <span onClick={() => {
                            setSelectedAvatar("/../public/avatars/m4.jpg");
                            setAvatarSelectionPopup(d => !d);
                        }}>
                            <Avatar path="/../public/avatars/m4.jpg" value="/../public/avatars/m4.jpg" />
                        </span>

                        <span onClick={() => {
                            setSelectedAvatar("/../public/avatars/m5.jpg");
                            setAvatarSelectionPopup(d => !d);
                        }}>
                            <Avatar path="/../public/avatars/m5.jpg" value="/../public/avatars/m5.jpg" />
                        </span>
                        <span onClick={() => {
                            setSelectedAvatar("/../public/avatars/m6.jpg");
                            setAvatarSelectionPopup(d => !d);
                        }}>
                            <Avatar path="/../public/avatars/m6.jpg" value="/../public/avatars/m6.jpg" />
                        </span>
                        <span onClick={() => {
                            setSelectedAvatar("/../public/avatars/m7.jpg");
                            setAvatarSelectionPopup(d => !d);
                        }}>
                            <Avatar path="/../public/avatars/m7.jpg" value="/../public/avatars/m7.jpg" />
                        </span>
                        <span onClick={() => {
                            setSelectedAvatar("/../public/avatars/m8.jpg");
                            setAvatarSelectionPopup(d => !d);
                        }}>
                            <Avatar path="/../public/avatars/m8.jpg" value="/../public/avatars/m8.jpg" />
                        </span>

                        <span onClick={() => {
                            setSelectedAvatar("/../public/avatars/m9.jpg");
                            setAvatarSelectionPopup(d => !d);
                        }}>
                            <Avatar path="/../public/avatars/m9.jpg" value="/../public/avatars/m9.jpg" />
                        </span>
                        <span onClick={() => {
                            setSelectedAvatar("/../public/avatars/m10.jpg");
                            setAvatarSelectionPopup(d => !d);
                        }}>
                            <Avatar path="/../public/avatars/m10.jpg" value="/../public/avatars/m10.jpg" />
                        </span>
                        <span onClick={() => {
                            setSelectedAvatar("/../public/avatars/m11.jpg");
                            setAvatarSelectionPopup(d => !d);
                        }}>
                            <Avatar path="/../public/avatars/m11.jpg" value="/../public/avatars/m11.jpg" />
                        </span>
                        <span onClick={() => {
                            setSelectedAvatar("/../public/avatars/m12.jpg");
                            setAvatarSelectionPopup(d => !d);
                        }}>
                            <Avatar path="/../public/avatars/m12.jpg" value="/../public/avatars/m12.jpg" />
                        </span>
                    </div>
                    <div className={classes.linebelow}>
                        <span onClick={() => {
                            setSelectedAvatar("/../public/avatars/w1.jpg");
                            setAvatarSelectionPopup(d => !d);
                        }}>
                            <Avatar path="/../public/avatars/w1.jpg" value="/../public/avatars/w1.jpg" />
                        </span>
                        <span onClick={() => {
                            setSelectedAvatar("/../public/avatars/w2.jpg");
                            setAvatarSelectionPopup(d => !d);
                        }}>
                            <Avatar path="/../public/avatars/w2.jpg" value="/../public/avatars/w2.jpg" />
                        </span>
                        <span onClick={() => {
                            setSelectedAvatar("/../public/avatars/w3.jpg");
                            setAvatarSelectionPopup(d => !d);
                        }}>
                            <Avatar path="/../public/avatars/w3.jpg" value="/../public/avatars/w3.jpg" />
                        </span>
                        <span onClick={() => {
                            setSelectedAvatar("/../public/avatars/w4.jpg");
                            setAvatarSelectionPopup(d => !d);
                        }}>
                            <Avatar path="/../public/avatars/w4.jpg" value="/../public/avatars/w4.jpg" />
                        </span>
                        <span onClick={() => {
                            setSelectedAvatar("/../public/avatars/w5.jpg");
                            setAvatarSelectionPopup(d => !d);
                        }}>
                            <Avatar path="/../public/avatars/w5.jpg" value="/../public/avatars/w5.jpg" />
                        </span>
                        <span onClick={() => {
                            setSelectedAvatar("/../public/avatars/w6.jpg");
                            setAvatarSelectionPopup(d => !d);
                        }}>
                            <Avatar path="/../public/avatars/w6.jpg" value="/../public/avatars/w6.jpg" />
                        </span>
                        <span onClick={() => {
                            setSelectedAvatar("/../public/avatars/w7.jpg");
                            setAvatarSelectionPopup(d => !d);
                        }}>
                            <Avatar path="/../public/avatars/w7.jpg" value="/../public/avatars/w7.jpg" />
                        </span>
                        <span onClick={() => {
                            setSelectedAvatar("/../public/avatars/w8.jpg");
                            setAvatarSelectionPopup(d => !d);
                        }}>
                            <Avatar path="/../public/avatars/w8.jpg" value="/../public/avatars/w8.jpg" />
                        </span>
                    </div>
                    <div className={classes.linebelow}>
                        <span onClick={() => {
                            setSelectedAvatar("/../public/avatars/c1.jpg");
                            setAvatarSelectionPopup(d => !d);
                        }}>
                            <Avatar path="/../public/avatars/c1.jpg" value="/../public/avatars/c1.jpg" />
                        </span>
                        <span onClick={() => {
                            setSelectedAvatar("/../public/avatars/c2.jpg");
                            setAvatarSelectionPopup(d => !d);
                        }}>
                            <Avatar path="/../public/avatars/c2.jpg" value="/../public/avatars/c2.jpg" />
                        </span>
                        <span onClick={() => {
                            setSelectedAvatar("/../public/avatars/c3.jpg");
                            setAvatarSelectionPopup(d => !d);
                        }}>
                            <Avatar path="/../public/avatars/c3.jpg" value="/../public/avatars/c3.jpg" />
                        </span>
                        <span onClick={() => {
                            setSelectedAvatar("/../public/avatars/c4.jpg");
                            setAvatarSelectionPopup(d => !d);
                        }}>
                            <Avatar path="/../public/avatars/c4.jpg" value="/../public/avatars/c4.jpg" />
                        </span>
                    </div>
                    <span onClick={() => {
                            setSelectedAvatar("/../public/avatars/a1.jpg");
                            setAvatarSelectionPopup(d => !d);
                        }}>
                            <Avatar path="/../public/avatars/a1.jpg" value="/../public/avatars/a1.jpg" />
                        </span>
                        <span onClick={() => {
                            setSelectedAvatar("/../public/avatars/a2.jpg");
                            setAvatarSelectionPopup(d => !d);
                        }}>
                            <Avatar path="/../public/avatars/a2.jpg" value="/../public/avatars/a2.jpg" />
                        </span>
                        <span onClick={() => {
                            setSelectedAvatar("/../public/avatars/a3.jpg");
                            setAvatarSelectionPopup(d => !d);
                        }}>
                            <Avatar path="/../public/avatars/a3.jpg" value="/../public/avatars/a3.jpg" />
                        </span>
                        <span onClick={() => {
                            setSelectedAvatar("/../public/avatars/a4.jpg");
                            setAvatarSelectionPopup(d => !d);
                        }}>
                            <Avatar path="/../public/avatars/a4.jpg" value="/../public/avatars/a4.jpg" />
                    </span>
                    </div>
                </div>
            </div>}
            <h1 className={classes.heading}>PROFIL & EINSTELLUNGEN</h1>
            <div className={classes.row}>
                <div className={classes.c1}>
                    <Zahnradgrau className={classes.zahnrad}/>
                </div>
                <div className={classes.c2}>
                    Deine öffentlichen Daten werden in deinem Händlerprofil angezeigt. <br />
                    Verkäufer mti einem Profilbild wecken bei anderen Usern mehr Vertrauen. <br />
                    <Link href="/dashboard">
                        <a className={classes.haendlerlink}>
                            Hier geht&apos;s zu deinem Händlerprofil.
                        </a>
                    </Link>
                </div>
                <div className={classes.c3}>
                    <span className={classes.mitgliedseit}>Mitglied seit: </span>
                    <span className={classes.date}>01/01/2022</span>
                    <span className={classes.mitgliedschaftsvertraganzeigen}>Mitgliedschaftsvertrag anzeigen</span>
                </div>
            </div>
            <div className={profileClassname} onClick={() => setprofilbildopened(profilbildopened => !profilbildopened)}>
                <span className={classes.sectionheading}>PROFILBILD & SOCIAL MEDIA</span>
                {}
                <div>
                <Expand className={classes.expand} />
                </div>
            </div>
            {profilbildopened == true && 
                <div className={classes.profileContent}>
                    <div className={classes.row1}>
                        <div className={classes.haendlerbereich}>
                            <div className={classes.profileImg}>
                                <div className={classes.img}>
                                    <Image className={classes.avt} src={selectedAvatar} alt="Avatar"  width={145}  height={145} objectFit="contain"/>
                                </div>
                            </div>
                            <div className={classes.profileupdate}>
                                <div className={classes.sectionheading}>PROFILBILD ODER AVATAR AKTUALISIEREN</div>
                                <p>Profilbild Größe: 154x154 Pixel</p>
                                <button className={classes.haendlerbereichbtn}>Profilbild auswählen</button>
                                <p>oder</p>
                                <button className={classes.haendlerbereichbtn} onClick={() => setAvatarSelectionPopup(d => !d)}>Avatar auswählen</button>
                            </div>
                        </div>
                        <div className={classes.bildhochladen}>
                            <div className={classes.versicherung}>Mit dem Hochladen der Datei versichere ich, dass nur ich auf dem Bild ersichtlich bin, die öffentliche Wiedergabe meines Profilbilds auf AUTO GIGANT nach geltendem Recht erlaubt ist und dadurch keine Rechte Dritter verletzt werden-</div>
                            <div className={classes.einverstaendnis}>Ich habe die <span className={classes.link}>Profilbestimmungen</span> gelesen und erkläre ich damit einverstanden.</div>
                            <button className={classes.einverstaendnisbtn}>Zustimmen und Bild hochladen</button>
                        </div>
                    </div>
                    <div className={classes.row2}>
                        <div className={classes.titelbild}>Titelbild</div>
                        <div className={classes.titelbildupdate}>
                            <h1 className={classes.titelbildheading}>TITELBILD AKTUALISIEREN</h1>
                            <div className={classes.titelbildauswahl}>
                                <div className={classes.titelbildauswahlbtn}>Titelbild auswählen</div>
                                <div>Titelbild Größe:<br />955x300</div>
                            </div>
                            <div className={classes.titelbildhochladenbtn}>Titelbild hochladen</div>
                        </div>
                    </div>
                    <div className={classes.row3}>
                        <div className={classes.desc}>
                            <p className={classes.desctext}>Hier können Sie zusätzlich noch 5 Fotos von Ihrem Unternehmen zu Ihrer Profilseite hinzufügen.<br/>Foto Größe: 550x350 Pixel</p>
                            <Toggle toggle={() => setImagesToggleOn(d => !d)} toggleOn={ImagesToggleOn} />
                        </div>
                        <br/>
                        {ImagesToggleOn == true && <div>
                            <DragDrop />
                        <div className={classes.bizimages}>
                            <div className={classes.bizimage}>
                                <div className={classes.bizimg}><Settingsclosebtn className={classes.settingsclosebtn}/></div>
                                <button className={classes.fotoauswahlbtn}>Foto auswählen</button>
                                <button className={classes.fotohochladenbtn}>Foto hochladen</button>
                            </div>
                            <div className={classes.bizimage}>
                                <div className={classes.bizimg}><Settingsclosebtn className={classes.settingsclosebtn}/></div>
                                <button className={classes.fotoauswahlbtn}>Foto auswählen</button>
                                <button className={classes.fotohochladenbtn}>Foto hochladen</button>
                            </div>
                            <div className={classes.bizimage}>
                                <div className={classes.bizimg}><Settingsclosebtn className={classes.settingsclosebtn}/></div>
                                <button className={classes.fotoauswahlbtn}>Foto auswählen</button>
                                <button className={classes.fotohochladenbtn}>Foto hochladen</button>
                            </div>
                            <div className={classes.bizimage}>
                                <div className={classes.bizimg}><Settingsclosebtn className={classes.settingsclosebtn}/></div>
                                <button className={classes.fotoauswahlbtn}>Foto auswählen</button>
                                <button className={classes.fotohochladenbtn}>Foto hochladen</button>
                            </div>
                            <div className={classes.bizimage}>
                                <div className={classes.bizimg}><Settingsclosebtn className={classes.settingsclosebtn}/></div>
                                <button className={classes.fotoauswahlbtn}>Foto auswählen</button>
                                <button className={classes.fotohochladenbtn}>Foto hochladen</button>
                            </div>
                        </div>    
                        </div>}

                    </div>
                    <div className={classes.row4}>
                        <div className={classes.desc}>
                            <p className={classes.desctext}>Öffnen Sie das gewünschte Social Media Profil und kopieren Sie den in der Adresszeile<br/>Ihres Browsers angegebenen Link (also die URL) und fügen Sie es hier ein.</p>
                            <Toggle />
                        </div>
                        <div className={classes.socialmedia}>
                            <div className={classes.socialrow1}>
                                <div className={classes.socialc1}>
                                    <Facebook className={classes.facebook}/>
                                    <input className={classes.facebookinputurl} placeholder="Facebook Profil-URL"/>
                                </div>
                                <div className={classes.socialc2}>
                                    <Instagram className={classes.instagram}/>
                                    <input className={classes.instagraminputurl} placeholder="Instagram Profil-URL"/>
                                </div>
                            </div>
                            <div className={classes.socialrow2}>
                                <div className={classes.socialc1}>
                                    <Youtube className={classes.youtube}/>
                                    <input className={classes.youtubeinputurl} placeholder="Youtube Profil-URL"/>
                                </div>
                                <div className={classes.socialc2}>
                                    <Tiktok className={classes.tiktok}/>
                                    <input className={classes.tiktokinputurl} placeholder="Tiktok Profil-URL"/>
                                </div>
                            </div>
                            <div className={classes.socialrow3}>
                                <div className={classes.socialc1}>
                                    <Linkedin className={classes.linkedin}/>
                                    <input className={classes.linkedininputurl} placeholder="Linkedin Profil-URL"/>
                                </div>
                                <div className={classes.socialc2}>
                                    <div className={classes.spaceforbutton}></div>
                                    <button className={classes.savechanges}>Änderungen Speichern</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>}
            <div className={profileDataClassname} onClick={() => setProfileDataOpened(profilDataOpened => !profilDataOpened)}>
                <span className={classes.sectionheading}>PROFIL DATEN</span>
                {}
                <div>
                <Expand className={classes.expand} />
                </div>
            </div>
            {profilDataOpened == true && <div className={classes.profileContent}>
                <div className={classes.datarow}>
                    <input className={classes.datainput} placeholder="Firmenname"/>
                    <input className={classes.datainput} placeholder="Ergänzung"/>
                </div>
                <div className={classes.datarow}>
                    <input className={classes.datainput} placeholder="Straße"/>
                    <input className={classes.datainput} placeholder="Hausnummer"/>
                </div>
                <div className={classes.datarow}>
                    <input className={classes.datainput} placeholder="Stadt"/>
                    <input className={classes.datainput} placeholder="PLZ"/>
                </div>
                <div className={classes.datarow}>
                    <input className={classes.datainput} placeholder="Bundesland"/>
                    <input className={classes.datainput} placeholder="Land"/>
                </div>
                <div className={classes.datarow}>
                    <input className={classes.fdatainput} placeholder="Ländervorwahl"/>
                    <input className={classes.sdatainput} placeholder="Telefon Festnetz"/>
                    <input className={classes.datainput} placeholder="Internet-Adresse (URL)"/>
                </div>
                <div className={classes.datarow}>
                    <input className={classes.fdatainput} placeholder="Ländervorwahl"/>
                    <input className={classes.sdatainput} placeholder="Telefon Mobil"/>
                    <input className={classes.datainput} placeholder="UID-Nr. (wird nicht öffentlich angezeigt)"/>
                </div>
                <div className={classes.sectionheading}>ANSPRECHPARTNER</div>
                <br/>
                <div className={classes.datarow}>
                    <input className={classes.datainput} placeholder="Anrede"/>
                    <input className={classes.datainput} placeholder="Titel"/>
                </div>
                <div className={classes.datarow}>
                    <input className={classes.datainput} placeholder="Vorname"/>
                    <input className={classes.datainput} placeholder="Nachname"/>
                </div>
                <div className={classes.datarow}>
                    <input className={classes.fdatainput} placeholder="Ländervorwahl"/>
                    <input className={classes.sdatainput} placeholder="Telefon Mobil"/>
                    <button className={classes.savedatachanges}>Änderungen Speichern</button>
                </div>
                <hr />
                <div className={classes.datadesc}>
                    <p className={classes.sectionheading}>ÜBER UNS TEXT</p>
                    <Toggle />
                </div>
                <textarea className={classes.ueberunstextarea} placeholder="Der Text, den Sie hier eingeben, wird auf ihrem öffentlichen Profil angezeigt"/>
                <button className={classes.saveueberunschanges}>Änderungen Speichern</button>
                <hr />
                <br />
                <div className={classes.sectionheading}>BRANCHE AUSWÄHLEN</div>
                <div className={classes.radiobuttons}>
                    <div className={classes.twobuttonsonecolumn}>
                        <input type="radio" value="fahrzeug-haendler" name="branche" /> Fahrzeug Händler<br/>
                        <input type="radio" value="kfz-werkstatt" name="branche" /> KFZ Werkstatt
                    </div>
                    <div className={classes.twobuttonsonecolumn}>
                        <input type="radio" value="kreditvermittler" name="branche" /> Kreditvermittler<br/>
                        <input type="radio" value="versicherungsmakler" name="branche" /> Versicherungsmakler
                    </div>
                    <div className={classes.twobuttonsonecolumn}>
                        <input type="radio" value="zulassungsstelle" name="branche" /> Zulassungsstelle<br/>
                        <input type="radio" value="autoaufbereitung" name="branche" /> Autoaufbereitung
                    </div>
                </div>
                <div className={classes.sectionheading}>GEWERBEBERECHTIGUNG</div>
                <br/>
                <p className={classes.gewerbeberechtigungtext}>Sie müssen innerhalb von 3 Tagen nach der Registrierung Ihre Gewerbeberechtigung hochladen.<br/>Anderenfalls wird Ihr Profil automatisch<br/>gesperrt und Ihre Anzeigen werden nicht mehr angezeigt.<br/>Für die Entsperrung werden &#8364; 35 ,- verrechnet und kann bis zu 48 Stunden dauern.</p>
                <br />
                <div className={classes.maxdateigroesse}>Maximale Dateigröße 5 MB</div>
                <div className={classes.twobuttons}>
                    <button className={classes.dateihinzufuegenbtn}> <Clip className={classes.clip}/>{" "}Datei hinzufügen</button>
                    <button className={classes.sendenbtn}><Paperplane className={classes.paperplane}/>{"    "}Senden</button>
                </div>
            </div>}
            <div className={kontoSicherheitClassname} onClick={() => setKontoSicherheitOpened(kontoSicherheitOpened => !kontoSicherheitOpened)}>
            <span className={classes.sectionheading}>KONTOSICHERHEIT</span>
                {}
                <div>
                <Expand className={classes.expand} />
                </div>
            </div>
            {kontoSicherheitOpened == true && <div className={classes.profileContent}>
                <div className={classes.sectionheading}>E-MAIL ADRESSE ÄNDERN</div>
                <br/>
                <div className={classes.securitytwocolumns}>
                    <div className={classes.securityfirstcolumn}>
                            <input className={classes.securityinput} placeholder="Aktuelle E-Mail Adresse"/>
                            <input className={classes.securityinput} placeholder="Neue E-Mail Adresse"/>
                            <input className={classes.securityinput} placeholder="Neue E-Mail Adresse wiederholen"/>
                            <button className={classes.savechanges}>Änderungen Speichern</button>
                    </div>
                    <div className={classes.securitysecondcolumn}>
                        Beim Ändern Ihrer E-Mail Adresse wird Ihre Sitzung aus<br/>Sicherheitsgründen beendet.<br/>Melden Sie sich mit Ihrer neuen E-Mail Adresse an.<br/><br/>Sie erhalten anschließend eine Verifizierungsmail.<br/>Bitte überprüfen Sie Ihr Postfach.
                    </div>
                </div>
                <br/>
                <hr/>
                <br/>
                <div className={classes.sectionheading}>PASSWORT ÄNDERN</div>
                <br/>
                <div className={classes.securitytwocolumns}>
                    <div className={classes.securityfirstcolumn}>
                            <input className={classes.securityinput} placeholder="Aktuelles Passwort"/>
                            <input className={classes.securityinput} placeholder="Neues Passwort"/>
                            <input className={classes.securityinput} placeholder="Neues Passwort wiederholen"/>
                            <button className={classes.savechanges}>Änderungen Speichern</button>
                    </div>
                    <div className={classes.securitysecondcolumn}>
                        Beim Ändern Ihres Passworts Adresse wird Ihre Sitzung aus<br/>Sicherheitsgründen beendet.<br/>Melden Sie sich mit Ihrer neuen E-Mail Adresse an.<br/><br/>Das Passwort muss folgende Anforderungen erfüllen:<br/>Es muss mindestens 8 Zeichen enthalten<br/>und 2 der folgenden Merkmale aufweisen:<br/>Buchstaben, Ziffern, Sonderzeichen.
                    </div>
                </div>
                <br/>
                <hr/>
                <br/>
                <p>Durch das Deaktivieren des Kontos wird Ihr Profil inkl. den Inseraten für die Dauer der Deaktivierung offline<br/>gestalten und ist für andere User nicht sichtbar. Sie können Ihr Konto jederzeit wieder aktivieren.</p>
                <button className={classes.securitykontodeaktivierungsbtn}>KONTO DEAKTIVIEREN</button>
                <br/>
                <br/>
                <hr/>
                <br/>
                <p className={classes.securitykontoloeschenbeschreibung}>Ihr Profil wird inkl. den Inseraten unwiderruflich gelöscht.<br/><strong>ACHTUNG - Diese Funktion kann nicht mehr rückgängig gemacht werden.</strong></p>
                <button className={classes.securitykontoloeschenbtn}>KONTO LÖSCHEN</button>
            </div>}
            <div className={benachrichtigungenClassname} onClick={() => setBenachrichtigungenOpened(benachrichtigungenOpened => !benachrichtigungenOpened)}>
            <span className={classes.sectionheading}>BENACHRICHTIGUNGEN</span>
                {}
                <div>
                <Expand className={classes.expand} />
                </div>
            </div>
            {benachrichtigungenOpened == true && <div className={classes.profileContent}>
                <div className={classes.benachrichtigungseinstellungen}>
                    <div className={classes.benachrichtigungseinstellung}>
                        <div className={classes.benachrichtigunsdesc}>Alle Benachrichtigungen per E-Mail an die gespeicherte Adresse senden.</div>
                        <Toggle toggle={() => setT1(t => !t)} toggleOn={t1}/>
                    </div>
                    <div className={classes.benachrichtigungseinstellung}>
                        <div className={classes.benachrichtigunsdesc}>Erinnerungsbenachrichtigung vor Ablauf eines Inserates.</div>
                        <Toggle toggle={() => setT2(t => !t)} toggleOn={t2}/>
                    </div>
                    <div className={classes.benachrichtigungseinstellung}>
                        <div className={classes.benachrichtigunsdesc}>Erinnerungsbenachrichtigung vor Ablauf eines Giga Powers.</div>
                        <Toggle toggle={() => setT3(t => !t)} toggleOn={t3}/>
                    </div>
                    <div className={classes.benachrichtigungseinstellung}>
                        <div className={classes.benachrichtigunsdesc}>Benachrichtigung, dass der Preis des favorisierten Inserates gesunken ist.</div>
                        <Toggle toggle={() => setT4(t => !t)} toggleOn={t4}/>
                    </div>
                    <div className={classes.benachrichtigungseinstellung}>
                        <div className={classes.benachrichtigunsdesc}>Erinnerungsbenachrichtigung vor Ablauf eines Abos.</div>
                        <Toggle toggle={() => setT5(t => !t)} toggleOn={t5}/>
                    </div>
                    <div className={classes.benachrichtigungseinstellung}>
                        <div className={classes.benachrichtigunsdesc}>Erinnerungsbenachrichtigung für Suchaufträge.</div>
                        <Toggle toggle={() => setT6(t => !t)} toggleOn={t6}/>
                    </div>
                    <div className={classes.benachrichtigungseinstellung}>
                        <div className={classes.benachrichtigunsdesc}>Newsletter an-/abmelden.</div>
                        <Toggle toggle={() => setT7(t => !t)} toggleOn={t7}/>
                    </div>
                </div>
            </div>}
            <div className={blockierteBenutzerClassname} onClick={() => setBlockierteBenutzerOpened(blockierteBenutzerOpened => !blockierteBenutzerOpened)}>
            <span className={classes.sectionheading}>BLOCKIERTE BENUTZER</span>
                {}
                <div>
                <Expand className={classes.expand} />
                </div>
            </div>
            {blockierteBenutzerOpened == true && <div className={classes.profileContent}>
                <div className={classes.users}>
                    <div className={classes.user}>
                        <div className={classes.userleft}>
                            <div className={classes.profileimg}></div>
                            <div className={classes.username}>Max Mustermann</div>
                        </div>
                        <Link href="/">
                            <a className={classes.link}>Blockierung aufheben</a>
                        </Link>
                    </div>
                    <div className={classes.user}>
                        <div className={classes.userleft}>
                            <div className={classes.profileimg}></div>
                            <div className={classes.username}>Max Mustermann</div>
                        </div>
                        <Link href="/">
                            <a className={classes.link}>Blockierung aufheben</a>
                        </Link>
                    </div>
                    <div className={classes.user}>
                        <div className={classes.userleft}>
                            <div className={classes.profileimg}></div>
                            <div className={classes.username}>Max Mustermann</div>
                        </div>
                        <Link href="/">
                            <a className={classes.link}>Blockierung aufheben</a>
                        </Link>
                    </div>
                </div>
            </div>}
        </div>
    );
}