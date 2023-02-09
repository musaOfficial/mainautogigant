import classes from "./Automarken.module.css";
import Select from "react-select";
import { useState } from "react";
import SearchIcon from "./../public/searchicon.svg";
import Link from "next/link";
import brands from "./data/brands";

function Automarken() {
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

  const sortedBrands = [...brands];

    if (sortVariant) {
    switch (sortVariant.value) {
        case "alphabetic":
        sortedBrands.sort((a, b) => {
            if (a.name < b.name) return -1;
            if (a.name > b.name) return 1;
            return 0;
        });
        break;
        case "alphabetic-reversed":
        sortedBrands.sort((a, b) => {
            if (a.name < b.name) return 1;
            if (a.name > b.name) return -1;
            return 0;
        });
        break;
        case "brandsbyapproval-descending":
        // Add logic for sorting by brands by approval in descending order
        break;
        case "brandsbyapproval-ascending":
        // Add logic for sorting by brands by approval in ascending order
        break;
        default:
        break;
    }
    }

  return (
    <div className="bg-theme-gray-10 overflow-hidden lg:px-6 md:!px-0">
      <div
        className={` ${classes.contentcontainer} relative w-10/12 lg:w-full max-w-ag-container md:!w-full mx-auto flex flex-col bg-white p-6`}
      >
        <div className={classes.heading}>Automarken & Modelle</div>
        <div className={classes.description}>
          Diese Liste von Automarken bietet Ihnen einen übersichtlichen Zugang
          zu Informationen über alle Hersteller, <br></br>
          Modelle und Baureihen auf dem deutschen Markt.
        </div>
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
            {brands.map((brand, index) => <Link key={index} href={{pathname: "/car-brands/model", query: brand}}>
                <div className={classes.brand}>
                    {brand.svg != null && "SVG"}
                    <div className={classes.brandname}>{brand.name}</div>
                </div>
            </Link>)}
        </div>
      </div>
    </div>
  );
}

export default Automarken;
