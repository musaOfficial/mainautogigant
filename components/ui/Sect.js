import Expand from './../../public/expand.svg';
import { useEffect, useState } from 'react';
import classes from './Sect.module.css';

function Sect({ heading, text, close}){
    const [open, setOpen] = useState(false)

    useEffect(() => {
        if(close == true){
            setOpen(false);
        }
    }, [close])

    return (
        <>
            <div className={classes.section} onClick={() => setOpen(d => !d)}>
                <div className={classes.sectionheading}>{heading}</div>
                <Expand className={open == true ? classes.rotated : classes.unrotated} />
            </div>
            <div className={classes.text}>
            {open == true &&
                <>
                <br></br>
                {text}
                </>
            }</div>
        </>
    )
}

export default Sect;