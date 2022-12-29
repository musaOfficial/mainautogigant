import { useEffect, useState } from "react";
import ListCard from "./Card";
import Pagination from "./Pagination";
import classes from './Container.module.css';
import SearchIcon from './../../../public/searchdealer.svg'
import Select from "react-select";
import GridView from './../../../public/gridview.svg';
import ListView from './../../../public/listview.svg';
import Bin from './../../../public/bin.svg'
export default function DealerListContainer() {

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

  const anzahlAnzeigen = [
    {value: 12, label: "12"},
    {value: 16, label: "16"},
    {value: 20, label: "20"},
  ]
  const [cardView, setCardView] = useState("grid");
  const [sidebar, setSidebar] = useState(null);
  const [filterSlide, setFilterSlide] = useState(null);
  const [starCheck1, setStarCheck1] = useState(false);
  const [starCheck2, setStarCheck2] = useState(false);
  const [starCheck3, setStarCheck3] = useState(false);
  const [starCheck4, setStarCheck4] = useState(false);
  const [starCheck5, setStarCheck5] = useState(false);

  const [firmenname, setFirmenname] = useState("");

  // ANZEIGEN
  const [amountShow, setAmountShow] = useState(12)
  const [sort, setSort] = useState("Beste Bewertung");

  useEffect(() => {
    if (window.innerWidth <= 1023) {
      setCardView("grid");
    }
    if (window.innerWidth <= 767) {
      setFilterSlide("rating");
    }
  }, []);

  const [gridView, setGridView] = useState(true);

  const amountDealers = 1221;
  var displayAmountDealers = amountDealers.toLocaleString();



  const dealers = [
    {
      companyname: "HGMEDIA WERBEAGENTUR",
      name: "HASAN GÜLER",
      location: "WIENER STRASSE 90, 2700 WIENER NEUSTADT",
      rating: 4.9,
      fromRatingAmount: 27,
    },
    {
      companyname: "HGMEDIA WERBEAGENTUR",
      name: "HASAN GÜLER",
      location: "WIENER STRASSE 90, 2700 WIENER NEUSTADT",
      rating: 4.9,
      fromRatingAmount: 27,
    },
    {
      companyname: "HGMEDIA WERBEAGENTUR",
      name: "HASAN GÜLER",
      location: "WIENER STRASSE 90, 2700 WIENER NEUSTADT",
      rating: 4.9,
      fromRatingAmount: 27,
    },
    {
      companyname: "HGMEDIA WERBEAGENTUR",
      name: "HASAN GÜLER",
      location: "WIENER STRASSE 90, 2700 WIENER NEUSTADT",
      rating: 4.9,
      fromRatingAmount: 27,
    },
    {
      companyname: "HGMEDIA WERBEAGENTUR",
      name: "HASAN GÜLER",
      location: "WIENER STRASSE 90, 2700 WIENER NEUSTADT",
      rating: 4.9,
      fromRatingAmount: 27,
    },
    {
      companyname: "HGMEDIA WERBEAGENTUR",
      name: "HASAN GÜLER",
      location: "WIENER STRASSE 90, 2700 WIENER NEUSTADT",
      rating: 4.9,
      fromRatingAmount: 27,
    },
  ]

  const cities = [
    {
      id: 0,
      name: "Wiener Neustadt",
      land: "Österreich",
      region: "Niederösterreich",
    },
    {
      id: 0,
      name: "Moskau",
      land: "Österreich",
      region: "Niederösterreich",
    },
    {
      id: 0,
      name: "Istanbul",
      land: "Österreich",
      region: "Niederösterreich",
    },
    {
      id: 0,
      name: "London",
      land: "Österreich",
      region: "Niederösterreich",
    },
    {
      id: 0,
      name: "Berlin",
      land: "Österreich",
      region: "Niederösterreich",
    },
    {
      id: 0,
      name: "Paris",
      land: "Frankreich",
      region: "Niederösterreich",
    },
  ]

  // Nach Land, Region und Stadt filtern
  
  const [citySearch, setCitySearch] = useState("Pa");

  function CheckIfContains(citySearch, name){
      
  }

  return (
    <div className="bg-theme-gray-3">
      <div className="lg:px-6 md:!px-0">
        <div className="w-10/12 lg:w-full max-w-ag-container mx-auto lg:pt-4 lg:px-4 px-8 bg-white pt-8 pb-12">
          <div className={classes.adbanner}>Werbung</div>
          <div className={classes.contentcontainer}>
            <div className={classes.leftcontainer}>
              <div className={classes.amountDealers}>
                <div className={classes.heading}>{displayAmountDealers}</div>
                <div className={classes.text13}>REGISTRIERTE AUTOHÄNDLER</div>
              </div>
              <div className={classes.searchdealer}>
                <div className={classes.searchdealertext}>HÄNDLER SUCHEN</div>
                <div className={classes.searchinputdiv}>
                  <input type={"text"} onChange={(e) => setFirmenname(e.target.value)} placeholder={"FIRMENNAME"}/>
                  <SearchIcon className={classes.searchicon}/>
                </div>
              </div>
              <div className={classes.searchwithrate}>
                <div className={classes.filterbyratetext}>FILTERN NACH BEWERTUNG</div>
                <div className={classes.grayliner}></div>
                <div className={classes.starbox}>
                  
                <label
                  className="w-5/6 flex mt-2 justify-between"
                  htmlFor="5star"
                >
                  <div className="w-full flex items-center justify-between">
                    <input type={"checkbox"} onChange={() => setStarCheck5(d => !d)} className="mr-2 mt-0.5" />
                    <img src="/images/icons/sd-star-y.png" />
                    <img src="/images/icons/sd-star-y.png" />
                    <img src="/images/icons/sd-star-y.png" />
                    <img src="/images/icons/sd-star-y.png" />
                    <img src="/images/icons/sd-star-y.png" />
                  </div>
                  <p className="text-xs ml-4">(58)</p>
                  </label>
                <label
                  className="w-5/6 flex mt-2 justify-between"
                  htmlFor="5star"
                >
                  <div className="w-full flex items-center justify-between">
                    <input type={"checkbox"} onChange={() => setStarCheck4(d => !d)} className="mr-2 mt-0.5" />
                    <img src="/images/icons/sd-star-y.png" />
                    <img src="/images/icons/sd-star-y.png" />
                    <img src="/images/icons/sd-star-y.png" />
                    <img src="/images/icons/sd-star-y.png" />
                    <img src="/images/icons/sd-star-g.png" />
                  </div>
                  <p className="text-xs ml-4">(58)</p>
                  </label>
                <label
                  className="w-5/6 flex mt-2 justify-between"
                  htmlFor="5star"
                >
                  <div className="w-full flex items-center justify-between">
                    <input type={"checkbox"} onChange={() => setStarCheck3(d => !d)} className="mr-2 mt-0.5" />
                    <img src="/images/icons/sd-star-y.png" />
                    <img src="/images/icons/sd-star-y.png" />
                    <img src="/images/icons/sd-star-y.png" />
                    <img src="/images/icons/sd-star-g.png" />
                    <img src="/images/icons/sd-star-g.png" />
                  </div>
                  <p className="text-xs ml-4">(58)</p>
                  </label>
                <label
                  className="w-5/6 flex mt-2 justify-between"
                  htmlFor="5star"
                >
                  <div className="w-full flex items-center justify-between">
                    <input type={"checkbox"} onChange={() => setStarCheck2(d => !d)} className="mr-2 mt-0.5" />
                    <img src="/images/icons/sd-star-y.png" />
                    <img src="/images/icons/sd-star-y.png" />
                    <img src="/images/icons/sd-star-g.png" />
                    <img src="/images/icons/sd-star-g.png" />
                    <img src="/images/icons/sd-star-g.png" />
                  </div>
                  <p className="text-xs ml-4">(58)</p>
                  </label>
                <label
                  className="w-5/6 flex mt-2 justify-between"
                  htmlFor="5star"
                >
                  <div className="w-full flex items-center justify-between">
                    <input type={"checkbox"} onChange={() => setStarCheck1(d => !d)} className="mr-2 mt-0.5" />
                    <img src="/images/icons/sd-star-y.png" />
                    <img src="/images/icons/sd-star-g.png" />
                    <img src="/images/icons/sd-star-g.png" />
                    <img src="/images/icons/sd-star-g.png" />
                    <img src="/images/icons/sd-star-g.png" />
                  </div>
                  <p className="text-xs ml-4">(58)</p>
                  </label>
                </div>
                <button className={classes.delfilter}><Bin className={classes.bin}/>FILTER LÖSCHEN</button>
              </div>
              <div className={classes.searchwithcity}>
                <div className={classes.searchdealertext}>FILTERN NACH STADT</div>
                <div className={classes.searchinputdiv}>
                  <input type={"text"} onChange={(e) => setCitySearch(e.target.value)} placeholder={"SUCHEN"}/>
                  <SearchIcon className={classes.searchicon}/>
                </div>
                <div className={classes.citycontent}>
                  {cities.map((city, index) => <div className={classes.citycontainer}>
                    {CheckIfContains(citySearch ,city.name)}
                  </div>)}
                </div>
                <button className={classes.delfilter}><Bin className={classes.bin}/>LÖSCHEN</button>
              </div>
            </div>
            <div className={classes.rightcontainer}>
              <div className={classes.layouteditor}>
                <div className={classes.show}>
                  ANZEIGEN:                                         
                  <Select 
                    styles={style}
                    options={anzahlAnzeigen}
                    placeholder="12"
                    className="ml-2"
                    onChange={(e) => setAmountShow(e.value)}
                    />
                </div>
                <div className={classes.sortierennach}>
                  SORTIEREN NACH:
                  <Select 
                    styles={style}
                    options={anzahlAnzeigen}
                    placeholder="Beste Bewertung"
                    className="ml-2"
                    onChange={(e) => setSort(e.value)}
                    />
                </div>
                <div className={classes.gridchanger}>
                  <GridView className={`${classes.gridview} ${gridView == true && classes.gridviewselected}`} onClick={() => setGridView(true)} />
                  <ListView className={`${classes.listview} ${gridView == false && classes.gridviewselected}`} onClick={() => setGridView(false)}/>  
                </div>
              </div>
              <div className={`${gridView ? classes.dealergrid : classes.dealerlist}`}>
                {dealers.map((dealer, index) => <ListCard 
                  key={index}
                  hgm={dealer.companyname}
                  usrname={dealer.name}
                  address={dealer.location}
                  rating={dealer.rating}
                  gridView={gridView}
                  fromRatingAmount={dealer.fromRatingAmount}
                />)}
              </div>
            </div>
          </div>
          {/* 
              PAGINATION
            */}
          <Pagination pagType='no-border' />
        </div>
      </div>
    </div>
  );
}
