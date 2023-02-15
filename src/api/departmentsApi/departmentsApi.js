import {
  URL,
  deleteData,
  fetchData,
  postData,
  updateData,
} from 'api/defaultApi';

export function fetchDepartments() {
  return fetchData(URL.DEPARTMENTS);
}

export function createDepartment(data) {
  return postData(URL.DEPARTMENTS, data);
}

export function deleteDepartment(id) {
  return deleteData(`${URL.DEPARTMENTS}/${id}`);
}

export function updateDepartment(id, data) {
  return updateData(`${URL.DEPARTMENTS}/${id}`, data);
}
