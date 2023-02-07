import { useState, useEffect } from 'react';
import universityData from '../constants/universityData.json';

export default function useDepartments() {
  const [departments, setDepartments] = useState([]);

  useEffect(() => {
    localStorage.setItem(
      'departments',
      JSON.stringify(
        universityData?.department.map(({ name }) => ({
          text: name,
          relation: 'departments',
        }))
      )
    );

    const departmentFromLS = JSON.parse(localStorage.getItem('departments'));
    departmentFromLS ? setDepartments(departmentFromLS) : setDepartments([]);
  }, []);
  return [departments, setDepartments];
}
