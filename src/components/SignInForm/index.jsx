/* eslint-disable no-unused-vars */
import { useState } from 'react';
import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
  signInAuthUserWithEmailAndPassword,
} from '../../utils/firebase/firebase.utils';
import FormInput from '../FormInput';
import Button from '../Button';
import './SignInForm.styles.scss';

const SignInForm = () => {
  const defaultFormFields = {
    signInEmail: '',
    signInPassword: '',
  };

  const [formFields, setFormFields] = useState(defaultFormFields);

  const signInWithGoogle = async () => {
    const { user } = await signInWithGooglePopup();

    await createUserDocumentFromAuth(user);
  };

  const {
    signInEmail,
    signInPassword,
  } = formFields;

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await signInAuthUserWithEmailAndPassword(signInEmail, signInPassword);

      if (response) {
        alert('Sign In successful');
        setFormFields(defaultFormFields);
      }
      console.log(response);
    } catch (error) {
      switch (error.code) {
        case 'auth/wrong-password':
          alert('Incorrect Email and Password');
          break;

        case 'auth/user-not-found':
          alert('Email not registered');
          break;

        default:
          console.log(error);
          break;
      }
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormFields({
      ...formFields,
      [name]: value,
    });
  };

  return (
    <div className="sign-in-container">
      <h2>Already have an account?</h2>
      <span>Sign In with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Email"
          name="signInEmail"
          required
          type="email"
          id="signInEmail"
          onChange={handleChange}
          value={signInEmail}

        />

        <FormInput
          label="Password"
          name="signInPassword"
          required
          type="password"
          id="signInPassword"
          onChange={handleChange}
          value={signInPassword}
        />

        <div className="buttons-container">
          <Button type="submit">Sign In</Button>
          <Button type="button" buttonType="google" onClick={signInWithGoogle}>Google Sign In</Button>
        </div>
      </form>
    </div>
  );
};

export default SignInForm;
