import classes from './DealerRegisterClose.module.css';
import Info from './../public/registerclose/info.svg';
import Check from './../public/registerclose/check.svg';
import Mail from './../public/registerclose/mailicon.svg';
import Image from 'next/image';
import Link from 'next/link';
import BackHome from './../public/home.svg';
function DealerRegisterClose(){
    return (
        <div className="bg-theme-gray-10 overflow-hidden lg:px-6 md:!px-0">
            <div className="relative w-10/12 lg:w-full max-w-ag-container md:!w-full mx-auto flex flex-col  lg:flex-col bg-white p-6">
            <div className={`${classes.top_row}`}>
                <span className={classes.leftrow}><Link href={"/"}><BackHome className={classes.backhome} /></Link></span>
            </div>
                <div className={classes.container}>
                    <div className={classes.left}>
                        <div className={classes.stepshower}>
                            <div className={classes.steponeactive}>1</div>
                            <div className={classes.steptwo}>2<div className={classes.triangle}></div></div>
                            <div className={classes.stepthree}>3</div>
                        </div>
                        <div className={classes.heading}>Registrierung abschließen</div>
                        <div className={classes.info}>
                            <Info className={classes.infoicon} />
                            <div className={classes.desc}>Sie können Ihr Benutzerkonto 
nur mit einer bestätigten E-Mail-Adresse verwenden.</div>
                        </div>
                        <div className={classes.mail}>
                            <Mail className={classes.mailicon} />
                            <div className={classes.desc}>
                            In kürze erhalten Sie eine E-Mail mit einem Bestätigungslink.
Keine E-Mail erhalten? <span className={classes.link}>Hier neu anfordern.</span>
                            </div>
                        </div>
                        <div className={classes.check}>
                            <Check className={classes.checkicon} />
                            <div className={classes.desc}>
                            Mit Klick auf den Bestätigungslink ist Ihr AUTO GIGANT.
Benutzerkonto aktiv
                            </div>
                        </div>
                        <div className={classes.ifnomail}>
                        Wenn Sie keine E-Mail von uns erhalten haben,<br></br>
schauen Sie bitte auch im Spam-Ordner Ihres E-Mail-Postfaches.
                        </div>
                    </div>
                    <div className={classes.right}>
                        <Image src={"/images/dealer-register-close.png"} layout='fill' objectFit="cover" />
                    </div>

                </div>
            </div>
        </div>
    )
}

export default DealerRegisterClose;