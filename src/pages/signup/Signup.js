import React, { useState } from "react";
import { handleSignup } from "../../services/api";
import { useHistory } from "react-router-dom";
import * as G from "../../globalStyles/styles";

export default function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [checkPass, setCheckPass] = useState("");
  const history = useHistory();

  function signupUser(e) {
    e.preventDefault();
    if (password != checkPass) {
      alert("Senhas diferentes! Tente novamente");
      return;
    }
    handleSignup({ name, email, password });
  }
  return (
    <G.Content>
      <G.PageTitle>Bem vindo ao GratiBox</G.PageTitle>
      <form id="forms" onSubmit={signupUser}>
        <G.LoginAndSignupInput
          required
          onChange={(elem) => setName(elem.target.value)}
          value={name}
          placeholder="Nome"
          type="text"
        ></G.LoginAndSignupInput>
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
        <G.LoginAndSignupInput
          required
          onChange={(elem) => setCheckPass(elem.target.value)}
          value={checkPass}
          placeholder="Confirmar senha"
          type="password"
        ></G.LoginAndSignupInput>
      </form>

      <G.LoginAndSignupButton form="forms" type="submit">
        Cadastrar
      </G.LoginAndSignupButton>
    </G.Content>
  );
}
