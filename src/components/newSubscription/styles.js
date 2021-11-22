import styled from "styled-components";
import MonthImage from "../../assets/image04.jpg";
import WeekImage from "../../assets/image02.jpg";

const PlanImage = (props) => (props.src === "month" ? MonthImage : WeekImage);

export const PlanWrapper = styled.div`
  background-image: url(${PlanImage});
  background-color: #e5cdb3;
  width: 95%;
  height: 500px;
  border-radius: 8px;
  background-repeat: no-repeat;
  background-size: contain;
  margin: 30px 0px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
`;

export const PlanText = styled.h2`
  font-size: 20px;
  color: #2b4899;
  font-weight: 700;
  align-self: flex-start;
  margin-left: 20px;
`;

export const Form = styled.form`
  width: 90%;
  background-color: #ffffff;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  img {
    width: 85%;
  }
`;

export const FormsInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 85%;
  height: 50px;
  background-color: #e0d1ed;
  border-radius: 8px;
  margin: 8px;
  color: #5768de;
  font-weight: 700;
  font-size: 20px;

  h3 {
    margin: 8px;
  }

  svg {
    font-size: 35px;
    margin: 8px;
  }
`;

export const FormsInput = styled.input`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 85%;
  height: 50px;
  background-color: #e0d1ed;
  border-radius: 8px;
  border: none;
  margin: 8px;
  font-size: 20px;

  ::placeholder {
    font-size: 20px;
    color: #5768de;
    font-weight: 700;
    padding: 10px;
  }
`;
