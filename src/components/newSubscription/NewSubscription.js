/* eslint-disable react/prop-types */
import React, { useEffect, useState } from "react";
import * as G from "../../globalStyles/styles";
import * as S from "./styles";
import FormsImage from "../../assets/image03.jpg";
import { AiOutlineArrowDown } from "react-icons/ai";
import cep from "cep-promise";

export default function NewSubscription() {
  const [newPlan, setNewPlan] = useState("");

  return (
    <>
      {newPlan === "" ? (
        <>
          <S.PlanWrapper src="month">
            <S.PlanText>Você recebe um box por semana.</S.PlanText>
            <S.PlanText>
              Ideal para quem quer exercer a gratidão todos os dias.
            </S.PlanText>
            <G.Button onClick={() => setNewPlan("weekly")}>Assinar</G.Button>
          </S.PlanWrapper>
          <S.PlanWrapper src={"week"}>
            <S.PlanText>Você recebe um box por mês.</S.PlanText>
            <S.PlanText>Ideal para quem está começando agora.</S.PlanText>
            <G.Button onClick={() => setNewPlan("monthly")}>Assinar</G.Button>
          </S.PlanWrapper>
        </>
      ) : (
        <Forms plan={{ newPlan, setNewPlan }} />
      )}
    </>
  );
}

function Forms(props) {
  const [page, setPage] = useState("1");
  const [renderTurn, setRenderTurn] = useState([0, 0, 0]);
  return (
    <>
      {page === "1" ? (
        <>
          <S.Form>
            <img src={FormsImage} alt="" />
            <S.FormsInfo>
              <h3>Plano</h3>
              <AiOutlineArrowDown onClick={() => setRenderTurn([1, 0, 0])} />
              {renderTurn[0] === 1 ? <div>oi</div> : null}
            </S.FormsInfo>
            <S.FormsInfo>
              <h3>Entrega</h3>
              <AiOutlineArrowDown onClick={() => setRenderTurn([0, 1, 0])} />
              {renderTurn[1] === 1 ? <div>oi</div> : null}
            </S.FormsInfo>
            <S.FormsInfo>
              <h3>Quero receber</h3>
              <AiOutlineArrowDown onClick={() => setRenderTurn([0, 0, 1])} />
              {renderTurn[2] === 1 ? <div>oi</div> : null}
            </S.FormsInfo>
          </S.Form>

          <G.Button onClick={() => setPage("2")}>Próximo</G.Button>
        </>
      ) : (
        <Address plan={props.plan} />
      )}
    </>
  );
}

function Address(props) {
  const { newPlan, setNewPlan } = props.plan;
  const [name, setName] = useState("");
  const [deliveryAddress, setDeliveryAddress] = useState("");
  const [cepN, setCepN] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  console.log(newPlan, setNewPlan);

  if (cepN.length === 8) {
    console.log(cepN);
    cep(cepN).then((res) => {
      setCity(res.city);
      setDeliveryAddress(res.street);
      setState(res.state);
    });
  }
  return (
    <>
      <S.Form>
        <img src={FormsImage} alt="" />
        <S.FormsInput
          type="text"
          onChange={(elem) => setName(elem.target.value)}
          value={name}
          placeholder="Nome completo"
        ></S.FormsInput>
        <S.FormsInput
          type="text"
          onChange={(elem) => setDeliveryAddress(elem.target.value)}
          value={deliveryAddress}
          placeholder="Endereço de entrega"
        ></S.FormsInput>
        <S.FormsInput
          type="text"
          onChange={(elem) => setCepN(elem.target.value)}
          value={cepN}
          placeholder="CEP"
          pattern="[0-9]{8}"
          maxLength="8"
        ></S.FormsInput>
        <S.FormsInput
          type="text"
          onChange={(elem) => setCity(elem.target.value)}
          value={city}
          placeholder="Cidade"
        ></S.FormsInput>
        <S.FormsInput
          type="text"
          onChange={(elem) => setState(elem.target.value)}
          value={state}
          placeholder="Estado"
        ></S.FormsInput>
      </S.Form>
      <G.Button onClick={() => window.location.reload()}>Finalizar</G.Button>
    </>
  );
}
