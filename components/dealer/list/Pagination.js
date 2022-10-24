import { useState } from "react";

export default function Pagination({ wFull, pagType }) {
  const [active, setActive] = useState(1);
  

  return (
    <div className={`${wFull ? 'w-full' : 'w-9/12'} md:!w-full max-w-ag-container ml-auto lg:w-full relative pt-6 bg-white pl-3 md:pl-0`}>
      <div className={`flex md:flex-col md:!w-full justify-between items-center text-theme-black-2 ${pagType === 'no-border'? '' : pagType === 'sm-border' ? 'border-t border-opacity-30' : 'border-t-2'} pt-6 border-theme-gray-2`}>
      <p className="md:mb-2">12 VON 60 ERGEBNISSEN</p>
      <div className="flex items-center md:w-full justify-center md:justify-between md:pb-0">
        <button className="h-8 w-8 flex items-center justify-center bg-theme-gray-4 rounded-md pr-1">
          <img src="/images/icons/pagi-prev.png" />
        </button>
        <button
          onClick={() => setActive(1)}
          className={`h-8 w-8 flex items-center justify-center mx-2 md:mx-px rounded-md ${
            active == 1 ? "bg-theme-yellow-2" : "bg-theme-gray-4"
          }`}
        >
          1
        </button>
        <button
          onClick={() => setActive(2)}
          className={`h-8 w-8 flex items-center justify-center mx-2 md:mx-px rounded-md ${
            active == 2 ? "bg-theme-yellow-2" : "bg-theme-gray-4"
          }`}
        >
          2
        </button>
        <button
          onClick={() => setActive(3)}
          className={`h-8 w-8 flex items-center justify-center mx-2 md:mx-px rounded-md ${
            active == 3 ? "bg-theme-yellow-2" : "bg-theme-gray-4"
          }`}
        >
          3
        </button>
        <div>
          ...
        </div>
        <button
          onClick={() => setActive(9)}
          className={`h-8 w-8 flex items-center justify-center mx-2 md:mx-px rounded-md ${
            active == 4 ? "bg-theme-yellow-2" : "bg-theme-gray-4"
          }`}
        >
          45
        </button>
        <button className="h-8 w-8 flex items-center justify-center bg-theme-gray-4 rounded-md pr-1">
          <img src="/images/icons/pagi-next.png" />
        </button>
      </div>
      </div>
      
    </div>
  );
}
