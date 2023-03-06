import axios from 'axios';
import { Suspense, useEffect, useState } from 'react';
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import { Main, Sidebar } from '../components';
import { useTutors, useCities, useDepartments } from 'hooks';
import { createCity, deleteCity, updateCity } from 'api/citiesApi/ciitesApi';
import {
  createDepartment,
  deleteDepartment,
  updateDepartment,
} from 'api/departmentsApi/departmentsApi';
import { createTutor, deleteTutor } from 'api/tutorsApi/tutorsApi';
import { DepartmentsPages, NotFound, UniversityPages } from 'pages';
import DepartmentDetails from 'pages/Departments/DepartmentsDetails/DepartmentDetails';
import DepartmentsDescription from 'pages/Departments/DepartmentsDetails/DepartmentsDescription';
import DepartmentsHistory from 'pages/Departments/DepartmentsDetails/DepartmentsHistory';

const BASE_URL = 'https://63e271093e12b 193763ffead.mockapi.io';

axios.defaults.baseURL = BASE_URL;

function App() {
  const [tutors, setTutors] = useTutors();
  const [cities, setCities] = useCities();
  const [departments, setDepartments] = useDepartments();
  const [showForm, setShowForm] = useState(null);

  const { pathname } = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (pathname === '/') {
      navigate('university');
    }
  }, [navigate, pathname]);

  const addTutor = tutor => {
    createTutor(tutor).then(({ data }) => {
      setTutors([...tutors, data]);
      setShowForm(null);
    });
  };

  const handleDeleteTutor = id => {
    deleteTutor(id).then(res => {
      const deletedId = res.data.id;
      const renamedTutors = tutors.filter(({ id }) => {
        return deletedId !== id;
      });
      setTutors(renamedTutors);
    });
  };

  const onEdit = () => {
    console.log('edit');
  };

  const onDelete = () => {
    console.log('delete');
  };

  const handleShowForm = formName => {
    setShowForm(showForm === formName ? null : formName);
  };

  const addCity = name => {
    if (cities.some(city => city.text.toLowerCase() === name.toLowerCase())) {
      alert('City already exists');
      return;
    }
    createCity({ text: name }).then(({ data }) => {
      const newCity = {
        ...data,
        relation: 'cities',
      };
      setCities([...cities, newCity]);
      setShowForm(null);
    });
  };

  const addDepartment = name => {
    if (
      departments.some(
        department => department.text.toLowerCase() === name.toLowerCase()
      )
    ) {
      alert('Department already exists');
      return;
    }
    createDepartment({ name }).then(({ data: { id, name } }) => {
      const newDepartment = {
        id,
        text: name,
        relation: 'departments',
      };
      setDepartments([...departments, newDepartment]);
      setShowForm(null);
    });
  };

  const handleDeleteCard = (id, relation) => {
    if (relation === 'cities') {
      deleteCity(id).then(res => {
        const resId = res.data.id;
        const newCitiesArray = cities.filter(el => el.id !== resId);
        setCities(newCitiesArray);
      });
    } else {
      deleteDepartment(id).then(res => {
        const resId = res.data.id;
        const newDepartmentsArray = departments.filter(el => el.id !== resId);
        setDepartments(newDepartmentsArray);
      });
    }
  };

  const handleEditCard = data => {
    const { id, relation, name } = data;

    if (relation === 'cities') {
      updateCity(id, { id, text: name }).then(res => {
        const updateId = res.data.id;
        const indexCity = cities.findIndex(item => item.id === updateId);
        setCities(prev => [
          ...prev.slice(0, indexCity),
          { text: res.data.text, relation, id: updateId },
          ...prev.slice(indexCity + 1),
        ]);
      });
    } else {
      updateDepartment(id, { id, name }).then(res => {
        const updateId = res.data.id;

        const indexDepartmnets = departments.findIndex(
          item => item.id === updateId
        );
        setDepartments(prev => [
          ...prev.slice(0, indexDepartmnets),
          { text: res.data.name, id: updateId, relation },
          ...prev.slice(indexDepartmnets + 1),
        ]);
      });
    }
  };

  return (
    <div className="app">
      <Sidebar />

      <Main>
        <Suspense fallback={<span>Loading...</span>}>
          <Routes>
            <Route
              path="/university"
              element={
                <UniversityPages
                  onEdit={onEdit}
                  onDelete={onDelete}
                  showForm={showForm}
                  handleDeleteTutor={handleDeleteTutor}
                  handleShowForm={handleShowForm}
                  handleDeleteCard={handleDeleteCard}
                  handleEditCard={handleEditCard}
                  cities={cities}
                  tutors={tutors}
                  addCity={addCity}
                  addTutor={addTutor}
                />
              }
            />
            <Route path="/departments">
              <Route
                index
                element={
                  <DepartmentsPages
                    departments={departments}
                    handleDeleteCard={handleDeleteCard}
                    handleEditCard={handleEditCard}
                    showForm={showForm}
                    addDepartment={addDepartment}
                    handleShowForm={handleShowForm}
                  />
                }
              />
              <Route
                path=":departmentId"
                element={<DepartmentDetails departments={departments} />}
              >
                <Route
                  path="description"
                  element={<DepartmentsDescription />}
                />
                <Route path="history" element={<DepartmentsHistory />} />
              </Route>
            </Route>
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </Main>
    </div>
  );
}

export default App;
