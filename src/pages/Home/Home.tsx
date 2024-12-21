import {
    HomePageContainer,
    BannerContainer,
    BannerContent,
    PostListTitleContainer,
    PostListTitle,
    PostListButtonGroup,
    PostListButton
} from "./HomeStyle";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import "../../global.css";
import SearchBar from "../../components/SearchBar/SearchBar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faList, faTableCells } from "@fortawesome/free-solid-svg-icons";
import PostList from "../../components/PostList/PostList";
import { useEffect, useState } from "react";
import axios from "axios";

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


const HomePage = () => {  

      const [posts, setPosts] = useState<iPost[]>([]);

      useEffect(() => {
        axios.get('http://localhost:3000/posts').then(response => {
          if (Array.isArray(response.data)) {
            setPosts(response.data);
          } else {
            console.log('API response is not an array:', response.data);
          }
        }).catch(error => {
          console.log('Error fetching posts:', error);
        });
      }, []);



    return (
        <HomePageContainer>
            <Header />
            <BannerContainer>
                <BannerContent className="content-container">
                    <h1>
                        Encontre aqui o que você precisa para <br />
                        <b>
                            saber mais
                        </b>
                        de todas as matérias
                    </h1>
                    <SearchBar redirectToSearch={true} />
                </BannerContent>
            </BannerContainer>
            <PostListTitleContainer className="content-container">
                <PostListTitle>
                    Posts mais recentes
                </PostListTitle>
                <PostListButtonGroup>
                    <PostListButton className="active" type="button"><FontAwesomeIcon icon={faTableCells}/></PostListButton>
                    <PostListButton type="button"><FontAwesomeIcon icon={faList}/></PostListButton>
                </PostListButtonGroup>
            </PostListTitleContainer>
            <PostList postList={posts} />
            <Footer/>
        </HomePageContainer>
    )

};

export default HomePage;
