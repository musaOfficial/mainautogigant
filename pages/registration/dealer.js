import Head from 'next/head';
import Header from '../../components/common/Header';
import Footer from '../../components/common/Footer';
import DealerRegister from '../../components/dealer/DealerRegister';

export default function UserRegister() {
  return (
    <div>
      <Head>
        <title>Auto Gigant - Dealer Registration</title>
        <meta name="description" content="Auto Gigant" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <DealerRegister />
      <Footer />
    </div>
  )
}