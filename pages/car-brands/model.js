import Head from "next/head";
import Header from "../../components/common/Header";
import Footer from "../../components/common/Footer";
import Model from "../../components/Model";
function ModelPage(){
    return (
        <div>
        <Head>
          <title>Auto Gigant - Search Details</title>
          <meta name="description" content="Auto Gigant" />
          <link rel="icon" href="/favicon.ico" />
          <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        </Head>
        <Header />
            <Model />
        <Footer/>
      </div>
    )
}

export default ModelPage;