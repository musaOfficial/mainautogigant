import Head from "next/head";
import Footer from "../components/common/Footer";
import Header from "../components/common/Header";
import FAQ from "../components/FAQ";

function faq(){
    return (
        <div>
            <Head>
                <title>Auto Gigant</title>
                <meta name="description" content="Auto Gigant" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header></Header>
            <FAQ />
            <Footer></Footer>
        </div>
    )
}

export default faq;