import Navbar from "./Navbar.tsx";
import {Outlet} from "react-router-dom";

const General = () => {
    return (
        <div>
            <Navbar/>
            <Outlet/>
        </div>
    );
};

export default General;