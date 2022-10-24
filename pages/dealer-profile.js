import Head from 'next/head'
import Footer from '../components/common/Footer';
import Header from '../components/common/Header'
import DPContainer from '../components/dealer/profile/DPContainer';

export default function DealerProfile(){
    return (
        <div>
          <Head>
            <title>Auto Gigant - Dealer List</title>
            <meta name="description" content="Auto Gigant" />
            <link rel="icon" href="/favicon.ico" />
          </Head>
          <Header />
          <DPContainer />
          <Footer/>
        </div>
      );
}