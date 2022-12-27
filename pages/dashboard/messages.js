import Head from "next/head";
import MyDrafts from "../../components/dashboard/drafts/MyDrafts";
import DashboardLayout from "../../components/dashboard/Layout";
import MessagesPage from "../../components/Messages";

export default function Messages() {
  return (
    <>
      <Head>
        <title>Auto Gigant</title>
        <meta name="description" content="Auto Gigant" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <DashboardLayout>
        <MessagesPage />
      </DashboardLayout>
    </>
  );
}