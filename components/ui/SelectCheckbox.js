import { useState } from "react";
import classes from "./SelectCheckbox.module.css";
import Expand from "./../../public/expand.svg";
import ControlledCheckbox from "./ControlledCheckbox";

function SelectCheckbox({ options, placeholder, selectedOptions = [], onSelectedOptionsChange }) {
  const [showOptions, setShowOptions] = useState(false);

  const handleOptionClick = (option) => {
    const selectedOptionIndex = selectedOptions.findIndex(
      (selectedOption) => selectedOption.value === option.value
    );

    if (selectedOptionIndex === -1) {
      onSelectedOptionsChange([...selectedOptions, option]);
    } else {
      onSelectedOptionsChange(selectedOptions.filter((o) => o.value !== option.value));
    }
  };

  return (
    <div className={classes.container}>
      <div className={classes.selectheading} onClick={() => setShowOptions(!showOptions)}>
        <div>{placeholder}</div>
        <div className="flex items-center">
          <div className={classes.border}></div>
          <Expand className={classes.expand} />
        </div>
      </div>
      {showOptions && (
        <div className={classes.options}>
          {options.map((option, index) => (
            <ControlledCheckbox
              key={index}
              label={option.label}
              checked={selectedOptions.some((selectedOption) => selectedOption.value === option.value)}
              onUpdate={(isChecked) => handleOptionClick(option, isChecked)}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default SelectCheckbox;