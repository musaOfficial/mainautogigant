import Head from "next/head";
import BillsPage from "../../components/BillsPage";
import DashboardLayout from "../../components/dashboard/Layout";

export default function Bills() {
  return (
    <>
      <Head>
        <title>Auto Gigant</title>
        <meta name="description" content="Auto Gigant" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <DashboardLayout>
        <BillsPage />
      </DashboardLayout>
    </>
  );
}