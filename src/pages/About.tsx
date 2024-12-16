import React from "react";
import SidebarComponent from "../components/sideBar";
import Footer from "../components/footer";
import "../About.css"

const About = () => {
    return(
        
        <div className='textStyle d-flex flex-column   justify-content-center align-items-center p-4 '>
            <h6 className='about-title '> ChatGPT generated </h6> 
            <div className='d-flex w-25 justify-content-center align-items-center font-family: "Space Grotesk", serif; '>
                <img className='w-25 img-fluid' src={'./images/icone.png'} alt="k"/><h1 className='text-white'>UNKtheODDS</h1>
            </div>

        
            <div className="about-container "> 
            <h6 className="about-text">À propos de DunkTheOdds</h6>
            Bienvenue sur DunkTheOdds, votre plateforme de référence dédiée aux passionnés de basketball et aux parieurs éclairés. Nous sommes là pour vous fournir les informations les plus pertinentes et détaillées pour vous aider à prendre des décisions éclairées lors de vos paris sur les matchs de basketball.
            <br></br><br></br> <br></br>
            <h6 className="about-text"> Notre mission</h6> 
            Chez DunkTheOdds, notre mission est simple : vous fournir les outils et les données nécessaires pour améliorer vos stratégies de paris. Nous croyons fermement que des paris réussis reposent sur des informations solides et une analyse approfondie des performances des équipes et des joueurs. <br></br><br></br>
            <h6 className="about-text">Ce que nous offrons</h6> 
            1. Analyse des Matchs <br></br>
            Notre équipe d'experts surveille de près tous les matchs de basketball, en se basant sur des statistiques avancées et des tendances de jeu pour vous offrir une analyse complète avant chaque rencontre. Nous couvrons les ligues majeures telles que la NBA, l'Euroligue, et bien plus encore.<br></br><br></br>

            2. Statistiques en Temps Réel<br></br>
            DunkTheOdds vous offre des données en temps réel sur les performances des joueurs, les résultats des matchs précédents, les tendances de l’équipe, et bien plus. Ces statistiques sont mises à jour en continu pour vous garantir les informations les plus récentes.<br></br><br></br>

            3. Conseils de Paris Personnalisés<br></br>
            Nos experts analysent les données pour vous proposer des conseils de paris personnalisés adaptés à vos préférences et à votre stratégie. Que vous soyez un parieur occasionnel ou un habitué, nous avons des recommandations sur mesure pour chaque type de joueur.<br></br><br></br>

            4. Prédictions Basées sur les Données<br></br>
            Grâce à un algorithme puissant et des modèles prédictifs, nous proposons des prévisions des résultats des matchs, vous donnant ainsi un aperçu de ce qui pourrait se passer sur le terrain. Nos prédictions sont continuellement affinées en fonction des dernières performances et informations disponibles.<br></br><br></br>
            <h6 className="about-text">Pourquoi Choisir DunkTheOdds ?</h6>
            <b>Fiabilité des Informations :</b> Nos analyses reposent sur des données fiables et des statistiques précises pour vous aider à prendre les meilleures décisions. <br></br> <br></br>
            <b>Expertise :</b> Nous sommes passionnés de basketball et possédons une expérience approfondie dans le domaine des paris sportifs. Chaque conseil est le fruit de recherches minutieuses. <br></br> <br></br>
            <b>Accessibilité :</b> Notre interface facile à utiliser vous permet d'accéder rapidement aux informations cruciales pour vos paris, que vous soyez sur ordinateur ou mobile. <br></br><br></br>
            <b>Communauté :</b> DunkTheOdds n’est pas seulement un site, mais une communauté de passionnés et de parieurs qui échangent des conseils et des stratégies pour maximiser leurs gains. <br></br><br></br>
            <h6 className="about-text">Rejoignez-nous !</h6>
            Que vous soyez un novice dans le monde des paris ou un parieur expérimenté, DunkTheOdds est là pour vous accompagner à chaque étape de votre parcours. Découvrez nos analyses détaillées, nos prédictions précises et notre communauté active pour faire passer vos paris au niveau supérieur !
            <br></br> <br></br>
            <i><b>DunkTheOdds</b> - Plus que des paris, des informations essentielles pour parier intelligemment.</i>
        </div>
        <SidebarComponent />
        <Footer/>
        </div>
    )
}

export default About;