import classes from './Homepage.module.css';
import Image from 'next/image';
import Limo from './../public/acar/limo.svg';
import Suv from './../public/acar/suv.svg'
import KombiVan from './../public/acar/kombivan.svg';
import Coupe from './../public/acar/coupe.svg';
import Cabrio from './../public/acar/cabrio.svg';
import Kleinbus from './../public/acar/kleinbus.svg';
import Select from 'react-select';
import { useRef, useState } from 'react';
import SearchIcon from './../public/searchicon.svg';
import HomeSwiper from './home/HomeSwiper';
import { SwiperSlide } from 'swiper/react';
import HomeAngebot from './ui/ads/HomeAngebot';
import OwlSlider from './ui/OwlCarousel';
import FrontImg from './../public/fronting.svg';
import FrontPic from './../public/front.png';
import Input from './ui/Input'
import GridCard from './cards/GridCard';

function ControlledInput({ onUpdate, placeholder, inputType, className }){
    const [value, setValue] = useState();
    const handleChange = e => {
        setValue(e.target.value);
        onUpdate(e.target.value)
    }
    return <input type={inputType} value={value || ''} onChange={handleChange} className={className} placeholder={placeholder} />
}

function Homepage(){
    const style = {
        control: (base) => ({
          ...base,
          boxShadow: "none",
          border: "2px solid #fff",
          fontSize: '15px',
          borderRadius: '10px',
          backgroundColor: "transparent",
          color: "#fff !important",
          fontSize: "13px"
        }),
        option: (styles, state) => ({
          ...styles,
          backgroundColor: state.isSelected ? "#fbb900" : "",
          "&:active": "#fbb90080",
          fontSize: '13px',
        }),
    };

    let brands = [
        { label: "Toyota", value: "toyota", className: classes.style },
        { label: "BMW", value: "bmw", className: classes.style },
        { label: "Mercedes-Benz", value: "mercedes-benz", className: classes.style },
        { label: "Audi", value: "audi", className: classes.style },
        { label: "Volkswagen", value: "volkswagen", className: classes.style },
        { label: "Ford", value: "ford", className: classes.style },
        { label: "Honda", value: "honda", className: classes.style },
        { label: "Nissan", value: "nissan", className: classes.style },
        { label: "Mazda", value: "mazda" },
        { label: "Hyundai", value: "hyundai" }
    ];

    const [models, setModels] = useState([
        { label: "3 Series", value: "3 series" },
        { label: "5 Series", value: "5 series" },
        { label: "7 Series", value: "7 series" },
        { label: "X3", value: "x3" },
        { label: "X5", value: "x5" },
        { label: "X7", value: "x7" },
        { label: "Z4", value: "z4" },
        { label: "M2", value: "m2" },
        { label: "M3", value: "m3" },
        { label: "M4", value: "m4" }
    ]);

    const kmstandBis = [];
    const erstzulassenAb = [];
    const preisBis = [];

    const [model, setModel] = useState();
    const [brand, setBrand] = useState();
    const suchbegriff = useRef("");
    const nurNeuJungwagen = useRef(false);
    const newsletterMail = useRef("");
    const [kmStand, setKmStand] = useState();
    const [ezAb, setEzAb] = useState();
    const [maxPreis, setMaxPreis] = useState();
   

    const [anzahlGefundeneFahrzeuge, setAnzahlGefundeneFahrzeuge] = useState(21158);
    var displayAnzahlGefundeneFahrzeuge = anzahlGefundeneFahrzeuge.toLocaleString();

    const [angebote, setAngebote] = useState([
        {
          id: 0,
          seller: "Privat",
          preis: 500,
          title: "Mercedes AMG GT",
          adNo: "#294873205",
          start: "01/01/2020",
          end: "01/01/2022",
          imgSrc: "/car-images/testcar.jpg",
          state: "2700 Wiener Neustadt",
          country: "Österreich",
          description: "4.2 FSI quattro * ABT KOMPRESSOR, 20",
          companyname: "Gigant Group Teknoloji A.S",
          baujahr: "01/2022",
          treibstoff: "Benzin",
          ps: 120,
          kmStand: 412000,
          getriebe: "Automatik",
          gigalabel: false,
          colorad: false,
          brand: "Audi",
          model: "R8",
          bodyType: "Cabrio",
          transmissionType: "Schaltgetriebe",
          conditionOption: "Gebrauchtwagen",
          performance: "177 PS (130kW)",
          exteriourColour: "Weiß",
          upholstery: "Stoff",
          fuelType: "Diesel",
          pollutantClass: "Euro 5",
          seats: "5",
          doors: "4"
        },
        {
          id: 1,
          seller: "Privat",
          preis: 500,
          title: "Mercedes AMG GT",
          adNo: "#294873205",
          start: "01/01/2020",
          end: "01/01/2022",
          imgSrc: "/car-images/testcar2.jpg",
          state: "2700 Wiener Neustadt",
          country: "Österreich",
          description: "4.2 FSI quattro * ABT KOMPRESSOR, 20",
          companyname: "Gigant Group Teknoloji A.S",
          baujahr: "01/2022",
          treibstoff: "Benzin",
          ps: 120,
          kmStand: 412000,
          getriebe: "Automatik",
          gigalabel: false,
          colorad: false,
          brand: "Audi",
          model: "R8",
          bodyType: "Cabrio",
          transmissionType: "Schaltgetriebe",
          conditionOption: "Gebrauchtwagen",
          performance: "177 PS (130kW)",
          exteriourColour: "Weiß",
          upholstery: "Stoff",
          fuelType: "Diesel",
          pollutantClass: "Euro 5",
          seats: "5",
          doors: "4"
        },
        {
          id: 2,
          seller: "Privat",
          preis: 500,
          title: "Mercedes AMG GT",
          adNo: "#294873205",
          start: "01/01/2020",
          end: "01/01/2022",
          imgSrc: "/car-images/testcar3.jpg",
          state: "2700 Wiener Neustadt",
          country: "Österreich",
          description: "4.2 FSI quattro * ABT KOMPRESSOR, 20",
          companyname: "Gigant Group Teknoloji A.S",
          baujahr: "01/2022",
          treibstoff: "Benzin",
          ps: 120,
          kmStand: 412000,
          getriebe: "Automatik",
          gigalabel: false,
          colorad: false,
          brand: "Audi",
          model: "R8",
          bodyType: "Cabrio",
          transmissionType: "Schaltgetriebe",
          conditionOption: "Gebrauchtwagen",
          performance: "177 PS (130kW)",
          exteriourColour: "Weiß",
          upholstery: "Stoff",
          fuelType: "Diesel",
          pollutantClass: "Euro 5",
          seats: "5",
          doors: "4"
        },
        {
          id: 3,
          seller: "Privat",
          preis: 500,
          title: "Mercedes AMG GT",
          adNo: "#294873205",
          start: "01/01/2020",
          end: "01/01/2022",
          imgSrc: "/car-images/testcar4.jpg",
          state: "2700 Wiener Neustadt",
          country: "Österreich",
          description: "4.2 FSI quattro * ABT KOMPRESSOR, 20",
          companyname: "Gigant Group Teknoloji A.S",
          baujahr: "01/2022",
          treibstoff: "Benzin",
          ps: 120,
          kmStand: 412000,
          getriebe: "Automatik",
          gigalabel: false,
          colorad: false,
          brand: "Audi",
          model: "R8",
          bodyType: "Cabrio",
          transmissionType: "Schaltgetriebe",
          conditionOption: "Gebrauchtwagen",
          performance: "177 PS (130kW)",
          exteriourColour: "Weiß",
          upholstery: "Stoff",
          fuelType: "Diesel",
          pollutantClass: "Euro 5",
          seats: "5",
          doors: "4"
        },
        {
          id: 4,
          seller: "Privat",
          preis: 500,
          title: "Mercedes AMG GT",
          adNo: "#294873205",
          start: "01/01/2020",
          end: "01/01/2022",
          imgSrc: "/car-images/testcar5.jpg",
          state: "2700 Wiener Neustadt",
          country: "Österreich",
          description: "4.2 FSI quattro * ABT KOMPRESSOR, 20",
          companyname: "Gigant Group Teknoloji A.S",
          baujahr: "01/2022",
          treibstoff: "Benzin",
          ps: 120,
          kmStand: 412000,
          getriebe: "Automatik",
          gigalabel: false,
          colorad: false,
          brand: "Audi",
          model: "R8",
          bodyType: "Cabrio",
          transmissionType: "Schaltgetriebe",
          conditionOption: "Gebrauchtwagen",
          performance: "177 PS (130kW)",
          exteriourColour: "Weiß",
          upholstery: "Stoff",
          fuelType: "Diesel",
          pollutantClass: "Euro 5",
          seats: "5",
          doors: "4"
        },
        {
          id: 5,
          seller: "Privat",
          preis: 500,
          title: "Mercedes AMG GT",
          adNo: "#294873205",
          start: "01/01/2020",
          end: "01/01/2022",
          imgSrc: "/car-images/testcar6.jpg",
          state: "2700 Wiener Neustadt",
          country: "Österreich",
          description: "4.2 FSI quattro * ABT KOMPRESSOR, 20",
          companyname: "Gigant Group Teknoloji A.S",
          baujahr: "01/2022",
          treibstoff: "Benzin",
          ps: 120,
          kmStand: 412000,
          getriebe: "Automatik",
          gigalabel: false,
          colorad: false,
          brand: "Audi",
          model: "R8",
          bodyType: "Cabrio",
          transmissionType: "Schaltgetriebe",
          conditionOption: "Gebrauchtwagen",
          performance: "177 PS (130kW)",
          exteriourColour: "Weiß",
          upholstery: "Stoff",
          fuelType: "Diesel",
          pollutantClass: "Euro 5",
          seats: "5",
          doors: "4"
        },
        {
          id: 6,
          seller: "Privat",
          preis: 500,
          title: "Mercedes AMG GT",
          adNo: "#294873205",
          start: "01/01/2020",
          end: "01/01/2022",
          imgSrc: "/car-images/testcar.jpg",
          state: "2700 Wiener Neustadt",
          country: "Österreich",
          description: "4.2 FSI quattro * ABT KOMPRESSOR, 20",
          companyname: "Gigant Group Teknoloji A.S",
          baujahr: "01/2022",
          treibstoff: "Benzin",
          ps: 120,
          kmStand: 412000,
          getriebe: "Automatik",
          gigalabel: false,
          colorad: false,
          brand: "Audi",
          model: "R8",
          bodyType: "Cabrio",
          transmissionType: "Schaltgetriebe",
          conditionOption: "Gebrauchtwagen",
          performance: "177 PS (130kW)",
          exteriourColour: "Weiß",
          upholstery: "Stoff",
          fuelType: "Diesel",
          pollutantClass: "Euro 5",
          seats: "5",
          doors: "4"
        },
        {
            id: 3,
            seller: "Privat",
            preis: 500,
            title: "Mercedes AMG GT",
            adNo: "#294873205",
            start: "01/01/2020",
            end: "01/01/2022",
            imgSrc: "/car-images/testcar4.jpg",
            state: "2700 Wiener Neustadt",
            country: "Österreich",
            description: "4.2 FSI quattro * ABT KOMPRESSOR, 20",
            companyname: "Gigant Group Teknoloji A.S",
            baujahr: "01/2022",
            treibstoff: "Benzin",
            ps: 120,
            kmStand: 412000,
            getriebe: "Automatik",
            gigalabel: false,
            colorad: false,
            brand: "Audi",
            model: "R8",
            bodyType: "Cabrio",
            transmissionType: "Schaltgetriebe",
            conditionOption: "Gebrauchtwagen",
            performance: "177 PS (130kW)",
            exteriourColour: "Weiß",
            upholstery: "Stoff",
            fuelType: "Diesel",
            pollutantClass: "Euro 5",
            seats: "5",
            doors: "4"
          },
          {
            id: 0,
            seller: "Privat",
            preis: 500,
            title: "Mercedes AMG GT",
            adNo: "#294873205",
            start: "01/01/2020",
            end: "01/01/2022",
            imgSrc: "/car-images/testcar.jpg",
            state: "2700 Wiener Neustadt",
            country: "Österreich",
            description: "4.2 FSI quattro * ABT KOMPRESSOR, 20",
            companyname: "Gigant Group Teknoloji A.S",
            baujahr: "01/2022",
            treibstoff: "Benzin",
            ps: 120,
            kmStand: 412000,
            getriebe: "Automatik",
            gigalabel: false,
            colorad: false,
            brand: "Audi",
            model: "R8",
            bodyType: "Cabrio",
            transmissionType: "Schaltgetriebe",
            conditionOption: "Gebrauchtwagen",
            performance: "177 PS (130kW)",
            exteriourColour: "Weiß",
            upholstery: "Stoff",
            fuelType: "Diesel",
            pollutantClass: "Euro 5",
            seats: "5",
            doors: "4"
          },
      ]);

    const [row, setRow] = useState(0);

    return (
        <>
            {/* Create components in the home folder: components/home/yourcomponent */}
            <div className="bg-theme-gray-10 overflow-hidden lg:px-6 md:!px-0">
                <div className={`${classes.contentcontainer} relative w-10/12 lg:w-full max-w-ag-container md:!w-full mx-auto flex lg:flex-col bg-white`}>
                    <div className={classes.searcharea}>
                        <div className={classes.selectsection}>
                            <div className={classes.cars}>
                               <div className={classes.carflex}>
                                    <Limo className={classes.car} />
                                    <span className={classes.cartext}>Limousine</span>
                                </div> 
                                <div className={classes.carflex}>
                                    <Suv className={classes.car} />
                                    <span className={classes.cartext}>SUV</span>
                                </div>
                                <div className={classes.carflex}>
                                    <KombiVan className={classes.car} />
                                    <span className={classes.cartext}>Kombi Van</span>
                                </div>
                                <div className={classes.carflex}>
                                    <Coupe className={classes.car} />
                                    <span className={classes.cartext}>Coupè</span>
                                </div>
                                <div className={classes.carflex}>
                                    <Cabrio className={classes.car} />
                                    <span className={classes.cartext}>Cabrio</span>
                                </div>
                                <div className={classes.carflex}>
                                    <Kleinbus className={classes.car} />
                                    <span className={classes.cartext}>Kleinbus</span>
                                </div>
                            </div>
                            <div className={classes.selectfields}>
                            <Select 
                                options={brands}
                                styles={style}
                                placeholder={"Marke"}
                                onChange={(e) => setBrand(e.value)}
                                defaultInputValue={brand}
                                className={`${classes.marginright} w-full ${classes.selectinput}`}
                            />
                            <Select 
                                options={models}
                                styles={style}
                                placeholder={"Modell"}
                                onChange={(e) => setModel(e.value)}
                                defaultInputValue={model}
                                className={`${classes.marginright} w-full  ${classes.selectinput}`}
                            />
                            <span className={`w-full relative ${classes.suchbegriff} `}>
                                <ControlledInput 
                                    onUpdate={val => {
                                        suchbegriff.current = val;
                                    }}
                                    inputType={"text"}
                                    placeholder={"Suchbegriff"}
                                    className={classes.input}
                                />
                                <SearchIcon className={classes.searchicon} />
                            </span>
                        </div>
                            <div className={classes.selectfields}>
                            <Select 
                                options={kmstandBis}
                                styles={style}
                                placeholder={"km bis"}
                                onChange={(e) => setKmStand(e.value)}
                                defaultInputValue={kmStand}
                                className={`${classes.marginright} w-full  ${classes.selectinput}`}
                            />
                            <Select 
                                options={erstzulassenAb}
                                styles={style}
                                placeholder={"EZ ab"}
                                onChange={(e) => setEzAb(e.value)}
                                defaultInputValue={ezAb}
                                className={`${classes.marginright} w-full  ${classes.selectinput}`}
                            />
                            <Select 
                                options={maxPreis}
                                styles={style}
                                placeholder={"€ bis"}
                                onChange={(e) => setMaxPreis(e.value)}
                                defaultInputValue={ezAb}
                                className={` w-full  ${classes.selectinput}`}
                            />
                        </div>
                        <div className={classes.erweitertesuche}>
                            <span className={classes.firstbolder}>Erweiterte Suche</span>
                            <span className={classes.bolder}>Filter zurücksetzen</span>
                        </div>
                            <div className={classes.sendarea}>
                                <label className={classes.jarea}>
                                <ControlledInput 
                                    onUpdate={val => {
                                        nurNeuJungwagen.current = val;
                                    }}
                                    inputType={"checkbox"}
            
                                />
                                    <span className={classes.jtext}>nur Neu- und Jungwagen</span>
                                </label>
                                <div className={classes.sendbtn}>{displayAnzahlGefundeneFahrzeuge} Fahrzeuge anzeigen</div>
                            </div>
                        </div>
                    </div>
                   {/* CONTINUE HERE */}
                   <div className={classes.swiperarea}>
                        {angebote.map((fav, index) => (
                        <div key={index}>
                            <GridCard
                            id={index}
                            adNo={fav.adNo}
                            price={fav.preis}
                            title={fav.title}
                            img={fav.imgSrc}
                            location={fav.location}
                            gigalabel={fav.gigalabel}
                            colorad={fav.colorad}
                            description={fav.description}
                            baujahr={fav.baujahr}
                            kmStand={fav.kmStand}
                            ps={fav.ps}
                            getriebe={fav.getriebe}
                            treibstoff={fav.treibstoff}
                            seller={fav.seller}
                            state={fav.state}
                            country={fav.country}
                            brand={fav.brand}
                            model={fav.model}
                            bodyType={fav.bodyType}
                            transmissionType={fav.transmissionType}
                            conditionOption={fav.conditionOption}
                            performance={fav.performance}
                            exteriourColour={fav.exteriourColour}
                            upholstery={fav.upholstery}
                            fuelType={fav.fuelType}
                            pollutantClass={fav.pollutantClass}
                            seats={fav.seats}
                            doors={fav.doors}
                            />
                        </div>
                        ))}
                    </div>
                    <div className={classes.lastarea}>
                        <div className={classes.bigtext}>Wir bieten eine große Auswahl an beliebten Modellen, Marken und Autohäusern.</div>
                        <div className={classes.carscontainer}>
                            
                            <div className={classes.item}>
                                <div className={classes.marke}>Audi</div>
                                <div className={classes.modell}>Audi A1</div>
                                <div className={classes.modell}>Audi A3</div>
                                <div className={classes.modell}>Audi A4</div>
                                <div className={classes.modell}>Audi A6</div>
                                <div className={classes.modell}>Audi Q5</div>
                                <div className={classes.modell}>Mehr Modelle</div>
                            </div>
                            <div className={classes.item}>
                                <div className={classes.marke}>Aufbautypen</div>
                                <div className={classes.modell}>Cabrio</div>
                                <div className={classes.modell}>Limousine</div>
                                <div className={classes.modell}>Pick-up</div>
                                <div className={classes.modell}>SUV</div>
                                <div className={classes.modell}>Transporter</div>
                                <div className={classes.modell}>Mehr Aufbautypen</div>
                            </div>
                            <div className={classes.item}>
                                <div className={classes.marke}>BMW</div>
                                <div className={classes.modell}>BMW 1er</div>
                                <div className={classes.modell}>BMW 2er</div>
                                <div className={classes.modell}>BMW 3er</div>
                                <div className={classes.modell}>BMW 5er</div>
                                <div className={classes.modell}>BMW X1</div>
                                <div className={classes.modell}>Mehr Modelle</div>
                            </div>
                            <div className={classes.item}>
                                <div className={classes.marke}>Marken Europa</div>
                                <div className={classes.modell}>Citroen</div>
                                <div className={classes.modell}>Fiat</div>
                                <div className={classes.modell}>Peugeot</div>
                                <div className={classes.modell}>Renault</div>
                                <div className={classes.modell}>Skoda</div>
                                <div className={classes.modell}>Mehr Marken</div>
                            </div>
                            <div className={classes.item}>
                                <div className={classes.marke}>Mercedes-Benz</div>
                                <div className={classes.modell}>Mercedes B-Klasse</div>
                                <div className={classes.modell}>Mercedes C-Klasse</div>
                                <div className={classes.modell}>Mercedes CLA</div>
                                <div className={classes.modell}>Mercedes E-Klasse</div>
                                <div className={classes.modell}>Mercedes GLA</div>
                                <div className={classes.modell}>Mehr Modelle</div>
                            </div>
                            <div className={classes.item}>
                                <div className={classes.marke}>Marken Asien</div>
                                <div className={classes.modell}>Hyundai</div>
                                <div className={classes.modell}>Mazda</div>
                                <div className={classes.modell}>Mitsubishi</div>
                                <div className={classes.modell}>Nissan</div>
                                <div className={classes.modell}>Toyota</div>
                                <div className={classes.modell}>Mehr Marken</div>
                            </div>
                            
                            <div className={classes.item}>
                                <div className={classes.marke}>VW</div>
                                <div className={classes.modell}>VW Golf</div>
                                <div className={classes.modell}>VW Polo</div>
                                <div className={classes.modell}>VW Passat</div>
                                <div className={classes.modell}>VW Touran</div>
                                <div className={classes.modell}>VW up!</div>
                                <div className={classes.modell}>Mehr Modelle</div>
                            </div>
                            <div className={classes.item}>
                                <div className={classes.marke}>Autohäuser</div>
                                <div className={classes.modell}>in Wien</div>
                                <div className={classes.modell}>in Graz</div>
                                <div className={classes.modell}>in Linz</div>
                                <div className={classes.modell}>in Salzburg</div>
                                <div className={classes.modell}>in Wiener Neustadt</div>
                                <div className={classes.modell}>Mehr Autohäuser</div>
                            </div>
                            
                            <div className={classes.item}>
                                <div className={classes.marke}>Ford</div>
                                <div className={classes.modell}>Ford Ecosport</div>
                                <div className={classes.modell}>Ford Fiesta</div>
                                <div className={classes.modell}>Ford Focus</div>
                                <div className={classes.modell}>Ford Ka</div>
                                <div className={classes.modell}>Ford Mondeo</div>
                                <div className={classes.modell}>Mehr Modelle</div>
                            </div>
                            <div className={`${classes.item}`}>
                                <div className={classes.marke}>GIGANT WORLD</div>
                                <div className={classes.modell}>E GIGANT.</div>
                                <div className={classes.modell}>IMMO GIGANT.</div>
                                <div className={classes.modell}>GASTRO GIGANT.</div>
                                <div className={classes.modell}>HOSTING GIGANT.</div>
                                <div className={classes.modell}>GIGANT SHOP.</div>
                                <div className={classes.modell}>Mehr Plattformen</div>
                            </div>
                        </div>
                        <div className={classes.bigtext}>Autogigant.at wird bald auch in Deutschland, der Schweiz, Türkiye und Qatar verfügbar sein.</div>
                        <div className={classes.newslettercontainer}>
                            <div className={classes.newsletterheading}>GIGANT WORLD - aktuell. gigantisch. kostenlos.</div>
                            <div className={classes.newslettertext}>Newsletter abonnieren, immer informiert bleiben und € 50,- GIGA COINS gewinnen!*</div>
                            <div className={classes.inputrow}>
                                {/* <input type={"email"} value={newsletterEmail} onChange={(e) => setNewsletterEmail(e.target.value)} placeholder={"Deine E-Mail Adresse"} className={classes.newsletterinput} /> */}
                                <ControlledInput 
                                    onUpdate={val => {
                                        newsletterMail.current = val;
                                    }}
                                    inputType={"email"}
                                    className={classes.newsletterinput}
                                    placeholder={"Deine E-Mail-Adresse"}
                                />
                                <button className={classes.mailbtn}>Newsletter Anmelden</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Homepage;