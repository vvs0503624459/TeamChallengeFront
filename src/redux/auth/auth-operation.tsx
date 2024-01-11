import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { toast } from 'react-toastify';
axios.defaults.baseURL = 'http://team-chalenge.onrender.com';

const setAuthHeader = (token: string) => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

// const clearAuthHeader = () => {
//   axios.defaults.headers.common.Authorization = '';
// };

// type UserInfo = {
//     firstname: string;
//     lastname: string;
//     phoneNumber: string;
//     email: string;
//     password: string;
//   };

  // Define the SignInPayload type
export type InPayload = {
    firstname: string;
    lastname: string;
    phoneNumber: string;
    email: string;
    password: string;
    username: string;
  };

export const signUp = createAsyncThunk(
  'auth/signup',
  async (credentials: InPayload, thunkAPI) => {
    try {
      const response = await axios.post('/auth/signup', credentials);
      console.log("signUp", response);
      setAuthHeader(response.data.token);
      console.log("signUp", response.data)
      return response.data;
    } catch (error: any) {
      if (error.response.status === 409)  {
        toast.error('User with this email is already registered');
      } else {
        return thunkAPI.rejectWithValue(error.message);
      }
    }
  },
);

// export const signIn = createAsyncThunk<UserInfo, undefined>(
//     'auth/signin',
//     async (credentials, thunkAPI) => {
//       try {
//         const response = await axios.post('/auth/signin', credentials);
//         setAuthHeader(response.data.token);
  
//         return response.data;
//       } catch (error) {
//         return thunkAPI.rejectWithValue(error);
//       }
//     },
//   );

  // Define your signIn action
  export const signIn = createAsyncThunk(
    'auth/signIn',
    async (credentials: InPayload , thunkAPI) => {
        try {
          const response = await axios.post('/auth/login', credentials);
          setAuthHeader(response.data.token);
            console.log(response.data)
          return response.data;
        } catch (error) {
          return thunkAPI.rejectWithValue(error);
        }
      },
  );