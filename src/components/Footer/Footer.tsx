import SaibaMaisLogo from "../../assets/logo-footer-menu.png";
import { 
    FooterContainer,
    FooterContent,
    FooterLogoContainer,
    FooterInfoContainer,
    FooterInfoList,
    FooterInfoItem,
    FooterInfoTitle,
    FooterInfoRight,
    FooterInfoLeft
 } from "./FooterStyle";

const Footer = () =>{

    return( 
    <FooterContainer>
        <FooterContent className="content-container">
            
            <FooterInfoContainer>
                <FooterInfoLeft>
                    <FooterInfoTitle>Site desenvolvido por:</FooterInfoTitle>
                    <FooterInfoList>
                        <FooterInfoItem>Bernardo Souza</FooterInfoItem>
                        <FooterInfoItem>Guilherme Marin</FooterInfoItem>
                        <FooterInfoItem>Igor Santana</FooterInfoItem>
                        <FooterInfoItem>Anderson Oliveira</FooterInfoItem>
                    </FooterInfoList>
                </FooterInfoLeft>

                <FooterLogoContainer> <img src={SaibaMaisLogo}/></FooterLogoContainer>
            
                <FooterInfoRight>
                    <FooterInfoTitle>Site desenvolvido por:</FooterInfoTitle>
                    <FooterInfoList>
                        <FooterInfoItem>PósTech FIAP em Fullstack Development</FooterInfoItem>
                    </FooterInfoList>
                </FooterInfoRight>
            </FooterInfoContainer>

        </FooterContent>
        
    </FooterContainer>
    );
}

export default Footer;