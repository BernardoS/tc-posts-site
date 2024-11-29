import React from "react";
import { 
    PostCard, 
    PostCardImage,
    PostCardContent,
    PostCardTitle,
    PostCardSubjects
 } from "./PostStyle";


interface PostCardProps {
  id: string; // ID do post
  title: string; // Título do post
  subjects: string[]; // Matérias relacionadas
  coverImage: string; // URL da imagem de capa
}

const Post: React.FC<PostCardProps> = ({ id, title, subjects, coverImage }) => {
  return (
    <PostCard id={id} >
      <PostCardImage src={coverImage} alt={title} className="post-card-image" />
      <PostCardContent>
        <PostCardTitle className="post-card-title">{title}</PostCardTitle>
        <PostCardSubjects className="post-card-subjects">{subjects.join(" • ")}</PostCardSubjects>
      </PostCardContent>
    </PostCard>
  );
};

export default Post;
