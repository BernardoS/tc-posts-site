import {
    HeaderContainer,
    HeaderContent,
    HomeLink,
    LoginButon
} from "./HeaderStyle";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faUserGear} from '@fortawesome/free-solid-svg-icons';
import SaibaMaisLogo from "../../assets/logo-header-menu.png";
import { useNavigate } from "react-router-dom";



const Header = () =>{

    
    const navigate = useNavigate();

    return( 
    <HeaderContainer>
        <HeaderContent className="content-container">
            <HomeLink >
                <img src={SaibaMaisLogo}></img>
            </HomeLink>
            <LoginButon onClick={() => navigate(`/login`)}>
                área do professor <FontAwesomeIcon icon={faUserGear} />
                </LoginButon>
        </HeaderContent>  
    </HeaderContainer>
    );
}

export default Header;