import classes from './About.module.css'
import Image from 'next/image'
import Rectangle from './../public/aboutus/rectangle.svg';
import Union from './../public/aboutus/union.svg'
import SwiperComponent from './ui/Swiper';
import { useState } from 'react';
import Expand from './../public/expand.svg'
import { useEffect } from 'react';

const useDeviceSize = () => {

    const [width, setWidth] = useState(0)
    const [height, setHeight] = useState(0)
  
    const handleWindowResize = () => {
      setWidth(window.innerWidth);
      setHeight(window.innerHeight);
    }
  
    useEffect(() => {
      // component is mounted and window is available
      handleWindowResize();
      window.addEventListener('resize', handleWindowResize);
      // unsubscribe from the event on component unmount
      return () => window.removeEventListener('resize', handleWindowResize);
    }, []);
  
    return [width, height]
  
  }


function About(){

    const [width, height] = useDeviceSize();

    const [question1, setQuestion1] = useState(false);
    const [question2, setQuestion2] = useState(false);
    const [question3, setQuestion3] = useState(false);
    const [question4, setQuestion4] = useState(false);
    const [question5, setQuestion5] = useState(false);
    const [question6, setQuestion6] = useState(false);
    const [question7, setQuestion7] = useState(false);
    const [question8, setQuestion8] = useState(false);
    const [question9, setQuestion9] = useState(false);
    const [question10, setQuestion10] = useState(false);

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
                        {width >= 560 && <Image src={'/people/hasangueler.png'} className={classes.imgceo} layout='fill' objectFit='cover'/>}
                    </div>
                    <div className={classes.left}>
                        <div>

                            <h1 className={classes.leftheading} >Unser CEO sagt</h1>
                            <p className={classes.lefttext} >Qualität ist nie ein Zufall; 
    sie ist immer das Ergebnis 
    einer hohen Absicht.</p>
                            <button className={classes.leftbtn}>KONTAKTIEREN SIE UNS</button> 
                        </div>
                    </div>
                    <div className={classes.right}>
                        {width >= 1186 && <Image src={'/aboutus/abr.png'} layout='fill' /> }
                    </div>
                </div>
                <div className={classes.ourteam}>
                    <div className={classes.leftteam}>
                        <h1 className={classes.teamheading}>UNSER TEAM</h1>
                        <div className={classes.points}>
                            <div className={classes.aligncenter}>
                                <div className={classes.rectangle}>
                                    <Union className={classes.union} />
                                </div>
                                <span>Persönliche Betreuung</span>
                            </div>
                            <div className={classes.aligncenter}>
                                <div className={classes.rectangle}>
                                    <Union  className={classes.union}/>
                                </div>
                                <span>Kundenverständnis</span>
                            </div>
                            <div className={classes.aligncenter}>
                                <div className={classes.rectangle}>
                                    <Union  className={classes.union}/>
                                </div>
                                <span>Mehrsprachigkeit</span>
                            </div>
                            <div className={classes.aligncenter}>
                                <div className={classes.rectangle}>
                                    <Union className={classes.union} />
                                </div>
                                <span>Beratung und Überzeugung</span>
                            </div>
                            <div className={classes.aligncenter}>
                                <div className={classes.rectangle}>
                                    <Union className={classes.union} />
                                </div>
                                <span>Persönliche Betreuung</span>
                            </div>
                            <div className={classes.aligncenter}>
                                <div className={classes.rectangle}>
                                    <Union className={classes.union} />
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
                    {/* FRAGEN - bottom */}
                        <div className={classes.fragecontainer}>
                            <div className={`${classes.frageheading} ${question1 == false && classes.marginbottom}`} onClick={() => setQuestion1(d => !d)}>
                                <span className={classes.question}>Ich kann mich nicht anmelden, wie kann ich das tun?</span>
                                <Expand className={question1 == true ? classes.expandopen : classes.expandclosed} />
                            </div>
                            {question1 == true &&  <div className={classes.fragedesc}>
                            Sie können sich mit Ihren aktuellen Mitgliedsdaten im Bereich &quot;Login&quot; auf der Startseite unserer Website in unserer Anwendung anmelden.<br/><br/>

    Wenn Sie sich anmelden, müssen Sie sicherstellen, dass Ihre E-Mail, Ihr Mobiltelefon und Ihr Passwort, 
    das Sie bei der Anmeldung angegeben haben, korrekt sind. Wenn Sie Ihr Passwort vergessen haben, 
    können Sie über die Option &quot;Passwort vergessen&quot; ein neues Passwort anfordern.
                            </div>}
                        </div>
                        <div className={classes.fragecontainer}>
                            <div className={`${classes.frageheading} ${question2 == false && classes.marginbottom}`} onClick={() => setQuestion2(d => !d)}>
                                <span className={classes.question}>Ich kann mich nicht anmelden, wie kann ich das tun?</span>
                                <Expand className={question2 == true ? classes.expandopen : classes.expandclosed} />
                            </div>
                            {question2 == true &&  <div className={classes.fragedesc}>
                            Sie können sich mit Ihren aktuellen Mitgliedsdaten im Bereich &quot;Login&quot; auf der Startseite unserer Website in unserer Anwendung anmelden.<br/><br/>

    Wenn Sie sich anmelden, müssen Sie sicherstellen, dass Ihre E-Mail, Ihr Mobiltelefon und Ihr Passwort, 
    das Sie bei der Anmeldung angegeben haben, korrekt sind. Wenn Sie Ihr Passwort vergessen haben, 
    können Sie über die Option &quot;Passwort vergessen&quot; ein neues Passwort anfordern.
                            </div>}
                        </div>
                        <div className={classes.fragecontainer}>
                            <div className={`${classes.frageheading} ${question3 == false && classes.marginbottom}`} onClick={() => setQuestion3(d => !d)}>
                                <span className={classes.question}>Ich kann mich nicht anmelden, wie kann ich das tun?</span>
                                <Expand className={question3 == true ? classes.expandopen : classes.expandclosed} />
                            </div>
                            {question3 == true &&  <div className={classes.fragedesc}>
                            Sie können sich mit Ihren aktuellen Mitgliedsdaten im Bereich &quot;Login&quot; auf der Startseite unserer Website in unserer Anwendung anmelden.<br/><br/>

    Wenn Sie sich anmelden, müssen Sie sicherstellen, dass Ihre E-Mail, Ihr Mobiltelefon und Ihr Passwort, 
    das Sie bei der Anmeldung angegeben haben, korrekt sind. Wenn Sie Ihr Passwort vergessen haben, 
    können Sie über die Option &quot;Passwort vergessen&quot; ein neues Passwort anfordern.
                            </div>}
                        </div>
                        <div className={classes.fragecontainer}>
                            <div className={`${classes.frageheading} ${question4 == false && classes.marginbottom}`} onClick={() => setQuestion4(d => !d)}>
                                <span className={classes.question}>Ich kann mich nicht anmelden, wie kann ich das tun?</span>
                                <Expand className={question4 == true ? classes.expandopen : classes.expandclosed} />
                            </div>
                            {question4 == true &&  <div className={classes.fragedesc}>
                            Sie können sich mit Ihren aktuellen Mitgliedsdaten im Bereich &quot;Login&quot; auf der Startseite unserer Website in unserer Anwendung anmelden.<br/><br/>

    Wenn Sie sich anmelden, müssen Sie sicherstellen, dass Ihre E-Mail, Ihr Mobiltelefon und Ihr Passwort, 
    das Sie bei der Anmeldung angegeben haben, korrekt sind. Wenn Sie Ihr Passwort vergessen haben, 
    können Sie über die Option &quot;Passwort vergessen&quot; ein neues Passwort anfordern.
                            </div>}
                        </div>
                        <div className={classes.fragecontainer}>
                            <div className={`${classes.frageheading} ${question5 == false && classes.marginbottom}`} onClick={() => setQuestion5(d => !d)}>
                                <span className={classes.question}>Ich kann mich nicht anmelden, wie kann ich das tun?</span>
                                <Expand className={question5 == true ? classes.expandopen : classes.expandclosed} />
                            </div>
                            {question5 == true &&  <div className={classes.fragedesc}>
                            Sie können sich mit Ihren aktuellen Mitgliedsdaten im Bereich &quot;Login&quot; auf der Startseite unserer Website in unserer Anwendung anmelden.<br/><br/>

    Wenn Sie sich anmelden, müssen Sie sicherstellen, dass Ihre E-Mail, Ihr Mobiltelefon und Ihr Passwort, 
    das Sie bei der Anmeldung angegeben haben, korrekt sind. Wenn Sie Ihr Passwort vergessen haben, 
    können Sie über die Option &quot;Passwort vergessen&quot; ein neues Passwort anfordern.
                            </div>}
                        </div>
                        <div className={classes.fragecontainer}>
                            <div className={`${classes.frageheading} ${question6 == false && classes.marginbottom}`} onClick={() => setQuestion6(d => !d)}>
                                <span className={classes.question}>Ich kann mich nicht anmelden, wie kann ich das tun?</span>
                                <Expand className={question6 == true ? classes.expandopen : classes.expandclosed} />
                            </div>
                            {question6 == true &&  <div className={classes.fragedesc}>
                            Sie können sich mit Ihren aktuellen Mitgliedsdaten im Bereich &quot;Login&quot; auf der Startseite unserer Website in unserer Anwendung anmelden.<br/><br/>

    Wenn Sie sich anmelden, müssen Sie sicherstellen, dass Ihre E-Mail, Ihr Mobiltelefon und Ihr Passwort, 
    das Sie bei der Anmeldung angegeben haben, korrekt sind. Wenn Sie Ihr Passwort vergessen haben, 
    können Sie über die Option &quot;Passwort vergessen&quot; ein neues Passwort anfordern.
                            </div>}
                        </div>
                        <div className={classes.fragecontainer}>
                            <div className={`${classes.frageheading} ${question7 == false && classes.marginbottom}`} onClick={() => setQuestion7(d => !d)}>
                                <span className={classes.question}>Ich kann mich nicht anmelden, wie kann ich das tun?</span>
                                <Expand className={question7 == true ? classes.expandopen : classes.expandclosed} />
                            </div>
                            {question7 == true &&  <div className={classes.fragedesc}>
                            Sie können sich mit Ihren aktuellen Mitgliedsdaten im Bereich &quot;Login&quot; auf der Startseite unserer Website in unserer Anwendung anmelden.<br/><br/>

    Wenn Sie sich anmelden, müssen Sie sicherstellen, dass Ihre E-Mail, Ihr Mobiltelefon und Ihr Passwort, 
    das Sie bei der Anmeldung angegeben haben, korrekt sind. Wenn Sie Ihr Passwort vergessen haben, 
    können Sie über die Option &quot;Passwort vergessen&quot; ein neues Passwort anfordern.
                            </div>}
                        </div>
                        <div className={classes.fragecontainer}>
                            <div className={`${classes.frageheading} ${question8 == false && classes.marginbottom}`} onClick={() => setQuestion8(d => !d)}>
                                <span className={classes.question}>Ich kann mich nicht anmelden, wie kann ich das tun?</span>
                                <Expand className={question8 == true ? classes.expandopen : classes.expandclosed} />
                            </div>
                            {question8 == true &&  <div className={classes.fragedesc}>
                            Sie können sich mit Ihren aktuellen Mitgliedsdaten im Bereich &quot;Login&quot; auf der Startseite unserer Website in unserer Anwendung anmelden.<br/><br/>

    Wenn Sie sich anmelden, müssen Sie sicherstellen, dass Ihre E-Mail, Ihr Mobiltelefon und Ihr Passwort, 
    das Sie bei der Anmeldung angegeben haben, korrekt sind. Wenn Sie Ihr Passwort vergessen haben, 
    können Sie über die Option &quot;Passwort vergessen&quot; ein neues Passwort anfordern.
                            </div>}
                        </div>

                        <div className={classes.fragecontainer}>
                            <div className={`${classes.frageheading} ${question9 == false && classes.marginbottom}`} onClick={() => setQuestion9(d => !d)}>
                                <span className={classes.question}>Ich kann mich nicht anmelden, wie kann ich das tun?</span>
                                <Expand className={question9 == true ? classes.expandopen : classes.expandclosed} />
                            </div>
                            {question9 == true &&  <div className={classes.fragedesc}>
                            Sie können sich mit Ihren aktuellen Mitgliedsdaten im Bereich &quot;Login&quot; auf der Startseite unserer Website in unserer Anwendung anmelden.<br/><br/>

    Wenn Sie sich anmelden, müssen Sie sicherstellen, dass Ihre E-Mail, Ihr Mobiltelefon und Ihr Passwort, 
    das Sie bei der Anmeldung angegeben haben, korrekt sind. Wenn Sie Ihr Passwort vergessen haben, 
    können Sie über die Option &quot;Passwort vergessen&quot; ein neues Passwort anfordern.
                            </div>}
                        </div>
                        <div className={classes.fragecontainer}>
                            <div className={`${classes.frageheading} ${question10 == false && classes.noborderbottom} `} onClick={() => setQuestion10(d => !d)}>
                                <span className={classes.question}>Ich kann mich nicht anmelden, wie kann ich das tun?</span>
                                <Expand className={question10 == true ? classes.expandopen : classes.expandclosed} />
                            </div>
                            {question10 == true &&  <div className={classes.fragedesclast}>
                            Sie können sich mit Ihren aktuellen Mitgliedsdaten im Bereich &quot;Login&quot; auf der Startseite unserer Website in unserer Anwendung anmelden.<br/><br/>

    Wenn Sie sich anmelden, müssen Sie sicherstellen, dass Ihre E-Mail, Ihr Mobiltelefon und Ihr Passwort, 
    das Sie bei der Anmeldung angegeben haben, korrekt sind. Wenn Sie Ihr Passwort vergessen haben, 
    können Sie über die Option &quot;Passwort vergessen&quot; ein neues Passwort anfordern.
                            </div>}
                        </div>
                    {/* FRAGEN - top */}

                    {/* */}
                </div>
                <div className={classes.images}>
                        <div className={classes.ab1}>
                            <Image src={'/aboutus/ab1.png'} layout='fill' objectFit='cover' />
                        </div>
                        <div className={classes.ab2}>
                            <Image src={'/aboutus/ab2.png'} layout='fill' objectFit='cover' />
                        </div>
                        <div className={classes.ab3}>
                            <Image src={'/aboutus/ab3.png'} layout='fill' objectFit='cover' />
                        </div>
                    </div>
                    <div className={classes.blackbg}>
                            <div className={classes.gigantright}>
                                <Image src={'/aboutus/giglogo.png'} height={35} width={141.72} objectFit='cover' />
                            </div>
                        </div>
                <div className={classes.gigantgroupcontainer}>
                        <div className={classes.gigantleft}>
                            <h4 className={classes.gigantheading}>ÜBER GIGANT GROUP.</h4>
                            <p className={classes.gigantdesc}>
                            Das Unternehmen kennzeichnet sich durch technologische Innovationen, 
die von eigenen Marken und Produkten bis hin zu Vermarktung und Gestaltung der Technologie reichen. <br></br><br></br>

Die Technologie soll dem Endkunden in jeder Form einen Nutzen bieten.
Das Unternehmen investiert in Start-up Projekte, um neue Ideen zu verwirklichen und diese am Markt zu etablieren.<br></br><br></br>
 
Besonders wichtig ist den Machern des Unternehmens die Produktionstechnik, 
die effizienter gestaltet ist und dadurch Kosten spart.
Darüber hinaus setzt das Unternehmen auf Mitarbeiter mit langjähriger Erfahrung sowie auf ein positives Arbeitsklima.
                            </p>
                        </div>
                    </div>
            </div>
        </div> 
    )
}

export default About;