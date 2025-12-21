// src/pages/Login.jsx
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const login = () => {
    localStorage.setItem("auth", "true");
    navigate("/profile");
  };

  return (
    <div>
      <h2>Login</h2>
      <button onClick={login}>Log In</button>
    </div>
  );
}

export default Login;
