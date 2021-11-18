import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import * as G from "../../globalStyles/styles";
import * as S from "./styles";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();
  return (
    <G.Content>
      <G.PageTitle>Bem vindo ao GratiBox</G.PageTitle>
      <G.LoginAndSignupInput
        onChange={(elem) => setEmail(elem.target.value)}
        value={email}
        placeholder="Email"
        type="email"
      ></G.LoginAndSignupInput>
      <G.LoginAndSignupInput
        onChange={(elem) => setPassword(elem.target.value)}
        value={password}
        placeholder="Senha"
        type="password"
      ></G.LoginAndSignupInput>
      <S.LoginWrapper>
        <G.LoginAndSignupButton>Login</G.LoginAndSignupButton>
        <S.NotRegistered onClick={() => history.push("/signup")}>
          Ainda não sou grato
        </S.NotRegistered>
      </S.LoginWrapper>
    </G.Content>
  );
}
