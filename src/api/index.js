import { directions, filters } from './mocks'

const API = {
  getDirection: () => Promise.resolve(directions),
  getFilters: () => Promise.resolve(filters),
};

export default API;