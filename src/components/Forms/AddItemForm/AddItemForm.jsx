import { Field, Formik, Form } from 'formik';
import { object, string } from 'yup';

import { Button } from 'components';
import { ErrMsg } from '../TutorForm/TutorForm.styled';
import AddIcon from '../../../assets/images/add.svg';

const INITIAL_VALUES = {
  name: '',
};

const schemaValidationAddItem = object().shape({
  name: string().min(2, 'Mininun 2 symbols'),
});

export default function AddItemForm({ onSubmit, title, placeholder }) {
  const handleSubmit = (values, { setSubmitting, resetForm }) => {
    setSubmitting(true);
    onSubmit(values.name);
    console.log(values.name);
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

            <Button text="add" image={AddIcon} type="submit" />
          </div>
        </Form>
      )}
    </Formik>
  );
}
