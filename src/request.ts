/**
 * HTTP Request.
 */
import axios from 'axios';

const http = axios.create();

http.interceptors.request.use((req) => {
    // token
  return req;
});

http.interceptors.response.use(
  (conf) => conf,
  (err) => {
    // error
    return Promise.reject(err);
  },
);

// GET
export const get = async (url: string, params?: any, config?: any) => {
  return http
    .get(url, {
      params,
      ...config,
    })
    .then((res) => res.data)
    .catch((err) => {
      throw new Error(err);
    });
};

// POST
export const post = async (url: string, data?: any, config?: any) => {
  return http
    .post(url, data, {
      ...config,
    })
    .then((res) => res.data)
    .catch((err) => {
      throw new Error(err);
    });
};

// PUT
export const put = async (url: string, data?: any, config?: any) => {
  return http
    .put(url, data, {
      ...config,
    })
    .then((res) => res.data)
    .catch((err) => {
      throw new Error(err);
    });
};

// DEL
export const del = async (url: string, config?: any) => {
  return http
    .delete(url, {
      ...config,
    })
    .then((res) => res.data)
    .catch((err) => {
      throw new Error(err);
    });
};
