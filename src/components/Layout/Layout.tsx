import { Suspense } from 'react';

import { Outlet } from "react-router-dom";
// import Sidebar from '../Sidebar/Sidebar'
import  Header  from '../Header/Header';

import  Footer  from '../Footer/Footer';
import  Loader  from '../Loader/Loader';

import "./Layout.scss";
// type Props = {}

const Layout = () => {
  return (
    <div>

      <Header />

      <main>
      <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
