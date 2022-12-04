import classes from './About.module.css'
import Image from 'next/image'
import Rectangle from './../public/aboutus/rectangle.svg';
import Union from './../public/aboutus/union.svg'
import SwiperComponent from './ui/Swiper';
function About(){
    return (
        <div className={` ${classes.background} overflow-hidden lg:px-6 md:!px-0`}>
            <div className={` ${classes.contentcontainer} relative w-10/12 lg:w-full max-w-ag-container md:!w-full mx-auto flex lg:flex-col bg-white p-6`}>
                <div className={classes.imgcontainer}>
                    <Image src={'/aboutus/aboutusimg.png'} layout='fill' objectFit='cover' />
                </div>
                <div className={classes.companydescriptioncontainer}>
                    <div className={classes.lineleft}></div>
                    <div className={classes.companydesc}>
                        <h1 className={classes.desc1}>ÜBER UNS</h1>
                        <h3 className={classes.desc2}>Autogigant.at</h3>
                        <p className={classes.desc3}>Der führende Online-Marktplatz auf dem österreichischen Automarkt, wurde 2022 gegründet und gehört zur GIGANT GROUP.</p>
                        <h3 className={classes.desc4}>Mit der Vision.</h3>
                        <p className={classes.desc5}>Die führende, innovativste und zuverlässigste Technologieplattform des Automobilhandels und -Services zu sein, konzentriert sich das Team von Autogigant.at 
auf die Perfektionierung des gesamten Systems und ist bestrebt, die Erfahrung seiner Nutzer mit neuen Funktionen jeden Monat zu verbessern.</p>
                        <p className={classes.desc6}>Autogigant.at ist nicht nur eine Plattform für Inserate, 
sondern bietet seinen Nutzern mit dem Sofortkaufsystem Trink sell!, dem Marktwertermittlungstool Arabam Kaç Para, 
der Funktion arabam/garage, bei der Sie sowohl die sofortige Marktwertentwicklung verfolgen als auch alles rund um Ihr Fahrzeug zu Sonderpreisen 
kaufen können, und dem arabam/supply-Service für die Fahrzeugbeschaffung seiner Firmenmitglieder einen Rundum-Service.</p>
                    </div>
                </div>
                <div className={classes.middlecontainer}>
                    <div className={classes.ceo}>
                        <Image src={'/people/hasangueler.png'} layout='fill' objectFit='cover'/>
                    </div>
                    <div className={classes.left}>
                        <div>
                            <h1 className={classes.leftheading} >Unser CEO sagt</h1>
                            <p className={classes.lefttext} >Qualität ist nie ein Zufall; 
    sie ist immer das Ergebnis 
    einer hohen Absicht.</p>
                            <button className={classes.leftbtn}>Kontaktieren Sie uns</button> 
                        </div>
                    </div>
                    <div className={classes.right}>
                        <Image src={'/aboutus/abr.png'} layout='fill' /> 
                    </div>
                </div>
                <div className={classes.ourteam}>
                    <div className={classes.leftteam}>
                        <h1 className={classes.teamheading}>UNSER TEAM</h1>
                        <div className={classes.points}>
                            <div className={classes.aligncenter}>
                                <div className={classes.rectangle}>
                                    <Union />
                                </div>
                                <span>Persönliche Betreuung</span>
                            </div>
                            <div className={classes.aligncenter}>
                                <div className={classes.rectangle}>
                                    <Union />
                                </div>
                                <span>Kundenverständnis</span>
                            </div>
                            <div className={classes.aligncenter}>
                                <div className={classes.rectangle}>
                                    <Union />
                                </div>
                                <span>Mehrsprachigkeit</span>
                            </div>
                            <div className={classes.aligncenter}>
                                <div className={classes.rectangle}>
                                    <Union />
                                </div>
                                <span>Beratung und Überzeugung</span>
                            </div>
                            <div className={classes.aligncenter}>
                                <div className={classes.rectangle}>
                                    <Union />
                                </div>
                                <span>Persönliche Betreuung</span>
                            </div>
                            <div className={classes.aligncenter}>
                                <div className={classes.rectangle}>
                                    <Union />
                                </div>
                                <span>Kundenverständnis</span>
                            </div>
                        </div>
                    </div>
                    <div className={classes.rightteam}>
                        <SwiperComponent />
                    </div>
                </div>
                <div className={classes.fragencontainer}>
                    <h1 className={classes.fragenheading}>HÄUFIG GESTELLTE FRAGEN</h1>
                    <div className={classes.fragecontainer}>

                    </div>
                </div>
            </div>
        </div> 
    )
}

export default About;