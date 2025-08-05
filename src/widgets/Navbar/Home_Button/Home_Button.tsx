import { Link } from "react-router-dom";
import Home_Icon from "./Home_Icon";

export default function Home_Button() {
    return (
        <Link className="link" to={'/'}>
            <Home_Icon />
        </Link>
    )
}