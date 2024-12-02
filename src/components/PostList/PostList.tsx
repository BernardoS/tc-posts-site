import { useEffect, useState } from "react";
import Post from "../Post/Post";
import {
    PostListContainer
} from "./PostListStyle";

interface iPost {
    id: string; // ID do post
    title: string; // Título do post
    subjects: string[]; // Matérias relacionadas
    coverImage: string; // URL da imagem de capa
  }

const PostList = () => {

    const [posts, setPosts] = useState<iPost[]>([]);

    useEffect(()=>{
        //Substituir new posts pela chamada a api e listagem dos posts
        const newPost = {
            id:"1",
            subjects : ["Geografia","Matemática"],
            title : "O que é latitude e longitude ?",
            coverImage : "https://www.s4d4c.eu/wp-content/uploads/2020/12/geography-600x400.jpg"
        };

        const postList = [...posts, newPost];
        
        setPosts(postList);
    },[])


    return (
        <PostListContainer className="content-container">
           {posts.map((p)=>(
                <Post 
                    id={p.id} 
                    coverImage={p.coverImage}
                    subjects={p.subjects} 
                    title={p.title}
                />
           ))}
        </PostListContainer>
    );
};

export default PostList;