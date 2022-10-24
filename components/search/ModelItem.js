import { useState } from "react";

export default function ModelItem({id, brandName, modelName, varient, deleteHandler, editHandler }) {
  const [ editable, setEditable ] = useState(true);
    return (
    <>
    <div className="flex justify-between border-b-2 pb-4 mb-4">
      <div className="flex items-center text-15 font-bold text-theme-gray-2">
        <p className="border border-slate-600 h-6 w-6 rounded-full flex items-center justify-center mr-2">{id+1}</p>
        <p className="">{brandName} {brandName == 'Marke' && modelName == '' ? '& Modell': null} {modelName != '' ? modelName : null}</p>
      </div>
      <div className="flex">
        <button onClick={() => setEditable(true)}>edit</button>
        <button onClick={deleteHandler} className="ml-6">delete</button>
      </div>
    </div>
    </>
  );
}
