/* eslint-disable no-unused-vars */
import { signInWithGooglePopup, createUserDocumentFromAuth } from '../../utils/firebase/firebase.utils';
import SignInForm from '../../components/SignInForm';
import SignUpForm from '../../components/SignUpForm';
import './Authentication.styles.scss';

const Authentication = () => {
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();

    const userDocRef = await createUserDocumentFromAuth(user);
  };

  return (
    <div className="authentication-container">
      <SignInForm />
      <SignUpForm />
    </div>
  );
};

export default Authentication;
