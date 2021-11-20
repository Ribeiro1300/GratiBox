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
    id: 1,
    user_id: userId,
    type: "weekly",
    signup_date: "10/10/2010",
    delivery_dates: "17/10/2010, 24/10/2010, 5/11/2010",
    product: "Chás",
  };
  return (
    <G.Content>
      <G.PageTitle>
        Bom te ver por aqui, {localStorage.getItem("name")}
      </G.PageTitle>
      {userId === "6" ? (
        <>
          <G.PageText>"Agradecer é arte de atrair coisas boas"</G.PageText>
          <SubsInfo userInfo={mockUser}></SubsInfo>
          <G.Button
            onClick={() => alert("essa função será habilitada em breve")}
          >
            Avaliar Entregas
          </G.Button>
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
