
export default function ColorItem({ title, wAuto, bgColor, borderColor }) {

  return (
    <div className={`${wAuto ? '': 'w-1/6 md:w-1/2 md:mt-4'} flex items-center cursor-pointer`}>
      <input
        className={`form-check-input appearance-none h-6 w-6 ${borderColor ? 'border border-theme-slate' : ''} rounded ${bgColor} focus:outline-none transition duration-200 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer ${bgColor == 'bg-white' ? 'blackChecked' : null}`}
        type="checkbox"
        name={title}
        value={title}
        id={title}
      />
      <label htmlFor={title}>{title}</label>
    </div>
  );
}
