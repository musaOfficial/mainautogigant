import Head from 'next/head';
import Header from '../components/common/Header';
import Footer from '../components/common/Footer';
import Login from '../components/Login';

export default function LoginPage() {
  return (
    <div>
      <Head>
        <title>Auto Gigant - Log in</title>
        <meta name="description" content="Auto Gigant" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Login />
      <Footer />
    </div>
  )
}
