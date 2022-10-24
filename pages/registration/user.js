import Head from 'next/head';
import Header from '../../components/common/Header';
import Footer from '../../components/common/Footer';
import Registration from '../../components/Registration';

export default function UserRegister() {
  return (
    <div>
      <Head>
        <title>Auto Gigant - User Registration</title>
        <meta name="description" content="Auto Gigant" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Registration />
      <Footer />
    </div>
  )
}
