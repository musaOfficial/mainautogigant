import Head from "next/head";
import ProfileSettings from "../../components/dashboard/ideas/ProfileSettings";
import DashboardLayout from "../../components/dashboard/Layout";

export default function Ideas() {
  return (
    <>
      <Head>
        <title>Auto Gigant</title>
        <meta name="description" content="Auto Gigant" />
        <link rel="icon" href="/favicon.ico" />
        
      </Head>
      <DashboardLayout>
        <ProfileSettings />
      </DashboardLayout>
    </>
  );
}