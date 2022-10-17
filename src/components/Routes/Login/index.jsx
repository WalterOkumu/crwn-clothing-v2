/* eslint-disable no-unused-vars */
import { signInWithGooglePopup, createUserDocumentFromAuth } from '../../../utils/firebase/firebase.utils';
import './SignIn.styles.scss';

const Login = () => {
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();

    const userDocRef = await createUserDocumentFromAuth(user);
  };

  return (
    <div>
      <h1>Sign In Page</h1>
      <button type="button" onClick={logGoogleUser}>Log In with Google Pop-Up</button>
    </div>
  );
};

export default Login;
