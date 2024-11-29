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
import "../../global.css";
import SearchBar from "../../components/SearchBar/SearchBar";
import SubjectSearchList from "../../components/SearchSubjectList/SearchSubjectList";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faList, faTableCells } from "@fortawesome/free-solid-svg-icons";
import PostList from "../../components/PostList/PostList";


const HomePage = () => {

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
                    <SearchBar />
                </BannerContent>
            </BannerContainer>
            <SubjectSearchList subjectList={subjects}/>
            <PostListTitleContainer className="content-container">
                <PostListTitle>
                    Posts mais recentes
                </PostListTitle>
                <PostListButtonGroup>
                    <PostListButton className="active" type="button"><FontAwesomeIcon icon={faTableCells}/></PostListButton>
                    <PostListButton type="button"><FontAwesomeIcon icon={faList}/></PostListButton>
                </PostListButtonGroup>
            </PostListTitleContainer>
            <PostList />
        </HomePageContainer>
    )

};

export default HomePage;
