import Head from "next/head";
import DashboardLayout from "../../components/dashboard/Layout";

export default function MakeAds() {
  return (
    <>
      <Head>
        <title>Auto Gigant</title>
        <meta name="description" content="Auto Gigant" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <DashboardLayout>Make adds</DashboardLayout>
    </>
  );
}
