import { Link } from "react-router-dom";
import Home_Icon from "./Home_Icon";

export default function Home_Button() {
    return (
        <Link className="home_btn" to={'/'}>
            <Home_Icon />
            <p className="home_btn_txt">MGB</p>
        </Link>
    )
}