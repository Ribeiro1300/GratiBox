import axios from "axios";

const API = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
});

function createHeaders() {
  const config = {
    headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
  };
  return config;
}

function handleLogin({ email, password }) {
  const body = { email, password };
  const result = API.post("/login", body);
  return result;
}

function handleSignup({ name, email, password }) {
  const body = { name, email, password };
  const result = API.post("/signup", body);
  return result;
}

function getPlans(user_id) {
  const body = { user_id: user_id };
  const result = API.post("/plans", body, createHeaders());
  return result;
}

function postNewPlan(body) {
  const result = API.post("/newPlan", body, createHeaders());
  return result;
}
export { handleLogin, handleSignup, getPlans, postNewPlan };
