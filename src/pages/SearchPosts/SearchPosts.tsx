
import {
  SearchPostsContainer,
  SearchPostsContent,
  SearchAlertContainer,
  SearchAlertTilteContainer,
  SearchAlertTilte
} from "./SearchPostsStyle";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import "../../global.css";
import SearchBar from "../../components/SearchBar/SearchBar";
import SubjectSearchList from "../../components/SearchSubjectList/SearchSubjectList";
import PostList from "../../components/PostList/PostList";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import axios from "axios";
import { PostListTitle } from "../Home/HomeStyle";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInfoCircle } from "@fortawesome/free-solid-svg-icons";


const SearchPosts  = () => {

    const [searchParams] = useSearchParams();
    const term = searchParams.get('term');

    const subjects: string[] = [
        "Geografia",
        "Química",
        "Português",
        "Biologia",
        "Física",
        "Inglês",
        "História",
        "Matemática",
    ];

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

      const [posts, setPosts] = useState<iPost[]>([]);
      const [searchTerm, setSearchTerm] = useState<string|undefined|null>('');
      

      useEffect(() => {

        if(term != "" || term != null || term != undefined){
            setSearchTerm(term);
        }        

        setSearchTerm(term);

        axios.get(`http://localhost:3000/posts/search?q=${searchTerm}`).then(response => {
          if (Array.isArray(response.data)) {
            setPosts(response.data);
          } else {
            console.error('API response is not an array:', response.data);
          }
        }).catch(error => {
          console.error('Error searching posts:', error);
        });

      }, [term]);


    return (
        <SearchPostsContainer>
          <Header />
          <SearchPostsContent className="content-container">
          
            <SearchBar/>
            <SubjectSearchList subjectList={subjects}/>
            <PostListTitle>
              Resultados de "{searchTerm}"
            </PostListTitle>
            {posts.length > 0 ?(
              <PostList postList={posts} />
            ):(
              <SearchAlertContainer className="content-container">
                <SearchAlertTilteContainer>
                  <FontAwesomeIcon icon={faInfoCircle}/> 
                  <SearchAlertTilte>Hmm... Não encontramos nada por aqui</SearchAlertTilte>
                </SearchAlertTilteContainer>
                <div>
                  <p>Ops! Não encontramos nenhum post com o texto "{searchTerm}".</p>
                  <p>Que tal tentar outra palavra-chave ou verificar se está tudo escrito corretamente?</p>
                </div>
              </SearchAlertContainer>
            )}
            
            
          </SearchPostsContent>
          <Footer/>
        </SearchPostsContainer>
    )

};

export default SearchPosts;
