/* eslint-disable react/prop-types */
import React from "react";
import styled from "styled-components";
import SubsImage from "../assets/image03.jpg";

export default function SubsInfo(props) {
  const { userInfo } = props;
  const deliveryDates = userInfo.delivery_dates.split(",");
  return (
    <InfoWrapper>
      <img src={SubsImage} alt="" />
      <h3>
        Plano:<span>{userInfo.type}</span>
      </h3>
      <h3>
        Data de Assinatura:<span>{userInfo.signup_date}</span>
      </h3>
      <h3>
        Próximas entregas:
        <p>{deliveryDates[0]}</p>
        <p>{deliveryDates[1]}</p>
        <p>{deliveryDates[2]}</p>
      </h3>
      <h4>{userInfo.product}</h4>
    </InfoWrapper>
  );
}

const InfoWrapper = styled.div`
  width: 90%;
  background-color: #ffffff;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  line-height: 1.5;

  img {
    width: 80%;
    margin-left: 10%;
  }

  h3 {
    margin-left: 20px;
    color: #2b4899;
    font-weight: 700;
  }

  p {
    margin-left: 30px;
    color: #e63c80;
  }

  span {
    color: #e63c80;
  }

  h4 {
    color: #e63c80;
    margin-left: 20px;
    margin-top: 20px;
  }
`;
