import Head from "next/head";
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";


export default function Error403(){
    return (
        <div>
            <Head>
                <title>Auto Gigant - 404 Not Found</title>
                <meta name="description" content="Auto Gigant" />
                <link rel="icon" href="favicon.ico" />
            </Head>
            <Header />
            
            <Footer />
        </div>
    )
}