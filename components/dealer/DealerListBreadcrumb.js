import InputSelect from "../ui/InputSelect";

export default function DealerListBreadcrumb() {
  const option1 = [
    { value: "alle marken", label: "Alle Marken" },
    { value: "alle marken2", label: "Alle Marken" },
    { value: "alle marken3", label: "Alle Marken" },
  ];
  const option2 = [
    { value: "alle modelle", label: "Alle Modelle" },
    { value: "alle modelle2", label: "Alle Modelle" },
    { value: "alle modelle3", label: "Alle Modelle" },
  ];
  const option3 = [
    { value: "erstzulassung ab", label: "Erstzulassung ab" },
    { value: "erstzulassung ab2", label: "Erstzulassung ab" },
    { value: "erstzulassung ab3", label: "Erstzulassung ab" },
  ];
  const option4 = [
    { value: "kilmeterstand bis", label: "Kilmeterstand bis" },
    { value: "kilmeterstand bis2", label: "Kilmeterstand bis" },
    { value: "kilmeterstand bis3", label: "Kilmeterstand bis" },
  ];
  const option5 = [
    { value: "preis bis(€)", label: "Preis bis(€)" },
    { value: "preis bis(€)2", label: "Preis bis(€)" },
    { value: "preis bis(€)3", label: "Preis bis(€)" },
  ];
  

  return (
    <div className="bg-theme-gray-3 lg:px-6 md:!px-0">
    <div className="w-10/12 lg:w-full max-w-ag-container mx-auto flex md:flex-col-reverse shadow-md">
      <div className="w-1/4 lg:w-2/5 md:!w-full p-8 shadow-md bg-theme-yellow-2">
        <InputSelect options={option1} placeholder={option1[1].label} />
        <span className="block h-4"></span>
        <InputSelect options={option2} placeholder={option2[1].label} />
        <span className="block h-4"></span>
        <InputSelect options={option3} placeholder={option3[1].label} />
        <span className="block h-4"></span>
        <InputSelect options={option4} placeholder={option4[1].label} />
        <span className="block h-4"></span>
        <InputSelect options={option5} placeholder={option5[1].label} />
        <button className="w-full mt-4 bg-black text-theme-yellow-2 font-bold p-2 rounded-md">
          FAHRZEUG SUCHEN
        </button>
      </div>
      <img className="w-4/5 md:!w-full" src="/images/billboard.jpg" />
    </div>
    </div>
  );
}
