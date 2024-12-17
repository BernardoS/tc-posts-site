import { useEffect, useState } from "react";
import Post from "../Post/Post";
import {
    PostListContainer
} from "./PostListStyle";

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

interface PostCardProps {
    postList: iPost[]
}

const PostList: React.FC<PostCardProps> = ({postList}) => {

    useEffect(()=>{
       setPosts(postList);
    },[postList])
     
    const [posts, setPosts] = useState<iPost[]>([]);

    return (
        <PostListContainer className="content-container">
           {posts.map((p)=>(
                <Post 
                    key = {p._id}
                    id={p._id} 
                    coverImage={"https://www.s4d4c.eu/wp-content/uploads/2020/12/geography-600x400.jpg"}
                    subjects={["Geografia","Matemática"]} 
                    title={p.title}
                />
           ))}
        </PostListContainer>
    );
};

export default PostList;