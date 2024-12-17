import { useEffect, useState } from "react";
import LogoLoginImage from "../../assets/logo-login-page.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faEye, faEyeSlash, faSignIn } from "@fortawesome/free-solid-svg-icons";
import { 
    LoginContainer,
    LoginContent,
    WhiteSeparator,
    LoginTitleContainer,
    LoginSubtitle,
    LoginTitle,
    FormGroup,
    LoginForm,
    LogoButton,
    InputLabel,
    PasswordContainer,
    EmailInput,
    ButtonGroup
 } from "./LoginStyle";

 import { 
    PrimaryButton,
    SecondaryButton 
} from "../../components/Buttons/ButtonsStyles";

import { useAuth } from "../../contexts/AuthContext";
import { useNavigate } from "react-router-dom";


const Login = () => {

    const [passwordVisible, setPasswordVisible] = useState(false);

    const { isLoggedIn, toggleLogin } = useAuth();

    const togglePasswordVisibility = () => {
        setPasswordVisible((prevState) => !prevState);
    };

    const navigate = useNavigate();

    useEffect(()=>{
        if(isLoggedIn) navigate("/manage");
    },[isLoggedIn,navigate])
    
    return (
        <LoginContainer>
            <LoginContent>
                <LogoButton type="button" onClick={() => navigate("/")} >
                    <img src={LogoLoginImage}/>
                </LogoButton>
                <WhiteSeparator/>
                <LoginTitleContainer>
                    <LoginTitle>Área do professor</LoginTitle>
                    <LoginSubtitle>Login</LoginSubtitle>                    
                </LoginTitleContainer>
                <LoginForm>
                    <FormGroup >
                        <InputLabel htmlFor="email">E-mail</InputLabel>
                        <EmailInput type="email" id="email" placeholder="Digite seu e-mail" />
                    </FormGroup>

                    <FormGroup >
                        <InputLabel htmlFor="password">Senha</InputLabel>
                        <PasswordContainer >
                            <input
                                type={passwordVisible ? "text" : "password"}
                                id="password"
                                placeholder="Digite sua senha"
                            />
                            <span
                            
                                onClick={togglePasswordVisibility}
                            >
                                <FontAwesomeIcon icon={passwordVisible?faEyeSlash:faEye}/>
                            </span>
                        </PasswordContainer>
                    </FormGroup>

                    <ButtonGroup >
                        <SecondaryButton onClick={() => navigate("/")} className="login-page" type="button">
                            <FontAwesomeIcon icon={faChevronLeft}/> <span>Voltar</span> 
                        </SecondaryButton>
                        <PrimaryButton onClick={toggleLogin} className="login-page" type="button">
                            <FontAwesomeIcon icon={faSignIn}/> <span>Entrar</span> 
                        </PrimaryButton>
                    </ButtonGroup>
                </LoginForm>
            </LoginContent>
        </LoginContainer>
    );
};

export default Login

