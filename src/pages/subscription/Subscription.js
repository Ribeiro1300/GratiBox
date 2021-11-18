/* eslint-disable react/prop-types */
/* eslint-disable react/no-unescaped-entities */
import { useParams } from "react-router-dom";
import * as G from "../../globalStyles/styles";
import SubsInfo from "../../components/SubsInfo";
import NewSubscription from "../../components/newSubscription/NewSubscription";
import React from "react";

export default function Subscription() {
  const { userId } = useParams();
  const mockUser = {
    id: userId,
    name: "Jhonatan",
    plan: "weekly",
    signupDate: "10/10/2010",
    nextDeliveries: ["17/10/2010", "24/10/2010", "5/11/2010"],
    package: "Chás",
  };
  return (
    <G.Content>
      <G.PageTitle>Bom te ver por aqui, {"@fulaninhoDeTal"}</G.PageTitle>
      {userId == "2" ? (
        <>
          <G.PageText>"Agradecer é arte de atrair coisas boas"</G.PageText>
          <SubsInfo userInfo={mockUser}></SubsInfo>
          <G.Button>Avaliar Entregas</G.Button>
        </>
      ) : (
        <>
          <G.PageText>
            Você ainda não assinou um plano, que tal começar agora?
          </G.PageText>
          <NewSubscription />
        </>
      )}
    </G.Content>
  );
}
