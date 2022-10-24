export default function ProfileCard({ userThumb, userFullName }) {
  return (
    <div className="bg-theme-gray-3 overflow-hidden lg:px-6 md:!px-0">
      <div className="relative w-10/12 md:p-0 lg:w-full max-w-ag-container md:!w-full mx-auto flex lg:flex-col items-center bg-user-input">
        <div className="flex w-full h-full items-center justify-between p-8 md:p-4 text-white bg-theme-gray-6">
          <div className="flex items-center justify-center mr-8 md:mr-4">
            <img className="shadow-md shadow-black border-4 border-theme-gray-4 rounded-full" src={userThumb} />
          </div>
          <div className="border-l border-white md:px-0 md:border-none px-6 border-opacity-50">
            <p className="text-base md:text-xs">Hallo,</p>
            <h3 className="text-22 font-bold py-1 md:text-14">
              {userFullName}
            </h3>
            <p className="text-13 md:text-10">
              Sie haben noch keine Anzeigen oder Favoriten,
              <br />
              daher können wir Sie nicht über aktueller Entwicklungen
              informieren.
            </p>
            <button className="inline-block px-10 py-3 sm:px-4 sm:text-sm rounded-10 mt-4 bg-theme-yellow-2 text-white text-base font-bold ease-linear duration-300 hover:bg-theme-yellow-3">
            VERIFIZIERUNG
            </button>
          </div>
          <div className="flex items-center justify-center ml-4 md:hidden">
            <img src="/images/dashboard-right-img.png" />
          </div>
        </div>
      </div>
    </div>
  );
}
