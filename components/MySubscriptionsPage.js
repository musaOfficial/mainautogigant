import { useState } from 'react';
import classes from './MySubscriptionsPage.module.css';
function MySubscriptionsPage(){

    const [threemonthpackage, setThreemonthpackage] = useState(false);
    const [sixmonthpackage, setSixmonthpackage] = useState(false);
    const [twelvemonthpackage, setTwelvemonthpackage] = useState(false);
    const [twentyfourmonthpackage, setTwentyfourmonthpackage] = useState(false);
    return (
        <div className={classes.container}>
            <div className={classes.bigheading}>WIR WOLLEN, DASS SIE ERFOLGREICH SIND<br></br>schnell. einfach. gigantisch.</div>
            <div className={classes.bigdescription}>
                Da wir weitgehend vollautomatisierte Systeme verwenden, ist es möglich sehr preisgünstig zu bleiebn. Sie genießen dadurch ein System, welches rund um die Uhr in Echtzeit arbeitet.<br></br><br></br>
                Bitte wählen Sie Ihren bevorzugten Zeitraum und klicken Sie auf das gewünschte Paket, <br></br>
                um mehr aus Ihrem Business rauszuholen.
            </div>
            <div className={classes.packageselection}>
                <div className={`${classes.selection} ${threemonthpackage == true && classes.selected} `} onClick={() => {
                    setThreemonthpackage(true);
                    setSixmonthpackage(false);
                    setTwelvemonthpackage(false);
                    setTwentyfourmonthpackage(false);
                }} >3 Monate</div>
                <div className={`${classes.selection} ${sixmonthpackage == true && classes.selected} `} onClick={() => {
                    setThreemonthpackage(false);
                    setSixmonthpackage(true);
                    setTwelvemonthpackage(false);
                    setTwentyfourmonthpackage(false);
                }}>6 Monate</div>
                <div className={`${classes.selection} ${twelvemonthpackage == true && classes.selected} `} onClick={() => {
                    setThreemonthpackage(false);
                    setSixmonthpackage(false);
                    setTwelvemonthpackage(true);
                    setTwentyfourmonthpackage(false);
                }}>12 Monate</div>
                <div className={`${classes.selection} ${twentyfourmonthpackage == true && classes.selected} `} onClick={() => {
                    setThreemonthpackage(false);
                    setSixmonthpackage(false);
                    setTwelvemonthpackage(false);
                    setTwentyfourmonthpackage(true);
                }}>24 Monate</div>
            </div>
        </div>
    ) 
}

export default MySubscriptionsPage;