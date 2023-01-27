import Head from "next/head";
import Footer from "../../components/common/Footer";
import Header from "../../components/common/Header";
import Impressum  from "../../components/Impressum";
function ImpressumPage(){
    return (
        <div>
            <Head>
            <title>Auto Gigant - Log in</title>
            <meta name="description" content="Auto Gigant" />
            <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header />
                <Impressum />
            <Footer />
      </div>
    )
}

export default ImpressumPage;