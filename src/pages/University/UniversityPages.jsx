import {
  AddItemForm,
  Button,
  GeneralCardList,
  Paper,
  Section,
  TutorForm,
  TutorsList,
  UniversityCard,
} from 'components';
import FORMS from 'constants/form';
import TutorIcon from '../../assets/images/teachers-emoji.png';
import CityIcon from '../../assets/images/cities.svg';
import AddIcon from '../../assets/images/add.svg';
import universityData from '../../constants/universityData';

function UniversityPages({
  onEdit,
  onDelete,
  addTutor,
  showForm,
  handleDeleteTutor,
  handleShowForm,
  handleDeleteCard,
  handleEditCard,
  cities,
  tutors,
  addCity,
}) {
  return (
    <>
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
          <AddItemForm title="add city" placeholder="City" onSubmit={addCity} />
        )}
        <Button
          text={showForm === FORMS.CITY_FORM ? 'Close form' : 'Add city'}
          image={AddIcon}
          action={() => handleShowForm(FORMS.CITY_FORM)}
        />
      </Section>
    </>
  );
}

export default UniversityPages;
