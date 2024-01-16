import { createAsyncThunk } from '@reduxjs/toolkit';
import axios, { AxiosError } from 'axios';
import { toast } from 'react-toastify';
axios.defaults.baseURL = 'http://team-chalenge.onrender.com';


import { AuthUserState } from '../types/initialEntity';

const setAuthHeader = (token: string) => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

// const clearAuthHeader = () => {
//   axios.defaults.headers.common.Authorization = '';
// };

  const getErrorCode = (error: AxiosError, codeToCheck: number) => {
    return error.response && error.response.status === codeToCheck
    // ||
    // (error.response.data?.statusCode === codeToCheck)
  }

export const signUp = createAsyncThunk(
  'auth/signup',
  async (credentials: AuthUserState, thunkAPI) => {
    try {
      const response = await axios.post('/auth/signup', credentials);
      setAuthHeader(response.data.token);
      console.log("signUp", response.data)
      return response.data;
      
    }  catch (e) {
      const error = e as AxiosError;
      const isUnauthorizedError = getErrorCode(error, 409)
      if (isUnauthorizedError) {
        toast.error('User with this email is already registered');
      } else {
          return thunkAPI.rejectWithValue(error);
        }
  
      // if (error.response.status === 409)  {

      //   toast.error('User with this email is already registered');
      // } else {
      //   return thunkAPI.rejectWithValue(error.message);
      // }
    }
  },
);

  // Define your signIn action
  export const signIn = createAsyncThunk(
    'auth/login',
    async (credentials: AuthUserState, thunkAPI) => {
        try {
          const response = await axios.post('/auth/login', credentials);
          setAuthHeader(response.data.token);
            console.log("signIn", response.data)
            toast.success('Login successfully');
          return response.data;
        } catch (error) {
          toast.error('Something went wrong. Try again');
          return thunkAPI.rejectWithValue(error);
        }
      },
  );

  export const currentUser = createAsyncThunk(
    'auth/currentUser',
    async (_, thunkAPI) => {
      // const { token } = thunkAPI.getState().auth;
  
      // if (!token) {
      //   return thunkAPI.rejectWithValue('Not valid token');
      // }
  
      // setAuthHeader(token);
        try {
          const response = await axios.post('/auth/login');
            console.log("currentUser", response.data)
          return response.data;
        } catch (error) {
          return thunkAPI.rejectWithValue(error);
        }
      },
  );
  