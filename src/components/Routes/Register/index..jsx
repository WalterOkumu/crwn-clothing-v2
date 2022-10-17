import { useState } from 'react';
import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth } from '../../../utils/firebase/firebase.utils';
import FormInput from '../../FormInput';
import Button from '../../Button';
import './Register.styles.scss';

const Register = () => {
  const defaultFormFields = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: '',
  };

  const [formFields, setFormFields] = useState(defaultFormFields);

  const {
    displayName,
    email,
    password,
    confirmPassword,
  } = formFields;

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormFields({
      ...formFields,
      [name]: value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      alert('Passwords do not match!');
      return;
    }

    try {
      const { user } = await createAuthUserWithEmailAndPassword(email, password);

      await createUserDocumentFromAuth(user, { displayName });

      setFormFields(defaultFormFields);
    } catch (error) {
      if (error.code === 'auth/email-already-in-use') {
        alert('Email already registerd!');
      } else {
        console.log(error);
      }
    }
  };

  return (
    <div className="sign-up-container">
      <h2>Don&apos;t have an account?</h2>
      <span>Sign Up with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Display Name"
          name="displayName"
          required
          inputOptions={{
            type: 'text',
            id: 'displayName',
            onChange: handleChange,
            value: displayName,
          }}
        />

        <FormInput
          label="Email"
          name="email"
          required
          inputOptions={{
            type: 'email',
            id: 'email',
            onChange: handleChange,
            value: email,
          }}

        />

        <FormInput
          label="Password"
          name="password"
          required
          inputOptions={{
            type: 'password',
            id: 'password',
            onChange: handleChange,
            value: password,
          }}
        />

        <FormInput
          label="Confirm Password"
          name="confirmPassword"
          required
          inputOptions={{
            type: 'password',
            id: 'confirmPassword',
            onChange: handleChange,
            value: confirmPassword,
          }}
        />

        <Button type="submit">Sign Up</Button>
      </form>
    </div>
  );
};

export default Register;
