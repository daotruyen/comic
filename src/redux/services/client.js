import axios from 'axios';

import { Constants } from '../../config/constants';
import ApiConfig, { BASE_URL } from '../../config/api-config';
import { getItem, saveItem } from '../../utils/LocalStorageService';
import NavigationService from '../../navigation/NavigationService';
import { get } from 'lodash';

export const request = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
    'lang': "en",
  },
  withCredentials: true,
  timeout: 15000,
});

// Add a request interceptor
request.interceptors.request.use(
  async (config) => {
    const access_token = await getItem(Constants.ACCESS_TOKEN);
    if (access_token)
      config.headers['Authorization'] = `Bearer ${access_token}`;
    return config;
  },
  (error) => {
    Promise.reject(error);
  },
);

// Add a response interceptor
request.interceptors.response.use(
  (response) => {
    return response;
  },
  async function (error) {
    console.log('err_response_interceptor_account', error.response);
    const originalRequest = error.response.config;
    // refresh token expired
    if (
      error.response.status === 401 &&
      originalRequest.url === `${ApiConfig.NEW_ACCESS_TOKEN}`
    ) {
      NavigationService.navigate('Dashboard', { reset: true })
      // console.log('111111');
      return Promise.reject(error);
    }

    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      const refreshToken = await getItem(Constants.REFRESH_TOKEN);
      const oldAccessToken = await getItem(Constants.ACCESS_TOKEN);
      const userId = await getItem(Constants.USER_ID);
      // console.log('3333333', refreshToken);
      // console.log('3333331', oldAccessToken);
      // console.log('3333332', userId);
      return axios({
        method: 'POST',
        url: `${BASE_URL}${ApiConfig.NEW_ACCESS_TOKEN}`,
        headers: {
          Authorization: `Bearer ${oldAccessToken}`
        },
        data: {
          user_id: userId,
          refresh_token: refreshToken,
          old_token: oldAccessToken
        }
      }).then(res => {
        console.log('res', res);
        if (get(res, 'data.code', 0) === 200) {
          saveItem(Constants.ACCESS_TOKEN, get(res, "data.data.token.access_token"));
          saveItem(Constants.REFRESH_TOKEN, get(res, "data.data.refresh_token"));
          request.defaults.headers.common["Authorization"] = `Bearer ${get(res, "data.data.token.access_token")}`;
          return request(originalRequest);
        } else {
          saveItem(Constants.ACCESS_TOKEN, null);
          saveItem(Constants.REFRESH_TOKEN, null);
          saveItem(Constants.USER_ID, null);
          NavigationService.navigate('Dashboard', { reset: true })
        }
      }).catch(error => {
        console.log('la sao ta', error);
        if (get(error, 'response.data.msg', '') === 'RefreshToken is expired') {
          NavigationService.navigate('Dashboard', { reset: true })
        } else {
          return Promise.reject(error);
        }
      })
    }
    return Promise.reject(error);
  },
);

const apiClient = {
  get: (url, data) => {
    console.log('url get: ', url);
    return request({
      // baseURL: baseURL,
      method: 'get',
      url: url,
      params: data
    })
      .then((response) => {
        return response.data;
      })
      .catch((err) => {
        throw err;
      });
  },
  post: (url, data) => {
    // console.log('post ', {url}, {data});
    return request({
      // baseURL: baseURL,
      method: 'post',
      url: url,
      data: data,
    })
      .then((response) => {
        return response.data;
      })
      .catch((err) => {
        throw err;
      });
  },
  patch: (url, data) => {
    console.log('patch ', { url }, { data });
    return request({
      // baseURL: baseURL,
      method: 'patch',
      url: url,
      data: data,
    })
      .then((response) => {
        return response.data;
      })
      .catch((err) => {
        throw err;
      });
  },
  delete: (url, data) => {
    return request({
      // baseURL: baseURL,
      method: 'delete',
      url: url,
      data: data,
    })
      .then((response) => {
        return response.data;
      })
      .catch((err) => {
        throw err;
      });
  },
  put: (url, data) => {
    return request({
      // baseURL: baseURL,
      method: 'put',
      url: url,
      data: data,
    })
      .then((response) => {
        return response.data;
      })
      .catch((err) => {
        throw err;
      });
  },
};

export { apiClient };
