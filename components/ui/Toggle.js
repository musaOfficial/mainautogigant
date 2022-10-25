import Settingson from './../../public/settingson.svg'
import Settingsoff from './../../public/settingsoff.svg'
import classes from './Toggle.module.css';
import { useState } from 'react'
function Toggle(props){
    function handleClick(){
        props.toggle();
    }
    return (
        <div>
            {props.toggleOn == true && <Settingson className={classes.settingson} onClick={handleClick} value="true" name="toggle"/>}
            {props.toggleOn == false && <Settingsoff className={classes.settingsoff} onClick={handleClick} value="false" name="toggle"/>}
        </div>
    )
}

export default Toggle;