import Head from "next/head";
import Giga from "../../components/dashboard/giga/Giga";
import DashboardLayout from "../../components/dashboard/Layout";

export default function GigaPower() {
  return (
    <>
      <Head>
        <title>Auto Gigant</title>
        <meta name="description" content="Auto Gigant" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <DashboardLayout>
        <Giga />
      </DashboardLayout>
    </>
  );
}
