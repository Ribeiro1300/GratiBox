import { Link } from "react-router-dom";
import styled from "styled-components";

export const Content = styled.div`
  position: absolute;
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
  font-size: 35px;
  width: 95%;
  color: #ffffff;
  font-weight: 600;
`;

export const PageText = styled.h3`
  width: 90%;
  margin: 20px 0px;
  font-size: 20px;
  color: #ffffff;
  text-align: center;
`;

export const LoginAndSignupInput = styled.input``;

export const LoginAndSignupButton = styled(Link)``;

export const Button = styled(Link)`
  width: 40%;
  height: 20px;
  background-color: #6d7ce4;
  border: none;
  border-radius: 8px;
  color: #ffffff;
`;

export const Input = styled.input``;

export const Strong = styled.b`
  font-weight: 700;
`;
