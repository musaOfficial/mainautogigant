import Head from "next/head";
import CalendarPage from "../../components/CalendarPage";
import DashboardLayout from "../../components/dashboard/Layout";
function Calendar(){
    return (
        <>
        <Head>
        <title>Auto Gigant</title>
        <meta name="description" content="Auto Gigant" />
        <link rel="icon" href="/favicon.ico" />
        </Head>
        <DashboardLayout>
            <CalendarPage />
        </DashboardLayout>
        </>
    )
}

export default Calendar;