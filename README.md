
<div id="haut-de-page"></div>

<div align="center">
  <img src="https://github.com/user-attachments/assets/266577b4-5c9f-4bc3-8803-9b8607bb1a94" alt="Description de l'image">
  <p style="margin-top: 20px;">
    <a href="https://trello.com/b/K5sGUke5/dunktheodds-projet-session-cid" 
       target="_blank" 
       style="text-decoration: none; color: #0066cc; font-size: 18px; font-weight: bold;">
      Accéder au Trello de l'équipe
    </a>
  </p>
</div>

<h1 align="center"><i> Epreuve Finale </i></h1>
<h2 align="center">Remis par Team JSON 4</h2>
<h2 align="center">Cindy Bragdon</h2>
<h2 align="center">Olivier Poirier</h2>
<h2 align="center">Jenna-Lee Lecavalier</h2>
<h2 align="center">Nissia Lesline Gansaore</h2>
<p align="center">
  <a href="https://github.com/cindybragdon">
    <img src="https://github.com/cindybragdon.png?size=64" width="64" height="64" alt="Cindy" style="border-radius: 50%; overflow: hidden;">
  </a>
  <a href="https://github.com/olivierpoirier">
    <img src="https://github.com/olivierpoirier.png?size=64" width="64" height="64" alt="Olivier" style="border-radius: 50%; overflow: hidden;">
  </a>
  <a href="https://github.com/JennaLeeL">
    <img src="https://github.com/JennaLeeL.png?size=64" width="64" height="64" alt="Jenna" style="border-radius: 50%; overflow: hidden;">
  </a>
  <a href="https://github.com/NotaroNissia">
    <img src="https://github.com/NotaroNissia.png?size=64" width="64" height="64" alt="Nissia" style="border-radius: 50%; overflow: hidden;">
  </a>
</p>
<h2 align="center">Développement d'une API RESTful, modèle de prédiction de statistique propres aux paris sur le Basketball</h2>
<h2 align="center">Dans le cadre du cours Collecte et Interpretation de données 420-514-MV</h2>
<h2 align="center">Enseigné par Sara Boumehraz, Cégep Marie-Victorin</h2>


---

## :label: Table des matières

- [Contexte du travail](#contexte-du-travail)
- [Outils et Technologies utilises](#outils-et-technologies-utilises)
- [Tests](#tests)



---

## Contexte du travail
:mortar_board: <br>
Développement d’un service de collecte, traitement et Stockage de données avec une API RESTful.  Une entreprise technologique souhaite développer un système permettant de collecter, analyser et stocker des données provenant d’un objet connecté ou d’une api ouverte. Ces données sont ensuite exposées via une API RESTful, qui est consommée par une application Web ou mobile. Votre mission consiste à implémenter ce service complet en respectant les exigences fonctionnelles et techniques, tout en assurant la sécurité, la fiabilité et la maintenabilité de l’ensemble du système.

---

## Outils et Technologies utilises 
:toolbox: <br>

<table>
  <tr>
    <td><img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black"></td>
    <td><img src="https://img.shields.io/badge/React%20Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white"></td>
  </tr>
  <tr>
    <td><img src="https://img.shields.io/badge/Chart.js-FF6384?style=for-the-badge&logo=chartdotjs&logoColor=white"></td>
    <td><img src="https://img.shields.io/badge/Axios-5A29E4?style=for-the-badge&logo=axios&logoColor=white"></td>
  </tr>
  <tr>
    <td><img src="https://img.shields.io/badge/Bootstrap-7952B3?style=for-the-badge&logo=bootstrap&logoColor=white"></td>
    <td><img src="https://img.shields.io/badge/React%20Pro%20Sidebar-3178C6?style=for-the-badge&logo=react&logoColor=white"></td>
  </tr>
  <tr>
    <td><img src="https://img.shields.io/badge/FontAwesome-528DD7?style=for-the-badge&logo=fontawesome&logoColor=white"></td>
    <td><img src="https://img.shields.io/badge/Toastify-FF6C37?style=for-the-badge&logo=react&logoColor=white"></td>
  </tr>
</table>

---
Installation et mise en route
:test_tube: <br>

Prérequis
Node.js : Assurez-vous d'avoir Node.js installé (version LTS recommandée).
Git : Installez Git (téléchargement ici).
---

## **Étapes d'installation**  

### 1. **Cloner le dépôt**  
Clonez le projet depuis le dépôt GitHub :  

```bash
git clone https://github.com/cindybragdon/DUNKtheODDS_projet_session_collecte_interpretation_donnees_FE.git
cd DUNKtheODDS_projet_session_collecte_interpretation_donnees_FE
```

### 2. **Installer les dépendances** 
Installez les dépendances nécessaires avec npm :
```bash
npm install
```


### 3. Configurer Bootstrap et Chart.js :
Assurez-vous d'inclure Chart.js dans votre fichier public/index.html :

```html
<script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
```

Ajoutez Bootstrap dans votre projet pour les styles :
```bash
npm i bootstrap
```

Ajoutez Bootstrap dans votre fichier src/index.tsx :
```bash
import 'bootstrap/dist/css/bootstrap.min.css';
```


### 4. Démarrer MongoDB :
Démarrez votre serveur MongoDB local :
```bash
mongod
```

### 5. Lancer l'application :
```bash
npm start
```

Accéder à l'application :
L'interface sera accessible via http://localhost:6969.

Scripts disponibles
:gear:
Voici les scripts disponibles dans le fichier package.json :

npm start : Démarre l'application en mode développement.
npm build : Construit l'application pour la production dans le dossier build.
npm test : Lance les tests unitaires.

## **Tests**  

### Tests Automatisés
Exécuter les tests
Backend :
```bash
cd backend
npm test
```

Frontend :
```bash
cd ../frontend
npm test
```

Complément
Le backend complet est disponible ici :
👉 Backend - DUNKtheODDS

[🔝 Retour en haut](#haut-de-page)

