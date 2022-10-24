import Link from "next/link";

export default function Err404() {
  return (
    <div className="bg-theme-gray-3 md:bg-white lg:px-6 md:!px-0">
      <div className="w-10/12 lg:w-full max-w-ag-container mx-auto pt-10 relative bg-white text-center text-theme-black">
        <div className="w-full relative z-20 overflow-hidden text-theme-gray-2 pt-12 md:pt-0 md:pb-6 pb-10">
          <div className="w-2/3 2xl:w-full mx-auto px-12 md:px-0 mb-12 md:mb-6">
            <h1 className="text-100 font-bold leading-100 md:text-3xl text-theme-gray-4">
              ERROR 404
            </h1>
            <p className="text-xl md:text-sm">
            Sorry, Gigant hat die Seite mitgenommen und gibt sie nicht wieder her!
            </p>
            <p className="text-xl md:text-sm">
              Hier kommst du <Link href='/'><a className="text-theme-blue">zurück auf die Startseite.</a></Link>
            </p>
          </div>
          <img className="mx-auto md:w-72" src="/images/404-gorila.png" />
          <div className="absolute w-full md:h-44 h-80 -bottom-6 left-0 bg-theme-gray-2 -z-10"></div>
        </div>
      </div>
    </div>
  );
}
