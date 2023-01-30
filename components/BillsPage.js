import classes from './BillsPage.module.css';
import SearchICon from './../public/searchicon.svg';
import { useEffect, useState } from 'react';
import Select from 'react-select';
import Expand from './../public/expand.svg';
import GreenCheck from './../public/greencheck.svg';
import RedCheck from './../public/images/closedetail.svg';
import Closex from './../public/closex.svg'
import Download from './../public/download.svg';

function BillsPage(){
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
    const currentYear = Number(new Date().getUTCFullYear())
    for(let i = currentYear; i >= 2023; i--){
        if(i == currentYear){
            years.push({label: "Alle", value: null})
        }
        years.push({label: i, value: i})
    } 

    const [suche, setSuche] = useState("");
    const [selectedYear, setSelectedYear] = useState();

    const [rechnungen, setRechnungen] = useState([
        { 
            datum: new Date(2006,4,11),
            rechnungsnummer: "R2345677211",
            betrag: 621.42,
            bezahlt: true,
        },
        { 
            datum: new Date(2004,5,11),
            rechnungsnummer: "R0456007211",
            betrag: 263.59,
            bezahlt: false,
        },
        { 
            datum: new Date(2006,5,12),
            rechnungsnummer: "R0999997211",
            betrag: 150.54,
            bezahlt: false,
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

    const [matchedFilters, setMatchedFilters] = useState();

    function searchForBillNumber(){
        

    }


    function filterByYear(){

    }

    useEffect(() => {

        const filteredByYear = rechnungen.filter(v => v.datum.getFullYear() == selectedYear);
        setMatchedFilters(filteredByYear);

    }, [selectedYear])

    useEffect(() => {
        const re = RegExp(`.*${suche.toLowerCase().split('').join('.*')}.*`)

        // [ 'Belgium', 'Brest' ]
        const matches = rechnungen.filter(v => v.rechnungsnummer.toLowerCase().match(re))
        setMatchedFilters(matches);
    }, [suche])

    return (
        <div className={classes.container}>
            <div className={classes.heading}>Rechnungen</div>
            <div className={classes.text}>Hier finden Sie eine Übersicht Ihrer letzen Rechnungen</div>
            <div className={classes.searchandfilter}>
            <div className={classes.inputrow}>
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
            {suche == "" && selectedYear == null && rechnungen.map((rechnung, index) => <div key={index} className={classes.rechnung}>
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
            </div>)}
            {(suche != "" || selectedYear != null) && matchedFilters.map((rechnung, index) => <div key={index} className={classes.rechnung}>
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
            </div>)}
            </div>
            <div className={classes.linebottom}>
                <div className={classes.greencheckexplanation}>
                    <GreenCheck className={classes.greenchecker} /> = Zahlung erfolgreich durchgeführt
                </div>
                <div className={classes.redcheckexplanation}>
                    <RedCheck className={classes.redchecker} /> = Zahlung fehlgeschlagen
                </div>
            </div>
        </div>
    )
}

export default BillsPage;