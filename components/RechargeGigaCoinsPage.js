import classes from './RechargeGigaCoinsPage.module.css';
import SearchICon from './../public/searchicon.svg';
import { useEffect, useState } from 'react';
import Select from 'react-select';
import Expand from './../public/expand.svg';
import GreenCheck from './../public/plus.svg';
import RedCheck from './../public/minus.svg';
import Closex from './../public/closex.svg'
import Download from './../public/download.svg';
import ModelItem from './search/ModelItem';
import GigaCoins from './../public/gigacoins.svg';
import Schloss from './../public/schloss.svg';
import Sofort from './../public/sofort.svg';
import Visa from './../public/visa.svg';
import Klarna from './../public/klarna.svg';
import Eps from './../public/eps.svg';
import ApplePay from './../public/applepay.svg';

function RechargeGigaCoinsPage(){
    const style = {
        control: (base) => ({
          ...base,
          boxShadow: "none",
          border: "none",
          fontSize: '13px',
          borderRadius: '10px',
          cursor: "pointer",
          height: "40px",
        }),
        option: (styles, state) => ({
          ...styles,
          backgroundColor: state.isSelected ? "#fbb900" : "",
          "&:active": "#fbb90080",
          fontSize: '13px',
        }),
    };

    const years = [];
    for(let i = 2023 - 110; i <= 2023; i++){
        years.push({label: i + "", value: i})
    } 

    const [suche, setSuche] = useState("");
    const [selectedYear, setSelectedYear] = useState("");

    const [rechnungen, setRechnungen] = useState([
        { 
            datum: new Date(2006,4,11),
            rechnungsnummer: "R2345677211",
            betrag: 621.42,
            type: "add"
        },
        { 
            datum: new Date(2004,5,11),
            rechnungsnummer: "R0456007211",
            betrag: 263.59,
            type: "subtract"
        },
        { 
            datum: new Date(2006,5,12),
            rechnungsnummer: "R0999997211",
            betrag: 150.54,
            type: "add"
        },

    ])


    useEffect(() => {
        let sortArray = rechnungen.sort(
            (objA, objB) => Number(objA.datum) - Number(objB.datum)
        )
        setRechnungen([...sortArray]);
    }, [])

    const [sortDate, setSortDate] = useState(false);
    const [sortPrice, setSortPrice] = useState(false);
    const [searchActivated, setSearchActivated] = useState(false);

    function sortArrayByDate(){
        setSortDate(d => !d);
        if(!sortDate){
            const sortedArray = rechnungen.sort(
                (objA, objB) => Number(objA.datum) - Number(objB.datum)
            );
            setRechnungen([...sortedArray]);
        } else {
            const sortedArray = rechnungen.sort(
                (objA, objB) => Number(objB.datum) - Number(objA.datum)
            );
            setRechnungen([...sortedArray]);
        }
    }

    function sortArrayByPrice(){
        setSortPrice(d => !d);
        if(!sortPrice){
            const priceSorted = rechnungen.sort(
                (objA, objB) => Number(objA.betrag) - Number(objB.betrag)
            )
            setRechnungen([...priceSorted])
        } else {
            const priceSorted = rechnungen.sort(
                (objA, objB) => Number(objB.betrag) - Number(objA.betrag)
            )
            setRechnungen([...priceSorted])
        }
    }

    var matchedFilters = [];

    function searchForBillNumber(){
        
        const re = RegExp(`.*${suche.toLowerCase().split('').join('.*')}.*`)

        // [ 'Belgium', 'Brest' ]
        const matches = rechnungen.filter(v => v.rechnungsnummer.toLowerCase().match(re))
        matchedFilters = matches;
    }


    function filterByYear(){
        const filteredByYear = rechnungen.filter(v => v.datum.getFullYear() == selectedYear);
        matchedFilters = filteredByYear;
    }
    return (
        <div className={classes.container}>
            <div className={classes.heading}>GIGA COINS AUFLADEN</div>
            <div className={classes.text}>Wenn Sie Vorauszahlungen per Überweisung auf unser Bankkonto durchführen, wird der Betrag als Guthaben auf Ihr Kundenkonto gebucht. Zukünftige Rechnungsbeträge werden automatisch mit dem Guthaben verrechnet.</div>
            <div className={classes.actmoney}>Aktuelles Guthaben:</div>
            <div className={classes.searchandfilter}>
            <label htmlFor='input' className={classes.leftarea}>
            <div className={classes.searchinputarea}>
                <div className={classes.searchiconarea}>
                    <SearchICon className={classes.searchicon} />
                </div>
                <input id='input' type={"text"} onChange={(e) => setSuche(e.target.value)} className={classes.searchinput} placeholder={"Rechnungsnr."}/>

            </div>
            </label>
            <div className={classes.jahrselect}>
                <Select 
                    styles={style}
                    options={years}
                    placeholder="Alle Jahre"
                    className=''
                    onChange={(e) => {
                        setSelectedYear(e.value);
                        filterByYear();
                    }}
                    />
            </div>
            </div>
            
            {/* RECHNUNGENINFORMATION */}
            <div className={classes.infocontainer}>
                <div className={classes.status}>Status</div>
                <div className={classes.datelabel}><Expand className={sortDate == true ? classes.expandopen : classes.expand} onClick={sortArrayByDate}  />Datum</div>
                <div className={classes.renrlabel}>Rechnungsnr.</div>
                <div className={classes.download}>Download</div>
                <div className={classes.betrag}><Expand className={sortPrice == true ? classes.expandopen : classes.expand} onClick={sortArrayByPrice} />Betrag</div>
            </div>
            {/* RECHNUNGENLISTE */}
            <div className={classes.scrollbehavior}>
            {suche == "" && !searchActivated && selectedYear == "" ? rechnungen.map((rechnung, index) => <div key={index} className={classes.rechnung}>
                <div className={classes.bezahlt}></div>
                <div className={classes.zahlungschecker}>
                    {rechnung.type == "add" ? <GreenCheck className={classes.greencheck} /> : <RedCheck className={classes.redcheck} />}
                </div>
                <div className={classes.date}>{
                    rechnung.datum.toLocaleDateString()
                }</div>
                <div className={classes.rnnr}>
                    {rechnung.rechnungsnummer}<br></br>
                    {rechnung.type == "add" ? "GC Aufladung   .   ." : "Interne Buchung"}
                </div>
                <div className={classes.buttons}>
                    <div className={classes.pdf}><Download />.PDF</div>
                    <div className={classes.csv}><Download />.CSV</div>
                </div>
                <div className={classes.betrag}>{rechnung.betrag + " €"}</div>
            </div>) : matchedFilters.map((rechnung, index) => <div key={index} className={classes.rechnung}>
                <div className={rechnung.bezahlt ? classes.bezahlt : classes.nichtbezahlt}></div>
                <div className={classes.zahlungschecker}>
                    {rechnung.bezahlt == true ? <GreenCheck className={classes.greencheck} /> : <RedCheck className={classes.redcheck} />}
                </div>
                <div className={classes.date}>{
                    rechnung.datum.toLocaleDateString()
                }</div>
                <div className={classes.rnnr}>
                    {rechnung.rechnungsnummer}<br></br>
                    Rechnung
                </div>
                <div className={classes.buttons}>
                    <div className={classes.pdf}><Download />.PDF</div>
                    <div className={classes.csv}><Download />.CSV</div>
                </div>
                <div className={classes.betrag}>{rechnung.betrag + " €"}</div>
            </div>) }
            </div>
            <div className={classes.bigcontainer}>
                <div className={classes.gigaheading}>EURO AUFLADEN UND ZUSÄTZLICH<br></br>GRATIS GIGA COINS ERHALTEN.</div>
                <div className={classes.gigacoinrow}>
                    <div className={classes.gigaleft}>
                        <GigaCoins className={classes.gigacoins} />
                        <div>Jetzt Aufladen und zusätzlich Bonus erhalten.<br></br>Gültig bis 30.01.2023</div>
                    </div>
                    <div className={classes.gigaright}>
                        <div className={classes.firstbtn}>500,00 € Aufladen</div>
                        <div className={classes.boldtext}>SIE ERHALTEN + 10 GIGA COINS BONUS</div>
                        <div className={classes.firstbtn}>1.000,00 € Aufladen</div>
                        <div className={classes.boldtext}>SIE ERHALTEN + 25 GIGA COINS BONUS</div>
                        <div className={classes.firstbtn}>1.500,00 € Aufladen</div>
                        <div className={classes.boldtext}>SIE ERHALTEN + 50 GIGA COINS BONUS</div>
                    </div>
                </div>
            </div>
            <div className={classes.zahlungsmethoden}>
                <span className={classes.zahl}><Schloss className={classes.schloss} /> <span className={classes.zahlungtext}>Sichere Zahlung<br></br>per SSL-Verschlüsselung</span></span>
                <Sofort className={classes.sofort} />
                <Visa className={classes.sofort} />
                <Klarna className={classes.sofort} />
                <Eps className={classes.sofort} />
                <ApplePay className={classes.sofort} />
            </div>
        </div>
    )
}

export default RechargeGigaCoinsPage;