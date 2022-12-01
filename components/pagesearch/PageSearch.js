import { useState } from 'react';
import classes from './PageSearch.module.css';
function PageSearch({
    totalAds
}){

    const [shownPages, setShownPages] = useState(25);
    const [currentEl, setCurrentEl] = useState(6);

    const [btn1, setBtn1] = useState(false);
    const [btn2, setBtn2] = useState(false);
    const [btn3, setBtn3] = useState(false);
    const [btn4, setBtn4] = useState(false);
    const [btn5, setBtn5] = useState(false);
    const [btn6, setBtn6] = useState(false);
    const [btn7, setBtn7] = useState(false);
    const [btn8, setBtn8] = useState(false);
    const [btn9, setBtn9] = useState(false);
    const [btn10, setBtn10] = useState(false);

    return (
        <div className={classes.container}>
            <div className={classes.pagecounter}>
                <p className={classes.back}>Zurück</p>
                <button onClick={
                    () => {
                        setCurrentEl(1);
                        setBtn1(true)
                        setBtn2(false)
                        setBtn3(false)
                        setBtn4(false)
                        setBtn5(false)
                        setBtn6(false)
                        setBtn7(false)
                        setBtn8(false)
                        setBtn9(false)
                        setBtn10(false)
                    }} className={btn1 == true && classes.selected}>
                    1
                </button>
                <button onClick={() => {
                        currentEl <= 5 ? setCurrentEl(2) : null;

                    }}>
                    {currentEl <= 5 ? 2 : "..."}
                </button>
                <button onClick={() => {currentEl <= 5 ? setCurrentEl(3) : setCurrentEl(currentEl - 3)}}>
                    {currentEl <= 5 ? 3 : currentEl - 3}
                </button>
                <button onClick={() => {currentEl <= 5 ? setCurrentEl(4) : setCurrentEl(currentEl - 2)}}>
                    {currentEl <= 5 ? 4 : currentEl - 2}
                </button>
                <button onClick={() => {currentEl <= 5 ? setCurrentEl(5) : setCurrentEl(currentEl - 1)}}>
                    {currentEl <= 5 ? 5 : currentEl - 1}
                </button>
                <button onClick={() => {currentEl <= 5 ? setCurrentEl(6) : setCurrentEl(currentEl)}}>
                    {currentEl <= 5 ? 6 : currentEl}
                </button>
                <button onClick={() => {currentEl <= 5 ? setCurrentEl(7) : setCurrentEl(currentEl + 1)}}>
                    {currentEl <= 5 ? 7 : currentEl + 1}
                </button>
                <button onClick={() => {currentEl <= 5 ? setCurrentEl(8) : setCurrentEl(currentEl + 2)}}>
                    {currentEl <= 5 ? 8 : currentEl + 2}
                </button>
                <button onClick={() => {currentEl <= 5 ? setCurrentEl(9) : setCurrentEl(currentEl + 3)}}>
                    {currentEl <= 5 ? 9 : currentEl + 3}
                </button>
                <button onClick={() => {currentEl <= 5 ? setCurrentEl(10) : setCurrentEl(currentEl + 4)}}>
                    {currentEl <= 5 ? 10 : currentEl + 4}
                </button>
                <p className={classes.forward}>Weiter</p>
            </div>
        </div>
    )
}

export default PageSearch;