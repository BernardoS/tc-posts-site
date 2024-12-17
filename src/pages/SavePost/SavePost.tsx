import { useParams } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import { FormAdditionalGroup, FormFooter, FormGroup, FormInput, FormLabel, FormSeparator, FormTextArea, SavePostContainer, SavePostContent, SavePostForm, SavePostTitle } from "./SavePostStyle";
import { useEffect, useState } from "react";
import axios from "axios";
import { PrimaryButton, SecondaryButton } from "../../components/Buttons/ButtonsStyles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSave, faTrash } from "@fortawesome/free-solid-svg-icons";

const SavePost = () => {

    const { id } = useParams();
    const [isNew, setIsNew] = useState(true);
    const [postData, setPostData] = useState();

    useEffect(() => {

        if (id == null || id == undefined || id == "") {
            setIsNew(true);
        }

        if (id != null) {
            axios.get(`http://localhost:3000/posts/${id}`).then(response => {

                setPostData(response.data);

                if (postData != null) {
                    setIsNew(false);
                }
            }).catch(error => {
                console.error('Error fetching post:', error);
                setIsNew(true);
            });
        }

    }, [])

    return (
        <SavePostContainer>
            <Header />
            <SavePostContent className="content-container">
                <SavePostTitle>
                    {isNew ? <h1>Novo post</h1> : <h1> Editar post</h1>}
                </SavePostTitle>
                <SavePostForm>
                    <FormGroup>
                        <FormLabel>
                            Título
                        </FormLabel>
                        <FormInput placeholder="Digite aqui o título do post. Ex.: “Ligações covalentes, Coordenadas geográficas etc.”" id="title" name="title" type="text" />

                    </FormGroup>
                    <FormGroup>
                        <FormLabel htmlFor="description">
                            Descrição
                        </FormLabel>
                        <FormTextArea placeholder="Digite aqui uma breve descrição do seu post para ajudar o leitor a saber o assunto do seu artigo" id="description" name="description" rows={4} cols={50} />
                    </FormGroup>

                    <FormGroup>
                        <FormLabel>
                            Conteúdo
                        </FormLabel>
                        <FormTextArea placeholder="Digite aqui o conteúdo completo do seu artigo" id="content" name="content" rows={25} cols={50} />
                    </FormGroup>

                    <FormAdditionalGroup>
                        <FormGroup className="small-input">
                            <FormLabel>
                                Autor
                            </FormLabel>
                            <FormInput  id="author" name="author" type="text" />
                        </FormGroup>

                    </FormAdditionalGroup>

                    <FormSeparator/>

                    <FormFooter>
                       {isNew && (
                            <PrimaryButton>
                            <FontAwesomeIcon icon={faTrash}/>
                                Apagar
                            </PrimaryButton>
                       )}
                        <SecondaryButton>
                            <FontAwesomeIcon icon={faSave}/>
                            Salvar
                        </SecondaryButton>
                    </FormFooter>


                </SavePostForm>
            </SavePostContent>
            <Footer />
        </SavePostContainer>
    );
}

export default SavePost;