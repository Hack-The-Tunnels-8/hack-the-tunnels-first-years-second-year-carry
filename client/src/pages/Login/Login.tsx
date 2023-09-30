import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Page } from "../../components";
import { useAccountContext } from "../../context";
import "./Login.style.scss";

function Login() {
  const [message, setMessage] = useState(null);
  const { loggedIn, login } = useAccountContext();
  const navigate = useNavigate();

  const attemptLogin = async () => {
    //admin@email.com
    //password
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    try {
      const message = await login(email, password);
      setMessage(message);
      
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (loggedIn() === true) {
      navigate("/");
    }
  }, [loggedIn, navigate]);

  return (
    <Page>
      <div className="login-page">
        <h1>Login</h1>
        <p>Email:</p> <input id="email" type="text"></input><br></br>
        <p>Password: </p><input id="password" type="password"></input><br></br>
        <button className="button" onClick={() => attemptLogin()}>
          Log in 
        </button>
        {message && <p>{message}</p>}
      </div>
    </Page>
  );
}

export default Login;

