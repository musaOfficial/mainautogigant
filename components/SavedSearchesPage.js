import classes from './SavedSearchesPage.module.css';
function SavedSearchesPage(){
    const savedSearches = [
        {
            brand: ["BMW", "Audi"],
            model: [["i8", "X6"], [""]],
            id: 0,
            description: "",
            saveDate: "11.04.2022",
            equipments: ["Allrad"]
        },
        {
            brand: ["BMW"],
            model: [["i8", "X6"]],
            id: 1,
            description: "",
            saveDate: "11.07.2022",
            equipments: ["Allrad"]
        },
        {
            brand: ["Audi"],
            model: [["R8"]],
            id: 2,
            description: "",
            saveDate: "11.04.2022",
            equipments: ["Allrad"]
        },
    ]
    return (
        <div className={classes.container}>
            {savedSearches.map((search, index) => <div key={index} className={classes.savedsearch}>
                <div className={classes.heading}>{search.brand[0] + " " + search.model[0][0]}</div>
                <div className={classes.getmail}>Neue Angebote per E-Mail erhalten <input type={"checkbox"} /></div>
                <br></br>
                <div className={classes.brandmodel}><span className='mr-2'>Marke / Modell:</span>{search.model.map((md, mdindex) => {
                    if(md){
                        return <span>{md.map((sr, srindex) => <span className={classes.singleitem}>{search.brand[mdindex] + " " +  sr}</span>)}</span>
                    }
                }
                )}</div>
                {search.equipments.length == 0 ? null : <a className={classes.weiteresuchkriterien}>Ihre weiteren Suchkriterien</a>}
                <div className={classes.liner}></div>
                <div className={classes.functionalities}>
                    <div className={classes.date}>Gespeichert am: <span className='font-bold'>{search.saveDate}</span></div>
                    <div className={classes.bearbeiten}>Bearbeiten</div>
                    <div className={classes.loeschen}>Löschen</div>
                    <button className={classes.anzeigenbtn}>Ergebnisse anzeigen</button>
                </div>
            </div>)}
        </div>
    )
}

export default SavedSearchesPage;