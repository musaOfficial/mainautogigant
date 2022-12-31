import classes from './Homepage.module.css';
import Image from 'next/image';
import Limo from './../public/acar/limo.svg';
import Suv from './../public/acar/suv.svg'
import KombiVan from './../public/acar/kombivan.svg';
import Coupe from './../public/acar/coupe.svg';
import Cabrio from './../public/acar/cabrio.svg';
import Kleinbus from './../public/acar/kleinbus.svg';
import Select from 'react-select';
import { useState } from 'react';
import SearchIcon from './../public/searchicon.svg';
import HomeSwiper from './home/HomeSwiper';
import { SwiperSlide } from 'swiper/react';
import Angebot from './ui/ads/Angebot';

function Homepage(){
    const style = {
        control: (base) => ({
          ...base,
          boxShadow: "none",
          border: "none",
          fontSize: '13px',
          borderRadius: '10px',
        }),
        option: (styles, state) => ({
          ...styles,
          backgroundColor: state.isSelected ? "#fbb900" : "",
          "&:active": "#fbb90080",
          fontSize: '13px',
        }),
    };

    const brands = [
        {value: "as", label: "as"},
        {value: "as", label: "as"},
        {value: "as", label: "as"},
        {value: "as", label: "as"},
        {value: "as", label: "as"},
        {value: "as", label: "as"},
        {value: "as", label: "as"},
        {value: "as", label: "as"},
        {value: "as", label: "as"},
        {value: "as", label: "as"},
        {value: "as", label: "as"},
        {value: "as", label: "as"},
        {value: "as", label: "as"},
        {value: "as", label: "as"},
        {value: "as", label: "as"},
        {value: "as", label: "as"},
    ];
    const [models, setModels] = useState([
        {value: "as", label: "as"},
        {value: "as", label: "as"},
        {value: "as", label: "as"},
        {value: "as", label: "as"},
        {value: "as", label: "as"},
        {value: "as", label: "as"},
        {value: "as", label: "as"},
        {value: "as", label: "as"},
    ]);

    const kmstandBis = [];
    const erstzulassenAb = [];
    const preisBis = [];

    const [model, setModel] = useState();
    const [brand, setBrand] = useState();
    const [suchbegriff, setSuchbegriff] = useState();
    const [kmStand, setKmStand] = useState();
    const [ezAb, setEzAb] = useState();
    const [maxPreis, setMaxPreis] = useState();
    const [nurNeuJungwagen, setNurNeuJungwagen] = useState(false);

    const [anzahlGefundeneFahrzeuge, setAnzahlGefundeneFahrzeuge] = useState(21158);
    var displayAnzahlGefundeneFahrzeuge = anzahlGefundeneFahrzeuge.toLocaleString();

    const angeboteFirstRow = [
        {
            preis: 213520,
            title: "Mercedes AMG GT",
            adNo: "#294873205",
            start: "01/01/2020",
            end: "01/01/2022",
            imgSrc: "/images/draft-card-img-car-1.png",
        },
        {
            preis: 213520,
            title: "Mercedes AMG GT",
            adNo: "#294873205",
            start: "01/01/2020",
            end: "01/01/2022",
            imgSrc: "/images/draft-card-img-car-1.png",
        },
        {
            preis: 213520,
            title: "Mercedes AMG GT",
            adNo: "#294873205",
            start: "01/01/2020",
            end: "01/01/2022",
            imgSrc: "/images/draft-card-img-car-1.png",
        },
        {
            preis: 213520,
            title: "Mercedes AMG GT",
            adNo: "#294873205",
            start: "01/01/2020",
            end: "01/01/2022",
            imgSrc: "/images/draft-card-img-car-1.png",
        },
        {
            preis: 213520,
            title: "Mercedes AMG GT",
            adNo: "#294873205",
            start: "01/01/2020",
            end: "01/01/2022",
            imgSrc: "/images/draft-card-img-car-1.png",
        },
        {
            preis: 213520,
            title: "Mercedes AMG GT",
            adNo: "#294873205",
            start: "01/01/2020",
            end: "01/01/2022",
            imgSrc: "/images/draft-card-img-car-1.png",
        },
        {
            preis: 213520,
            title: "Mercedes AMG GT",
            adNo: "#294873205",
            start: "01/01/2020",
            end: "01/01/2022",
            imgSrc: "/images/draft-card-img-car-1.png",
        },
        {
            preis: 213520,
            title: "Mercedes AMG GT",
            adNo: "#294873205",
            start: "01/01/2020",
            end: "01/01/2022",
            imgSrc: "/images/draft-card-img-car-1.png",
        },
        {
            preis: 213520,
            title: "Mercedes AMG GT",
            adNo: "#294873205",
            start: "01/01/2020",
            end: "01/01/2022",
            imgSrc: "/images/draft-card-img-car-1.png",
        },
        {
            preis: 213520,
            title: "Mercedes AMG GT",
            adNo: "#294873205",
            start: "01/01/2020",
            end: "01/01/2022",
            imgSrc: "/images/draft-card-img-car-1.png",
        },
        {
            preis: 213520,
            title: "Mercedes AMG GT",
            adNo: "#294873205",
            start: "01/01/2020",
            end: "01/01/2022",
            imgSrc: "/images/draft-card-img-car-1.png",
        },
        {
            preis: 213520,
            title: "Mercedes AMG GT",
            adNo: "#294873205",
            start: "01/01/2020",
            end: "01/01/2022",
            imgSrc: "/images/draft-card-img-car-1.png",
        },
        {
            preis: 213520,
            title: "Mercedes AMG GT",
            adNo: "#294873205",
            start: "01/01/2020",
            end: "01/01/2022",
            imgSrc: "/images/draft-card-img-car-1.png",
        },
        {
            preis: 213520,
            title: "Mercedes AMG GT",
            adNo: "#294873205",
            start: "01/01/2020",
            end: "01/01/2022",
            imgSrc: "/images/draft-card-img-car-1.png",
        },
        {
            preis: 213520,
            title: "Mercedes AMG GT",
            adNo: "#294873205",
            start: "01/01/2020",
            end: "01/01/2022",
            imgSrc: "/images/draft-card-img-car-1.png",
        },
        {
            preis: 213520,
            title: "Mercedes AMG GT",
            adNo: "#294873205",
            start: "01/01/2020",
            end: "01/01/2022",
            imgSrc: "/images/draft-card-img-car-1.png",
        },
        {
            preis: 213520,
            title: "Mercedes AMG GT",
            adNo: "#294873205",
            start: "01/01/2020",
            end: "01/01/2022",
            imgSrc: "/images/draft-card-img-car-1.png",
        },
        {
            preis: 213520,
            title: "Mercedes AMG GT",
            adNo: "#294873205",
            start: "01/01/2020",
            end: "01/01/2022",
            imgSrc: "/images/draft-card-img-car-1.png",
        },
        {
            preis: 213520,
            title: "Mercedes AMG GT",
            adNo: "#294873205",
            start: "01/01/2020",
            end: "01/01/2022",
            imgSrc: "/images/draft-card-img-car-1.png",
        },
        {
            preis: 213520,
            title: "Mercedes AMG GT",
            adNo: "#294873205",
            start: "01/01/2020",
            end: "01/01/2022",
            imgSrc: "/images/draft-card-img-car-1.png",
        },
        {
            preis: 213520,
            title: "Mercedes AMG GT",
            adNo: "#294873205",
            start: "01/01/2020",
            end: "01/01/2022",
            imgSrc: "/images/draft-card-img-car-1.png",
        },
        {
            preis: 213520,
            title: "Mercedes AMG GT",
            adNo: "#294873205",
            start: "01/01/2020",
            end: "01/01/2022",
            imgSrc: "/images/draft-card-img-car-1.png",
        },
        {
            preis: 213520,
            title: "Mercedes AMG GT",
            adNo: "#294873205",
            start: "01/01/2020",
            end: "01/01/2022",
            imgSrc: "/images/draft-card-img-car-1.png",
        },
        {
            preis: 213520,
            title: "Mercedes AMG GT",
            adNo: "#294873205",
            start: "01/01/2020",
            end: "01/01/2022",
            imgSrc: "/images/draft-card-img-car-1.png",
        },
    ]
    const angeboteSecondRow = [
        {
            preis: 213520,
            title: "Mercedes AMG GT",
            adNo: "#294873205",
            start: "01/01/2020",
            end: "01/01/2022",
            imgSrc: "/images/draft-card-img-car-1.png",
        },
        {
            preis: 213520,
            title: "Mercedes AMG GT",
            adNo: "#294873205",
            start: "01/01/2020",
            end: "01/01/2022",
            imgSrc: "/images/draft-card-img-car-1.png",
        },
        {
            preis: 213520,
            title: "Mercedes AMG GT",
            adNo: "#294873205",
            start: "01/01/2020",
            end: "01/01/2022",
            imgSrc: "/images/draft-card-img-car-1.png",
        },
        {
            preis: 213520,
            title: "Mercedes AMG GT",
            adNo: "#294873205",
            start: "01/01/2020",
            end: "01/01/2022",
            imgSrc: "/images/draft-card-img-car-1.png",
        },
        {
            preis: 213520,
            title: "Mercedes AMG GT",
            adNo: "#294873205",
            start: "01/01/2020",
            end: "01/01/2022",
            imgSrc: "/images/draft-card-img-car-1.png",
        },
        {
            preis: 213520,
            title: "Mercedes AMG GT",
            adNo: "#294873205",
            start: "01/01/2020",
            end: "01/01/2022",
            imgSrc: "/images/draft-card-img-car-1.png",
        },
        {
            preis: 213520,
            title: "Mercedes AMG GT",
            adNo: "#294873205",
            start: "01/01/2020",
            end: "01/01/2022",
            imgSrc: "/images/draft-card-img-car-1.png",
        },
        {
            preis: 213520,
            title: "Mercedes AMG GT",
            adNo: "#294873205",
            start: "01/01/2020",
            end: "01/01/2022",
            imgSrc: "/images/draft-card-img-car-1.png",
        },
        {
            preis: 213520,
            title: "Mercedes AMG GT",
            adNo: "#294873205",
            start: "01/01/2020",
            end: "01/01/2022",
            imgSrc: "/images/draft-card-img-car-1.png",
        },
        {
            preis: 213520,
            title: "Mercedes AMG GT",
            adNo: "#294873205",
            start: "01/01/2020",
            end: "01/01/2022",
            imgSrc: "/images/draft-card-img-car-1.png",
        },
        {
            preis: 213520,
            title: "Mercedes AMG GT",
            adNo: "#294873205",
            start: "01/01/2020",
            end: "01/01/2022",
            imgSrc: "/images/draft-card-img-car-1.png",
        },
        {
            preis: 213520,
            title: "Mercedes AMG GT",
            adNo: "#294873205",
            start: "01/01/2020",
            end: "01/01/2022",
            imgSrc: "/images/draft-card-img-car-1.png",
        },
        {
            preis: 213520,
            title: "Mercedes AMG GT",
            adNo: "#294873205",
            start: "01/01/2020",
            end: "01/01/2022",
            imgSrc: "/images/draft-card-img-car-1.png",
        },
        {
            preis: 213520,
            title: "Mercedes AMG GT",
            adNo: "#294873205",
            start: "01/01/2020",
            end: "01/01/2022",
            imgSrc: "/images/draft-card-img-car-1.png",
        },
        {
            preis: 213520,
            title: "Mercedes AMG GT",
            adNo: "#294873205",
            start: "01/01/2020",
            end: "01/01/2022",
            imgSrc: "/images/draft-card-img-car-1.png",
        },
        {
            preis: 213520,
            title: "Mercedes AMG GT",
            adNo: "#294873205",
            start: "01/01/2020",
            end: "01/01/2022",
            imgSrc: "/images/draft-card-img-car-1.png",
        },
        {
            preis: 213520,
            title: "Mercedes AMG GT",
            adNo: "#294873205",
            start: "01/01/2020",
            end: "01/01/2022",
            imgSrc: "/images/draft-card-img-car-1.png",
        },
        {
            preis: 213520,
            title: "Mercedes AMG GT",
            adNo: "#294873205",
            start: "01/01/2020",
            end: "01/01/2022",
            imgSrc: "/images/draft-card-img-car-1.png",
        },
        {
            preis: 213520,
            title: "Mercedes AMG GT",
            adNo: "#294873205",
            start: "01/01/2020",
            end: "01/01/2022",
            imgSrc: "/images/draft-card-img-car-1.png",
        },
        {
            preis: 213520,
            title: "Mercedes AMG GT",
            adNo: "#294873205",
            start: "01/01/2020",
            end: "01/01/2022",
            imgSrc: "/images/draft-card-img-car-1.png",
        },
        {
            preis: 213520,
            title: "Mercedes AMG GT",
            adNo: "#294873205",
            start: "01/01/2020",
            end: "01/01/2022",
            imgSrc: "/images/draft-card-img-car-1.png",
        },
        {
            preis: 213520,
            title: "Mercedes AMG GT",
            adNo: "#294873205",
            start: "01/01/2020",
            end: "01/01/2022",
            imgSrc: "/images/draft-card-img-car-1.png",
        },
        {
            preis: 213520,
            title: "Mercedes AMG GT",
            adNo: "#294873205",
            start: "01/01/2020",
            end: "01/01/2022",
            imgSrc: "/images/draft-card-img-car-1.png",
        },
        {
            preis: 213520,
            title: "Mercedes AMG GT",
            adNo: "#294873205",
            start: "01/01/2020",
            end: "01/01/2022",
            imgSrc: "/images/draft-card-img-car-1.png",
        },
    ]
    const angeboteThirdRow = [
        {
            preis: 213520,
            title: "Mercedes AMG GT",
            adNo: "#294873205",
            start: "01/01/2020",
            end: "01/01/2022",
            imgSrc: "/images/draft-card-img-car-1.png",
        },
        {
            preis: 213520,
            title: "Mercedes AMG GT",
            adNo: "#294873205",
            start: "01/01/2020",
            end: "01/01/2022",
            imgSrc: "/images/draft-card-img-car-1.png",
        },
        {
            preis: 213520,
            title: "Mercedes AMG GT",
            adNo: "#294873205",
            start: "01/01/2020",
            end: "01/01/2022",
            imgSrc: "/images/draft-card-img-car-1.png",
        },
        {
            preis: 213520,
            title: "Mercedes AMG GT",
            adNo: "#294873205",
            start: "01/01/2020",
            end: "01/01/2022",
            imgSrc: "/images/draft-card-img-car-1.png",
        },
        {
            preis: 213520,
            title: "Mercedes AMG GT",
            adNo: "#294873205",
            start: "01/01/2020",
            end: "01/01/2022",
            imgSrc: "/images/draft-card-img-car-1.png",
        },
        {
            preis: 213520,
            title: "Mercedes AMG GT",
            adNo: "#294873205",
            start: "01/01/2020",
            end: "01/01/2022",
            imgSrc: "/images/draft-card-img-car-1.png",
        },
        {
            preis: 213520,
            title: "Mercedes AMG GT",
            adNo: "#294873205",
            start: "01/01/2020",
            end: "01/01/2022",
            imgSrc: "/images/draft-card-img-car-1.png",
        },
        {
            preis: 213520,
            title: "Mercedes AMG GT",
            adNo: "#294873205",
            start: "01/01/2020",
            end: "01/01/2022",
            imgSrc: "/images/draft-card-img-car-1.png",
        },
        {
            preis: 213520,
            title: "Mercedes AMG GT",
            adNo: "#294873205",
            start: "01/01/2020",
            end: "01/01/2022",
            imgSrc: "/images/draft-card-img-car-1.png",
        },
        {
            preis: 213520,
            title: "Mercedes AMG GT",
            adNo: "#294873205",
            start: "01/01/2020",
            end: "01/01/2022",
            imgSrc: "/images/draft-card-img-car-1.png",
        },
        {
            preis: 213520,
            title: "Mercedes AMG GT",
            adNo: "#294873205",
            start: "01/01/2020",
            end: "01/01/2022",
            imgSrc: "/images/draft-card-img-car-1.png",
        },
        {
            preis: 213520,
            title: "Mercedes AMG GT",
            adNo: "#294873205",
            start: "01/01/2020",
            end: "01/01/2022",
            imgSrc: "/images/draft-card-img-car-1.png",
        },
        {
            preis: 213520,
            title: "Mercedes AMG GT",
            adNo: "#294873205",
            start: "01/01/2020",
            end: "01/01/2022",
            imgSrc: "/images/draft-card-img-car-1.png",
        },
        {
            preis: 213520,
            title: "Mercedes AMG GT",
            adNo: "#294873205",
            start: "01/01/2020",
            end: "01/01/2022",
            imgSrc: "/images/draft-card-img-car-1.png",
        },
        {
            preis: 213520,
            title: "Mercedes AMG GT",
            adNo: "#294873205",
            start: "01/01/2020",
            end: "01/01/2022",
            imgSrc: "/images/draft-card-img-car-1.png",
        },
        {
            preis: 213520,
            title: "Mercedes AMG GT",
            adNo: "#294873205",
            start: "01/01/2020",
            end: "01/01/2022",
            imgSrc: "/images/draft-card-img-car-1.png",
        },
        {
            preis: 213520,
            title: "Mercedes AMG GT",
            adNo: "#294873205",
            start: "01/01/2020",
            end: "01/01/2022",
            imgSrc: "/images/draft-card-img-car-1.png",
        },
        {
            preis: 213520,
            title: "Mercedes AMG GT",
            adNo: "#294873205",
            start: "01/01/2020",
            end: "01/01/2022",
            imgSrc: "/images/draft-card-img-car-1.png",
        },
        {
            preis: 213520,
            title: "Mercedes AMG GT",
            adNo: "#294873205",
            start: "01/01/2020",
            end: "01/01/2022",
            imgSrc: "/images/draft-card-img-car-1.png",
        },
        {
            preis: 213520,
            title: "Mercedes AMG GT",
            adNo: "#294873205",
            start: "01/01/2020",
            end: "01/01/2022",
            imgSrc: "/images/draft-card-img-car-1.png",
        },
        {
            preis: 213520,
            title: "Mercedes AMG GT",
            adNo: "#294873205",
            start: "01/01/2020",
            end: "01/01/2022",
            imgSrc: "/images/draft-card-img-car-1.png",
        },
        {
            preis: 213520,
            title: "Mercedes AMG GT",
            adNo: "#294873205",
            start: "01/01/2020",
            end: "01/01/2022",
            imgSrc: "/images/draft-card-img-car-1.png",
        },
        {
            preis: 213520,
            title: "Mercedes AMG GT",
            adNo: "#294873205",
            start: "01/01/2020",
            end: "01/01/2022",
            imgSrc: "/images/draft-card-img-car-1.png",
        },
        {
            preis: 213520,
            title: "Mercedes AMG GT",
            adNo: "#294873205",
            start: "01/01/2020",
            end: "01/01/2022",
            imgSrc: "/images/draft-card-img-car-1.png",
        },
    ]
    const angeboteFourthRow = [
        {
            preis: 213520,
            title: "Mercedes AMG GT",
            adNo: "#294873205",
            start: "01/01/2020",
            end: "01/01/2022",
            imgSrc: "/images/draft-card-img-car-1.png",
        },
        {
            preis: 213520,
            title: "Mercedes AMG GT",
            adNo: "#294873205",
            start: "01/01/2020",
            end: "01/01/2022",
            imgSrc: "/images/draft-card-img-car-1.png",
        },
        {
            preis: 213520,
            title: "Mercedes AMG GT",
            adNo: "#294873205",
            start: "01/01/2020",
            end: "01/01/2022",
            imgSrc: "/images/draft-card-img-car-1.png",
        },
        {
            preis: 213520,
            title: "Mercedes AMG GT",
            adNo: "#294873205",
            start: "01/01/2020",
            end: "01/01/2022",
            imgSrc: "/images/draft-card-img-car-1.png",
        },
        {
            preis: 213520,
            title: "Mercedes AMG GT",
            adNo: "#294873205",
            start: "01/01/2020",
            end: "01/01/2022",
            imgSrc: "/images/draft-card-img-car-1.png",
        },
        {
            preis: 213520,
            title: "Mercedes AMG GT",
            adNo: "#294873205",
            start: "01/01/2020",
            end: "01/01/2022",
            imgSrc: "/images/draft-card-img-car-1.png",
        },
        {
            preis: 213520,
            title: "Mercedes AMG GT",
            adNo: "#294873205",
            start: "01/01/2020",
            end: "01/01/2022",
            imgSrc: "/images/draft-card-img-car-1.png",
        },
        {
            preis: 213520,
            title: "Mercedes AMG GT",
            adNo: "#294873205",
            start: "01/01/2020",
            end: "01/01/2022",
            imgSrc: "/images/draft-card-img-car-1.png",
        },
        {
            preis: 213520,
            title: "Mercedes AMG GT",
            adNo: "#294873205",
            start: "01/01/2020",
            end: "01/01/2022",
            imgSrc: "/images/draft-card-img-car-1.png",
        },
        {
            preis: 213520,
            title: "Mercedes AMG GT",
            adNo: "#294873205",
            start: "01/01/2020",
            end: "01/01/2022",
            imgSrc: "/images/draft-card-img-car-1.png",
        },
        {
            preis: 213520,
            title: "Mercedes AMG GT",
            adNo: "#294873205",
            start: "01/01/2020",
            end: "01/01/2022",
            imgSrc: "/images/draft-card-img-car-1.png",
        },
        {
            preis: 213520,
            title: "Mercedes AMG GT",
            adNo: "#294873205",
            start: "01/01/2020",
            end: "01/01/2022",
            imgSrc: "/images/draft-card-img-car-1.png",
        },
        {
            preis: 213520,
            title: "Mercedes AMG GT",
            adNo: "#294873205",
            start: "01/01/2020",
            end: "01/01/2022",
            imgSrc: "/images/draft-card-img-car-1.png",
        },
        {
            preis: 213520,
            title: "Mercedes AMG GT",
            adNo: "#294873205",
            start: "01/01/2020",
            end: "01/01/2022",
            imgSrc: "/images/draft-card-img-car-1.png",
        },
        {
            preis: 213520,
            title: "Mercedes AMG GT",
            adNo: "#294873205",
            start: "01/01/2020",
            end: "01/01/2022",
            imgSrc: "/images/draft-card-img-car-1.png",
        },
        {
            preis: 213520,
            title: "Mercedes AMG GT",
            adNo: "#294873205",
            start: "01/01/2020",
            end: "01/01/2022",
            imgSrc: "/images/draft-card-img-car-1.png",
        },
        {
            preis: 213520,
            title: "Mercedes AMG GT",
            adNo: "#294873205",
            start: "01/01/2020",
            end: "01/01/2022",
            imgSrc: "/images/draft-card-img-car-1.png",
        },
        {
            preis: 213520,
            title: "Mercedes AMG GT",
            adNo: "#294873205",
            start: "01/01/2020",
            end: "01/01/2022",
            imgSrc: "/images/draft-card-img-car-1.png",
        },
        {
            preis: 213520,
            title: "Mercedes AMG GT",
            adNo: "#294873205",
            start: "01/01/2020",
            end: "01/01/2022",
            imgSrc: "/images/draft-card-img-car-1.png",
        },
        {
            preis: 213520,
            title: "Mercedes AMG GT",
            adNo: "#294873205",
            start: "01/01/2020",
            end: "01/01/2022",
            imgSrc: "/images/draft-card-img-car-1.png",
        },
        {
            preis: 213520,
            title: "Mercedes AMG GT",
            adNo: "#294873205",
            start: "01/01/2020",
            end: "01/01/2022",
            imgSrc: "/images/draft-card-img-car-1.png",
        },
        {
            preis: 213520,
            title: "Mercedes AMG GT",
            adNo: "#294873205",
            start: "01/01/2020",
            end: "01/01/2022",
            imgSrc: "/images/draft-card-img-car-1.png",
        },
        {
            preis: 213520,
            title: "Mercedes AMG GT",
            adNo: "#294873205",
            start: "01/01/2020",
            end: "01/01/2022",
            imgSrc: "/images/draft-card-img-car-1.png",
        },
        {
            preis: 213520,
            title: "Mercedes AMG GT",
            adNo: "#294873205",
            start: "01/01/2020",
            end: "01/01/2022",
            imgSrc: "/images/draft-card-img-car-1.png",
        },
    ]

    const [row, setRow] = useState(0);

    return (
        <>
            {/* Create components in the home folder: components/home/yourcomponent */}
            <div className={classes.container}>
                <div className={`${classes.contentcontainer} w-10/12 lg:w-full max-w-ag-container md:!w-full mx-auto flex lg:flex-col`}>
                    <div className={classes.searcharea}>
                        <img src={"/front.png"} className={classes.frontimg} />
                        <div className={classes.selectioncontainer}>
                            <div className={classes.carlist}>
                                <div className={classes.car}>
                                    <Limo className={classes.suv} />
                                    <div className={classes.cartext}>Limousine</div>
                                </div>
                                <div className={classes.car}>
                                    <Suv className={classes.suv} />
                                    <div className={classes.cartext}>SUV</div>
                                </div>
                                <div className={classes.car}>
                                    <KombiVan className={classes.suv} />
                                    <div className={classes.cartext}>Kombi Van</div>
                                </div>
                                <div className={classes.car}>
                                    <Coupe className={classes.suv} />
                                    <div className={classes.cartext}>Coupè</div>
                                </div>
                                <div className={classes.car}>
                                    <Cabrio className={classes.suv} />
                                    <div className={classes.cartext}>Cabrio</div>
                                </div>
                                <div className={classes.car}>
                                    <Kleinbus className={classes.suv} />
                                    <div className={classes.cartext}>Kleinbus</div>
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
                                <input type={"text"} value={suchbegriff} onChange={(e) => setSuchbegriff(e.target.value)} placeholder={"Suchbegriff"} className={classes.input} />
                                <SearchIcon className={classes.searchicon} />
                            </span>
                        </div>
                            <div className={classes.selectfields}>
                            <Select 
                                options={kmstandBis}
                                styles={style}
                                placeholder={"km-stand bis"}
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
                            <span className={classes.bolder}>Erweiterte Suche</span>
                            <span className={classes.bolder}>Filter zurücksetzen</span>
                        </div>
                        </div>
                        <div className={classes.searchrow}>
                            <label htmlFor='nur'>
                                <input id='nur' type={"checkbox"} checked={nurNeuJungwagen} onChange={(e) => setNurNeuJungwagen(d => !d)} />
                                <span className={"ml-2 text-white"}>nur Neu- und Jungwagen</span>
                            </label>
                            <button className={classes.searchbtn}>
                                <span>{displayAnzahlGefundeneFahrzeuge} Fahrzeuge anzeigen</span>
                            </button>
                        </div>
                    </div>
                    <div className={classes.swiperarea}>
                        <HomeSwiper>
                            {angeboteFirstRow.map((item, index) => <SwiperSlide className={classes.ad} key={index}>
                                <Angebot 
                                    title={item.title}
                                    price={item.preis}
                                    adNo={index}
                                    start={item.start}
                                    end={item.end}
                                    imgSrc={item.imgSrc}
                                    cardView={false}
                                    description={"That is a description"}
                                    details={
                                        {
                                            erstzulassung: erstzulassenAb,
                                            kraftstoff: "Diesel",
                                            leistung: "128 PS",
                                            fahrzeugzustand: "Neu",
                                            getriebe: "adfas",
                                            kilometerstand: 1234,
                                        }
                                    }
                                />
                            </SwiperSlide>)}
                        </HomeSwiper>
                        <HomeSwiper>
                        {angeboteSecondRow.map((item, index) => <SwiperSlide className={classes.ad} key={index}>
                                <Angebot 
                                    title={item.title}
                                    price={item.preis}
                                    adNo={index}
                                    start={item.start}
                                    end={item.end}
                                    imgSrc={item.imgSrc}
                                    cardView={false}
                                    description={"That is a description"}
                                    details={
                                        {
                                            erstzulassung: erstzulassenAb,
                                            kraftstoff: "Diesel",
                                            leistung: "128 PS",
                                            fahrzeugzustand: "Neu",
                                            getriebe: "adfas",
                                            kilometerstand: 1234,
                                        }
                                    }
                                />
                            </SwiperSlide>)}
                        </HomeSwiper>
                        {row >= 1 && <HomeSwiper>
                        {angeboteThirdRow.map((item, index) => <SwiperSlide className={classes.ad} key={index}>
                                <Angebot 
                                    title={item.title}
                                    price={item.preis}
                                    adNo={index}
                                    start={item.start}
                                    end={item.end}
                                    imgSrc={item.imgSrc}
                                    cardView={false}
                                    description={"That is a description"}
                                    details={
                                        {
                                            erstzulassung: erstzulassenAb,
                                            kraftstoff: "Diesel",
                                            leistung: "128 PS",
                                            fahrzeugzustand: "Neu",
                                            getriebe: "adfas",
                                            kilometerstand: 1234,
                                        }
                                    }
                                />
                            </SwiperSlide>)}
                        </HomeSwiper>}
                        {row >= 2 && <HomeSwiper>
                        {angeboteFourthRow.map((item, index) => <SwiperSlide className={classes.ad} key={index}>
                                <Angebot 
                                    title={item.title}
                                    price={item.preis}
                                    adNo={index}
                                    start={item.start}
                                    end={item.end}
                                    imgSrc={item.imgSrc}
                                    cardView={false}
                                    description={"That is a description"}
                                    details={
                                        {
                                            erstzulassung: erstzulassenAb,
                                            kraftstoff: "Diesel",
                                            leistung: "128 PS",
                                            fahrzeugzustand: "Neu",
                                            getriebe: "adfas",
                                            kilometerstand: 1234,
                                        }
                                    }w
                                />
                            </SwiperSlide>)}
                        </HomeSwiper>}
                        {row <= 1 && <button className={classes.weiterebtn} onClick={() => setRow(d => d + 1)}>
                            + Weitere Fahrzeuge
                        </button>}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Homepage;