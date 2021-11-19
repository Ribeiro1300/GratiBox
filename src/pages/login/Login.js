import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { handleLogin } from "../../services/api.js";
import * as G from "../../globalStyles/styles";
import * as S from "./styles";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  function checkLoginInfo(e) {
    e.preventDefault();

    const loginStatus = handleLogin({ email, password });
    loginStatus
      .then((res) => {
        console.log(res);
        localStorage.setItem("token", res.data.token);
        localStorage.setItem("name", res.data.user.name);
        history.push("/subscription/" + res.data.user.id);
      })
      .catch((err) => {
        console.log(err);
        if (err.status === 409) {
          alert("Usuário não encontrado!");
          return;
        }
        if (err.status === 401) {
        }
      });
  }
  return (
    <G.Content>
      <G.PageTitle>Bem vindo ao GratiBox</G.PageTitle>
      <form id="forms" onSubmit={checkLoginInfo}>
        <G.LoginAndSignupInput
          required
          onChange={(elem) => setEmail(elem.target.value)}
          value={email}
          placeholder="Email"
          type="email"
        ></G.LoginAndSignupInput>
        <G.LoginAndSignupInput
          required
          onChange={(elem) => setPassword(elem.target.value)}
          value={password}
          placeholder="Senha"
          type="password"
        ></G.LoginAndSignupInput>
      </form>
      <S.LoginWrapper>
        <G.LoginAndSignupButton form="forms" type="submit">
          Login
        </G.LoginAndSignupButton>
        <S.NotRegistered onClick={() => history.push("/signup")}>
          Ainda não sou grato
        </S.NotRegistered>
      </S.LoginWrapper>
    </G.Content>
  );
}
