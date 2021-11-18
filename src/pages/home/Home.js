import * as G from "../../globalStyles/styles";
import * as S from "./styles";
import React from "react";
import { useHistory } from "react-router-dom";

export default function Home() {
  const history = useHistory();
  return (
    <G.Content>
      <G.PageTitle>
        Bem vindo ao <G.Strong>GratiBox</G.Strong>
      </G.PageTitle>
      <G.PageText>
        Receba em casa um box com chás, produtos organicos, incensos e muito
        mais...
      </G.PageText>
      <S.HomeImg>
        <G.Button onClick={() => history.push("/signup")}>
          Quero Começar
        </G.Button>
        <S.AlreadySignedIn onClick={() => history.push("/login")}>
          Já sou grato
        </S.AlreadySignedIn>
      </S.HomeImg>
    </G.Content>
  );
}
