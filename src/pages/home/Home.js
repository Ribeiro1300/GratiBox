import * as G from "../../globalStyles/styles";
import * as S from "./styles";
import { Link } from "react-router-dom";
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
        <Link to="/singup">
          <G.Button>Quero Começar</G.Button>
        </Link>
        <Link to="/login">
          <S.AlreadySignedIn>Já sou grato</S.AlreadySignedIn>
        </Link>
      </S.HomeImg>
    </G.Content>
  );
}
