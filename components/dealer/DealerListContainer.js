import InputSelect from "../ui/InputSelect";
import Pagination from "../ui/Pagination";
import DealerListCard from "./DealerListCard";

export default function DealerListContainer() {
  const option = [
    { value: "alle marken", label: "Alle Marken" },
    { value: "alle marken", label: "Alle Marken" },
    { value: "alle marken", label: "Alle Marken" },
  ];
  return (
    <div className="bg-theme-gray-3">
      <div className="lg:px-6 md:!px-0">
        <div className="w-10/12 lg:w-full max-w-ag-container mx-auto lg:px-6 lg:pt-0 px-20 bg-white pt-6">
          <div className="flex md:w-full md:flex-wrap justify-between items-center pb-6 py-6">
            <div className="w-4/5 md:w-full flex md:flex-wrap lg:text-sm items-center">
              <div className="md:!w-1/2 mr-10 lg:mr-4 md:!mr-0 lg:flex-1">
                <h4 className="text-black font-bold">Autohändler:</h4>
                <p className="text-black">123456 Ergebnisse</p>
              </div>
              <div className="relative w-1/3 mr-4 md:mr-2 md:ml-1 md:w-1/2">
                <input
                  className="w-full border border-slate-400 rounded-md px-4 py-1.5"
                  placeholder="Welchen Händler suchen Sie?"
                />
                <button className="absolute right-2 top-2">
                  <img src="/images/icons/dealer-search.png" />
                </button>
              </div>
              <div className="w-1/4 mr-4 md:mr-2 md:mt-4 md:w-1/2">
                <InputSelect
                  styleType="row"
                  options={option}
                  placeholder="Alle Bundesländer"
                />
              </div>
              <button className="md:w-1/2 md:flex-1 md:ml-2 md:mt-4 border border-slate-500 rounded md bg-gray-200 px-8 lg:px-4 py-1.5 text-black font-bold">
                Jetzt suchen
              </button>
            </div>
            <div className="w-1/6 md:!w-full md:mt-4 flex items-end justify-end text-sm text-gray-500 font-bold">
              <img src="/images/icons/dealer-location.png" />
              <p className="pb-2">zur Kartenansicht</p>
            </div>
          </div>
        </div>
        <div className="w-10/12 max-w-ag-container lg:w-full md:p-4 mx-auto bg-white pt-4">
          <DealerListCard />
          <DealerListCard />
          <DealerListCard />
          <DealerListCard />
          <DealerListCard />
          <DealerListCard />
          <DealerListCard />
          <DealerListCard />
        </div>
        <div>
          <Pagination />
        </div>
      </div>
    </div>
  );
}
