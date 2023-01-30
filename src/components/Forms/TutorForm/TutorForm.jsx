// import PropTypes from 'prop-types'
import { Button } from 'components';
import { Field, Form, Formik } from 'formik';
import { object, string, number, date, InferType } from 'yup';
import { ErrMsg } from './TutorForm.styled';

const schemaValidation = object({
  firstName: string()
    .min(2, 'Повинно бути мінімум 2 символи')
    .max(5)
    .required(),
  lastName: string(),
  patronymic: string(),
  phone: string(),
  email: string(),
  city: string(),
});

const INITIAL_VALUES = {
  firstName: '',
  lastName: '',
  patronymic: '',
  phone: '',
  email: '',
  city: '',
};

const placeholderValues = {
  firstName: "Ім'я",
  lastName: 'Прізвище',
  patronymic: 'По батькові',
  phone: 'Номер телефону',
  email: 'Електронна пошта',
  city: 'Місто',
};

// console.log(keysTutors);

export default function TutorForm({ addTutor }) {
  const entriesTutors = Object.entries(placeholderValues);
  const handleSubmit = (values, { setSubmitting, resetForm }) => {
    setSubmitting(true);
    addTutor(values);
    resetForm();
    setSubmitting(false);
  };
  return (
    <Formik
      initialValues={INITIAL_VALUES}
      onSubmit={handleSubmit}
      validationSchema={schemaValidation}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
      }) => (
        <Form>
          <div>
            <h3>Add Tutor</h3>

            {entriesTutors.map(([name, ukName]) => {
              return (
                <div key={name}>
                  <Field
                    type="text"
                    id={name}
                    name={name}
                    placeholder={ukName}
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values[name] || ''}
                  />
                  <ErrMsg name={name} component="div" />
                </div>
              );
            })}
            <Button text="add" type="sumbit" />
          </div>
        </Form>
      )}
    </Formik>
  );
}

// TutorForm.propTypes = {

// }
