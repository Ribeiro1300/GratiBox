import axios from "axios";

const API = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
});

function createHeaders(token) {
  const config = { headers: { Authorization: `Bearer ${token}` } };
  return config;
}

function handleLogin({ email, password }) {
  const body = { email, password };
  const result = API.post("/login", body);
  return result;
}

function handleSignup({ name, email, password }) {
  const body = { name, email, password };
  console.log(body);
  const result = API.post("/signup", body);
  return result;
}
export { handleLogin, handleSignup };
