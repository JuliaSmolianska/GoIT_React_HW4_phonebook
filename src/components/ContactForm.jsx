import React from 'react';
import css from './App.module.css';
import { Field, Formik, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import PropTypes from 'prop-types';

const contactFormSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'To short!')
    .max(30, 'So long!')
    .required('Required'),
  number: Yup.string()
    .matches(
      /\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/,
      'Invalid phone number format, should be 1111-11-11'
    )
    .required('Required'),
});

export const ContactForm = ({ onAdd }) => (
  <Formik
    initialValues={{ name: '', number: '' }}
    validationSchema={contactFormSchema}
    onSubmit={(values, actions) => {
      onAdd(values);
      actions.resetForm();
    }}
  >
    <Form>
      <label htmlFor="name" className={css.label}>
        Name
      </label>
      <br />
      <Field name="name" placeholder="Enter name" />
      <ErrorMessage name="name" component="div" className={css.error} />
      <br />
      <label htmlFor="number" className={css.label}>
        Telephone number
      </label>
      <br />
      <Field name="number" placeholder="Enter number" />
      <ErrorMessage name="number" component="div" className={css.error} />
      <br />
      <button type="submit" className={css.button_add}>
        Add contact
      </button>
    </Form>
  </Formik>
);

ContactForm.propTypes = {
  onAdd: PropTypes.func.isRequired,
};
