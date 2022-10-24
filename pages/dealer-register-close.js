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
          <div className="w-1/2 lg:w-full mr-2 bg-theme-gray-4 p-6 flex rounded-md flex-col text-theme-gray-4 text-15 md:text-xs lg:flex-col">
            <h3 className="text-2xl md:text-xl font-bold mt-2 mb-10 md:mb-6">
              Registrierung abschließen
            </h3>
            <div className="relative w-full">
              <div className="flex items-center px-4 rounded-md bg-white">
                <h1 className="text-40 font-bold text-theme-gray-3 md:text-xl">1</h1>
                <div className="w-14 bg-theme-yellow-2 py-6 mx-2 md:px-1 md:py-8">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="40"
                    height="40"
                    viewBox="0 0 40 40"
                    className="mx-auto"
                  >
                    <path
                      id="info_FILL0_wght400_GRAD0_opsz48"
                      d="M22.65,34h3V22h-3ZM24,18.3a1.643,1.643,0,0,0,1.175-.45,1.515,1.515,0,0,0,.475-1.15,1.681,1.681,0,0,0-.475-1.2,1.631,1.631,0,0,0-2.35,0,1.681,1.681,0,0,0-.475,1.2,1.515,1.515,0,0,0,.475,1.15A1.643,1.643,0,0,0,24,18.3ZM24,44a20.285,20.285,0,0,1-7.9-1.525A19.357,19.357,0,0,1,5.525,31.9,20.285,20.285,0,0,1,4,24a20.156,20.156,0,0,1,1.525-7.85A19.52,19.52,0,0,1,9.75,9.8,19.939,19.939,0,0,1,24,4,19.84,19.84,0,0,1,44,24a19.939,19.939,0,0,1-5.8,14.25,19.52,19.52,0,0,1-6.35,4.225A20.156,20.156,0,0,1,24,44Zm0-20Zm0,17a16.366,16.366,0,0,0,12-5,16.366,16.366,0,0,0,5-12,16.366,16.366,0,0,0-5-12A16.366,16.366,0,0,0,24,7a16.366,16.366,0,0,0-12,5A16.366,16.366,0,0,0,7,24a16.366,16.366,0,0,0,5,12A16.366,16.366,0,0,0,24,41Z"
                      transform="translate(-4 -4)"
                      fill="#fff"
                    />
                  </svg>
                </div>
                <div>
                  <p>Sie können Ihr Benutzerkonto</p>
                  <p>
                    nur mit einer{" "}
                    <span className="font-bold">
                      bestätigten E-Mail-Adresse
                    </span>{" "}
                    verwenden.
                  </p>
                </div>
              </div>
              <div className="w-full my-3 pl-14 ml-1 md:pl-10">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="17.688"
                  viewBox="0 0 30 17.688"
                >
                  <path
                    id="expand_more"
                    d="M27,34.287l-15-15L14.687,16.6,27,28.975,39.312,16.662,42,19.35Z"
                    transform="translate(-12 -16.6)"
                    fill="#c3c3c3"
                  />
                </svg>
              </div>
              <div className="flex items-center px-4 rounded-md bg-white">
                <h1 className="text-40 font-bold text-theme-gray-3 md:text-xl">2</h1>
                <div className="w-14 bg-theme-gray-5 py-6 mx-2 md:px-1 md:py-8">
                  <svg
                    className="mx-auto"
                    xmlns="http://www.w3.org/2000/svg"
                    width="40"
                    height="32"
                    viewBox="0 0 40 32"
                  >
                    <path
                      id="mail_FILL0_wght400_GRAD0_opsz48"
                      d="M7,40a2.878,2.878,0,0,1-2.1-.9A2.878,2.878,0,0,1,4,37V11a2.878,2.878,0,0,1,.9-2.1A2.878,2.878,0,0,1,7,8H41a2.878,2.878,0,0,1,2.1.9A2.878,2.878,0,0,1,44,11V37a3.076,3.076,0,0,1-3,3ZM24,24.9,7,13.75V37H41V13.75Zm0-3L40.8,11H7.25ZM7,13.75V37H7Z"
                      transform="translate(-4 -8)"
                      fill="#fff"
                    />
                  </svg>
                </div>
                <div>
                  <p className="font-bold">E-Mail-Adresse bestätigen</p>
                  <p className="text-xs">
                    In kürze erhalten Sie eine E-Mail mit einem
                    Bestätigungslink.
                  </p>
                  <p className="text-xs">
                    Keine E-Mail erhalten?{" "}
                    <a
                      href="#"
                      target="_blank"
                      rel="norefferer"
                      className="text-theme-blue"
                    >
                      Hier neu anfordern.
                    </a>
                  </p>
                </div>
              </div>
              <div className="w-full my-3 pl-14 ml-1 md:pl-10">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="17.688"
                  viewBox="0 0 30 17.688"
                >
                  <path
                    id="expand_more"
                    d="M27,34.287l-15-15L14.687,16.6,27,28.975,39.312,16.662,42,19.35Z"
                    transform="translate(-12 -16.6)"
                    fill="#c3c3c3"
                  />
                </svg>
              </div>
              <div className="flex items-center px-4 rounded-md bg-white">
                <h1 className="text-40 font-bold text-theme-gray-3 md:text-xl">3</h1>
                <div className="w-14 bg-theme-gray-5 py-6 mx-2 md:px-1 md:py-8">
                  <svg
                    className="mx-auto"
                    xmlns="http://www.w3.org/2000/svg"
                    width="40"
                    height="31.9"
                    viewBox="0 0 40 31.9"
                  >
                    <path
                      id="how_to_reg_FILL0_wght400_GRAD0_opsz48"
                      d="M4,40V35.3a5.988,5.988,0,0,1,.85-3.125A5.4,5.4,0,0,1,7.4,30,37.376,37.376,0,0,1,14,27.7a26.327,26.327,0,0,1,6-.7,28.78,28.78,0,0,1,3.075.175A22.344,22.344,0,0,1,26.4,27.8l-2.45,2.45q-1-.1-1.975-.175T20,30a24.485,24.485,0,0,0-5.275.525A34.7,34.7,0,0,0,8.6,32.7a2.5,2.5,0,0,0-1.225,1.15A3.236,3.236,0,0,0,7,35.3V37H22.95l3,3Zm27.25.8L24.2,33.75l2.1-2.1,4.95,4.95L41.9,25.95l2.1,2.1ZM20,23.9a7.193,7.193,0,0,1-7.5-7.5A7.193,7.193,0,0,1,20,8.9a7.193,7.193,0,0,1,7.5,7.5A7.193,7.193,0,0,1,20,23.9ZM22.95,37ZM20,20.9a4.361,4.361,0,0,0,4.5-4.5A4.361,4.361,0,0,0,20,11.9a4.361,4.361,0,0,0-4.5,4.5A4.361,4.361,0,0,0,20,20.9Zm0-4.5Z"
                      transform="translate(-4 -8.9)"
                      fill="#fff"
                    />
                  </svg>
                </div>
                <div>
                  <p>Mit Klick auf den Bestätigungslink ist Ihr AUTOGIGANT</p>
                  <p className="font-bold">Benutzerkonto aktiv!</p>
                </div>
              </div>
            </div>
            <div className="text-xs mt-10">
                <p>Wenn du keine E-Mail von uns erhalten hast,</p>
                <p>schaue bitte auch in den Spam-Ordner deines E-Mail-Postfaches.</p>
            </div>
          </div>
          <img
            className="w-1/2 lg:w-auto lg:ml-0 lg:mt-4 ml-2"
            src="/images/dealer-register-close.png"
          />
        </div>
      </div>
      <Footer />
    </div>
  );
}
