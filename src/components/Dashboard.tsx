import Sidebar from "./Sidebar";
import {Outlet} from "react-router-dom";

const Dashboard = () => {
    return (
        <div className={`flex h-screen gap-0`}>
            <div>
                <Sidebar/>
            </div>
            <div className="flex-grow">
                <Outlet/>
            </div>
        </div>
    );
};

export default Dashboard;
