import { fetchDepartments } from 'api/departmentsApi/departmentsApi';
import { useState, useEffect } from 'react';

export default function useDepartments() {
  const [departments, setDepartments] = useState([]);

  useEffect(() => {
    fetchDepartments().then(({ data: department }) => {
      localStorage.setItem(
        'departments',
        JSON.stringify(
          department.map(({ name, id }) => ({
            text: name,
            id,
            relation: 'departments',
          }))
        )
      );
    });

    const departmentFromLS = JSON.parse(localStorage.getItem('departments'));
    departmentFromLS ? setDepartments(departmentFromLS) : setDepartments([]);
  }, []);
  return [departments, setDepartments];
}
