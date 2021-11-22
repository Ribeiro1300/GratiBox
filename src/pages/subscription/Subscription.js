/* eslint-disable react/prop-types */
/* eslint-disable react/no-unescaped-entities */
import { useHistory, useParams } from "react-router-dom";
import * as G from "../../globalStyles/styles";
import SubsInfo from "../../components/SubsInfo";
import { getPlans } from "../../services/api.js";
import NewSubscription from "../../components/newSubscription/NewSubscription";
import React, { useEffect, useState } from "react";

export default function Subscription() {
  const { userId } = useParams();
  const history = useHistory();
  const [usersPlan, setUsersPlan] = useState([]);

  useEffect(() => {
    if (!localStorage.getItem("token")) {
      alert("Por favor, faça login antes");
      history.push("/login");
    }
    try {
      const planPromisse = getPlans(userId);
      planPromisse
        .then((res) => {
          if (res.data[0]) setUsersPlan(res.data[0]);
        })
        .catch((err) => console.log(err));
    } catch (error) {}
  }, []);
  return (
    <G.Content>
      <G.PageTitle>
        Bom te ver por aqui, {localStorage.getItem("name")}
      </G.PageTitle>
      {usersPlan.length === 0 ? (
        <>
          <G.PageText>
            Você ainda não assinou um plano, que tal começar agora?
          </G.PageText>
          <NewSubscription />
        </>
      ) : (
        <>
          <G.PageText>"Agradecer é arte de atrair coisas boas"</G.PageText>
          <SubsInfo userInfo={usersPlan}></SubsInfo>
          <G.Button
            onClick={() => alert("essa função será habilitada em breve")}
          >
            Avaliar Entregas
          </G.Button>
        </>
      )}
    </G.Content>
  );
}
