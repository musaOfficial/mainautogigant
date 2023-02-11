import { useState } from "react";
import classes from './ControlledCheckbox.module.css';
import Check from "./../../public/hackerl.svg";
function ControlledCheckbox({ onUpdate, label }){

    const [value, setValue] = useState();
    const handleChange = e => {
        setValue(e => !e);
        onUpdate(e => !e );
    }
    return (
        <div className='flex items-center'>
            <div className={classes.weiss} onClick={handleChange}>
            {value == true && <Check className={classes.blackcheck} />}
            </div>
            <span className={classes.typlabel}>{label}</span>
      </div>
    )
}

export default ControlledCheckbox;