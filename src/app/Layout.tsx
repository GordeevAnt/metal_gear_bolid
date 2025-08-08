import { Outlet } from "react-router-dom";
import Basket_Button from "../widgets/Basket_Button";
import Home_Button from "../widgets/Navbar/Home_Button/Home_Button";
import Input from "../widgets/Navbar/Input";
import Footer from "../widgets/Footer";

export default function Layout() {
  return (
    <>
      <header>
        <Home_Button />
        <Input />
        <Basket_Button />
      </header>

      <Outlet />

      <Footer />
    </>
  )
}
