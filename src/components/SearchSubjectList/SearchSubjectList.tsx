import { useSearchContext } from "../../contexts/SearchContext";
import { SubjectButton, SubjectList } from "./SearchSubjectListStyle";
interface SubjectListProps {
    subjectList: string[]; // Lista de assuntos passada como props
}

const SubjectSearchList:React.FC<SubjectListProps>  = ( { subjectList } ) =>{

    const {updateSearchTerm} = useSearchContext();

    const handleSubjectClick = (subject:string) => {
        if(subject){
            updateSearchTerm(subject);
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