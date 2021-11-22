/* eslint-disable react/prop-types */
/* eslint-disable react/no-unescaped-entities */
import { useHistory, useParams } from "react-router-dom";
import * as G from "../../globalStyles/styles";
import SubsInfo from "../../components/SubsInfo";
import { getPlans, deleteSession } from "../../services/api.js";
import NewSubscription from "../../components/newSubscription/NewSubscription";
import React, { useEffect, useState } from "react";
import { Alert } from "bootstrap";

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
  function logout() {
    try {
      const result = deleteSession();
      result.then((res) => alert("Logout feito com sucesso!"));
    } catch (error) {
      if (error.request.status == 409) {
        alert("Falha ao fazer logout");
      }
    }
    localStorage.removeItem("token");
    history.push("/");
  }

  return (
    <G.Content>
      <ion-icon
        onClick={logout}
        style={{
          fontSize: "30px",
          alignSelf: "flex-end",
          marginRight: "20px",
          color: "white",
        }}
        name="exit-outline"
      ></ion-icon>
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
