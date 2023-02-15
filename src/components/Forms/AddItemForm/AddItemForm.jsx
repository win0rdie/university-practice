import { Field, Formik, Form } from 'formik';
import { object, string } from 'yup';

import { Button } from 'components';
import { ErrMsg } from '../TutorForm/TutorForm.styled';
import AddIcon from '../../../assets/images/add.svg';

const schemaValidationAddItem = object().shape({
  name: string().min(2, 'Mininun 2 symbols').required(),
});

export default function AddItemForm({
  onSubmit,
  title,
  placeholder,
  idItem,
  relation,
  textItem,
  closeModal,
}) {
  const INITIAL_VALUES = {
    name: textItem || '',
  };

  const handleSubmit = (values, { setSubmitting, resetForm }) => {
    setSubmitting(true);
    const data = idItem
      ? { id: idItem, relation, name: values.name }
      : values.name;
    onSubmit(data);
    closeModal();
    resetForm();
    setSubmitting(false);
  };

  return (
    <Formik
      initialValues={INITIAL_VALUES}
      onSubmit={handleSubmit}
      validationSchema={schemaValidationAddItem}
    >
      {({ values, handleChange, handleBlur }) => (
        <Form>
          <div>
            <h3>{title}</h3>
            {
              <div>
                <Field
                  type="text"
                  id={placeholder}
                  name="name"
                  placeholder={placeholder}
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.name || ''}
                />
                <ErrMsg name="name" component="div" />
              </div>
            }

            <Button
              text={idItem ? 'Save' : 'Add'}
              image={AddIcon}
              type="submit"
            />
          </div>
        </Form>
      )}
    </Formik>
  );
}
