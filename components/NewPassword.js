import { useState } from 'react';
import classes from './NewPassword.module.css';
import Input from './ui/Input';
function NewPassword(){
    const [password, setPassword] = useState();
    const [confirmPassword, setConfirmPassword] = useState();

    return (
        <div className="bg-theme-gray-10 overflow-hidden lg:px-6 md:!px-0">
            <div className="relative w-10/12 lg:w-full max-w-ag-container md:!w-full mx-auto flex lg:flex-col bg-white p-6">
                <div className={classes.container}>
                    <div className={classes.content}>
                    <div className={classes.heading}>Neues Passwort</div>
                    <div className={classes.text}>Nun müssen Sie zweimal Ihr neues Passwort eingeben
und mit &rdquo;Senden&rdquo; bestätigen</div>
                    <Input placeholder={`Passwort`} inputType={`password`} onChange={(e) => setPassword(e.target.value)} />
                    <Input placeholder={`Passwort Wiederholen`} inputType={`password`} onChange={(e) => setConfirmPassword(e.target.value)} />
                    <button className={classes.sendbtn}>Senden</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NewPassword;