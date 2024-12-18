import axios from 'axios';

const apiUrl = process.env.REACT_APP_BACKEND_URL;

export const fetchAllTeamsInfos = async () => {
  try {
    const response = await axios.get(`${apiUrl}:3000/teamInfos`);
    console.log(response.data); // Affiche la liste des scores d'équipe
    return response.data
  } catch (error) {
    console.error('Erreur lors de la récupération des scores :', error);
  }
};

export const fetchAllPoints = async () => {
  try {
    const response = await axios.get(`${apiUrl}:3000/points`);
    console.log("Réponse brute de l'API :", response);
    console.log("Données retournées par l'API :", response.data);
    return response.data;
  } catch (error) {
    console.error("Erreur lors de la récupération des points :", error);
    throw error; 
  }
};


export const fetchAllGames = async () => {
  try {
    const response = await axios.get(`${apiUrl}:3000/games`);
    console.log("Réponse brute de l'API :", response);
    console.log("Données retournées par l'API :", response.data);
    return response.data;
  } catch (error) {
    console.error("Erreur lors de la récupération des games :", error);
    throw error; 
  }
};

  export const login = async (email:string, password:string) => {
    try {
      const response = await axios.post(`${apiUrl}:3000/users/login`, {email, password});
      console.log(response.data);
      if(response.status !== 200) {
        throw Error;
      }

      
      localStorage.setItem('user', JSON.stringify(response.data.user));
      localStorage.setItem('token', response.data.token);
      console.log(response.data)
      return response.data;
    } catch (error) {
      console.error('Erreur lors du login :', error);
    }
  };
  
  export const signin = async (userData:any) => {
    try {
      if(userData.role === "Admin") {
        const token = localStorage.getItem('token');

        if (!token) {
          throw new Error('No token found');
        }
        const response = await axios.post(`${apiUrl}:3000/users/signIn`, userData,
          {headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        return response.data;
      }
      const response = await axios.post(`${apiUrl}:3000/users/signIn`, userData);
      return response.data;
    } catch (error) {
      console.error('Erreur lors du signin :', error); 
    }
  };

  export const updateUser = async (id:string, updateData:Object) => {
    try {
            
      const token = localStorage.getItem('token');

      if (!token) {
        throw new Error('No token found');
      }
      const response = await axios.put(`${apiUrl}:3000/users/${id}`, updateData,
        {headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log(response.data);
      if (response.status === 200) {
        return response.data;
      }

    } catch (error) {
      console.error('Erreur lors de la modification dun utilisateur :', error);
    }
  }

  export const deleteUser = async (id:string) => {
    try {

      
      const token = localStorage.getItem('token');

      if (!token) {
        throw new Error('No token found');
      }

      const response = await axios.delete(`${apiUrl}:3000/users/${id}`,
        {headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log(response.data); // supression d'un user
      console.log(response.data);
      if (response.status === 204) {
        return response.status;
      }
    } catch (error) {
      console.error('Erreur lors de la supression dun user :', error);
    }
  };

  export const getAllUsers = async () => {
    try {

      const token = localStorage.getItem('token');

      if (!token) {
        throw new Error('No token found');
      }

      const response = await axios.get(`${apiUrl}:3000/users/`,
        {headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log(response.data); // affiche tous les users
      return response.data;
    } catch (error) {
      console.error('Erreur lors du fetch des users :', error);
    }
  };