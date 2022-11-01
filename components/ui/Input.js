import { useState } from "react";

export default function Input({ inputType, sublabel, placeholder, onChange, value }) {
  const [inType, setInType] = useState(inputType);

  return (
    <div className="mb-6">
      {/* <label
        className={`text-sm font-bold inline-block ${sublabel ? "" : "mb-1"}`}
      >
        {label}
      </label> */}
      {sublabel ? <p className="text-xs mb-1">{sublabel}</p> : null}
      <div className="relative">
        <input
          className="w-full rounded-10 text-base p-3 bg-white"
          onChange={onChange}
          placeholder={placeholder}
          type={inputType === "password" ? inType : inputType}
          value={value}
        />
        {inputType === "password" ? (
          <button
            className="absolute right-3 top-4 mt-px opacity-50"
            onClick={() =>
              inType === "password" ? setInType("text") : setInType("password")
            }
          >
            {inType === "password" ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="21.919"
                height="15"
                viewBox="0 0 21.919 15"
              >
                <path
                  id="Union_13"
                  data-name="Union 13"
                  d="M-506.249,3831.937q-.19-.133-.373-.271l-2.512,1.45a1,1,0,0,1-1.366-.365,1,1,0,0,1,.367-1.366l1.949-1.125a12.076,12.076,0,0,1-2.365-3.758,11.94,11.94,0,0,1,4.3-5.437,11.181,11.181,0,0,1,6.575-2.063,11.181,11.181,0,0,1,6.574,2.063q.19.133.373.271l2.512-1.45a1,1,0,0,1,1.366.365,1,1,0,0,1-.366,1.365l-1.951,1.126a12.071,12.071,0,0,1,2.365,3.759,11.943,11.943,0,0,1-4.3,5.436,11.187,11.187,0,0,1-6.574,2.063A11.188,11.188,0,0,1-506.249,3831.937Zm6.575.094a9.434,9.434,0,0,0,5.168-1.5,9.813,9.813,0,0,0,3.6-4.031,9.95,9.95,0,0,0-1.983-2.762l-2.531,1.461a4.619,4.619,0,0,1,.178,1.3,4.27,4.27,0,0,1-1.289,3.14,4.27,4.27,0,0,1-3.14,1.289,4.271,4.271,0,0,1-3.141-1.289c-.037-.037-.072-.074-.107-.111l-1.838,1.061A9.411,9.411,0,0,0-499.674,3832.031Zm-5.169-9.562a9.981,9.981,0,0,0-3.621,4.032,10.15,10.15,0,0,0,2,2.762l2.533-1.463a4.611,4.611,0,0,1-.179-1.3,4.278,4.278,0,0,1,1.289-3.142,4.277,4.277,0,0,1,3.141-1.289,4.276,4.276,0,0,1,3.14,1.289q.055.055.108.111l1.837-1.061a9.4,9.4,0,0,0-5.085-1.441A9.429,9.429,0,0,0-504.843,3822.469Zm5.169,6.656a2.544,2.544,0,0,0,1.851-.761,2.514,2.514,0,0,0,.774-1.863,2.862,2.862,0,0,0-.021-.35l-4.211,2.431A2.51,2.51,0,0,0-499.674,3829.125Zm-1.852-4.488a2.515,2.515,0,0,0-.774,1.864,2.85,2.85,0,0,0,.021.348l4.212-2.431a2.509,2.509,0,0,0-1.607-.543A2.545,2.545,0,0,0-501.527,3824.637Z"
                  transform="translate(510.634 -3819)"
                  fill="#6c757d"
                  opacity="0.66"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="21.749"
                height="15"
                viewBox="0 0 21.749 15"
              >
                <path
                  id="visibility_FILL0_wght400_GRAD200_opsz40"
                  d="M11.542,17.763a4.4,4.4,0,0,0,4.43-4.43,4.4,4.4,0,0,0-4.43-4.43,4.4,4.4,0,0,0-4.43,4.43,4.4,4.4,0,0,0,4.43,4.43Zm0-1.805a2.514,2.514,0,0,1-1.863-.773,2.544,2.544,0,0,1-.762-1.851A2.515,2.515,0,0,1,9.69,11.47a2.546,2.546,0,0,1,1.852-.762,2.514,2.514,0,0,1,1.863.773,2.545,2.545,0,0,1,.762,1.852,2.514,2.514,0,0,1-.773,1.863A2.546,2.546,0,0,1,11.542,15.958Zm0,4.875A11.187,11.187,0,0,1,4.967,18.77a11.946,11.946,0,0,1-4.3-5.437A11.95,11.95,0,0,1,4.967,7.9a11.187,11.187,0,0,1,6.574-2.063A11.187,11.187,0,0,1,18.116,7.9a11.95,11.95,0,0,1,4.3,5.438,11.946,11.946,0,0,1-4.3,5.437A11.187,11.187,0,0,1,11.542,20.833Zm0-7.5Zm0,5.531a9.431,9.431,0,0,0,5.168-1.5,9.807,9.807,0,0,0,3.6-4.031A9.837,9.837,0,0,0,16.721,9.3a9.41,9.41,0,0,0-5.179-1.5A9.431,9.431,0,0,0,6.373,9.3a9.978,9.978,0,0,0-3.621,4.031,10,10,0,0,0,3.61,4.031A9.41,9.41,0,0,0,11.542,18.864Z"
                  transform="translate(-0.667 -5.833)"
                  fill="#c3c3c3"
                />
              </svg>
            )}
          </button>
        ) : null}
      </div>
    </div>
  );
}
