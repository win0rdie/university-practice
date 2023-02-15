import { fetchTutors } from 'api/tutorsApi/tutorsApi';
import { useEffect, useState } from 'react';

export default function useTutors() {
  const [tutors, setTutors] = useState([]);

  useEffect(() => {
    fetchTutors().then(({ data: tutors }) => {
      localStorage.setItem('tutors', JSON.stringify(tutors));
      const tutorFromLS = JSON.parse(localStorage.getItem('tutors'));

      tutorFromLS ? setTutors(tutorFromLS) : setTutors([]);
    });
  }, []);

  return [tutors, setTutors];
}
