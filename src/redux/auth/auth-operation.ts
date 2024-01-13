import { createAsyncThunk } from '@reduxjs/toolkit';
import axios, { AxiosError } from 'axios';
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

  const getErrorCode = (error: AxiosError, codeToCheck: number) => {
    return error.response && error.response.status === codeToCheck
    // ||
    // (error.response.data?.statusCode === codeToCheck)
  }

export const signUp = createAsyncThunk(
  'auth/signup',
  async (credentials: InPayload, thunkAPI) => {
    try {
      const response = await axios.post('/auth/signup', credentials);
      console.log("signUp", response);
      setAuthHeader(response.data.token);
      console.log("signUp", response.data)
      return response.data;
    } catch (e) {
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
    'auth/login',
    async (credentials: InPayload , thunkAPI) => {
        try {
          const response = await axios.post('/auth/login', credentials);
          setAuthHeader(response.data.token);
            console.log(response)
          return response.data;
        } catch (error) {
          return thunkAPI.rejectWithValue(error);
        }
      },
  );

  //============================================
  // import axios, { AxiosError, InternalAxiosRequestConfig } from 'axios'

  // export const configureAxios = axios.create({
  //   baseURL: 'http://team-chalenge.onrender.com',
  // })
  
  // const getAuthToken = () => {
  //   let tokenJSON = localStorage.getItem('token')
  //   if (tokenJSON === 'undefined') {
  //     localStorage.removeItem('token')
  //     tokenJSON = localStorage.getItem('token')
  //   }
  
  //   const token = tokenJSON ? JSON.parse(tokenJSON) : ''
  //   return token
  // }
  
  // const authInterceptor = (config: InternalAxiosRequestConfig<any>) => {
  //   config.headers['authorization'] = `Bearer ${getAuthToken()}`
  //   return config
  // }
  
  // const getErrorCode = (error: AxiosError, codeToCheck: number) => {
  //   return error.response && error.response.status === codeToCheck
  //   // ||
  //   // (error.response.data?.statusCode === codeToCheck)
  // }
  
  // configureAxios.interceptors.request.use(authInterceptor)
  // configureAxios.interceptors.response.use(
  //   (response) => response,
  //   (error: AxiosError) => {
  //     const isUnauthorizedError = getErrorCode(error, 401)
  //     if (isUnauthorizedError) {
  //       localStorage.removeItem('token')
  //       window.location.href = '/sign-in'
  //     }
  
  //     return Promise.reject(error)
  //   }
  // )
  