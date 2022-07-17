import axios from 'axios';
import { api } from '../config';

export const create = async (data) => {
  return await axios.post(api, data);
};
