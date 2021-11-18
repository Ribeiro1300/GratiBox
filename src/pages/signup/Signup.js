import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import * as G from "../../globalStyles/styles";

export default function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [checkPass, setCheckPass] = useState("");
  const history = useHistory();
  return (
    <G.Content>
      <G.PageTitle>Bem vindo ao GratiBox</G.PageTitle>
      <G.LoginAndSignupInput
        onChange={(elem) => setName(elem.target.value)}
        value={name}
        placeholder="Nome"
        type="text"
      ></G.LoginAndSignupInput>
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
      <G.LoginAndSignupInput
        onChange={(elem) => setCheckPass(elem.target.value)}
        value={checkPass}
        placeholder="Confirmar senha"
        type="password"
      ></G.LoginAndSignupInput>

      <G.LoginAndSignupButton onClick={() => history.push("/login")}>
        Cadastrar
      </G.LoginAndSignupButton>
    </G.Content>
  );
}
