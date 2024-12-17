import { useState } from "react";
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


const Login = () => {

    const [passwordVisible, setPasswordVisible] = useState(false);

    const togglePasswordVisibility = () => {
        setPasswordVisible((prevState) => !prevState);
    };

    return (
        <LoginContainer>
            <LoginContent>
                <LogoButton>
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
                        <SecondaryButton className="login-page" type="button">
                            <FontAwesomeIcon icon={faChevronLeft}/> <span>Voltar</span> 
                        </SecondaryButton>
                        <PrimaryButton className="login-page" type="button">
                            <FontAwesomeIcon icon={faSignIn}/> <span>Entrar</span> 
                        </PrimaryButton>
                    </ButtonGroup>
                </LoginForm>
            </LoginContent>
        </LoginContainer>
    );
};

export default Login

