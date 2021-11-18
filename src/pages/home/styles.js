import styled from "styled-components";
import HomeImage from "../../assets/image05.webp";

export const HomeImg = styled.div`
  background-image: url(${HomeImage});
  width: 100%;
  flex-grow: 1;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
`;

export const AlreadySignedIn = styled.h2`
  color: #ffffff;
  cursor: pointer;
  margin-bottom: 20px;
`;
