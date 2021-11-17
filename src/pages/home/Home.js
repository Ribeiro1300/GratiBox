import * as G from "../../globalStyles/styles";
import * as S from "./styles";
import React from "react";

export default function Home() {
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
        <G.Button to="/signup">Quero Começar</G.Button>
        <S.AlreadySignedIn to="/login">Já sou grato</S.AlreadySignedIn>
      </S.HomeImg>
    </G.Content>
  );
}
