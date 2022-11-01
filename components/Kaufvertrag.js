
import { useState } from 'react';
import classes from './Kaufvertrag.module.css';
function KFZKaufvertrag(){
    const [purchaserFirstName, setPurchaserFirstName] = useState();
    const [purchaserLastName, setPurchaserLastName] = useState();
    const [purchaserStrasse, setPurchaserStrasse] = useState();
    const [purchaserHausnummer, setPurchaserHausnummer] = useState();
    const [purchaserPLZ, setPurchaserPLZ] = useState();
    const [purchaserOrt, setPurchaserOrt] = useState();

    const [sellerFirstName, setSellerFirstName] = useState();
    const [sellerLastName, setSellerLastName] = useState();
    const [sellerStrasse, setSellerStrasse] = useState();
    const [sellerHausnummer, setSellerHausnummer] = useState();
    const [sellerPLZ, setSellerPLZ] = useState();
    const [sellerOrt, setSellerOrt] = useState();

    const [brandName, setBrandName] = useState();
    const [modelName, setModelName] = useState();
    const [yearOfManifacture, setYearOfManifacture] = useState();

    // Fahrgestellnummer
    const [chassisNumber, setChassisNumber] = useState();

    // Motornummer
    const [engineNumber, setEngineNumber] = useState();

    const [purchaserDate, setPurchaserDate] = useState();
    const [sellerDate, setSellerDate] = useState();

    const [verkaufspreis, setVerkaufspreis] = useState();

    const handleSubmit = () => {

    }


    return (
        <div className={classes.container}>
            <div className={`${classes.contentcontainer} relative w-10/12 lg:w-full max-w-ag-container md:!w-full mx-auto flex lg:flex-col bg-white p-6`}>
                <div className={classes.content}>
                    <form onSubmit={handleSubmit}>
                    <h1 className={classes.heading}>KFZ Kaufvertrag</h1>
                    <p className={classes.desc}>
                        Einfach Kfz Kaufvertrag ausfüllen und kostenlos herunterladen,<br/> und schon haben Sie das notwendige Dokument für die Anmeldung des Fahrzeuges.
                    </p>
                    <h2 className={classes.sectionheading}>Käufer</h2>
                    <div className={classes.row}>
                        <input className={classes.first} placeholder={"Vorname"} onChange={(e) => setPurchaserFirstName(e.target.value)} required></input>
                        <input className={classes.second} placeholder={"Nachname"} onChange={(e) => setPurchaserLastName(e.target.value)} required></input>
                    </div>
                    <div className={classes.row}>
                        <input className={classes.first} placeholder={"Strasse"} onChange={(e) => setPurchaserStrasse(e.target.value)} required></input>
                        <input className={classes.second} placeholder={"Hausnummer"} onChange={(e) => setPurchaserHausnummer(e.target.value)} required></input>
                    </div>
                    <div className={classes.row}>
                        <input className={classes.first} placeholder={"PLZ"} onChange={(e) => setPurchaserPLZ(e.target.value)} required></input>
                        <input className={classes.second} placeholder={"Ort"} onChange={(e) => setPurchaserOrt(e.target.value)} required></input>
                    </div>
                    <h2 className={classes.sectionheading}>Verkäufer</h2>
                    <div className={classes.row}>
                        <input className={classes.first} placeholder={"Vorname"} onChange={(e) => setSellerFirstName(e.target.value)} required></input>
                        <input className={classes.second} placeholder={"Nachname"} onChange={(e) => setSellerLastName(e.target.value)} required></input>
                    </div>
                    <div className={classes.row}>
                        <input className={classes.first} placeholder={"Strasse"} onChange={(e) => setSellerStrasse(e.target.value)} required></input>
                        <input className={classes.second} placeholder={"Hausnummer"} onChange={(e) => setSellerHausnummer(e.target.value)} required></input>
                    </div>
                    <div className={classes.row}>
                        <input className={classes.first} placeholder={"PLZ"} onChange={(e) => setSellerPLZ(e.target.value)} required></input>
                        <input className={classes.second} placeholder={"Ort"} onChange={(e) => setSellerOrt(e.target.value)} required></input>
                    </div>
                    <h2 className={classes.sectionheading}>Fahrzeug</h2>
                    <input className={classes.inputfields} placeholder={"Marke"}                onChange={(e) => setBrandName(e.target.value)} required />
                    <input className={classes.inputfields} placeholder={"Modell"}               onChange={(e) => setModelName(e.target.value)} required />
                    <input className={classes.inputfields} placeholder={"Baujahr"}              onChange={(e) => setYearOfManifacture(e.target.value)} required />
                    <input className={classes.inputfields} placeholder={"Fahrgestellnummer"}    onChange={(e) => setChassisNumber(e.target.value)}  />
                    <input className={classes.inputfields} placeholder={"Motonummer"}           onChange={(e) => setEngineNumber(e.target.value)}  />
                    <h2 className={classes.sectionheading}>Verkaufspreis</h2>
                    <input className={classes.inputfields} placeholder={"Verkaufspreis in €"} type="number" onChange={(e) => setVerkaufspreis(e.target.value)}></input>
                    <div className={classes.row}>
                        <input className={classes.a} placeholder={"Ort, Datum"} onChange={(e) => setPurchaserDate(e.target.value)} required></input>
                        <input className={classes.b} placeholder={"Unterschrift Käufer"} readOnly={true}></input>
                    </div>
                    <div className={classes.row}>
                        <input className={classes.a} placeholder={"Ort, Datum"} onChange={(e) => setSellerDate(e.target.value)} required></input>
                        <input className={classes.b} placeholder={"Unterschrift Verkäufer"} readOnly={true}></input>
                    </div>
                    <button type='submit' className={classes.generatekaufvertragbtn}>Kaufvertrag generieren</button>
                    </form>
                </div>
                <div className={classes.secondcontent}>
                    <div className={classes.img}>
                        <span className={classes.yellowbackground}>KFZ Kaufvertrag<br></br></span>
                        <span className={classes.yellowbackground}>Vorlage<br></br></span>
                        <span className={classes.yellowbackground}>für Privatpersonen.</span>
                    </div>
                    <p className={classes.scdesc}>Im gebrauchten Zustand, wie besichtigt und Probe gefahren,<br/>ohne jede Gewährleistung.</p>
                    <p className={classes.scdesc}>Der Kaufpreis wurde bei der Übergabe des Wagens bezahlt<br/>und der Empfang hiermit bestätigt.</p>
                    <p className={classes.scdesc}>Für die Richtigkeit und Echtheit der Motor- und Fahrgestellnummer<br/> sowie der Fahrzeugpapiere haftet der Verkäufer.</p>
                    <p className={classes.scdesc}>Er bestätigt, dass das Fahrzeug sein alleiniges Eigentum ist und von<br/>keiner Seite irgendwelche Forderungen an denselben bestehen.</p>
                    <button className={classes.downloadtemplate}>Kaufvertrag Vorlage herunterladen</button>
                </div>
            </div>
        </div>
    );
}

export default KFZKaufvertrag;