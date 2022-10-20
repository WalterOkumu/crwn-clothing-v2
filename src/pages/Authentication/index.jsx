import SignInForm from '../../components/SignInForm';
import SignUpForm from '../../components/SignUpForm';
import { AuthenticationContainerDiv } from './Authentication.styles';

const Authentication = () => (
  <AuthenticationContainerDiv>
    <SignInForm />
    <SignUpForm />
  </AuthenticationContainerDiv>
);

export default Authentication;
