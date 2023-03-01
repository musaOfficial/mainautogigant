import Expand from './../../public/expand.svg';
import { useEffect, useState } from 'react';
import classes from './Sect.module.css';

function Sect({ heading, text, close, point}){
    const [open, setOpen] = useState(false)

    useEffect(() => {
        if(close == true){
            setOpen(false);
        }
    }, [close])

    return (
        <>
            <div className={classes.question} onClick={() => setOpen(d => !d)}>
                <div className='flex'>
                    <span className={classes.point}>{point}</span>
                    <span>{heading}</span>
                </div>
                <Expand className={`${classes.expandor} ${open == true && classes.unexpandor}`} />
            </div>
            {open == true && <div className={classes.description}>{text}</div>}
        </>
    )
}

export default Sect;