import Head from "next/head";
import DashboardLayout from "../../components/dashboard/Layout";
import LatestAdvertisementsPage from "../../components/LatestAdvertisementsPage";

export default function LatestAdvertisements() {
  return (
    <>
      <Head>
        <title>Auto Gigant</title>
        <meta name="description" content="Auto Gigant" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <DashboardLayout>
        <LatestAdvertisementsPage />
      </DashboardLayout>
    </>
  );
}