import Head from "next/head";
import DashboardLayout from "../../components/dashboard/Layout";
import FavouritesPage from "../../components/FavouritesPage";
export default function Favourites() {
  return (
    <>
      <Head>
        <title>Auto Gigant</title>
        <meta name="description" content="Auto Gigant" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <DashboardLayout>
        <FavouritesPage />
      </DashboardLayout>
    </>
  );
}