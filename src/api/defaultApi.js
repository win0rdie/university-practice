import axios from 'axios';

const BASE_URL = process.env.REACT_APP_URL;

export const URL = {
  DEPARTMENTS: 'departments',
  CITIES: 'cities',
  TUTORS: 'tutors',
};

const instance = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export function fetchData(url) {
  try {
    return instance.get(`/${url}`);
  } catch (error) {
    return {
      error,
    };
  }
}

export function postData(url, data) {
  try {
    return instance.post(`/${url}`, JSON.stringify(data));
  } catch (error) {
    return { error };
  }
}

export function deleteData(url) {
  try {
    return instance.delete(`/${url}`);
  } catch (error) {
    return { error };
  }
}

export function updateData(url, data) {
  try {
    return instance.put(`/${url}`, data);
  } catch (error) {
    return {
      error,
    };
  }
}
// export  function fetchCity(id) {
//     return fetchData(`${URL.CITIES}/${id}`)
// }
