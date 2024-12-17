import {
    HeaderContainer,
    HeaderContent,
    HomeButton,
    LoginButon
} from "./HeaderStyle";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faUserGear} from '@fortawesome/free-solid-svg-icons';
import SaibaMaisLogo from "../../assets/logo-header-menu.png";
import { useNavigate } from "react-router-dom";



const Header = () =>{

    
    const navigate = useNavigate();

    const navigateHome = () => {
        navigate("/");
    }

    return( 
    <HeaderContainer>
        <HeaderContent className="content-container">
            <HomeButton type="button" onClick={navigateHome} >
                <img src={SaibaMaisLogo}></img>
            </HomeButton>
            <LoginButon type="button" onClick={() => navigate(`/login`)}>
                área do professor <FontAwesomeIcon icon={faUserGear} />
                </LoginButon>
        </HeaderContent>  
    </HeaderContainer>
    );
}

export default Header;