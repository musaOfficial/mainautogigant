import Head from "next/head";
import DashboardLayout from "../../components/dashboard/Layout";
import RechargeGigaCoinsPage from "../../components/RechargeGigaCoinsPage";

export default function RechargeGigaCoins() {
  return (
    <>
      <Head>
        <title>Auto Gigant</title>
        <meta name="description" content="Auto Gigant" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <DashboardLayout>
        <RechargeGigaCoinsPage />
      </DashboardLayout>
    </>
  );
}