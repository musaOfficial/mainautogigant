import Head from "next/head";
import Footer from "../components/common/Footer";
import Header from "../components/common/Header";
import KFZKaufvertrag from "../components/Kaufvertrag";

function Kaufvertrag(){
    return (
        <div>
            <Head>
                <title>Auto Gigant</title>
                <meta name="description" content="Auto Gigant" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header></Header>
            <KFZKaufvertrag />
            <Footer></Footer>
        </div>
    )
}

export default Kaufvertrag;