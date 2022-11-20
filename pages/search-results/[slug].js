import SearchResults from "../../components/SearchResults"
import Head from "next/head";
import Header from './../../components/common/Header';
import Footer from './../../components/common/Footer';
export default function SearchResultsPage(){
    return (
        <>
            <Head>
            <title>Auto Gigant - Dealer Log in</title>
            <meta name="description" content="Auto Gigant" />
            <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header />
            <SearchResults />
            <Footer />
        </>
    )
}