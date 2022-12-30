import Header from "../common/Header";
import Footer from "../common/Footer";
import ProfileCard from "./ProfileCard";
import Sidebar from "./Sidebar";
import classes from './Layout.module.css'
export default function DashboardLayout({ children }) {
  return (
    <>
      <Header />
      <ProfileCard
        userThumb="/images/db-profile-thumb.png"
        userFullName="Hasan Güler"
      />
      <div className="bg-theme-gray-10 md:bg-white">
        <div className="w-16/170 max-w-ag-container lg:w-full mx-auto flex md:flex-wrap justify-between bg-white">
          <div className="flex w-full relative">
            <Sidebar />
            <div className={classes.container}>
              {children}
              <div className={classes.rounder}>
                <div className={classes.rounding}></div>
              </div></div>
            
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
