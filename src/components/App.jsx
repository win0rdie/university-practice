import { Component } from 'react';
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
import universityData from '../constants/universityData';
import TutorIcon from '../assets/images/teachers-emoji.png';
import CityIcon from '../assets/images/cities.svg';
import DepartmentIcon from '../assets/images/faculties-emoji.png';
import AddIcon from '../assets/images/add.svg';
import FORMS from 'constants/form';

export class App extends Component {
  state = {
    tutors: universityData?.tutors ?? [],
    cities:
      universityData?.cities.map(city => ({
        text: city,
        relation: 'cities',
      })) ?? [],
    departments:
      universityData?.department.map(({ name }) => ({
        text: name,
        relation: 'departments',
      })) ?? [],
    showForm: null,
  };

  addTutor = tutor => {
    this.setState(({ tutors }) => ({
      tutors: [...tutors, tutor],
      showForm: null,
    }));
  };

  deleteTutor = emailInput => {
    this.setState(({ tutors }) => {
      console.log([...tutors]);
      return {
        tutors: [...tutors].filter(({ email }) => email !== emailInput),
      };
    });
  };

  onEdit = () => {
    console.log('edit');
  };

  onDelete = () => {
    console.log('delete');
  };

  handleShowForm = formName => {
    this.setState(prevState => ({
      showForm: prevState.showForm === formName ? null : formName,
    }));
  };

  handleToogleMenu = () => {
    console.log('card');
  };

  addCity = name => {
    if (
      this.state.cities.some(
        city => city.text.toLowerCase() === name.toLowerCase()
      )
    ) {
      alert('City already exists');
    } else {
      const newCity = {
        text: name,
        relation: 'cities',
      };
      this.setState(prevState => ({
        cities: [...prevState.cities, newCity],
        showForm: null,
      }));
    }
  };

  addDepartment = name => {
    if (
      this.state.departments.some(
        department => department.text.toLowerCase() === name.toLowerCase()
      )
    ) {
      alert('Department already exists');
    }
    // else if (
    //   this.state.departments.some(department => department.text === '')
    // ) {
    //   alert('Input is empty');
    // }
    else {
      const newDepartment = {
        text: name,
        relation: 'departments',
      };
      this.setState(prevState => ({
        departments: [...prevState.departments, newDepartment],
        showForm: null,
      }));
    }
  };

  handleDeleteCard = (id, relation) => {
    this.setState(prevState => ({
      [relation]: prevState[relation].filter(({ text }) => text !== id),
    }));
  };

  handleEditCard = data => {
    const { id, relation, name } = data;
    const elemIndex = this.state[relation].findIndex(item => item.text === id);
    this.setState(prevState => ({
      [relation]: [
        ...prevState[relation].slice(0, elemIndex),
        { text: name, relation },
        ...prevState[relation].slice(elemIndex + 1),
      ],
    }));
  };

  render() {
    const { tutors, cities, departments, showForm } = this.state;
    console.log(cities);

    return (
      <div className="app">
        <Sidebar />

        <Main>
          <Section
            title="Information about university"
            isRightPosition
            isColumn
          >
            <UniversityCard
              name={universityData.name}
              onEdit={this.onEdit}
              onDelete={this.onDelete}
            ></UniversityCard>
            <Paper>
              <span>{universityData.description}</span>
            </Paper>
          </Section>

          <Section title="Tutors" image={TutorIcon}>
            <TutorsList tutors={tutors} deleteTutor={this.deleteTutor} />
            {showForm === FORMS.TUTOR_FORM && (
              <TutorForm addTutor={this.addTutor} />
            )}
            <Button
              text={showForm === FORMS.TUTOR_FORM ? 'Close form' : 'Add tutor'}
              image={AddIcon}
              action={() => this.handleShowForm(FORMS.TUTOR_FORM)}
            />
          </Section>

          <Section title="Cities" image={CityIcon}>
            <GeneralCardList
              listData={cities}
              deleteCard={this.handleDeleteCard}
              editCard={this.handleEditCard}
            />
            {showForm === FORMS.CITY_FORM && (
              <AddItemForm
                title="add city"
                placeholder="City"
                onSubmit={this.addCity}
              />
            )}
            <Button
              text={showForm === FORMS.CITY_FORM ? 'Close form' : 'Add city'}
              image={AddIcon}
              action={() => this.handleShowForm(FORMS.CITY_FORM)}
            />
          </Section>

          <Section title="Departments" image={DepartmentIcon}>
            <GeneralCardList
              listData={departments}
              deleteCard={this.handleDeleteCard}
              editCard={this.handleEditCard}
            />
            {showForm === FORMS.DEPARTMENT_FORM && (
              <AddItemForm
                title="add departments"
                placeholder="Departments"
                onSubmit={this.addDepartment}
              />
            )}
            <Button
              text={
                showForm === FORMS.DEPARTMENT_FORM
                  ? 'Close form'
                  : 'Add department'
              }
              image={AddIcon}
              action={() => this.handleShowForm(FORMS.DEPARTMENT_FORM)}
            />
          </Section>
        </Main>
      </div>
    );
  }
}
