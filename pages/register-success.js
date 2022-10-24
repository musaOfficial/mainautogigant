import Head from "next/head";
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";

export default function LogoutSuccess() {
  return (
    <div>
      <Head>
        <title>Auto Gigant - Register Success</title>
        <meta name="description" content="Auto Gigant" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <div className="bg-theme-gray-3 overflow-hidden lg:px-6 md:!px-0">
        <div className="relative w-10/12 lg:w-full max-w-ag-container md:!w-full mx-auto flex lg:flex-col bg-white p-4">
          <div className="w-1/2 lg:w-full mr-2 bg-theme-gray-4 rounded-md p-6 flex items-center justify-center flex-col text-theme-black-2 text-15 md:text-xs text-center lg:flex-col">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="100"
              height="84.305"
              viewBox="0 0 100 84.305"
            >
              <path
                id="how_to_reg_FILL0_wght400_GRAD200_opsz40"
                d="M2.5,89.453V75.065A15.8,15.8,0,0,1,4.7,66.92a14.543,14.543,0,0,1,6.361-5.767,83.046,83.046,0,0,1,16.885-6,68.752,68.752,0,0,1,14.982-1.724,66.1,66.1,0,0,1,7.311.417,70.7,70.7,0,0,1,7.908,1.367L49.586,63.77l-3.27-.237q-1.6-.12-3.507-.12A57.971,57.971,0,0,0,30.561,64.72a80.224,80.224,0,0,0-15.1,5.351,4.308,4.308,0,0,0-2.32,2.083,6.663,6.663,0,0,0-.654,2.911v4.4H48.159l10.582,9.988Zm67.776.477L52.083,71.737,59.1,64.72,70.276,75.9l25.09-25.09,7.134,7.017ZM42.809,45.577A19.215,19.215,0,0,1,28.54,39.93,19.526,19.526,0,0,1,22.953,25.6,19.315,19.315,0,0,1,42.809,5.625,19.616,19.616,0,0,1,57.2,11.273,19.307,19.307,0,0,1,62.9,25.6,19.307,19.307,0,0,1,57.2,39.93,19.616,19.616,0,0,1,42.809,45.577Zm5.351,33.888ZM42.929,35.589A9.753,9.753,0,0,0,52.917,25.6a9.68,9.68,0,0,0-2.854-7.134,9.828,9.828,0,0,0-7.254-2.854,9.481,9.481,0,0,0-7.074,2.854A9.789,9.789,0,0,0,32.941,25.6a9.789,9.789,0,0,0,2.794,7.134A9.628,9.628,0,0,0,42.929,35.589Zm0-9.988Z"
                transform="translate(-2.5 -5.625)"
                fill="#555"
              />
            </svg>

            <h3 className="text-2xl md:text-xl font-bold mt-2 mb-10 md:mb-6">
            Sie haben sich erfolgreich registriert!
            </h3>
            

            <p>Vielen Dank für die Registrierung.</p>
            <p className="mb-6 md:mb-4">Sie werden in Kürze zur Startseite weitergeleitet.</p>
            <p>
              Oder{" "}
              <a
                className="text-theme-blue"
                href="#"
                target="_blank"
                rel="norefferer"
              >
                Klicken Sie hier
              </a>
              , wenn Sie nicht warten wollen.
            </p>
          </div>
          <img
            className="w-1/2 lg:w-auto lg:ml-0 lg:mt-4 ml-2"
            src="/images/register-success.png"
          />
        </div>
      </div>
      <Footer />
    </div>
  );
}
