import Head from "next/head";
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";
import RegisterSuccess from "../components/RegisterSuccess";

export default function LogoutSuccess() {
  return (
    <div>
      <Head>
        <title>Auto Gigant - Register Success</title>
        <meta name="description" content="Auto Gigant" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <RegisterSuccess />
      <Footer />
    </div>
  );
}
