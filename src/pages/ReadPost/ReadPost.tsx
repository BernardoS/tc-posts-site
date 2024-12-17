import { useEffect, useState } from "react";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import { 
    ReadPostContainer,
    ReadPostContent,
    PostBanner,
    DescriptionContainer,
    ContentContainer,
    ObservationsContainer,
    PostInfo,
    PostTitle,
    PostBannerContent
 } from "./ReadPostStyle";


 interface iPost {
    _id: string;
    title: string;
    description: string;
    content: string;
    author: string;
    modifyDate: string;
    createdAt: string;
    updatedAt: string;
    __v: number;
}

interface PostProps {
    id: string; // ID do post
}

const ReadPost: React.FC<PostProps> = ({id}) =>{

    //TO DO:  Inserir no useEffect que recupera os dados do post através do Id

    useEffect(()=>{
        console.log(id);
        setPostData(post);
    },[])

    const post:iPost = {
        _id : "1",
        author: "Bernardo",
        title:"Geografia - O que é latitude e longitude ?",
        createdAt: "22/11/2024",
        modifyDate: "",
        updatedAt:"",
        description: "Mussum Ipsum, cacilds vidis litro abertis. Admodum accumsan disputationi eu sit. Vide electram sadipscing et per. Cevadis im ampola pa arma uma pindureta. Negão é teu passadis, eu sou faxa pretis. Não sou faixa preta cumpadi, sou preto inteiris, inteiris.",
        content: `Mussum Ipsum, cacilds vidis litro abertis.  Casamentiss faiz malandris se pirulitá. Sapien in monti palavris qui num significa nadis i pareci latim. Aenean aliquam molestie leo, vitae iaculis nisl. Praesent vel viverra nisi. Mauris aliquet nunc non turpis scelerisque, eget.

Vehicula non. Ut sed ex eros. Vivamus sit amet nibh non tellus tristique interdum. Mais vale um bebadis conhecidiss, que um alcoolatra anonimis. Nullam volutpat risus nec leo commodo, ut interdum diam laoreet. Sed non consequat odio. Interagi no mé, cursus quis, vehicula ac nisi.

Quem manda na minha terra sou euzis! Praesent malesuada urna nisi, quis volutpat erat hendrerit non. Nam vulputate dapibus. Bota 1 metro de cachacis aí pra viagem! Mauris nec dolor in eros commodo tempor. Aenean aliquam molestie leo, vitae iaculis nisl.

Tá deprimidis, eu conheço uma cachacis que pode alegrar sua vidis. Copo furadis é disculpa de bebadis, arcu quam euismod magna. Quem num gosta di mim que vai caçá sua turmis! Delegadis gente finis, bibendum egestas augue arcu ut est.`,
        __v:1123531
    }

    const [postData, setPostData] = useState<iPost>({});

    return(
        <ReadPostContainer>
            <Header/>
            <PostBanner>
                <PostBannerContent className="content-container">
                    <PostTitle>{postData.title}</PostTitle>
                    <PostInfo>Criado em: 22/11/2024</PostInfo>
                </PostBannerContent>
            </PostBanner>
            <ReadPostContent className="content-container">
              
                <DescriptionContainer>
                    <h2>
                        Descrição
                    </h2>
                    <p>
                        {postData.description}
                    </p>
                </DescriptionContainer>
                <ContentContainer>
                    <h2>
                        Conteúdo
                    </h2>
                    <p>
                        {postData.content}
                    </p>
                </ContentContainer>
                <ObservationsContainer>

                </ObservationsContainer>
            </ReadPostContent>
            <Footer/>
        </ReadPostContainer>
    );
}

export default ReadPost;