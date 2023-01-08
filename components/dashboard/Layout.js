import Header from "../common/Header";
import Footer from "../common/Footer";
import ProfileCard from "./ProfileCard";
import Sidebar from "./Sidebar";
import classes from './Layout.module.css'
import Up from './../../public/up.svg';
export default function DashboardLayout({ children }) {

  function scrollTop(){
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      })
  }

  return (
    <>
      <Header />
      <ProfileCard
        userThumb="/images/db-profile-thumb.png"
        userFullName="Hasan Güler"
      />
      <div className="bg-theme-gray-10 md:bg-white">
        <div className="w-16/170 max-w-ag-container lg:w-full mx-auto flex md:flex-wrap justify-between bg-white">
          <div className="flex w-full h-full z-100">
            <Sidebar />
            <div className={classes.container}>
              <div className={classes.zindex}>
              {children}
              </div>
              <div className={classes.rounder}>
                <div className={classes.rounding}></div>
              </div></div>    
          </div>
        </div>
      </div>
      <div className="bg-theme-gray-10 md:bg-white">
        <div className={`w-16/170 max-w-ag-container lg:w-full mx-auto flex md:flex-wrap justify-between bg-gray-100 ${classes.bgcolor}`}>
    	    <span className={`flex items-center cursor-pointer ${classes.linkgroup}`} onClick={scrollTop}><span>Nach Oben</span> <Up className={classes.up} /> </span>
        </div>
      </div>
      <Footer />
    </>
  );
}
