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
`;

export const PageTitle = styled.h2`
  font-size: 33px;
  color: #ffffff;
  font-weight: 600;
  margin: 20px auto;
`;

export const PageText = styled.h3`
  width: 90%;
  margin: 20px 0px;
  font-size: 19px;
  color: #ffffff;
  text-align: center;
`;

export const LoginAndSignupInput = styled.input``;

export const LoginAndSignupButton = styled.button``;

export const Button = styled.button`
  font-family: "Roboto", sans-serif;
  font-size: 18px;
  width: 40%;
  height: 40px;
  background-color: #6d7ce4;
  border: none;
  border-radius: 8px;
  color: #ffffff;
  margin: 10px 0px;
`;

export const Input = styled.input``;

export const Strong = styled.b`
  font-weight: 700;
`;
