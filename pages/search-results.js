import Head from "next/head";
import Footer from "../components/common/Footer";
import Header from "../components/common/Header";
import SearchResults from "../components/SearchResults";
function SearchResultsPage(){
    return (
        <div>
        <Head>
          <title>Auto Gigant - Search Details</title>
          <meta name="description" content="Auto Gigant" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Header />
        <SearchResults />
        <Footer/>
      </div>
    )
}

export default SearchResultsPage;