import Head from "next/head";
import DashboardLayout from "../../components/dashboard/Layout";
import SavedSearchesPage from "../../components/SavedSearchesPage";

export default function SavedSearches() {
  return (
    <>
      <Head>
        <title>Auto Gigant</title>
        <meta name="description" content="Auto Gigant" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <DashboardLayout>
        <SavedSearchesPage />
      </DashboardLayout>
    </>
  );
}