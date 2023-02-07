import axios from 'axios';
import { useEffect, useState } from 'react';

const BASE_URL = 'https://63e271093e12b193763ffead.mockapi.io';

axios.defaults.baseURL = BASE_URL;

export default function useTutors() {
  const [tutors, setTutors] = useState([]);

  useEffect(() => {
    axios.get('/tutors').then(({ data: tutors }) => {
      localStorage.setItem('tutors', JSON.stringify(tutors));
      const tutorFromLS = JSON.parse(localStorage.getItem('tutors'));

      tutorFromLS ? setTutors(tutorFromLS) : setTutors([]);
    });
  }, []);

  return [tutors, setTutors];
}
