import styled from "styled-components";

export const Content = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: #6d7ce4;
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-wrap: wrap;
  justify-content: center;
  font-family: "Roboto", sans-serif;
  letter-spacing: 1.5px;

  a {
    text-decoration: none;
  }

  form {
    text-align: center;
  }
`;

export const PageTitle = styled.h2`
  font-size: 30px;
  color: #ffffff;
  font-weight: 600;
  margin-top: 30px;
  margin-bottom: 40px;
  text-align: center;
`;

export const PageText = styled.h3`
  margin: 20px 0px;
  font-size: 18px;
  color: #ffffff;
  text-align: center;
`;

export const LoginAndSignupInput = styled.input`
  font-family: "Roboto", sans-serif;
  width: 90%;
  height: 70px;
  margin: 5px;
  border-radius: 8px;
  font-size: 25px;

  ::placeholder {
    padding-left: 10px;
    font-size: 27px;
    display: flex;
    justify-content: center;
  }
`;

export const LoginAndSignupButton = styled.button`
  font-family: "Roboto", sans-serif;
  font-size: 35px;
  font-weight: 700;
  width: 60%;
  height: 55px;
  background-color: #8692e3;
  border: none;
  border-radius: 8px;
  color: #ffffff;
  margin: 10px 0px;
  margin-top: 40px;
  cursor: pointer;
`;

export const Button = styled.button`
  font-family: "Roboto", sans-serif;
  font-size: 23px;
  width: 50%;
  height: 50px;
  background-color: #8692e3;
  border: none;
  border-radius: 8px;
  color: #ffffff;
  margin: 10px 0px;
  cursor: pointer;
`;

export const Input = styled.input``;

export const Strong = styled.b`
  font-weight: 700;
`;
