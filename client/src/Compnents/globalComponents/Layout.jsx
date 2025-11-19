{
  /* This Component is for Universal Header and Footer's */
}
import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

const Layout = () => {
    return (
        <>
        <div className="h-screen overflow-hidden flex flex-col">
            <Header />
                <main className="flex-1 overflow-auto">
                    <Outlet /> {/* This renders child routes */}
                </main>
            <Footer />
        </div>
        </>
    );
};

export default Layout;
