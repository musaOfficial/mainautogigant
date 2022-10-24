import Head from 'next/head';
import ProductDetails from '../../components/ProductDetails';
import Header from '../../components/common/Header';
import Footer from '../../components/common/Footer';

export default function SingleProduct() {
  return (
    <div>
      <Head>
        <title>Auto Gigant</title>
        <meta name="description" content="Auto Gigant" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <ProductDetails 
        carName='Audi Q3 2.0T Prestige'
        prevPrice='36.555,-'
        currentPrice='37.995,-'
        desc='The Audi Q3 subcompact crossover SUV debuted as a 2015 model, slotting below the compact Q5.'
        milage='243 462'
        engine='103 KW 140 PS'
        releaseDate='05/2013'
        fuel='DIESEL'
      />
      <Footer />
    </div>
  )
}
