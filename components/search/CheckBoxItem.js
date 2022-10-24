export default function CheckBoxItem({ title, wAuto, marginBottom, sublabel }) {
  return (
    <div className={`${wAuto ? '' : 'w-1/6 lg:w-auto md:!w-1/2'} ${marginBottom ? 'mb-6' : ''} flex items-center cursor-pointer md:pt-4`}>
      <input
        className="form-check-input appearance-none h-6 w-6 bg-white rounded checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
        type="checkbox"
        name={title}
        value={title}
        id={title}
      />
      <div className={`${sublabel ? 'flex flex-col' : ''}`}>
        <label htmlFor={title}>{title}</label>
        {sublabel && <span className="inline-block leading-3 text-10">
          (Technisch geprüfte Fahrzeuge mit Garantie)
        </span>}
      </div>
    </div>
  );
}
