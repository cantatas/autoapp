import axios from 'axios'

const module = 'api/v1/editor/'

export function getInfoByIdApi(params) {
  return axios.get(`${module}getInfoById`, params);
}