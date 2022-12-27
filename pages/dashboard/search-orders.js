import Head from "next/head";
import DashboardLayout from "../../components/dashboard/Layout";
import SearchOrdersPage from "../../components/SearchOrdersPage";

export default function SearchOrders() {
  return (
    <>
      <Head>
        <title>Auto Gigant</title>
        <meta name="description" content="Auto Gigant" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <DashboardLayout>
        <SearchOrdersPage />
      </DashboardLayout>
    </>
  );
}