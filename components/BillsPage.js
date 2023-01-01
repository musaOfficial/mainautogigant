import classes from './BillsPage.module.css';
import SearchICon from './../public/searchicon.svg';
import { useState } from 'react';
import Select from 'react-select';
import Expand from './../public/expand.svg';

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
    for(let i = 2023 - 110; i <= 2023 - 10; i++){
        years.push({label: i + "", value: i})
    } 

    const [suche, setSuche] = useState();
    const [allSelected, setAllSelected] = useState(false);

    const [rechnungen, setRechnungen] = useState([
        { 
            datum: "01.02.2022",
            rechnungsnummer: "R0016887211",
            betrag: 259.54,
            bezahlt: true,
        },
        { 
            datum: "01.02.2022",
            rechnungsnummer: "R0016887211",
            betrag: 259.54,
            bezahlt: false,
        }
    ]);

    return (
        <div className={classes.container}>
            <div className={classes.heading}>Rechnungen</div>
            <div className={classes.text}>Informationen zur Rechnugnsstellung:<br></br>Sie erhalten momentan 1 Rechnung pro Monat. Die Rechnung wird an folgendem Tag erstellt: 20. des Monats</div>
            <div className={classes.searchandfilter}>
            <label htmlFor='input' className={classes.leftarea}>
            <div className={classes.searchinputarea}>
                <div className={classes.searchiconarea}>
                    <SearchICon className={classes.searchicon} />
                </div>
                <input id='input' type={"text"} onChange={(e) => setSuche(e.target.value)} className={classes.searchinput}/>
                <div className={classes.suchbtn}>Suchen</div>
            </div>
            </label>
            <div className={classes.jahrselect}>
                <Select 
                    styles={style}
                    options={years}
                    placeholder="Alle Jahre"
                    className=''
                    />
            </div>
            </div>
            
            {/* RECHNUNGENINFORMATION */}
            <div className={classes.infocontainer}>
                <div className={classes.radiobtn}>
                    <input type={"checkbox"} className={classes.radioinput} checked={allSelected} onChange={() => setAllSelected(d => !d)} />
                </div>
                <div className={classes.datelabel}><Expand className={classes.expand} />Datum</div>
                <div className={classes.renrlabel}>Re.-Nr.</div>
                <div className={classes.download}>Download</div>
                <div className={classes.betrag}><Expand className={classes.expand} />Betrag</div>
            </div>
            {/* RECHNUNGENLISTE */}
            {rechnungen.map((rechnung, index) => <div className={classes.rechnung}>
                <div className={classes.bezahltfarbe}>
                    
                </div>
            </div>)}
        </div>
    )
}

export default BillsPage;