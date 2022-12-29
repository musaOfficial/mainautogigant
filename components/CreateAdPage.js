import classes from './CreateAdPage.module.css';
function CreateAdPage(){
    return (
        <div className={classes.container}>
            <div className={classes.partshower}>
                <div className={classes.one}>
                    1
                    <div className={classes.boldtext}>MODELL</div>
                    <div className={classes.parttext}>Fahrzeugmodell<br></br>und Erstzulassung</div>
                </div>
                <div className={classes.two}>
                    2
                    <div className={classes.boldtext}>DETAILS</div>
                    <div className={classes.parttext}>Fahrzeugsdaten<br></br>und Ausstattungen</div>
                </div>
                <div className={classes.three}>
                    3
                    <div className={classes.boldtext}>BILDER</div>
                    <div className={classes.parttext}>Bilder hochladen<br></br><br></br></div>
                </div>
                <div className={classes.four}>
                    4
                    <div className={classes.boldtext}>GIGA COINS</div>
                    <div className={classes.parttext}>Anzeige schneller<br></br>verkaufen</div>
                </div>
                <div className={classes.five}>
                    5
                    <div className={classes.boldtext}>VERÖFFENTLICHEN</div>
                    <div className={classes.parttext}>Stelle deine<br />Anzeige online</div>
                </div>
            </div>
            <div className={classes.heading}>MODELL</div>
            <div className={classes.description}>Fahrzeugmodell und Erstzulassung</div>
        </div>
    )
}

export default CreateAdPage;