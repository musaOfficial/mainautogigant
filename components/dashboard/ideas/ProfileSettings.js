import Head from 'next/head';
import classes from './ProfileSettings.module.css';
import Zahnradgrau from './../../../public/Zahnradgrau.svg'
import Link from 'next/link';
import Expand from './../../../public/expand.svg';
import { useEffect, useState } from 'react';
import Settingsclosebtn from './../../../public/Settingsclosebtn.svg'
import Facebook from './../../../public/facebook.svg'
import Youtube from './../../../public/youtube.svg'
import Instagram from './../../../public/instagram.svg'
import Linkedin from './../../../public/Linkedin.svg'
import Tiktok from './../../../public/tiktok.svg'
import Clip from './../../../public/Clip.svg';
import Paperplane from './../../../public/Paperplane.svg';
import Toggle from '../../ui/Toggle';
import Avatar from '../../ui/Avatar';
import Image from 'next/image'
import DragDrop from './../../ui/dragdrop/DragDrop'
import { useReducer } from 'react';
import DropZone from '../../ui/dragdrop/DropZone';
import FilePreview from '../../ui/dragdrop/FilePreview';
import Deleter from './../../../public/deleter.svg'
import Closer from './../../../public/closer.svg'
import { reduceResults } from 'react-advanced-form';

export default function ProfileSettings(){
    const handleDragEnter = (e) => {
        e.preventDefault();
        e.stopPropagation();
        dispatch({ type: "SET_IN_DROP_ZONE", inDropZone: true });
      };
    
      // onDragLeave sets inDropZone to false
      const handleDragLeave = (e) => {
        e.preventDefault();
        e.stopPropagation();
    
        dispatch({ type: "SET_IN_DROP_ZONE", inDropZone: false });
      };
    
      // onDragOver sets inDropZone to true
      const handleDragOver = (e) => {
        e.preventDefault();
        e.stopPropagation();
    
        // set dropEffect to copy i.e copy of the source item
        e.dataTransfer.dropEffect = "copy";
        dispatch({ type: "SET_IN_DROP_ZONE", inDropZone: true });
      };
    
      // onDrop sets inDropZone to false and adds files to fileList
      const handleDrop = (e) => {
        e.preventDefault();
        e.stopPropagation();
    
        // get files from event on the dataTransfer object as an array
        let files = [...e.dataTransfer.files];

        
    
        // ensure a file or files are dropped
        if (files && files.length > 0) {
          // loop over existing files
          const existingFiles = data.fileList.map((f) => f.name);
          // check if file already exists, if so, don't add to fileList
          // this is to prevent duplicates
          files = files.filter((f) => !existingFiles.includes(f.name));
    
          // dispatch action to add droped file or files to fileList
          dispatch({ type: "ADD_FILE_TO_LIST", files });
          // reset inDropZone to false
          dispatch({ type: "SET_IN_DROP_ZONE", inDropZone: false });
        }
      };
    
      // handle file selection via input element


      
    //   // to handle file uploads
    //   const uploadFiles = async () => {
    //     // get the files from the fileList as an array
    //     let files = data.fileList;
    //     // initialize formData object
    //     const formData = new FormData();
    //     // loop over files and add to formData
    //     files.forEach((file) => formData.append("files", file));
    
    //     // Upload the files as a POST request to the server using fetch
    //     // Note: /api/fileupload is not a real endpoint, it is just an example
    //     const response = await fetch("/api/fileupload", {
    //       method: "POST",
    //       body: formData,
    //     });
    
    //     //successful file upload
    //     if (response.ok) {
    //       alert("Files uploaded successfully");
    //     } else {
    //       // unsuccessful file upload
    //       alert("Error uploading files");
    //     }
    //   };

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


    const reducer = (state, action) => {
        switch (action.type) {
          case "SET_IN_DROP_ZONE":
            return { ...state, inDropZone: action.inDropZone };
          case "ADD_FILE_TO_LIST":
            return { ...state, fileList: state.fileList.concat(action.files) };
          default:
            return state;
        }
      };
    
      // destructuring state and dispatch, initializing fileList to empty array
      const [data, dispatch] = useReducer(reducer, {
        inDropZone: false,
        fileList: [],
      });

      function handleFileSelect(e){
        // get files from event on the input element as an array
        console.log(data.fileList)
        let files = [...e.target.files];
        dispatch({ type: "ADD_FILE_TO_LIST", files})
      };

      const [socialMediaSectionActive, setSocialMediaSectionActive] = useState(false);

     // PROFILDATEN
      const [firmenname, setFirmenname] = useState();
      const [ergaenzung, setErgaenzung] = useState();
      const [strasse, setStrasse] = useState();
      const [hausnummer, setHausnummer] = useState();
      const [stadt, setStadt] = useState();
      const [plz, setPlz] = useState();
      const [bundesland, setBundesland] = useState();
      const [land, setLand] = useState();
      const [vorwahl1, setVorwahl1] = useState();
      const [telefonfestnetz, setTelefonfestnetz] = useState();
      const [vorwahl2, setVorwahl2] = useState();
      const [telefonmobil, setTelefonmobil] = useState();
      const [internetaddresseurl, setInternetaddresseurl] = useState();
      const [uidNr, setUidNr] = useState();

     // ANSPRECHPARTNER
     const [anrede, setAnrede] = useState();
     const [titel, setTitel] = useState();
     const [vorname, setVorname] = useState();
     const [nachname, setNachname] = useState();
     const [vorwahl3, setVorwahl3] = useState();
     const [telefonnummer, setTelefonnummer] = useState();
     // ÜBER UNS TEXT
      const [ueberuns, setUeberuns] = useState();
     // BRANCHE

     // GEWERBEBERECHTIGUNG
      const [gewerbeberechtigungFile, setGewerbeberechtigungFile] = useState("");

      // KONTOSICHERHEIT
      const [actMail, setActMail] = useState();
      const [newMail, setNewMail] = useState();
      const [newMail2, setNewMail2] = useState();

      const [actPassword, setActPassword] = useState();
      const [newPassword, setNewPassword] = useState();
      const [newPassword2, setNewPassword2] = useState();


      const [titelbild, setTitelbild] = useState();


      // SOCIAL-MEDIA URLs
      const [facebook, setFacebook] = useState();
      const [instagram, setInstagram] = useState();
      const [youtube, setYoutube] = useState();
      const [tiktok, setTiktok] = useState();
      const [linkedin, setLinkedin] = useState();

      // FÜNF FOTO BEREICH
      const [foto1, setFoto1] = useState();
      const [foto2, setFoto2] = useState();
      const [foto3, setFoto3] = useState();
      const [foto4, setFoto4] = useState();
      const [foto5, setFoto5] = useState();

      // BLOCKIERTE BENUTZER
      const [blockierteBenutzer, setBlockierteBenutzer] = useState([{
        profileImg: "/m1.jpg",
        vorname: "Max",
        nachname: "Mustermann"
    },
    {
        profileImg: "/m1.jpg",
        vorname: "Musa",
        nachname: "Arslan"
    },
    {
        profileImg: "/m1.jpg",
        vorname: "Servet",
        nachname: "Simsek"
    }])

    // BLOCK AUFHEBUNG
    const [openBlockDeleter, setOpenBlockDeleter] = useState(false);
    function handleUnblocker(index) {
        var reducedBlockers = [...blockierteBenutzer];
        reducedBlockers.splice(index, 1);
        setBlockierteBenutzer(reducedBlockers);
        setOpenBlockDeleter(false);
    }

    const [blockedUserIndex, setBlockedUserIndex] = useState(0);

    return (
        <div className={classes.container}>
            {avatarSelectionPopup == true && <div className={classes.avatarselectionbackground}>
                <div className={classes.avatarselectionbox}>
                    <div className={classes.clsbtn} onClick={() => setAvatarSelectionPopup(false)}>x</div>
                    <div className={classes.grid}>
                    <span onClick={() => {
                            setSelectedAvatar("/m1.jpg");
                            setAvatarSelectionPopup(d => !d);
                        }}>
                            <Avatar path={"/m1.jpg"} value="/m1.jpg" layout='fill' />
                        </span>
                        <span onClick={() => {
                            setSelectedAvatar("/avatars/m2.jpg");
                            setAvatarSelectionPopup(d => !d);
                        }}>
                            <Avatar path="/avatars/m2.jpg" value="/avatars/m2.jpg" layout='fill'/>
                        </span>
                        <span onClick={() => {
                            setSelectedAvatar("/avatars/m3.jpg");
                            setAvatarSelectionPopup(d => !d);
                        }}>
                            <Avatar path="/avatars/m3.jpg" value="/avatars/m3.jpg" layout='fill'/>
                        </span>
                        <span onClick={() => {
                            setSelectedAvatar("/avatars/m4.jpg");
                            setAvatarSelectionPopup(d => !d);
                        }}>
                            <Avatar path="/avatars/m4.jpg" value="/avatars/m4.jpg" layout='fill'/>
                        </span>

                        <span onClick={() => {
                            setSelectedAvatar("/avatars/m5.jpg");
                            setAvatarSelectionPopup(d => !d);
                        }}>
                            <Avatar path="/avatars/m5.jpg" value="/avatars/m5.jpg" layout='fill'/>
                        </span>
                        <span onClick={() => {
                            setSelectedAvatar("/avatars/m6.jpg");
                            setAvatarSelectionPopup(d => !d);
                        }}>
                            <Avatar path="/avatars/m6.jpg" value="/avatars/m6.jpg" layout='fill'/>
                        </span>
                        <span onClick={() => {
                            setSelectedAvatar("/avatars/m7.jpg");
                            setAvatarSelectionPopup(d => !d);
                        }}>
                            <Avatar path="/avatars/m7.jpg" value="/avatars/m7.jpg" layout='fill'/>
                        </span>
                        <span onClick={() => {
                            setSelectedAvatar("/../public/avatars/m8.jpg");
                            setAvatarSelectionPopup(d => !d);
                        }}>
                            <Avatar path="/avatars/m8.jpg" value="/avatars/m8.jpg" layout='fill'/>
                        </span>

                        <span onClick={() => {
                            setSelectedAvatar("/avatars/m9.jpg");
                            setAvatarSelectionPopup(d => !d);
                        }}>
                            <Avatar path="/avatars/m9.jpg" value="/avatars/m9.jpg" layout='fill'/>
                        </span>
                        <span onClick={() => {
                            setSelectedAvatar("/avatars/m10.jpg");
                            setAvatarSelectionPopup(d => !d);
                        }}>
                            <Avatar path="/avatars/m10.jpg" value="/avatars/m10.jpg" layout='fill'/>
                        </span>
                        <span onClick={() => {
                            setSelectedAvatar("/avatars/m11.jpg");
                            setAvatarSelectionPopup(d => !d);
                        }}>
                            <Avatar path="/avatars/m11.jpg" value="/avatars/m11.jpg" layout='fill'/>
                        </span>
                        <span onClick={() => {
                            setSelectedAvatar("/avatars/m12.jpg");
                            setAvatarSelectionPopup(d => !d);
                        }}>
                            <Avatar path="/avatars/m12.jpg" value="/avatars/m12.jpg" layout='fill'/>
                        </span>
                        <span onClick={() => {
                            setSelectedAvatar("/avatars/w1.jpg");
                            setAvatarSelectionPopup(d => !d);
                        }}>
                            <Avatar path="/avatars/w1.jpg" value="/avatars/w1.jpg" />
                        </span>
                        <span onClick={() => {
                            setSelectedAvatar("/avatars/w2.jpg");
                            setAvatarSelectionPopup(d => !d);
                        }}>
                            <Avatar path="/avatars/w2.jpg" value="/avatars/w2.jpg" />
                        </span>
                        <span onClick={() => {
                            setSelectedAvatar("/avatars/w3.jpg");
                            setAvatarSelectionPopup(d => !d);
                        }}>
                            <Avatar path="/avatars/w3.jpg" value="/avatars/w3.jpg" />
                        </span>
                        <span onClick={() => {
                            setSelectedAvatar("/avatars/w4.jpg");
                            setAvatarSelectionPopup(d => !d);
                        }}>
                            <Avatar path="/avatars/w4.jpg" value="/avatars/w4.jpg" />
                        </span>
                        <span onClick={() => {
                            setSelectedAvatar("/avatars/w5.jpg");
                            setAvatarSelectionPopup(d => !d);
                        }}>
                            <Avatar path="/avatars/w5.jpg" value="/avatars/w5.jpg" />
                        </span>
                        <span onClick={() => {
                            setSelectedAvatar("/avatars/w6.jpg");
                            setAvatarSelectionPopup(d => !d);
                        }}>
                            <Avatar path="/avatars/w6.jpg" value="/avatars/w6.jpg" />
                        </span>
                        <span onClick={() => {
                            setSelectedAvatar("/avatars/w7.jpg");
                            setAvatarSelectionPopup(d => !d);
                        }}>
                            <Avatar path="/avatars/w7.jpg" value="/avatars/w7.jpg" />
                        </span>
                        <span onClick={() => {
                            setSelectedAvatar("/avatars/w8.jpg");
                            setAvatarSelectionPopup(d => !d);
                        }}>
                            <Avatar path="/avatars/w8.jpg" value="/avatars/w8.jpg" />
                        </span>
                        <span onClick={() => {
                            setSelectedAvatar("/avatars/c1.jpg");
                            setAvatarSelectionPopup(d => !d);
                        }}>
                            <Avatar path="/avatars/c1.jpg" value="/avatars/c1.jpg" />
                        </span>
                        <span onClick={() => {
                            setSelectedAvatar("/avatars/c2.jpg");
                            setAvatarSelectionPopup(d => !d);
                        }}>
                            <Avatar path="/avatars/c2.jpg" value="/avatars/c2.jpg" />
                        </span>
                        <span onClick={() => {
                            setSelectedAvatar("/avatars/c3.jpg");
                            setAvatarSelectionPopup(d => !d);
                        }}>
                            <Avatar path="/avatars/c3.jpg" value="/avatars/c3.jpg" />
                        </span>
                        <span onClick={() => {
                            setSelectedAvatar("/avatars/c4.jpg");
                            setAvatarSelectionPopup(d => !d);
                        }}>
                            <Avatar path="/avatars/c4.jpg" value="/avatars/c4.jpg" />
                        </span>
                        <span onClick={() => {
                            setSelectedAvatar("/avatars/a1.jpg");
                            setAvatarSelectionPopup(d => !d);
                        }}>
                            <Avatar path="/avatars/a1.jpg" value="/avatars/a1.jpg" />
                        </span>
                        <span onClick={() => {
                            setSelectedAvatar("/avatars/a2.jpg");
                            setAvatarSelectionPopup(d => !d);
                        }}>
                            <Avatar path="/avatars/a2.jpg" value="/avatars/a2.jpg" />
                        </span>
                        <span onClick={() => {
                            setSelectedAvatar("/avatars/a3.jpg");
                            setAvatarSelectionPopup(d => !d);
                        }}>
                            <Avatar path="/avatars/a3.jpg" value="/avatars/a3.jpg" />
                        </span>
                        <span onClick={() => {
                            setSelectedAvatar("/avatars/a4.jpg");
                            setAvatarSelectionPopup(d => !d);
                        }}>
                            <Avatar path="/avatars/a4.jpg" value="/avatars/a4.jpg" />
                    </span>
                    </div>
                </div>
            </div>}
            <h1 className={classes.heading}>PROFIL & EINSTELLUNGEN</h1>
            <div className={classes.row}>
                <div className={classes.responsivec1}>
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
                                <form>
                                    <label className={classes.haendlerbereichbtn}>
                                    Profilbild auswählen
                                        <input
                                            id="fileSelect"
                                            type="file"
                                            accept='image/png, image/jpg, image/jpeg'
                                            multiple
                                            onChange={e => {
                                                const file = e.target.files[0];
                                                setSelectedAvatar(URL.createObjectURL(file));
                                            }
                                                
                                                }
                                            className={classes.selectFile}
                                            />
                                    </label>
                                </form>
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
                    <h1 className={classes.titelbildheading}>TITELBILD AKTUALISIEREN</h1>
                    <div className={classes.row2}>

                        <div className={classes.titelbild}>
                            {titelbild ? <Image src={titelbild} layout='fill' objectFit='cover' /> : "Titelbild"}
                        </div>
                        <div className={classes.titelbildupdate}>
                            <div className={classes.titelbildauswahl}>
                            <label className={classes.titelbildauswahlbtn}>
                                Titelbild auswählen
                                <input className={classes.fileupload} onChange={(e) => {
                                    const file = e.target.files[0];
                                    setTitelbild(URL.createObjectURL(file));
                                }} type={"file"} />
                            </label>
                                <div className={classes.titelbildeigenschaften}>Titelbild Größe:<span className={classes.breaktitelbildgroesse}></span>955x300</div>
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
                        {ImagesToggleOn == true && <div className={classes.fivefotos}>
                            <div className={classes.fotodiv}>
                                <div className={classes.imgplacer}>
                                    {foto1 ? <Image src={foto1} layout="fill" objectFit='cover' /> : "Kein Foto"}
                                </div>
                                <label className={classes.fivefotouploadbtn}>Foto auswählen
                                    <input onChange={(e) => {
                                        const file = e.target.files[0];
                                        setFoto1(URL.createObjectURL(file));
                                    }} type={"file"} className={classes.fileupload}/>
                                </label>
                                <button className={classes.fivefotosendbtn}>Foto hochladen</button>
                                <div className={classes.deleterbtn} onClick={() => setFoto1("")}>
                                    <Deleter className={classes.deleter}  />
                                </div>
                            </div>
                            <div className={classes.fotodiv}>
                                <div className={classes.imgplacer}>
                                    {foto2 ? <Image src={foto2} layout="fill" objectFit='cover' /> : "Kein Foto"}
                                </div>
                                <label className={classes.fivefotouploadbtn}>Foto auswählen
                                    <input onChange={(e) => {
                                        const file = e.target.files[0];
                                        setFoto2(URL.createObjectURL(file));
                                    }} type={"file"} className={classes.fileupload}/>
                                </label>
                                <button className={classes.fivefotosendbtn}>Foto hochladen</button>
                                <div className={classes.deleterbtn} onClick={() => setFoto2("")}>
                                    <Deleter className={classes.deleter}  />
                                </div>
                            </div>
                            <div className={classes.fotodiv}>
                                <div className={classes.imgplacer}>
                                    {foto3 ? <Image src={foto3} layout="fill" objectFit='cover' /> : "Kein Foto"}
                                </div>
                                <label className={classes.fivefotouploadbtn}>Foto auswählen
                                    <input onChange={(e) => {
                                        const file = e.target.files[0];
                                        setFoto3(URL.createObjectURL(file));
                                    }} type={"file"} className={classes.fileupload}/>
                                </label>
                                <button className={classes.fivefotosendbtn}>Foto hochladen</button>
                                <div className={classes.deleterbtn} onClick={() => setFoto3("")}>
                                    <Deleter className={classes.deleter}  />
                                </div>
                            </div>
                            <div className={classes.fotodiv}>
                                <div className={classes.imgplacer}>
                                    {foto4 ? <Image src={foto4} layout="fill" objectFit='cover' /> : "Kein Foto"}
                                </div>
                                <label className={classes.fivefotouploadbtn}>Foto auswählen
                                    <input onChange={(e) => {
                                        const file = e.target.files[0];
                                        setFoto4(URL.createObjectURL(file));
                                    }} type={"file"} className={classes.fileupload}/>
                                </label>
                                <button className={classes.fivefotosendbtn}>Foto hochladen</button>
                                <div className={classes.deleterbtn} onClick={() => setFoto4("")}>
                                    <Deleter className={classes.deleter}  />
                                </div>
                            </div>
                            <div className={classes.fotodiv}>
                                <div className={classes.imgplacer}>
                                    {foto5 ? <Image src={foto5} layout="fill" objectFit='cover' /> : "Kein Foto"}
                                </div>
                                <label className={classes.fivefotouploadbtn}>Foto auswählen
                                    <input onChange={(e) => {
                                        const file = e.target.files[0];
                                        setFoto5(URL.createObjectURL(file));
                                    }} type={"file"} className={classes.fileupload}/>
                                </label>
                                <button className={classes.fivefotosendbtn}>Foto hochladen</button>
                                <div className={classes.deleterbtn} onClick={() => setFoto5("")}>
                                    <Deleter className={classes.deleter}  />
                                </div>
                            </div>
                            
                        </div>}

                    </div>
                    <div className={classes.row4}>
                        <div className={classes.desc}>
                            <p className={classes.desctext}>Öffnen Sie das gewünschte Social Media Profil und kopieren Sie den in der Adresszeile<br/>Ihres Browsers angegebenen Link (also die URL) und fügen Sie es hier ein.</p>
                            <Toggle toggle={() => setSocialMediaSectionActive(t => !t)} toggleOn={socialMediaSectionActive} className={classes.socialactive}/>
                        </div>
                       {socialMediaSectionActive == true &&  <div className={classes.socialmedia}>
                            <div className={classes.socialrow1}>
                                <div className={classes.socialc1}>
                                    <Facebook className={classes.facebook}/>
                                    <input className={classes.facebookinputurl} placeholder="Facebook Profil-URL" onChange={(e) => setFacebook(e.target.value)} />
                                </div>
                                <div className={classes.socialc2}>
                                    <Instagram className={classes.instagram}/>
                                    <input className={classes.instagraminputurl} placeholder={"Instagram Profil-URL"} onChange={(e) => setInstagram(e.target.value)}/>
                                </div>
                            </div>
                            <div className={classes.socialrow2}>
                                <div className={classes.socialc1}>
                                    <Youtube className={classes.youtube}/>
                                    <input className={classes.youtubeinputurl} placeholder="Youtube Profil-URL"  onChange={(e) => setYoutube(e.target.value)}/>
                                </div>
                                <div className={classes.socialc2}>
                                    <Tiktok className={classes.tiktok}/>
                                    <input className={classes.tiktokinputurl} placeholder="Tiktok Profil-URL"  onChange={(e) => setTiktok(e.target.value)}/>
                                </div>
                            </div>
                            <div className={classes.socialrow3}>
                                <div className={classes.socialc1}>
                                    <Linkedin className={classes.linkedin}/>
                                    <input className={classes.linkedininputurl} placeholder="Linkedin Profil-URL" onChange={(e) => setLinkedin(e.target.value)}/>
                                </div>
                                <div className={classes.socialc2}>
                                    <div className={classes.spaceforbutton}></div>
                                    <button className={classes.savechanges}>Änderungen Speichern</button>
                                </div>
                            </div>
                        </div>}
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
                    <input className={classes.datainput} placeholder="Firmenname" onChange={(e) => setFirmenname(e.target.value)}/>
                    <input className={classes.datainput} placeholder="Ergänzung" onChange={(e) => setErgaenzung(e.target.value)}/>
                </div>
                <div className={classes.datarow}>
                    <input className={classes.datainput} placeholder="Straße" onChange={(e) => setStrasse(e.target.value)}/>
                    <input className={classes.datainput} placeholder="Hausnummer" onChange={(e) => setHausnummer(e.target.value)}/>
                </div>
                <div className={classes.datarow}>
                    <input className={classes.datainput} placeholder="Stadt" onChange={(e) => setStadt(e.target.value)}/>
                    <input className={classes.datainput} placeholder="PLZ" onChange={(e) => setPlz(e.target.value)}/>
                </div>
                <div className={classes.datarow}>
                    <input className={classes.datainput} placeholder="Bundesland" onChange={(e) => setBundesland(e.target.value)}/>
                    <input className={classes.datainput} placeholder="Land" onChange={(e) => setLand(e.target.value)}/>
                </div>
                <div className={classes.datarow}>
                    <input className={classes.fdatainput} placeholder="Ländervorwahl" onChange={(e) => setVorwahl1(e.target.value)}/>
                    <input className={classes.sdatainput} placeholder="Telefon Festnetz" onChange={(e) => setTelefonfestnetz(e.target.value)}/>
                    <input className={classes.datainput} placeholder="Internet-Adresse (URL)" onChange={(e) => setInternetaddresseurl(e.target.value)}/>
                </div>
                <div className={classes.datarow}>
                    <input className={classes.fdatainput} placeholder="Ländervorwahl" onChange={(e) => setVorwahl2(e.target.value)}/>
                    <input className={classes.sdatainput} placeholder="Telefon Mobil" onChange={(e) => setTelefonmobil(e.target.value)}/>
                    <input className={classes.datainput} placeholder="UID-Nr. (wird nicht öffentlich angezeigt)" onChange={(e) => setUidNr(e.target.value)}/>
                </div>
                <div className={classes.sectionheading}>ANSPRECHPARTNER</div>
                <br/>
                <div className={classes.ansprechpartnerbereich}>
                    <div className={classes.datarow}>
                    <input className={classes.datainput} placeholder="Anrede" onChange={(e) => setAnrede(e.target.value)}/>
                    <input className={classes.datainput} placeholder="Titel" onChange={(e) => setTitel(e.target.value)}/>
                </div>
                <div className={classes.datarow}>
                    <input className={classes.datainput} placeholder="Vorname" onChange={(e) => setVorname(e.target.value)}/>
                    <input className={classes.datainput} placeholder="Nachname" onChange={(e) => setNachname(e.target.value)}/>
                </div>
                <div className={classes.datarow}>
                    <input className={classes.fdatainput} placeholder="Ländervorwahl" onChange={(e) => setVorwahl3(e.target.value)}/>
                    <input className={classes.sdatainput} placeholder="Telefon Mobil" onChange={(e) => setTelefonnummer(e.target.value)}/>
                    <button className={classes.savedatachanges}>Änderungen Speichern</button>
                </div>
                    </div>
                <hr />
                <div className={classes.datadesc}>
                    <p className={classes.sectionheading}>ÜBER UNS TEXT</p>
                    <Toggle />
                </div>
                <textarea className={classes.ueberunstextarea} onChange={(e) => setUeberuns(e.target.value)} placeholder="Der Text, den Sie hier eingeben, wird auf ihrem öffentlichen Profil angezeigt"/>
                <button className={classes.saveueberunschanges}>Änderungen Speichern</button>
                <hr />
                <br />
                <div className={classes.sectionheading}>BRANCHE AUSWÄHLEN</div>
                <div className={classes.radiobuttons}>
                    <div className={classes.twobuttonsonecolumn}>
                        <input type="radio" value="fahrzeug-haendler" name="branche"  /> Fahrzeug Händler<br/>
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
                {gewerbeberechtigungFile != "" && gewerbeberechtigungFile.target.value }
                <div className={classes.twobuttons}><label className={classes.dateihinzufuegenbtn}>
                <Clip className={classes.clip}/>{" "}Datei hinzufügen
                 <input
          id="fileSelect"
          type="file"
          multiple
          onChange={(e) => setGewerbeberechtigungFile(e)}
          className={classes.selectFile}
        />
                 </label>
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
                            <input className={classes.securityinput} placeholder="Aktuelle E-Mail Adresse" onChange={(e) => setActMail(e.target.value)}/>
                            <input className={classes.securityinput} placeholder="Neue E-Mail Adresse" onChange={(e) => setNewMail(e.target.value)}/>
                            <input className={classes.securityinput} placeholder="Neue E-Mail Adresse wiederholen" onChange={(e) => setNewMail2(e.target.value)}/>
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
                            <input className={classes.securityinput} placeholder="Aktuelles Passwort" onChange={(e) => setActPassword(e.target.value)}/>
                            <input className={classes.securityinput} placeholder="Neues Passwort" onChange={(e) => setNewPassword(e.target.value)}/>
                            <input className={classes.securityinput} placeholder="Neues Passwort wiederholen" onChange={(e) => setNewPassword2(e.target.value)}/>
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
                        <Toggle toggle={() => {
                            setT1(t => !t)
                            
                        }} toggleOn={t1}/>
                    </div>
                    <div className={classes.benachrichtigungseinstellung}>
                        <div className={classes.benachrichtigunsdesc}>Erinnerungsbenachrichtigung vor Ablauf eines Inserates.</div>
                        <Toggle toggle={() => {
                            setT2(t => !t);
                            if(t2){
                                setT1(false);
                            }
                        }} toggleOn={t2}/>
                    </div>
                    <div className={classes.benachrichtigungseinstellung}>
                        <div className={classes.benachrichtigunsdesc}>Erinnerungsbenachrichtigung vor Ablauf eines Giga Powers.</div>
                        <Toggle toggle={() => {
                            setT3(t => !t)
                            if(t3){
                                setT1(false);
                            }
                        }} toggleOn={t3}/>
                    </div>
                    <div className={classes.benachrichtigungseinstellung}>
                        <div className={classes.benachrichtigunsdesc}>Benachrichtigung, dass der Preis des favorisierten Inserates gesunken ist.</div>
                        <Toggle toggle={() => {
                            setT4(t => !t);
                            if(t4){
                                setT1(false);
                            }
                        }} toggleOn={t4}/>
                    </div>
                    <div className={classes.benachrichtigungseinstellung}>
                        <div className={classes.benachrichtigunsdesc}>Erinnerungsbenachrichtigung vor Ablauf eines Abos.</div>
                        <Toggle toggle={() => {
                            setT5(t => !t)
                            if(t5){
                                setT1(false);
                            }
                        }} toggleOn={t5}/>
                    </div>
                    <div className={classes.benachrichtigungseinstellung}>
                        <div className={classes.benachrichtigunsdesc}>Erinnerungsbenachrichtigung für Suchaufträge.</div>
                        <Toggle toggle={() => {
                            setT6(t => !t)
                            if(t6){
                                setT1(false);
                            }
                        }} toggleOn={t6}/>
                    </div>
                    <div className={classes.benachrichtigungseinstellung}>
                        <div className={classes.benachrichtigunsdesc}>Newsletter an-/abmelden.</div>
                        <Toggle toggle={() => {
                            setT7(t => !t);
                            if(t7){
                                setT1(false);
                            }
                        }} toggleOn={t7}/>
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
                    {blockierteBenutzer.map((user, i) => <div key={i} className={classes.user}>
                        <div className={classes.userleft}>
                            <div className={classes.profileimg}>
                                {user.profileImg ? <Image src={user.profileImg} layout='fill' objectFit='cover' /> : null}
                            </div>
                            <div className={classes.username}>{user.vorname + " " + user.nachname}</div>
                        </div>
                        <div className={classes.blockaufheber} >
                            {openBlockDeleter && <div className={classes.openedblockdeletercontainer}>
                                <div className={classes.closer} onClick={() => setOpenBlockDeleter(false)}></div>
                                <div className={classes.openedblockdeleter}>
                                    <div className={classes.blockheading}>Sind Sie sicher?</div>
                                    <div className={classes.blockparagraph}>Möchten Sie {blockierteBenutzer[blockedUserIndex].vorname + " " + blockierteBenutzer[blockedUserIndex].nachname} wirklich entblockieren?</div>
                                    <div className={classes.entblockierenbtn} onClick={(e) => {
                                        handleUnblocker(blockedUserIndex);
                                    }} >Blockierung aufheben</div>
                                </div>
                                <div className={classes.closebtn} onClick={() => setOpenBlockDeleter(false)}>
                                    <Closer className={classes.closerx}/>
                                </div>
                            </div>}
                            <a className={classes.link} onClick={() => {
                                setOpenBlockDeleter(true);
                                setBlockedUserIndex(i);
                            }}>Blockierung aufheben</a>
                        </div>
                    </div>)}
                </div>
            </div>}
        </div>
    );
}