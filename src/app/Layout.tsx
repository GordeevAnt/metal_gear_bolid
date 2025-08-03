import { Link, Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <>
      <nav>
        <Link to={'/'}>Главная</Link>
        <input placeholder="Поиск"></input>
        <Link to={'/basket'}>🗑</Link>
      </nav>

      <Outlet />
    </>
  )
}
