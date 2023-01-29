import {
  Button,
  GeneralCardList,
  Main,
  Paper,
  Section,
  Sidebar,
  TutorsList,
  UniversityCard,
} from '../components';
import universityData from '../constants/universityData';
import TutorIcon from '../assets/images/teachers-emoji.png';
import CityIcon from '../assets/images/cities.svg';
import AddIcon from '../assets/images/add.svg';

export const App = () => {
  const onEdit = () => {
    console.log('edit');
  };

  const onDelete = () => {
    console.log('delete');
  };

  const handleShowForm = () => {
    console.log('form');
  };

  const handleToogleMenu = () => {
    console.log('card');
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
          <TutorsList tutors={universityData.tutors} />
          <Button text="Add tutor" image={AddIcon} action={handleShowForm} />
        </Section>
        <Section title="Cities" image={CityIcon}>
          <GeneralCardList
            listData={universityData.cities}
            isOpenMenu={handleToogleMenu}
          />
          <Button text="Add city" image={AddIcon} />
        </Section>
      </Main>
    </div>
  );
};
