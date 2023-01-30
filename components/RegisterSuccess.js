import classes from './RegisterSuccess.module.css';
import Check from './../public/registerclose/check.svg';
import Image from 'next/image';
import Link from 'next/link';
import BackHome from './../public/home.svg';
function RegisterSuccess(){
    return (
        <div className="bg-theme-gray-10 overflow-hidden px-6 md:!px-0">
            <div className="relative w-10/12 lg:w-full max-w-ag-container md:!w-full mx-auto flex flex-col lg:flex-col bg-white p-6">
                <div className={`${classes.top_row}`}>
                    <span className={classes.leftrow}><Link href={"/"}><BackHome className={classes.backhome} /></Link></span>
                </div>
                <div className={classes.container}>
                    <div className={classes.left}>
                        <div className={classes.stepshower}>
                            <div className={classes.steponeactive}>1</div>
                            <div className={classes.steptwo}>2</div>
                            <div className={classes.stepthree}>3<div className={classes.triangle}></div></div>
                        </div>
                        <div className={classes.content}>
                            <Check className={classes.check}/>
                            <div className={classes.bigtext}>Sie haben sich erfolgreich registriert!</div>
                            <div className={classes.lasttext}>
                                <div className={classes.first}>Sie werden in Kürze zur Startseite weitergeleitet.</div>
                                <div className={classes.middle}>Oder <span className={classes.link}>klicken Sie hier</span>,</div>
                                <div className={classes.last}>um sich sofort auf die Suche nach Ihrem Traumauto zu begeben.</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RegisterSuccess;