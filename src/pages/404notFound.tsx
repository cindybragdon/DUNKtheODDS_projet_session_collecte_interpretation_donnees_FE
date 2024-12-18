import SidebarComponent from "../components/sideBar";
import notFoundGif from "../dribbble-and-miss.gif"; 

const NotFound = () => {
    return (
        <div style={{ textAlign: "center", marginTop: "50px" }}>
            <SidebarComponent />
            <h1 style={{ color: "white" }}>404 Page introuvable</h1>
            <img 
                src={notFoundGif} 
                alt="Not Found Animation" 
                style={{ width: "600px", marginTop: "20px", marginBottom: "20px" }} 
            />
            <h1 style={{ color: "white" }}>Un shoot à trois points 👌... qui finit en airball 🏀! </h1>
        </div>
    );
};

export default NotFound;
