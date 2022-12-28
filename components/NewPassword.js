import { useState } from 'react';
import classes from './NewPassword.module.css';
function NewPassword(){
    const [password, setPassword] = useState();
    const [confirmPassword, setConfirmPassword] = useState();

    return (
        <div className={classes.container}>
            <div className={classes.left}>
                <div className={classes.heading}>Neues Passwort</div>
                <div className={classes.paragraph}>Bitte geben Sie Ihr neues Passwort ein und tippen Sie auf Passwort aktualisieren</div>
                <div className={classes.password}></div>
                <div className={classes.confirmpassword}></div>
            </div>
            <div className={classes.right}>
                
            </div>
        </div>
    )
}

export default NewPassword;