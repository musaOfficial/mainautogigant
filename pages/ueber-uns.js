import Head from "next/head";
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";
import UeberUns from "../components/ueberuns";

function UeberUnsPage(){
    return (
        <div>
        <Head>
          <title>Auto Gigant - Search Details</title>
          <meta name="description" content="Auto Gigant" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Header />
            <UeberUns />
        <Footer/>
      </div>
    )
}

export default UeberUnsPage;