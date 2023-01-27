import {
  Main,
  Paper,
  Section,
  Sidebar,
  TutorsList,
  UniversityCard,
} from '../components';
import universityData from '../constants/universityData';
import TutorIcon from '../assets/images/teachers-emoji.png';

export const App = () => {
  const onEdit = () => {
    console.log('edit');
  };

  const onDelete = () => {
    console.log('delete');
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
        <Section title="Information about tutors" image={TutorIcon}>
          <TutorsList tutors={universityData.tutors} />
        </Section>
      </Main>
    </div>
  );
};
