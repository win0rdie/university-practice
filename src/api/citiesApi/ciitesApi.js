import {
  URL,
  deleteData,
  fetchData,
  postData,
  updateData,
} from 'api/defaultApi';

export function fetchCities() {
  return fetchData(URL.CITIES);
}

export function createCity(data) {
  return postData(URL.CITIES, data);
}

export function deleteCity(id) {
  return deleteData(`${URL.CITIES}/${id}`);
}

export function updateCity(id, data) {
  return updateData(`${URL.CITIES}/${id}`, data);
}
