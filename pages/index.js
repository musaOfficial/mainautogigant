import Head from "next/head";
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";
import Hero from "../components/home/Hero";
import HomeCars from "../components/home/Cars";
import CarListBrands from "../components/home/CarList";
import Homepage from "../components/Homepage";


export default function Home() {
  return (
    <>
      <Head>
        <title>Auto Gigant</title>
        <meta name="description" content="Auto Gigant" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Homepage />
      <Footer />
    </>
  );
}
