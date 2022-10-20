import { useState } from 'react';
import {
  signInWithGooglePopup,
  signInAuthUserWithEmailAndPassword,
} from '../../utils/firebase/firebase.utils';
import FormInput from '../FormInput';
import Button, { BUTTON_TYPE_CLASSES } from '../Button';
import {
  SignInContainerDiv,
  TitleH2,
  ButtonContainerDiv,
} from './SignInForm.styles';

const SignInForm = () => {
  const defaultFormFields = {
    signInEmail: '',
    signInPassword: '',
  };

  const [formFields, setFormFields] = useState(defaultFormFields);

  const signInWithGoogle = async () => {
    await signInWithGooglePopup();
  };

  const {
    signInEmail,
    signInPassword,
  } = formFields;

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const user = await signInAuthUserWithEmailAndPassword(signInEmail, signInPassword);

      if (user) {
        setFormFields(defaultFormFields);
      }
    } catch (error) {
      switch (error.code) {
        case 'auth/wrong-password':
          throw new Error('Incorrect Email and Password', error);

        case 'auth/user-not-found':
          throw new Error('Email not registered', error);

        default:
          throw new Error(error);
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
    <SignInContainerDiv>
      <TitleH2>Already have an account?</TitleH2>
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

        <ButtonContainerDiv>
          <Button type="submit">Sign In</Button>
          <Button type="button" buttonType={BUTTON_TYPE_CLASSES.google} onClick={signInWithGoogle}>Google Sign In</Button>
        </ButtonContainerDiv>
      </form>
    </SignInContainerDiv>
  );
};

export default SignInForm;
