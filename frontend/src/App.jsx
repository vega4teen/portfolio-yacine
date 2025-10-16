import { Outlet } from "react-router-dom";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="layout">
      <NavBar />

      <main className="main container">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}
