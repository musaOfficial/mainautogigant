import Image from 'next/image';
import classes from './CarDetails.module.css';
import Backtoresults from './../public/svgs/backtoresults.svg'
import ImageSlider from './slider/ImageSlider';
import CompanyName from './../public/svgs/companyname.svg';
import CompanyLocation from './../public/svgs/companylocation.svg'
import WhitePrinter from './../public/svgs/whiteprinter.svg';
import WhiteFavorites from './../public/svgs/whitefavorite.svg';
import WhiteShare from './../public/svgs/whiteshare.svg';
import Expand from './../public/expand.svg'
import { useState } from 'react';
function CarDetails(){


    const images = [
        "/images/lamborghini.jpg",
        "/images/lamborghini.jpg",
        "/images/lamborghini.jpg",
        "/images/logo.png",
        "/images/lamborghini.jpg",
        "/images/lamborghini.jpg",
        "/images/logo.png",
        "/images/lamborghini.jpg",
        "/images/lamborghini.jpg",
        "/images/logo.png",
        "/images/lamborghini.jpg",
        "/images/lamborghini.jpg",
        "/images/logo.png",
        "/images/lamborghini.jpg",
        "/images/lamborghini.jpg",
        "/images/logo.png",
        "/images/lamborghini.jpg",
        "/images/lamborghini.jpg",
    ];

    const [openBasisdaten, setOpenBasisdaten] = useState(false);
    const [openFahrzeughistorie, setOpenFahrzeughistorie] = useState(false);
    const [openTechnischeDaten, setOpenTechnischeDaten] = useState(false);
    const [openEnergieverbrauch, setOpenEnergieverbrauch] = useState(false);
    const [openAusstattung, setOpenAusstattung] = useState(false);
    const [openFarbeUndInnenAusstattung, setOpenFarbeUndInnenAusstattung] = useState(false);
    const [openFahrzeugbeschreibung, setOpenFahrzeugbeschreibung] = useState(false);
    const [openPreisbewertung, setOpenPreisbewertung] = useState(false);
    const [openVersicherung, setOpenVersicherung] = useState(false);

    return (
        <div className={classes.container}>
            <div className={`${classes.contentcontainer} relative w-10/12 lg:w-full max-w-ag-container md:!w-full mx-auto flex lg:flex-col bg-white p-6`}>
                <div>
                    <div className={classes.image}>
                        <Image src={"/images/ads-card-2.png"} width={1300} height={200}/>
                    </div>
                    <div className={classes.backtoresults}><Backtoresults/><span className={classes.bluetext}>zurück zur Ergebnisliste</span></div>
                    <div className={classes.typeanddate}>
                        <div>Gebrauchtwagen / Mercedes / CLS</div>
                        <div>Zuletz geändert: 26.10.2022, 20:57 Uhr</div>
                    </div>
                    <div className={classes.row1}>
                        <div className={classes.r1c1}>
                            <ImageSlider images={images}/>
                        </div>
                        <div className={classes.r1c2}>
                            <div className={classes.carinfocontainer}>
                                <div className={classes.pricerow}>
                                    <div className={classes.price}>€ 213.520,-</div>
                                    <div className={classes.nexttoprice}>
                                        <div className={classes.favorite}><WhiteFavorites className={classes.svg}/></div>
                                        <div className={classes.share}><WhiteShare className={classes.svg}/></div>
                                        <div className={classes.print}><WhitePrinter className={classes.svg}/></div>
                                    </div>
                                </div>
                                <div className={classes.carinfocontent}>
                                    <div className={classes.cartopinfo}>
                                        <div className={classes.carname}>Mercedes-Benz CLS 350</div>
                                        <div className={classes.cardesc}>d BlueEff. Autom. NUR 38.600km / 1.Besitz / Garantie</div>
                                        <div className={classes.companylocation}><CompanyLocation className={classes.companylocation}/> 2700 Wiener Neustadt | AT</div>
                                    </div>
                                    <div className={classes.l}><span className={classes.infoabt}>Kilometerstand</span><span className={classes.actinfo}>5 300 km</span></div>
                                    <div className={classes.g}><span className={classes.infoabt}>Getriebe</span><span className={classes.actinfo}>Automatik</span></div>
                                    <div className={classes.l}><span className={classes.infoabt}>Erstzulassung</span><span className={classes.actinfo}>07/2020</span></div>
                                    <div className={classes.g}><span className={classes.infoabt}>Kraftstoff</span><span className={classes.actinfo}>Benzin</span></div>
                                    <div className={classes.l}><span className={classes.infoabt}>Leistung</span><span className={classes.actinfo}>225 kW (306 PS)</span></div>
                                    <div className={classes.g}><span className={classes.infoabt}>Verkäufer</span><span className={classes.actinfo}>Privat</span></div>
                                    <div className={classes.greyback}>Finanzierung berechnen</div>
                                    <div className={classes.greyback}>Versicherung berechnen</div>
                                    <div className={classes.whiteback}>
                                        <button className={classes.sendmail}>E-mail senden</button>
                                        <button className={classes.call}>+43 (0) 699 19778899</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={classes.row2}>
                        <div className={classes.r2c1}>
                            <div className={classes.section} onClick={() => setOpenBasisdaten(d => !d)}>
                                <h1 className={openBasisdaten == true ? classes.sectionheadingbig : classes.sectionheadingsmall}>Basisdaten</h1>
                                {openBasisdaten == false ? <Expand className={classes.expand}/> : <Expand className={classes.expandnot}/>}
                            </div>
                            {openBasisdaten == true && <div className={classes.basiscontainer}>
                                <div>
                                    <div className={classes.infoabout}>Karosserieform</div><div className={classes.actualinfo}>Kleinwagen</div>
                                </div>
                                <div>
                                    <div className={classes.infoabout}>Zustand</div><div className={classes.actualinfo}>Gebraucht</div>
                                </div>
                                <div>
                                    <div className={classes.infoabout}>Antriebsart</div><div className={classes.actualinfo}>Front</div>
                                </div>
                                <div>
                                    <div className={classes.infoabout}>Sitzplätze</div><div className={classes.actualinfo}>2</div>
                                </div>
                                <div>
                                    <div className={classes.infoabout}>Türen</div><div className={classes.actualinfo}>3</div>
                                </div>
                            </div>}
                            <div className={classes.section} onClick={() => setOpenFahrzeughistorie(d => !d)}>
                                <h1 className={openFahrzeughistorie == true ? classes.sectionheadingbig : classes.sectionheadingsmall}>Fahrzeughistorie</h1>
                                {openFahrzeughistorie == false ? <Expand className={classes.expand}/> : <Expand className={classes.expandnot}/>}
                            </div>
                            {openFahrzeughistorie == true && <div className={classes.basiscontainer}>
                                <div>
                                    <div className={classes.infoabout}>Kilometerstand</div><div className={classes.actualinfo}>99 500 km</div>
                                </div>
                                <div>
                                    <div className={classes.infoabout}>Erstzulassung</div><div className={classes.actualinfo}>08/2015</div>
                                </div>
                                <div>
                                    <div className={classes.infoabout}>Produktionsjahr</div><div className={classes.actualinfo}>2015</div>
                                </div>
                                <div>
                                    <div className={classes.infoabout}>HU</div><div className={classes.actualinfo}>08/2023</div>
                                </div>
                                <div>
                                    <div className={classes.infoabout}>Scheckheftgepflegt</div><div className={classes.actualinfo}>Ja</div>
                                </div>
                            </div>}
                            <div className={classes.section} onClick={() => setOpenTechnischeDaten(e => !e)}>
                                <h1 className={openTechnischeDaten == true ? classes.sectionheadingbig : classes.sectionheadingsmall}>Technische Daten</h1>
                                {openTechnischeDaten == false ? <Expand className={classes.expand}/> : <Expand className={classes.expandnot}/>}
                            </div>
                            {openTechnischeDaten == true && <div className={classes.basiscontainer}>
                                <div>
                                    <div className={classes.infoabout}>Leistung</div><div className={classes.actualinfo}>230 kW (313 PS)</div>
                                </div>
                                <div>
                                    <div className={classes.infoabout}>Getriebe</div><div className={classes.actualinfo}>Automatik</div>
                                </div>
                                <div>
                                    <div className={classes.infoabout}>Hubraum</div><div className={classes.actualinfo}>2 993 cm<sub>3</sub></div>
                                </div>
                                <div>
                                    <div className={classes.infoabout}>Gänge</div><div className={classes.actualinfo}>8</div>
                                </div>
                            </div>}
                            <div className={classes.section} onClick={() => setOpenEnergieverbrauch(e => !e)}>
                                <h1 className={openEnergieverbrauch == true ? classes.sectionheadingbig : classes.sectionheadingsmall}>Energieverbrauch</h1>
                                {openEnergieverbrauch == false ? <Expand className={classes.expand}/> : <Expand className={classes.expandnot}/>}
                            </div>
                            {openEnergieverbrauch == true && <div className={classes.basiscontainer}>
                                <div>
                                    <div className={classes.infoabout}>Kraftstoff</div><div className={classes.actualinfo}>Diesel (Partikelfilter)</div>
                                </div>
                                <div>
                                    <div className={classes.infoabout}>Kraftstoffverbrauch<sub>2</sub></div><div className={classes.actualinfo}>
                                        <div>10,6 l/100 km (komb.)</div>
                                        <div>6,8 l/100 km (innerorts)</div>
                                        <div>4,9 l/100 km (außerorts)</div>
                                    </div>
                                </div>
                                <div>
                                    <div className={classes.infoabout}>CO<sub><sub>2</sub></sub></div><div className={classes.actualinfo}></div>
                                </div>
                                <div>
                                    <div className={classes.infoabout}>Gänge</div><div className={classes.actualinfo}>8</div>
                                </div>
                            </div>}
                        </div>
                        <div className={classes.r2c2}>
                            <h1 className={classes.kontaktheading}>Anbieter kontaktieren</h1>
                            <p className={classes.yourmessage}>Deine Nachricht</p>
                            <textarea className={classes.textarea} placeholder={
                            `Guten Tag,

ich interessiere mich für ihr Fahrzeug.
Kontaktieren Sie mich bitte.

Mit freundlichen Grüßen`}></textarea>
                            <input className={classes.input} placeholder={"Name"}/>
                            <input className={classes.input} placeholder={"E-Mail"}/>
                            <input className={classes.input} placeholder={"Telefonnummer (optional)"}/>
                            <div className={classes.checkcontainer}>
                                <input className={classes.checkinput} type={"checkbox"}/>
                                <p>Ich möchte auf meine Interessen zugeschnittene Angebote und 
Neuigkeiten der AUTOGIGANT. GmbH per E-Mail erhalten. Ich kann 
diese Einwilligung jederzeit mit Wirkung für die Zukunft widerrufen.</p>
                            </div>
                            <button type='submit' className={classes.yellowbtn}>Nachricht senden</button>
                            <p className={classes.contactdesc}>Wir verwenden Deine E-Mail-Adresse gemäß unseren 
Datenschutzbestimmungen, z.B. für Fahrzeug-Empfehlungen ähnlich Deiner 
Suche. Wenn Du keine weiteren Fahrzeug-Empfehlungen mehr erhalten willst,
 kannst Du jederzeit hier widersprechen.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CarDetails;