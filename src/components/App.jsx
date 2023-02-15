import axios from 'axios';
import { useState } from 'react';

import {
  AddItemForm,
  Button,
  GeneralCardList,
  Main,
  Paper,
  Section,
  Sidebar,
  TutorForm,
  TutorsList,
  UniversityCard,
} from '../components';
import FORMS from 'constants/form';

import universityData from '../constants/universityData';

import TutorIcon from '../assets/images/teachers-emoji.png';
import CityIcon from '../assets/images/cities.svg';
import DepartmentIcon from '../assets/images/faculties-emoji.png';
import AddIcon from '../assets/images/add.svg';

import { useTutors, useCities, useDepartments } from 'hooks';

import { createCity, deleteCity, updateCity } from 'api/citiesApi/ciitesApi';
import {
  createDepartment,
  deleteDepartment,
  updateDepartment,
} from 'api/departmentsApi/departmentsApi';
import { createTutor, deleteTutor } from 'api/tutorsApi/tutorsApi';

const BASE_URL = 'https://63e271093e12b193763ffead.mockapi.io';

axios.defaults.baseURL = BASE_URL;

export default function App() {
  const [tutors, setTutors] = useTutors();
  const [cities, setCities] = useCities();
  const [departments, setDepartments] = useDepartments();

  const [showForm, setShowForm] = useState(null);

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
        <Section title="Information about university" isRightPosition isColumn>
          <UniversityCard
            name={universityData.name}
            onEdit={onEdit}
            onDelete={onDelete}
          ></UniversityCard>
          <Paper>
            <span>{universityData.description}</span>
          </Paper>
        </Section>

        <Section title="Tutors" image={TutorIcon}>
          <TutorsList tutors={tutors} deleteTutor={handleDeleteTutor} />
          {showForm === FORMS.TUTOR_FORM && <TutorForm addTutor={addTutor} />}
          <Button
            text={showForm === FORMS.TUTOR_FORM ? 'Close form' : 'Add tutor'}
            image={AddIcon}
            action={() => handleShowForm(FORMS.TUTOR_FORM)}
          />
        </Section>

        <Section title="Cities" image={CityIcon}>
          <GeneralCardList
            listData={cities}
            deleteCard={handleDeleteCard}
            editCard={handleEditCard}
          />
          {showForm === FORMS.CITY_FORM && (
            <AddItemForm
              title="add city"
              placeholder="City"
              onSubmit={addCity}
            />
          )}
          <Button
            text={showForm === FORMS.CITY_FORM ? 'Close form' : 'Add city'}
            image={AddIcon}
            action={() => handleShowForm(FORMS.CITY_FORM)}
          />
        </Section>

        <Section title="Departments" image={DepartmentIcon}>
          <GeneralCardList
            listData={departments}
            deleteCard={handleDeleteCard}
            editCard={handleEditCard}
          />
          {showForm === FORMS.DEPARTMENT_FORM && (
            <AddItemForm
              title="add departments"
              placeholder="Departments"
              onSubmit={addDepartment}
            />
          )}
          <Button
            text={
              showForm === FORMS.DEPARTMENT_FORM
                ? 'Close form'
                : 'Add department'
            }
            image={AddIcon}
            action={() => handleShowForm(FORMS.DEPARTMENT_FORM)}
          />
        </Section>
      </Main>
    </div>
  );
}

// import { Component } from 'react';
// import {
//   AddItemForm,
//   Button,
//   GeneralCardList,
//   Main,
//   Paper,
//   Section,
//   Sidebar,
//   TutorForm,
//   TutorsList,
//   UniversityCard,
// } from '../components';
// import universityData from '../constants/universityData';
// import TutorIcon from '../assets/images/teachers-emoji.png';
// import CityIcon from '../assets/images/cities.svg';
// import DepartmentIcon from '../assets/images/faculties-emoji.png';
// import AddIcon from '../assets/images/add.svg';
// import FORMS from 'constants/form';

// export class App extends Component {
//   state = {
//     tutors: universityData?.tutors ?? [],
//     cities:
//       universityData?.cities.map(city => ({
//         text: city,
//         relation: 'cities',
//       })) ?? [],
//     departments:
//       universityData?.department.map(({ name }) => ({
//         text: name,
//         relation: 'departments',
//       })) ?? [],
//     showForm: null,
//   };
//   addTutor = tutor => {
//     this.setState(({ tutors }) => ({
//       tutors: [...tutors, tutor],
//       showForm: null,
//     }));
//   };

//   deleteTutor = emailInput => {
//     this.setState(({ tutors }) => {
//       console.log([...tutors]);
//       return {
//         tutors: [...tutors].filter(({ email }) => email !== emailInput),
//       };
//     });
//   };

//   onEdit = () => {
//     console.log('edit');
//   };

//   onDelete = () => {
//     console.log('delete');
//   };

//   handleShowForm = formName => {
//     this.setState(prevState => ({
//       showForm: prevState.showForm === formName ? null : formName,
//     }));
//   };

//   handleToogleMenu = () => {
//     console.log('card');
//   };

//   addCity = name => {
//     if (
//       this.state.cities.some(
//         city => city.text.toLowerCase() === name.toLowerCase()
//       )
//     ) {
//       alert('City already exists');
//     } else {
//       const newCity = {
//         text: name,
//         relation: 'cities',
//       };
//       this.setState(prevState => ({
//         cities: [...prevState.cities, newCity],
//         showForm: null,
//       }));
//     }
//   };

//   addDepartment = name => {
//     if (
//       this.state.departments.some(
//         department => department.text.toLowerCase() === name.toLowerCase()
//       )
//     ) {
//       alert('Department already exists');
//     } else {
//       const newDepartment = {
//         text: name,
//         relation: 'departments',
//       };
//       this.setState(prevState => ({
//         departments: [...prevState.departments, newDepartment],
//         showForm: null,
//       }));
//     }
//   };

//   handleDeleteCard = (id, relation) => {
//     this.setState(prevState => ({
//       [relation]: prevState[relation].filter(({ text }) => text !== id),
//     }));
//   };

//   handleEditCard = data => {
//     const { id, relation, name } = data;
//     const elemIndex = this.state[relation].findIndex(item => item.text === id);
//     this.setState(prevState => ({
//       [relation]: [
//         ...prevState[relation].slice(0, elemIndex),
//         { text: name, relation },
//         ...prevState[relation].slice(elemIndex + 1),
//       ],
//     }));
//   };

//   render() {
//     const { tutors, cities, departments, showForm } = this.state;
//     console.log(cities);

//     return (
//       <div className="app">
//         <Sidebar />

//         <Main>
//           <Section
//             title="Information about university"
//             isRightPosition
//             isColumn
//           >
//             <UniversityCard
//               name={universityData.name}
//               onEdit={this.onEdit}
//               onDelete={this.onDelete}
//             ></UniversityCard>
//             <Paper>
//               <span>{universityData.description}</span>
//             </Paper>
//           </Section>

//           <Section title="Tutors" image={TutorIcon}>
//             <TutorsList tutors={tutors} deleteTutor={this.deleteTutor} />
//             {showForm === FORMS.TUTOR_FORM && (
//               <TutorForm addTutor={this.addTutor} />
//             )}
//             <Button
//               text={showForm === FORMS.TUTOR_FORM ? 'Close form' : 'Add tutor'}
//               image={AddIcon}
//               action={() => this.handleShowForm(FORMS.TUTOR_FORM)}
//             />
//           </Section>

//           <Section title="Cities" image={CityIcon}>
//             <GeneralCardList
//               listData={cities}
//               deleteCard={this.handleDeleteCard}
//               editCard={this.handleEditCard}
//             />
//             {showForm === FORMS.CITY_FORM && (
//               <AddItemForm
//                 title="add city"
//                 placeholder="City"
//                 onSubmit={this.addCity}
//               />
//             )}
//             <Button
//               text={showForm === FORMS.CITY_FORM ? 'Close form' : 'Add city'}
//               image={AddIcon}
//               action={() => this.handleShowForm(FORMS.CITY_FORM)}
//             />
//           </Section>

//           <Section title="Departments" image={DepartmentIcon}>
//             <GeneralCardList
//               listData={departments}
//               deleteCard={this.handleDeleteCard}
//               editCard={this.handleEditCard}
//             />
//             {showForm === FORMS.DEPARTMENT_FORM && (
//               <AddItemForm
//                 title="add departments"
//                 placeholder="Departments"
//                 onSubmit={this.addDepartment}
//               />
//             )}
//             <Button
//               text={
//                 showForm === FORMS.DEPARTMENT_FORM
//                   ? 'Close form'
//                   : 'Add department'
//               }
//               image={AddIcon}
//               action={() => this.handleShowForm(FORMS.DEPARTMENT_FORM)}
//             />
//           </Section>
//         </Main>
//       </div>
//     );
//   }
// }
