import { useEffect, useState } from "react";
import axios from "axios";
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
    PostBannerContent,
    PostSubtitle,
    PostText,
    ObservationText,
    PostBannerNotFound
 } from "./ReadPostStyle";
import { useParams } from "react-router-dom";


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


const ReadPost = () =>{

    const { id } = useParams<{ id: string }>();

    //TO DO:  Inserir no useEffect que recupera os dados do post através do Id

    useEffect(() => {
        axios.get(`http://localhost:3000/posts/${id}`).then(response => {
          setPostData(response.data);
        }).catch(error => {
          console.error('Error fetching post:', error);
        });
      }, [id]);

    const [postData, setPostData] = useState<iPost>();

    if(!postData){
        return (
        <ReadPostContainer>
            <Header/>
            <PostBannerNotFound>
                <PostBannerContent className="content-container">
                    <PostTitle>:( Ops... Houve algum problema</PostTitle>
                    <PostInfo>Houve algum problema ao acessar este post, tente acessar outros conteúdos disponíveis na plataforma.<br/><br/> Bom aprendizado!</PostInfo>
                </PostBannerContent>
            </PostBannerNotFound>
            <Footer/>
        </ReadPostContainer>
        )
    }

    return(
        <ReadPostContainer>
            <Header/>
            <PostBanner>
                <PostBannerContent className="content-container">
                    <PostTitle>{ postData!= null && postData.title}</PostTitle>
                    <PostInfo>Criado em: 22/11/2024</PostInfo>
                </PostBannerContent>
            </PostBanner>
            <ReadPostContent className="content-container">
              
                <DescriptionContainer>
                    <PostSubtitle>
                        Descrição
                    </PostSubtitle>
                    <PostText className="description">
                        {postData!= null && postData.description}
                    </PostText>
                </DescriptionContainer>
                <ContentContainer>
                    <PostSubtitle>
                        Conteúdo
                    </PostSubtitle>
                    <PostText>
                        {postData!= null && postData.content}
                    </PostText>
                </ContentContainer>
                <ObservationsContainer>
                    {(postData !=null && postData.author != null && postData.author != undefined && postData.author != "" ) && (
                        <ObservationText>
                            <b>Autor:</b> {postData.author}
                        </ObservationText>
                    )}
                </ObservationsContainer>
            </ReadPostContent>
            <Footer/>
        </ReadPostContainer>
    );
}

export default ReadPost;