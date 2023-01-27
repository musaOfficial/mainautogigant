import Head from "next/head";
import DashboardLayout from "../../components/dashboard/Layout";
import Notifications from "../../components/Notifications";
export default function NotificationsPage() {
  return (
    <>
      <Head>
        <title>Auto Gigant</title>
        <meta name="description" content="Auto Gigant" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <DashboardLayout>
        <Notifications />
      </DashboardLayout>
    </>
  );
}