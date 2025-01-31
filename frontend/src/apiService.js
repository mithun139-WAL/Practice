import axios from 'axios';

export const getUsers = async () => {
  try {
    const response = await axios.get('/mongo-users');
    return response.data;
  } catch (error) {
    console.error('Error fetching users:', error);
    throw error;
  }
};

export const addUser = async (name, email) => {
  try {
    const response = await axios.post('/mongo-users', { name, email });
    return response.data;
  } catch (error) {
    console.error('Error adding user:', error);
    throw error;
  }
};
