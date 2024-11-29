import {
    HeaderContainer,
    HeaderContent,
    HomeLink,
    LoginButon
} from "./HeaderStyle";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faUserGear} from '@fortawesome/free-solid-svg-icons';
import SaibaMaisLogo from "../../assets/logo-header-menu.png";



const Header = () =>{

    return( 
    <HeaderContainer>
        <HeaderContent className="content-container">
            <HomeLink href="#">
                <img src={SaibaMaisLogo}></img>
            </HomeLink>
            <LoginButon onClick={() => console.log("Logar")}>
                área do professor <FontAwesomeIcon icon={faUserGear} />
                </LoginButon>
        </HeaderContent>  
    </HeaderContainer>
    );
}

export default Header;