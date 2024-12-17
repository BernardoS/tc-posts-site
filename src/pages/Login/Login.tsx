import { useState } from "react";
import LogoLoginImage from "../../assets/logo-login-page.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { 
    LoginContainer,
    LoginContent,
    WhiteSeparator,
    LoginTitleContainer,
    LoginSubtitle,
    LoginTitle,
    FormGroup,
    LoginForm
 } from "./LoginStyle";


const Login = () => {

    const [passwordVisible, setPasswordVisible] = useState(false);

    const togglePasswordVisibility = () => {
        setPasswordVisible((prevState) => !prevState);
    };

    return (
        <LoginContainer>
            <LoginContent>
                <div>
                    <img src={LogoLoginImage}/>
                </div>
                <WhiteSeparator/>
                <LoginTitleContainer>
                    <LoginTitle>Área do professor</LoginTitle>
                    <LoginSubtitle>Login</LoginSubtitle>
                </LoginTitleContainer>
                <LoginForm>
                    <FormGroup className="form-group">
                        <label htmlFor="email">E-mail</label>
                        <input type="email" id="email" placeholder="Digite seu e-mail" />
                    </FormGroup>

                    <FormGroup className="form-group">
                        <label htmlFor="password">Senha</label>
                        <div className="password-container">
                            <input
                                type={passwordVisible ? "text" : "password"}
                                id="password"
                                placeholder="Digite sua senha"
                            />
                            <span
                                className="toggle-password"
                                onClick={togglePasswordVisibility}
                            >
                                <FontAwesomeIcon icon={passwordVisible?faEyeSlash:faEye}/>
                            </span>
                        </div>
                    </FormGroup>

                    <div className="button-group">
                    <button className="button-entrar">Entrar</button>
                    </div>
                </LoginForm>
            </LoginContent>
        </LoginContainer>
    );
};

export default Login

