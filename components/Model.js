import classes from './Model.module.css';
import { useRouter } from 'next/router';
import Select from 'react-select'
import { useState } from 'react';
import Link from 'next/link';
import SearchIcon from "./../public/searchicon.svg";
import brands from './data/brands';

function Model(){
    const style = {
        control: (base) => ({
          ...base,
          boxShadow: "none",
          border: "none",
          fontSize: "13px",
          borderRadius: "10px",
          width: "100%",
          cursor: "pointer",
          height: "40px",
          backgroundColor: "#F1F2F3",
          width: "100%",
          height: "50px",
        }),
        option: (styles, state) => ({
          ...styles,
          backgroundColor: state.isSelected ? "#fbb900" : "",
          "&:active": "#fbb90080",
          "&:hover": {
            backgroundColor: "#FFE497",
          },
          "&:focus": {
            backgroundColor: "#FBB900",
          },
          fontSize: "13px",
          cursor: "pointer",
        }),
      };

    const router = useRouter();
    const pageProperties = router.query;


    const sortVariants = [
        { label: "Alphabetisch (A-Z)", value: "alphabetic" },
        { label: "Alphabetisch (Z-A)", value: "alphabetic-reversed" },
        {
          label: "Marken nach Zulassung (absteigend)",
          value: "brandsbyapproval-descending",
        },
        {
          label: "Marken nach Zulassung (aufsteigend)",
          value: "brandsbyapproval-ascending",
        },
      ];
    
    const [sortVariant, setSortVariant] = useState();
    
    var models = []

    for(let i = 0; i < brands.length; i++){
        if(brands[i].id == pageProperties.id){
            models.push(brands[i].models);
        }
    }

    return (
        <div className="bg-theme-gray-10 overflow-hidden lg:px-6 md:!px-0">
            <div className={` ${classes.contentcontainer} relative w-10/12 lg:w-full max-w-ag-container md:!w-full mx-auto flex flex-col bg-white p-6`}>
                <div className={classes.heading}>{pageProperties.name}</div>
                <div className={classes.description}>{pageProperties.description}</div>
                <div className={classes.sortandsearch}>
                    <Select
                        styles={style}
                        options={sortVariants}
                        placeholder={"Sortieren nach:"}
                        onChange={(e) => setSortVariant(e.label)}
                        className="w-full"
                    />
                    <Link href={{pathname: "/search-details", query: {easySearchOn: true}}}>
                        <div className={classes.searchbtn}>
                            <SearchIcon className={classes.searchicon} />
                            <span className="">Zur Autosuche</span>
                        </div>
                    </Link>
                </div>
                <div className={classes.brandcontainer}>
                {models.map((brand, indexr) => 
                    <div key={indexr} className={classes.brandcontainer}>
                        {brand.map((modelbrand, index) =>  <div key={index} className={classes.brand}>
                        <div className={classes.brandname}>{modelbrand.modelName}</div>
                        </div>)}
                    </div>
                )}
        </div>
            </div>
        </div>
    )
}

export default Model;