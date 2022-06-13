import {AxiosResponse} from 'axios';
import AxiosInstance from './AxiosInstance';
import {CountryLeagueResponse} from '../type/index';

AxiosInstance.interceptors.response.use(async response => {
  try{
      return response;
  }
  catch(err){
      console.log(err);
      return Promise.reject(err);
  }
})

const responseBody = <T>(response: AxiosResponse<T>) => response.data;

const requests = {
    get: <T>(url:string) => AxiosInstance.get<T>(url).then(responseBody),
}

const Countries = {
  list: () => requests.get<CountryLeagueResponse>('/countries')
}

const agent = {
  Countries
}

export default agent