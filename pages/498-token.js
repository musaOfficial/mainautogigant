import Head from "next/head";
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";
import Err404 from "../components/Error404";
function Error498Token(){
    return (
        <div>
        <Head>
            <title>Auto Gigant - 404 Not Found</title>
            <meta name="description" content="Auto Gigant" />
            <link rel="icon" href="favicon.ico" />
        </Head>
        <Header />
        <Err404 />
        <Footer />
    </div>
    )
}

export default Error498Token;