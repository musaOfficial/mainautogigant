import classes from './SavedSearchesPage.module.css';
function SavedSearchesPage(){
    const savedSearches = [
        {
            brand: ["BMW", "Audi"],
            model: [["i8", "X6"], [""]],
            id: 0,
            description: "",
            erstzulassungAb: "12/2015",
            land: "Österreich",
            saveDate: "11.04.2022",
            equipments: ["Allrad"]
        },
        {
            brand: ["BMW"],
            model: [["i8", "X6"]],
            id: 1,
            description: "",
            erstzulassungAb: "12/2015",
            land: "Österreich",
            saveDate: "11.07.2022",
            equipments: ["Allrad"]
        },
        {
            brand: ["Audi"],
            model: [["R8"]],
            id: 2,
            description: "",
            erstzulassungAb: "12/2015",
            land: "Österreich",
            saveDate: "11.04.2022",
            equipments: ["Allrad"],
        },
    ]
    return (
        <div className={classes.container}>
            <div className={classes.savedheading}>Gespeicherte Suchen</div>
            <div className={classes.text}>Sie können Ihre gespeicherten Suchen hier löschen oder bearbeiten.</div>
            {savedSearches.map((search, index) => <div key={index} className={classes.savedsearch}>
                <div className={classes.heading}>{search.brand[0] + " " + search.model[0][0]}</div>
                <div className={classes.getmail}>Neue Angebote per E-Mail erhalten <input type={"checkbox"} /></div> 
                <br></br>
                <div className={classes.brandmodel}>
                <span className='mb-4'>Marke / Modell:</span>
                </div>
                <div className={classes.modelgrid}>
                    {search.model.map((md, mdindex) => {
                        if(md){
                            return <span key={mdindex}>{md.map((sr, srindex) => <span key={srindex} className={classes.singleitem}>{search.brand[mdindex] + " " +  sr}</span>)}</span>
                        }
                    }
                    )}
                </div>
                <div className={classes.grid}>
                    <div className={classes.erstzulassungrow}>Erstzulassung Ab: {search.erstzulassungAb}</div>
                    <div className={classes.land}>Land: {search.land}</div>
                </div>
                <div className={classes.functionalities}>
                    <div className={classes.date}>Gespeichert am: <span className=''>{search.saveDate}</span></div>
                    <div className={classes.funcrow}>
                        <div className={classes.anzeigenbtn}>Bearbeiten</div>
                        <div className={classes.loeschenbtn}>Löschen</div>
                        <button className={classes.anzeigenbtn}>Ergebnisse anzeigen</button>
                    </div>
                </div>
            </div>)}
        </div>
    )
}

export default SavedSearchesPage;