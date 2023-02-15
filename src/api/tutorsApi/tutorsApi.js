import { URL, deleteData, fetchData, postData } from 'api/defaultApi';

export function fetchTutors() {
  return fetchData(URL.TUTORS);
}

export function createTutor(data) {
  return postData(URL.TUTORS, data);
}
export function deleteTutor(id) {
  return deleteData(`${URL.TUTORS}/${id}`);
}
