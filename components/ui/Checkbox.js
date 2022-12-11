import { useState } from "react";
import classes from './Input.module.css'

export default function Checkbox({ label, varient }) {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <div onClick={() => setIsChecked(!isChecked)} className="flex">
      <div
        className={`bg-white ${
          varient === "sm" ? "w-4 h-4" : "w-6 h-6"
        } p-1 flex justify-center items-center mr-2 rounded`}
      >
        <input
          type="checkbox"
          className="hidden"
          checked={isChecked}
          onChange={() => setIsChecked(!isChecked)}
        />
        <svg
          className={`${
            isChecked ? "block" : "hidden"
          } w-4 h-4 text-purple pointer-events-none`}
          viewBox="0 0 172 172"
        >
          <g
            fill="none"
            strokeWidth="none"
            strokeMiterlimit="10"
            fontFamily="none"
            fontWeight="none"
            fontSize="none"
            textAnchor="none"
            style={{ "mix-blend-mode": "normal" }}
          >
            <path d="M0 172V0h172v172z" />
            <path
              d="M145.433 37.933L64.5 118.8658 33.7337 88.0996l-10.134 10.1341L64.5 139.1341l91.067-91.067z"
              fill="currentColor"
              strokeWidth="1"
            />
          </g>
        </svg>
      </div>
      <label className={`${varient === "sm" ? "text-13" : "text-base"} ${classes.fontsize13}  font-normal`}>
        {label}
      </label>
    </div>
  );
}