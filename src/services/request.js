import axios from 'axios';
import _ from 'lodash';
import { API_URLS } from './constants';
import TokenStorageService from './tokenService';
import * as RootNavigation from '../navigation/RootNavigtaion';
import { getItemFromStorage } from '../utils/storage';
import { UserContext } from '../context/UserContext';
import { useContext } from 'react';

// const LocalURL = 'http://192.168.88.196:4300';
// const LocalCacheURL = 'http://192.168.88.196:4303';

// export const BASE_URL =
//   process.env.NODE_ENV === 'development' ? LocalURL : LocalURL;

// export const CACHE_BASE_URL =
//   process.env.NODE_ENV === 'development' ? CACHE_BASE_URL : CACHE_BASE_URL;
const _tokenStorageService = TokenStorageService.getService();

const instance = axios.create({
  // baseURL: BASE_URL,
  timeout: 40000,
});

// Add a request interceptor
instance.interceptors.request.use(
  async config => {
    // const token = await _tokenStorageService.getAccessToken();
    // console.log("🚀 ~ file: request.js ~ line 29 ~ token", token)
    // if (token) {
    //   config.headers['Authorization'] = 'Bearer ' + token;
    // }
    return config;
  },
  error => {
    Promise.reject(error);
  },
);

// Add a response interceptor
instance.interceptors.response.use(
  async response => {
    return response;
  },
  async error => {
    const originalRequest = error.config;

    if (error.response && error.response.status >= 500) {
      return Promise.reject(error);
    }

    if (
      error.response &&
      error.response.status === 401
      // &&
      // originalRequest.url === '/auth/token/refresh/'
    ) {
      // RootNavigation.navigate('Redirect');
      return Promise.reject(error);
    }

    if (
      error.response &&
      error.response.status === 401 &&
      (originalRequest.url === '/api/token' ||
        originalRequest.url === '/auth/register/' ||
        originalRequest.url === '/auth/request-reset-email/' ||
        originalRequest.url === '/auth/password-reset-complete')
    ) {
      return Promise.reject(error);
    }

    // else if (
    //   error.response &&
    //   error.response.status === 401
    //   &&
    //   !originalRequest._retry
    // ) {
    //   originalRequest._retry = true;

    //   return instance
    //     .post('/auth/token/refresh/', {
    //       refresh: await _tokenStorageService.getRefreshToken(),
    //     })
    //     .then(async res => {
    //       if (res.status >= 200 && res.status <= 400) {
    //         console.log('res', res);
    //         await _tokenStorageService.setToken(res.data);
    //         console.log('true', originalRequest.headers);
    //         originalRequest.headers['Authorization'] =
    //           'Bearer ' + (await _tokenStorageService.getAccessToken());

    //         return instance(originalRequest);
    //       }
    //     })
    //     .catch(err => {
    //       console.log('refresh token err', err);
    //       return Promise.reject(error);
    //     });
    // }
    else {
      return Promise.reject(error);
    }
  },
);

// get the headers
export const getApiRequestHeader = async url => {

  if (
    url.includes('/api/token') ||
    url.includes('/api/ForgetPasswordInitial') ||
    url.includes('/api/ForgetPassword')
  ) {
    return {
      // make OR condition for profile api pic
      'Content-Type':
        'application/json' || 'charset=utf-8' || 'multipart/form-data',
      Accept: 'application/json',
    };
  } else {
    return {
      // make OR condition for profile api pic
      'Content-Type':
        'application/json' || 'charset=utf-8' || 'multipart/form-data',
      Accept: 'application/json',
    };
  }
};

// update headers if it is not found
export const updateHeaders = async url => {
  // const header = await getApiRequestHeader(url);
  instance.defaults.headers = { 
    
      'Cookie': '_secure_admin_session_id=068035f3cf909006dbaead047a4e21; _secure_admin_session_id_csrf=0680135f03cf909006dbaead047a4e21',

        'Authorization': 'Basic YjMzM2U5NWViMTk2ODYxMjIwMWFiYzU1ZDQ1NGE4Nzk6MTY4NDViYjkyNTBjOTkwYWZmMTkwZTRiNTA1MDNlYTM='
    
  };
};

const request = async ({ method, url, data, headers, params }) => {
  if (headers === undefined) {
    await updateHeaders(url);
  }

  const promise = instance[method](url, data, { params });

  let response;
  try {
    response = await promise;
  } catch (error) {
    if (error.response) {
      throw Object.assign({}, new Error('Error.'), {
        response: error.response,
      });
    }
    throw Object.assign({}, new Error('Error.'), {
      response: { data: { message: error.toString() } },
    });
  }

  if (response) return response.data;
};

// independent Request without any or base url custom headers
export const independentRequest = async (url, method, data, headers) => {
  const promise = axios[method](url, data, headers);

  let response;
  try {
    response = await promise;
  } catch (error) {
    throw error.response;
  }
  const payload = response;
  return payload;
};

// get method
export const get = async (url, config, params) => {
  /*   for (var key in params) {
    url = url + '/' + params[key];
  } */
  return request({ method: 'get', url, data: {}, ...config });
};

// del method
export const del = async (url, params, config) => {
  return request({ method: 'delete', url, data: { data: params }, ...config });
};

// post method
export const post = async (url, data, config) => {
  return request({ method: 'post', url, data, ...config });
};

// put method

export const put = async (url, data, config) => {
  return request({ method: 'put', url, data, ...config });
};

// patch method

export const patch = async (url, data, config) => {
  return request({ method: 'patch', url, data, ...config });
};

// export const get = async (url, params, config) => {
//   if (params) url = `${url}?${params}`;
//   return request({method: 'get', url, data: {}, ...config});
// };

// // del method
// export const del = async (url, params, config) => {
//   return request({method: 'delete', url, data: {data: params}, ...config});
// };

// // post method
// export const post = async (url, data, config) => {
//   return request({method: 'post', url, data, ...config});
// };

// // put method

// export const put = async (url, data, config) => {
//   return request({method: 'put', url, data, ...config});
// };

// // patch method

// export const patch = async (url, data, config) => {
//   return request({method: 'patch', url, data, ...config});
// };
