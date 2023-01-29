import classes from './LogoutSuccess.module.css';
import Image from 'next/image';
import Logout from './../public/newlogout.svg';
import Link from 'next/link';
function LogoutSuccess(){
    return (
        <div className="bg-theme-gray-10 overflow-hidden lg:px-6 md:!px-0">
            <div className={` ${classes.contentcontainer} relative w-10/12 lg:w-full max-w-ag-container md:!w-full mx-auto flex lg:flex-col bg-white p-6`}>
                <div className={classes.row}>
                    <div className={classes.left}>
                        <div className={classes.bigtext}>Sie haben sich erfolgreich ausgeloggt!</div>
                        <Logout className={classes.logout} />
                        <div className={classes.smalltext}>
                            Wir freuen uns schon auf ein Wiedersehen.<br></br>
                            In wenigen Sekunden werden Sie zur Startseite weitergeleitet.
                            <br></br>
                            <br></br>
                            <Link href={"/"}><span className={classes.link}>Sie können allerdings auch sofort hier klicken, wenn Sie nicht warten möchten.</span></Link>
                        </div>
                    </div>
                    <div className={classes.right}>
                        <Image src={"/images/logout-success.png"} layout="fill" objectFit='cover' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LogoutSuccess;