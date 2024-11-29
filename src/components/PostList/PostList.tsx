import Post from "../Post/Post";
import {
    PostListContainer
} from "./PostListStyle";

const PostList = () => {
    return (
        <PostListContainer className="content-container">
           <Post 
            id="1" 
            coverImage="https://www.s4d4c.eu/wp-content/uploads/2020/12/geography-600x400.jpg" 
            subjects={["Geografia","Matemática"]} 
            title="O que é latitude e longitude ?"
            />
        </PostListContainer>
    );
};

export default PostList;