import styled from "styled-components";
import MonthImage from "../../assets/image04.jpg";
import WeekImage from "../../assets/image02.jpg";

export const PlanWrapper = styled.div`
  background-image: url(${props =>props.src === "month" ? MonthImage : WeekImage});
  background-color: #e5cdb3;;
  width: 95%;
  height: 400px;
  border-radius: 8px;
  background-repeat: no-repeat;
  background-size: contain;
  margin: 30px 0px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
`;
