import React, { Fragment } from "react";
import Logo from "../img/logo.jpeg";
import Styles from "../styles/styles.css";
import Account from "./CreateAcount";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink,
} from "react-router-dom";

const Login = () => {
  return (
    <Fragment>
      <div id="form">
        <div>
          <figure>
            <img src={Logo} alt="logo"></img>
          </figure>
          <div className="form-group-border">
            <div className="form-group">
              <h3 className="form-title">Ingreso</h3>
              <form className="form-inputs">
                <div className="form-input--labelOne">
                  <label>Correo</label>
                  <input type="email" placeholder="" />
                </div>

                <div className="form-input--labelTwo">
                  <label>Contraseña</label>
                  <input type="text" placeholder="" />
                </div>
              </form>
              <button>INGRESAR</button>
            </div>
          </div>
        </div>

        <div className="form-footer">
          <div>
            <p>
              ¿Aún no estás registrato?{" "}
              <a href="#">
                {" "}
                <strong>Registrame</strong>{" "}
              </a>
            </p>
          </div>

          <div>
            <p>
              ¿Olvidate tu contraseña?{" "}
              <a href="#">
                {" "}
                <strong>Recuperar contraseña</strong>
              </a>
            </p>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Login;
