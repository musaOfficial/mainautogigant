import { useEffect, useState } from 'react';
import classes from './MySubscriptionsPage.module.css';
import Greentick from './../public/greentick.svg';
import Graytick from './../public/graytick.svg';
import GigantUnlimited from './../public/gigantunlimited.svg';
import List from './../public/list.svg';
import Expic from './../public/expic.svg';
import Comfy from './../public/comfy.svg';
import Trendy from './../public/trending.svg';
import Pushup from './../public/pushup.svg';
import GigaLabel from './../public/gigalabelwhite.svg';
import Screen from './../public/screen.svg';


function MySubscriptionsPage(){

    const [threemonthpackage, setThreemonthpackage] = useState(true);
    const [sixmonthpackage, setSixmonthpackage] = useState(false);
    const [twelvemonthpackage, setTwelvemonthpackage] = useState(false);
    const [twentyfourmonthpackage, setTwentyfourmonthpackage] = useState(false);

    const [switcherFirstOn, setSwitcherFirstOn] = useState(false);
    const [switcherSecondOn, setSwitcherSecondOn] = useState(false);
    const [switcherThirdOn, setSwitcherThirdOn] = useState(false);
    const [switcherFourthOn, setSwitcherFourthOn] = useState(false);


    // Three Month Plan
    const threemonthpackageSmallPrice = 79.90;
    const threemonthpackageSmallPriceMonthly = 83.70 / 3;
    const threemonthpackageMediumPrice = 99.90;
    const threemonthpackageMediumPriceMonthly = 104.70 / 3;
    const threemonthpackageLargePrice = 129.90;
    const threemonthpackageLargePriceMonthly = 134.70 / 3;
    const threemonthpackageUnlimitedPrice = 199.90;
    const threemonthpackageUnlimitedPriceMonthly = 203.70 / 3;

    // Six Month Plan
    const sixmonthpackageSmallPrice = 155.40;
    const sixmonthpackageSmallPriceMonthly = 161.40 / 6;
    const sixmonthpackageMediumPrice = 197.40;
    const sixmonthpackageMediumPriceMonthly = 203.40 / 6;
    const sixmonthpackageLargePrice = 257.40;
    const sixmonthpackageLargePriceMonthly = 263.40 / 6;
    const sixmonthpackageUnlimitedPrice = 395.40;
    const sixmonthpackageUnlimitedPriceMonthly = 401.40 / 6;

    // Twelve Month Plan
    const twelvemonthpackageSmallPrice = 298.80;
    const twelvemonthpackageSmallPriceMonthly = 310.80 / 12;
    const twelvemonthpackageMediumPrice = 382.80;
    const twelvemonthpackageMediumPriceMonthly = 394.80 / 12;
    const twelvemonthpackageLargePrice = 502.80;
    const twelvemonthpackageLargePriceMonthly = 514.80 / 12;
    const twelvemonthpackageUnlimitedPrice = 778.80;
    const twelvemonthpackageUnlimitedPriceMonthly = 790.80 / 12;

    // Twentyfour Month Plan
    const twentyfourmonthpackageSmallPrice = 573.60;
    const twentyfourmonthpackageSmallPriceMonthly = 597.60 / 24;
    const twentyfourmonthpackageMediumPrice = 741.60;
    const twentyfourmonthpackageMediumPriceMonthly = 765.60 / 24;
    const twentyfourmonthpackageLargePrice = 981.60;
    const twentyfourmonthpackageLargePriceMonthly = 1005.60 / 24;
    const twentyfourmonthpackageUnlimitedPrice = 1533.60;
    const twentyfourmonthpackageUnlimitedPriceMonthly = 1557.60 / 24;


    const [selectedPrice, setSelectedPrice] = useState();


    function DisplayAsLocaleString(number){
        var editedNumber = number.toFixed(2).replace('.', ',')
        var displayNumber = editedNumber.toLocaleString() + " €"

        return displayNumber;
    }

    useEffect(() => {
        console.log(selectedPrice)
    }, selectedPrice)
    
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
            <div className={classes.packages}>
                {threemonthpackage == true &&<> <div className={`${classes.package} ${switcherFirstOn == true && classes.yellowpackage}`}>
                    <div className={classes.packageheading}><span>BUSINESS</span>SMALL</div>
                    <div className={classes.price}>{switcherFirstOn == false ? DisplayAsLocaleString(threemonthpackageSmallPrice) : DisplayAsLocaleString(threemonthpackageSmallPriceMonthly)}</div>
                    <div className={classes.pricedescription}>3-Monats-Paket{switcherFirstOn == true && "/mtl."}</div>
                    <div className={classes.addetail}>
                        <Greentick className={classes.tick} />
                        <span className={classes.addetailtext}>5 Anzeigen</span>
                    </div>
                    <div className={classes.addetail}>
                        <Greentick className={classes.tick} />
                        <span className={classes.addetailtext}>Fotos - Unlimited*</span>
                    </div>
                    <div className={classes.addetail}>
                        <Greentick className={classes.tick} />
                        <span className={classes.addetailtext}>Händlerprofil</span>
                    </div>
                    <div className={classes.addetail}>
                        <Graytick className={classes.tick} />
                        <span className={classes.addetailgray}>Profil Booster</   span>
                    </div>
                    <div className={classes.addetail}>
                        <Graytick className={classes.tick} />
                        <span className={classes.addetailgray}>1 x Anzeige vorreihen</span>
                    </div>
                    <div className={classes.addetail}>
                        <Graytick className={classes.tick} />
                        <span className={classes.addetailgray}>1 x Giga Label</span>
                    </div>
                    <div className={`${classes.addetaillast} ${classes.openedpricedescription}`}>
                        <Graytick className={classes.tick} />
                        <span className={classes.addetailgray}>1 x Ad Screen Slider</span>
                    </div>
                    <div className={classes.purchasebtn} onClick={() => {
                        if(switcherFirstOn === true){
                            setSelectedPrice((threemonthpackageSmallPriceMonthly * 3).toFixed(2))
                        } else {
                            setSelectedPrice((threemonthpackageSmallPrice).toFixed(2))
                        }
                    
                    }}>Bestellen</div>
                    <div className={classes.showdetail}>Details Anzeigen</div>
                    <div className={classes.optionrow}>
                        <span className={classes.graytext}>Option mtl. Zahlung</span>
                        <div className={`${classes.switcher} ${switcherFirstOn == true && classes.switcheron}`} onClick={() => setSwitcherFirstOn(d => !d)}>
                            <div className={`${classes.switchercircle} ${switcherFirstOn == true && classes.switcherCircleOn}`}></div>
                        </div>
                    </div>
                </div>
                <div className={`${classes.package} ${switcherSecondOn == true && classes.yellowpackage}`}>
                    <div className={classes.packageheading}><span>BUSINESS</span>MEDIUM</div>
                    <div className={classes.price}>{switcherSecondOn == false ? DisplayAsLocaleString(threemonthpackageMediumPrice) : DisplayAsLocaleString(threemonthpackageMediumPriceMonthly)}</div>
                    <div className={classes.pricedescription}>3-Monats-Paket{switcherSecondOn == true && "/mtl."}</div>
                    <div className={classes.addetail}>
                        <Greentick className={classes.tick} />
                        <span className={classes.addetailtext}>10 Anzeigen</span>
                    </div>
                    <div className={classes.addetail}>
                        <Greentick className={classes.tick} />
                        <span className={classes.addetailtext}>Fotos - Unlimited*</span>
                    </div>
                    <div className={classes.addetail}>
                        <Greentick className={classes.tick} />
                        <span className={classes.addetailtext}>Händlerprofil</span>
                    </div>
                    <div className={classes.addetail}>
                        <Greentick className={classes.tick} />
                        <span className={classes.addetailtext}>Profil Booster</span>
                    </div>
                    <div className={classes.addetail}>
                        <Graytick className={classes.tick} />
                        <span className={classes.addetailgray}>1 x Anzeige vorreihen</span>
                    </div>
                    <div className={classes.addetail}>
                        <Graytick className={classes.tick} />
                        <span className={classes.addetailgray}>1 x Giga Label</span>
                    </div>
                    <div className={`${classes.addetaillast} ${classes.openedpricedescription}`}>
                        <Graytick className={classes.tick} />
                        <span className={classes.addetailgray}>1 x Ad Screen Slider</span>
                    </div>
                    <div className={classes.purchasebtn} onClick={() => {
                        if(switcherSecondOn === true){
                            setSelectedPrice((threemonthpackageMediumPriceMonthly * 3).toFixed(2));
                        } else {
                            setSelectedPrice((threemonthpackageMediumPrice).toFixed(2));
                        }
                    }}>Bestellen</div>
                    <div className={classes.showdetail}>Details Anzeigen</div>
                    <div className={classes.optionrow}>
                        <span className={classes.graytext}>Option mtl. Zahlung</span>
                        <div className={`${classes.switcher} ${switcherSecondOn == true && classes.switcheron}`} onClick={() => setSwitcherSecondOn(d => !d)}>
                            <div className={`${classes.switchercircle} ${switcherSecondOn == true && classes.switcherCircleOn}`}></div>
                        </div>
                    </div>
                </div>
                <div className={`${classes.package} ${switcherThirdOn == true && classes.yellowpackage}`}>
                    <div className={classes.packageheading}><span>BUSINESS</span>LARGE</div>
                    <div className={classes.price}>{switcherThirdOn == false ? DisplayAsLocaleString(threemonthpackageLargePrice) : DisplayAsLocaleString(threemonthpackageLargePriceMonthly)}</div>
                    <div className={classes.pricedescription}>3-Monats-Paket{switcherThirdOn == true && "/mtl."}</div>
                    <div className={classes.addetail}>
                        <Greentick className={classes.tick} />
                        <span className={classes.addetailtext}>25 Anzeigen</span>
                    </div>
                    <div className={classes.addetail}>
                        <Greentick className={classes.tick} />
                        <span className={classes.addetailtext}>Fotos - Unlimited*</span>
                    </div>
                    <div className={classes.addetail}>
                        <Greentick className={classes.tick} />
                        <span className={classes.addetailtext}>Händlerprofil</span>
                    </div>
                    <div className={classes.addetail}>
                        <Greentick className={classes.tick} />
                        <span className={classes.addetailtext}>Profil Booster</span>
                    </div>
                    <div className={classes.addetail}>
                        <Greentick className={classes.tick} />
                        <span className={classes.addetailtext}>1 x Anzeige vorreihen</span>
                    </div>
                    <div className={classes.addetail}>
                        <Graytick className={classes.tick} />
                        <span className={classes.addetailgray}>1 x Giga Label</span>
                    </div>
                    <div className={`${classes.addetaillast} ${classes.openedpricedescription}`}>
                        <Graytick className={classes.tick} />
                        <span className={classes.addetailgray}>1 x Ad Screen Slider</span>
                    </div>
                    <div className={classes.purchasebtn} onClick={() => {
                        if(switcherThirdOn === true){
                            setSelectedPrice((threemonthpackageLargePriceMonthly * 3).toFixed(2));
                        } else {
                            setSelectedPrice((threemonthpackageLargePrice).toFixed(2));
                        }
                    }}>Bestellen</div>
                    <div className={classes.showdetail}>Details Anzeigen</div>
                    <div className={classes.optionrow}>
                        <span className={classes.graytext}>Option mtl. Zahlung</span>
                        <div className={`${classes.switcher} ${switcherThirdOn == true && classes.switcheron}`} onClick={() => setSwitcherThirdOn(d => !d)}>
                            <div className={`${classes.switchercircle} ${switcherThirdOn == true && classes.switcherCircleOn}`}></div>
                        </div>
                    </div>
                </div>
                <div className={`${classes.package} ${switcherFourthOn == true && classes.yellowpackage}`}>
                    <div className={classes.packageheading}>GIGANT<br></br>UNLIMITED</div>
                    <div className={classes.price}>{switcherFourthOn == false ? DisplayAsLocaleString(threemonthpackageUnlimitedPrice) : DisplayAsLocaleString(threemonthpackageUnlimitedPriceMonthly)}</div>
                    <div className={classes.pricedescription}>6-Monats-Paket{switcherFourthOn == true && "/mtl."}</div>
                    <div className={classes.addetail}>
                        <Greentick className={classes.tick} />
                        <span className={classes.addetailtext}>Anzeigen - Unlimited*</span>
                    </div>
                    <div className={classes.addetail}>
                        <Greentick className={classes.tick} />
                        <span className={classes.addetailtext}>Fotos - Unlimited*</span>
                    </div>
                    <div className={classes.addetail}>
                        <Greentick className={classes.tick} />
                        <span className={classes.addetailtext}>Händlerprofil</span>
                    </div>
                    <div className={classes.addetail}>
                        <Greentick className={classes.tick} />
                        <span className={classes.addetailtext}>Profil Booster</span>
                    </div>
                    <div className={classes.addetail}>
                        <Greentick className={classes.tick} />
                        <span className={classes.addetailtext}>1 x Anzeige vorreihen</span>
                    </div>
                    <div className={classes.addetail}>
                        <Greentick className={classes.tick} />
                        <span className={classes.addetailtext}>1 x Giga Label</span>
                    </div>
                    <div className={`${classes.addetaillast} ${classes.openedpricedescription}`}>
                        <Greentick className={classes.tick} />
                        <span className={classes.addetailtext}>1 x Ad Screen Slider</span>
                    </div>
                    <div className={classes.purchasebtn} onClick={() => {
                        if(switcherFourthOn === true){
                            setSelectedPrice((threemonthpackageUnlimitedPriceMonthly * 3).toFixed(2));
                        } else {
                            setSelectedPrice((threemonthpackageUnlimitedPrice).toFixed(2));
                        }
                    }}>Bestellen</div>
                    <div className={classes.showdetail}>Details Anzeigen</div>
                    <div className={classes.optionrow}>
                        <span className={classes.graytext}>Option mtl. Zahlung</span>
                        <div className={`${classes.switcher} ${switcherFourthOn == true && classes.switcheron}`} onClick={() => setSwitcherFourthOn(d => !d)}>
                            <div className={`${classes.switchercircle} ${switcherFourthOn == true && classes.switcherCircleOn}`}></div>
                        </div>
                    </div>
                    <GigantUnlimited className={classes.gigantunlimited} />
                </div></>}
                {sixmonthpackage == true &&<> <div className={`${classes.package} ${switcherFirstOn == true && classes.yellowpackage}`}>
                    <div className={classes.packageheading}><span>BUSINESS</span>SMALL</div>
                    <div className={classes.price}>{switcherFirstOn == false ? DisplayAsLocaleString(sixmonthpackageSmallPrice) : DisplayAsLocaleString(sixmonthpackageSmallPriceMonthly)}</div>
                    <div className={classes.pricedescription}>6-Monats-Paket{switcherFirstOn == true && "/mtl."}</div>
                    <div className={classes.addetail}>
                        <Greentick className={classes.tick} />
                        <span className={classes.addetailtext}>5 Anzeigen</span>
                    </div>
                    <div className={classes.addetail}>
                        <Greentick className={classes.tick} />
                        <span className={classes.addetailtext}>Fotos - Unlimited*</span>
                    </div>
                    <div className={classes.addetail}>
                        <Greentick className={classes.tick} />
                        <span className={classes.addetailtext}>Händlerprofil</span>
                    </div>
                    <div className={classes.addetail}>
                        <Graytick className={classes.tick} />
                        <span className={classes.addetailgray}>Profil Booster</span>
                    </div>
                    <div className={classes.addetail}>
                        <Graytick className={classes.tick} />
                        <span className={classes.addetailgray}>1 x Anzeige vorreihen</span>
                    </div>
                    <div className={classes.addetail}>
                        <Graytick className={classes.tick} />
                        <span className={classes.addetailgray}>1 x Giga Label</span>
                    </div>
                    <div className={`${classes.addetaillast} ${classes.openedpricedescription}`}>
                        <Graytick className={classes.tick} />
                        <span className={classes.addetailgray}>1 x Ad Screen Slider</span>
                    </div>
                    <div className={classes.purchasebtn} onClick={() => {
                        if(switcherFirstOn === true){
                            setSelectedPrice((sixmonthpackageSmallPriceMonthly * 3).toFixed(2))
                        } else {
                            setSelectedPrice((sixmonthpackageSmallPrice).toFixed(2))
                        }
                    
                    }}>Bestellen</div>
                    <div className={classes.showdetail}>Details Anzeigen</div>
                    <div className={classes.optionrow}>
                        <span className={classes.graytext}>Option mtl. Zahlung</span>
                        <div className={`${classes.switcher} ${switcherFirstOn == true && classes.switcheron}`} onClick={() => setSwitcherFirstOn(d => !d)}>
                            <div className={`${classes.switchercircle} ${switcherFirstOn == true && classes.switcherCircleOn}`}></div>
                        </div>
                    </div>
                </div>
                <div className={`${classes.package} ${switcherSecondOn == true && classes.yellowpackage}`}>
                    <div className={classes.packageheading}><span>BUSINESS</span>MEDIUM</div>
                    <div className={classes.price}>{switcherSecondOn == false ? DisplayAsLocaleString(sixmonthpackageMediumPrice) : DisplayAsLocaleString(sixmonthpackageMediumPriceMonthly)}</div>
                    <div className={classes.pricedescription}>6-Monats-Paket{switcherSecondOn == true && "/mtl."}</div>
                    <div className={classes.addetail}>
                        <Greentick className={classes.tick} />
                        <span className={classes.addetailtext}>10 Anzeigen</span>
                    </div>
                    <div className={classes.addetail}>
                        <Greentick className={classes.tick} />
                        <span className={classes.addetailtext}>Fotos - Unlimited*</span>
                    </div>
                    <div className={classes.addetail}>
                        <Greentick className={classes.tick} />
                        <span className={classes.addetailtext}>Händlerprofil</span>
                    </div>
                    <div className={classes.addetail}>
                        <Greentick className={classes.tick} />
                        <span className={classes.addetailtext}>Profil Booster</span>
                    </div>
                    <div className={classes.addetail}>
                        <Graytick className={classes.tick} />
                        <span className={classes.addetailgray}>1 x Anzeige vorreihen</span>
                    </div>
                    <div className={classes.addetail}>
                        <Graytick className={classes.tick} />
                        <span className={classes.addetailgray}>1 x Giga Label</span>
                    </div>
                    <div className={`${classes.addetaillast} ${classes.openedpricedescription}`}>
                        <Graytick className={classes.tick} />
                        <span className={classes.addetailgray}>1 x Ad Screen Slider</span>
                    </div>
                    <div className={classes.purchasebtn} onClick={() => {
                        if(switcherSecondOn === true){
                            setSelectedPrice((sixmonthpackageMediumPriceMonthly * 3).toFixed(2));
                        } else {
                            setSelectedPrice((sixmonthpackageMediumPrice).toFixed(2));
                        }
                    }}>Bestellen</div>
                    <div className={classes.showdetail}>Details Anzeigen</div>
                    <div className={classes.optionrow}>
                        <span className={classes.graytext}>Option mtl. Zahlung</span>
                        <div className={`${classes.switcher} ${switcherSecondOn == true && classes.switcheron}`} onClick={() => setSwitcherSecondOn(d => !d)}>
                            <div className={`${classes.switchercircle} ${switcherSecondOn == true && classes.switcherCircleOn}`}></div>
                        </div>
                    </div>
                </div>
                <div className={`${classes.package} ${switcherThirdOn == true && classes.yellowpackage}`}>
                    <div className={classes.packageheading}><span>BUSINESS</span>LARGE</div>
                    <div className={classes.price}>{switcherThirdOn == false ? DisplayAsLocaleString(sixmonthpackageLargePrice) : DisplayAsLocaleString(sixmonthpackageLargePriceMonthly)}</div>
                    <div className={classes.pricedescription}>6-Monats-Paket{switcherThirdOn == true && "/mtl."}</div>
                    <div className={classes.addetail}>
                        <Greentick className={classes.tick} />
                        <span className={classes.addetailtext}>25 Anzeigen</span>
                    </div>
                    <div className={classes.addetail}>
                        <Greentick className={classes.tick} />
                        <span className={classes.addetailtext}>Fotos - Unlimited*</span>
                    </div>
                    <div className={classes.addetail}>
                        <Greentick className={classes.tick} />
                        <span className={classes.addetailtext}>Händlerprofil</span>
                    </div>
                    <div className={classes.addetail}>
                        <Greentick className={classes.tick} />
                        <span className={classes.addetailtext}>Profil Booster</span>
                    </div>
                    <div className={classes.addetail}>
                        <Greentick className={classes.tick} />
                        <span className={classes.addetailtext}>1 x Anzeige vorreihen</span>
                    </div>
                    <div className={classes.addetail}>
                        <Graytick className={classes.tick} />
                        <span className={classes.addetailgray}>1 x Giga Label</span>
                    </div>
                    <div className={`${classes.addetaillast} ${classes.openedpricedescription}`}>
                        <Graytick className={classes.tick} />
                        <span className={classes.addetailgray}>1 x Ad Screen Slider</span>
                    </div>
                    <div className={classes.purchasebtn} onClick={() => {
                        if(switcherThirdOn === true){
                            setSelectedPrice((sixmonthpackageLargePriceMonthly * 3).toFixed(2));
                        } else {
                            setSelectedPrice((sixmonthpackageLargePriceMonthly).toFixed(2));
                        }
                    }}>Bestellen</div>
                    <div className={classes.showdetail}>Details Anzeigen</div>
                    <div className={classes.optionrow}>
                        <span className={classes.graytext}>Option mtl. Zahlung</span>
                        <div className={`${classes.switcher} ${switcherThirdOn == true && classes.switcheron}`} onClick={() => setSwitcherThirdOn(d => !d)}>
                            <div className={`${classes.switchercircle} ${switcherThirdOn == true && classes.switcherCircleOn}`}></div>
                        </div>
                    </div>
                </div>
                <div className={`${classes.package} ${switcherFourthOn == true && classes.yellowpackage}`}>
                    <div className={classes.packageheading}>GIGANT<br></br>UNLIMITED</div>
                    <div className={classes.price}>{switcherFourthOn == false ? DisplayAsLocaleString(sixmonthpackageUnlimitedPrice) : DisplayAsLocaleString(sixmonthpackageUnlimitedPriceMonthly)}</div>
                    <div className={classes.pricedescription}>6-Monats-Paket{switcherFourthOn == true && "/mtl."}</div>
                    <div className={classes.addetail}>
                        <Greentick className={classes.tick} />
                        <span className={classes.addetailtext}>Anzeigen - Unlimited*</span>
                    </div>
                    <div className={classes.addetail}>
                        <Greentick className={classes.tick} />
                        <span className={classes.addetailtext}>Fotos - Unlimited*</span>
                    </div>
                    <div className={classes.addetail}>
                        <Greentick className={classes.tick} />
                        <span className={classes.addetailtext}>Händlerprofil</span>
                    </div>
                    <div className={classes.addetail}>
                        <Greentick className={classes.tick} />
                        <span className={classes.addetailtext}>Profil Booster</span>
                    </div>
                    <div className={classes.addetail}>
                        <Greentick className={classes.tick} />
                        <span className={classes.addetailtext}>1 x Anzeige vorreihen</span>
                    </div>
                    <div className={classes.addetail}>
                        <Greentick className={classes.tick} />
                        <span className={classes.addetailtext}>1 x Giga Label</span>
                    </div>
                    <div className={`${classes.addetaillast} ${classes.openedpricedescription}`}>
                        <Greentick className={classes.tick} />
                        <span className={classes.addetailtext}>1 x Ad Screen Slider</span>
                    </div>
                    <div className={classes.purchasebtn} onClick={() => {
                        if(switcherFourthOn === true){
                            setSelectedPrice((sixmonthpackageUnlimitedPriceMonthly * 3).toFixed(2));
                        } else {
                            setSelectedPrice((sixmonthpackageUnlimitedPrice).toFixed(2));
                        }
                    }}>Bestellen</div>
                    <div className={classes.showdetail}>Details Anzeigen</div>
                    <div className={classes.optionrow}>
                        <span className={classes.graytext}>Option mtl. Zahlung</span>
                        <div className={`${classes.switcher} ${switcherFourthOn == true && classes.switcheron}`} onClick={() => setSwitcherFourthOn(d => !d)}>
                            <div className={`${classes.switchercircle} ${switcherFourthOn == true && classes.switcherCircleOn}`}></div>
                        </div>
                    </div>
                    <GigantUnlimited className={classes.gigantunlimited} />
                </div></>}
                {twelvemonthpackage == true &&<> <div className={`${classes.package} ${switcherFirstOn == true && classes.yellowpackage}`}>
                    <div className={classes.packageheading}><span>BUSINESS</span>SMALL</div>
                    <div className={classes.price}>{switcherFirstOn == false ? DisplayAsLocaleString(twelvemonthpackageSmallPrice) : DisplayAsLocaleString(twelvemonthpackageSmallPriceMonthly)}</div>
                    <div className={classes.pricedescription}>12-Monats-Paket{switcherFirstOn == true && "/mtl."}</div>
                    <div className={classes.addetail}>
                        <Greentick className={classes.tick} />
                        <span className={classes.addetailtext}>5 Anzeigen</span>
                    </div>
                    <div className={classes.addetail}>
                        <Greentick className={classes.tick} />
                        <span className={classes.addetailtext}>Fotos - Unlimited*</span>
                    </div>
                    <div className={classes.addetail}>
                        <Greentick className={classes.tick} />
                        <span className={classes.addetailtext}>Händlerprofil</span>
                    </div>
                    <div className={classes.addetail}>
                        <Graytick className={classes.tick} />
                        <span className={classes.addetailgray}>Profil Booster</span>
                    </div>
                    <div className={classes.addetail}>
                        <Graytick className={classes.tick} />
                        <span className={classes.addetailgray}>1 x Anzeige vorreihen</span>
                    </div>
                    <div className={classes.addetail}>
                        <Graytick className={classes.tick} />
                        <span className={classes.addetailgray}>1 x Giga Label</span>
                    </div>
                    <div className={`${classes.addetaillast} ${classes.openedpricedescription}`}>
                        <Graytick className={classes.tick} />
                        <span className={classes.addetailgray}>1 x Ad Screen Slider</span>
                    </div>
                    <div className={classes.purchasebtn} onClick={() => {
                        if(switcherFirstOn === true){
                            setSelectedPrice((twelvemonthpackageSmallPriceMonthly * 3).toFixed(2))
                        } else {
                            setSelectedPrice((twelvemonthpackageSmallPrice).toFixed(2))
                        }
                    
                    }}>Bestellen</div>
                    <div className={classes.showdetail}>Details Anzeigen</div>
                    <div className={classes.optionrow}>
                        <span className={classes.graytext}>Option mtl. Zahlung</span>
                        <div className={`${classes.switcher} ${switcherFirstOn == true && classes.switcheron}`} onClick={() => setSwitcherFirstOn(d => !d)}>
                            <div className={`${classes.switchercircle} ${switcherFirstOn == true && classes.switcherCircleOn}`}></div>
                        </div>
                    </div>
                </div>
                <div className={`${classes.package} ${switcherSecondOn == true && classes.yellowpackage}`}>
                    <div className={classes.packageheading}><span>BUSINESS</span>MEDIUM</div>
                    <div className={classes.price}>{switcherSecondOn == false ? DisplayAsLocaleString(twelvemonthpackageMediumPrice) : DisplayAsLocaleString(twelvemonthpackageMediumPriceMonthly)}</div>
                    <div className={classes.pricedescription}>12-Monats-Paket{switcherSecondOn == true && "/mtl."}</div>
                    <div className={classes.addetail}>
                        <Greentick className={classes.tick} />
                        <span className={classes.addetailtext}>10 Anzeigen</span>
                    </div>
                    <div className={classes.addetail}>
                        <Greentick className={classes.tick} />
                        <span className={classes.addetailtext}>Fotos - Unlimited*</span>
                    </div>
                    <div className={classes.addetail}>
                        <Greentick className={classes.tick} />
                        <span className={classes.addetailtext}>Händlerprofil</span>
                    </div>
                    <div className={classes.addetail}>
                        <Greentick className={classes.tick} />
                        <span className={classes.addetailtext}>Profil Booster</span>
                    </div>
                    <div className={classes.addetail}>
                        <Graytick className={classes.tick} />
                        <span className={classes.addetailgray}>1 x Anzeige vorreihen</span>
                    </div>
                    <div className={classes.addetail}>
                        <Graytick className={classes.tick} />
                        <span className={classes.addetailgray}>1 x Giga Label</span>
                    </div>
                    <div className={`${classes.addetaillast} ${classes.openedpricedescription}`}>
                        <Graytick className={classes.tick} />
                        <span className={classes.addetailgray}>1 x Ad Screen Slider</span>
                    </div>
                    <div className={classes.purchasebtn} onClick={() => {
                        if(switcherSecondOn === true){
                            setSelectedPrice((twelvemonthpackageLargePriceMonthly * 3).toFixed(2));
                        } else {
                            setSelectedPrice((twelvemonthpackageLargePrice).toFixed(2));
                        }
                    }}>Bestellen</div>
                    <div className={classes.showdetail}>Details Anzeigen</div>
                    <div className={classes.optionrow}>
                        <span className={classes.graytext}>Option mtl. Zahlung</span>
                        <div className={`${classes.switcher} ${switcherSecondOn == true && classes.switcheron}`} onClick={() => setSwitcherSecondOn(d => !d)}>
                            <div className={`${classes.switchercircle} ${switcherSecondOn == true && classes.switcherCircleOn}`}></div>
                        </div>
                    </div>
                </div>
                <div className={`${classes.package} ${switcherThirdOn == true && classes.yellowpackage}`}>
                    <div className={classes.packageheading}><span>BUSINESS</span>LARGE</div>
                    <div className={classes.price}>{switcherThirdOn == false ? DisplayAsLocaleString(twelvemonthpackageLargePrice) : DisplayAsLocaleString(twelvemonthpackageLargePriceMonthly)}</div>
                    <div className={classes.pricedescription}>12-Monats-Paket{switcherThirdOn == true && "/mtl."}</div>
                    <div className={classes.addetail}>
                        <Greentick className={classes.tick} />
                        <span className={classes.addetailtext}>25 Anzeigen</span>
                    </div>
                    <div className={classes.addetail}>
                        <Greentick className={classes.tick} />
                        <span className={classes.addetailtext}>Fotos - Unlimited*</span>
                    </div>
                    <div className={classes.addetail}>
                        <Greentick className={classes.tick} />
                        <span className={classes.addetailtext}>Händlerprofil</span>
                    </div>
                    <div className={classes.addetail}>
                        <Greentick className={classes.tick} />
                        <span className={classes.addetailtext}>Profil Booster</span>
                    </div>
                    <div className={classes.addetail}>
                        <Greentick className={classes.tick} />
                        <span className={classes.addetailtext}>1 x Anzeige vorreihen</span>
                    </div>
                    <div className={classes.addetail}>
                        <Graytick className={classes.tick} />
                        <span className={classes.addetailgray}>1 x Giga Label</span>
                    </div>
                    <div className={`${classes.addetaillast} ${classes.openedpricedescription}`}>
                        <Graytick className={classes.tick} />
                        <span className={classes.addetailgray}>1 x Ad Screen Slider</span>
                    </div>
                    <div className={classes.purchasebtn} onClick={() => {
                        if(switcherThirdOn === true){
                            setSelectedPrice((twelvemonthpackageLargePriceMonthly * 3).toFixed(2));
                        } else {
                            setSelectedPrice((twelvemonthpackageLargePrice).toFixed(2));
                        }
                    }}>Bestellen</div>
                    <div className={classes.showdetail}>Details Anzeigen</div>
                    <div className={classes.optionrow}>
                        <span className={classes.graytext}>Option mtl. Zahlung</span>
                        <div className={`${classes.switcher} ${switcherThirdOn == true && classes.switcheron}`} onClick={() => setSwitcherThirdOn(d => !d)}>
                            <div className={`${classes.switchercircle} ${switcherThirdOn == true && classes.switcherCircleOn}`}></div>
                        </div>
                    </div>
                </div>
                <div className={`${classes.package} ${switcherFourthOn == true && classes.yellowpackage}`}>
                    <div className={classes.packageheading}>GIGANT<br></br>UNLIMITED</div>
                    <div className={classes.price}>{switcherFourthOn == false ? DisplayAsLocaleString(twelvemonthpackageUnlimitedPrice) : DisplayAsLocaleString(twelvemonthpackageUnlimitedPriceMonthly)}</div>
                    <div className={classes.pricedescription}>12-Monats-Paket{switcherFourthOn == true && "/mtl."}</div>
                    <div className={classes.addetail}>
                        <Greentick className={classes.tick} />
                        <span className={classes.addetailtext}>Anzeigen - Unlimited*</span>
                    </div>
                    <div className={classes.addetail}>
                        <Greentick className={classes.tick} />
                        <span className={classes.addetailtext}>Fotos - Unlimited*</span>
                    </div>
                    <div className={classes.addetail}>
                        <Greentick className={classes.tick} />
                        <span className={classes.addetailtext}>Händlerprofil</span>
                    </div>
                    <div className={classes.addetail}>
                        <Greentick className={classes.tick} />
                        <span className={classes.addetailtext}>Profil Booster</span>
                    </div>
                    <div className={classes.addetail}>
                        <Greentick className={classes.tick} />
                        <span className={classes.addetailtext}>1 x Anzeige vorreihen</span>
                    </div>
                    <div className={classes.addetail}>
                        <Greentick className={classes.tick} />
                        <span className={classes.addetailtext}>1 x Giga Label</span>
                    </div>
                    <div className={`${classes.addetaillast} ${classes.openedpricedescription}`}>
                        <Greentick className={classes.tick} />
                        <span className={classes.addetailtext}>1 x Ad Screen Slider</span>
                    </div>
                    <div className={classes.purchasebtn} onClick={() => {
                        if(switcherFourthOn === true){
                            setSelectedPrice((twelvemonthpackageUnlimitedPriceMonthly * 3).toFixed(2));
                        } else {
                            setSelectedPrice((twelvemonthpackageUnlimitedPrice).toFixed(2));
                        }
                    }}>Bestellen</div>
                    <div className={classes.showdetail}>Details Anzeigen</div>
                    <div className={classes.optionrow}>
                        <span className={classes.graytext}>Option mtl. Zahlung</span>
                        <div className={`${classes.switcher} ${switcherFourthOn == true && classes.switcheron}`} onClick={() => setSwitcherFourthOn(d => !d)}>
                            <div className={`${classes.switchercircle} ${switcherFourthOn == true && classes.switcherCircleOn}`}></div>
                        </div>
                    </div>
                    <GigantUnlimited className={classes.gigantunlimited} />
                </div></>}
                {twentyfourmonthpackage == true &&<> <div className={`${classes.package} ${switcherFirstOn == true && classes.yellowpackage}`}>
                    <div className={classes.packageheading}><span>BUSINESS</span>SMALL</div>
                    <div className={classes.price}>{switcherFirstOn == false ? DisplayAsLocaleString(twentyfourmonthpackageSmallPrice) : DisplayAsLocaleString(twentyfourmonthpackageSmallPriceMonthly)}</div>
                    <div className={classes.pricedescription}>24-Monats-Paket{switcherFirstOn == true && "/mtl."}</div>
                    <div className={classes.addetail}>
                        <Greentick className={classes.tick} />
                        <span className={classes.addetailtext}>5 Anzeigen</span>
                    </div>
                    <div className={classes.addetail}>
                        <Greentick className={classes.tick} />
                        <span className={classes.addetailtext}>Fotos - Unlimited*</span>
                    </div>
                    <div className={classes.addetail}>
                        <Greentick className={classes.tick} />
                        <span className={classes.addetailtext}>Händlerprofil</span>
                    </div>
                    <div className={classes.addetail}>
                        <Graytick className={classes.tick} />
                        <span className={classes.addetailgray}>Profil Booster</span>
                    </div>
                    <div className={classes.addetail}>
                        <Graytick className={classes.tick} />
                        <span className={classes.addetailgray}>1 x Anzeige vorreihen</span>
                    </div>
                    <div className={classes.addetail}>
                        <Graytick className={classes.tick} />
                        <span className={classes.addetailgray}>1 x Giga Label</span>
                    </div>
                    <div className={`${classes.addetaillast} ${classes.openedpricedescription}`}>
                        <Graytick className={classes.tick} />
                        <span className={classes.addetailgray}>1 x Ad Screen Slider</span>
                    </div>
                    <div className={classes.purchasebtn} onClick={() => {
                        if(switcherFirstOn === true){
                            setSelectedPrice((twentyfourmonthpackageSmallPriceMonthly * 3).toFixed(2))
                        } else {
                            setSelectedPrice((twentyfourmonthpackageSmallPrice).toFixed(2))
                        }
                    
                    }}>Bestellen</div>
                    <div className={classes.showdetail}>Details Anzeigen</div>
                    <div className={classes.optionrow}>
                        <span className={classes.graytext}>Option mtl. Zahlung</span>
                        <div className={`${classes.switcher} ${switcherFirstOn == true && classes.switcheron}`} onClick={() => setSwitcherFirstOn(d => !d)}>
                            <div className={`${classes.switchercircle} ${switcherFirstOn == true && classes.switcherCircleOn}`}></div>
                        </div>
                    </div>
                </div>
                <div className={`${classes.package} ${switcherSecondOn == true && classes.yellowpackage}`}>
                    <div className={classes.packageheading}><span>BUSINESS</span>MEDIUM</div>
                    <div className={classes.price}>{switcherSecondOn == false ? DisplayAsLocaleString(twentyfourmonthpackageMediumPrice) : DisplayAsLocaleString(twentyfourmonthpackageMediumPriceMonthly)}</div>
                    <div className={classes.pricedescription}>24-Monats-Paket{switcherSecondOn == true && "/mtl."}</div>
                    <div className={classes.addetail}>
                        <Greentick className={classes.tick} />
                        <span className={classes.addetailtext}>10 Anzeigen</span>
                    </div>
                    <div className={classes.addetail}>
                        <Greentick className={classes.tick} />
                        <span className={classes.addetailtext}>Fotos - Unlimited*</span>
                    </div>
                    <div className={classes.addetail}>
                        <Greentick className={classes.tick} />
                        <span className={classes.addetailtext}>Händlerprofil</span>
                    </div>
                    <div className={classes.addetail}>
                        <Greentick className={classes.tick} />
                        <span className={classes.addetailtext}>Profil Booster</span>
                    </div>
                    <div className={classes.addetail}>
                        <Graytick className={classes.tick} />
                        <span className={classes.addetailgray}>1 x Anzeige vorreihen</span>
                    </div>
                    <div className={classes.addetail}>
                        <Graytick className={classes.tick} />
                        <span className={classes.addetailgray}>1 x Giga Label</span>
                    </div>
                    <div className={`${classes.addetaillast} ${classes.openedpricedescription}`}>
                        <Graytick className={classes.tick} />
                        <span className={classes.addetailgray}>1 x Ad Screen Slider</span>
                    </div>
                    <div className={classes.purchasebtn} onClick={() => {
                        if(switcherSecondOn === true){
                            setSelectedPrice((twentyfourmonthpackageMediumPrice * 3).toFixed(2));
                        } else {
                            setSelectedPrice((twentyfourmonthpackageMediumPriceMonthly).toFixed(2));
                        }
                    }}>Bestellen</div>
                    <div className={classes.showdetail}>Details Anzeigen</div>
                    <div className={classes.optionrow}>
                        <span className={classes.graytext}>Option mtl. Zahlung</span>
                        <div className={`${classes.switcher} ${switcherSecondOn == true && classes.switcheron}`} onClick={() => setSwitcherSecondOn(d => !d)}>
                            <div className={`${classes.switchercircle} ${switcherSecondOn == true && classes.switcherCircleOn}`}></div>
                        </div>
                    </div>
                </div>
                <div className={`${classes.package} ${switcherThirdOn == true && classes.yellowpackage}`}>
                    <div className={classes.packageheading}><span>BUSINESS</span>LARGE</div>               
                    <div className={classes.price}>{switcherThirdOn == false ? DisplayAsLocaleString(twentyfourmonthpackageLargePrice) : DisplayAsLocaleString(twentyfourmonthpackageLargePriceMonthly)}</div>
                    <div className={classes.pricedescription}>24-Monats-Paket{switcherThirdOn == true && "/mtl."}</div>
                    <div className={classes.addetail}>
                        <Greentick className={classes.tick} />
                        <span className={classes.addetailtext}>25 Anzeigen</span>
                    </div>
                    <div className={classes.addetail}>
                        <Greentick className={classes.tick} />
                        <span className={classes.addetailtext}>Fotos - Unlimited*</span>
                    </div>
                    <div className={classes.addetail}>
                        <Greentick className={classes.tick} />
                        <span className={classes.addetailtext}>Händlerprofil</span>
                    </div>
                    <div className={classes.addetail}>
                        <Greentick className={classes.tick} />
                        <span className={classes.addetailtext}>Profil Booster</span>
                    </div>
                    <div className={classes.addetail}>
                        <Greentick className={classes.tick} />
                        <span className={classes.addetailtext}>1 x Anzeige vorreihen</span>
                    </div>
                    <div className={classes.addetail}>
                        <Graytick className={classes.tick} />
                        <span className={classes.addetailgray}>1 x Giga Label</span>
                    </div>
                    <div className={`${classes.addetaillast} ${classes.openedpricedescription}`}>
                        <Graytick className={classes.tick} />
                        <span className={classes.addetailgray}>1 x Ad Screen Slider</span>
                    </div>
                    <div className={classes.purchasebtn} onClick={() => {
                        if(switcherThirdOn === true){
                            setSelectedPrice((twentyfourmonthpackageLargePriceMonthly * 3).toFixed(2));
                        } else {
                            setSelectedPrice((twentyfourmonthpackageLargePrice).toFixed(2));
                        }
                    }}>Bestellen</div>
                    <div className={classes.showdetail}>Details Anzeigen</div>
                    <div className={classes.optionrow}>
                        <span className={classes.graytext}>Option mtl. Zahlung</span>
                        <div className={`${classes.switcher} ${switcherThirdOn == true && classes.switcheron}`} onClick={() => setSwitcherThirdOn(d => !d)}>
                            <div className={`${classes.switchercircle} ${switcherThirdOn == true && classes.switcherCircleOn}`}></div>
                        </div>
                    </div>
                </div>
                <div className={`${classes.package} ${switcherFourthOn == true && classes.yellowpackage}`}>
                    <div className={classes.packageheading}>GIGANT<br></br>UNLIMITED</div>
                    <div className={classes.price}>{switcherFourthOn == false ? DisplayAsLocaleString(twentyfourmonthpackageUnlimitedPrice) : DisplayAsLocaleString(twentyfourmonthpackageUnlimitedPriceMonthly)}</div>
                    <div className={classes.pricedescription}>24-Monats-Paket{switcherFourthOn == true && "/mtl."}</div>
                    <div className={classes.addetail}>
                        <Greentick className={classes.tick} />
                        <span className={classes.addetailtext}>Anzeigen - Unlimited*</span>
                    </div>
                    <div className={classes.addetail}>
                        <Greentick className={classes.tick} />
                        <span className={classes.addetailtext}>Fotos - Unlimited*</span>
                    </div>
                    <div className={classes.addetail}>
                        <Greentick className={classes.tick} />
                        <span className={classes.addetailtext}>Händlerprofil</span>
                    </div>
                    <div className={classes.addetail}>
                        <Greentick className={classes.tick} />
                        <span className={classes.addetailtext}>Profil Booster</span>
                    </div>
                    <div className={classes.addetail}>
                        <Greentick className={classes.tick} />
                        <span className={classes.addetailtext}>1 x Anzeige vorreihen</span>
                    </div>
                    <div className={classes.addetail}>
                        <Greentick className={classes.tick} />
                        <span className={classes.addetailtext}>1 x Giga Label</span>
                    </div>
                    <div className={`${classes.addetaillast} ${classes.openedpricedescription}`}>
                        <Greentick className={classes.tick} />
                        <span className={classes.addetailtext}>1 x Ad Screen Slider</span>
                    </div>
                    <div className={classes.purchasebtn} onClick={() => {
                        if(switcherFourthOn === true){
                            setSelectedPrice((twentyfourmonthpackageUnlimitedPriceMonthly * 3).toFixed(2));
                        } else {
                            setSelectedPrice((twentyfourmonthpackageUnlimitedPrice).toFixed(2));
                        }
                    }}>Bestellen</div>
                    <div className={classes.showdetail}>Details Anzeigen</div>
                    <div className={classes.optionrow}>
                        <span className={classes.graytext}>Option mtl. Zahlung</span>
                        <div className={`${classes.switcher} ${switcherFourthOn == true && classes.switcheron}`} onClick={() => setSwitcherFourthOn(d => !d)}>
                            <div className={`${classes.switchercircle} ${switcherFourthOn == true && classes.switcherCircleOn}`}></div>
                        </div>
                    </div>
                    <GigantUnlimited className={classes.gigantunlimited} />
                </div></>}
            </div>
            <div className={classes.littletext}>
                Die angegebenen Preise verstehen sich inklusive 20,00% Mehrwertsteuer.<br></br>
                <span className={classes.link}>* Unlimited Traffic Policy</span>
            </div>  
            <div className={classes.boxergrid}>
                <div className={classes.box}>
                   <div className={classes.boxtop}>
                        <div className={classes.boxheading}>Anzeige</div>
                        <List className={classes.list} />
                    </div> 
                   <div className={classes.boxbottom}>
                        Auf AutoGigant.at können Sie eine Marktplatz-Anzeige erstellen, um Tausende potenzieller Käufer für dein Fahrzeug zu erreichen. In den folgenden <span className={classes.link}>Tipps und Tricks</span> erfahren Sie, wie Sie Ihr Fahrzeug am besten präsentieren und Ihre Verkaufschance steigern.
                    </div> 
                </div>
                <div className={classes.box}>
                   <div className={classes.boxtop}>
                        <div className={classes.boxheading}>Fotos</div>
                        <Expic className={classes.list} />
                    </div> 
                   <div className={classes.boxbottom}>
                        Die Fotos Ihres Gebrauchtwagens sind ein wesentlicher Bestandteil Ihrer Online-Anzeige. Denn sie zeigen den Zustand Ihres Fahrzeugs und wecken das Interesse möglicher Käufer. Wenn Sie Ihr Auto verkaufen möchten, ist es daher ratsam, es in seinem besten Zustand zu fotografieren.
                    </div> 
                </div>
                <div className={classes.box}>
                   <div className={classes.boxtop}>
                        <div className={classes.boxheading}>Händlerprofil</div>
                        <Comfy className={classes.comfy} />
                    </div> 
                   <div className={classes.boxbottom}>
                   Ihr Händlerprofil ist Ihre Homepage als Händler. Unter "DASHBOARD/EINSTELLUNGEN/PROFIL & EINSTELLUNGEN"
können Sie Ihre Informationen hinterlegen und sich eine Vorschau anzeigen lassen, wie potenzielle Kunden Ihre Händlerinfoseite sehen werden. Klicken Sie dazu auf den Link "<span className={classes.link}>Vorschau</span>".
                    </div> 
                </div>
                <div className={classes.box}>
                   <div className={classes.boxtop}>
                        <div className={classes.boxheading}>Profil Booster</div>
                        <Trendy className={classes.trending} />
                    </div> 
                   <div className={classes.boxbottom}>
                   Schaltet einige zusätzliche Funktionen in Ihrem Händlerprofil frei, darunter auch Social Media Verlinkungen. Sie finden Sie auf Ihrem Händlerprofil und auf allen online gestellten Anzeigen. Außerdem wird eine Textfläche aktiviert, in der Sie Ihr Unternehmen vorstellen können. Sie haben auch die Möglichkeit, 5 Bilder auf Ihre Händler-Profilseite hochzuladen. 
                    </div> 
                </div>
                <div className={classes.box}>
                   <div className={classes.boxtop}>
                        <div className={classes.boxheading}>Anzeige</div>
                        <Pushup className={classes.list} />
                    </div> 
                   <div className={classes.boxbottom}>
                   Ihre Anzeige wird bei der Suche als erstes angezeigt, ein einmaliges Erlebnis, das du optional zu deiner Anzeige hinzubuchen kannst. Mit diesem Produkt wird sichergestellt, dass Ihre Anzeige die Aufmerksamkeit der Suchenden auf sich zieht und Sie Ihr Fahrzeug schneller verkaufen.
                    </div> 
                </div>
                <div className={classes.box}>
                   <div className={classes.boxtop}>
                        <div className={classes.boxheading}>Anzeige</div>
                        <GigaLabel className={classes.gigalabel} />
                    </div> 
                   <div className={classes.boxbottom}>
                   Durch unsere GIGA-Label- und Filter benehmen wird Ihr Fahrzeug leichtere Auffindbarkeit sowie eine Listung in der GIGA-Liste erhalten. Dies ist für 30 Tage gültig.
                    </div> 
                </div>
                <div className={classes.box}>
                   <div className={classes.boxtop}>
                        <div className={classes.boxheading}>Anzeige</div>
                        <Screen className={classes.list} />
                    </div> 
                   <div className={classes.boxbottom}>
                   Ihre Anzeige wird in der passenden Kategorie oberhalb des Footers im Ad Screen Slider Bereich angezeigt. Alle Ad Screen Slider Anzeigen werden abwechselnd ausgespielt und in der App/mobilen Version mit "Ad Screen Slider" gekennzeichnet.
                    </div> 
                </div>
            </div>
        </div>
    ) 
}

export default MySubscriptionsPage;