import Head from 'next/head';
import Header from '../components/common/Header';
import Footer from '../components/common/Footer';
import ResetPassword from '../components/ResetPassword';

export default function Reset() {
  return (
    <div>
      <Head>
        <title>Auto Gigant - Reset Password</title>
        <meta name="description" content="Auto Gigant" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <ResetPassword />
      <Footer />
    </div>
  )
}
