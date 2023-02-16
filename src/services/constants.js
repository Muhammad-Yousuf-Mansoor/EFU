import { get, post } from './request';
const ApiKey='b333e95eb1968612201abc55d454a879'
const ApiPassword = '16845bb9250c990aff190e4b50503ea3';
const storeName = 'khazanay';
const api_version = '2022-01';

export const BASE_URL =`https://${ApiKey}:${ApiPassword}@${storeName}.myshopify.com/admin/api/${api_version}`

export const API_URLS = {
  login: `${BASE_URL}/api/token`,

  getProduct: 'https://b333e95eb1968612201abc55d454a879:16845bb9250c990aff190e4b50503ea3@khazanay.myshopify.com/admin/api/2022-01/products.json',
  // getAllTimeoffTypesToApplyTimeOff: (EmploymentStageId, genderID) => `${CACHE_BASE_URL}/Attendance/GetAllTimeoffTypesToApplyTimeOff/${EmploymentStageId}/${genderID}`,
};

const login = data => post(API_URLS.login, data);
const getProduct = () => get(API_URLS.getProduct);
const GetHeaderDetails = data => get(API_URLS.GetHeaderDetails + data);

const API_CALLS = {
  login,
  GetHeaderDetails,
  getProduct
};

export default API_CALLS;
