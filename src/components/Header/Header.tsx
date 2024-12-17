import {
    HeaderButtonGroup,
    HeaderContainer,
    HeaderContent,
    HomeButton
} from "./HeaderStyle";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faSignOut, faUserGear} from '@fortawesome/free-solid-svg-icons';
import SaibaMaisLogo from "../../assets/logo-header-menu.png";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import { SecondaryButton } from "../Buttons/ButtonsStyles";



const Header = () =>{

    
    const navigate = useNavigate();

    const navigateHome = () => {
        navigate("/");
    }

    const { isLoggedIn, toggleLogin } = useAuth();

    return( 
    <HeaderContainer>
        <HeaderContent className="content-container">
            <HomeButton type="button" onClick={navigateHome} >
                <img src={SaibaMaisLogo}></img>
            </HomeButton>
            <HeaderButtonGroup>
                <SecondaryButton type="button" onClick={() => navigate(`/login`)}>
                    <FontAwesomeIcon icon={faUserGear} />
                    Área do professor 
                </SecondaryButton>
                {isLoggedIn
                    && (
                    <SecondaryButton type="button" onClick={toggleLogin}>
                        <FontAwesomeIcon icon={faSignOut}/>
                        Sair
                    </SecondaryButton>
                )}
            </HeaderButtonGroup>
            
        </HeaderContent>  
    </HeaderContainer>
    );
}

export default Header;