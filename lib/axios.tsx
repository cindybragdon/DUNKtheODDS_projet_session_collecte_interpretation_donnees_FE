import axios from 'axios';

export const fetchAllTeamsScores = async () => {
  try {
    const response = await axios.get(`http://localhost:3000/teamScores`);
    console.log(response.data); // Affiche la liste des scores d'équipe
  } catch (error) {
    console.error('Erreur lors de la récupération des scores :', error);
  }
};

export const fetchAllPoints = async () => {
    try {
      const response = await axios.get(`http://localhost:3000/teamScores`);
      console.log(response.data); // Affiche la liste de tous les points des équipes
    } catch (error) {
      console.error('Erreur lors de la récupération des points :', error);
    }
  };

  export const login = async (credentials) => {
    try {
      const response = await axios.post(`http://localhost:3000/users/login`, credentials);
      console.log(response.data);
    } catch (error) {
      console.error('Erreur lors du login :', error);
    }
  };
  
  export const signin = async (userData) => {
    try {
      const response = await axios.post(`http://localhost:3000/users/signIn`, userData);
      console.log(response.data);
    } catch (error) {
      console.error('Erreur lors du signin :', error);
    }
  };

  export const updateUser = async (id, updateData) => {
    try {
      const response = await axios.put(`http://localhost:3000/users/${id}`, updateData);
      console.log(response.data);
    } catch (error) {
      console.error('Erreur lors de la modification dun utilisateur :', error);
    }
  }

  export const deleteUser = async (id) => {
    try {
      const response = await axios.delete(`http://localhost:3000/users/${id}`);
      console.log(response.data); // supression d'un user
    } catch (error) {
      console.error('Erreur lors de la supression dun user :', error);
    }
  };