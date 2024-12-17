import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import {
    ManagePostsContainer,
    ManagePostsContent,
    ManagePostsTitle,
    SearchAdminInputContainer,
    SearchButton,
    SearchInputText
} from "./ManagePostsStyle";
import { faInfoCircle, faPlus, faSearch } from "@fortawesome/free-solid-svg-icons";
import { SecondaryButton } from "../../components/Buttons/ButtonsStyles";
import { useEffect, useState } from "react";
import axios from "axios";
import PostList from "../../components/PostList/PostList";
import { SearchAlertContainer, SearchAlertTilte, SearchAlertTilteContainer } from "../SearchPosts/SearchPostsStyle";
import { SubjectButton, SubjectList } from "../../components/SearchSubjectList/SearchSubjectListStyle";
import { useNavigate } from "react-router-dom";


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

const ManagePosts = () => {


    const [posts, setPosts] = useState<iPost[]>([]);
    const [searchTerm, setSearchTerm] = useState<string>('');
    const navigate = useNavigate();

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


    const handleInputSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
        const term = event.target.value;
        setSearchTerm(term);
    }


    const handleSearch = () => {

        axios.get(`http://localhost:3000/posts/search?q=${searchTerm}`).then(response => {
            if (Array.isArray(response.data)) {
                setPosts(response.data);
            } else {
                console.error('API response is not an array:', response.data);
            }
        }).catch(error => {
            console.error('Error searching posts:', error);
        });
    };

    const handleSubjectClick = (subject:string) =>{

        setSearchTerm(subject);

        axios.get(`http://localhost:3000/posts/search?q=${searchTerm}`).then(response => {
            if (Array.isArray(response.data)) {
                setPosts(response.data);
            } else {
                console.error('API response is not an array:', response.data);
            }
        }).catch(error => {
            console.error('Error searching posts:', error);
        });
    }



    return (
        <ManagePostsContainer>
            <Header />
            <ManagePostsContent className="content-container" >
                <ManagePostsTitle>
                    <h1 className="main-title">Área do professor</h1>
                    <SecondaryButton
                     type="button"
                     onClick={() => navigate("/create")}
                     >
                        <FontAwesomeIcon icon={faPlus} />
                        Adicionar post
                    </SecondaryButton>
                </ManagePostsTitle>
                
                <SearchAdminInputContainer>
                        <SearchInputText 
                            value={searchTerm}
                            onChange={() => handleInputSearch} 
                            placeholder="O que você deseja encontrar ?" 
                            id="pesquisa" 
                            name="pesquisa" 
                            type="text"/>
                
                        <SearchButton 
                            type="button"
                            onClick={handleSearch} >

                            <FontAwesomeIcon 
                                icon={faSearch}/>
                        </SearchButton>
                
                </SearchAdminInputContainer>
                
                <SubjectList className="content-container">
                        {
                            subjects.map((subject, index) => (
                            <SubjectButton 
                                onClick={() => handleSubjectClick(subject)}
                                key={index} 
                                className="subject-button">
                                {subject}
                            </SubjectButton>))
                        }
                </SubjectList>


                <ManagePostsTitle>
                    <h1>Todos os posts</h1>
                </ManagePostsTitle>
                {posts.length > 0 ? (
                    <PostList postList={posts} />
                ) : (
                    <SearchAlertContainer className="content-container">
                        <SearchAlertTilteContainer>
                            <FontAwesomeIcon icon={faInfoCircle} />
                            <SearchAlertTilte>Hmm... Não encontramos nada por aqui</SearchAlertTilte>
                        </SearchAlertTilteContainer>
                        {
                            searchTerm != "" &&(
                                <div>
                                    <p>Ops! Não encontramos nenhum post com o texto "{searchTerm}".</p>
                                    <p>Que tal tentar outra palavra-chave ou verificar se está tudo escrito corretamente?</p>
                                </div>
                            )
                        }
                        {(searchTerm == "" && posts.length == 0) &&(
                            <div>
                                <p>Ops! Não encontramos nenhum post cadastrado.</p>
                                <p>Você pode começar a criar novos posts, clicando no botão "Adicionar post"</p>
                            </div>
                        )};
                    </SearchAlertContainer>
                )}
            </ManagePostsContent>

            <Footer />
        </ManagePostsContainer>
    )
}


export default ManagePosts;