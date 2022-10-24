import Head from "next/head";
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";

export default function LogoutSuccess() {
  return (
    <div>
      <Head>
        <title>Auto Gigant - Logout Success</title>
        <meta name="description" content="Auto Gigant" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <div className="bg-theme-gray-3 overflow-hidden lg:px-6 md:!px-0">
        <div className="relative w-10/12 lg:w-full max-w-ag-container md:!w-full mx-auto flex lg:flex-col bg-white p-6">
          <div className="w-1/2 lg:w-full mr-3 bg-theme-gray-4 rounded-10 p-6 flex items-center justify-center text-base flex-col text-theme-gray-4 text-15 md:text-xs text-center lg:flex-col">
          <svg xmlns="http://www.w3.org/2000/svg" width="86.898" height="84.3" viewBox="0 0 86.898 84.3">
            <path id="logout_FILL0_wght400_GRAD200_opsz40" d="M34.285,41.748H72.253L60.16,29.658l6.894-6.78L90.9,46.722,67.279,70.338l-7.005-6.894,12.2-12.2H34.285Zm12.09-37.29V13.95H13.492V79.266H46.375v9.492H13.492a9.112,9.112,0,0,1-6.666-2.826A9.118,9.118,0,0,1,4,79.266V13.95A9.118,9.118,0,0,1,6.826,7.284a9.112,9.112,0,0,1,6.666-2.826Z" transform="translate(-4 -4.458)" fill="#6c757d"/>
          </svg>

            <h3 className="text-2xl md:text-xl font-bold mt-2 mb-10 md:mb-6">Sie haben sich erfolgreich ausgeloggt!</h3>
            <p>Vielen Dank für Ihren Besuch!</p>
            <p className="mb-6 md:mb-4">Wir freuen uns auf ein Wiedersehen!</p>
            <p>Sie werden in Kürze zur Startseite weitergeleitet.</p>
            <p>
              Oder <a className="text-theme-blue" href="#" target="_blank" rel="norefferer">
                Klicken Sie hier
              </a>
              , wenn Sie nicht warten wollen.
            </p>
          </div>
          <img className="w-1/2 lg:w-auto lg:ml-0 lg:mt-4 ml-3 rounded-10" src="/images/logout-success.png" />
        </div>
      </div>
      <Footer />
    </div>
  );
}
