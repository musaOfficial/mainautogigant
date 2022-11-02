import Head from "next/head";
import Header from "../../components/common/Header";
import Footer from "../../components/common/Footer";
import CarDetails from "../../components/CarDetails";
function CarDetailsPage(){
    return (
        <div>
            <Head>
                <title>Auto Gigant - Dealer Log in</title>
                <meta name="description" content="Auto Gigant" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header />
            <CarDetails />
            <Footer />
        </div>
    )
}

export default CarDetailsPage;