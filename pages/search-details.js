import Head from 'next/head'
import Footer from '../components/common/Footer';
import Header from '../components/common/Header'
import SearchDetail from '../components/search/SearchDetail';

export default function SearchDetails(){
    return (
        <div>
          <Head>
            <title>Auto Gigant - Search Details</title>
            <meta name="description" content="Auto Gigant" />
            <link rel="icon" href="/favicon.ico" />
          </Head>
          <Header />
          <SearchDetail />
          <Footer/>
        </div>
      );
}