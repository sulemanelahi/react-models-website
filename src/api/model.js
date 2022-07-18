import axios from 'axios';
import { api } from '../config';

export const create = async (data) => {
  return await axios.post(api, data);
};

export const read = async () => {
  return await axios.get(api);
};
