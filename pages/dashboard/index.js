import Head from "next/head";
import DashboardLayout from "../../components/dashboard/Layout";
import Overview from "../../components/dashboard/overview/Overview";

export default function Dashboard() {
  return (
    <>
      <Head>
        <title>Auto Gigant</title>
        <meta name="description" content="Auto Gigant" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <DashboardLayout>
        <Overview />
      </DashboardLayout>
    </>
  );
}
