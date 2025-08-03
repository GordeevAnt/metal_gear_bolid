import { Routes, Route } from "react-router-dom";
import BasketPage from "../pages/BasketPage";
import HomePage from "../pages/HomePage";
import NotFoundPage from "../pages/NotFoundPage";
import Layout from "./Layout";

export default function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<HomePage/>}/>
          <Route path='/basket' element={<BasketPage/>}/>
          <Route path='*' element={<NotFoundPage />}/>
        </Route>
      </Routes>
    </>
  )
}