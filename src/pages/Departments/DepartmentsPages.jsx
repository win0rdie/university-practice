import { AddItemForm, Button, GeneralCardList, Section } from 'components';
import FORMS from 'constants/form';
import DepartmentIcon from '../../assets/images/faculties-emoji.png';
import AddIcon from '../../assets/images/add.svg';

function DepartmentsPages({
  departments,
  handleEditCard,
  handleDeleteCard,
  showForm,
  addDepartment,
  handleShowForm,
}) {
  return (
    <>
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
            showForm === FORMS.DEPARTMENT_FORM ? 'Close form' : 'Add department'
          }
          image={AddIcon}
          action={() => handleShowForm(FORMS.DEPARTMENT_FORM)}
        />
      </Section>
    </>
  );
}

export default DepartmentsPages;
