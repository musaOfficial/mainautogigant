import Head from "next/head";
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";
import LogoutSuccess from "../components/LogoutSuccess";
export default function LogoutSuccessPage() {
  return (
    <div>
      <Head>
        <title>Auto Gigant - Logout Success</title>
        <meta name="description" content="Auto Gigant" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
          <LogoutSuccess /> 
      <Footer />
    </div>
  );
}
