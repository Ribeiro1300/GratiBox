/* eslint-disable react/prop-types */
import React from "react";
import styled from "styled-components";
import SubsImage from "../assets/image03.jpg";

export default function SubsInfo(props) {
  const { userInfo } = props;
  return (
    <InfoWrapper>
      <img src={SubsImage} alt="" />
      <h3>Plano:{userInfo.plan}</h3>
      <h3>Data de Assinatura:{userInfo.signupDate}</h3>
      <h3>Próximas entregas:</h3>
      <p>{userInfo.nextDeliveries[0]}</p>
      <p>{userInfo.nextDeliveries[1]}</p>
      <p>{userInfo.nextDeliveries[2]}</p>
      <h3>{userInfo.package}</h3>
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
  align-items: center;

  img {
    width: 80%;
  }
`;
