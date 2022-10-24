import Head from 'next/head'
import Footer from '../components/common/Footer';
import Header from '../components/common/Header'
import DealerListBreadcrumb from '../components/dealer/DealerListBreadcrumb';
import DealerListContainer from '../components/dealer/DealerListContainer';

export default function DealerList(){
    return (
        <div>
          <Head>
            <title>Auto Gigant - Dealer List</title>
            <meta name="description" content="Auto Gigant" />
            <link rel="icon" href="/favicon.ico" />
          </Head>
          <Header />
          <DealerListBreadcrumb />
          <DealerListContainer />
          <Footer/>
        </div>
      );
}