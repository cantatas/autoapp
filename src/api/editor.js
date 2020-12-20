import axios from 'axios'

// const module = '/api/v1/editor/'
const module = 'http://13.229.242.5:7001/api/v1/editor/'

export function getInfoByIdApi(params) {
  return axios.get(`${module}getInfoById`, {params});
}