import Image from 'next/image';
import classes from './UeberUns.module.css';
function UeberUns(){
    return (
        <div className={classes.container}>
            <div className={`${classes.contentcontainer} relative w-10/12 lg:w-full max-w-ag-container md:!w-full mx-auto flex lg:flex-col bg-white p-6`}>
                <div className={classes.row1}>
                    <div className={classes.r1c1}>
                        <h1 className={classes.heading}>ÜBER UNS</h1> 
                        <p className={classes.boldp}>Wie das Abenteuer endete, werden wir gleich sehen. Aouda war beunruhigt,
                            aber sie sagte nichts.
                        </p>
                        <p className={classes.p1}>
                            Passepartout fand das Manöver von Mr. Fogg einfach großartig. 
                            Der Kapitän hatte "zwischen elf und zwölf Knoten" gesagt, 
                            und die Henrietta bestätigte seine Vorhersage. Wie das Abenteuer ausging, 
                            werden wir gleich sehen. Aouda war beunruhigt, sagte aber nichts. 
                            Passepartout fand das Manöver von Mr. Fogg einfach großartig. 
                            Der Kapitän hatte es gesagt.
                        </p>
                        <div className={classes.lineleftcontainer}>
                            <div className={classes.lineleft}></div>
                            <p className='font-bold'>
                                In den ersten Tagen verlief die Fahrt reibungslos. 
                                Die See war nicht sehr ungünstig, 
                                der Wind schien beständig aus Nordost zu kommen.
                            </p>
                        </div>
                        <p className={classes.lastparagraph}>
                            Was Passepartout betrifft, so fand er das Manöver von Mr. Fogg einfach herrlich.
                            Der Kapitän hatte "zwischen elf und zwölf Knoten" gesagt, 
                            und die Henrietta bestätigte seine Vorhersage. 
                            Wie das Abenteuer ausging, werden wir gleich sehen. Aouda war beunruhigt, 
                            sagte aber nichts. Passepartout fand das Manöver von Mr. Fogg einfach großartig. 
                            Der Kapitän hatte gesagt
                        </p>
                    </div>
                    <div className={classes.r1image}>
                        <Image src={'/images/ueberunsimg.png'} layout='fill' objectFit='cover' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UeberUns;