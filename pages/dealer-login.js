import Head from 'next/head';
import Header from '../components/common/Header';
import Footer from '../components/common/Footer';
import DealerLogin from '../components/DealerLogin';

export default function DealerLoginPage() {
  return (
    <div>
      <Head>
        <title>Auto Gigant - Dealer Log in</title>
        <meta name="description" content="Auto Gigant" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <DealerLogin />
      <Footer />
    </div>
  )
}
