import { useState } from 'react';
import classes from './PageSearch.module.css';
import Select from "react-select";
function PageSearch({
    totalAds
}){
    const style = {
        control: (base) => ({
          ...base,
          boxShadow: "none",
          border: "1px solid #6C757D",
          fontSize: '13px',
          borderRadius: '10px',
          color: '#6C757D'
        }),
        option: (styles, state) => ({
          ...styles,
          backgroundColor: state.isSelected ? "#fbb900" : "",
          "&:active": "#fbb90080",
          fontSize: '16px',
          color: '#6C757D',
        }),
      };

    const possibles = [
        {value: 25, label: "25"},
        {value: 50, label: "50"},
        {value: 75, label: "75"}
    ];

    const [shownAds, setShownAds] = useState(25);
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

    const [value, setValue] = useState(0);

    var amountPages = Math.round(totalAds / shownAds)
    console.log(amountPages)
    return (
        <div className={classes.container}>
            <div className={classes.pagecounter}>
                <button className={classes.back} onClick={() => {
                    setBtn1(false);
                    setBtn2(false);
                    setBtn3(false);
                    setBtn4(false);
                    setBtn5(false);
                    setBtn6(false);
                    setBtn7(false);
                    setBtn8(false);
                    setBtn9(false);
                    setBtn10(false);
                    if(currentEl != 1){
                        setCurrentEl(d => d - 1)
                    }
                    if(currentEl == 1){
                        setBtn1(true);
                        setBtn2(false);
                        setBtn3(false);
                        setBtn4(false);
                        setBtn5(false);
                        setBtn6(false);
                        setBtn7(false);
                        setBtn8(false);
                        setBtn9(false);
                        setBtn10(false);
                    }
                    if(currentEl == 2){
                        setBtn1(false);
                        setBtn2(true);
                        setBtn3(false);
                        setBtn4(false);
                        setBtn5(false);
                        setBtn6(false);
                        setBtn7(false);
                        setBtn8(false);
                        setBtn9(false);
                        setBtn10(false);
                    }
                    if(currentEl == 3){
                        setBtn1(false);
                        setBtn2(false);
                        setBtn3(true);
                        setBtn4(false);
                        setBtn5(false);
                        setBtn6(false);
                        setBtn7(false);
                        setBtn8(false);
                        setBtn9(false);
                        setBtn10(false);
                    }
                    if(currentEl == 4){
                        setBtn1(false);
                        setBtn2(false);
                        setBtn3(false);
                        setBtn4(true);
                        setBtn5(false);
                        setBtn6(false);
                        setBtn7(false);
                        setBtn8(false);
                        setBtn9(false);
                        setBtn10(false);
                    }
                    if(currentEl == 6){
                        setBtn1(false);
                        setBtn2(false);
                        setBtn3(false);
                        setBtn4(false);
                        setBtn5(true);
                        setBtn6(false);
                        setBtn7(false);
                        setBtn8(false);
                        setBtn9(false);
                        setBtn10(false);
                    }
                }} >Zurück</button>
                <button onClick={() => {
                    setCurrentEl(1);
                    setBtn1(false);
                    setBtn2(false);
                    setBtn3(false);
                    setBtn4(false);
                    setBtn5(false);
                    setBtn6(false);
                    setBtn7(false);
                    setBtn8(false);
                    setBtn9(false);
                    setBtn10(false);
                    if(currentEl < 6){
                        setBtn1(true);
                        setBtn2(false);
                        setBtn3(false);
                        setBtn4(false);
                        setBtn5(false);
                        setBtn6(false);
                        setBtn7(false);
                        setBtn8(false);
                        setBtn9(false);
                        setBtn10(false);
                    }
                }} className={btn1 == true && classes.selected} >
                    1
                </button>
                <button onClick={() => {
                    if(currentEl <= 6){
                        setCurrentEl(2);
                    }
                    setBtn1(false);
                    setBtn2(false);
                    setBtn3(false);
                    setBtn4(false);
                    setBtn5(false);
                    setBtn6(false);
                    setBtn7(false);
                    setBtn8(false);
                    setBtn9(false);
                    setBtn10(false);
                    if(currentEl < 6){
                        setBtn1(false);
                        setBtn2(true);
                        setBtn3(false);
                        setBtn4(false);
                        setBtn5(false);
                        setBtn6(false);
                        setBtn7(false);
                        setBtn8(false);
                        setBtn9(false);
                        setBtn10(false);
                    }
                }} className={btn2 == true && classes.selected} >
                    {currentEl <= 6 ? 2 : "..."}
                </button>
                <button onClick={() => {
                    currentEl <= 6 ? setCurrentEl(3) : setCurrentEl(currentEl - 3);
                    currentEl > amountPages - 4 ? setCurrentEl(amountPages - 7) : setCurrentEl(currentEl - 3);
                    setBtn1(false);
                    setBtn2(false);
                    setBtn3(false);
                    setBtn4(false);
                    setBtn5(false);
                    setBtn6(false);
                    setBtn7(false);
                    setBtn8(false);
                    setBtn9(false);
                    setBtn10(false);
                    if(currentEl < 6){
                        setBtn1(false);
                        setBtn2(false);
                        setBtn3(true);
                        setBtn4(false);
                        setBtn5(false);
                        setBtn6(false);
                        setBtn7(false);
                        setBtn8(false);
                        setBtn9(false);
                        setBtn10(false);
                    }
                }} className={btn3 == true && classes.selected}>
                    {currentEl <= 6 ? 3 : currentEl < amountPages - 4 ? currentEl - 3 : amountPages - 7}
                </button>
                <button onClick={() => {
                    currentEl <= 6 ? setCurrentEl(4) : setCurrentEl(currentEl - 2);
                    currentEl > amountPages - 4 ? setCurrentEl(amountPages - 6) : setCurrentEl(currentEl - 2);
                    setBtn1(false);
                    setBtn2(false);
                    setBtn3(false);
                    setBtn4(false);
                    setBtn5(false);
                    setBtn6(false);
                    setBtn7(false);
                    setBtn8(false);
                    setBtn9(false);
                    setBtn10(false);
                    if(currentEl < 6){
                        setBtn1(false);
                        setBtn2(false);
                        setBtn3(false);
                        setBtn4(true);
                        setBtn5(false);
                        setBtn6(false);
                        setBtn7(false);
                        setBtn8(false);
                        setBtn9(false);
                        setBtn10(false);
                    }
                }} className={btn4 == true && classes.selected} >
                    {currentEl <= 6 ? 4 : currentEl < amountPages - 4 ? currentEl - 2 : amountPages - 6}
                </button>
                <button onClick={() => {
                    currentEl <= 6 ? setCurrentEl(5) : setCurrentEl(currentEl - 1);
                    currentEl > amountPages - 4 ? setCurrentEl(amountPages - 5) : setCurrentEl(currentEl - 1);
                    setBtn1(false);
                    setBtn2(false);
                    setBtn3(false);
                    setBtn4(false);
                    setBtn5(false);
                    setBtn6(false);
                    setBtn7(false);
                    setBtn8(false);
                    setBtn9(false);
                    setBtn10(false);
                    if(currentEl < 6){
                        setBtn1(false);
                        setBtn2(false);
                        setBtn3(false);
                        setBtn4(false);
                        setBtn5(true);
                        setBtn6(false);
                        setBtn7(false);
                        setBtn8(false);
                        setBtn9(false);
                        setBtn10(false);
                    }
                }} className={btn5 == true && classes.selected} >
                    {currentEl <= 6 ? 5 : currentEl < amountPages - 4 ? currentEl - 1 : amountPages - 5}
                </button>
                <button onClick={() => {
                    if(currentEl <= 6){
                        setCurrentEl(6);
                    }
                    setBtn1(false);
                    setBtn2(false);
                    setBtn3(false);
                    setBtn4(false);
                    setBtn5(false);
                    setBtn6(false);
                    setBtn7(false);
                    setBtn8(false);
                    setBtn9(false);
                    setBtn10(false);
                    if(currentEl >= amountPages - 4){
                        setCurrentEl(amountPages - 4)
                        setBtn1(false);
                        setBtn2(false);
                        setBtn3(false);
                        setBtn4(false);
                        setBtn5(false);
                        setBtn6(false);
                        setBtn7(false);
                        setBtn8(false);
                        setBtn9(false);
                        setBtn10(false);
                    }
                }} className={currentEl >= 6 && currentEl <= amountPages - 4  && classes.selected} >
                    {currentEl > 6 ? currentEl < amountPages - 4 ? currentEl : amountPages - 4 : 6}
                </button>
                <button onClick={() => {
                    setCurrentEl(currentEl + 1)
                    setBtn1(false);
                    setBtn2(false);
                    setBtn3(false);
                    setBtn4(false);
                    setBtn5(false);
                    setBtn6(false);
                    setBtn7(false);
                    setBtn8(false);
                    setBtn9(false);
                    setBtn10(false);
                    if(currentEl <= 6){
                        setCurrentEl(7)
                    }
                    if(currentEl >= amountPages - 4){
                        setCurrentEl(amountPages - 3)
                        setBtn1(false);
                        setBtn2(false);
                        setBtn3(false);
                        setBtn4(false);
                        setBtn5(false);
                        setBtn6(false);
                        setBtn7(true);
                        setBtn8(false);
                        setBtn9(false);
                        setBtn10(false);
                    }
                }} className={btn7 == true && classes.selected} >
                    {currentEl > 6 ? currentEl < amountPages - 4 ? currentEl + 1 : amountPages - 3 : 7}
                </button>
                <button onClick={() => {
                    setCurrentEl(currentEl + 2)
                    setBtn1(false);
                    setBtn2(false);
                    setBtn3(false);
                    setBtn4(false);
                    setBtn5(false);
                    setBtn6(false);
                    setBtn7(false);
                    setBtn8(false);
                    setBtn9(false);
                    setBtn10(false);
                    if(currentEl <= 6){
                        setCurrentEl(8)
                    }
                    if(currentEl >= amountPages - 4){
                        setCurrentEl(amountPages - 2)
                        setBtn1(false);
                        setBtn2(false);
                        setBtn3(false);
                        setBtn4(false);
                        setBtn5(false);
                        setBtn6(false);
                        setBtn7(false);
                        setBtn8(true);
                        setBtn9(false);
                        setBtn10(false);
                    }
                }} className={btn8 == true && classes.selected} >
                    {currentEl > 6 ? currentEl < amountPages - 4 ? currentEl + 2 : amountPages - 2 : 8}
                </button>
                <button onClick={() => {
                    setCurrentEl(currentEl + 3)
                    setBtn1(false);
                    setBtn2(false);
                    setBtn3(false);
                    setBtn4(false);
                    setBtn5(false);
                    setBtn6(false);
                    setBtn7(false);
                    setBtn8(false);
                    setBtn9(false);
                    setBtn10(false);
                    if(currentEl <= 6){
                        setCurrentEl(9);
                    }
                    if(currentEl >= amountPages - 4){
                        setCurrentEl(amountPages - 1)
                        setBtn1(false);
                        setBtn2(false);
                        setBtn3(false);
                        setBtn4(false);
                        setBtn5(false);
                        setBtn6(false);
                        setBtn7(false);
                        setBtn8(false);
                        setBtn9(true);
                        setBtn10(false);
                    }
                }} className={btn9 == true && classes.selected} >
                    {currentEl > 6 ? currentEl < amountPages - 4 ? currentEl + 3 : amountPages - 1 : 9}
                </button>
                <button onClick={() => {
                    setCurrentEl(currentEl + 4)
                    setBtn1(false);
                    setBtn2(false);
                    setBtn3(false);
                    setBtn4(false);
                    setBtn5(false);
                    setBtn6(false);
                    setBtn7(false);
                    setBtn8(false);
                    setBtn9(false);
                    setBtn10(false);
                    if(currentEl <= 6){
                        setCurrentEl(10)
                    }
                    if(currentEl >= amountPages - 4){
                        setCurrentEl(amountPages)
                        setBtn1(false);
                        setBtn2(false);
                        setBtn3(false);
                        setBtn4(false);
                        setBtn5(false);
                        setBtn6(false);
                        setBtn7(false);
                        setBtn8(false);
                        setBtn9(false);
                        setBtn10(true);
                    }
                }} className={btn10 == true && classes.selected} >
                    {currentEl > 6 ? currentEl < amountPages - 4 ? currentEl + 4 : amountPages  : 10}
                </button>
                <button className={classes.forward} onClick={() => {
                    setBtn1(false);
                    setBtn2(false);
                    setBtn3(false);
                    setBtn4(false);
                    setBtn5(false);
                    setBtn6(false);
                    setBtn7(false);
                    setBtn8(false);
                    setBtn9(false);
                    setBtn10(false);
                    if(currentEl != amountPages){
                        setCurrentEl(d => d + 1)
                    }
                    if(currentEl == amountPages - 4){
                        setBtn1(false);
                        setBtn2(false);
                        setBtn3(false);
                        setBtn4(false);
                        setBtn5(false);
                        setBtn6(true);
                        setBtn7(false);
                        setBtn8(false);
                        setBtn9(false);
                        setBtn10(false);
                    }
                    if(currentEl == amountPages - 3){
                        setBtn1(false);
                        setBtn2(false);
                        setBtn3(false);
                        setBtn4(false);
                        setBtn5(false);
                        setBtn6(false);
                        setBtn7(true);
                        setBtn8(false);
                        setBtn9(false);
                        setBtn10(false);
                    }
                    if(currentEl == amountPages - 2){
                        setBtn1(false);
                        setBtn2(false);
                        setBtn3(false);
                        setBtn4(false);
                        setBtn5(false);
                        setBtn6(false);
                        setBtn7(false);
                        setBtn8(true);
                        setBtn9(false);
                        setBtn10(false);
                    }
                    if(currentEl == amountPages - 1){
                        setBtn1(false);
                        setBtn2(false);
                        setBtn3(false);
                        setBtn4(false);
                        setBtn5(false);
                        setBtn6(false);
                        setBtn7(false);
                        setBtn8(false);
                        setBtn9(true);
                        setBtn10(false);
                    }
                    if(currentEl == amountPages){
                        setBtn1(false);
                        setBtn2(false);
                        setBtn3(false);
                        setBtn4(false);
                        setBtn5(false);
                        setBtn6(false);
                        setBtn7(false);
                        setBtn8(false);
                        setBtn9(false);
                        setBtn10(true);
                    }
                }} >Weiter</button>
            </div>
            <div className={classes.shownadsperpage}>
                <span>Anzeigen pro Seite</span>
                <Select 
                    options={possibles}
                    styles={style}
                    placeholder="25"
                    onChange={(e) => setShownAds(e.value)}
                />
            </div>
        </div>
    )
}

export default PageSearch;