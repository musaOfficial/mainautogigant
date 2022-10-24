import Select from "react-select";

const style = {
  control: (base) => ({
    ...base,
    boxShadow: "none",
    border: "none",
    fontSize: '16px'
  }),
  option: (styles, state) => ({
    ...styles,
    backgroundColor: state.isSelected ? "#fbb900" : "",
    "&:active": "#fbb90080",
    fontSize: '16px'
  }),
};
const style2 = {
  control: (base) => ({
    ...base,
    boxShadow: "none",
    border: "none",
    padding: "5.25px",
    outline: "none",
    borderRadius: "10px",
    marginBottom: "24px",
    fontSize: '16px'
  }),
  menu: (styles, state) => ({
    ...styles,
    zIndex: 999,
    fontSize: '16px'
  }),
  option: (styles, state) => ({
    ...styles,
    backgroundColor: state.isSelected ? "#fbb900" : "",
    "&:active": "#fbb90080",
    fontSize: '16px'
  }),
};
export default function InputSelect({
  options,
  placeholder,
  styleType,
  regYear,
  onChange,
}) {
  const renderSelect = regYear ? (
    <Select
      instanceId={placeholder}
      styles={styleType == "row" ? "" : style2}
      options={options}
      onChange={onChange}
      placeholder={<div className="text-gray-400 text-base">{placeholder}</div>}
      classNamePrefix="r-select s-1"
      menuPortalTarget={
        typeof window !== "undefined" ? document.querySelector("body") : ""
      }
    />
  ) : (
    <Select
      instanceId={placeholder}
      styles={styleType == "row" ? "" : style}
      options={options}
      onChange={onChange}
      placeholder={<div className="text-gray-400 text-base">{placeholder}</div>}
      classNamePrefix="r-select s-1"
      menuPortalTarget={
        typeof window !== "undefined" ? document.querySelector("body") : ""
      }
    />
  );
  return renderSelect;
}
