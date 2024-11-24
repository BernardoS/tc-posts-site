import SaibaMaisLogo from "../../assets/logo-header-menu.png";
import { 
    HomePageContainer, 
    HeaderContainer, 
    HeaderContent, 
    LoginButon, 
    HomeLink, 
    BannerContainer, 
    BannerContent, 
    SearchInputContainer, 
    SearchInputText,
    SearchButton } from "./HomeStyle";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faUserGear } from '@fortawesome/free-solid-svg-icons';
import "../../global.css";

const HomePage = () => {


    return (
        <HomePageContainer>
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
                <BannerContainer>
                    <BannerContent className="content-container">
                        <h1>
                            Encontre aqui o que você precisa para <br/>
                            <b>
                                saber mais
                            </b>
                             de todas as matérias
                        </h1>
                        <SearchInputContainer>
                            <SearchInputText placeholder="O que você quer saber ?" id="pesquisa" name="pesquisa" type="text"/>
                            <SearchButton><FontAwesomeIcon icon={faSearch}/></SearchButton>
                        </SearchInputContainer>
                    </BannerContent>
                </BannerContainer>
        </HomePageContainer>
    )

};

export default HomePage;
