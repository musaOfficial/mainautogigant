import Head from "next/head";
import DashboardLayout from "../../components/dashboard/Layout";
import MySubscriptionsPage from "../../components/MySubscriptionsPage";

export default function MySubscriptions() {
  return (
    <>
      <Head>
        <title>Auto Gigant</title>
        <meta name="description" content="Auto Gigant" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <DashboardLayout>
        <MySubscriptionsPage />
      </DashboardLayout>
    </>
  );
}