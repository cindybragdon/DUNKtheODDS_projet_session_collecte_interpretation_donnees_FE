import {Navigate, Outlet} from "react-router-dom";

const userObject = localStorage.getItem('user')

const user = JSON.parse(userObject || "null") ;



console.log(user)
function AdminRoute() {
    return (
        user?.role === "Admin" ? <Outlet/> : <Navigate to="/"/>
    );
}

export default AdminRoute;