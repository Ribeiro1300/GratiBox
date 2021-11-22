/* eslint-disable react/prop-types */
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import * as G from "../../globalStyles/styles";
import * as S from "./styles";
import FormsImage from "../../assets/image03.jpg";
import { AiOutlineArrowDown } from "react-icons/ai";
import { postNewPlan } from "../../services/api";
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
  const [renderTurn, setRenderTurn] = useState([0, 1, 0]);
  const [product, setProduct] = useState("");
  const [newPlan, setNewPlan] = useState(props.plan.newPlan);
  const [delivery, setDelivery] = useState("");
  function nextPage(e) {
    e.preventDefault();
    if (!product || !delivery) {
      alert("Por favor, preencha todas as informações.");
      return;
    }
    setPage("2");
  }
  console.log(delivery);
  return (
    <>
      {page === "1" ? (
        <>
          <S.Form id="forms1" onSubmit={nextPage}>
            <img src={FormsImage} alt="" />
            <S.FormsInfo onClick={() => setRenderTurn([1, 0, 0])}>
              <h3>Plano</h3>
              {renderTurn[0] === 1 ? (
                <div>
                  <input
                    onChange={(elem) =>
                      newPlan === "monthly"
                        ? setNewPlan(elem.target.value)
                        : null
                    }
                    type="checkbox"
                    id="week"
                    value="weekly"
                    checked={newPlan === "weekly" ? true : false}
                  ></input>
                  <label htmlFor="week">Semanal</label>
                  <input
                    onChange={(elem) =>
                      newPlan === "weekly"
                        ? setNewPlan(elem.target.value)
                        : null
                    }
                    type="checkbox"
                    id="month"
                    value="monthly"
                    checked={newPlan === "monthly" ? true : false}
                  ></input>
                  <label htmlFor="month">Mensal</label>
                </div>
              ) : (
                <AiOutlineArrowDown />
              )}
            </S.FormsInfo>

            <S.FormsInfo onClick={() => setRenderTurn([0, 1, 0])}>
              <h3>Entrega</h3>

              {renderTurn[1] === 1 ? (
                newPlan === "weekly" ? (
                  <div>
                    <input
                      onChange={(elem) =>
                        delivery !== "monday"
                          ? setDelivery(elem.target.value)
                          : null
                      }
                      type="checkbox"
                      id="monday"
                      value="monday"
                      checked={delivery === "monday" ? true : false}
                    ></input>
                    <label htmlFor="monday">Segunda</label>
                    <input
                      onChange={(elem) =>
                        delivery !== "wed"
                          ? setDelivery(elem.target.value)
                          : null
                      }
                      type="checkbox"
                      id="wed"
                      value="wed"
                      checked={delivery === "wed" ? true : false}
                    ></input>
                    <label htmlFor="wed">Quarta</label>
                    <input
                      onChange={(elem) =>
                        delivery !== "friday"
                          ? setDelivery(elem.target.value)
                          : null
                      }
                      type="checkbox"
                      id="friday"
                      value="friday"
                      checked={delivery === "friday" ? true : false}
                    ></input>
                    <label htmlFor="friday">Sexta</label>
                  </div>
                ) : (
                  <div>
                    <input
                      onChange={(elem) =>
                        delivery !== "1" ? setDelivery(elem.target.value) : null
                      }
                      type="checkbox"
                      id="1"
                      value="1"
                      checked={delivery === "1" ? true : false}
                    ></input>
                    <label htmlFor="1">Dia 01</label>
                    <input
                      onChange={(elem) =>
                        delivery !== "10" ? setDelivery(elem.target.value) : null
                      }
                      type="checkbox"
                      id="10"
                      value="10"
                      checked={delivery === "10" ? true : false}
                    ></input>
                    <label htmlFor="10">dia 10</label>
                    <input
                      onChange={(elem) =>
                        delivery !== "20" ? setDelivery(elem.target.value) : null
                      }
                      type="checkbox"
                      id="20"
                      value="20"
                      checked={delivery === "20" ? true : false}
                    ></input>
                    <label htmlFor="20">Dia 20</label>
                  </div>
                )
              ) : (
                <AiOutlineArrowDown />
              )}
            </S.FormsInfo>
            <S.FormsInfo onClick={() => setRenderTurn([0, 0, 1])}>
              <h3>Quero receber</h3>

              {renderTurn[2] === 1 ? (
                <div>
                  <input
                    onChange={(elem) =>
                      product !== "tea" ? setProduct(elem.target.value) : null
                    }
                    type="checkbox"
                    id="tea"
                    value="tea"
                    checked={product === "tea" ? true : false}
                  ></input>
                  <label htmlFor="tea">Chás</label>
                  <input
                    onChange={(elem) =>
                      product !== "incense"
                        ? setProduct(elem.target.value)
                        : null
                    }
                    type="checkbox"
                    id="incense"
                    value="incense"
                    checked={product === "incense" ? true : false}
                  ></input>
                  <label htmlFor="incense"> Incensos</label>
                  <input
                    onChange={(elem) =>
                      product !== "organic"
                        ? setProduct(elem.target.value)
                        : null
                    }
                    type="checkbox"
                    id="organic"
                    value="organic"
                    checked={product === "organic" ? true : false}
                  ></input>
                  <label htmlFor="organic">Produtos Organicos</label>
                </div>
              ) : (
                <AiOutlineArrowDown />
              )}
            </S.FormsInfo>
          </S.Form>

          <G.Button form="forms1" type="submit">
            Próximo
          </G.Button>
        </>
      ) : (
        <Address firstPageInfo={{ newPlan, delivery, product }} />
      )}
    </>
  );
}

function Address(props) {
  const { userId } = useParams();
  const { newPlan, delivery, product } = props.firstPageInfo;
  const [name, setName] = useState("");
  const [deliveryAddress, setDeliveryAddress] = useState("");
  const [cepN, setCepN] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  if (cepN.length === 8) {
    cep(cepN).then((res) => {
      setCity(res.city);
      setDeliveryAddress(res.street);
      setState(res.state);
    });
  }
  function sendPlanInfo(e) {
    e.preventDefault();
    const body = {
      user_id: Number(userId),
      type: newPlan,
      chosenDates: Number(delivery),
      product: product,
      name: name,
      city: city,
      state: state,
      street: deliveryAddress,
      CEP: Number(cepN),
    };
    const resultNewPlan = postNewPlan(body);
    resultNewPlan
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
    window.location.reload();
  }
  return (
    <>
      <S.Form id="forms2" onSubmit={sendPlanInfo}>
        <img src={FormsImage} alt="" />
        <S.FormsInput
          required
          type="text"
          onChange={(elem) => setName(elem.target.value)}
          value={name}
          placeholder="Nome completo"
        ></S.FormsInput>
        <S.FormsInput
          required
          type="text"
          onChange={(elem) => setDeliveryAddress(elem.target.value)}
          value={deliveryAddress}
          placeholder="Endereço de entrega"
        ></S.FormsInput>
        <S.FormsInput
          required
          type="text"
          onChange={(elem) => setCepN(elem.target.value)}
          value={cepN}
          placeholder="CEP"
          pattern="[0-9]{8}"
          maxLength="8"
        ></S.FormsInput>
        <S.FormsInput
          required
          type="text"
          onChange={(elem) => setCity(elem.target.value)}
          value={city}
          placeholder="Cidade"
        ></S.FormsInput>
        <S.FormsInput
          required
          type="text"
          onChange={(elem) => setState(elem.target.value)}
          value={state}
          placeholder="Estado"
        ></S.FormsInput>
      </S.Form>
      <G.Button form="forms2" type="submit">
        Finalizar
      </G.Button>
    </>
  );
}
