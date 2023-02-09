import Link from "next/link";
import classes from './Error404.module.css'
import Image from 'next/image';
import BackTo from './../public/backto.svg';
import TopRow from "./ui/TopRow";
import { useRouter } from "next/router";
import React, { createContext, useContext } from 'react';

const RouterContext = createContext(null);

function Error() {


  const router = useContext(RouterContext);

  if (router) {
    setTimeout(function() {
      router.push('/');
    }, 3000);
  }

  return (
    <div className="bg-theme-gray-10 md:bg-white lg:px-6 md:!px-0">
      <div className={`w-10/12 lg:w-full max-w-ag-container mx-auto relative bg-white text-center ${classes.padding}`}>
      <TopRow />
        <div className={classes.container}>
          <div className={classes.content}>
            <div className={classes.heading}>Seite nicht gefunden</div>
            <div className={classes.text}>Leider konnten wir die angeforderte Seite nicht finden. | Error 404</div>
            <img className="mx-auto md:w-72 mt-10 mb-10" src="/images/404-gorila.png" />
          </div>
        </div>
      </div>
    </div>
  );
}


function Err404() {
  const router = useRouter();

  return (
    <RouterContext.Provider value={router}>
      <Error />
    </RouterContext.Provider>
  );
}

export default Err404;