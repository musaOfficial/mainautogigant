import classes from './RegisterSuccess.module.css';
import Check from './../public/registerclose/check.svg';
import Image from 'next/image';
function RegisterSuccess(){
    return (
        <div className="bg-theme-gray-10 overflow-hidden lg:px-6 md:!px-0">
            <div className="relative w-10/12 lg:w-full max-w-ag-container md:!w-full mx-auto flex lg:flex-col bg-white p-4">
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
                    <div className={classes.right}>
                        <Image src={"/images/register-success.png"} layout="fill" objectFit='cover' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RegisterSuccess;