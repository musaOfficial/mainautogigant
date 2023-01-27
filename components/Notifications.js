import classes from './Notifications.module.css'
function Notifications(){
    return (
        <div className={classes.container}>
            <div className={classes.heading}>Benachrichtigungen</div>
            <div className={classes.description}>Hier haben Sie die Möglichkeit, Systembenachrichtigungen und Updates in Echtzeit zu sehen. Diese können beinhalten wichtige Ankündigungen, Wartungsarbeiten oder neue Funktionen, die auf der Website verfügbar sind. So bleiben Sie immer auf dem Laufenden und verpassen keine wichtigen Informationen.</div>
        </div>
    )
}

export default Notifications;