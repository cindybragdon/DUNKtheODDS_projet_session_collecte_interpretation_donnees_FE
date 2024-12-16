import React, { useEffect } from "react";
import SidebarComponent from "../components/sideBar";

const Contact = () => {
    // Console log pour vérifier si le composant est rendu
    useEffect(() => {
        console.log("Contact component rendered");
    }, []);

    return (
        <div>
            <SidebarComponent />
            {/* Contenu principal de la page Contact */}
            <div style={{ padding: "20px" }}>
                <h1>Contactez-nous</h1>
                <p>Si vous avez des questions, n'hésitez pas à nous écrire.</p>
                <form>
                    <label>
                        <strong>Nom :</strong>
                        <input
                            type="text"
                            name="name"
                            style={{ margin: "10px 0", display: "block", width: "100%" }}
                        />
                    </label>
                    <label>
                        <strong>Email :</strong>
                        <input
                            type="email"
                            name="email"
                            style={{ margin: "10px 0", display: "block", width: "100%" }}
                        />
                    </label>
                    <label>
                        <strong>Message :</strong>
                        <textarea
                            placeholder="Votre message..."
                            style={{
                                margin: "10px 0",
                                display: "block",
                                width: "100%",
                                height: "100px",
                            }}
                        />
                    </label>
                    <button
                        type="submit"
                        style={{
                            marginTop: "10px",
                            padding: "10px 20px",
                            backgroundColor: "#007BFF",
                            color: "white",
                            border: "none",
                            borderRadius: "5px",
                            cursor: "pointer",
                        }}
                    >
                        Envoyer
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Contact;
