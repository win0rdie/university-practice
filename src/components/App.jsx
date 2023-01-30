import {
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
import { Component } from 'react';

export class App extends Component {
  state = {
    tutors: universityData?.tutors ?? [],
    cities: universityData.cities.map(city => ({ text: city })) ?? [],
    departments:
      universityData.department.map(({ name }) => ({ text: name })) ?? [],
  };

  addTutor = tutor => {
    this.setState(({ tutors }) => ({ tutors: [...tutors, tutor] }));
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

  handleShowForm = () => {
    console.log('form');
  };

  handleToogleMenu = () => {
    console.log('card');
  };
  render() {
    const { tutors, cities, departments } = this.state;
    // console.log(this.state.cities);
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
            <TutorForm addTutor={this.addTutor} />
            <Button
              text="Add tutor"
              image={AddIcon}
              action={this.handleShowForm}
            />
          </Section>
          <Section title="Cities" image={CityIcon}>
            <GeneralCardList
              listData={cities}
              isOpenMenu={this.handleToogleMenu}
            />
            <Button text="Add city" image={AddIcon} />
          </Section>
          <Section title="Departments" image={DepartmentIcon}>
            <GeneralCardList
              listData={departments}
              isOpenMenu={this.handleToogleMenu}
            />
            <Button text="Add department" image={AddIcon} />
          </Section>
        </Main>
      </div>
    );
  }
}
