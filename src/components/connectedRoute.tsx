import {Navigate, Outlet} from "react-router-dom";

const userObject = localStorage.getItem('user');
const tokenObject = localStorage.getItem('token');

const user = JSON.parse(userObject || "null") ;
const token = tokenObject || "null";

console.log(user);
console.log(token);

function ConnectedRoute() {
    return (
        user !== "null" && token !== "null" ? <Outlet/> : <Navigate to="/"/>
    );
}

export default ConnectedRoute;