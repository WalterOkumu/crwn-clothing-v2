import styled from 'styled-components';

export const SignInContainerDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 380px;
`;

export const TitleH2 = styled.h2`
  margin-top: 10px 0;
`;

export const ButtonContainerDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export default {
  SignInContainerDiv,
  TitleH2,
  ButtonContainerDiv,
};

/*
.sign-in-container {
  display: flex;
  flex-direction: column;
  width: 380px;

  h2 {
    margin-top: 10px 0;
  }

  .buttons-container {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
}
*/
