import Head from "next/head";
import MyAds from "../../components/dashboard/ads/MyAds";
import DashboardLayout from "../../components/dashboard/Layout";

export default function MakeAds() {
  return (
    <>
      <Head>
        <title>Auto Gigant</title>
        <meta name="description" content="Auto Gigant" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <DashboardLayout>
        <MyAds />
      </DashboardLayout>
    </>
  );
}