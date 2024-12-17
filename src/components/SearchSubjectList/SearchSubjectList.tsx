import { SubjectButton, SubjectList } from "./SearchSubjectListStyle";
import { useNavigate } from "react-router-dom";

interface SubjectListProps {
    subjectList: string[]; // Lista de assuntos passada como props
}

const SubjectSearchList:React.FC<SubjectListProps>  = ( { subjectList } ) =>{


    const navigate = useNavigate();

    const handleSubjectClick = (subject:string) => {
        if(subject){
            navigate(`/search?term=${encodeURIComponent(subject)}`);
        }
    };

    return (
    <SubjectList className="content-container">
        {
            subjectList.map((subject, index) => (
            <SubjectButton 
                onClick={() => handleSubjectClick(subject)}
                key={index} 
                className="subject-button">
                {subject}
            </SubjectButton>))
        }
    </SubjectList>
    )   
}

export default SubjectSearchList;