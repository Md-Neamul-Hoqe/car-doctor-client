import { Outlet } from "react-router-dom";
import Navbar from "../Pages/Shared/Navbar/Navbar";
import Footer from "../Pages/Shared/Footer/Footer";

const Layout = () => {
  return (
    <>
      <header className="max-w-7xl mx-auto">
        <Navbar />
      </header>
      <main className="max-w-7xl mx-auto">
        <Outlet />
      </main>
      <footer className=" bg-heading">
        <Footer />
      </footer>
    </>
  );
};

export default Layout;
