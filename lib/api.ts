import axios, { AxiosRequestConfig } from "axios";

export const API_BASE_URL = "https://api-folders.d1yiogbkjrld4f.amplifyapp.com";

export const API_ENDPOINTS = {
  SEND_EMAIL: "/api/sendEmail",
  ZOHO: "/api/zoho",
} as const;

export const getApiUrl = (endpoint: string): string => {
  return `${API_BASE_URL}${endpoint}`;
};

export const apiPost = async <T = any>(
  endpoint: string,
  data?: any,
  config?: AxiosRequestConfig
) => {
  const url = getApiUrl(endpoint);
  return axios.post<T>(url, data, config);
};

export const apiFetch = async (
  endpoint: string,
  options?: RequestInit
): Promise<Response> => {
  const url = getApiUrl(endpoint);
  return fetch(url, options);
};