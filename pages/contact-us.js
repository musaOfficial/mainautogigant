import Head from "next/head";
import Header from '../components/common/Header';
import Footer from '../components/common/Footer';
import ContactUs from "../components/ContactUs";

export default function Dealer(){
    return (
        <>
      <Head>
        <title>Auto Gigant</title>
        <meta name="description" content="Auto Gigant" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      
      <Footer />
    </>
    );
}